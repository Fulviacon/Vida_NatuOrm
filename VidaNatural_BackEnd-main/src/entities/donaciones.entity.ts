import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Donaciones')
export class Donaciones {
    @PrimaryColumn()
    private idDonaciones: number;
    @Column()
    private montosDonados: number;
    @Column({type:'datetime', default:() => 'CURRENT_TIMESTAMP'})
    createdAt:Date
    private fechaDonacion: Date;
    
    

    constructor(id: number, MontosDonados: number, FechaDonacion: Date) {
        this.idDonaciones = id;
        this.montosDonados = MontosDonados;
        this.fechaDonacion = FechaDonacion;
        
        
    }

    public getIdDonaciones(): number { return this.idDonaciones; }
    public setIdDonaciones(idpersona: number): void { this.idDonaciones = this.idDonaciones; }

    public getmontosDonados(): number { return this.montosDonados; }
    public setmontosDonados(MontosDonados:number):void { this.montosDonados = MontosDonados}

    public getfechaDonacion(): Date { return this.fechaDonacion; }
    public setfechaDonacion(Donacion: Date): void { this.fechaDonacion = Donacion; }
   
    
}