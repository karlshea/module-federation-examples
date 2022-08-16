import { NameContextProvider } from '@shared-context/shared-library/test/NameContextProvider.js';
import React from 'react';

const Welcome = () => {
  const name = React.useContext(NameContextProvider);

  return <p>Welcome, {name}</p>;
};

export default Welcome;
