import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "../../usuario/entities/usuario.entity"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 500, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    console: string

    @Column({type: "int"})
    quantidade: number

    @Column({name: "data_lancamento", type: "date"})
    dataLancamento: Date

    @Column({type: "decimal", precision: 10, scale: 2 })
    preco: number

    @Column()
    foto: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
    
    @ManyToOne(() => Usuario, (categoria) => categoria.usuario, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}