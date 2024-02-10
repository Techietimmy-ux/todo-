const addTodo = document.querySelectorAll('form');
const listItems = document.querySelector('.todos');

const searchTodo = document.querySelector('.search input')



searchTodo.addEventListener('keyup', e => {
    const newSearch = searchTodo.value.trim().toLowerCase();

    Array.from(listItems.children).filter(child => {
        return !child.textContent.toLowerCase().includes(newSearch)

    }).map(child => {
        child.classList.add('d-none')
    })

    Array.from(listItems.children).filter(child => {
        return child.textContent.toLowerCase().includes(newSearch)

    }).map(child => {
        child.classList.remove('d-none')
    })


})


const htmlList = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
    listItems.innerHTML += html

}


addTodo[1].addEventListener('submit', e => {
    e.preventDefault()

    const todoValue = addTodo[1].add.value.trim();
    console.log(todoValue);
    if (todoValue.length) {
        htmlList(todoValue)
    }
    addTodo[1].reset()



}
)

listItems.addEventListener('click', e => {
    console.log(e.target.tagName);

    if (e.target.tagName === 'I') {
        e.target.parentElement.remove()
    }


})
