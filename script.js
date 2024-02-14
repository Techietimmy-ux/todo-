const form = document.querySelectorAll('form')
const listItems = document.querySelector('.todos')
const searchTodo = document.querySelector('.search input')






const addTodo = (todo) => {
    const newListItem = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`

    listItems.innerHTML += newListItem
}


form[1].addEventListener('submit', e => {
    e.preventDefault()

    const todoValue = form[1].add.value.trim()
    if (todoValue.length) {
        addTodo(todoValue)
    }
    form[1].reset()




})


// deleting list items
listItems.addEventListener('click', e => {

    if (e.target.tagName === 'I') {
        e.target.parentElement.remove()
    }

})

// searching todo


const filteredItems = (term) => {
    Array.from(listItems.children).filter(item => {
        return !item.textContent.toLowerCase().includes(term)
    }).forEach(item => {
        item.classList.add('d-none')
    })

    Array.from(listItems.children).filter(item => {
        return item.textContent.toLowerCase().includes(term)
    }).forEach(item => {
        item.classList.remove('d-none')
    })



}



searchTodo.addEventListener('keyup', e => {
    const searchTodoItems = form[0].search.value.toLowerCase()

    filteredItems(searchTodoItems)


})