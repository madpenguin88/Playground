let defaultTrip = document.getElementById("tripType")
if (defaultTrip.value == "oneWay") {
    document.getElementById("returnDate").disabled=true;
  }

document.getElementById("tripType").addEventListener("change", ifChangedBetween);

function ifChangedBetween() {
  var x = document.getElementById("tripType");
  if (x.value == "oneWay") {
    document.getElementById("returnDate").disabled=true;
  }
    else {
      document.getElementById("returnDate").disabled=false;
    }
}

let inputDate = document.getElementById("date").addEventListener("change", ifChangedDate);
let inputReturn = document.getElementById("returnDate").addEventListener("change", ifChangedReturn);
let submitButton = document.getElementById("submit").addEventListener("click", ifClickedSubmit);
let resetButton = document.getElementById("reset").addEventListener("click", ifClickedReset);

function ifChangedDate() {
  console.log(date.value)
}

function ifChangedReturn() {
  console.log(returnDate.value)
}
function ifClickedSubmit() {
    if (date.value > returnDate.value) {
        alert("Return date must be after departure date") // aici daca nu am pus nimic in return date, imi da alerta asta cand as vrea sa apara doar departure date(in cazul oneWay)
    // nu cred ca inteleg foarte bine typeOf date.value si returnDate.value , am incercat sa caut ceva dar nu am idei
    // ma gandeam ca poate se face cumva cu un parse? dar nu stiu cum
   
    }
   
    else{
    alert("Departure date: " + date.value + "\nReturn date: " + returnDate.value) // functioneaza
}
// imi trebuie un else if care sa zica invalid daca nu am selectat nici o data si apas submit
// sau cumva sa fac butonul de submit sa fie unclickable atat timp cat nu am selectat nici o data
}

function ifClickedReset() {
    date.value = "";
    returnDate.value = "";
    tripType.value = "oneWay";
    document.getElementById("returnDate").disabled=true;
}


