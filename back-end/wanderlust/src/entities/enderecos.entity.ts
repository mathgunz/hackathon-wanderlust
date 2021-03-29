import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({schema:'wanderlust'})
export class Enderecos {
    
     @PrimaryGeneratedColumn()
     id?: number;

     @Column()
     endereco: string;

     @Column()
     bairro: string;

     @Column()
     cep: number;

     @Column()
     complemento?: string;

     @Column()
     numero: number;

     @Column()
     cidade: string;

     @Column()
     estado: string;
}