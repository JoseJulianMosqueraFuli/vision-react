import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAnalyzeClick = async () => {
    setLoading(true);
    try {
      const analysisResult = await analyzeImage(url);
      console.log('Respuesta de la API:', analysisResult);
      setResult(analysisResult);
      setImageSrc(url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateClick = () => {
    console.log(`Generando acción con la URL: ${url}`);
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (result) {
      return (
        <div>
          <hr />
          <h1>Computer Vision Analysis</h1>
          {imageSrc && <img src={imageSrc} alt="Imagen cargada" style={{ maxWidth: '300px', height: 'auto' }} />}
          <p><strong>URL:</strong> {url}</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <h1>Computer Vision</h1>
      <div>
        <label><b>Insert URL or type prompt:</b></label>
        <p></p>
        <input type="text" value={url} onChange={handleInputChange} className="large-input" />
        <p></p>
        <button onClick={handleAnalyzeClick}>Analyze</button>
        &nbsp;
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
      <DisplayResults />
    </div>
  );
}

export default App;

