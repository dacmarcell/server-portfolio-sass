import { FieldsOfExpertise } from "src/fields_of_expertise/entities/fields_of_expertise.entity"
import { ProgrammingLanguage } from "src/programming_languages/entities/programming_language.entity"
import { Project } from "src/projects/entities/project.entity"
import { SocialLink } from "src/social_links/entities/social_link.entity"
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    about: string

    @ManyToMany(() => FieldsOfExpertise)
    @JoinTable()
    fields_of_expertise: FieldsOfExpertise[]

    @ManyToMany(() => ProgrammingLanguage)
    @JoinTable()
    programming_languages: ProgrammingLanguage[]

}
