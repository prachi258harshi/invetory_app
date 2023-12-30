let current_inventory = {
    1: {
        name: "Munch",
        brand: "nestle",
        price: 20,
        quantity: 10,
    },
    2: {
        name: "icecream",
        brand: "amul",
        price: 200,
        quantity: 5,
    },
    3: {
        name: "namkeen",
        brand: "haldiram's",
        price: 150,
        quantity: 3,
    },
    4: {
        name: "soap",
        brand: "pears",
        price: 30,
        quantity: 7,
    },
    5: {
        name: "shampoo",
        brand: "dove",
        price: 100,
        quantity: 2,
    },
};



let orders = {
    1: {
        name: "Munch",
        brand: "Nesle",
        price: 20,
        quantity: 5,
    },
};

function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}



function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}



function addCurrentInventory() {
    let productName = document.querySelector("#current_order_product_name").value;
    let productBrand = document.querySelector(
        "#current_order_product_brand"
    ).value;
    let productPrice = document.querySelector(
        "#current_order_product_price"
    ).value;
    let productQuantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productPrice) ||
        is_empty(productQuantity)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#current_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
}

