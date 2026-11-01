import { calculate, getValues } from "./utils/calculate.js";
let expression = "";
const display = document.querySelector<HTMLInputElement>("#display");
const buttons = document.querySelector<HTMLDivElement>("#buttons");

if (!display || !buttons) {
  throw new Error("null error");
}

buttons.addEventListener("click", (e) => {
  // doesnt matter if you pressed the span element in button
  // orthe button.
  // otherwise would need to press button othwerwise would
  // not work.
  const btn = (e.target as HTMLElement).closest("button");
  if (!btn) return;

  // if there is a value add to expression
  if (btn.dataset.action === "s") {
    try {
      const [a, op, b] = getValues(expression);
      if (op) {
        display.value = `${a}${op}${String(Math.pow(Number(b), 2))}`;
      } else {
        display.value = String(Math.pow(Number(a), 2));
      }
      expression = display.value;
    } catch {
      display.value = String(Math.pow(Number(expression), 2));
      expression = display.value;
    }
  }

  if (btn.dataset.action === "c") {
    try {
      const [a, op, b] = getValues(expression);
      if (op) {
        display.value = `${a}${op}${String(Math.pow(Number(b), 3))}`;
      } else {
        display.value = String(Math.pow(Number(a), 3));
      }
      expression = display.value;
    } catch {
      display.value = String(Math.pow(Number(expression), 3));
      expression = display.value;
    }
  }

  if (btn.dataset.action === "sq") {
    try {
      const [a, op, b] = getValues(expression);
      if (op) {
        console.log(`${op} ${b}`);
        display.value = `${a}${op}${String(Math.sqrt(Number(b)))}`;
      } else {
        display.value = String(Math.sqrt(Number(a)));
      }
      expression = display.value;
    } catch {
      display.value = String(Math.sqrt(Number(expression)));
      expression = display.value;
    }
  }
  if (btn.dataset.value) {
    const match = /[+\-*/^]/.exec(btn.dataset.value);
    if (!expression) {
      expression += btn.dataset.value;

      display.value = expression;
      return;
    }

    const matchLastChar = /[+\-*/^]/.exec(expression.slice(-1));
    console.log(matchLastChar, match);
    if (match && matchLastChar && match[0] && matchLastChar[0]) {
      return;
    }
    expression += btn.dataset.value;

    display.value = expression;
    return;
  }
  if (btn.dataset.action === "equals") {
    display.value = "";
    const value = Number(calculate(expression));
    display.value = String(value);
    expression = String(value);

    return;
  }
  if (btn.dataset.action === "clear") {
    display.value = "";
    expression = "";

    return;
  }
});
