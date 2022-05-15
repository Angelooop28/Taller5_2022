function ActividadDos(){
    function Producto_Alimenticion(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;
    }
    var producto1 =new Producto_Alimenticion('#023','Aceite',4.00);
    var producto2 =new Producto_Alimenticion('#009','Arroz',2.00);
    var producto3 =new Producto_Alimenticion('#056','Carne de Res',4.50);

    var productos =new Array(producto1,producto2,producto3);

    imprimeDatos(productos);
}

function imprimeDatos(productos){
    var p=1;
    for(var i=0;i<3;i++){
        alert("Producto "+p+": -Código: "+productos[i].codigo+" -Nombre: "+productos[i].nombre+
        " -Precio: "+productos[i].precio)
        p++;
    }
}