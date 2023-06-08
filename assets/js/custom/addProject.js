const prioritySelector = document.getElementById("priority");


prioritySelector.addEventListener("change", (event) => {
    var currPriority = event.target.value ; 
    if(currPriority === "NORMAL"){
        prioritySelector.style.color = "#ADD8E6" ;
    }else if(currPriority === "LOW"){
        prioritySelector.style.color = "#FFFF00" ;
    }else {
        prioritySelector.style.color = "#FF0000" ;
    }
});