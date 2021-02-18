interface IProducts {
    ProductId: number,
    Name: string,
    description: string,
    ImageId: number,
    CategoryId: number,

    getProducts(): Function,
    getProduct(ProductId: number): Function
    saveProduct(Product: IProducts): Function
}