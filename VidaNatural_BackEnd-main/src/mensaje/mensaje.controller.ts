import { Body, Controller, Put } from '@nestjs/common';
import { MensajeService } from './mensaje.service';
import { MensajeDto } from './mensaje.dto';
import { Mensaje } from 'src/entities/mensajes.entity';

@Controller('mensaje')
export class MensajeController {
constructor(private readonly mensajeService: MensajeService) {}  

  @Put()
  async actualizarMensaje(@Body() mensaje: MensajeDto): Promise<Mensaje> {
    return await this.mensajeService.updateMensaje(mensaje);
  }

}