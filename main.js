document.addEventListener("DOMContentLoaded", init);


function init() {

    document.getElementById("btnSend").addEventListener("click", serverData.getData);



}





let serverData = {
    url: "http://davidst.edumedia.ca/mad9014/formdata.php?digits=1&max=49",
    getData: function(){
    let formData = new FormData();

    formData.append("digits", document.getElementById("digits").value);
    formData.append("max", document.getElementById("max").value);
    
    let customSettings = {

        mode: "cors",
        method: "POST",
        body: formData
    };

    let request = new Request(serverData.url, customSettings);

    fetch(request)
        .then(function (response) {
            console.log(response);
            catStatus(response.status);
            return response.json();

        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            alert(error);
        });
}
};




function getData() {

    let url = "http://davidst.edumedia.ca/mad9014/formdata.php?digits=1&max=49";

    let formData = new FormData();

    formData.append("name", document.getElementById("name").value);
    formData.append("number", document.getElementById("number").value);

    
        formData.append("Cheese", "Cheddar");
        formData.append("IQ", 12);
        formData.append("Pet", "Cats");

        formData.forEach((value, key)=> console.log(key + ": " + value));
        
        console.log(formData);

    let customSettings = {

        mode: "cors",
        method: "POST",
        body: formData
    };

    let request = new Request(url, customSettings);

    fetch(request)
        .then(function (response) {
            console.log(response);
            catStatus(response.status);
            return response.json();

        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            alert(error);
        });