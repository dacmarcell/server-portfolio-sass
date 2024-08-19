import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'programming_languages' })
export class ProgrammingLanguage {
    @PrimaryGeneratedColumn('increment')
    programming_language_id: number

    @Column()
    name: string

    @Column({ default: 0 })
    level: number
}
