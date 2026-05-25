




fetch("imagenes.json")
.then( response => response.json() )
.then( data => {
    const contenedores = document.querySelectorAll('.div-cart');

    data.fotos.forEach((src, index) => {
        const card = contenedores[index];
        const imagen = document.createElement('img');
        imagen.src = src;
        imagen.className = 'thumb';

        const contenedorImg = card.querySelector('.div-img');
        const btnVerMas = card.querySelector('.btn-ver-mas');

        contenedorImg.appendChild(imagen);

        imagen.addEventListener("click", () => {
            abrirModal(src);
        });

        btnVerMas.addEventListener("click", () => {
            abrirModal(src);
        });
    });
});




const abrirModal = (src) => {
    if (window.innerWidth < 374) {
        console.log("Modal deshabilitado");
        return;
    }

    const modal = document.querySelector('.dialogo');
    modal.showModal();
    const modalImg = document.querySelector('.modal-img');
    modalImg.src = src;
};

const cerrarModal = () => {
    const modal = document.querySelector('.dialogo');
    modal.close();
};