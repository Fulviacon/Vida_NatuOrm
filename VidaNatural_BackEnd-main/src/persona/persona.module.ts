import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from 'src/entities/persona.entity';
import { PersonaService } from './persona.service';
import { Mensaje } from 'src/entities/mensajes.entity';
import { Donaciones } from 'src/entities/donaciones.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Persona,Donaciones,Mensaje])],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}

