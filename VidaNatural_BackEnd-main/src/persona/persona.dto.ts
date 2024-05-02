import { IsString, IsEmail } from 'class-validator';


export class PersonaDTO {
  //readonly nombre:string }Necesitamos que el frontEnd envíe la info al Back
  //este contrato se representa con una DTO.
  //el id no se coloca!!!
  @IsString()
  NombreApellido: string;

  @IsEmail()
  Email: string;

//solo se declaran las relaciones que no retornan [] en la misma entidad
 
}



