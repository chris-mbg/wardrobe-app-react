import styles from '../css/OutfitDisplay.module.css'

const OutfitDisplay = ({ outfit }) => {
  return (
    <div className={styles.outfitDisplay}>
      {outfit.map(item => (
        <div className={styles.itemContainer} key={item.id}>
          <p>{item.type}</p>
          <p>{item.description}</p>
          <p>{item.color}</p>

        </div>))}
    </div>
  );
}

export default OutfitDisplay;