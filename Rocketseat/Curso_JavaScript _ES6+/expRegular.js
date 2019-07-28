// Expressão regular
var minha_expressao = /[0-9]/g;

// Variável do tipo string
var minha_string = 'ABCD 0123456789';

console.log( minha_string.replace( minha_expressao, '#' ) );
// Resultado: ABCD ##########

var url = 'runebrazuka@hotmail.com.br'


var esseExp = /^[a-z]*@[a-z]*.[a-z]*/

console.log(esseExp.exec(url))

