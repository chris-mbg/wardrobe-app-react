import { ClothesContext } from '../contexts/ClothesContext'
import {useContext, useState, useEffect} from 'react'
import Shelf from '../components/Shelf'
import styles from '../css/OutfitPicker.module.css'

const OutfitPicker = () => {
  const { clothes } = useContext(ClothesContext);
  const tShirts = clothes.filter(item => item.type === 'tShirt');
  const shirts = clothes.filter(item => item.type === 'shirt');
  const sweaters = clothes.filter(item => item.type === 'sweater');
  const trousers = clothes.filter(item => item.type === 'trousers');
  const shorts = clothes.filter(item => item.type === 'shorts');
  const jackets = clothes.filter(item => item.type === 'jacket');
  const shoes = clothes.filter(item => item.type === 'shoes');
  const accessories = clothes.filter(item => item.type === 'accessory');

  /* const {shoes} = useContext(ShoesContext);
  const {shirts} = useContext(ShirtsContext);
  const {trousers} = useContext(TrousersContext); */

  /* const getRandomItem = (itemList) => {
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

  useEffect(()=> console.log(randomOutfit), [randomOutfit]) */

  return (
    <div className={styles.outfitContainer}>
      <p>What do you want to wear today?</p>
      <form>
        <input type="checkbox" id="tShirt" name="tShirt" value="tShirt" />
        <label for="tShirt">T-Shirt</label><br />
        <input type="checkbox" id="shirt" name="shirt" value="shirt" />
        <label for="shirt">Shirt</label><br />
        <input type="checkbox" id="sweater" name="sweater" value="sweater" />
        <label for="sweater">Sweater</label><br />
        <input type="checkbox" id="trousers" name="trousers" value="trousers" />
        <label for="trousers">Trousers</label><br />
        <input type="checkbox" id="shorts" name="shorts" value="shorts" />
        <label for="shorts">Shorts</label><br />
        <input type="checkbox" id="shoes" name="shoes" value="shoes" />
        <label for="shoes">Shoes</label><br />
        <input type="checkbox" id="accessory" name="accessory" value="accessory" />
        <label for="accessory">Accessory</label><br />

      </form>
        {/* {randomOutfit && <div><h2>Outfit for the day:</h2><Shelf itemList={randomOutfit} canBeDeleted={false} canBeEdited={false} /></div>}
      <div className={styles.outfitBtn}>
        <button onClick={pickNewOutfit}>Get new outfit</button>
      </div> */}
    </div>
  );
}

export default OutfitPicker;