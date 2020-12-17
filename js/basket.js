const items = document.querySelector(".items")
const itemTemplate = document.querySelector("#item")
const localItems = [...Object.entries(localStorage)]
const priceElement = document.querySelector(".price")

const handleClick = (e) => {
  const product = e.currentTarget.parentElement

  const name = product.querySelector("h2").textContent
  const index = localItems.findIndex((localItem) => localItem[0] === name)

  localItems.splice(index, 1)

  localStorage.removeItem(name)
  product.remove()

  if (!localItems.length) {
    priceElement.querySelector("span").textContent = `0 руб.`
    priceElement.querySelector("b").textContent = `0x`
    priceElement.querySelector("button").disabled = true
  } else {
    renderNodes(localItems)
  }
}

priceElement.querySelector("button").addEventListener(`click`, () => {
  items.innerHTML = ""
  localStorage.clear()
  priceElement.querySelector("span").textContent = `0 руб.`
  priceElement.querySelector("b").textContent = `0x`
  priceElement.querySelector("button").disabled = true
  modal.classList.remove("hidden")
})

const renderNodes = (data) => {
  items.innerHTML = ""
  priceElement.querySelector("button").disabled = false
  return data.reduce(
    (acc, dataItem) => {
      const [name, info] = dataItem
      const { price, quantity, image } = JSON.parse(info)

      const item = itemTemplate.content.querySelector(".item").cloneNode(true)
      item.querySelector("img").src = image
      item.querySelector("h2").textContent = name
      item.querySelector("span").textContent = `${price} руб.`
      item.querySelector("b").textContent = `${quantity}x`
      item.querySelector("button").addEventListener("click", handleClick)
      items.prepend(item)
      acc.price = acc.price + price * quantity
      acc.quantity = acc.quantity + quantity

      priceElement.querySelector("span").textContent = `${acc.price} руб.`
      priceElement.querySelector("b").textContent = `${acc.quantity}x`

      return acc
    },
    {
      price: 0,
      quantity: 0,
    }
  )
}
if (localItems.length) {
  renderNodes(localItems)
}
