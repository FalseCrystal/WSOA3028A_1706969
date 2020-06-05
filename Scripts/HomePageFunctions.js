function revealHobby(){

    let images=document.querySelectorAll("#GallerySources img"); 

    for(let i=0;i<=images.length;i++){

        images[i].src = images[i].getAttribute('src');
    }
}