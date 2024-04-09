import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Persona')
export class Persona {
    @PrimaryColumn()
    private idpersona: number;
    @Column()
    private NombreApellido: string;
    
    @Column()
    private Mail: string;
    

    constructor(id: number, NombreApellido: string, Mail: string) {
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.idpersona = id;
        this.NombreApellido = NombreApellido;
        this.Mail = Mail;
        
    }

    public getIdpersona(): number { return this.idpersona; }
    public setIdpersona(idpersona: number): void { this.idpersona = idpersona; }

    public getNombreApellido(): string { return this.NombreApellido; }
    public setNombreApellido(NombreApellido:string):void { this.NombreApellido = NombreApellido}
    
    public getMail(): string { return this.Mail; }
    public setMail(Mail: string): void { this.Mail = Mail; }
    
}