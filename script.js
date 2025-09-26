const a = document.getElementById("abrir")
const b = document.getElementById("nose")
const c = document.getElementById("caja")
const d = document.getElementById("cerrar")

a.addEventListener("click", ()=>{
    b.classList.add("activo")
} )


d.addEventListener("click" ,()=>{
    b.classList.remove("activo")
})