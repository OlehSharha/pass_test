import React, { useState, useEffect } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [colors, setColors] = useState(['gray', 'gray', 'gray']);

  useEffect(() => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(password);

    if (password.length > 0 && password.length < 8) {
      setColors(['red', 'red', 'red']);
    } else if (hasLetters && hasDigits && hasSymbols) {
      return setColors(['green', 'green', 'green']);
    }else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
      return setColors(['yellow', 'yellow', 'gray']);
    } else if (password.length >= 8 && (hasDigits || hasLetters || hasSymbols)) {
      setColors(['red', 'gray', 'gray'])
    }
     else {
      setColors(['gray', 'gray', 'gray']);
    }
  }, [password]);

  return (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {colors.map((color) => {
        return (
          <div
            style={{ background: color, height: '10px', margin: '10px 0' }}
          ></div>
        );
      })}
    </>
  );
};

export default PasswordStrengthChecker;
