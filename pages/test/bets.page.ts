class Bets {
  private betInput = () => $('//input[@id="stake-input__2377435578L"]');
  private returnPrice = () => $('//span[@id="total-to-return-price"]');
  private totalStake = () => $('//span[@id="total-stake-price"]');

  // ----- Steps -----

  setBetNumVal(num: number) {
    this.betInput().waitForDisplayed();
    return this.betInput().setValue(num);
  }

  setBetStringVal(letter: string) {
    this.betInput().waitForDisplayed();
    this.betInput().clearValue();
    return this.betInput().setValue(letter);
  }

  setBetNumStringVal(num: number) {
    this.betInput().waitForDisplayed();
    this.betInput().clearValue();
    return this.betInput().setValue(num);
  }

  getReturnPrice() {
    this.returnPrice().waitForDisplayed();
    return this.returnPrice().getValue();
  }

  getTotalStake() {
    this.totalStake().waitForDisplayed();
    return this.totalStake().getValue();
  }
}

export default new Bets();
