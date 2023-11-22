let index = 0;

let str = "Studytonight"

// for(index = (str.length)-1; index >= 0; index-=2) {
//     console.log(str.charAt(index))
// }

while(index < str.length) 
{
    if(index == 5) {
        index++;
        continue;
    }
    
    console.log(str.charAt(index))
    index++;
}

// do {
//     console.log("A")
//     index++;
// }
// while(index < str.length);

// console.log("This is executed...")