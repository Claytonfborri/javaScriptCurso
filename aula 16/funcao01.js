function parImpar(n){
	if (n % 2 == 0){
		return 'par'
	}else{
		return 'impar'
	}
	
}

let res = parImpar(11) // return impar
console.log(`${res}`)