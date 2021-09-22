const isConstant = value => Number(evalWithoutError(value)) ? true : false ;

function evalWithoutError(value){
    try {
        return eval(value);
    } catch (error) {
        return value;
    }
}

function PositiveNegative(term){
    term = String(term);
    if(term.charAt(0)!='-') return '-'+term;
    return term.replace('-','');
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
        // if(returnValue===undefined) return 0;
        return returnValue;
    } catch (error) {
        return term;
    }
}

function Separate_Vars_Consts(rhsArr,lhsArr){

    let newLhsArr = [] , newRhsArr = [] ;

    rhsArr.forEach(element=> {
        element = Multiplication_Division(element);
        if(isConstant(element)) newRhsArr.push(element);
        else newLhsArr.push(PositiveNegative(element));
    });

    lhsArr.forEach(element=> {
        element = Multiplication_Division(element);
        if(!isConstant(element)) newLhsArr.push(element);
        else newRhsArr.push(PositiveNegative(element));
    });

    return {LHS:newLhsArr,RHS:newRhsArr};
}

function Equate(LHS,RHS){
    RHS = eval(RHS.join('+'));
    LHS = eval(LHS.map(term=>FindCoeefficient(term)).join('+'));
    // console.log(`${RHS}/${LHS}`);
    return RHS/LHS;
}

function SolveEquation(equation){
    equation = equation.replace(/ /g,'');
    equation = equation.replace(new RegExp('-','g'),'+-');

    let PartOfEquation = equation.split('=');
    let lhs = PartOfEquation[0] , rhs = PartOfEquation[1];
    let lhsArr = lhs.split('+') , rhsArr = rhs.split('+');

    let {LHS,RHS} = Separate_Vars_Consts(rhsArr,lhsArr);

    // console.log(lhsArr,LHS);
    // console.log(rhsArr,RHS);

    return Equate(LHS,RHS);
}

export default SolveEquation;