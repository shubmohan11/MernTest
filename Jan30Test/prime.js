var userinp=prompt("Enter the number to print prime numbers list");

userinp =parseInt(userinp);

if (isNaN(userinp)) {
        alert("Please enter a valid number")
    } else {
        for(var i=2; i<=userinp ;i++){

            var isPrime = true;
    
            for(var j=2; j<i; j++){
                if(i%j === 0 && i !== j){
                    isPrime = false;
                }
            }
            if(isPrime === true){
                console.log(i);
            }
        }

    }
