async function ambilData(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const output = document.getElementById("data");

        data.forEach(element => {
            const Produk = document.createElement("div");
            Produk.className = "w-full h-80 bg-light-gray rounded-2xl shadow-sm/50 hover:bg-gray-300 hover:transition-all duration-300 p-5";

            Produk.innerHTML =`
            <div>
            <img src="${element.image}" class="w-auto h-50">
            <h1 class="text-sm">${element.title}</h1>
            <h3>ID :${element.id}</h3>
            <h4>${element.price}</h4>
            </div>`;
            output.appendChild(Produk);

            Produk.addEventListener("click", () => {
              window.location.href = `index1.html?id=${element.id}`;
            });
            output.appendChild(Produk);
        });

        } catch (error) {
            console.log("Terjadi kesalahan saat mengambil data : ",error)
    }
}
ambilData();
// const bar = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//   }
// ];

// const search = document.getElementById("search");
// const output = document.getElementById("item");

// function display(products, pencarian = ''){
//   item.innerHTML = '';

//   if (products.length === 0) {
//     item.innerHTML = '<div class="no-results">Tidak ditemukan produk yang sesuai</div>'; 
//   return;
//   }

// item.forEach(pencari =>{
//   const cart = document.createElement("div");
//   cart.className = 'produkcart';

//   let highlight = pencari.title;
//   if (pencarian.length > 0){
//     const rik = new RegExp(pencarian, 'gi');
//     highlight = pencari.title.replace(rik, dicari => `span class="highlight">${dicari}</span>`);
//   }

//   cart.innerHTML = `
//     <div class="w-full h-50">${pencari.id}</div>
//     <div class="">
//     <h3>${highlight}</h3>
//     <div>ID:${pencari.id}</div>
//      <div class="">$${pencari.price.toFixed(2)}</div>
//     </div>
//     `;
//   output.appendChild(cart);
// });

// }
// let set;
// function perform(){
//   clearTimeout(set);

//   set = setTimeout(() =>{
//     const pencarian = search.value.toLowerCase().trim();

//     const filtered = bar.filter(produk => {
//       return (
//         produk.title.toLowerCase().includes(pencarian) ||
//         produk.id.toString().includes(pencarian) ||
//         produk.price.toString().includes(pencarian)
//       );
//     });
//     display(filtered, pencarian);
//   }, 300);
// }

// search.addEventListener("input", perform);
// display(bar);