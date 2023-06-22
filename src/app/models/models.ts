export interface Product {
    id: string;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: string;
    image: string;
    cantidad: number;
    isAddedToCart: boolean;

    
}

export interface Pedidos{
    id: string;
    descripcion:string;
    fecha: string;
    hora: string;
    contenido: string;
    monto:string;
    status: string;
}