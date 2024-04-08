import { IsString, IsEmail, IsOptional } from 'class-validator';

export class PersonaDto {
  @IsString()
  nombreApellido: string;

  @IsEmail()
  email: string;

  @IsOptional()
  //@IsInt()
  id?: number;
}


