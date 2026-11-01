export function calculate(userInput: string): string {
  // https://regex101.com/
  // const match = /^(-*\d+(?:\.\d)*)([+\-*/^])(\d+(?:\.\d)*)$/gm.exec(userInput);
  // if (!match) throw new Error("Not found value");
  // const [, a, op, b] = match;
  const [a, op, b] = getValues(userInput);
  return applyOperator(Number(a), Number(b), op);
}

export function getValues(userInput: string): string[] {
  const match = /^(-*\d(?:\.\d+)*)([+\-*/^%])(\d+(?:\.\d+)*)$/gm.exec(
    userInput,
  );
  console.log(match);
  if (!match) throw new Error("Not found value");
  const [, a, op, b] = match;
  return [a, op, b];
}

function applyOperator(a: number, b: number, op: string): string {
  switch (op) {
    case "%":
      return String(a % b);

    case "*":
      return String(a * b);

    case "+":
      return String(a + b);

    case "-":
      return String(a - b);

    case "/":
      if (b === 0) throw new Error("Cannot divide by zero");
      return String(a / b);
    case "^":
      return String(Math.pow(a, b));

    default:
      throw new Error(`Unknown operator: ${op}`);
    // wow
  }
}
