let images = document.querySelectorAll("img");
console.log(images);

images.forEach((img)=>{
    img.addEventListener("click",()=>{
        remove(img)
        console.log("Image Enlarging");
        img.classList.add("expand");
    })
})

function remove(clicked){
    images.forEach((img)=>{
        if(img !== clicked){
            img.classList.remove("expand");
        }
    })
}

images.forEach((img)=>{
    img.addEventListener("dblclick",()=>{
        remove();
    })
})


