interface IImages{
    ImageId: number,
    path: string,

    getImage(ImageId: number): Function,
    saveImage(path: string): Function
}