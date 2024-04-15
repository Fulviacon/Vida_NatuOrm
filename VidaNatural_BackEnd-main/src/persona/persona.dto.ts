import { IsString, IsEmail, IsOptional } from 'class-validator';

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



