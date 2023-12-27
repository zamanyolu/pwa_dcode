self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./src/master.css" /*, "/icons/*.*"*/])
        })
    )
    console.log("Install!");
});



function getFileArray(directory){
    var files = fs.readdirSync(directory);
    return files
}