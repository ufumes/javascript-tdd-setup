'use strict'

module.exports = {
	sumOfprimes: function(num) {
	

function getprime(num){
	var myPrimearr=[]
	for(var i=0; i<=num; i++){
		if (CheckPrime(i)){
			myPrimearr.push(i);
		}
	}
	return myPrimearr
}

function CheckPrime(num){
	if (num===0||num===1){
		return false
	}
	for(var innerC=2; innerC<=num/2; innerC++){
		if (num%innerC===0){
			return false
		}
	}
	return true
}

	var macc=0
	//validate inputs
	if (num===0||num===1){
		return 0
	}else if(num===2){
		return 2
	}else if(num <0){
		return 'invalid input'
	}else if (isNaN(num)=== true){
		return 'invalid input'
	}else if (num===''){
		return 'invalid input'
	}
	else{
		
		var myprimes=getprime(num)
		for(var i=0; i<myprimes.length; i++){
			//acc+=i
           macc=macc+myprimes[i]
			//return myprimes
		}
		return macc
	}

	}



  }