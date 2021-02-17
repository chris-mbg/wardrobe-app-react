import { createContext, useReducer } from 'react'
import { clothesReducer } from '../reducers/clothesReducer'
import { v4 as uuidv4} from 'uuid'

export const ClothesContext = createContext();

const ClothesContextProvider = (props) => {

    const [clothes, dispatch] = useReducer(clothesReducer, [], () => {
      const localData = localStorage.getItem('clothes');
      return localData ? JSON.parse(localData) : [
        {
          type: 'sweater',
          brand: 'H&M',
          color: 'Green',
          description: 'Knitted',
          id: uuidv4()
        },
        {
          type: 'sweater',
          brand: 'Jack&Jones',
          color: 'Black',
          description: 'Hoodie',
          id: uuidv4()
        },
        {
          type: 'shirt',
          brand: 'Dressman',
          color: 'Green/checked',
          description: 'Longsleeved',
          id: uuidv4()
        },
        {
          type: 'shirt',
          brand: 'Ralph Lauren',
          color: 'Blue/checked',
          description: 'Fancy shirt',
          id: uuidv4()
        },
        {
          type: 'tShirt',
          brand: 'Race Marine',
          color: 'Black',
          description: 'T-shirt',
          id: uuidv4()
        },
        {
          type: 'tShirt',
          brand: 'H&M',
          color: 'Black',
          description: 'Polo shirt',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'Ecco',
          color: 'Black',
          description: 'Loafers',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'Adidas',
          color: 'Black/white',
          description: 'Sneakers',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'North Face',
          color: 'Brown',
          description: 'Boots',
          id: uuidv4()
        },
        {
          type: 'trousers',
          color: 'Indigo',
          brand: 'Tiger',
          description: 'Jeans',
          id: uuidv4()
        },
        {
          type: 'shorts',
          color: 'Blue',
          brand: 'Race Marine',
          description: 'Shorts',
          id: uuidv4()
        },
        {
          type: 'trousers',
          color: 'Grey',
          brand: 'H&M',
          description: 'Chinos',
          id: uuidv4()
        },
        {
          type: 'jacket',
          color: 'Dark blue',
          brand: 'Everest',
          description: 'Warm winter jacket',
          id: uuidv4()
        },
        {
          type: 'jacket',
          color: 'Dark blue',
          brand: 'H&M',
          description: 'Spring/autumn jacket',
          id: uuidv4()
        },
        {
          type: 'accessiories',
          color: 'Black',
          brand: '',
          description: 'Knitted scarf',
          id: uuidv4()
        },
        {
          type: 'accessiories',
          color: 'Grey',
          brand: 'Hestra',
          description: 'Mittens',
          id: uuidv4()
        }
      ];
  });

  useEffect( () => {
    localStorage.setItem('clothes', JSON.stringify(clothes))
  }, [clothes]);

  return (
    <ClothesContext.Provider value={ {clothes, dispatch} }>
      { props.children }
    </ClothesContext.Provider>
  );
}

export default ClothesContextProvider

// types: 'shirt', 'tShirt', 'sweater', 'trouser', 'shorts', 'jacket', 'accessiories'