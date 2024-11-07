export interface Http{
    productData: [{
        id: number,
        image: string,
        title: string,
        description: string,
        price: string,
        inStock: boolean,
        outOfStock: boolean
    }]
}