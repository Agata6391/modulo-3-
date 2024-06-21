import React from 'react';
import StarCardContainer from './components/StarCardContainer';
import './Starcard.css'; 





const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Star Wars Explorer</h1>
            </header>
            <main>
                <StarCardContainer />
            </main>
        </div>
    );
};
// filtrado con .map

export default App;
