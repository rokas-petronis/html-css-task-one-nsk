export function calculate(userInput: string): string {
  const match = /^(\d+)([+\-*/^])(\d+)$/.exec(userInput);
  if (!match) throw new Error("Not found value");
  const [, a, op, b] = match;

  if (b === "0" && op === "/") {
    return "Cannot divide by zero";
  } else {
    return applyOperator(Number(a), Number(b), op);
  }
}

function applyOperator(a: number, b: number, op: string): string {
  switch (op) {
    case "*":
      return String(a * b);

    case "+":
      return String(a + b);

    case "-":
      return String(a - b);

    case "/":
      return String(a / b);
    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}
