import { MaxLength, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
    
    id: number;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    senha: string;
}