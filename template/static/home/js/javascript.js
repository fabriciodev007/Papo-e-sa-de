function imc() {
  let altura = document.getElementById("ipt_altura").value;
  let peso = document.getElementById("ipt_peso").value;

  let imc = peso / Math.pow(altura, 2);
  if (imc < 18.5) {
    alert(" Seu IMC é :" + imc.toFixed(2) + " Classificação: Magreza.");
  } else {
      if (imc < 24.9) {
      alert(" Seu IMC é :" + imc.toFixed(2) + " Classificação: Normal.");
    }  else {
            if (imc < 29.9) {
        alert(" Seu IMC é :" + imc.toFixed(2) + " Classificação: Sobrepeso.");
      } else {
              if (imc < 39.9) {
          alert(
            " Seu IMC é :" + imc.toFixed(2) + " Classificação: Obesidade.");
        } else {
                alert(" Seu IMC é :" + imc.toFixed(2) +" Classificação: Obesidade Grave.");
          }
        }
      }
    }
  }

