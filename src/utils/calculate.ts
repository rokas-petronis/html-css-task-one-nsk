export function calculate(expr: string): number {
  const match = /^(\d+)([+\-*/^])(\d+)$/.exec(expr);
  if (!match) throw new Error("Not found value");
  const [, a, op, b] = match;
  return applyOperator(Number(a), Number(b), op);
}

function applyOperator(a: number, b: number, op: string): number {
  switch (op) {
    case "+":
      return a + b;

    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}
