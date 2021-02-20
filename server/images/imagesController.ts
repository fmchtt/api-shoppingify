import Images from "./imagesModel";

export default {
  async getImage(ProductId: number) {
    const resposta = await Images.findAll({ where: { ProductId: ProductId } });
    if(resposta) {
      return resposta
    } else {
      return {}
    }
  },
};
