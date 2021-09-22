
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'
import ItemDetails from "../components/views/ItemDetails";

export const routes = [
  {
  path:'',
  component: Inventory
  },
  {
    path:'/item/:id',
    component: ItemDetails
  }
]
