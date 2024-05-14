export interface prodect { 
    id:number | string;
    img:string;
    title:string;
    body:string;
    price:string;
    catgure:string
}
export interface Data {
    text1:string;
    text3:string;
    selectedItem:string;
}

export interface DataAndImageUrl extends Data{
    imageUrl:string
}