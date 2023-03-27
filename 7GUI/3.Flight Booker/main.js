import { addDays } from "./date.js"
import { onTrypTypeChange, isTrypTypeOneWay } from "./trip.js"



//implement travel date
let travelDate = document.getElementById("travelDate")
travelDate.addEventListener("change", onTravelDateChange)

function isBeforeTravelDate(date) {
  return date < new Date(travelDate.valueAsDate)
}

//implement return date
let returnDate = document.getElementById("returnDate")
returnDate.addEventListener("change", onReturnDateChange)
// returnDate.disabled = isTrypTypeOneWay()

//implement reset 
let reset = document.getElementById("reset")
//implement submint button
let submit = document.getElementById("submit")

function mustNotBeBeforeToday(el) {
  let today = new Date()
  if (el.valueAsDate <= today) {
    el.valueAsDate = today.toISOString().slice(0, 10)
  }
}

// on tryptype change disable return date if one way
onTrypTypeChange((type) => {
  returnDate.disabled = isTrypTypeOneWay()
})

function onTravelDateChange(event) {
  mustNotBeBeforeToday(event.target)

}


function onReturnDateChange(event) {
  mustNotBeBeforeToday(event.target)
  if (isBeforeTravelDate(event.target.valueAsDate)) {
    event.target.valueAsDate = addDays(travelDate.valueAsDate, 1) 
  }
}





















// let defaultTrip = document.getElementById("tripType")
// if (defaultTrip.value == "oneWay") {
//     document.getElementById("returnDate").disabled=true;
//   }

// document.getElementById("tripType").addEventListener("change", ifChangedBetween);

// function ifChangedBetween() {
//   var x = document.getElementById("tripType");
//   if (x.value == "oneWay") {
//     document.getElementById("returnDate").disabled=true;
//   }
//     else {
//       document.getElementById("returnDate").disabled=false;
//     }
// }

// let inputDate = document.getElementById("date").addEventListener("change", ifChangedDate);
// let inputReturn = document.getElementById("returnDate").addEventListener("change", ifChangedReturn);
// let submitButton = document.getElementById("submit").addEventListener("click", ifClickedSubmit);
// let resetButton = document.getElementById("reset").addEventListener("click", ifClickedReset);

// function ifChangedDate() {
//   console.log(date.value)
// }

// function ifChangedReturn() {
//   console.log(returnDate.value)
// }
// function ifClickedSubmit() {
//     if (date.value > returnDate.value) {
//         alert("Return date must be after departure date") // aici daca nu am pus nimic in return date, imi da alerta asta cand as vrea sa apara doar departure date(in cazul oneWay)
//     // nu cred ca inteleg foarte bine typeOf date.value si returnDate.value , am incercat sa caut ceva dar nu am idei
//     // ma gandeam ca poate se face cumva cu un parse? dar nu stiu cum
   
//     }
   
//     else{
//     alert("Departure date: " + date.value + "\nReturn date: " + returnDate.value) // functioneaza
// }
// // imi trebuie un else if care sa zica invalid daca nu am selectat nici o data si apas submit
// // sau cumva sa fac butonul de submit sa fie unclickable atat timp cat nu am selectat nici o data
// }

// function ifClickedReset() {
//     date.value = "";
//     returnDate.value = "";
//     tripType.value = "oneWay";
//     document.getElementById("returnDate").disabled=true;
// }


