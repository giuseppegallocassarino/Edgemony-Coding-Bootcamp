/*function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal;
    }

    function sub() {
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;
        return subTotal+numbers[0];
    }

    function molt() {
        let moltTotal = numbers[0];
        for (num of numbers) moltTotal *= num;
        return moltTotal / numbers[0];
    }

    function divis() {
        let divisTotal = numbers[0];
        for (num of numbers) divisTotal /= num;
        return divisTotal * numbers[0];
    }

    return {
        sum: sum(),
        sub: sub(),
        molt: molt(),
        divis: divis(),
    };
} */

//2

 

function avanzCalculator(numbers) {

    const sum = () => numbers.reduce((acc, num) => acc + num);
    const sub = () => numbers.reduce((acc, num) => acc - num);
    const mul = () => numbers.reduce((acc, num) => acc * num);
    const div = () => numbers.reduce((acc, num) => acc / num);
    const pot = () => numbers.map(num => num * num);
    const rad = () => numbers.map(num => Math.sqrt(num));
    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div(),
        potenz: pot(),
        rad: rad()
    }

}