document.getElementById('add-product-btn').addEventListener('click', function(){

    // console.log("I am working");
    // Create a new div element for the product

    const productname = document.getElementById("product-name").value;
    const productprice = parseFloat(document.getElementById("product-price").value);

    if (productname.trim() === "" || productname.trim() === " " || productprice === "" || productprice === " " || productprice <= 0 || isNaN(productprice)) {
        alert("Please enter a valid name and price");
        return;
    }
    
    
    const productId = Date.now();
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.dataset.id = productId;

    // Set the inner HTML of the new product element
    productDiv.innerHTML = `
        <p>Name: ${productname} - Price: $${productprice}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById("product-list").appendChild(productDiv);
    
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
});

let currentEditElement = null;

document.getElementById("product-list").addEventListener('click', function (event) {
    // console.log("I am clicked", event);
    // console.log(event.target.classList.contains("edit-btn"));
    if (event.target.classList.contains("edit-btn")) {
        currentEditElement = event.target.parentElement;
        // console.log(currentEditElement);
        // document.getElementById("edit-product-name").value = currentEditElement.querySelector("p").textContent;

        const productName = currentEditElement.querySelector("p").textContent.split(" - ")[0].replace("Name: ", "");
        const productPrice = currentEditElement.querySelector("p").textContent.split(" - ")[1].replace("Price: $", "");

        document.getElementById("edit-product-name").value = productName;
        document.getElementById("edit-product-price").value = productPrice;

        document.getElementById("edit-product-form").style.display = "block";
    }

    if (event.target.classList.contains("delete-btn")) {
        if(confirm("Are you sure you want to delete this product?")) {
            const productDiv = event.target.parentElement;
            document.getElementById("product-list").removeChild(productDiv);
        }
    }
});

document.getElementById("save-btn").addEventListener("click", function(){
    if (currentEditElement) {
        const newName = document.getElementById("edit-product-name").value;
        const newPrice = document.getElementById("edit-product-price").value;
        currentEditElement.querySelector("p").textContent = `Name: ${newName} - Price: $${parseFloat(newPrice).toFixed(2)}`;
        document.getElementById("edit-product-form").style.display = "none";
        currentEditElement = null;
    }
})

document.getElementById("cancel-btn").addEventListener("click", function(){
    document.getElementById("edit-product-form").style.display = "none";
    currentEditElement = null;
})



// HOW to do multiple deletes, Add delete animation
// Create a TO DO app: