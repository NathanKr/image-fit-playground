import { FC } from "react";

interface IProps {
  fit: boolean;
}

const ImageFitContianerText : FC<IProps> = ({fit}) => {
  return fit ? <span style={{ color: 'var(--good-color)' }}>image fit container exactly</span> : 
  <span style={{ color: 'var(--bad-color)' }}>image does not fit container exactly</span>;
};

export default ImageFitContianerText;
