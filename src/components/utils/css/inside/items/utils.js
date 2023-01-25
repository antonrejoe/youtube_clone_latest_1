
import { Book, FireExtinguisher, FoodBank } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

class menu_bar_item {
    constructor(name,icon) {
        this.name = name;
        this.icon = icon;
    }
}


export const menuBar_items = [ 
    menu_bar_item('Home', <HomeIcon/>),
    menu_bar_item("Fire", <FireExtinguisher/>),
    menu_bar_item("Books",<Book/>),
    menu_bar_item("Food",<FoodBank/>)
 ] 




