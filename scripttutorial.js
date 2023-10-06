// Define the URL of the external API
const apiUrl = 'https://api.noroff.dev/api/v1/';

// Get the product-list container element
const productList = document.getElementById('product-list');

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process the data and display it in the product-list container
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `<h2>${product.title}</h2><p>${product.body}</p>`;
            productList.appendChild(productItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
