
//Infinity loop



    for (; ;){
        var rand = Math.floor(Math.random() * 10 +1 )
        if(rand==9){
            console.log("congrats you are winner")
            break
        } else{
            console.log("you have got " + rand)
        }
    }


    