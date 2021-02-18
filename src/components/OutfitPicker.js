import { ClothesContext } from '../contexts/ClothesContext'
import { useContext, useState, useEffect } from 'react'
import Shelf from '../components/Shelf'
import styles from '../css/OutfitPicker.module.css'
import OutfitDisplay from './OutfitDisplay'

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

  const [outfitItems, setOutfitItems] = useState([]);
  const [randomOutfit, setRandomOutfit] = useState(null);

  const handleChange = e => {
    console.log(e.target.value)
    const index = outfitItems.indexOf(e.target.value);
    if (index !== -1) {
      setOutfitItems(outfitItems.filter(item => item !== e.target.value))
    } else {
      setOutfitItems(prevState => [e.target.value, ...prevState]);
    }
  }

  const getRandomItem = (itemList) => itemList[Math.floor(Math.random() * itemList.length)];

  const pickNewOutfit = e => {
    e.preventDefault();
    console.log(e.target)

    const someOutfit = [];

    if (outfitItems.includes('tShirt')) {
      someOutfit.push(getRandomItem(tShirts));
    }
    if (outfitItems.includes('shirt')) {
      someOutfit.push(getRandomItem(shirts));
    }
    if (outfitItems.includes('sweater')) {
      someOutfit.push(getRandomItem(sweaters));
    }
    if (outfitItems.includes('trousers')) {
      someOutfit.push(getRandomItem(trousers));
    }
    if (outfitItems.includes('shorts')) {
      someOutfit.push(getRandomItem(shorts));
    }
    if (outfitItems.includes('jacket')) {
      someOutfit.push(getRandomItem(jackets));
    }
    if (outfitItems.includes('shoes')) {
      someOutfit.push(getRandomItem(shoes));
    }
    if (outfitItems.includes('accessory')) {
      someOutfit.push(getRandomItem(accessories));
    }

    console.log(someOutfit);
    setRandomOutfit([...someOutfit]);
  }

  useEffect( () => console.log(outfitItems), [outfitItems]);

  return (
    <div className={styles.outfitContainer}>
      <p className={styles.lead}>What do you want to wear today?</p>
      <form onSubmit={pickNewOutfit}>
        <label class={styles.checkboxContainer} htmlFor='tShirt'>T-shirt
          <input type="checkbox" id="tShirt" name="tShirt" value="tShirt" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='shirt'>Shirt
          <input type="checkbox" id="shirt" name="shirt" value="shirt" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='sweater'>Sweater
          <input type="checkbox" id="sweater" name="sweater" value="sweater" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='trousers'>Trousers
          <input type="checkbox" id="trousers" name="trousers" value="trousers" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='shorts'>Shorts
          <input type="checkbox" id="shorts" name="shorts" value="shorts" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='shoes'>Shoes
          <input type="checkbox" id="shoes" name="shoes" value="shoes" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <label class={styles.checkboxContainer} htmlFor='accessory'>Accessory
          <input type="checkbox" id="accessory" name="accessory" value="accessory" onChange={handleChange} />
          <span class={styles.checkmark}></span>
        </label>
        <button type="sumbit">Get new outfit!</button>
      </form>
      <div>
        {randomOutfit && randomOutfit.map(item => (<p key={item.id}>{item.description}</p>))}
        {randomOutfit && <OutfitDisplay outfit={randomOutfit} />}
      </div>
    </div>
  );
}

export default OutfitPicker;