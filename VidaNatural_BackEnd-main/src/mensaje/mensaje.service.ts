import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje } from 'src/entities/mensajes.entity';


@Injectable()
export class MensajeService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly donacionesRepository: Repository<Mensaje>
  ) {}
}

