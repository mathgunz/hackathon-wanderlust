import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Clientes } from './clientes.entity';
import { Enderecos } from './enderecos.entity';
import { Guias } from './guias.entity';
import { Passeios } from './passeios.entity';

@Entity({schema:'wanderlust'})
export class Agendas {
     
     @PrimaryGeneratedColumn()
     id?: number;

     // @ManyToOne(type => Guias, guias => guias.passeios)
     @ManyToOne(type => Guias)
     @JoinColumn({name : 'guias_id', referencedColumnName: 'id'})
     guia: Guias;

     @ManyToOne(type => Passeios)
     @JoinColumn({name : 'passeios_id', referencedColumnName: 'id'})
     passeio: Passeios;

     @Column()
     data: Date;

     @Column()
     duracao: string;

     @Column()
     status: string;

     @Column()
     tipo: string;

     @OneToMany(type => ClientesAgendados, clientesAgendados => clientesAgendados.agenda)
     clientesAgendados?: ClientesAgendados[];

     @Column()
     descricao: string;

     @Column()
     valor: number;

     @Column({nullable:true})
     pontoReferencia: string;
}

@Entity({schema:'wanderlust'})
export class ClientesAgendados {
 
     @PrimaryGeneratedColumn()
     id?: number;

     @ManyToOne(type => Agendas)
     @JoinColumn({name : 'agendas_id', referencedColumnName: 'id'})
     agenda: Agendas;

     @ManyToOne(type => Clientes)
     @JoinColumn({name : 'clientes_id', referencedColumnName: 'id'})
     cliente: Clientes;
}