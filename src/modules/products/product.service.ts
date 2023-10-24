import { Injectable } from '@nestjs/common';
import { Product } from '../../models/product.model';
import { ProductDto } from '../../dto/product.dto';

// import { ResponseData } from '../../global/globalClass';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      categoryId: 1,
      price: 123,
      name: 'Product A',
      id: 1,
    },
    {
      categoryId: 1,
      price: 123,
      name: 'Product B',
      id: 2,
    },
  ];

  get(): Product[] {
    return this.products;
  }

  createProduct(productDto: ProductDto): ProductDto {
    return productDto;
  }

  getDetail(id: number): Product {
    return this.products.filter((product) => product.id === Number(id))[0];
  }

  update(): string {
    return 'Delete product';
  }

  delete(): string {
    return 'Delete product';
  }
}
