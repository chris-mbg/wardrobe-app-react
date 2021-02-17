import { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export const ShoesContext = createContext();

const ShoesContextProvider = (props) => {
  const [shoes, setShoes] = useState(
    [
      {
        brand: 'Ecco',
        color: 'Black',
        description: 'Loafers',
        id: uuidv4()
      },
      {
        brand: 'Adidas',
        color: 'Black/white',
        description: 'Sneakers',
        id: uuidv4()
      },
      {
        brand: 'North Face',
        color: 'Brown',
        description: 'Boots',
        id: uuidv4()
      }
    ]
  );

  const addShoes = (newShoes) => {
    setShoes([newShoes, ...shoes])
  }
  const deleteShoes = id => {
    const newShoesArray = shoes.filter(shoe => shoe.id !== id);
    setShoes([...newShoesArray]);
  }
  const editShoes = editedShoes => {

  }

  return (
    <ShoesContext.Provider value={ {shoes, addShoes, deleteShoes, editShoes} }>
      { props.children }
    </ShoesContext.Provider>
  );
}

export default ShoesContextProvider