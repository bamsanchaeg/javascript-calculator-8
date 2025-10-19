import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import StringCalculator from "./domain/StringCalculator.js";

class App {
  async run() {
    try {
      const input = await InputView.read();
      const result = StringCalculator.add(input);
      OutputView.printResult(result);
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}

export default App;
