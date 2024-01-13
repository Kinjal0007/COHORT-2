const fs=require("fs");

function WriteFile(file,data){
    fs.writeFile(file,data,(err)=>{

        if(err){
            console.log(err);
        }
        else{
            console.log("File overwriting successfull!");
        }
    });
}

let file="example.txt";
let data="Hello I'm rewriting your contents."

WriteFile(file,data);
