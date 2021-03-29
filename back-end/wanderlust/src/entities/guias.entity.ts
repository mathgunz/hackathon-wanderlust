import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Enderecos } from './enderecos.entity';
import { Passeios } from './passeios.entity';

@Entity({schema:'wanderlust'})
export class Guias {
     
     @PrimaryGeneratedColumn()
     id?: number;

     @Column()
     nome: string;

     @Column()
     sobrenome: string;

     @Column("int8")
     documento: number;

     @Column("int8")
     telefone: number

     @Column()
     email: string;
     
     @Column()
     cadastur: string;

     @OneToOne(type => Enderecos, {cascade:true, eager:true})
     @JoinColumn({ name: "enderecoId", referencedColumnName: "id" })
     endereco: Enderecos;

     @Column()
     senha: string;

     @OneToMany(type => Passeios, passeios => passeios.guia)
     passeios?: Passeios[];
}