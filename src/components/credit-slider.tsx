import Slider from "rc-slider";
import { FC, ReactNode, useEffect, useState } from "react";

interface CreditSliderProps {
  min: number;
  max: number;
  title: string;
  onChange: (n: number) => void;
  validityChange: (valid: boolean) => void;
  prefix?: ReactNode;
}

const CreditSlider: FC<CreditSliderProps> = ({
  min,
  max,
  title,
  onChange,
  validityChange,
  prefix,
}: CreditSliderProps) => {
  // this state handles the values of the input number
  // the value of the slider will always be valid, but the value of the input could be not valid
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(0);
  const [lastInputValidityCheck, setLastInputValidityCheck] = useState("");

  const saveValue = (v: number) => {
    checkValidity(v);
    setValue(v);
  };

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
    if (!isValid) {
      console.warn("the new credit-slider value is not valid");
      onChange(0);
    }
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

  useEffect(() => {
    setLastInputValidityCheck(String(value));
  }),
    [value];
  return (
    <>
      <div>
        <div className="flex justify-between pb-5">
          <h6 className="uppercase">{title}</h6>
          <input
            type="number"
            min={min}
            max={max}
            value={inputValue}
            onBlur={handleFocusOutInput}
            onChange={handleChangeInput}
            className="bg-primary-default border border-white text-white font-bold text-center min-w-28"
          />
        </div>
        <div className="px-10">
          <Slider
            min={min}
            max={max}
            value={value}
            onChange={(e) => handleSetData(formatNumber(e))}
          />
        </div>
        <div className="flex justify-between ">
          <p className="text-center min-w-14">
            {prefix} {min}
          </p>
          <p className="text-center min-w-14">
            {prefix} {max}
          </p>
        </div>
      </div>
    </>
  );
};

export default CreditSlider;
