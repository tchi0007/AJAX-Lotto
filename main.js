document.addEventListener("DOMContentLoaded", init);


function init() {

    document.getElementById("btnSend").addEventListener("click", btnGenerate);


}

let url = "https://davidst.edumedia.ca/mad9014/formdata.php";

function btnGenerate(){
    
    let formdata = new FormData();
    formdata.append("digits", document.getElementById("digits").value);
    formdata.append("max", document.getElementById("max").value);
    
    let customSettings= {
        method: httpRequest,
        mode: "cors",
        body: formdata
    };
    
    let request = new Request(url, customeSettings);
    
    fetch(request)
        .then(function  (response){
        console.log(response);
    })
}