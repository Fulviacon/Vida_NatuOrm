import { Body, Controller, Put } from '@nestjs/common';

@Controller('persona')
export class PersonaController {
constructor(private readonly personaService: PersonaService) {}  

  @Put()
  async actualizarPersona(@Body() persona: PersonaDto): Promise<Persona> {
    return await this.personaService.updatePersona(persona);
  }

}











//import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonaDto } from './persona.dto';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//@Controller('personas')
//export class PersonaController {
//  constructor(
 //   private readonly personaService: PersonaService,
//    @InjectRepository(Persona)
//    private readonly personaRepository: Repository<Persona>,
//  ) {}

//  @Get()
//  async getPersonas(): Promise<Persona[]> {
 //   return await this.personaRepository.find();
 // }

 //@Get(':id')
 // async getPersonaById(@Param('id', ParseIntPipe) id: number): Promise<Persona> {
 //   return await this.personaService.getPersonaById(id);

  //@Post()
 // async addPersona(@Body() personaDto: PersonaDto): Promise<Persona> {
 //   return await this.personaRepository.save(personaDto);
 // }

 // @Delete(':id')
 // async deletePersonaByID(@Param('id', ParseIntPipe) id: number): Promise<void> {
 //   await this.personaRepository.delete(id);
 // }

  //@Put(':id')
  //async updatePersonById(
  //  @Param('id', ParseIntPipe) id: number,
  //  @Body() personaDto: PersonaDto,
  //): Promise<void> {
   // await this.personaRepository.update(id, PersonaDto);
  //}
//}
