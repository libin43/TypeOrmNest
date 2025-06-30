import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "./document.entity";
import { UserRole } from "src/enums/user.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.SERVICE_REQUESTER,
    })
    role: UserRole;

    @Column({ nullable: true })
    otp: number

    @Column()
    password: string

    @Column({ default: true })
    is_available: boolean

    @Column({ unique: true })
    contact: string

    @OneToMany(() => Document, (document) => document.user, { nullable: true, cascade: true })
    documents: Document[]
}
