const arrayImagenes = [
    "./imagenes/aroaereo.jpg",
    "./imagenes/calistenia.jpg",
    "./imagenes/ritmolatino.jpg"
]

const img = document.getElementById("slide");

let i = 0;

const slideShow = () =>{
    img.src = arrayImagenes [i]
    i = (i < arrayImagenes.length - 1) ? i + 1 : 0
}

const interval = () => {
    setInterval(slideShow, 2000)
}