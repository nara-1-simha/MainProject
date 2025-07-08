


const cartItems = JSON.parse(localStorage.getItem('products'));
const mainDiv = document.getElementById('mainDiv');
displayData(cartItems);
function displayData (data)
{
    mainDiv.textContent=''
    data.forEach((data, i) =>
    {
        const item = document.createElement('div')
        item.classList.add("d-flex","justify-content-between")
         const image = document.createElement("img")
		image.src = data.image
        image.height = 100;
		const title = document.createElement("h2")
        title.textContent = data.title
        title.classList.add('text-white')
		const price = document.createElement("p")
		price.textContent = "Price: ₹" + data.price
	    const removeCartButton = document.createElement("button")
        removeCartButton.textContent = "❎"
        removeCartButton.addEventListener('click',()=>removeCart(i))
        item.append(image, title, price, removeCartButton)
        mainDiv.appendChild(item)
    })
    findTotal(data);
}
function removeCart (ind)
{
    cartItems.splice(ind, 1);
    localStorage.setItem('products', JSON.stringify(cartItems));
    displayData(cartItems)
    findTotal(cartItems)
}
function findTotal (arr)
{
    const t = arr.reduce((prev, curr) => prev + curr.price, 0)
    document.getElementById('total').textContent = "Total: ₹" + t;
}