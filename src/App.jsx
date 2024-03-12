import { useState, useEffect } from 'react';
import Router from "./routes/Router";
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <Router />
      )}
    </div>
  );
}

export default App;