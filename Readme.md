# Ollama Chat: Run a Local LLM and Respond to Your First Prompt

## Objective

- **Install Ollama** (or LM Studio)
- **Run a model** like: `llama3`, `mistral`, `phi`, `dolphin`, `tinyllama`
- **Make a programmatic call** (not CLI) to:
  - Send a prompt
  - Get back a response

## Deliverable

A small Node.js script that:
- Sends a prompt to a local LLM (via Ollama)
- Prints the prompt and the AI's response

---

## Getting Started

### 1. Install Ollama

Download and install Ollama from [https://ollama.com/download](https://ollama.com/download).

Start Ollama and pull a model, for example:
```sh
ollama run phi
```
Or for other models:
```sh
ollama pull llama3
ollama pull mistral
# etc.
```

### 2. Clone this repository

```sh
git clone <your-repo-url>
cd ollama-chat
```

### 3. Install dependencies

```sh
npm install
```

### 4. Run the script

```sh
node chat.js
```

You should see output like:
```
Prompt: What's the capital of France?
Response: The capital of France is Paris.
```

---

## How it Works

- The script (`chat.js`) sends a prompt to the Ollama API running locally.
- It uses the `axios` library to make a POST request to `http://localhost:11434/api/generate`.
- The default model is `phi`, but you can change it in the script.

---

## Customizing

To use a different model or prompt, edit the last line of `chat.js`:
```js
chatWithOllama("Your prompt here", "llama3");
```

---

## Requirements

- Node.js
- Ollama running locally with your chosen model pulled

---

## Notes

- The `node_modules` directory is ignored by git (see `.gitignore`).
- This project is for local experimentation and learning.
