# 🎂 Contador de Aniversário

Um projeto simples e estiloso em **HTML, CSS e JavaScript** que mostra uma **contagem regressiva** até a data do meu aniversário.  
O contador exibe **dias, horas, minutos e segundos** em tempo real, com um visual delicado e feminino ✨💖

## 🚀 Tecnologias usadas

- HTML5  
- CSS3  
- JavaScript (ES Modules)  

## 📁 Estrutura do projeto
```

/
├── index.html
├── style.css
├── script.js
└── countdown.js

````

## ⚙️ Como funciona

- A classe `Countdown` calcula a diferença entre a data atual e a data do aniversário.
- A cada 1 segundo, o JavaScript atualiza os valores na tela.
- O CSS cuida de todo o visual bonito do contador.

## 🛠️ Como usar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` no navegador
3. Para mudar a data do aniversário, edite no arquivo `script.js`:

```js
const diasParaOMeuAniversario = new Countdown('24 March 2026 23:59:59 GMT-0300');
````
