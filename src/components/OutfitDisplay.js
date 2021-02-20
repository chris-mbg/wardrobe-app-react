import styles from '../css/OutfitDisplay.module.css'

const OutfitDisplay = ({ outfit }) => {
  return (
    <div className={styles.outfitDisplay}>
      <p className={styles.headText}>Outfit of the day:</p>
      {outfit.map(item => (
        <div className={styles.itemContainer} key={item.id}>
          {item.type === 'tShirt' && <div className={styles.imgContainer}><img src="assets/icons/T-Shirt-icon.png" alt='t-shirt icon'/></div>}
          {item.type === 'shirt' && <div className={styles.imgContainer}><img src="assets/icons/Shirt-icon.png" alt="shirt icon" /></div>}
          {item.type === 'sweater' && <div className={styles.imgContainer}><img src="assets/icons/sweater.png" alt="Sweater icon" /></div>}
          {item.type === 'trousers' && <div className={styles.imgContainer}><img src="assets/icons/Jeans-icon.png" alt="Jeans icon" /></div>}
          {item.type === 'shorts' && <div className={styles.imgContainer}><img src="assets/icons/Clothing-Shorts-icon.png" alt="Jeans icon" /></div>}
          {item.type === 'jacket' && <div className={styles.imgContainer}><img src="assets/icons/Jacket-icon.png" alt="jacket icon" /></div>}
          {item.type === 'shoes' && <div className={styles.imgContainer}><img src="assets/icons/Shoes-icon.png" alt="shoes icon" /></div>}
          {item.type === 'accessory' &&
            <div className={styles.accessoryImgContainer}>
                <img src="assets/icons/Clothing-Hat-icon.png" alt="hat icon" />
                <img src="assets/icons/Clothing-Scarf-icon.png" alt="scarf icon" />
              </div>}
          {item.timestamp && <div></div>}
          <p>{item.description}</p>
          <p>{item.color}</p>
        </div>))}
    </div>
  );
}

export default OutfitDisplay;