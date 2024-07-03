import { IsEmail,IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';// Aquí se importan varios decoradores de la librería class-validator que se utilizarán para validar las propiedades del DTO.
export class LoginDto { //Se define la clase LoginDto que representa el objeto de datos para el proceso de login.
  @IsString()
  nombreApellido: string;
  @IsNotEmpty() // @IsNotEmpty(): Valida que la propiedad email no esté vacía.
  @IsEmail() //Valida que la propiedad email sea una dirección de correo electrónico válida.
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  @IsString()
  password: string;
}
//Este DTO (LoginDto) se usa para encapsular y validar los datos de un formulario de inicio de sesión. Cada propiedad de la clase está decorada con validaciones específicas que garantizan que los datos proporcionados cumplan con ciertos criterios antes de ser procesados por la aplicación. Estas validaciones ayudan a asegurar que:
/*nombreApellido sea una cadena de texto.
email sea una dirección de correo electrónico válida y no esté vacía.
password no esté vacía, tenga una longitud mínima de 6 caracteres y una longitud máxima de 15 caracteres, y sea una cadena de texto.*/