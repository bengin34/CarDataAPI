const button   = document.querySelector("#button-addon1")
let input = document.querySelector(".inputVal").value
const message = document.querySelector(".message")
const showArea = document.querySelector(".show-area")




button.addEventListener("click", e =>{
    
let input = document.querySelector(".inputVal").value
input = input.trim();
let newArr = [];
console.log(input);
if(input == ""){
    message.innerText =  `Please enter a car name `


}else{

    const apiKey = 'PqtcDIWPrx5KPAqHRWU6jg==k77M1FxGaJI6JSx4'

const url = 'https://api.api-ninjas.com/v1/cars?model='+input
// fetch(url + input,{headers: { 'Accept' : 'PqtcDIWPrx5KPAqHRWU6jg==k77M1FxGaJI6JSx4' }})
// .then(response => response.json())
// console.log(response);



//         var model = 'camry'                                          



        fetch(url, {
            headers: {
              "X-Api-Key": apiKey
            },
          })
          .then(response => response.json())
          .then(data => {
           console.log(data);

           const Class = data[0].class
           const Cylinders = data[0].cylinders
           const FuelType = data[0].fuel_type
           const Make = data[0].make
           const Model = data[0].model
           const Transmission = data[0].transmission
         
           showArea.innerHTML += `    
           
           <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">Make:${Make} Model:${Model} </h5>
             <h6 class="card-subtitle mb-2 text-muted">Class:${Class}</h6>
             <p class="card-text">Fuel Type:${FuelType}</p>
             <a href="#" class="card-link">Cylinders: ${Cylinders}</a>
             <a href="#" class="card-link">Transmission: ${Transmission}</a>
           </div>
         </div>
           
           `



          })


}




})






