import React, { useState, useEffect } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [colors, setColors] = useState([]);
  const [message, setMessage] = useState('');

  const updateColors = () => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]/.test(password);
    const standart = ['gray', 'gray', 'gray'];
    const weak = ['red', 'red', 'red'];
    const easy = ['red', 'gray', 'gray'];
    const medium = ['yellow', 'yellow', 'gray'];
    const strong = ['green', 'green', 'green'];

    switch (true) {
      case password.length > 0 && password.length < 8:
        setColors(weak);
        setMessage('Your password is WEAK, upgrade please!');
        break;
      case hasLetters && hasDigits && hasSymbols:
        setColors(strong);
        setMessage('Your password is STRONG, I knew you can do it!');
        break;
      case (hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols):
        setColors(medium);
        setMessage('Your password is MEDIUM, you can better I know!');
        break;
      case password.length >= 8 && (hasDigits || hasLetters || hasSymbols):
        setColors(easy);
        setMessage('Your password is EASY, you can better I believe!')
        break;
      default:
        setColors(standart);
        setMessage('Enter a password :)');
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
          />
        );
      })}
      <div>{message}</div>
    </>
  );
};

export default App;
