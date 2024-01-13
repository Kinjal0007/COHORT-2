function gettime(){
    setInterval(() => {
        let time = new Date();
        console.log(time.toLocaleDateString('en-IN'));
    }, 1000);
}

gettime();