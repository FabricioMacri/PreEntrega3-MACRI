//En este archivo tenemos todas las clases y objetos utilizadas

function Producto(ID, Nombre, Categoria, Precio, Cantidad) {

    this.ID = ID;
    this.Nombre = Nombre;
    this.Categoria = Categoria;
    this.Precio = Precio;
    this.Cantidad = 1;
  
};

const BD1 = new Producto(1, "Agua Mineral", "Bebidas", 250);
const BD2 = new Producto(2, "Gaseosa", "Bebidas", 680);
const BD3 = new Producto(3, "Schweppes", "Bebidas", 550);
const BD4 = new Producto(4, "Agua saborizada", "Bebidas", 620);
const BD5 = new Producto(5, "Copa de vino", "Bebidas", 900);

const CF1 = new Producto(6, "Pocillo", "Cafeteria", 520);
const CF2 = new Producto(7, "Americano", "Cafeteria", 650);
const CF3 = new Producto(8, "Cafe con leche", "Cafeteria", 720);
const CF4 = new Producto(9, "Capuccino", "Cafeteria", 1050);
const CF5 = new Producto(10, "Submarino", "Cafeteria", 1050);

const SW1 = new Producto(11, "Hamburguesa simple", "Sandiwiches", 1250);
const SW2 = new Producto(12, "Hamburguesa doble completa", "Sandiwiches", 1890);
const SW3 = new Producto(13, "Milonga", "Sandiwiches", 2100);
const SW4 = new Producto(14, "Tibio de ave", "Sandiwiches", 1750);
const SW5 = new Producto(15, "Tibio de cerdo", "Sandiwiches", 1800);

const MN1 = new Producto(16, "Milanesa con guarnición", "Minutas", 3060);
const MN2 = new Producto(17, "Filete de merluza con guarnición", "Minutas", 2300);
const MN3 = new Producto(18, "Ravioles", "Minutas", 2300);
const MN4 = new Producto(19, "Sorrentinos", "Minutas", 2500);
const MN5 = new Producto(20, "Tortilla de papa", "Minutas", 1650);

const Productos = [];

Productos.push(BD1);
Productos.push(BD2);
Productos.push(BD3);
Productos.push(BD4);
Productos.push(BD5);

Productos.push(CF1);
Productos.push(CF2);
Productos.push(CF3);
Productos.push(CF4);
Productos.push(CF5);

Productos.push(SW1);
Productos.push(SW2);
Productos.push(SW3);
Productos.push(SW4);
Productos.push(SW5);

Productos.push(MN1);
Productos.push(MN2);
Productos.push(MN3);
Productos.push(MN4);
Productos.push(MN5);


const Categorias = ["Bebidas", "Cafeteria", "Sandiwiches", "Minutas"]

