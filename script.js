// console.log("Sum of a given number:");

// let sum = 0;
// for(let i=0;i<=10;i++){
//     sum+=i
// }
// console.log(sum);

// console.log("table of a given number:");

// let num1 = 4;

// for(let i=1;i<=10;i++){
//     console.log(num1*i);
// }

// console.log("Check numbers for prime number:");
let num = parseInt(prompt("Enter a number between 1 to 3: "))
check(num)
function check(num){
    console.log("you have entered:",num);
    if(num <= 3 || num >= 1){
    switch (num) {
        case 1:
            let num2 = parseInt(prompt("Enter any positive number"))
                for (let i = 2; i <= Math.sqrt(num2); i++) {
                    if (num2 % i === 0) {
                        console.log(num2, "is not a prime number");
                        break
                        //     if(num2 % i !== 0){
                        //     console.log(num2, "is a prime number");   
                        // }
                    }
                    console.log(num2, "is a prime number");
                    break
                }
            
            break
        case 2:
            let num4 = parseInt(prompt("Enter any number to check the sum of all digits:"))

            if (num4 > 0) {
                if (num4 < 10) {
                    console.log(num4);
                }
                if (num4 / 100) {
                    let n1 = num4 / 100;
                    let res1 = Math.floor(n1)
                    let res2 = num4 % 100
                    if (res2 > 10) {
                        let n2 = res2 / 10;
                        let res3 = Math.floor(n2)
                        let res4 = res2 % 10
                        let sum = res1 + res3 + res4;
                        // console.log(sum);
                        if (sum > 10) {
                            let n3 = sum / 10;
                            let res5 = Math.floor(n3)
                            let res6 = sum % 10
                            console.log(res5 + res6);
                        } else {
                            console.log(sum);
                        }
                    }
                }
                else if (num4 / 10) {
                    let n1 = num4 / 10;
                    let res1 = Math.floor(n1)
                    let res2 = num4 % 10
                    console.log(res2);

                }
            }
            break

        case 3:
            let num5 = parseInt(prompt("Enter any positive number to check whether its a Armstrong number:"))

            if (num5 > 10) {
                if (num5 / 100) {
                    let n1 = num5 / 100;
                    let newn1 = Math.floor(n1);
                    let res1 = num5 % 100;
                    if (res1 > 10) {
                        let n2 = res1 / 10;
                        let newn2 = Math.floor(n2)
                        let res2 = res1 % 10;
                        let squ = newn1 ** 3 + newn2 ** 3 + res2 ** 3
                        if(squ===num5){
                            console.log(num5,"is an Armstrong number");
                        }else{
                            console.log(num5, "is not an Armstrong number");
                            
                        }
                    }
                    else {
                        let squa = res1 ** 3 + newn1 ** 3
                        if(squ===num5){
                            console.log(num5,"is an Armstrong number");
                        }else{
                            console.log(num5, "is not an Armstrong number");
                            
                        }
                    }
                } else if (num5 / 10) {
                    let n1 = num5 / 10;
                    let newn1 = Math.floor(n1)
                    let res1 = num5 % 10
                    let squa = newn1 ** 3 + res1 ** 3
                    if(squ===num5){
                            console.log(num5,"is an Armstrong number");
                        }else{
                            console.log(num5, "is not an Armstrong number");
                            
                        }
                }
            }
            else {
                console.log("number is single digit number");
            }
            break
    }
}
}





// console.log("Printing factors of any number");


// for (let i = 1; i <= 12; i++) {
//     let num3 = 12;
//     if (num3 % i == 0) {
//         console.log(i, "is a factor of ", num3);
//     }
// }







