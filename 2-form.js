import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let a=document.querySelector(".feedback-form"),l="feedback-form-state",m=localStorage.getItem(l),e={email:"",message:""};m&&(e=JSON.parse(m),a.email.value=e.email,a.message.value=e.message);a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{t.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem(l),e.email="",e.message="",a.reset())});
//# sourceMappingURL=2-form.js.map
