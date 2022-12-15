import React, { useState } from 'react';
import './App.css';
import Dialog from './Dialog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Dialog
        title="제목"
        description="설명 ~~~~"
        onClickClose={() => console.log('click close button')}
        onClickSubmit={() => console.log('click submit button')}
      />
    </div>
  );
}

export default App;
