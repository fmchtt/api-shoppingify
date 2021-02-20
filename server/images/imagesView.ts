import config from "config";

interface IImage {
  ImageId: number;
  Path: string;
  ProductId: number;
}

export default {
  render(image: IImage) {
    return {
      path: `${config.get("server.host")}:${config.get("server.port")}/api/v1/uploads/${
        image.Path
      }`,
    };
  },

  renderMany(images: IImage[]) {
    return images.map((image) => {
      return this.render(image);
    });
  },
};
