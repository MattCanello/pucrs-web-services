const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function(err, client) {
    //console.log('Descrever o WSDL', client.describe().Calculator.CalculatorSoap);

    client.Add({intA: 1, intB: 2}, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('A soma é:', result.AddResult);
    });

    client.Divide({intA: 20, intB: 2}, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('A divisão é:', result.DivideResult);
    });

    client.Subtract({intA: 20, intB: 2}, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('A subtração é:', result.SubtractResult);
    });

    client.Multiply({intA: 20, intB: 2}, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log('A múltiplicação é:', result.MultiplyResult);
    });
});