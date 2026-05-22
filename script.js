let num = parseInt(prompt("Enter a number between 1 to 6: "))

check(num)

function check(num) {
    console.log("you have entered:", num);
    if (num <= 6 && num >= 1) {
        switch (num) {
            case 1:
                let num2 = parseInt(prompt("Enter any positive number to know whether it a prime number"))
                primeno(num2)
                break
            case 2:
                let num4 = parseInt(prompt("Enter any number to check the sum of all digits:"))
                sumdigit(num4)
                break
            case 3:
                let num5 = parseInt(prompt("Enter any positive number to check whether its a Armstrong number:"))
                armstrong(num5)
                break
            case 4:
                let num6 = parseInt(prompt("Enter a number to add all previous digits:"))
                suma(num6)
                break
            case 5:
                let num1 = parseInt(prompt("Enter any number to get a table of it:"))
                table(num1)
                break
            case 6:
                let num7 = parseInt(prompt("Enter a number to get the factorial of it:"))
                facto(num7)
                break
        }
    }else{
        return console.log("wrong number. Enter again by refreshing the page");
    }
    

}

function suma(num6) {

    let sum = 0;
    for (let i = 0; i <= num6; i++) {
        sum += i
    }
    return console.log("sum of", num6, "is", sum);

}

function table(num1) {
    for (let i = 1; i <= 10; i++) {
        let res = console.log(num1,"x", i,"=", num1*i);
    }

}



function primeno(num2) {
    if (num2 <= 0) {
        prompt("You have entered a negative number, Please Enter any positive number");
    }
    else {
        for (let i = 2; i <= Math.sqrt(num2); i++) {
            if (num2 % i === 0) {
                return console.log(num2, "is not a prime number");
            }
        }
    }
    return console.log(num2, "is a prime number");
}


function sumdigit(num4) {
    let sum = 0;
    if (num4 <= 0) {
        prompt("It is a negative number, Enter a +ve number")
    }
    else {
        while (num4 > 0) {
            let res = num4 % 10;
            num4 = Math.floor(num4 / 10);
            sum += res
            if (sum >= 10) {
                let br = sum % 10
                newsum = Math.floor(sum / 10)
                sum = newsum + br
            }
        }
    }

    return console.log(sum);
}

function armstrong(num5) {
    let sum = 0;
    if (num5 <= 0) {
        prompt("Number is a negative number. Enter again")
    }
    else {
        while (num5 > 0) {
            let res = num5 % 10
            let num5 = Math.floor(num5 / 10)
            let cuba = res ** 3
            sum += cuba
        }
    }
    return console.log(sum);

}




function facto(num7){

for (let i = 1; i <= num7; i++) {
    if (num7 % i == 0) {
        console.log(i, "is a factor of ", num7);
    }
}
}






