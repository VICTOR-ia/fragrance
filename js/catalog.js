const buttons = document.querySelectorAll('.products li button')

const handleClick = (e) => {
    modal.classList.remove('hidden')
    const product = e.currentTarget.parentElement;
        
    const name = product.querySelector('h2').textContent
    const price = parseInt(product.querySelector('span').textContent.replace(/\s+/g, '').replace('руб.'))
    const image = product.querySelector('img').src

    let localItem = localStorage.getItem(name)

    if (!localItem) {
        localStorage.setItem(name, JSON.stringify({
            price,
            image,
            quantity: 1
        }))
    } else {
        localItem = JSON.parse(localItem)
        localItem.quantity++;
        localStorage.setItem(name, JSON.stringify(localItem))
    }
}


for (const button of buttons) {
    button.addEventListener('click', handleClick)
}