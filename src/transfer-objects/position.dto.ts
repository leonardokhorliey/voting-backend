import { IsInt, IsNotEmpty} from 'class-validator';
export class PositionDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsInt()
    election_id: number;

    @IsNotEmpty()
    @IsInt()
    candidate_threshold: number;
}