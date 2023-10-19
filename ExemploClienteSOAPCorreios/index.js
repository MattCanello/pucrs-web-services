const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function(err, client) {
    //console.log('Descrição SOAP Correios', client.describe().AtendeClienteService.AtendeClientePort);

    client.consultaCEP({ cep: '90630084' }, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(result);
    });
});