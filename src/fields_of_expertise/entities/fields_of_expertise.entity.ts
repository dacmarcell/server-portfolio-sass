import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum FieldsOfExpertiseEnum {
    BackEnd = 'Back-end',
    FrontEnd = 'Front-end',
    FullStack = 'Full-stack',
    Mobile = 'Mobile',
    DevOps = 'DevOps',
    DataScience = 'Data Science',
    UIUX = 'UI/UX',
    Cybersecurity = 'Cybersecurity',
    AIML = 'AI/ML',
    Blockchain = 'Blockchain',
    IoT = 'IoT',
    CloudComputing = 'Cloud Computing',
    ARVR = 'AR/VR',
    GameDevelopment = 'Game Development',
    QuantumComputing = 'Quantum Computing',
    BigData = 'Big Data'
}

@Entity({name: 'fields_of_expertise' })
export class FieldsOfExpertise {
    @PrimaryGeneratedColumn('increment')
    field_code: string

    @Column({
        type: 'enum',
        enum: FieldsOfExpertiseEnum,
    })
    name: FieldsOfExpertiseEnum
}
