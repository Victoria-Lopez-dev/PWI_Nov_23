import React from 'react';

class App extends React.Component{
    render(){
       return ( 
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
     </div>
    )}
};
export default App;

//ejemplo de como seria el componente App si se crean como componentes de clase