let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    if(btn.innerText === "Add Friend"){
        btn.innerText = "Pending";
    }
    else{
        btn.innerText = "Add Friend";
    }
})