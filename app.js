const addTodos = document.querySelector('.add');
const ul = document.querySelector('ul');
const addSearch = document.querySelector('.search input');


//generate(add) todos

const generate = todos => {

const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todos}</span><i class="far fa-trash-alt delete"></i></li>`;

ul.innerHTML +=html;
}

addTodos.addEventListener('submit', e=> {
    e.preventDefault();
const todos = addTodos.add.value;
if(todos.length){
generate(todos);
};
});

//delete todos

ul.addEventListener('click', e=> {
if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
}
});

//search todos

// const searchTodos = todos=> {
// Array.from(ul.children)
// .filter (x=> !x.textContent.toLowerCase().includes(todos))
// .forEach(x=> x.classList.add('filtered'));

// Array.from(ul.children)
// .filter (x=> x.textContent.toLowerCase().includes(todos))
// .forEach(x=> x.classList.remove('filtered'));

// };


const searchTodos = todos => {
    Array.from(ul.children)
    .forEach(x=> {
        if(!x.textContent.toLowerCase().includes(todos) && todos !==''){
            x.classList.add('filtered');
        } else {
            x.classList.remove('filtered');
        }
    });
}

addSearch.addEventListener('keyup', e => {
const todos = addSearch.value.toLowerCase();
searchTodos(todos);

});