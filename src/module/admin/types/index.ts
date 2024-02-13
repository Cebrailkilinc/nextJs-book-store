export type AddBook = {
    name: string,
    desc: string,
    author: string,
    price: number,
    discount: number,
    isInStock:boolean
}
export type GetAllBook = {
    allBook: any,
    loading: string,
    success: boolean,
    error: string | undefined
}
export type AdminModal = {
    isOpen: any,
    onOpen: () => void,
    onClose: () => void,
    bookId:string,
}