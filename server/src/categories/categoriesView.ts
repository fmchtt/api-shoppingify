interface ICategory {
  CategoryId: number;
  Name: string;
}

export default {
  render(category: ICategory) {
    return {
      Name: category.Name,
      CategoryId: category.CategoryId,
    };
  },
  renderMany(categories: ICategory[]) {
    const data = categories.map((category) => {
      return this.render(category);
    });

    return data;
  },
};
