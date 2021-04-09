import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({schema:'wanderlust'})
export class Enderecos {
    
     @PrimaryGeneratedColumn()
     id?: number;

     @Column()
     endereco: string;

     @Column()
     cidade: string;

     @Column({nullable:true})
     estado: string;
}