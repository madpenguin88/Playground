import { addDays } from "./date.js"
import { onTripTypeChange, isTripTypeOneWay } from "./trip.js"



//implement travel date
let travelDate = document.getElementById("travelDate")
travelDate.addEventListener("change", onTravelDateChange)

function isBeforeTravelDate(date) {
  return date < new Date(travelDate.valueAsDate)
}

//implement return date
let returnDate = document.getElementById("returnDate")
returnDate.addEventListener("change", onReturnDateChange)
returnDate.disabled = isTripTypeOneWay()



//implement reset 
let reset = document.getElementById("reset")
reset.addEventListener("click", () => {
  travelDate.value = ""
  returnDate.value = ""
  tripType.value = "oneWay"
  returnDate.disabled = isTripTypeOneWay()
})


//implement submit button
let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
  if (isTripTypeOneWay()) {
    alert(`Travel date: ${travelDate.value}`)
  } else {
    alert(`Travel date: ${travelDate.value} \nReturn date: ${returnDate.value}`)
  }
})

function mustNotBeBeforeToday(el) {
  if (el.valueAsDate < new Date()) {
    el.valueAsDate = new Date()
  }
}

// on Triptype change disable return date if one way
onTripTypeChange((type) => {
  returnDate.disabled = isTripTypeOneWay()
  if (isTripTypeOneWay()) {
    returnDate.value = ""
  }
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
