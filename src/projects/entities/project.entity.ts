import { User } from "src/users/entities/user.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ulid } from "ulid";

@Entity({ name: 'projects' })
export class Project {
    @PrimaryColumn()
    project_id: string;

    @Column()
    repo_url: string;

    @Column({ nullable: true })
    deploy_url: string

    @ManyToOne(() => User, user => user.projects)
    user: User

    @BeforeInsert()
    generateId() {
        this.project_id = ulid()
    }
}