import Images from "./imagesModel";

export default {
  async getImage(ProductId: number) {
    const resposta = await Images.findAll({ where: { ProductId: ProductId } });
    return resposta;
  },
  async createImage(ProductId: number, Path: string) {
    const resposta = await Images.create({
      Path: Path,
      ProductId: ProductId,
    });

    return resposta;
  },
};
