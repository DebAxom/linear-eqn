import SolveEquation from './linear-equation.js';
import * as answer from './answersheet.js';

function Solve(){
    try {
        const equation = document.getElementById('eqn').value;
        const ans = document.getElementById('ans');
        answer.clear();
        ans.style.padding="0.5rem";
        answer.write(`f(x)= ${equation}`);
        SolveEquation(equation);
    } catch (error) {
        console.log(error);
        ans.innerHTML= `Sorry, an error occured. <br> This program is still in it's development stage.`
    }
    return false;
}

window.solve = Solve;