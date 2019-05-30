class Sports {
  private footbal = () => $('//li[@id="nav-football"]');

  // ----- Steps -----

  clickFootbal() {
    this.footbal().waitForDisplayed();
    return this.footbal().click();
  }
}

export default new Sports();
