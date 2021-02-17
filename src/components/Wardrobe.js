import Shelf from './Shelf'
import { ShoesContext } from '../contexts/ShoesContext'
import { ShirtsContext } from '../contexts/ShirtsContext'
import { TrousersContext } from '../contexts/TrousersContext'
import { TShirtsContext } from '../contexts/TShirtsContext'
import { useState, useContext } from 'react'
import styles from '../css/Wardrobe.module.css'

const Wardrobe = () => {
  const { shoes, deleteShoes, editShoes } = useContext(ShoesContext);
  const { shirts, deleteShirt, editShirt } = useContext(ShirtsContext);
  const { trousers, deleteTrousers, editTrousers } = useContext(TrousersContext)
  const { tShirts, deleteTShirt, editTShirt } = useContext(TShirtsContext);

  const [itemToShow, setItemToShow] = useState('tShirt');

  return (
    <div className={styles.wardrobe}>
      <h2>Wardrobe</h2>
      <div className={styles.wardrobeContainer}>
        <div className={styles.tabs}>
          <div className={`${styles.tab}  ${itemToShow === 'tShirt' ? styles.active : ""}`} onClick={() => setItemToShow('tShirt')}>
            <img src="assets/icons/T-Shirt-icon.png" alt="t-shirt icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'shirt' ? styles.active : ""}`} onClick={() => setItemToShow('shirt')}>
            <img src="assets/icons/Shirt-icon.png" alt="shirt icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'sweater' ? styles.active : ""}`} onClick={() => setItemToShow('sweater')}>
            <img src="assets/icons/sweater.png" alt="Sweater icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'trousers' ? styles.active : ""}`} onClick={() => setItemToShow('trousers')}>
            <img src="assets/icons/Jeans-icon.png" alt="Jeans icon" />
          </div>
          <div className={`${styles.tab} ${itemToShow === 'shoes' ? styles.active : ""}`} onClick={() => setItemToShow('shoes')}>
            <img src="assets/icons/Shoes-icon.png" alt="shoes icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'jacket' ? styles.active : ""}`} onClick={() => setItemToShow('jacket')}>
            <img src="assets/icons/Jacket-icon.png" alt="jacket icon" />
          </div>
          <div className={`${styles.tab} ${styles.access} ${itemToShow === 'accessories' ? styles.active : ""}`} onClick={() => setItemToShow('accessories')}>
            <img src="assets/icons/Clothing-Hat-icon.png" alt="hat icon" />
            {/* <img src="assets/icons/Clothing-Mittens-icon.png" alt="mittens icon" /> */}
            <img src="assets/icons/Clothing-Scarf-icon.png" alt="scarf icon" />
          </div>
        </div>
        {itemToShow === 'tShirt' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={tShirts} deleteMethod={deleteTShirt} editMethod={editTShirt}/>
        </div>}
        {itemToShow === 'shirt' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={shirts} deleteMethod={deleteShirt} editMethod={editShirt}/>
        </div>}
        {itemToShow === 'trousers' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={trousers} deleteMethod={deleteTrousers} editMethod={editTrousers}/>
        </div>}
        {itemToShow === 'shoes' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={shoes} deleteMethod={deleteShoes} editMethod={editShoes} />
        </div>}
      </div>
    </div>
  );
}

export default Wardrobe;