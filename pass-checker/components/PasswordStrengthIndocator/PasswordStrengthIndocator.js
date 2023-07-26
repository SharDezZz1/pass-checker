// components/PasswordStrengthIndicator.js
import React from 'react';

const PasswordStrengthIndicator = ({ password }) => {
  // Function to calculate password strength
  const calculatePasswordStrength = (password) => {
    // If the password is empty or less than 8 characters, it is weak
    if (!password || password.length < 8) {
      return 'weak';
    }
    // Check if the password contains letters, symbols, and numbers
    const hasLetters = /[A-Za-z]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);
    const hasNumbers = /[0-9]/.test(password);

    if (hasLetters && hasSymbols && hasNumbers) {
      return 'strong';
    } else if ((hasLetters && hasSymbols) || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols)) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  const passwordStrength = calculatePasswordStrength(password);

  return (
    <div>
      <div className={`strength-section ${passwordStrength === 'weak' ? 'red' : 'gray'}`} />
      <div className={`strength-section ${passwordStrength === 'medium' ? 'yellow' : 'gray'}`} />
      <div className={`strength-section ${passwordStrength === 'strong' ? 'green' : 'gray'}`} />
      <style jsx>{`
        .strength-section {
          width: 50px;
          height: 10px;
          margin-bottom: 5px;
        }
        .gray {
          background-color: gray;
        }
        .red {
          background-color: red;
        }
        .yellow {
          background-color: yellow;
        }
        .green {
          background-color: green;
        }
      `}</style>
    </div>
  );
};

export default PasswordStrengthIndicator;
