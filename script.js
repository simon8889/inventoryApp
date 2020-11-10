const verificarNums= cadena => (cadena.length !== 0) && !(isNaN(cadena));
const validDatos= (name,price,unit) => (!(name.length === 0) && (verificarNums(price)) && (verificarNums(unit)));

class product{
    constructor(name,price,unit){
        this.name=name;
        this.price=name;
        this.unit=unit;
    }
    productCard(){
        return `
        <div class="lastest__card">
            <ul class="lastest__list">
                <li class="lastest__item">name: ${this.name}</li>
                <li class="lastest__item">price: ${this.price}</li>
                <li class="lastest__item">unit: ${this.unit}</li>
            </ul>
        </div>`
    }
}

class inventary{
    constructor(){
        this.list=  new Array;
    }
    newProduct(name,price,unit){
        let toList=new product(name,price,unit);
        this.list.unshift(toList);
    }
    emptyListTarget(){
        return `
        <div class="lastest__empty">
            <p>the list of products is empty</p>
        </div>`
    }
    getFiveLastest(){
        let toDraw;
        if (this.list.length <= 5){
            toDraw=this.list;
        }
        else{
            let fiveLastest=new Array;
            for (let first=0;first<5;first++){
                fiveLastest.push(this.list[first]);
            }
            toDraw=fiveLastest;
        }
        return toDraw;
    }
    cardLastest(){
        if (this.list.length === 0){
            return this.emptyListTarget();
        }
        else{
            let totalDiv=new String;
            let cards=this.getFiveLastest();
            for (let card=0;card<cards.length;card++){
                totalDiv += cards[card].productCard();
            }
            return totalDiv;
        }
    }
    searchProduct(name){
        if (name.length !== 0){
            for (let i=0; i<this.list.length;i++){
                if (this.list[i].name === name){
                    return this.list[i];
                }
            }
            return `<p class="search__result">the product ${name} was no found</p>`;
        }
        else{
            return '<p class="search__result">the data is invalid for search</p>';
        }
    }
    getAllProducts(){
        let toInsert=new String;
        for (let i=0;i<this.list.length;i++){
            toInsert+=this.list[i].productCard()
        }
        return toInsert;
    }
    
}

const principal=new inventary;


function addProduct(event){
    event.preventDefault();
    let forDraw=document.getElementById("lastestContent");
    let name=document.getElementById("nameProduct").value;
    let price=document.getElementById("priceProduct").value;
    let unit=document.getElementById("unitProduct").value;
    let feed=document.getElementById("feedback");
    if (validDatos(name,price,unit)){
        principal.newProduct(name,price,unit);
        feed.innerText=`you introduced the product ${name}`;
        forDraw.innerHTML=String(principal.cardLastest());
        document.getElementById("allItems").innerHTML=String(principal.getAllProducts());
    }
    else{
        feed.innerText="some product data is not valid";
    };
    document.getElementById("newForm").reset();
}


function search(event){
    event.preventDefault();
    let toSearch=document.getElementById("toSearch").value;
    let drawResult=document.getElementById("searchResult");
    let foundOrNo=principal.searchProduct(toSearch);
    if (foundOrNo instanceof  product){
        drawResult.innerHTML=foundOrNo.productCard();
    }
    else{
        drawResult.innerHTML=String(foundOrNo);
    }
    document.getElementById("searchForm").reset();
}

