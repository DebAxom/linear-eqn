import SolveEquation from './linear-equation.js';

function Solve(){
    try {
        const equation = document.getElementById('eqn').value;
        const ans = document.getElementById('ans');
        ans.style.padding="0.5rem";
        let {answer, answerFraction} = SolveEquation(equation);
        ans.innerHTML = `
        f(x) = ${equation} <br>
        => x = ${answerFraction} <br>
        => x = ${answer} <br>
        `;
    } catch (error) {
        ans.innerHTML= `Sorry, an error occured. <br> This program is still in it's development stage.`
    }
    return false;
}

window.solve = Solve;