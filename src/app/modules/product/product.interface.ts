export interface IProduct{
    name:string
    brand:string
    price:number
    model: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric'
    description:string
    image:string[]
    quantity:number
    instock:boolean
}