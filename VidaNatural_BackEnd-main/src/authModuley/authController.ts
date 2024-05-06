import { Body, Controller, Post, HttpStatus, HttpCode} from '@nestjs/common';
import { AuthService } from './authServicey'

@Controller ('auth')
export class AuthController {
    constructor(private authService: AuthService){}

@HttpCode(HttpStatus.OK)

@Post ('login')
signIn(@Body() this.signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto. username, signInDto.password);
}
}