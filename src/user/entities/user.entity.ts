import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("tbl_user")
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({name: 'account_id', type: 'varchar', length: 20, nullable: false})
    accountId: string;
    @Column({type: 'varchar', length: 60, nullable: false})
    password: string;
    @Column({type: 'varchar', length: 15, nullable: false})
    nickname: string;
    @Column({type: 'int', nullable: false})
    age: Number;
}
