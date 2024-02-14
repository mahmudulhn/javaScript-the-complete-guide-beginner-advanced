const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
  return a + b;
}

function printResult(result, printMode: 'console' | 'alert') {
  if (printMode === 'console') {
    console.log(result);
  } else {
    alert(result);
  }
}

// const result = add(5, 3);

// console.log(result);

type CalculationResults = { res: number; print: () => void }[];

let results: CalculationResults = [];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  // printResult(results);
  // results[0].print();
  // printResult(results);
  printResult(result, 'console');
  printResult(result, 'alert');
});
