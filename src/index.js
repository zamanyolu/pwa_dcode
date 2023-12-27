const fs = require("fs");


if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>
    {
        console.log("SW Registered");
        console.log(registration);

        files = getFileArray("/icons/");
        console.log("Files:");
        console.log(files);



    }).catch(error => {
        console.log("SR Registration Failed!");
        console.log(error)
    })
}


function getFileArray(directory){
    var files = fs.readdirSync(directory);
    return files
}

async function write_Files(){

    files = getFileArray("/icons/");

    console.log("Dosyalar şunlar:");
    console.log(files);
    const header = document.createElement("h4");
    header.innerHTML ="";
    header.textContent = "Dosyalar";
    const ul = document.createElement("ul");

    if (files.length ===0){
        return;
    }

    const body = document.getElementsByTagName("body");
    //
    // files.forEach((f) =>{
    //     const el = document.createElement("li");
    //     el.textContent = f;
    //     ul.appendChild(el);
    //
    // });
    //
    // body.appendChild(header);
    // body.appendChild(ul);

}

// document.addEventListener("DOMContentLoaded", write_Files);