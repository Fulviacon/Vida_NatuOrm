import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode,  HttpStatus,  ParseIntPipe, HttpException,} from '@nestjs/common';
import { PersonaDTO } from './persona.dto';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';


@Controller('persona')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}
  //trae todas las personas
  @Get()
  @HttpCode(200)
  async getPersonas(): Promise<Persona[]> {
    return await this.personaService.getPersona();
  }

//trae una persona por id
  @Get(':id')
  async getPersonaById(@Param('id', new ParseIntPipe()) id: number): Promise<Persona> {
    const persona = await this.personaService.getByIdPersona(id);
    if (persona) return persona;
    
  
}



//crea una persona
  @Post()
  @HttpCode(201)
  async crearPersona(@Body() PersonaDto: PersonaDTO): Promise<Persona> {
    return await this.personaService.crearPersona(PersonaDto);
  }

  //borra una persona

  @Delete(':id')
  @HttpCode(200)
  async deletePersonaByID( @Param( 'id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )  id: number, datos:PersonaDTO ):Promise<string> {
   return await this.personaService.deletePersona(id,datos);
   
  }

  //modifcica datos existentes
  @Put(':id')
  async updatePersonById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
) id: number, @Body() personaDto: PersonaDTO ): Promise<Persona> {
      return await this.personaService.updatePersona(id, personaDto);
    
  }
}

