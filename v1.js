const url = `https://api.jikan.moe/v4/random/anime`
const aplicacion = document.querySelector(`.container`)
function TraerAnimerandom(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.data.title)
        console.log(data.data)
        console.log(data.data.images.jpg.image_url)
    
        const img = document.querySelector(`img`);
        img.src = data.data.images.jpg.image_url
        const h3 = document.createElement(`h3`)
        const h4 = document.createElement(`h4`)
        h3.textContent = data.data.title
        h4.textContent = data.data.synopsis


        const div = document.createElement(`div`);
        div.appendChild(h3);
        div.appendChild(h4)
        aplicacion.appendChild(div)
    })
}
TraerAnimerandom();
