export default class StringCalculator {
  static add(input) {
    if (!input) {
      return 0;
    }

    const tokens = this.parse(input);
    this.validateInput(tokens);

    let sum = 0;
    tokens.forEach((num) => {
      sum += Number(num);
    });

    return sum;
  }

  static parse(input) {
    let delimiter = /,|:/;
    let numbers = input;

    if (input.startsWith("//")) {
      let delimiterEnd = input.indexOf("\n");

      if (delimiterEnd === -1) {
        delimiterEnd = input.indexOf("\\n");
      }

      if (delimiterEnd === -1) {
        throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다");
      }

      const customDelimiter = input.slice(2, delimiterEnd);
      delimiter = new RegExp(customDelimiter);

      // \n 또는 \\n 모두 지원
      if (input[delimiterEnd] === "\\" && input[delimiterEnd + 1] === "n") {
        numbers = input.slice(delimiterEnd + 2);
      } else {
        numbers = input.slice(delimiterEnd + 1);
      }
    }

    return numbers.split(delimiter);
  }

  static validateInput(tokens) {
    tokens.forEach((token) => {
      if (token === "") {
        throw new Error("[ERROR] 잘못된 입력입니다. 빈 값이 있습니다.");
      }

      if (Number.isNaN(Number(token))) {
        throw new Error("[ERROR] 잘못된 입력입니다. 숫자를 입력해주세요.");
      }

      if (Number(token) < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
    });
  }
}
