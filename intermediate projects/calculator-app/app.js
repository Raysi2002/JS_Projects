const equation = document.getElementById('equation');


function appendToInput(number){
    try{
        equation.value += number;
    }catch(err){
        alert("Something went wrong");
    }
}

function clearScreen(){
    equation.value = "";
}

function deleteLast(){
    equation.value = equation.value.slice(0, -1);
}

function evaluteEqn(){
    try{
        equation.value = eval(equation.value);
    }catch(error){
        console.error(error)
    }
}