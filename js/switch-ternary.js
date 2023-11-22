/*
    G is for green
    R is for Red
    Y is for Yellow
*/
let signal = "Y"

// switch(signal)
// {
//     case "G":
//         console.log("GO")
//         console.log("Next Red in 2 mins...")
//         break;
//     case "R":
//         console.log("Stop")
//         break;
//     case "Y":
//         console.log("Ready/Wait")
//         break;
//     default:
//         console.log("Invalid Light")
//         break;
// }


signal == "G" ? console.log(`GO for signal - ${signal}`) :
signal == "R" ? console.log(`Stop for signal - ${signal}`) :
signal == "Y" ? console.log(`Ready for signal - ${signal}`) : 
console.log("Invalid Signal");


// if(signal=="G")
// {
//     console.log("GO")
// }
// else {
//     console.log("Don't Go")
// }
