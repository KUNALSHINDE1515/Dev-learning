function outerfunction(ovterVariable) {
    return function innerfunction(innerVariable) {
        console.log('outer Variale', ovterVariable);
        console.log('inner Variale', innerVariable);
    }
}

const newFunction = outerfunction(10);
newFunction(20)