const params = new URLSearchParams(window.location.search)
let pid = params.get('pid')
function fetchData(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayData(data))
		.catch((err) => console.log(err))
}
fetchData(`https://fakestoreapi.com/products/${pid}`)
function displayData (data)
{
    const image = document.createElement('img');
    image.src = data.image;
    image.classList.add('img-thumbnail')
    document.getElementById("leftDiv").appendChild(image);
    const title = document.createElement('h2');
    title.textContent = data.title;
    const price = document.createElement('p');
    price.textContent = "Price: ₹" + data.price;
    const desc = document.createElement('p');
    desc.textContent = data.description;
    const addCartButton = document.createElement('button');
    addCartButton.textContent = "add cart";
    addCartButton.addEventListener("click", () => addToCart(data))
  document.getElementById("rightDiv").append(title,desc,price,addCartButton)

}