import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PersonaModule } from './persona/persona.module';
import { MensajeModule } from './mensaje/mensaje.module';
import { DonacionesModule } from './donaciones/donaciones.module';
import { AuthModule } from './auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Persona } from './entities/persona.entity';
import { Donaciones } from './entities/donaciones.entity';
import { Mensaje } from './entities/mensajes.entity';

import * as dotenv from 'dotenv';
dotenv.config();

console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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
        ssl: true,
        entities: [Persona, Donaciones, Mensaje],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PersonaModule,
    MensajeModule,
    DonacionesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}








/*const dbUrl = new URL("postgresql://vida-natural2024:REVEAL_PASSWORD@vida-natural-7555.g8z.gcp-us-east1.cockroachlabs.cloud:26257/vida_natural?sslmode=verify-full");
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      type: "cockroachdb",
      host: "vida-natural-7555.g8z.gcp-us-east1.cockroachlabs.cloud",
      port: 26257 ,
      username: "vida-natural2024",
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