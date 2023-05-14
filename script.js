
const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".foodBack");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    // Switch Tab content
    const filter = e.target.dataset.filter;
    // console.log(filter);
    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "flex";
      } else if (product.classList.contains(filter)) {
        product.style.display = "flex";
      } else {
        product.style.display = "none";
      }
    });
  });
}

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".food h3");
const noResult = document.querySelector(".no-result");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value;

  productName.forEach((product) => {
    const item = product.textContent;

    if (item.indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
      
    } else {
      product.parentElement.parentElement.style.display = "none";
     
    }
  })}
  //active btn
// var header = document.getElementById("filter")
//  var sp =  header.querySelectorAll('.btn')
//   console.log(sp);
//  for(var i = 0 ; i<sp.length;i++){
    
//     sp[i].addEventListener("click",function(){
//         var current = 
//         document.getElementsByClassName("active");
//         current[0].className =
//         current[0].className.replace("active" , "");
//         this.className+=" active"
//     });
//  }