import { IsOptional, IsString, IsUrl } from "class-validator";

export class CreateProjectDto {
    @IsUrl()
    @IsString()
    repo_url: string;

    @IsOptional()
    @IsUrl()
    @IsString()
    deploy_url: string
}
