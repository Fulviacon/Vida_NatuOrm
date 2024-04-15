import { Injectable, NotFoundException, BadRequestException, ConflictException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PersonaDto } from "./persona.dto";

@Injectable()
export class PersonaService {
  updatePersona(persona: PersonaDto): Persona | PromiseLike<Persona> {
    throw new Error('Method not implemented.');
  }
  updatePersonById(id: number, PersonaDto: PersonaDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deletePersonaByID(id: number) {
    throw new Error('Method not implemented.');
  }
  getPersonaById(id: number): any {
    throw new Error('Method not implemented.');
  }
  getPersonas(): PersonaDto[] | PromiseLike<PersonaDto[]> {
    throw new Error('Method not implemented.');
  }
  private personas: Persona[] = [];
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>
  ) {}
  
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
        throw new NotFoundException('La persona no fue encontrada');
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Se produjo un error al obtener la persona: ' + error.message,
      }, HttpStatus.NOT_FOUND);
    }
  }

  public async addPersona(personaDTO: PersonaDto): Promise<Persona> {
    try {
      const persona: Persona = await this.personasRepository.save(new Persona(
        personaDTO.id, personaDTO.nombreApellido, personaDTO.email
      ));
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


