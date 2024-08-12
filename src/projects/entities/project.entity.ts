import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { ulid } from "ulid";

@Entity({name: 'projects' })
export class Project {
    @PrimaryColumn()
    project_id: string;

    @Column()
    repo_url: string;

    @Column({ nullable: true})
    deploy_url: string

    @BeforeInsert()
    generateId() {
        this.project_id = ulid()
    }
}