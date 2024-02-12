import { savetolocalstorage, getlocalstorage, removefromlocalstorage } from "./localstorage.js";

let addBtn = document.getElementById("addBtn");
let toDoCount = document.getElementById("toDoCount");
let inProgCount = document.getElementById("inProgCount");
let completeCount = document.getElementById("completeCount");
let todos = document.getElementById("todos");
let inprogs = document.getElementById("inprogs");
let completes = document.getElementById("completes");
let projName = document.getElementById("projName");
let projDesc = document.getElementById("projDesc");
let choiceA = document.getElementById("choiceA");
let choiceB = document.getElementById("choiceB");
let choiceC = document.getElementById("choiceC");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let projDate = document.getElementById("projDate");
let saveit = document.getElementById("saveit");

let task = "";
let priority = 0;
let status = 0;
//1 is to-do, 2 is in progress, 3 is complete


projName.addEventListener("keydown", (e)=>{
    let name = projName.value;
    savetolocalstorage(name)
});
projDesc.addEventListener("keydown", (e)=>{
    let descript = projDesc.value;
    savetolocalstorage(descript)
});
projDate.addEventListener("click", (e)=>{
    let dayte = projDate.value;
    savetolocalstorage(dayte)
})

saveit.addEventListener("click", ()=>{
    // savetolocalstorage(task[0]name, desc, priority, due date)
    //task divs- 1=todos.append(div), 2=inprogs.append(div), 3=completes.append(div)
    let tracked = getlocalstorage();
    tracked.map(name => {
        let div = document.createElement("div");
        let h6 = document.createElement("h6");
        let button = document.createElement("button");
        h6.textContent = name;
        button.type = "button";
        button.textContent = "View Task";

        button.addEventListener("click", (e)=>{
            let subdiv = document.createElement("div");
            let p = document.createElement("p");
            let pp = document.createElement("p");
            let another = document.createElement("p");
            let close = document.createElement("button");

            p.textContent = name;
            pp.textContent = descript;
            // let another = dayte;
            //cannot redeclare block scoped variable error? 
            close.textContent = "Remove task";

            close.addEventListener("click", (e)=>{
                removefromlocalstorage(name, descript);
            })
        })

        div.append(h6);
        div.append(button);
        todos.append(div);
    })
});
