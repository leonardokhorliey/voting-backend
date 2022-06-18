import { IsInt, IsNotEmpty} from 'class-validator';
export class UserDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}