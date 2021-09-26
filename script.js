function converter() {
  var valorInserido = parseFloat(document.getElementById("valorInserido").value);
  var resultado = document.getElementById("resultado");

  var select1 = document.getElementById("select1").value;
  var select2 = document.getElementById("select2").value;
  
  if (valorInserido < 0) {
  alert("Valor menor que zero, insira um número válido.")
  } else {
    if (select1 === "bitcoin" && select2 === "bitcoin") {
      var biticoinBiticoin = valorInserido.toFixed(2);
      resultado.innerHTML = valorInserido + " Bitcoin é igual a ₿ " + biticoinBiticoin + " Bitcoins";
    } else if (select1 === "bitcoin" && select2 === "dolar") {
      var biticoinDolar = valorInserido * 43454.61;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a US$ " + biticoinDolar.toFixed(2) + " Dólar americano";
    } else if (select1 === "bitcoin" && select2 === "euro") {
      var biticoinEuro = valorInserido * 41047.92;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a € " + biticoinEuro.toFixed(2) + " Euro";
  } else if (select1 === "bitcoin" && select2 === "iene") {
      var biticoinIene = valorInserido * 5293661.15;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a ¥ " + biticoinIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "bitcoin" && select2 === "real") {
      var biticoinReal = valorInserido * 230819.24;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a R$ " + biticoinReal.toFixed(2) + " Real brasileiro";
  }   else if (select1 === "bitcoin" && select2 === "rupia") {
      var biticoinRupia = valorInserido * 3191978.89;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a ₹ " + biticoinRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "bitcoin" && select2 === "yuan") {
      var biticoinYuan = valorInserido * 279306.03;
      resultado.innerHTML = valorInserido + " Bitcoin é igual a ¥ " + biticoinYuan.toFixed(2) + " Yuan chinês";
  } 
    
    else if (select1 === "dolar" && select2 === "bitcoin") {
     var dolarBiticoin = valorInserido / 43454.61 ;
      resultado.innerHTML = valorInserido + " Dólar é igual a ₿ " + dolarBiticoin.toFixed(6) + " Bitcoins";
    } else if (select1 === "dolar" && select2 === "dolar") {
      var dolarDolar = valorInserido;
      resultado.innerHTML = valorInserido + " Dólar é igual a US$ " + dolarDolar.toFixed(2) + " Dólar americano";
    } else if (select1 === "dolar" && select2 === "euro") {
      var dolarEuro = valorInserido / 1.17;
      resultado.innerHTML = valorInserido + " Dólar é igual a € " + dolarEuro.toFixed(2) + " Euro";
  } else if (select1 === "dolar" && select2 === "iene") {
      var dolarIene = valorInserido * 109.41;
      resultado.innerHTML = valorInserido + " Dólar é igual a ¥ " + dolarIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "dolar" && select2 === "real") {
      var dolarReal = valorInserido * 5.32;
      resultado.innerHTML = valorInserido + " Dólar é igual a R$ " + dolarReal.toFixed(2) + " Real brasileiro";
  }   else if (select1 === "dolar" && select2 === "rupia") {
      var dolarRupia = valorInserido * 73.63;
      resultado.innerHTML = valorInserido + " Dólar é igual a ₹ " + dolarRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "dolar" && select2 === "yuan") {
      var dolarYuan = valorInserido * 6.48;
      resultado.innerHTML = valorInserido + " Dólar é igual a ¥ " + dolarYuan.toFixed(2) + " Yuan chinês";
  }
    
    
     else if (select1 === "euro" && select2 === "bitcoin") {
     var euroBiticoin = valorInserido / 41047.92 ;
      resultado.innerHTML = valorInserido + " Euro é igual a ₿ " + euroBiticoin.toFixed(6) + " Bitcoins";
    } else if (select1 === "euro" && select2 === "dolar") {
      var euroDolar = valorInserido / 1.17;
      resultado.innerHTML = valorInserido + " Euro é igual a US$ " + euroDolar.toFixed(2) + " Dólar americano";
    } else if (select1 === "euro" && select2 === "euro") {
      var euroEuro = valorInserido;
      resultado.innerHTML = valorInserido + " Euro é igual a € " + euroEuro.toFixed(2) + " Euro";
  } else if (select1 === "euro" && select2 === "iene") {
      var euroIene = valorInserido * 128.27;
      resultado.innerHTML = valorInserido + " Euro é igual a ¥ " + euroIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "euro" && select2 === "real") {
      var euroReal = valorInserido * 6.24;
      resultado.innerHTML = valorInserido + " Euro é igual a R$ " + euroReal.toFixed(2) + " Real brasileiro";
  }   else if (select1 === "euro" && select2 === "rupia") {
      var euroRupia = valorInserido * 86.36;
      resultado.innerHTML = valorInserido + " Euro é igual a ₹ " + euroRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "euro" && select2 === "yuan") {
      var euroYuan = valorInserido * 7.60;
      resultado.innerHTML = valorInserido + " Euro é igual a ¥ " + euroYuan.toFixed(2) + " Yuan chinês";
  }
   
     else if (select1 === "iene" && select2 === "bitcoin") {
     var ieneBiticoin = valorInserido / 5293661.15 ;
      resultado.innerHTML = valorInserido + " Iene é igual a ₿ " + ieneBiticoin.toFixed(8) + " Bitcoins";
    } else if (select1 === "iene" && select2 === "dolar") {
      var ieneDolar = valorInserido / 109.41;
      resultado.innerHTML = valorInserido + " Iene é igual a US$ " + ieneDolar.toFixed(4) + " Dólar americano";
    } else if (select1 === "iene" && select2 === "euro") {
      var ieneEuro = valorInserido / 128.27;
      resultado.innerHTML = valorInserido + " Iene é igual a € " + ieneEuro.toFixed(4) + " Euro";
  } else if (select1 === "iene" && select2 === "iene") {
      var ieneIene = valorInserido;
      resultado.innerHTML = valorInserido + " Iene é igual a ¥ " + ieneIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "iene" && select2 === "real") {
      var ieneReal = valorInserido / 20.54;
      resultado.innerHTML = valorInserido + " Iene é igual a R$ " + ieneReal.toFixed(3) + " Real brasileiro";
  }   else if (select1 === "iene" && select2 === "rupia") {
      var ieneRupia = valorInserido / 1.49;
      resultado.innerHTML = valorInserido + " Iene é igual a ₹ " + ieneRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "iene" && select2 === "yuan") {
      var ieneYuan = valorInserido / 16.88;
      resultado.innerHTML = valorInserido + " Iene é igual a ¥ " + ieneYuan.toFixed(3) + " Yuan chinês";
  }
    
    else if (select1 === "real" && select2 === "bitcoin") {
     var realBiticoin = valorInserido / 230819.24 ;
      resultado.innerHTML = valorInserido + " Real é igual a ₿ " + realBiticoin.toFixed(7) + " Bitcoins";
    } else if (select1 === "real" && select2 === "dolar") {
      var realDolar = valorInserido / 5.32;
      resultado.innerHTML = valorInserido + " Real é igual a US$ " + realDolar.toFixed(2) + " Dólar americano";
    } else if (select1 === "real" && select2 === "euro") {
      var realEuro = valorInserido / 6.24;
      resultado.innerHTML = valorInserido + " Euro é igual a € " + realEuro.toFixed(2) + " Euro";
  } else if (select1 === "real" && select2 === "iene") {
      var realIene = valorInserido * 20.54;
      resultado.innerHTML = valorInserido + " Real é igual a ¥ " + realIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "real" && select2 === "real") {
      var realReal = valorInserido;
      resultado.innerHTML = valorInserido + " Real é igual a R$ " + realReal.toFixed(2) + " Real brasileiro";
  }   else if (select1 === "real" && select2 === "rupia") {
      var realRupia = valorInserido * 13.83;
      resultado.innerHTML = valorInserido + " Real é igual a ₹ " + realRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "real" && select2 === "yuan") {
      var realYuan = valorInserido * 1.22;
      resultado.innerHTML = valorInserido + " Real é igual a ¥ " + realYuan.toFixed(2) + " Yuan chinês";
  }
    
    else if (select1 === "rupia" && select2 === "bitcoin") {
     var rupiaBiticoin = valorInserido / 3191978.89 ;
      resultado.innerHTML = valorInserido + " Rupia é igual a ₿ " + rupiaBiticoin.toFixed(8) + " Bitcoins";
    } else if (select1 === "rupia" && select2 === "dolar") {
      var rupiaDolar = valorInserido / 73.63;
      resultado.innerHTML = valorInserido + " Rupia é igual a US$ " + rupiaDolar.toFixed(3) + " Dólar americano";
    } else if (select1 === "rupia" && select2 === "euro") {
      var rupiaEuro = valorInserido / 86.36;
      resultado.innerHTML = valorInserido + " Rupia é igual a € " + rupiaEuro.toFixed(3) + " Euro";
  } else if (select1 === "rupia" && select2 === "iene") {
      var rupiaIene = valorInserido * 1.49;
      resultado.innerHTML = valorInserido + " Rupia é igual a ¥ " + rupiaIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "rupia" && select2 === "real") {
      var rupiaReal = valorInserido / 13.83;
      resultado.innerHTML = valorInserido + " Rupia é igual a R$ " + rupiaReal.toFixed(3) + " Real brasileiro";
  }   else if (select1 === "rupia" && select2 === "rupia") {
      var rupiaRupia = valorInserido ;
      resultado.innerHTML = valorInserido + " Rupia é igual a ₹ " + rupiaRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "rupia" && select2 === "yuan") {
      var rupiaYuan = valorInserido / 11.36;
      resultado.innerHTML = valorInserido + " Rupia é igual a ¥ " + rupiaYuan.toFixed(3) + " Yuan chinês";
  }
    
   
    else if (select1 === "yuan" && select2 === "bitcoin") {
     var yuanBiticoin = valorInserido / 279306.03 ;
      resultado.innerHTML = valorInserido + " Yuan é igual a ₿ " + yuanBiticoin.toFixed(6) + " Bitcoins";
    } else if (select1 === "yuan" && select2 === "dolar") {
      var yuanDolar = valorInserido / 6.48;
      resultado.innerHTML = valorInserido + " Yuan é igual a US$ " + yuanDolar.toFixed(3) + " Dólar americano";
    } else if (select1 === "yuan" && select2 === "euro") {
      var yuanEuro = valorInserido / 7.60;
      resultado.innerHTML = valorInserido + " Yuan é igual a € " + yuanEuro.toFixed(2) + " Euro";
  } else if (select1 === "yuan" && select2 === "iene") {
      var yuanIene = valorInserido * 16.88;
      resultado.innerHTML = valorInserido + " Yuan é igual a ¥ " + yuanIene.toFixed(2) + " Iene japonês";
  }  else if (select1 === "yuan" && select2 === "real") {
      var yuanReal = valorInserido / 1.22;
      resultado.innerHTML = valorInserido + " Yuan é igual a R$ " + yuanReal.toFixed(3) + " Real brasileiro";
  }   else if (select1 === "yuan" && select2 === "rupia") {
      var yuanRupia = valorInserido * 11.36 ;
      resultado.innerHTML = valorInserido + " Yuan é igual a ₹ " + yuanRupia.toFixed(2) + " Rupia indiana";
  }   else if (select1 === "yuan" && select2 === "yuan") {
      var yuanYuan = valorInserido;
      resultado.innerHTML = valorInserido + " Yuan é igual a ¥ " + yuanYuan.toFixed(3) + " Yuan chinês";
  }
    
    
    
    
  }
}