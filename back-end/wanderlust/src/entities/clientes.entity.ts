import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Enderecos } from './enderecos.entity';

@Entity({schema:'wanderlust'})
export class Clientes {
     
     @PrimaryGeneratedColumn()
     id?: number;

     @Column({nullable: false})
     nome: string;

     @Column({nullable: false})
     sobrenome: string;

     @Column({nullable: false})
     dataNascimento: Date;

     @Column("int8", {nullable: false})
     telefone: number;

     @OneToOne(type => Enderecos, {cascade:true, eager:true})
     @JoinColumn({ name: "enderecoId", referencedColumnName: "id" })
     endereco: Enderecos;

     @Column({nullable: false})
     email: string;

     @Column({nullable: false})
     senha: string;
}