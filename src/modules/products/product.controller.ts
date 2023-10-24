import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from '../../global/globalClass';
import { HttpMessage, HttpStatus } from '../../global/globalEnum';
import { Product } from '../../models/product.model';
import { ProductDto } from '../../dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  products(): ResponseData<Product[]> {
    return new ResponseData<Product[]>(
      this.productService.get(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Post()
  createProduct(@Body() productDto: ProductDto): ResponseData<ProductDto> {
    return new ResponseData<ProductDto>(
      this.productService.createProduct(productDto),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Get('/:id')
  getDetail(@Param('id') id: number): ResponseData<Product> {
    return new ResponseData<Product>(
      this.productService.getDetail(id),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Put('/:id')
  update(): ResponseData<string> {
    return new ResponseData<string>(
      this.productService.update(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }

  @Delete('/:id')
  delete(): ResponseData<string> {
    return new ResponseData<string>(
      this.productService.delete(),
      HttpStatus.SUCCESS,
      HttpMessage.SUCCESS,
    );
  }
}
