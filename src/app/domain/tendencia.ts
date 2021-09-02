export interface Carrito {
    id?:string;
    codigo?:string;
    nombre?:string;
    descripcion?:string;
    precio?:number;
    cantidad?:number;
    cantidadInventario?:number;
    estatusInventario?:string;
    categoria?:string;
    image?:string;
    calificacion?:number;
    total?:number;
    subTotal?:number;
}