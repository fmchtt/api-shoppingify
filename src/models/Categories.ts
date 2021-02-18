interface ICategories {
    CategoryId: number,
    Name: string,

    getCategories(): Function,
    getCategory(CategoryId: number): Function,
    saveCategory(Category: ICategories): Function
}