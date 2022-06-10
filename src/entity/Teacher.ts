import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    course: string;

    @Column()
    year: string;

    @Column()
    age1: string;

}