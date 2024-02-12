const savetolocalstorage = (task) =>{
    let tracked = getlocalstorage();
    if(!tracked.includes(task)){
        tracked.push(task);
    }
    localStorage.setItem("tracked", JSON.stringify(tracked))
}

const getlocalstorage = () =>{
    let localStorageData = localStorage.getItem("tracked");
    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);

}

const removefromlocalstorage = (task) =>{
    let tracked = getlocalstorage();
    let index = tracked.indexOf(task);
    tracked.splice(index, 1);
    localStorage.setItem("tracked", JSON.stringify(tracked));
}

export {savetolocalstorage, getlocalstorage, removefromlocalstorage};