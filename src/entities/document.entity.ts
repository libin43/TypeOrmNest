import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Document {

        @PrimaryGeneratedColumn('uuid')
        id: string

        @Column({nullable: true})
        doc_type: string
    
        @Column({nullable: true})
        doc_string: string
    
        @Column({nullable: true})
        doc_name: string
    
        @CreateDateColumn()
        created_at: Date;

        @UpdateDateColumn()
        updated_at: Date;

        @ManyToOne(() => User, (user) => user.documents)
        user: User
}
