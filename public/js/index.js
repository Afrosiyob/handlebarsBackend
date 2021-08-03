window.onload = function() {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function() {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
    }, 500);
};

M.toast({ html: "I am a toast!", classes: " blue " });

const createUserSubmitBtn = document.querySelector("#createUserSubmitBtn");
createUserSubmitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;
    console.log(username, password);
});