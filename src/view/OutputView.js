import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printResult(result) {
    Console.print(`결과 : ${result}`);
  }

  static printError(error) {
    Console.print(`에러: ${error}`);
  }
}

export default OutputView;
