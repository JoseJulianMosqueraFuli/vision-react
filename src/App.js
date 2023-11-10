import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis'; // Importa la función de análisis de imágenes

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
    // Lógica para ejecutar la acción con la URL
    console.log(`Generando acción con la URL: ${url}`);
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Cargando...</p>;
    }

    if (result) {
      return (
        <div>
          <h2>Computer Vision Analysis:</h2>
          {/* Muestra la imagen cargada */}
          {imageSrc && <img src={imageSrc} alt="Imagen cargada" style={{ maxWidth: '300px', height: 'auto' }} />}
          {/* Muestra la URL */}
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
        <br />
        <input type="text" value={url} onChange={handleInputChange} />
        <p>{/* Comentario opcional */}</p>
        <button onClick={handleAnalyzeClick}>Analyze</button>
        &nbsp;
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
      <DisplayResults />
    </div>
  );
}

export default App;

