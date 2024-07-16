import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, ParseIntPipe, HttpException } from '@nestjs/common';
import { PersonaDTO } from './persona.dto';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  // Trae todas las personas
  @Get()
  @HttpCode(200)
  async getPersonas(): Promise<Persona[]> {
    return await this.personaService.getPersona();
  }

  // Trae una persona por id
  @Get(':id')
  async getPersonaById(@Param('id', new ParseIntPipe()) id: number): Promise<Persona> {
    const persona = await this.personaService.getByIdPersona(id);
    if (persona) {
      return persona;
    } else {
      throw new HttpException('Persona no encontrada', HttpStatus.NOT_FOUND);
    }
  }

  // Crea una persona
  @Post()
  @HttpCode(201)
  async crearPersona(@Body() personaDto: PersonaDTO): Promise<Persona> {
    return await this.personaService.crearPersona(personaDto);
  }

  // Borra una persona
  @Delete(':id')
  @HttpCode(200)
  async deletePersonaByID(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<string> {
    await this.personaService.deletePersona(id);
    return 'Persona eliminada correctamente';
  }

  // Modifica datos existentes
  @Put(':id')
  async updatePersonById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() personaDto: PersonaDTO): Promise<Persona> {
    return await this.personaService.updatePersona(id, personaDto);
  }
}
