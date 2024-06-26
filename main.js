while (true) {
    var number = prompt('son kiriting');
    number1 = Number(number)
    if (isNaN(number1)) {
        alert("bu son emas, iltimos son kiriting")
    }else if (number == ""){
        alert("bu son emas, iltimos son kiriting")
    }else{
        if ( number % 2 === 0) {
            alert(`${number} soni juft`)
        } else {
            alert(`${number} soni toq`) 
        }
    }
}