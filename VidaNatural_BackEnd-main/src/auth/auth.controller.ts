import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
/*El propósito de este controlador AuthController es manejar las solicitudes de autenticación en la aplicación.
 En particular, el método login maneja las solicitudes POST a la ruta auth/login, 
 valida los datos de inicio de sesión utilizando LoginDto, y luego delega la autenticación al AuthService.*/