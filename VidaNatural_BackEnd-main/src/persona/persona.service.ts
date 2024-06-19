import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, FindOptionsUtils, Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { PersonaDTO } from './persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PersonaService {
  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) { }

  async crearPersona(datos: PersonaDTO): Promise<Persona> {
    const existePersona = await this.personaRepository.findOne({ where: { email: datos.email } });
    if (existePersona) {
      throw new HttpException(`La persona ${datos.nombreApellido} ya existe en la base de datos`, HttpStatus.CONFLICT);
    }
    try {
      let persona: Persona;
      if (datos.nombreApellido && datos.email) {
        persona = new Persona(datos.nombreApellido, datos.email, datos.password)
        persona = await this.personaRepository.save(persona);//se accede al metodo  que trae el repository de TypeOrm
        return persona;
      } else {
        throw new NotFoundException(`Algunos de los campos no está completo o falta algún caracter. Compruebe los datos ingresados e intente nuevamente`);
      }

    } catch (error) {
      throw new HttpException(`No se puedo crear la persona ${datos.nombreApellido}, intente nuevamente en unos segundos`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
//trae todas las personas
  async getPersona(): Promise<Persona[]> {
    try {
      let criterio: FindManyOptions = { relations: ['mensaje', 'donaciones'] };
      const persona: Persona[] = await this.personaRepository.find(criterio);//se accede al metodo  que trae el repository de TypeOrm
      if (persona) return persona;
      throw new Error(`El fichero Persona aún está vacío. Por favor, primero ingrese una nueva carga de datos`);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Se produjo un error al intentar obtener las personas. Compruebe los datos ingresados e intente nuevamente`
      }, HttpStatus.NOT_FOUND);
    }
  }


  async getByIdPersona(id: number): Promise<Persona> {
    try {
      const criterio: FindOneOptions = { relations: ['mensaje', 'donaciones'], where: { idPersona: id } };
      const persona = await this.personaRepository.findOne(criterio);//se accede al metodo  que trae el repository de TypeOrm
      return persona;
    } catch (error) {
      throw new Error(`Error al buscar la persona con id ${id}.`);
    }
  }

  async findUser(email: string): Promise<Persona> {
    const criterio: FindOneOptions = {where: {Email: email}};
    const persona = await this.personaRepository.findOne (criterio);
    return persona;
  }
  async updatePersona(id: number, datos: PersonaDTO): Promise<Persona> {
    try {
      let persona = await this.getByIdPersona(id);
      if (!persona) {
        throw new HttpException(`No se encontró la persona con ID ${id}`,
          HttpStatus.NOT_FOUND);
      }

      // Actualizar campos de la persona
      persona.nombreApellido = datos.nombreApellido;
      persona.email = datos.email;

      // Guardar los cambios en la persona
      return await this.personaRepository.save(persona);//se accede al metodo  que trae el repository de TypeOrm


    } catch (error) {

      throw new HttpException(`Error al actualizar la persona con ID ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deletePersona(id: number, datos: PersonaDTO): Promise<string> {
    try {
      const removePersona: Persona = await this.getByIdPersona(id);
      if (!removePersona) {
        return `La persona que desea eliminar no existe en la base de datos`
      } else {
        await this.personaRepository.remove(removePersona);//se accede al metodo  que trae el repository de TypeOrm
        return `La persona ${removePersona.nombreApellido} ha sido eliminado correctamente de la base de datos`
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Error al intentar eliminar la persona  ${datos.nombreApellido} en la base de datos; ${error}`
      },
        HttpStatus.NOT_FOUND);
    }
  }
}
//metodos de TypeOrm Repository: save, create, remove, update entre otros. estos son los que utilizamos



