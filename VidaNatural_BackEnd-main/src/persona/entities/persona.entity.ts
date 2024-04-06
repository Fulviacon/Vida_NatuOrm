import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Persona')
export class Persona {
    @PrimaryColumn()
    private idpersona: number;
    @Column()
    private NombreApellido: string;
    @Column()
    private Donacion: number;
    @Column()
    private Mail: string;
    @Column()
    private Mensaje: string;

    constructor(id: number, NombreApellido: string, Donacion: number, Mail: string, Mensaje: string) {
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.Donacion = Donacion;
        this.Mail = Mail;
        this.Mensaje = Mensaje;
    }

    public getIdpersona(): number { return this.idpersona; }
    public setIdpersona(idpersona: number): void { this.idpersona = idpersona; }

    public getNombreApellido(): string { return this.NombreApellido; }
    public setNombreApellido(NombreApellido:string):void { this.NombreApellido = NombreApellido}
    public getDonacion(): number { return this.Donacion; }
    public setDonacion(Donacion: number): void { this.Donacion = Donacion; }
    public getMail(): string { return this.Mail; }
    public setMail(Mail: string): void { this.Mail = Mail; }
    public getMensaje(): string { return this.Mensaje; }
    public setMensaje(Mensaje: string): void { this.Mensaje = Mensaje; }
}