function main(){
    let task = document.querySelector(".data").value;


    let list = document.createElement('li');
    let node = document.createElement("div");
    node.classList.add("taskData")
    
    let d1 = document.createElement("div");
    d1.classList.add("values");
    d1.textContent = task;
    node.appendChild(d1);

    let d2 = document.createElement("div");
    d2.classList.add("icons");
    let i1 = document.createElement("i");
    let i2 = document.createElement("i");
    let i3 = document.createElement("i");
    i1.classList.add("fa-solid");
    i1.classList.add("fa-lg");
    i1.classList.add("fa-circle-check");
    i1.classList.add("i1");
    let att = document.createAttribute("onclick");
    att.value = "icon1()";
    i1.setAttributeNode(att);

    i2.classList.add("fa-solid");
    i2.classList.add("fa-lg");
    i2.classList.add("fa-pen-to-square");
    i2.classList.add("i2");
    


    i3.classList.add("fa-solid");
    i3.classList.add("fa-lg");
    i3.classList.add("fa-circle-xmark");
    i3.classList.add("i3");
    att = document.createAttribute("onclick");
    att.value = "icon3(i3)";
    i3.setAttributeNode(att);


    d2.appendChild(i1);
    d2.appendChild(i2);
    d2.appendChild(i3);
    node.appendChild(d2);

    list.appendChild(node);
    document.querySelector('ul').appendChild(list);


    let field = document.querySelector(".data");
    field.value = "";

    let dis = document.getElementById("button-addon2");
    dis.disabled = true;
}


$("#entry").keydown(function(e){
    let btn = document.getElementById("button-addon2");
    let z = document.querySelector(".data").value;
    if(z === ""){
        // i have to press backspace 1 extra time to enter this condition!!
        btn.disabled = true;
    } else{
        // i have to enter more than 1 char to enter this condition
        btn.disabled = false;
    }
});


function clearTasks(){
    let tasks = document.querySelector(".mainBox");
    tasks.innerHTML = "<ul></ul>";
}



// let icon1 = document.querySelector(".i1");
// icon1.addEventListener("click", function(){
//     let task = document.querySelector(".values");
//     task.innerHTML = "<s>"+task.textContent+"</s>";
// });

function icon1(){
    let task = document.querySelector(".values");
    task.innerHTML = "<s>"+task.textContent+"</s>";
}


function icon3(className){
    
}