const axios = require('axios');

async function chatWithOllama(prompt, model = 'phi') {
  try {
    const res = await axios.post('http://localhost:11434/api/generate', {
      model,
      prompt,
      stream: false
    });

    console.log(`Prompt: ${prompt}`);
    console.log(`Response: ${res.data.response}`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Example usage
chatWithOllama("What's the capital of France?");
