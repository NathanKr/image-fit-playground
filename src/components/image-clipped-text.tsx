import { FC } from "react";

interface IProps {
  clipped: boolean;
}

const ImageClippedText: FC<IProps> = ({ clipped }) => {
  return clipped ? (
    <span style={{ color: "var(--warning-color)" }}>image is clipped</span>
  ) : (
    <span style={{ color: "var(--good-color)" }}>image is not clipped</span>
  );
};

export default ImageClippedText;
