import imagesView from "../images/imagesView";

interface IProduct {
  ProductId: number;
  Name: string;
  Description: string;
  CategoryId: number;
  Categories: {
    CategoryId: number;
    Name: string;
  };
  Images: [
    {
      ImageId: number;
      Path: string;
      ProductId: number;
    }
  ];
}

export default {
  render(product: IProduct) {
    return {
      ProductId: product.ProductId,
      Name: product.Name,
      Description: product.Description,
      Categories: product.Categories,
      Images: imagesView.renderMany(product.Images),
    };
  },

  renderMany(products: IProduct[]) {
    const data = products.map((product) => {
      return this.render(product);
    });

    return data;
  },
};
