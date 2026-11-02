function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText;
            var items = JSON.parse(result);

            var basket = "";
for(var i=0; i<items.length; i++){
    var cartoona = `<div class="md:col-4 text-center">
                    <img src="${items[i].url}" class="w-100">
                    <h4>${items[i].title}</h4>
                    <h6>${items[i].id}</h6>
                    </div>
                    `;
                    basket = basket + cartoona;
}

            document.querySelector(".test").innerHTML = basket;
        }
    }

    xhttp.open("GET", 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send();
}

getApi();