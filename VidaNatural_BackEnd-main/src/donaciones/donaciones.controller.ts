import { Controller, Put, Body } from '@nestjs/common';
import { DonacionesService } from './donaciones.service';
import { DonacionesDto } from './donaciones.dto';
import { Donaciones } from 'src/entities/donaciones.entity';

@Controller('donaciones')
export class DonacionesController {
  constructor(private readonly donacionesService: DonacionesService) {}

  @Put()
  async actualizarDonaciones(@Body() donaciones: DonacionesDto): Promise<Donaciones> {
    return await this.donacionesService.updateDonaciones(donaciones);

  
  }
}

  