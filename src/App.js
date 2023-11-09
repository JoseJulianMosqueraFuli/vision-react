import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const value = 'World';

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAnalyzeClick = () => {
    // Lógica para analizar la URL
    console.log(`Analizando la URL: ${url}`);
  };

  const handleExecuteClick = () => {
    // Lógica para ejecutar la acción con la URL
    console.log(`Ejecutando acción con la URL: ${url}`);
  };

  return (
    <div>
      <h1>Computer Vision</h1>
      <div>
        <label><b>Insert URL or type prompt:</b></label>
        <br />
        <input type="text" value={url} onChange={handleInputChange} />
        <p>{/* Comentario opcional */}</p>
        <button onClick={handleAnalyzeClick}>Analyze</button>
        &nbsp;
        <button onClick={handleExecuteClick}>Execute</button>
      </div>
    </div>
  );
}

export default App;
