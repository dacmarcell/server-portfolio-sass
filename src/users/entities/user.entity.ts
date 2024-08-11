import { Column, PrimaryGeneratedColumn } from "typeorm"

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
}
