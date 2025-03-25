let feedbackForm = document.querySelector(".feedback-form");
let localStorageKey = "feedback-form-state";
let savedLocalStorage = localStorage.getItem(localStorageKey);

let formData = {
    email: "",
    message: ""
}

if(savedLocalStorage){
    formData=JSON.parse(savedLocalStorage);
    feedbackForm.email.value = formData.email;
    feedbackForm.message.value = formData.message;
}

feedbackForm.addEventListener("input", event => {
    formData[event.target.name] = event.target.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener("submit", event => {
    event.preventDefault();
    if(formData.email === "" || formData.message === ""){
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem(localStorageKey);
        formData.email = "";
        formData.message = "";
        feedbackForm.reset();
    }
});