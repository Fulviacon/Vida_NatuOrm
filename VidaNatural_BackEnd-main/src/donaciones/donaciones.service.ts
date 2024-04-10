import { HttpException, HttpStatus, Injectable } from '@nestjs/common'; //Se importan los módulos necesarios de Nest.js y TypeORM.
import { InjectRepository } from '@nestjs/typeorm';//
import { FindOneOptions, Repository } from 'typeorm';
import { Donaciones } from 'src/entities/donaciones.entity';
import { DonacionesDto } from './donaciones.dto';

@Injectable()//Se define un servicio llamado DonacionesService con la anotación 
//@Injectable() que indica que esta clase es un servicio inyectable.
export class DonacionesService {
  private donaciones: Donaciones[]=[];//Se utiliza @InjectRepository(Donaciones) para inyectar el repositorio de TypeORM 
  //para la entidad Donaciones en el constructor del servicio.
  constructor(
    @InjectRepository(Donaciones)//Se declara un arreglo donaciones como 
    //propiedad privada de la clase DonacionesService.
    private readonly donacionesRepository: Repository<Donaciones>
  ) {}
//En el método getAll(), se utiliza el método find() del repositorio donacionesRepository para obtener todas las donaciones de la base de datos 
//y se almacenan en la variable donaciones
  public async getAll(): Promise<Donaciones[]>{
    let donaciones: Donaciones[]= await this.donacionesRepository.find();
    return this.donaciones;
  }
  public async getById(id: number) : Promise<Donaciones> {//este mét obtiene el registro específico de una tabla.
    try { 
    const criterio : FindOneOptions = { where: { idDonaciones: id } };
    //Dentro del bloque try, se define un objeto criterio que contiene las opciones de búsqueda para la consulta a la base de datos.
    let donaciones : Donaciones = await this.donacionesRepository.findOne( criterio );
    if (donaciones)//Si no se encuentra ninguna donación, se lanza un error utilizando throw new Error()
        return donaciones;// debería declarar null.
    
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Error en la búsqueda del mensaje ' + id + ' : ' + error.message,
        },
        HttpStatus.NOT_FOUND,
      );
}
}
public async addDonaciones(donacionesDTO: DonacionesDto): Promise<Donaciones> {
  try {
    const donacion: Donaciones = await this.donacionesRepository.save(new Donaciones(
      donacionesDTO.id,
      donacionesDTO.montoDonado,
      donacionesDTO.fechaDonacion
    ));
    if (donacion) {
      return donacion;
    } else {
  throw new Error('No se encuentran Donaciones');
}
} catch (error) {
  throw new HttpException(
    {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Error al procesar la donación: ' + error.message,
    },
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
}
}
}
