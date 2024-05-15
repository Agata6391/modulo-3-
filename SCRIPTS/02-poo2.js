class CuentaBancaria{
    constructor(saldoInicial){
        let saldo = saldoInicial;
        this.depositar = function (cantidad){
            saldo += cantidad;
        }
        this.retirar = function(cantidad){
            if (cantidad <= saldo ) {
                saldo -= cantidad 
            }else{
                return 'Fondos insuficientes limpio';
            }
        }
        this.verSaldo = function(){
            return saldo;
        }
    }
};
const cuenta = new CuentaBancaria(100)
cuenta.depositar (200000)  
cuenta.retirar(10)

document.getElementById('output2').innerHTML = `El saldo de su cuenta es: $ ${cuenta.verSaldo()}`;