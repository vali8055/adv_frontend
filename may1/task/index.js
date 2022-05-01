var rightnavs=document.getElementById('rightnav')
function dash(){
    console.log('clicked')
    rightnavs.innerHTML=''
    let imgs=document.createElement('img')
    imgs.src='dash.JPG'
    imgs.classList.add('dashs')
    rightnavs.appendChild(imgs)
}
function start(){
    console.log('clicked')
    rightnavs.innerHTML=''
    let imgs=document.createElement('img')
    imgs.src='start.JPG'
    imgs.classList.add('dashs')
    rightnavs.appendChild(imgs)
}
function searchs(){
    console.log('clicked search')
    rightnavs.innerHTML=''
    let div1=document.createElement('div')
    let form=document.createElement('form')
    form.method='GET'
    let inp1=document.createElement('input')
    inp1.name='search_query'
    inp1.type='text'
    let inp2=document.createElement('input')
    inp2.type='submit'
    inp2.value="    Search 🔎"
    rightnavs.appendChild(div1)
    div1.appendChild(form)
    form.appendChild(inp1)
    form.appendChild(inp2)
    inp1.classList.add('input')
    inp2.classList.add('btn')
    div1.classList.add('searchcontainer')
    var containers=document.createElement('div')
    rightnavs.appendChild(containers)
    // containers.classList.add('.tables')
    const search = async (search_query) => {
        const res = await fetch(`http://universities.hipolabs.com/search?country=${search_query}`);
        const data = await res.json();
        console.log(data)
        let table = document.createElement('table')
        table.style.marginTop = "20px"
        table.style.width = "80%"
        table.style.border = "2px solid black"
        table.style.borderCollapse = "collapse"
        let row = document.createElement('tr')
        row.style.height="50px"
        let col1 = document.createElement('th')
        col1.innerText = "country"
        col1.style.border = "1px solid black"
        col1.style.width = "10%"
        let col2 = document.createElement('th')
        col2.innerText = "Name of the university"
        col2.style.border = "1px solid black"
        col2.style.width = "30%"
        let col3 = document.createElement('th')
        col3.innerText = "Domains"
        col3.style.border = "1px solid black"
        col3.style.width = "10%"
        let col4 = document.createElement('th')
        col4.innerText = "Web_Pages"
        col4.style.border = "1px solid black"
        col4.style.width = "30%"
        row.append(col1, col2, col3, col4)
        table.append(row)
        containers.append(table)
        data.forEach(element => {
            let country = element.country
            let name = element.name;
            let state = element.domains[0];
            let page = element.web_pages[0];
            let row = document.createElement('tr')
            row.style.height="50px"
        let col1 = document.createElement('td')
        col1.innerText = country
        col1.style.border = "1px solid black"
        col1.style.width = "10%"
        let col2 = document.createElement('td')
        col2.innerText = name
        col2.style.border = "1px solid black"
        col2.style.width = "30%"
        let col3 = document.createElement('td')
        col3.innerText = state
        col3.style.border = "1px solid black"
        col3.style.width = "10%"
        let col4 = document.createElement('td')
        col4.innerText = page
        col4.style.border = "1px solid black"
        col4.style.width = "30%"
        row.append(col1, col2, col3, col4)
        table.append(row)
        console.log(element)
        });
        hidden.innerHTML=""
    }
    (async () => {
        try {
            const current_location = window.location.href;
            const url_obj = new URL(current_location);
            const search_query = url_obj.searchParams.get("search_query");
            if (search_query == null || search_query == "") {
                containers.innerText = "please enter country name in search box to get the universities data"
                containers.align="center"
                containers.style.marginTop="30px"
            } else {
                search(search_query);
            }
        } catch (e) {
            console.log("Something messed up");
        }
    })();
    
}
 

var hiden=document.getElementById('hide')

function browse(){
    console.log('browse clicked')

}
(function za(){
let a =fetch('https://reqres.in/api/user');

let b = a.then(function(response){
   return response.json();
});

b.then(function(x){
    // console.log(x);
    let output=x.data;
    for(let i=0; i<output.length; i++)
    {
        let id=output[i].id;
        let name=output[i].name;
        let year=output[i].year;
        let color=output[i].color;
        let table=document.querySelector('table');
        let tableRow=document.createElement('tr');
        tableRow.innerHTML='<td>'+ id +'</td>' + '<td>'+name+'</td>'+ '<td>'+year +'</td>'+ '<td>'+color+'</td>';
        table.appendChild(tableRow);

    }
})
})()
let oclick=document.getElementById('table')
oclick.addEventListener('click',fun)
oclick.classList.add('left-right')
var div1=document.getElementById('hide2')
function fun(){
        div1.innerHTML=""
        let data=document.createElement('p')
        data.innerText='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
         div1.appendChild(data)
         div1.style.border='1px solid black'
         
    }
 