// get the values from page
// starts or controller function
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = [];
        numbers = genNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

// fill in array of numbers
function genNumbers(start, end) {
    let numbers = [];
    for(let index = start; index <= end; index++) {
        numbers.push(index);
    }
    return numbers;
}

//display numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {
    let tempRow = "";

    for(let num of numbers) {
        let className = "";
        if(num % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        tempRow += `<tr><td class="${className}">${num}</td></tr>`;
    }

    document.getElementById("results").innerHTML = tempRow;
}