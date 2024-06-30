import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Persona } from './persona.entity';

@Entity('mensaje')
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    mensaje: string;

    @ManyToOne(() => Persona, persona => persona.mensaje)
    @JoinColumn({ name: 'idPersona' })
    persona: Persona;

    

    
    constructor(mensaje: string,persona:Persona) {
        this.mensaje = mensaje;
        this.persona=persona
    }
}
