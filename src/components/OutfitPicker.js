import {ShoesContext} from '../contexts/ShoesContext'
import {ShirtsContext} from '../contexts/ShirtsContext'
import {TrousersContext} from '../contexts/TrousersContext'
import {useContext, useState, useEffect} from 'react'
import Shelf from '../components/Shelf'
import styles from '../css/OutfitPicker.module.css'

const OutfitPicker = () => {
  const {shoes} = useContext(ShoesContext);
  const {shirts} = useContext(ShirtsContext);
  const {trousers} = useContext(TrousersContext);

  const getRandomItem = (itemList) => {
    const randomItem =
      itemList[Math.floor(Math.random() * itemList.length)];
    return randomItem;
  }

  const getRandomOutfit = () => {
    return [
      getRandomItem(shirts),
      getRandomItem(trousers),
      getRandomItem(shoes)
    ]
  }

  const [randomOutfit, setRandomOutfit] = useState(null);

  const pickNewOutfit = () => {
    setRandomOutfit(getRandomOutfit())
  }

  useEffect(()=> console.log(randomOutfit), [randomOutfit])

  return (
    <div className={styles.outfitContainer}>
        {randomOutfit && <div><h2>Outfit for the day:</h2><Shelf itemList={randomOutfit} canBeDeleted={false} canBeEdited={false} /></div>}
      <div className={styles.outfitBtn}>
        <button onClick={pickNewOutfit}>Get new outfit</button>
      </div>
    </div>
  );
}

export default OutfitPicker;