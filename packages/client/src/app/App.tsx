import { Button } from '@fb/components';
import GlobalContext from './Global/GlobalContext';

function App() {
  return (
    <GlobalContext>
      <div className="App">
        testing
        <Button>Testing</Button>
      </div>
    </GlobalContext>
  );
}

export default App;
