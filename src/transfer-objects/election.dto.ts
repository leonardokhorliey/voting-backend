import { IsInt, IsNotEmpty} from 'class-validator';
export class ElectionDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsInt()
    adminId: number;
}