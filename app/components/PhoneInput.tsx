"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (fullFormatted: string, dialCode: string, number: string) => void;
}

interface CountryData {
  dialCode: string;
}

export default function MyPhoneInput({ value, onChange }: PhoneInputProps) {
  const handleChange = (
    value: string,
    country: CountryData,
    _event: unknown,
    formattedValue: string,
  ) => {
    if (!value || !country) {
      onChange("", "", "");
      return;
    }

    // Use the library's own formatted value (e.g. "+20 120 771 5484") so the
    // selected country code is always reliably included in what gets submitted.
    onChange(formattedValue, country.dialCode, value);
  };

  return (
    <div className="relative" dir="ltr">
      <PhoneInput
        country={"eg"} // default country
        value={value.replace(/[^0-9]/g, "")}
        onChange={handleChange}
        enableSearch
        countryCodeEditable={false}
        inputClass="!w-full  !py-[16px] !h-[50px] !rounded-[14px] !bg-surface-elevated border !border-surface-border !text-text-primary !placeholder-text-faint-2 !focus:border-brand-cyan/50 !focus:outline-none transition duration-300"
        buttonClass="!bg-surface-elevated border-r !hover:bg-none !border-surface-border !rounded-l-xl  !py-3 "
        dropdownClass="!bg-brand-navy !text-text-primary"
        searchClass="!bg-surface-elevated !text-text-primary"
        inputProps={{
          name: "phone",
          required: true,
          dir: "ltr",
        }}
      />
    </div>
  );
}
