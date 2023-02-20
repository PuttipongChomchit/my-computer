export class BaseElemental {
    key!: string;
    name!: string;
    url!: string;

    level: string;
    type: string;
    dmg: string;
  
    constructor(level: string,type: string,  dmg: string) {
      this.level = level;
      this.type = type;
      this.dmg = dmg;
    }
  }