import { Test, TestingModule } from '@nestjs/testing';
import { DonacionesService } from './donaciones.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';





describe('DonacionesService', () => {
  let service: DonacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonacionesService],
    }).compile();

    service = module.get<DonacionesService>(DonacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
/* El propósito principal de este archivo es proporcionar un conjunto de pruebas 
que verifiquen el comportamiento y la funcionalidad del servicio DonacionesService. Estas pruebas aseguran que:
El servicio se comporte como se espera en diversas condiciones.
Los métodos del servicio devuelvan los resultados esperados.
Las dependencias del servicio se manejen correctamente.
Cualquier cambio en el código que introduzca errores sea detectado de manera temprana.*/
