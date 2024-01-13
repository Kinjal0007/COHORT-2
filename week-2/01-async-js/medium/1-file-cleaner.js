var fs =require('fs');

function readFile(){
    return new Promise((resolve) => {
        fs.readFileSync("readme.txt","utf-8",(err,data) => {
            resolve(data);
        });
    });
}

function writeFile(str){
    return new Promise((resolve) => {
        fs.writeFile("readme.txt",str,"utf-8",() => {
            console.log("Done overiding file contents")
        });
    });
}

function clean(str){
    let cleanstr=str.split(" ").filter((i) =>{
    return true ?i:false;
    })
    .join(' ');
    return cleanstr;
}

async function main(){
    let str= await readFile();
    newstr= clean(str);
    writeFile(newStr);
}

main();