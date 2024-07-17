import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { PersonaDTO } from './persona.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonaService {
  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) {}

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
       }
    } catch (error) {
      throw new HttpException(`No se pudo crear la persona ${datos.nombreApellido}, intente nuevamente en unos segundos`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPersona(): Promise<Persona[]> {
    try {
      const criterio: FindManyOptions<Persona> = { relations: ['mensaje', 'donaciones'] };
      const personas:Persona[] = await this.personaRepository.find(criterio);
      if (personas.length === 0) {
        throw new NotFoundException('No se encontraron personas');
      }
      return personas;
    } catch (error) {
      throw new HttpException(`Se produjo un error al intentar obtener las personas. Compruebe los datos ingresados e intente nuevamente`, HttpStatus.NOT_FOUND);
    }
  }

  async getByIdPersona(id: number): Promise<Persona> {
    try {
      const criterio: FindOneOptions = { relations: ['mensaje', 'donaciones'], where: { idPersona: id } };
      const persona = await this.personaRepository.findOne(criterio);
      if (!persona) {
        throw new NotFoundException(`No se encontró la persona con ID ${id}`);
      }
      return persona;
    } catch (error) {
      throw new HttpException(`Error al buscar la persona con id ${id}.`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findUser(email: string): Promise<Persona> {
    const criterio: FindOneOptions = { where: { email } };
    const persona = await this.personaRepository.findOne(criterio);
    if (!persona) {
      throw new NotFoundException(`No se encontró la persona con email ${email}`);
    }
    return persona;
  }

  async updatePersona(id: number, datos: PersonaDTO): Promise<Persona> {
    try {
      const persona = await this.getByIdPersona(id);
      if (!persona) {
        throw new NotFoundException(`No se encontró la persona con ID ${id}`);
      }

      // Actualizar campos de la persona
      persona.nombreApellido = datos.nombreApellido;
      persona.email = datos.email;
      persona.password = datos.password;

      // Guardar los cambios en la persona
      return await this.personaRepository.save(persona);
    } catch (error) {
      throw new HttpException(`Error al actualizar la persona con ID ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deletePersona(id: number): Promise<string> {
    try {
      const removePersona:Persona = await this.getByIdPersona(id);
      if (!removePersona) {
        throw new NotFoundException(`La persona que desea eliminar no existe en la base de datos`);
      }
      await this.personaRepository.remove(removePersona);
      return `La persona ${removePersona.nombreApellido} ha sido eliminada correctamente de la base de datos`;
    } catch (error) {
      throw new HttpException(`Error al intentar eliminar la persona con ID ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
