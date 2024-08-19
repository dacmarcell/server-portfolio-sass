import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "social_links" })
export class SocialLink {
    @PrimaryGeneratedColumn('increment')
    social_link_id: number

    @Column()
    name: string
    
    @Column()
    url: string
}
