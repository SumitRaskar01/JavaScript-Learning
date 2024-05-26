let btn = document.querySelector(".btn");
let check = 0;
btn.addEventListener("click", () => {
    if(check === 0){
        btn.classList.add("like");
        console.log("Post Liked");
        check = 1;
    }else{
        btn.classList.remove("like");
        check = 0;
        console.log("Post Unliked");
    }
})