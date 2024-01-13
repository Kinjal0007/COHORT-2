const fs=require("fs");

function readfiles(file){
    fs.readFile(file,"utf-8",function(err,data){
        if(err){
            console.log("There's an error in reading the file contents.")
        }
        else{
            console.log(data);
        }
    })

    for(let i=0;i<1000000;i++){}  //Expensive Operation

    console.log("Expensive operation done");
}

let file="example.txt";
readfiles(file);
