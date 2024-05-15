class CuentaBancaria{
    constructor(saldoInicial){
        this.saldo = saldoInicial;
        this.depositar = function (cantidad){
            saldo += cantidad;
        }
        this.retirar = function(cantidad){
            if (cantidad <= saldo ) {
                saldo -=Saldo 
            }else{
                return 'Fondos insuficientes limpio';
            }
        }
        this.verSaldo = function(){
            return this.saldo;
        }
    }
};
const cuenta = new CuentaBancaria(100)
cuenta.depositar (200000)  
cuenta.retirar(100)

document.getElementById('output2').innerHTML = `El saldo de su cuenta es: $ ${cuenta.verSaldo()}`;