import personajesData from "./Consulta.js";

document.getElementById("buttonImages").addEventListener("click", async () => {
    const { personajes } = await personajesData 
    console.log(personajes)
    const pj = document.getElementById("nombre").value
    const imagenesPjTemplate = personajes
        .find( (p) => p.name == pj)
        .imagenes.map( i => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
        .join("")

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate


    document.querySelectorAll(".personajes img").forEach( (i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle")
            const imagenSrc = e.target.src
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`
        })
    })
})

