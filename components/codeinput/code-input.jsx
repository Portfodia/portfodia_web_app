import React, { useState, useRef } from 'react';

const PinInput = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only digits

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Focus the next input field if available
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-between pt-10">
      {pin.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => {
            if (e.key === 'Backspace') handleBackspace(e.target.value, index);
          }}
          ref={(el) => (inputRefs.current[index] = el)}
          className="md:w-[90px] md:h-[90px] xs:w-16 xs:h-16 text-center bg-[#F0F5FA]  rounded focus:outline-none focus:border-blue-500"
        />
      ))}
    </div>
  );
};

export default PinInput;
