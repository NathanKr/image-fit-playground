import { SyntheticEvent, useState } from "react";
import IOffset from "../types/i-offset";
import styles from "../styles/image-fit-to-container.module.css";
import IElement from "../types/i-element";
import { IMAGE_SRC, IMAGE_SRC_CROPPED_SHARP } from "../utils/constants";
import AspectRatioText from "./aspect-ratio-text";
import ImageFitContianerText from "./image-fit-contianer-text";
import ImageClippedText from "./image-clipped-text";

const elemsData: IElement[] = [
  {
    header: (
      <h3>
        width 100% with container -{">"} <br />
        <AspectRatioText preserved={true} />,
        <ImageFitContianerText fit={false} />,
        <ImageClippedText clipped={false} />
      </h3>
    ),
    elem: (
      <div className={styles.Container}>
        <img src={IMAGE_SRC} alt="width 100% with container" width="100%" />
      </div>
    ),
  },
  {
    header: (
      <h3>
        height 100% with container -{">"} <br />
        <AspectRatioText preserved={true} />,
        <ImageFitContianerText fit={false} />,
        <ImageClippedText clipped={false} />
      </h3>
    ),
    elem: (
      <div className={styles.Container}>
        <img src={IMAGE_SRC} alt="height 100% with container" height="100%" />
      </div>
    ),
  },
  {
    header: (
      <>
        <h3>
          height 100% and width 100% with container
          <br />
          <AspectRatioText preserved={false} />,
          <ImageFitContianerText fit={true} />,
          <ImageClippedText clipped={false} />
          <br /> If necessary, the image will be stretched or squished to fit
        </h3>
      </>
    ),
    elem: (
      <div className={styles.Container}>
        <img
          src={IMAGE_SRC}
          width="100%"
          height="100%"
          alt="height 100% and width 100% with container"
        />
      </div>
    ),
  },
  {
    header: (
      <>
        <h3>height and width as container but without container</h3>
        <h3>Same as with height 100% and width 100% with container</h3>
      </>
    ),
    elem: (
      <div>
        <img
          className={styles.Container}
          src={IMAGE_SRC}
          alt="height and width as container but without container"
        />
      </div>
    ),
  },
  {
    header: (
      <h3>
        object-fit : contain
        <br /> <AspectRatioText preserved={true} />,
        <ImageFitContianerText fit={false} />,
        <ImageClippedText clipped={false} />
      </h3>
    ),
    elem: (
      <div>
        <img
          className={`${styles.Container} ${styles.ObjectFitContain}`}
          src={IMAGE_SRC}
          alt="object-fit : contain"
        />
      </div>
    ),
  },
  {
    header: (
      <h3>
        object-fit : cover
        <br /> <AspectRatioText preserved={true} />,
        <ImageFitContianerText fit={true} />,
        <ImageClippedText clipped={true} />
      </h3>
    ),
    elem: (
      <div>
        <img
          className={`${styles.Container} ${styles.ObjectFitCover}`}
          src={IMAGE_SRC}
          alt="object-fit : cover"
        />
      </div>
    ),
  },
  {
    header: (
      <h3>
        cropped by{" "}
        <a href="https://github.com/NathanKr/image-processing-with-sharp-playground">
          sharp
        </a>{" "}
        to container width \ height
        <br /> <AspectRatioText preserved={true} />,
        <ImageFitContianerText fit={true} />,
        <ImageClippedText clipped={true} />
        <br />
        It is better than object-fit:cover because it is more cntered and
        performance(size , offline processing)
      </h3>
    ),
    elem: (
      <div>
        <img src={IMAGE_SRC_CROPPED_SHARP} alt="cropped by sharp" />
      </div>
    ),
  },
];

const ImageFitToContainer = () => {
  const [offset, setOffset] = useState<IOffset>();

  const onImgLoad = (e: SyntheticEvent<HTMLDivElement>) => {
    const image = e.target as HTMLImageElement;
    const { offsetHeight, offsetWidth } = image;
    setOffset({ offsetHeight, offsetWidth });
  };

  const elems = elemsData.map((it, i) => (
    <div key={i}>
      <h3>{it.header}</h3>
      {it.elem}
    </div>
  ));

  return (
    <>
      <p>Image width [px]: {offset?.offsetWidth}</p>
      <p>Image height [px]: {offset?.offsetHeight}</p>
      <p>Container width [px] : 200</p>
      <p>Container height [px] : 300</p>

      {elems}

      <h3>image as is</h3>
      <img onLoad={onImgLoad} src={IMAGE_SRC} alt="" />
    </>
  );
};

export default ImageFitToContainer;
