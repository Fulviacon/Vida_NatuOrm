import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Persona')
export class Persona {
    @PrimaryGeneratedColumn()
    private idpersona: number;
    @Column()
    private NombreApellido: string;
    
    @Column()
    private Email: string;
    

    constructor(id: number, NombreApellido: string, Email: string) {
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.Email = Email;
        
    }

    public getIdpersona(): number { return this.idpersona; }
    public setIdpersona(idpersona: number): void { this.idpersona = idpersona; }

    public getNombreApellido(): string { return this.NombreApellido; }
    public setNombreApellido(NombreApellido:string):void { this.NombreApellido = NombreApellido}
    
    public getMail(): string { return this.Email }
    public setMail(Email: string): void { this.Email = Email }
    
}