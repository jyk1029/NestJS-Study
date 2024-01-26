import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tbl_feed')
export class Feed {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({type: 'varchar', length: 30, nullable: false})
    title: string;
    @Column({type: 'varchar', length: 3000, nullable: false})
    content: string;
    @Column({type: 'varchar', length: 6000, nullable: true})
    image: string
}