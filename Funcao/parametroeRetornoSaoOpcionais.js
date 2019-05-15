function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log('Valor acima do permitido = ' + area);
        return area;
    } else {
        return area;
    }
}

console.log(area(5,5));
console.log(area())