import { IsInt, IsNotEmpty} from 'class-validator';
export class VoteDto {
    @IsNotEmpty()
    @IsInt()
    candidate_id: number;

    @IsNotEmpty()
    @IsInt()
    voter_id: number;
}