import { IsEnum, IsString, IsUrl } from "class-validator"

enum SocialNetworks {
    github = 'github',
    linkedin = 'linkedin',
    facebook = 'facebook',
    twitter = 'twitter',
}

export class CreateSocialLinkDto {
    @IsString()
    @IsEnum(SocialNetworks)
    name: string
    
    @IsString()
    @IsUrl()
    url: string
}
