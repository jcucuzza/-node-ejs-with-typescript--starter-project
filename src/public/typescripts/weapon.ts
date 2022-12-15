import Player from "./player";

class Weapon {
  public name: string;
  public owner: Player;

  constructor(name: string, owner: Player) {
    this.name = name;
    this.owner = owner;
  }

  getOwner = () => {
    return this;
  };
}

export default Weapon;
