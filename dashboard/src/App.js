import HolbertonLogo from './HolbertonLogo.jpg';
import './App.css'
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className='App'>
      <div className='root-notifications'>{Notifications()}</div>
      <header className='App-header'>
        <img className='App-logo' src={HolbertonLogo} alt='logo'></img>
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label className='email'>
          Email:
        </label>
        <input type='email'/>
        <label className='password'>
          Password: 
        </label>
        <input type='password'/>
        <button className='label-button'>OK</button>
      </body>
      <footer className='App-footer'>
        <p>
          {getFullYear()} {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
