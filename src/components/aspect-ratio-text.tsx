import { FC } from "react";

interface IProps {
  preserved: boolean;
}

const AspectRatioText: FC<IProps> = ({ preserved }) => {
  return preserved ? (
    <span style={{ color: "var(--good-color)" }}>
      aspect ratio preserved (image is not distorted)
    </span>
  ) : (
    <span style={{ color: "var(--bad-color)" }}>
      aspect ratio not preserved (image is distorted)
    </span>
  );
};

export default AspectRatioText;
