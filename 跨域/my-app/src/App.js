import logo from './logo.svg';
import './App.css';
import request from './services';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleClick = () => {
    request({ url: '/' })
      .then((res) => {
        console.log('接口返回结果', res);
      })
      .catch(() => {});
  };
  const handleClick2 = () => {
    request({ url: '/users', method: 'post' })
      .then((res) => {
        console.log('接口返回结果', res);
        setName(res.name);
      })
      .catch(() => {});
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>发送简单请求</button>
        <button onClick={handleClick2}>发送复杂请求</button>
        <span>{name}</span>
      </header>
    </div>
  );
}

export default App;
