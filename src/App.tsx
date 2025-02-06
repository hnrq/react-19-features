import { Suspense, useDebugValue, useDeferredValue, useState } from 'react';
import GamesList from './layout/GamesList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const search = useDeferredValue(searchTerm);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Suspense fallback={<p>Loading...</p>}>
        <GamesList search={search} />
      </Suspense>
    </div>
  );
}

export default App;
