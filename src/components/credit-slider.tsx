import Slider from "rc-slider";
import { FC, useState } from "react";

interface CreditSliderProps {
  min: number;
  max: number;
  title: string;
  onChange: (n: number) => void;
}

const CreditSlider: FC<CreditSliderProps> = ({
  min,
  max,
  title,
  onChange,
}: CreditSliderProps) => {
  const [value, setValue] = useState(0);

  const formatNumber = (n: number | Array<number>) => {
    if (typeof n !== "number") {
      console.error("the value provided is not a number", n);
      return null;
    }

    return n;
  };

  const handleSetValue = (n: number | null) => {
    if (n !== null) {
      setValue(n);
      onChange(n);
    }
  };

  return (
    <>
      <div>
        <div>
          <h6>{title}</h6>
          <p>{value}</p>
        </div>
        <div>
          <Slider
            min={min}
            max={max}
            onChange={(e) => handleSetValue(formatNumber(e))}
          />
        </div>
      </div>
    </>
  );
};

export default CreditSlider;
