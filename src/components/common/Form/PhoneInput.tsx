import React from "react";
import { Select, Input } from "@arco-design/web-react";
import countryCodeJson from "../../../assets/API/countryCode.json";

interface PhoneInputProps {
  value?: {
    input?: string;
    select?: string;
  };
  onChange?: (newValue: { input?: string; select?: string }) => void;
  error?: boolean;
}

const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  const value = props.value || {};
  const handleChange = (newValue: { input?: string; select?: string }) => {
    props.onChange && props.onChange(newValue);
  };

  const countryCode = [
    { code: "+886" },
    ...countryCodeJson
      .filter((entry) => entry.code !== "+886")
      .sort(
        (a, b) =>
          parseInt(a.code.replace("+", "")) - parseInt(b.code.replace("+", ""))
      ),
  ].map((entry) => entry.code);

  return (
    <Input
      value={value.input}
      onChange={(v) => {
        handleChange({ ...value, input: v });
      }}
      addBefore={
        <Select
          error={props.error}
          defaultValue={'+886'}
          size={"mini"}
          placeholder="請選擇"
          style={{ width: 100 }}
          options={countryCode}
          onChange={(v) => {
            handleChange({ ...value, select: v });
          }}
        ></Select>
      }
      allowClear={true}
      placeholder="請輸入手機號碼"
    />
  );
};

export default PhoneInput;
