AOS.init()
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "vertical",
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 3000,
	},
})

async function fetchData() {
	try {
		const res = await fetch("https://fakestoreapi.com/products")
		if (res.ok) {
			const data = await res.json()
			const electronicProducts = data.filter((v) => v.category == "electronics")
			displayData("electronicsData", electronicProducts)
			const mensProducts = data.filter((v) => v.category == "men's clothing")
			displayData("mensData", mensProducts)
			const womensProducts = data.filter(
				(v) => v.category == "women's clothing",
			)
			displayData("womensData", womensProducts)
			const jewelleryProducts = data.filter((v) => v.category == "jewelery")
			displayData("jewelleryData", jewelleryProducts)
		}
	} catch (err) {
		console.log(err)
	}
}
fetchData()

function displayData(id, products) {
	const mainDiv = document.getElementById(id)
	products.forEach((p, i) => {
		const productDiv = document.createElement("div")
		productDiv.classList.add("card")
		const productImage = document.createElement("img")
		productImage.classList.add("card-img-top")
		productImage.height = 200
		productImage.src = p.image
		productImage.alt = p.title
		const productTitle = document.createElement("h2")
		productTitle.classList.add("card-title")
		productTitle.textContent = p.title
		const productPrice = document.createElement("p")
		productPrice.classList.add("card-text")
		productPrice.textContent = "Price: ₹" + p.price
		const addCartButton = document.createElement("button")
		addCartButton.classList.add(["btn", "btn-primary"])
		addCartButton.text = "Add Cart"
		productDiv.append(productImage, productTitle, productPrice, addCartButton)
		mainDiv.appendChild(productDiv)
	})
}
