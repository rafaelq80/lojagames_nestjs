import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Param, Body, HttpException } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller("/categorias")
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.findOneById(id);
  }

  @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('tipo') tipo: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  post(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  put(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    const resultadoDelete = this.categoriaService.delete(id);
    
    if (resultadoDelete === undefined)
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
    else
        return resultadoDelete;

  }

}
