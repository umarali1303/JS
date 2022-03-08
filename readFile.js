const fs=require("fs");
let inputArr=process.argv.slice(2);

let filesArr=[];
for(let i=0;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}
let content="";
for(let i=0;i<filesArr.length;i++){
    let exist=fs.existsSync(inputArr[i]);
    if(exist){
        let read=fs.readFileSync(inputArr[i]);
        content+=read+"\n";
    }
    else{
        console.log("File does not exist"+inputArr[i]);
    }
}

// let content="";
// for(let i=0;i<filesArr.length;i++){
//     let read=fs.readFileSync(inputArr[i]);
//     content+=read+"\n";
// }

console.log(content);
