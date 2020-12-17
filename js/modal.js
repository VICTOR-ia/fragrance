const modal = document.querySelector('.modal')
const button = modal.querySelector('button')

{
    const handleClick = () => {
        modal.classList.add('hidden')
    }

    button.addEventListener('click', handleClick)
}
