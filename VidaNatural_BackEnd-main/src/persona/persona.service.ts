//import { Injectable, NotFoundException, BadRequestException, ConflictException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Persona } from 'src/entities/persona.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';


@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>
  ) {}
  
  public async getAll(): Promise<Persona[]>{// este mét permite obtener todos los registros
    return await this.personasRepository.find();//de una tabla
  }
  
  public async getById(id : number) : Promise<Persona> {
    //este mét obtienele registro específico
    try{  
    const criterio : FindOneOptions = { where: { idPersona: id } }// de una tabla
    let persona : Persona = await this.personasRepository.findOne( criterio );
    if (persona)
        return persona;
  throw new Error('la persona no se encuentra');
}catch (error) {
  throw new HttpException({status:HttpStatus.NOT_FOUND,
      error: 'Error en la búsqueda de persona ' + id + ' : ' + error.message,
    },
    HttpStatus.NOT_FOUND,
  );
}
}
}
  //async getPersonas(): Promise<PersonaDto[]> {
   // try {
    //  return await this.personaRepository.find();
    //} catch (error) {
    //  throw new NotFoundException(`No se puede hacer la consulta`);
    //}
  

  // Otras funciones del servicio como getPersonaById, createPersona, deletePersonaByID, updatePersonById, etc.
//}





//import {
  
//   NotFoundException,
//   BadRequestException,
//   ConflictException,
// } from "@nestjs/common";
// import { PersonaDto } from "./persona.dto";

// const BASE_URL = "http://localhost:3030/personas/";

// @Injectable()
// //export class PersonaService {
//   async getPersonas(): Promise<PersonaDto[]> {
//     try {
//       const response = await fetch(BASE_URL);
//       const parsed = await response.json();
//       return parsed;
//     } catch (error) {
//       throw new NotFoundException(`No se puede hacer la consulta`);
//     }
//   }

//   private async setId(): Promise<number> {
//     const personas = await this.getPersonas();
//     const id = personas.pop().id + 1;
//     return Number(id);
//   }

//   async getPersonaById(id: number): Promise<PersonaDto[]> {
//     try {
//       const response = await fetch(BASE_URL + id);

//       if (response.status === 404) {
//         throw new NotFoundException(`Persona con ID ${id} no encontrado`);
//       }

//       const parsed = await response.json();
//       if (Object.keys(parsed).length) return parsed;
//     } catch (error) {
//       throw new NotFoundException(`Persona con ID: ${id} no  encontrado`);
//     }
//   }
//   async createPersona(persona: PersonaDto) {
//     try {
//       // Validar si los campos necesarios están presentes y son válidos
//       if (
//         !persona.nombreApellido ||
//         !persona.email ||
//         !persona.donacion ||
//         !persona.mensaje
//       ) {
//         throw new BadRequestException("Todos los campos son obligatorios!");
//       }

//       const id = await this.setId();
//       const newPersona = { ...persona, id };
//       const response = await fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPersona),
//       });

//       if (response.status === 201) {
//         return { message: "Persona creada correctamente" };
//       } else if (response.status === 404) {
//         throw new BadRequestException("Solicitud incorrecta al crear persona");
//       } else if (response.status === 409) {
//         throw new ConflictException("Ya existe una persona con este ID");
//       } else {
//         throw new Error("Error desconocido al crear persona");
//       }
//     } catch (error) {
//       throw error;
//     }
//   }
//   async deletePersonaByID(id: number): Promise<any> {
//     const response = await fetch(BASE_URL + id, {
//       method: "DELETE",
//     });
//     if (response.status === 404) {
//       throw new NotFoundException(`Persona con ID ${id} no encontrado`);
//     }
//     if (response.status === 200) {
//       return { message: "Se ha eliminado correctamente" };
//     }
//     const parsed = await response.json();

//     return parsed;
//   }
//   async updatePersonById(id: number, body: PersonaDto): Promise<any> {
//     try {
//       const isPerson = await this.getPersonaById(id);
//       if (!Object.keys(isPerson).length) return;

//       const updatePersona = { ...body, id };

//       const response = await fetch(BASE_URL + id, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatePersona),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update person with ID ${id}`);
//       }

//       const parsed = await response.json();
//       return parsed;
//     } catch (error) {
//       throw error;
//     }
//   }
// }
