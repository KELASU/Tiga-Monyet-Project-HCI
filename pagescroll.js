
const scenarioObserve = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hidden = document.querySelectorAll('.hide');
hidden.forEach((element) => scenarioObserve.observe(element));