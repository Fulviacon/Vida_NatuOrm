import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Mensaje } from './mensajes.entity';
import { Donaciones } from './donaciones.entity';

@Entity('persona')
export class Persona {
    @PrimaryGeneratedColumn()
    idPersona: number;

    @Column()
    NombreApellido: string;
    
    @Column()
    Email: string;

    @OneToMany(() => Mensaje, mensaje => mensaje.persona)
    mensaje: Mensaje[];

    @OneToMany(() => Donaciones, donacion => donacion.persona)
    donaciones: Donaciones[];

    //en el constructor no va el id
    constructor(NombreApellido: string, Email: string) {
        this.NombreApellido = NombreApellido;
        this.Email = Email;
    }
}
