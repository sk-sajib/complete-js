var date = new Date()

var today = date.getDay()


// if ( today==0){
//     console.log("today is sunday")
// } else if(today==1){
//     console.log("today is monday")
// } else if(today==2){
//     console.log("today is tuesday")
// } else if(today==3){
//     console.log("today is webnesday")
// } else if(today==4){
//     console.log("today is thursday")
// } else if(today==5){
//     console.log("today is Friday")
// } else if(today==6){
//     console.log("today is saturday")
// }else{
//     console.log("give a vaild num")
// }

switch(today){
    case 0:
    console.log("this is sunday")
    break
    case 1:
    console.log("this is monday")
    break
    case 2:
    console.log("this is tuesday")
    break
    case 3:
    console.log("this is wednesday")
    break
    case 4:
    console.log("this is thursday")
    break
    case 5:
    console.log("this is friday")
    break
    case 6:
        console.log("this is saturday")
        break
    default: 
        console.log('give a vaild number')
      break
}