export class BarMenu {
    key!: string;
    name!: string;
    url!: string;
  
    bar_menu: string;
    select_menu: string;
  
    constructor(bar_menu: string, select_menu: string) {
      this.bar_menu = bar_menu;
      this.select_menu = select_menu;
    }

    setBarMenu(bar_menu: string){
      this.bar_menu = bar_menu;
    }
    setSelectMenu(select_menu: string){
      this.select_menu = select_menu;
    }
  }