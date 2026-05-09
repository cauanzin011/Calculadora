let calculo = "";
let localConta =
 document.getElementById("localConta");
const principal =
 document.getElementById("principal");
function clicar(valor){
 let ultimo = calculo[calculo.length - 1];
 if(ultimo === "+" && valor === "+"){
  return;
 }
 else if(ultimo === "-" && valor === "-"){
  return;
 }
 else if(ultimo === "*" && valor === "×"){
  return;
 }
 else if(ultimo === "/" && valor === "÷"){
  return;
 }
  else if(ultimo === "." && valor === ","){
  return;
 }
 else if(ultimo === "*" && valor === "P"){
  return;
 }
 if (valor === "×"){
  calculo += "*"
  localConta.innerText += "×"
}else if (valor === "÷"){
  calculo += "/"
 localConta.innerText += "÷"
}
    else if (valor === "P"){
        calculo += "**"
        localConta.innerText += "°"
    }
    else if (valor === ","){
        calculo += "."
        localConta.innerText +=","
    }
 else{
  calculo += valor;
  localConta.innerText += valor
}
}
function calcular(){
 calculo = String(eval(calculo));
 localConta.textContent = calculo;
}
function limpar(){
 calculo = "";
 localConta.textContent = "";
}
function porcentagem(){
    calculo = eval(calculo) / 100;
    localConta.textContent = calculo;
}
function apagar(){
    calculo = calculo.slice(0, -1);
    localConta.textContent = 
    localConta.textContent.slice(0, -1);
}
