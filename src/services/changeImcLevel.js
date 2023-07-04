export default function changeImcLevel(resultImc, setImcLevel){
    if (resultImc > 17 && resultImc <= 18.49) {
        setImcLevel("Abaixo do peso");
    } else if (resultImc >= 18.5 && resultImc <= 24.99) {
        setImcLevel("Peso normal");
    } else if (resultImc >= 25 && resultImc <= 29.99) {
        setImcLevel("Acima do peso"); 
    } else if (resultImc >= 30 && resultImc <= 34.99) {
        setImcLevel("Obesidade grau 1");
    } else if (resultImc >= 35 && resultImc <= 40) {
        setImcLevel("Obesidade grau 2");
    } else if (resultImc > 40) {
        setImcLevel("Obesidade grau 3");
    } else {
        setImcLevel("Muito abaixo do peso");
    }
}