import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "./document.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({nullable: true})
    otp: number

    @Column()
    password: string

    @Column({default: true})
    is_available: boolean

    @Column({unique: true})
    contact: string

    @OneToMany(() => Document, (document) => document.user, {nullable: true, cascade: true})
    documents: Document[]
}
