//f14b0120
//http://www.omdbapi.com/?apikey=[yourkey]&
//http://img.omdbapi.com/?apikey=[yourkey]&

window.onload = () => {
    input = document.getElementById("search");
    input.addEventListener('keyup', (e) => {
        if(e.keyCode == 13){
            lanzarPeticion(true);
        }
    });

    // imgs = document.getElementsByTagName("img");
    // for (let i = 0; i < imgs.length; i++) {
    //     imgs[i].addEventListener('click', (e) => {
    //         ampliarInfo(e);
    //     });
    // }
}

function lanzarPeticion(first){
    let search = document.getElementById("search").value;
    let url = "https://www.omdbapi.com/?apikey=f14b0120&s=" + search;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        if(xhr.status == 200){
            let response = JSON.parse(xhr.responseText);
            if(response.Response == "True"){
                let movies = response.Search;
                if(first){
                    document.getElementById("Informacion").innerHTML = "";
                }
                for(let i = 0; i < movies.length; i++){
                    let movie = movies[i];
                    let div = document.createElement("div");
                    div.className = "movie";
                    div.innerHTML = "<h3>" + movie.Title + "</h3><img class='poster' src=" + movie.Poster + "></img><p>" + movie.Year + "</p>";+
                    document.getElementById("Informacion").appendChild(div);
                }   
            }else{
                alert(response.Error);
            }
        }else{
            alert("Error: " + xhr.status);
        }
    }
    xhr.send();
}

// function ampliarInfo(e){
//         imgs[i].addEventListener('click', (e) => {
//         let url = "http://www.omdbapi.com/?apikey=f14b0120&t=" + e.target.title;
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = () => {
//             if(xhr.status == 200){
//                 let response = JSON.parse(xhr.responseText);
//                 if(response.Response == "True"){
//                     let movie = response;
//                     div = document.getElementById("Informacion");
//                     div.innerHTML = "<p>" + movie.type + "</p>";
//                 }else{
//                     alert(response.Error);
//                 }
//             }else{
//                 alert("Error: " + xhr.status);
//             }
//         }
//         xhr.send();
//     });
// }

function limpiarPantalla(){
    document.getElementById("Informacion").innerHTML = "";
    document.getElementById("search").value = input.value;
    h2 = document.createElement("h2");
    h2.innerHTML = "Esperando busqueda...";
    document.getElementById("Informacion").appendChild(h2);
    input.value = "";
}

window.onscroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        lanzarPeticion(false);
    }
}
