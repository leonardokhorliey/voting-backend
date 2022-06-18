import { IsInt, IsNotEmpty} from 'class-validator';
export class CandidateDto {
    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    watchword: string;

    @IsNotEmpty()
    @IsInt()
    position_id: number;
}