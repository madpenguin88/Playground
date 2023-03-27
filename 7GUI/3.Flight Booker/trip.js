export let tripType = document.getElementById("tripType")

export function onTripTypeChange(handler) {
    tripType.addEventListener("change", (event) => {
        handler(event.target.value)
    })
}

export function isTripTypeOneWay() {
  return tripType.value === "oneWay"
}