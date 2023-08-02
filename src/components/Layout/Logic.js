// let username = document.getElementById("name");
// let email = document.getElementById("email");
// let occasion = document.getElementById("occasion");
// let month = document.getElementById("month");
// let day = document.getElementById("day");
// let year = document.getElementById("year");
// let spinner = document.getElementById("spinner");
// let popup = document.getElementById("popup");
// let submit = document.getElementById("submit");
// spinner.style.display = "None";

export function checkRequiredFields() {
    console.log("Inside check required fields");
    // spinner.style.display = "None";
    let username = document.getElementById("name");
    let email = document.getElementById("email");
    let occasion = document.getElementById("occasion");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let day = document.getElementById("day");

    if (username.value.trim().length == 0) return alert("Please enter name.");
    if (email.value.trim().length == 0) return alert("Please enter email.");
    if (!checkEmailPattern(email.value.trim())) return alert("Invalid email");
    if (occasion.value.trim().length == 0) return alert("Please select occasion");
    if (!checkDate(day.value, month.value, year.value)) return alert("Invalid Date!");
    post();
}

export function checkEmailPattern(emailValue) {
    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(emailValue);
}

export function post() {
    // spinner.style.display = "None";
    // let submit = document.getElementById("submit");
    // let spinner = document.getElementById("spinner");
    let username = document.getElementById("name");
    let email = document.getElementById("email");
    let occasion = document.getElementById("occasion");
    
    console.log("Above submit.style.display");
    // submit.style.display = "None";
    // spinner.style.display = "block";
    console.log("below spinner.style.display");
    let date = prepareDate()
    console.log("below date");
    fetch("https://wellwisherproducer-wellwisherteam2023.b4a.run/producer/api/v1/subscribe", {
        method: "POST",
        body: JSON.stringify({
            "name": username.value.trim(),
	        "email": email.value.trim(),
	        "occasion": occasion.value.trim(),
	        "occasionDate": date
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(resp => processResponse(resp))
    .catch (error => processError(error));
}

export function processError(error) {
    // let submit = document.getElementById("submit");
    // let spinner = document.getElementById("spinner");
    console.log(error);
    // submit.style.display = "block";
    // spinner.style.display = "None";
    alert("Hmm! Something went wrong!");
}

export function processResponse(resp) {
    // let submit = document.getElementById("submit");
    // let spinner = document.getElementById("spinner");
    let popup = document.getElementById("popup");
    // submit.style.display = "block";
    // spinner.style.display = "None";
    if (resp.status == 409) return alert("Similar entry already exists!");
    if (resp.status == 200) {
        popup.style.visibility = "initial";
        popup.style.opacity = 1;
        // submit.disabled = true;
        document.title = "Thanks for signing up!";
        return;
    };
    if (resp.status>=400 && resp.status<500) return alert("Bad Request!");
    if (resp.status>=500 && resp.status<600) return alert("Something went wrong!");
}

export function prepareDate() {
    let mon = document.getElementById("month").value;
    if (mon.length<2) mon = "0"+mon;
    if (mon.length>2) mon = mon[mon.length-2]+mon[mon.length-1];
    let d = document.getElementById("day").value;
    if (d.length<2) d = "0"+d;
    if (d.length>2) d = d[d.length-2]+d[d.length-1];
    let y = document.getElementById("year").value;
    if (y.length>4) y = y[y.length-4]+y[y.length-3]+y[y.length-2]+y[y.length-1];
    return y+"-"+mon+"-"+d;
}

export function checkDate(day, month, year) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const today = new Date();
    if (year < 1900 || year > today.getFullYear()) return false;
    if (month < 1 && month > 12) return false;
    if (day > 0) {
        if (month == 2 && isLeapYear(year)) days[1] = 29; 
        let monthdays = days[month-1];
        if (day <= monthdays) return true;
    }
    return false;
}

export function  isLeapYear(year) {
    if ((year % 400 == 0) && (year % 100 == 0))
        return true;
    if ((year % 4 == 0) && (year % 100 != 0))
        return true;
    return false;
}

export function isCustom()
{
    console.log("dasdasdad")
    let val = document.getElementById("occasion").value;
    console.log("dasdasdad val",val)

    if(val == 'other')
    document.getElementById("customDiv").style.display='block';
    else
     document.getElementById("customDiv").style.display='none';
}