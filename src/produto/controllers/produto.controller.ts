import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Param, Body, HttpException } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller("/produtos")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findOneById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  post(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  put(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    const resultadoDelete = this.produtoService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }

  @Get('/preco_maior/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoMaior(@Param('preco') preco: number): Promise<Produto[]> {
    return this.produtoService.findByPrecoMaior(preco);
  }

  @Get('/preco_menor/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoMenor(@Param('preco') preco: number): Promise<Produto[]> {
    return this.produtoService.findByPrecoMenor(preco);
  }

}
