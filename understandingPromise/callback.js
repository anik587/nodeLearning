const items = [
    {title: 'Item 1', description: 'This is description 1'},
    {title: 'Item 2', description: 'This is description 2'},
]
function renderItems(id){
    let html = '';
    items.forEach((item)=>{
        html+= `<li>This is Item${item.title}</li>`
    });

    document.getElementById(id).innerHTML = html;
}

function createItemCallback(item, callback, id){
    setTimeout(()=>{
        console.log('from callback settimeout')
        items.push(item);
        callback(id);
    }, 1000);
}
createItemCallback({title: 'Item 3', description: 'This is description 3'}, renderItems, 'callback');


function createItemPromise(item){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log('from promise settimeout')
            items.push(item);
            let error = false;
            if(!error){
                resolve();
            }else{
                reject('A error occured');
            }
    
        }, 2000)

    })
}

createItemPromise({title: 'Item 4', description: 'This is description 4'})
    .then( (data) => {
        renderItems('promise')
    })
    .catch(err => console.log(err));


const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

function promiseAll(){
    Promise.all([promise1, promise2, promise3])
    .then(data => {
        console.log(data)
        let html = '';
        data[2].forEach((item)=>{
            html+= `<li>This is Item${item.name}</li>`
        });

    document.getElementById('promiseAll').innerHTML = html;
    })
}

promiseAll();


async function createItemAsync(){
     const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
}

async function init(){
    data = await createItemAsync();
 
    let html = '';
    data.forEach((item)=>{
        html+= `<li>This is Item${item.name}</li>`
    });

    document.getElementById('async').innerHTML = html;
}

init();