"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (fullFormatted: string, dialCode: string, number: string) => void;
}

export default function MyPhoneInput({ value, onChange }: PhoneInputProps) {
  const handleChange = (value: string, country: any) => {
    if (!value || !country) {
      onChange("", "", "");
      return;
    }

    const dialCode = country.dialCode;
    const restNumber = value.startsWith(dialCode)
      ? value.slice(dialCode.length)
      : value;

    const fullFormatted = `+${dialCode}-${restNumber}`;
    onChange(fullFormatted, dialCode, restNumber);
  };

  return (
    <div className="relative">
      <PhoneInput
        country={"eg"} // default country
        value={value.replace(/[^0-9]/g, "")}
        onChange={handleChange}
        enableSearch
        countryCodeEditable={false}
        inputClass="!w-full  !py-[16px] !h-[50px] !rounded-[14px] !bg-gray-900/50 border !border-gray-700 !text-white !placeholder-gray-500 !focus:border-cyan-400/50 !focus:outline-none transition duration-300"
        buttonClass="!bg-gray-900/50 border-r !hover:bg-none !border-gray-700 !rounded-l-xl  !py-3 "
        inputProps={{
          name: "phone",
          required: true,
        }}
      />
    </div>
  );
}
