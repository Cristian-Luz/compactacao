
document.addEventListener("DOMContentLoaded", function() {
    var inputElement = document.getElementById("input-palavra");
    var resultadoElement = document.getElementById("text-resultado");

    inputElement.addEventListener("input", function() {
        var valorInput = inputElement.value;
        var resultadoCompactado = Sequencia(valorInput);
        
        resultadoElement.textContent = resultadoCompactado;
    });

    function Sequencia(sequencia) {
        let stCompactado = '';
        let i = 0;
      
        while (i < sequencia.length) {
          let nOcorrencias = 0;
          let ch = sequencia[i];
          let j = i;
      
          while (j < sequencia.length && sequencia[j] === ch) {
            nOcorrencias++;
            j++;
            i++;
          }
      
          let add;
      
          if (!isNaN(ch)) {
            add = '@' + ch;
          } else {
            add = ch;
          }
      
          if (nOcorrencias === 1) {
            stCompactado += add;
          } else if (nOcorrencias > 1) {
            stCompactado += nOcorrencias.toString() + add;
          }
        }
      
        return stCompactado;
      }
});
