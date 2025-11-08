import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from './src/services/auth';
import LoginScreen from './src/screens/LoginScreen';
import ContactsScreen from './src/screens/ContactsScreen';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? <ContactsScreen /> : <LoginScreen />}
    </div>
  );
};

export default App;