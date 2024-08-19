fetch('https://fakestoreapi.com/products')
.then((data)=>{
    return data.json();
}).then((completeddata)=>{
    let data1="";
    completeddata.map((value)=>{
        data1+=`<div class="column">
            <div class="card">
                <img src=${value.image} width="100%" height="250px">
                <h2>${value.title}</h2>
                <p>${value.price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    </div>`
    });
    document.getElementById('row').innerHTML=data1;
})