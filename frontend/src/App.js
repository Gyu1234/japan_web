/*import logo from './logo.svg';
import './App.css';

function App() {
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
  );
}

export default App;*/ //이 코드를 수정하면 됩니다

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ message: '연결 대기 중...', status: '' });

  useEffect(() => {
    // 백엔드 API 호출
    axios.get('http://localhost:8081/api/hello')
        .then(response => {
          setData(response.data); // 성공 시 데이터 저장
        })
        .catch(error => {
          console.error("연결 에러 발생:", error);
          setData({ message: '연결 실패 (백엔드가 켜져 있는지 확인하세요)' });
        });
  }, []);

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Japan Web 프로젝트 통신 테스트</h1>
        <div style={{ border: '1px solid #ccc', padding: '20px', display: 'inline-block' }}>
          <h3>백엔드 응답 데이터:</h3>
          <p style={{ color: 'blue', fontSize: '1.2rem' }}>{data.message}</p>
          <p>상태: {data.status}</p>
        </div>
      </div>
  );
}

export default App; //테스트용 코드

