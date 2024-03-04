function getDetails(){
    const date = document.getElementById('date').value;
    const gender= document.getElementById('gender').value;

    alert('Date = '+ date + ' and Gender = '+gender);
    const splitDate=date.split('-');
    const year=splitDate[0];
    const mm = splitDate[1];
    const dd=splitDate[2]

    const cc=year.slice(0,2);
    const yy = year.slice(-2)
    //alert(yy);

    

  const dayOfTheWeek=dayOfWeek(cc,yy,mm,'04')
    alert(dayOfTheWeek);

    
}

function dayOfWeek(CC, YY, MM, DD) {
    // Adjust month and year for Zeller's formula
    // if (MM < 3) {
    //     MM += 12;
    //     YY -= 1;
    // }

const h = (DD + Math.floor((13*(MM+1))/5) + YY + Math.floor(YY/4) + Math.floor(CC/4) - 2*CC) % 7;
    // Zeller's Congruence calculation
   // const h = (DD + Math.floor((13*(MM+1))/5) + YY + Math.floor(YY/4) + Math.floor(CC/4) - 2*CC) % 7;
//  const h = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

    // h will be in the range 0 to 6, so we map it to the corresponding day
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const dayOfWeek = days[(h + 7) % 7];
    //return days[(h + 7) % 7]; // Adjusting for negative values of h
    return days[(h + 7) % 7];
}


// function dayOfWeek(CC, YY, MM, DD) {
//     // Adjust month for Zeller's formula
//     // if (MM < 3) {
//     //     MM += 12;
//     //     YY -= 1;
//     // }

//     // Zeller's Congruence calculation with modulus operation
//    // const h = (((((CC/4) - 2*CC - 1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7) + 7) % 7;
//    const h = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7

//    alert(h);
//     // Mapping h to corresponding day of the week
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     return days[(h + 7) % 7];
// }