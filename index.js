function getDetails() {
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;

   // alert('Date = '+ date + ' and Gender = '+gender);


//    Check if user has entered a future date as birthday
const validBirthday = checkIfPastDate(date);
alert(validBirthday);
if(validBirthday==false){
    alert("Your birthday should not be in the future!");
}
else{
    const dayOfTheWeek = dayOfWeek(date)
    const name = akanName(dayOfTheWeek, gender);
    alert(`You were born on:` +dayOfTheWeek +` and your Akan Name is: `+name);

}

    


}

function dayOfWeek(date) {
    // Get day, month, year and century from date
    const splitDate = date.split('-');
    const year = splitDate[0];
    const MM = parseInt(splitDate[1]);
    const DD = parseInt(splitDate[2]);

    const CC = parseInt(year.slice(0, 2));
    let YY = parseInt(year.slice(-2));
   // alert(YY % 4);


    // const feb = validateFeb(MM, DD, YY);
    // alert(feb);

    // Adjust month and year for Zeller's formula
    if (MM < 3) {
        MM += 12;
        YY -= 1;
    }


    // const ddValid = validateDay(DD);
    // alert(ddValid)
    //if (ddValid == true) {
        // Zeller's Congruence calculation
        const h = (DD + Math.floor((13 * (MM + 1)) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - 2 * CC) % 7;

        // Mapping h to corresponding day of the week
        const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return days[(h + 7) % 7]; // Adjusting for negative values of h
   // }
    // else {
    //     return 'Invalid Birthday Date!!!';
    // }
}


function validateFeb(mm, dd, yy) {
    const leapYear = yy % 4;
    //alert(mm)
    if (mm == 2) {

        if (dd <= 0 || dd > 29 && leapYear == 0) {

            return 'Kindly input the correct date for February (01-29)';
        }
        else if (dd <= 0 || dd > 28 && leapYear != 0) {
            return 'Kindly input the correct date for February (01-28)';
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }

}


function validateDay(dd) {
    if (dd <= 0 || dd > 31) {
        return 'Kindly input the correct date. ranging from 1-31';

    } else {
        return true;
    }
}

function akanName(day, gender) {

    const names = {
        "male": {
            "Sunday": "Kwasi",
            "Monday": "Kwadwo",
            "Tuesday": "Kwabena",
            "Wednesday": "Kwaku",
            "Thursday": "Yaw",
            "Friday": "Kofi",
            "Saturday": "Kwame"
        },
        "female": {
            "Sunday": "Akosua",
            "Monday": "Adwoa",
            "Tuesday": "Abenaa",
            "Wednesday": "Akua",
            "Thursday": "Yaa",
            "Friday": "Afia",
            "Saturday": "Ama"
        }
    };

    const dayName = names[gender.toLowerCase()][day];
    return dayName;

}

function isDateValid(date){
    return isNaN(new Date(date));
}


function checkIfPastDate(date){
    // The date you want to check
const inputDate = new Date(date); 

// Get the current date
const currentDate = new Date();

// Compare the input date with the current date
if (inputDate > currentDate) {
  return false;
} else {
  return true;
}
}
