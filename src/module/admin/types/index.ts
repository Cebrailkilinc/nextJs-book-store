export type AddBook = {
    bookName: string,
    desc: string,
    author: string,
    price: number,
    discount: number,
}
export type GetAllBook = {
    data: any,
    loading: string,
    success: boolean,
    error:string | undefined
}