const isConstant = value => Number(evalWithoutError(value)) ? true : false ;

function evalWithoutError(value){
    try {
        return eval(value);
    } catch (error) {
        return value;
    }
}

function FindCoeefficient(term){
    if(term==='x') return '1';
    if(term==='-x') return '-1';
    if(term.indexOf('/')>-1) {

        let partsOftheFraction = term.split('/');
        let numerator = partsOftheFraction[0], denominator = partsOftheFraction[1];

        if(numerator.length!==1){
            numerator = numerator.replace('x','');
        }else{
            numerator = numerator.replace('x','1');
        }

        if(denominator.length!==1){
            denominator = denominator.replace('x','');
        }else{
            denominator = denominator.replace('x','1');
        }

        return numerator/denominator;

    }
    return term.replace('x','');
}

function Multiplication_Division(term){
    if(term.indexOf('*')<-1 || term.indexOf('/')>-1) return term;
    try {
        let returnValue = eval(term);
        return returnValue;
    } catch (error) {
        return term;
    }
}

function EvaluateBracket(string,beforeBracket){

    let terms = string.split('+');

    let consts = [], vars = [];

    terms.forEach(element => {
        if(isConstant(element)) consts.push(element);
        else vars.push(FindCoeefficient(element));
    });

    consts =  beforeBracket * eval(consts.join('+'));
    vars =  beforeBracket * eval(vars.join('+'));

    return `${vars}x + ${consts}`;

}

// const st = EvaluateBracket('3(2x+x+3+4)');

const reg = /[0-9]+\((.*?)\)/g;
let st = "3(2x+4)+5(6x+9)";
let beforeBracket = st.match(reg)[0].split('(')[0];
console.log(st);

st.match(reg).forEach(term=>{
    let beforeBracket = term.split('(')[0];
    let str = term.split('(')[1].replace(')','');
    st = st.replace(term,EvaluateBracket(str,beforeBracket));
});

console.log(st);
// console.log(st);