import Vue from 'vue';
import { Tab, Tabs,AddressEdit,Area,Icon,Uploader,Toast,Tabbar,Image,Tag, Field ,TabbarItem,Grid,GridItem,Cell, CellGroup} from 'vant';

Vue.use(Tab).use(Tabs).use(AddressEdit).use(Area).use(Icon).use(Tabbar).use(TabbarItem)
Vue.use(Grid).use(GridItem).use(Cell).use(CellGroup).use(Image).use( Field ).use(Uploader)
Vue.use(Tag)

Vue.prototype.$toast=Toast