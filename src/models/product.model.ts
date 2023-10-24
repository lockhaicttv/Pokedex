export class Product {
  id?: number;
  price: number;
  name: string;
  categoryId: number;

  constructor(id: number, price: number, name: string, categoryId: number) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.categoryId = categoryId;

    return this;
  }
}
