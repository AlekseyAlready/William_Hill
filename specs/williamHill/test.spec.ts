import { expect } from "chai";

import sports from "pages/test/sports.page";
import bets from "pages/test/bets.page";
import team from "pages/test/team.page";

describe("Check betting", () => {
  before("choose sports and team", () => {
    sports.clickFootbal();
    team.chooseTeam();
  });

  it("set number", () => {
    bets.setBetNumVal(0.05);
    expect(bets.getReturnPrice()).to.be.equal(0.11);
  });

  it("set letter", () => {
    bets.setBetStringVal("one");
    expect(bets.getTotalStake()).to.be.equal(0.0);
  });

  it("set number and letter", () => {
    bets.setBetStringVal("0.05one");
    expect(bets.getTotalStake()).to.be.equal(0.11);
  });

  it("set any symbol", () => {
    bets.setBetStringVal("!@#$%^&*()_-?+");
    expect(bets.getTotalStake()).to.be.equal(0.0);
  });
});
