import { useState, useContext } from 'react'
import ItemForm from '../components/ItemForm'
import { ShirtsContext } from '../contexts/ShirtsContext'
import { ShoesContext } from '../contexts/ShoesContext'
import { TrousersContext } from '../contexts/TrousersContext'
import styles from '../css/AddItem.module.css'

const AddItem = () => {
  const [typeOfItem, setTypeOfItem] = useState('');
  const { addShirt } = useContext(ShirtsContext);
  const { addShoes } = useContext(ShoesContext);
  const { addTrouser } = useContext(TrousersContext);

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }

  return (
    <div className={styles.addItem}>
      <h1>Changes?</h1>
      <h2>Add a new item to your wardrobe here!</h2>
      <select onChange={handleTypeChange}>
        <option value="">Type of item</option>
        <option value="shirt">Shirt</option>
        <option value="trousers">Trousers</option>
        <option value="shoes">Shoes</option>
      </select>
      {(typeOfItem === '' && <div className={styles.feedback}>You must choose a type!</div>)}
      {(typeOfItem === 'shirt' && <ItemForm typeOfItem={typeOfItem} addItem={addShirt} />)}
      {(typeOfItem === 'trousers' && <ItemForm typeOfItem={typeOfItem} addItem={addTrouser} />)}
      {(typeOfItem === 'shoes' && <ItemForm typeOfItem={typeOfItem} addItem={addShoes} />)}
    </div>
  );
}

export default AddItem;