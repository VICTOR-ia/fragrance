const items = document.querySelector('.items')
const itemTemplate = document.querySelector('#item')
const localItems = Object.entries(localStorage)
const buttons = document.querySelectorAll('.items li button')

const handleClick = (e) => {
    const product = e.currentTarget.parentElement;
        
    const name = product.querySelector('h2').textContent
    localStorage.removeItem(name)
    product.remove()
}


for (const localItem of localItems) {
    const [name, info] = localItem
    const { price, quantity, image } = JSON.parse(info)

    const item = itemTemplate.content.querySelector('.item').cloneNode(true)
    item.querySelector('img').src = image
    item.querySelector('h2').textContent = name
    item.querySelector('span').textContent = price
    item.querySelector('b').textContent = `${quantity}x`
    item.querySelector('button').addEventListener('click', handleClick)
    items.appendChild(item)
}

for (const button of buttons) {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        
        const name = product.querySelector('h2').textContent
        localStorage.removeItem(name)
        product.remove()
    })
}