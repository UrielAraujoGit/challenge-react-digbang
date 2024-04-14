import Slider from "rc-slider";
import { FC, useState } from "react";

interface CreditSliderProps {
  min: number;
  max: number;
  title: string;
  onChange: (n: number) => void;
  validityChange: (valid: boolean) => void;
}

const CreditSlider: FC<CreditSliderProps> = ({
  min,
  max,
  title,
  onChange,
  validityChange,
}: CreditSliderProps) => {
  // this state handles the values of the input number
  // the value of the slider will always be valid, but the value of the input could be not valid
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(0);

  const saveValue = (v: number) => {
    checkValidity(v);
    setValue(v);
  };

  const [lastInputValidityCheck, setLastInputValidityCheck] = useState("");

  const formatNumber = (n: number | Array<number>) => {
    if (typeof n !== "number") {
      console.error("the value provided is not a number", n);
      return null;
    }

    return n;
  };

  const checkValidity = (n: number) => {
    const isValid = n >= min && n <= max;
    validityChange(isValid);
  };

  const handleSetData = (n: number | null) => {
    if (n !== null) {
      saveValue(n);
      setInputValue(String(n));
      onChange(n);
    }
  };

  const handleFocusOutInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;
    const value = e.currentTarget.value;

    setInputValue(value);
    setLastInputValidityCheck(value);
    // if the value of the input is not valid, it shouldn't send that value to the slider
    if (!element.validity.valid) {
      if (lastInputValidityCheck !== value) {
        element.reportValidity();
        saveValue(0);
      }
      return;
    }

    handleSetData(Number(e.currentTarget.value));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <div>
        <div>
          <h6>{title}</h6>
          <input
            type="number"
            min={min}
            max={max}
            value={inputValue}
            onBlur={handleFocusOutInput}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Slider
            min={min}
            max={max}
            value={value}
            onChange={(e) => handleSetData(formatNumber(e))}
          />
        </div>
      </div>
    </>
  );
};

export default CreditSlider;
