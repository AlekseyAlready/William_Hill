class Team {
  private setTeam = () => $('//div[@id="OB_EV14654565"]');

  // ----- Steps -----

  chooseTeam() {
    this.setTeam().waitForDisplayed();
    return this.setTeam().click();
  }
}

export default new Team();
