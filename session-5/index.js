let count = 0;
const randomNumber = Math.round(Math.random() * 10);

while (count < 10) {
    console.log(randomNumber)
    count += 1
}




function getGrade(total) {
    if (total > 90) {
        console.log('A+')}
    else if (total > 80 && total <= 90) {
        console.log("A")
    }
    else if (total > 70 && total <= 80) {
        console.log("B")
    }
    else if (total > 60 && total <= 70) {
        console.log("C")
    }
    else if (total > 50 && total <= 60) {
        console.log("D")
    }
    else if (total > 40 && total <= 50) {
        console.log("E")    
    }
    else if (total > 30 && total <= 40) {
        console.log("F")
    }
    else if (total <= 30) {
        console.log("Fail")
    }
        
}

getGrade(25)


function getGrades(totals) {
    switch (true) {
        case totals > 90:
            console.log("A+")
            break;
        case totals > 80:
            console.log("A")
            break;
        case totals > 70:
            console.log("B")
            break;
        case totals > 60:
            console.log("C")
            break;
        case totals > 40:
            console.log("Fail")
  
    }
}
    
getGrades(95)
