import { ReactElement } from "react";
import { IMAGE_SRC } from "./constants";
import "./App.css";

interface IElement {
  header: string;
  elem: ReactElement;
}

const styleImage = {
  border: "4px solid red",
};

export const elemsData: IElement[] = [
  {
    header: "width 100% with container -> aspect ratio remain",
    elem: (
      <div className="Container">
        <img src={IMAGE_SRC} alt="" width="100%" />
      </div>
    ),
  },
  {
    header: "height 100% with container -> aspect ratio remain",
    elem: (
      <div className="Container">
        <img src={IMAGE_SRC} alt="" height="100%" />
      </div>
    ),
  },
  {
    header:
      "height 100% and width 100% with container .image fill its content box by default. Aspect ratio is not kept. If necessary, the image will be stretched or squished to fit",
    elem: (
      <div className="Container">
        <img src={IMAGE_SRC} width="100%" height="100%" alt="" />
      </div>
    ),
  },
  {
    header: "height and width as container but without container . seems same as with height 100% and width 100% with container",
    elem: (
      <div>
        <img className="Container" src={IMAGE_SRC} alt="" />
      </div>
    ),
  },
  {
    header:
      "object-fit : contain. The image keeps its aspect ratio ?????, but is resized to fit within the given dimension",
    elem: (
      <div>
        <img className="Container ObjectFitContain" src={IMAGE_SRC} alt="" />
      </div>
    ),
  },
  {
    header:
      "object-fit : cover. The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit",
    elem: (
      <div>
        <img className="Container ObjectFitCover" src={IMAGE_SRC} alt="" />
      </div>
    ),
  },
];
