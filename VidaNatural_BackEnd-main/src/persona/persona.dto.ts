export class PersonaDTO {
  nombreApellido: string;
  email: string;
  password: string;
}


/*import { IsString, IsEmail } from 'class-validator';


export class PersonaDTO {
  //readonly nombre:string }Necesitamos que el frontEnd envíe la info al Back
  //este contrato se representa con una DTO.
  //el id no se coloca!!!
  @IsString()
  nombreApellido: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

//solo se declaran las relaciones que no retornan [] en la misma entidad
 
}*/



