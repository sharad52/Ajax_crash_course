//method to make ajax calls
//jquery
//Axios
//Superagent
//Fetch API
//ProtoType
//Node Http

let btnText = document.getElementById("btn");

btnText.addEventListener("click",loadText);
function loadText() {
    //create xmlhtttprequest object first 
    let xhttp = new XMLHttpRequest();
    // console.log(xhttp)
    //open this xhttp object
    xhttp.open('GET','file.txt',true);
    // console.log('ReadyState:',xhttp.readyState);
    xhttp.onload = function (){
        if (this.status==200) {
            console.log(xhttp.response);
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = "Not found";
        }
    }
    xhttp.send()
}
