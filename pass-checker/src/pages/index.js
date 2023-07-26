// pages/index.js
import React, { useState } from 'react';
import PasswordStrengthIndicator from '../../components/PasswordStrengthIndocator/PasswordStrengthIndocator';

const IndexPage = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <label htmlFor="password">Enter Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <PasswordStrengthIndicator password={password} />
    </div>
  );
};

export default IndexPage;
