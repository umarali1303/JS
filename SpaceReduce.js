const fs=require("fs");
let inputArr=process.argv.slice(2);

let filesArr=[];
let optionsArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    //console.log(firstChar);
    if(firstChar=='-'){
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}
for(let i=0;i<filesArr.length;i++){

    if(!fs.existsSync(filesArr[i])){
        console.log("File does not exist"+filesArr[i]);
        return;
    }
}

let content="";
for(let i=0;i<filesArr.length;i++){
    let read=fs.readFileSync(filesArr[i]);
    content+=read+"\r\n";
}

console.log(content);
contentArr=content.split("\r\n");
console.log(contentArr);
 
let isPresent= optionsArr.includes("-s");
if(isPresent){
    for(let i=1;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if (contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
}
console.log(contentArr);
let tempArr=[];
for(let i=0;i<contentArr.length;i++){
    if(contentArr[i]!=null){
        tempArr.push(contentArr[i]);
    }
}

console.log(tempArr);
