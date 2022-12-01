function fetchApiDAte(){
    conectJson()
}

function conectJson() {
    fetch('http://localhost:300/').then((response) =>
        response.json())
        .then(data=>{
        const list = document.querySelector('#fill_list')
        
        
        data.map((item)=>{
            const li = document.createElement('li');
            li.setAttribute('id',item.id)
            li.innerHTML=item.imagen;
            li.innerHTML+=item.name;
            li.innerHTML += item.genero;
            li.innerHTML+= item.especie;
            li.innerHTML+=item.profissao;
            list.appendChild(li);
        })
        
})

var count=0;
var button=document.getElementById("button");

button.onclick= function(){
    count++
}
if(count>1);
    button.desabled;

}

