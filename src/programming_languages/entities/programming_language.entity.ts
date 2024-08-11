import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'programming_languages'})
export class ProgrammingLanguage {
    @PrimaryGeneratedColumn('increment')
    programming_language_id: number

    @Column()
    name: string

    @Column({ default: 0 })
    level: number
}
