
const homeMain = document.getElementById('home-main');
const cardContainer = document.getElementById('card-container');
const editFormContainer = document.getElementById('edit-container');
const filterList = document.getElementById('filterBox');

const productForm = document.getElementById("addProductForm");
let Products = JSON.parse(localStorage.getItem("Products"));
const totalProducts = Products.length;
document.getElementById("totalProducts").textContent = totalProducts;


function enableEdit(id){
    document.getElementById('id').value = Products[id-1].productid;
    document.getElementById('name').value = Products[id-1].productname;
    document.getElementById('categoty').value = Products[id-1].productcate;
    document.getElementById('price').value = Products[id-1].productprice;
    document.getElementById('stock').value = Products[id-1].productstock;
    document.getElementById('detail').value = Products[id-1].productdetail;
    document.getElementById('image').value = Products[id-1].productimage;
    const editForm = document.getElementById("edit-form");
    const editMain = document.getElementById("edit-main");
    editForm.style.display = "flex";
    editMain.style.filter = "blur(5px)";
}
function disableEdit(){
    const editForm = document.getElementById("edit-form");
    const editMain = document.getElementById("edit-main");
    editForm.style.display = "none";
    editMain.style.filter = "none";
}

function loadDataToLocalStorage(){
    localStorage.setItem("Products",JSON.stringify(Products));
    window.location.href = 'home.html';
}

function menuBarOpen(){
    const menuBar = document.getElementById('nav-container');
    if(menuBar.style.display == 'none'){
        document.getElementById('nav-container').style.display = 'flex';
    }else{
        document.getElementById('nav-container').style.display = 'none';
    }
}