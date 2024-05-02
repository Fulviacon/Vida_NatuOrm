import { IsInt, IsDate, IsOptional, IsNumber, IsString } from 'class-validator';
import { Persona } from 'src/entities/persona.entity';

export class DonacionesDto {
  @IsNumber()
  monto: number;

  @IsString()
  fechaDonacion: Date;

persona:Persona;
}
