const buttons = document.querySelectorAll('.products li button')

for (const button of buttons) {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        
        const name = product.querySelector('h2').textContent
        const price = product.querySelector('span').textContent
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
    })
}