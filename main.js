document.addEventListener("DOMContentLoaded", init);

let pages = [];

function init() {
    document.getElementById("btnSend").addEventListener("click", btnGenerate);

    document.getElementById("btnBack").addEventListener("click", startAgain);

    pages = document.querySelectorAll(".page");
    console.log(pages);


}

function startAgain() {
    pages[0].classList.toggle("active");
    pages[1].classList.toggle("active");
}

function btnGenerate() {
    pages[0].classList.toggle("active");
    pages[1].classList.toggle("active");

    let url = "https://davidst.edumedia.ca/mad9014/nums.php";
    let digits = document.getElementById("digits").value;
    let max = document.getElementById("max").value;

    let formData = new FormData();

    formData.append("digits", digits);
    formData.append("max", max);

    let customSettings = {
        method: "POST",
        mode: "cors",
        body: formData
    };

    let request = new Request(url, customSettings);

    fetch(request)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.numbers);

            let list = document.querySelector(".num_list");
            list.innerHTML = "";

            for (let item of data.numbers) {
                let li = document.createElement("li");
                console.log(item);
                li.innerHTML = item;
                list.appendChild(li);
            }

        })
        .catch(function (error) {
            alert("Error: enter a number" + error.message);

        })

}
