document.addEventListener("DOMContentLoaded", function (event) {
            alert("Script started working");

            function findMin() {
                minInput = document.querySelector('.js-store-filter-pricemin');
            }

            function delay(ms) {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, ms);
                });
            }
            let catalog, minInput;
            catalog = document.querySelector('#rec446610068');
            while (catalog == null) {
                setTimeout(сatalog = document.querySelector('#rec446610068'), 1000);
            }
            if (catalog != null) alert("Catalog");
            
            delay(5000).then(findMin());
            while(minInput == null) {
                delay(3000).then(findMin());
            }

            if(minInput != null) alert("Min input: ", minInput);

            minInput.addEventListener("change", function () {
                alert(`MIN INPUT VALUE: ${minInput.value}`);
            })
        });
