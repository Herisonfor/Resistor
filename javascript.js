var tela = document.getElementById('tela');
var toleranciaTela = document.getElementById('tolerancia')
var valorPrimeiraFaixa = '1';
var valorSegundaFaixa = '0';
var valorTerceiraFaixa = '0';
var multiplicadorValor = 1;

function faixa1(e){
    valorPrimeiraFaixa = e;
    calcular()
}

function faixa2(x){
    valorSegundaFaixa = x;
    calcular()
}

function faixa3(z){
    valorTerceiraFaixa = z;
    calcular()
}

function multiplicador(e){
    multiplicadorValor = e;
    calcular()
}

function tolerancia(e){
    toleranciaTela.innerText = e;
}
function calcular(){
    let resultado = valorPrimeiraFaixa + valorSegundaFaixa + valorTerceiraFaixa;
    parseInt(resultado, 10)
    let final = resultado*multiplicadorValor
    tela.innerText = final  ;

}
