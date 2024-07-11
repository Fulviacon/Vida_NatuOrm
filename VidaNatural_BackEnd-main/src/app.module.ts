import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaModule } from './persona/persona.module';
import { AppController} from './app.controller';
import { AppService } from './app.service';
import { MensajeModule } from './mensaje/mensaje.module';
import { Persona } from './entities/persona.entity';
import { DonacionesModule } from './donaciones/donaciones.module';
import { Donaciones } from './entities/donaciones.entity';
import { Mensaje } from './entities/mensajes.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

//import { URL } from "url";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'cockroachdb',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        ssl:true,
        entities: [Persona,Donaciones,Mensaje],//__dirname + "/entity/*{.js,.ts}"
      synchronize:false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}





/*const dbUrl = new URL("postgresql://vida_natural_2024:REVEAL_PASSWORD@vida-natural-7555.g8z.gcp-us-east1.cockroachlabs.cloud:26257/vida_natural?sslmode=verify-full");
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      type: "cockroachdb",
      host: "vida-natural-7555.g8z.gcp-us-east1.cockroachlabs.cloud",
      port: 26257 ,
      username: "vida_natural_2024",
      password: "TZs2Ywa_bVv0C7tZYtXOvg",
      database: "vida_natural",
      ssl: true,
  extra: {
    options: routingId
  },
      entities: [Persona,Donaciones,Mensaje],//__dirname + "/entity/*{.js,.ts}"
      synchronize:true
        }),
    PersonaModule, DonacionesModule,
    MensajeModule,
    
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/