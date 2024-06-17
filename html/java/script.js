fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        let productItems = json.products;
        let html = "<div class='row'>";
        for (const key in json.products) {
            console.log(productItems[key].thimbnail)
            html += "<div class='col-md-3 card'>";
            html += "<img src='" + productItems[key].thumbnail + " class='img-fluid'>";
            html += "<div cass='card-body'>";
            html += "<h4>" + productItems[key].title + "</h4>";
            html += "<p>" + productItems[key].discription + "</p>";
            html += "<p>" + productItems[key].price + "</p>";
            html += "<h3>" + productItems[key].rating + "</h3>";
            html += "</div>";
            html += "</div>";
        }
        html += "</div>";
        document.getElementById("result").innerhtml = html

    })

