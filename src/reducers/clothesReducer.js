
export const clothesReducer = (state,action) => {
  switch (action.type) {
    case 'ADD_ITEM' :
      return [action.newItem, ...state];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'EDIT_ITEM':
      const index = state.findIndex(item => item.id === action.editedItem.id);
      if (index < 0 || index > state.length -1) {
        console.log('Did not find shirt to edit...');
        return
      }
      console.log('Before changing', state[index]);
      return ([
          ...state.slice(0,index),
          action.editedItem,
          ...state.slice(index + 1)
      ])
    default:
      return state
  }
}


/* const addShirt = (newShirt) => {
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
} */