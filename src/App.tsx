import './App.css'
import { SyntheticEvent, useState } from "react";
import {elemsData} from './data'
import { IMAGE_SRC } from './constants';

interface IOffset {
  offsetHeight: number;
  offsetWidth: number;
}



function App() {
  const [offset, setOffset] = useState<IOffset>();

  const onImgLoad = (e: SyntheticEvent<HTMLDivElement>) => {
    const image = e.target as HTMLImageElement;
    const { offsetHeight, offsetWidth } = image;
    setOffset({ offsetHeight, offsetWidth });
  };

  const elems = elemsData.map((it,i) => <div key = {i}>
    <h3>{it.header}</h3>
    {it.elem}
  </div>)

  return (
    <div className="App">
      <p>Image width [px]: {offset?.offsetWidth}</p>
      <p>Image height [px]: {offset?.offsetHeight}</p>
      <p>Content width [px] : 200</p>
      <p>Content height [px] : 300</p>


      {elems}

      <h3>image as is</h3>
      <img onLoad={onImgLoad} src={IMAGE_SRC} alt="" />
    </div>
  );
}

export default App;
