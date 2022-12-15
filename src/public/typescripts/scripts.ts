import Player from "./player";
import Weapon from "./weapon";

class Script {
  public getOwnersWeapon(): Weapon {
    const player: Player = new Player("super-mario");
    return new Weapon("water cannon", player);
  }
}

export default Script;
