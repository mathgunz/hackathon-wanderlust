import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Enderecos } from './enderecos.entity';
import { Guias } from './guias.entity';

@Entity({schema:'wanderlust'})
export class Passeios {
     
     @PrimaryGeneratedColumn()
     id?: number;

     @Column()
     nome: string;
     
     @ManyToOne(type => Guias, guias => guias.passeios)
     guia: Guias
     
     @Column()
     descricao: string;
          
     @Column()
     duracao: string;

     @Column()
     tipo: string;

     @OneToOne(type => Enderecos, {cascade:true, eager:true})
     @JoinColumn({ name: "enderecoId", referencedColumnName: "id" })
     endereco: Enderecos;
}