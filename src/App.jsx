import React, { useState, useEffect } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [colors, setColors] = useState(['gray', 'gray', 'gray']);

  const updateColors = () => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(password);

    switch (true) {
      case password.length > 0 && password.length < 8:
        setColors(['red', 'red', 'red']);
        break;
      case hasLetters && hasDigits && hasSymbols:
        setColors(['green', 'green', 'green']);
        break;
      case (hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols):
        setColors(['yellow', 'yellow', 'gray']);
        break;
      case password.length >= 8 && (hasDigits || hasLetters || hasSymbols):
        setColors(['red', 'gray', 'gray']);
        break;
      default:
        setColors(['gray', 'gray', 'gray']);
    }
  };

  useEffect(() => {
    updateColors();
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
            style={{ background: color, height: '10px', margin: '10px 0', width: '175px' }}
          ></div>
        );
      })}
    </>
  );
};

export default App;
