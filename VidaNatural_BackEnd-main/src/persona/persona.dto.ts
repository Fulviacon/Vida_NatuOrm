import { Injectable, NotFoundException, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsString, IsEmail, IsOptional } from 'class-validator';
import { Persona } from 'src/entities/persona.entity';
import { Repository, FindOneOptions } from 'typeorm';

export class PersonaDto {
  //readonly nombre:string }Necesitamos que el frontEnd envíe la info al Back
  //este contrato se representa con una DTO.
  @IsString()
  nombreApellido: string;

  @IsEmail()
  email: string;

  @IsOptional()
  //@IsInt()
  id?: number;
}

@Injectable()
export class PersonaService {
  private personas: Persona[] = [];
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>
  ) { }

  public async getAll(): Promise<Persona[]> {
    return await this.personasRepository.find();
  }

  public async getById(id: number): Promise<Persona> {
    try {
      const criterio: FindOneOptions = { where: { idPersona: id } };
      const persona: Persona = await this.personasRepository.findOne(criterio);
      if (persona) {
        return persona;
      } else {
        throw new NotFoundException('Debe cargar los datos');
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Se produjo un error al intentar obtener los datos: ' + error.message,
      }, HttpStatus.NOT_FOUND);
    }
  }

  public async addPersona(personaDTO: PersonaDto): Promise<Persona> {
    try {
      const persona: Persona = await this.personasRepository.save(new Persona(personaDTO.id, personaDTO.nombreApellido, personaDTO.email));
      if (persona) {
        return persona;
      } else {
        throw new BadRequestException('Los datos no son válidos');
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Se produjo un error al crear la persona: ' + error.message,
      }, HttpStatus.NOT_FOUND);
    }
  }
}


