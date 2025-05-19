const anu = new URLSearchParams(window.location.search);
const produkid = anu.get('id');
async function detail() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${produkid}`);
        const produk = await response.json();
        const keluar = document.getElementById("detail-produk");

        const detailCountainer = document.getElementById("detail-produk");
        detailCountainer.innerHTML = `
         <img src="${produk.image}" class="w-auto h-70">
          <h1 class"" >${produk.title}</h1>
          <p>$${produk.price}</p>
          <p>${produk.description}</p>
          `;
    } catch (error) {
        console.log("Terjadi kesalahan saat mengambil data : ", error)
    }
}
detail();