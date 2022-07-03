import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @Column({length: 255, nullable: false})
    nome: string

    @Column({length: 500, nullable: false})
    descricao: string

    @Column({length: 100, nullable: false})
    console: string

    @Column({type: "int"})
    quantidade: number

    @Column({name: "data_lancamento"})
    dataLancamento: Date

    @Column({type: "decimal", precision: 10, scale: 2 })
    preco: number

    @Column()
    foto: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
    
}