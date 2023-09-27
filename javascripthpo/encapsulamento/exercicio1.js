class ContaBancaria {
    constructor(titular) {
        this._saldo = 0;
        this._titular = titular;
    }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`Depositado R$${valor.toFixed(2)} na conta de ${this._titular}. Saldo atual: R$${this._saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Sacado R$${valor.toFixed(2)} da conta de ${this._titular}. Saldo atual: R$${this._saldo.toFixed(2)}`);
        } else {
            console.log(`Saldo insuficiente na conta de ${this._titular}.`);
        }
    }

    transferir(destino, valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            destino.depositar(valor);
            console.log(`Transferido R$${valor.toFixed(2)} da conta de ${this._titular} para a conta de ${destino.titular}. Saldo atual: R$${this._saldo.toFixed(2)}`);
        } else {
            console.log(`Saldo insuficiente na conta de ${this._titular}.`);
        }
    }
}

const minhaConta = new ContaBancaria("Seu Nome");
minhaConta.depositar(100);
minhaConta.sacar(50);

const outraConta = new ContaBancaria("Outro Nome");
minhaConta.transferir(outraConta, 25);
