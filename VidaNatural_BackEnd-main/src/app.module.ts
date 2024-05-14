import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonaModule } from './persona/persona.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MensajeModule } from './mensaje/mensaje.module';

import { Persona } from './entities/persona.entity';
import { DonacionesModule } from './donaciones/donaciones.module';
import { Donaciones } from './entities/donaciones.entity';
import { Mensaje } from './entities/mensajes.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "vida_natural",
      entities: [Persona,Donaciones,Mensaje],//__dirname + "/entity/*{.js,.ts}"
      synchronize:true
        }),
    PersonaModule, DonacionesModule,
    MensajeModule,
    AuthModule,
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}