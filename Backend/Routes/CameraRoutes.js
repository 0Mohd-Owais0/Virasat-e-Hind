const express = require('express');
const router = express.Router();
const vision = require('@google-cloud/vision');

let client;
try {
  client = new vision.ImageAnnotatorClient({ 
    keyFilename: './credentials/lankmarkscanner-9bad15c6146a.json' 
  });
} catch (error) {
  process.exit(1);
}



app.post('/detect-landmark-base64', async (req, res) => {
  try {
    const { imageBase64 } = req.body;
    
    if (!imageBase64) {
      return res.status(400).json({
        success: false,
        error: 'No image data provided'
      });
    }

    const base64Data = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');
    const imageBuffer = Buffer.from(base64Data, 'base64');
  
    const [result] = await Promise.race([
      client.landmarkDetection({
        image: {
          content: imageBuffer
        }
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('API request timeout')), 30000)
      )
    ]);

    if (result.error) {
      return res.status(500).json({
        success: false,
        error: 'Vision API error',
        details: result.error.message || 'Unknown API error'
      });
    }

    const landmarks = result.landmarkAnnotations;
    
    if (landmarks && landmarks.length > 0) {
      const topLandmark = landmarks[0];
      res.json({
        success: true,
        landmark: {
          name: topLandmark.description,
          confidence: Math.round((topLandmark.score || 0.8) * 100),
          location: topLandmark.locations?.[0]?.latLng || null
        },
        allLandmarks: landmarks.map(l => ({
          name: l.description,
          confidence: Math.round((l.score || 0.8) * 100)
        }))
      });
    } else {
      try {
        const [objectResult] = await client.objectLocalization({
          image: { content: imageBuffer }
        });
        
        const objects = objectResult.localizedObjectAnnotations;
        
        res.json({
          success: false,
          error: 'No landmark detected',
          message: 'Image processed successfully but no landmarks found',
          imageValid: objects && objects.length > 0,
          detectedObjects: objects?.slice(0, 3).map(obj => obj.name) || []
        });
      } catch (objectError) {
        res.json({
          success: false,
          error: 'No landmark detected',
          message: 'No landmarks found in the image'
        });
      }
    }
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to analyze image',
      details: error.message,
      type: error.constructor.name
    });
  }
});

// Test endpoint with multiple test scenarios
app.post('/test-landmark', async (req, res) => {
  try {
    const simpleTestImage = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQR...';
    let imageBuffer = Buffer.from(simpleTestImage, 'base64');
    
    const [result] = await client.landmarkDetection({
      image: { content: imageBuffer }
    });
    
    const [objectResult] = await client.objectLocalization({
      image: { content: imageBuffer }
    });
    
    const [labelResult] = await client.labelDetection({
      image: { content: imageBuffer }
    });
    
    res.json({
      success: true,
      message: 'Google Vision API is working correctly',
      apiStatus: 'functional',
      tests: {
        landmarkDetection: {
          processed: true,
          landmarksFound: result.landmarkAnnotations?.length || 0,
          landmarks: result.landmarkAnnotations || []
        },
        objectDetection: {
          processed: true,
          objectsFound: objectResult.localizedObjectAnnotations?.length || 0,
          objects: objectResult.localizedObjectAnnotations?.slice(0, 3).map(obj => obj.name) || []
        },
        labelDetection: {
          processed: true,
          labelsFound: labelResult.labelAnnotations?.length || 0,
          labels: labelResult.labelAnnotations?.slice(0, 5).map(label => ({
            name: label.description,
            confidence: Math.round(label.score * 100)
          })) || []
        }
      },
      recommendation: "Your API is working! Try testing with a clear photo of a famous landmark like Taj Mahal, Eiffel Tower, or Statue of Liberty."
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Test failed',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: 'landmark-detection-api',
    timestamp: new Date().toISOString(),
    visionApiStatus: client ? 'initialized' : 'not initialized'
  });
});


module.exports = router;