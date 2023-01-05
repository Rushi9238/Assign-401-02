

function tryIt(){
    let element=document.getElementsByClassName("box");
    // element.onclick="";
    console.log(typeof(element));
    for(let i=0;i<element.length;i++){
        if(i%2!=0){
            element[i].setAttribute('style','background-color: lime;color:white');
        }
    }
    element[0].setAttribute('style','background-color:blue;color:white');
    element[8].setAttribute('style','background-color:green;color:white');
    element[16].setAttribute('style','background-color:palevioletred;color:white');

}