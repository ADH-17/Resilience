//Handles the flagging of already blocked sites

let blocked_sites = [];

// get the data from blocked sites.json
fetch(chrome.runtime.getURL("blocked_sites.json"))
.then(response => response.json)
.then(data =>{
    //output for debugging
    console.log(data);
});