import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "social_links" })
export class SocialLink {
    @PrimaryGeneratedColumn('increment')
    social_link_id: string

    @Column()
    name: string
    
    @Column()
    url: string
}
