let input = document.getElementById("main");
let memory = document.getElementById("memory");
let a = false

function display(d) {

    if (input.value == 0 || a) {
        input.value = d;
        a = false

    }

    else {
        input.value += d;

    }
}



function Op(p) {
    num1 = ""
    num2 = ""

    operator = p
    a = true;
    if (memory.value == "0") {
        memory.value = operator;
    } else {
        num1 = input.value

        memory.value = `  ${num1} ${operator}`;
        console.log(num1)


    }
}


function calculate() {

    num2 = input.value
    let cal = `${num1} ${operator} ${num2}`
    let result = eval(cal)
    input.value = result

    memory.value = `${num1} ${operator} ${num2} =  `

}

function clearInput() {
    input.value = 0
    memory.value = ""
}

function sq(){
    input.value =input.value*input.value
    memory.value =`Square = ${input.value}`
}

function cube(){
     input.value =input.value*input.value*input.value
    memory.value =`Cube = ${input.value}`
}