const verificarNums= cadena => (cadena.length !== 0) && !(isNaN(cadena));
const validDatos= (name,price,unit) => (!(name.length === 0) && (verificarNums(price)) && (verificarNums(unit)));

class product{
    constructor(name,price,unit){
        this.name=name;
        this.price=name;
        this.unit=unit;
    }
}

class inventary{
    constructor(){
        this.list=  new Array;
    }
    newProduct(name,price,unit){
        let toList=new product(name,price,unit);
        this.list.push(toList);
    }
}

const principal=new inventary;


function addProduct(event){
    event.preventDefault();
    let name=document.getElementById("nameProduct").value;
    let price=document.getElementById("priceProduct").value;
    let unit=document.getElementById("unitProduct").value;
    let feed=document.getElementById("feedback");
    if (validDatos(name,price,unit)){
        principal.newProduct(name,price,unit);
        feed.innerText=`you introduced the product ${name}`;
    }
    else{
        feed.innerText="some product data is not valid";
    }
}
