import { useState } from 'react';
import styles from '../css/EditButton.module.css'

const EditButton = ({item, editMethod}) => {

  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({
    color: '',
    brand: '',
    description: '',
    id: item.id
  });

  const toggleEditForm = () => {
    showEditForm ?
      setShowEditForm(false) : setShowEditForm(true)
  }
  const handleDescChange = e => {
    setEditedItem({...editedItem, description: e.target.value});
  }
  const handleColorChange = e => {
    setEditedItem({...editedItem, color: e.target.value});
  }
  const handleBrandChange = e => {
    setEditedItem({...editedItem, brand: e.target.value});
  }

  const handleEditSubmit = e => {
    e.preventDefault();
    if(editedItem.description === '') {
      editedItem.description = item.description
    }
    if(editedItem.color === '') {
      editedItem.color = item.color
    }
    if(editedItem.brand === '') {
      editedItem.brand = item.brand
    }
    console.log(editedItem);
    editMethod(editedItem);
    toggleEditForm();
  }

  return (
    <div>
      <div className={styles.editButton}>
        <button onClick={() => toggleEditForm()}>Edit</button>
      </div>
      { showEditForm ?
        (<form className={styles.editForm} onSubmit={handleEditSubmit}>
          <label>Description:</label>
          <input type='text' placeholder={item.description} onChange={handleDescChange}/>
          <label>Color:</label>
          <input type='text' placeholder={item.color} onChange={handleColorChange}/>
          <label>Brand:</label>
          <input type='text' placeholder={item.brand} onChange={handleBrandChange}/>
          <button className="item-buttons" type='submit'>Confirm</button>
        </form>)
        : null}
    </div>
  );
}

export default EditButton;