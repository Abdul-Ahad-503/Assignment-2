"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
{
    var tempC = 37;
    var resultF = (tempC * 9 / 5) + 32;
    var tempF = 98.6;
    var resultC = (5 / 9) * (tempF - 32);
    console.log(`${tempC} C = ${resultF} F `);
    console.log(`${tempF}F = ${resultC} C `);
}
//  Write a program that calculates the percentage.
{
    var num = 934;
    var result = num / 1100 * 100;
    console.log(result, "%");
}
// Write a program that converts given number of days in to weeks and days
{
    var daysInput = 30;
    var week = daysInput / 7;
    var day = daysInput % 7;
    console.log(`${daysInput} Days = ${week} Weeks and ${day} Days`);
}
// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
{
    var price = 150;
    var discount;
    if (price >= 100) {
        console.log(`You Won 10% Discount, the price will be ${price - (price * 0.1)}$ `);
    }
    else {
        console.log(`You Won 5% Discount, the price will be ${price - (price * 0.05)}$ `);
    }
}
// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
{
    var age = 14;
    if (0 <= age && age <= 12) {
        console.log("Child");
    }
    else if (13 <= age && age <= 19) {
        console.log("Teenager");
    }
    else {
        console.log("Adult");
    }
}
// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
{
    var temp = 14;
    if (10 <= temp && temp <= 30) {
        console.log("Its plesent weather. You can wear simple Cloths");
    }
    else if (temp > 30) {
        console.log("Its too hot outside. You should wear cold cloths ");
    }
    else {
        console.log("Its cold weather. you should wear warm cloths");
    }
}
//  Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
{
    var num = 15;
    if (num % 3 == 0 || num % 5 == 0) {
        if (num % 3 !== 0) {
            console.log(`The number is only divisile by 5.`);
        }
        else if (num % 5 !== 0) {
            console.log(`The number is only divisile by 3.`);
        }
        else {
            console.log(`The number is divisible by both 3 and 5.`);
        }
    }
    else {
        console.log(`The number is divisible by neither 3 nor 5. `);
    }
}
// Write a program that checks if the given year is leap year or not.
{
    var year = 2021;
    if (year % 4 == 0) {
        console.log(`${year} is a leap year.`);
    }
    else {
        console.log(`${year} is not a leap year.`);
    }
}
// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
{
    var day = 7;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursdau");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("You have entered wrong number.");
            break;
    }
}
// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
{
    var unit = 123;
    var bill = unit * 13;
    if (unit > 100 && unit <= 200) {
        console.log(`Your Bill after 10% tax is Rs. ${bill + (bill * 0.1)}`);
    }
    else if (unit > 200 && unit <= 500) {
        console.log(`Your Bill after 15% tax is Rs. ${bill + (bill * 0.15)}`);
    }
    else if (unit >= 500) {
        console.log(`Your Bill after 25% tax is Rs. ${bill + (bill * 0.25)}`);
    }
    else {
        console.log(`You Bill amount is Rs. ${price}`);
    }
}
