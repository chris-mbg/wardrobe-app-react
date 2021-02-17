import { createContext, useState, useEffect } from 'react'
//import { reducer } from '../reducers/reducer'

export const TShirtsContext = createContext();

const TShirtsContextProvider = (props) => {
  const [tShirts, setTShirts] = useState(() => {
    const localData = localStorage.getItem('tShirts');
    return localData ? JSON.parse(localData) : [];
  })

  useEffect( () => {
    localStorage.setItem('tShirts', JSON.stringify(tShirts))
  }, [tShirts]);

  const addTShirt = (newTShirt) => {
    setTShirts([newTShirt, ...tShirts])
  }
  const deleteTShirt = id => {
    const newTShirtsArray = tShirts.filter(t => t.id !== id);
    setTShirts([...newTShirtsArray]);
  }
  const editTShirt = editedTShirt => {

  }
  return (
    <TShirtsContext.Provider value={ {tShirts, addTShirt, deleteTShirt, editTShirt } }>
      { props.children }
    </TShirtsContext.Provider>
  );
}

export default TShirtsContextProvider;