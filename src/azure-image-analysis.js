const apiKey = process.env.REACT_APP_VISION_KEY;
const endpoint = process.env.REACT_APP_VISION_ENDPOINT;

async function analyzeImage(imageUrl) {
    const apiUrl = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption,tags`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
        },
        body: JSON.stringify({ url: imageUrl }),
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error al analizar la imagen');
    }
}

export default analyzeImage;
