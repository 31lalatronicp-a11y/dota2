// Obtener los elementos del DOM
const openModalBtn = document.getElementById("abrir");
const overlay = document.getElementById("nose");
const closeModalBtn = document.getElementById("cerrar");

// Función para abrir el modal
const openModal = () => {
    overlay.classList.add("activo");
};

// Función para cerrar el modal
const closeModal = () => {
    overlay.classList.remove("activo");
};

// Abrir el modal al hacer clic en el botón de abrir
openModalBtn.addEventListener("click", openModal);

// Cerrar el modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener("click", closeModal);

// Cerrar el modal al hacer clic fuera de la caja del modal (en el overlay)
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});