export let tripType = document.getElementById("tripType")

export function onTrypTypeChange(handler) {
    tripType.addEventListener("change", (event) => {
        handler(event.target.value)
    })
}

export function isTrypTypeOneWay() {
  return tripType.value === "oneWay"
}