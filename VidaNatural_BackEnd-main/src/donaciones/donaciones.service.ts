import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donaciones } from 'src/entities/donaciones.entity';

@Injectable()
export class DonacionesService {
  constructor(
    @InjectRepository(Donaciones)
    private readonly donacionesRepository: Repository<Donaciones>
  ) {}
}
