let selectedProduct = "";

function showSection(id){
    document.getElementById("about").style.display = "none";
    document.getElementById("market").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function goJual(){
    window.location.href = "jual.html";
}

function showProduct(name,price){
    selectedProduct = name;
    document.getElementById("popup").style.display = "flex";
    document.getElementById("productName").innerText = name;
    document.getElementById("price").innerText = "Harga: Rp" + price;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function beli(){
    window.open("https://wa.me/6285708829924?text=Saya ingin beli "+selectedProduct);
}
