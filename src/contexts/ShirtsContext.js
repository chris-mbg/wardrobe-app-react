import { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

export const ShirtsContext = createContext();

const ShirtsContextProvider = (props) => {
  const [shirts, setShirts] = useState(
    [
      {
        brand: 'H&M',
        color: 'Green',
        description: 'Knitted sweater',
        id: uuidv4()
      },
      {
        brand: 'Dressman',
        color: 'Green/checked',
        description: 'Shirt',
        id: uuidv4()
      },
      {
        brand: 'Race Marine',
        color: 'Black',
        description: 'T-shirt',
        id: uuidv4()
      }
    ]
  );

  const addShirt = (newShirt) => {
    setShirts([newShirt, ...shirts])
  }
  const deleteShirt = id => {
    const newShirtsArray = shirts.filter(shirt => shirt.id !== id);
    setShirts([...newShirtsArray]);
  }
  const editShirt = editedShirt => {
    const index = shirts.findIndex(shirt => shirt.id === editedShirt.id);
    if (index < 0 || index > shirts.length -1) {
      console.log('Did not find shirt to edit...');
      return
    }
    console.log('Before changing', shirts[index]);

    setShirts([
      ...shirts.slice(0,index),
      editedShirt,
      ...shirts.slice(index + 1)
    ]);

    console.log('After changing', shirts[index])
  }

  return (
    <ShirtsContext.Provider value={ {shirts, addShirt, deleteShirt, editShirt} }>
      { props.children }
    </ShirtsContext.Provider>
  );
}

export default ShirtsContextProvider



// * Sparad kod från editeringsfunktion.
//  1. Make a shallow copy of the items
//  let items = [...this.state.items];
//     const shirtsCopy = [...shirts];

//     // 2. Make a shallow copy of the item you want to mutate
//     //let item = {...items[1]};
//     const shirtToBeEdited = {...shirtsCopy[index]};

//     // 3. Replace the property you're intested in
//     // item.name = 'newName';
//     shirtToBeEdited.brand = editedShirt.brand;
//     shirtToBeEdited.color = editedShirt.color;
//     shirtToBeEdited.description = editedShirt.description;

//     // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
//     // items[1] = item;
//     shirtsCopy[index] = shirtToBeEdited;

//     // 5. Set the state to our new copy
//     setShirts([...shirtsCopy]); */


//    setShirts( ({items}) => ({
//       items: [
//           ...items.slice(0,1),
//           {
//               ...items[1],
//               name: 'newName',
//           },
//           ...items.slice(2)
//       ]
//   }));