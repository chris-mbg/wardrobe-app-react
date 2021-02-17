import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TrousersContext = createContext();

const TrousersContextProvider = (props) => {

  const [trousers, setTrousers] = useState([
    {
      color: 'Indigo',
      brand: 'Tiger',
      description: 'Jeans',
      id: uuidv4()
    },
    {
      color: 'Blue',
      brand: 'Race Marine',
      description: 'Shorts',
      id: uuidv4()
    },
    {
      color: 'Grey',
      brand: 'H&M',
      description: 'Chinos',
      id: uuidv4()
    }
  ])

  const addTrouser = (newTrouser) => {
    setTrousers([newTrouser, ...trousers])
  }
  const deleteTrousers = id => {
    const newTrousersArray = trousers.filter(pant => pant.id !== id);
    setTrousers([...newTrousersArray]);
  }
  const editTrousers = editedTrousers => {

  }

  return (
    <TrousersContext.Provider value={ {trousers, addTrouser, deleteTrousers, editTrousers} }>
      { props.children }
    </TrousersContext.Provider>
  );
}

export default TrousersContextProvider