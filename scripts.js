class parquimetro{
    constructor(tempo, dinheiro, troco){
        this.tempo = tempo;
        this.dinheiro = dinheiro;
        this.troco = dinheiro - tempo;
   
    }

    conta(){
        if(this.dinheiro == this.tempo){
        document.getElementById("resultado").innerHTML = "Pagamento realizado!";
    }

    else if(this.dinheiro > this.tempo){
        document.getElementById("resultado").innerHTML = "pagamento realizado " + this.troco.toFixed(2) + " de troco";
    }

    else if(this.dinheiro < this.tempo){
        document.getElementById("resultado").innerHTML = "Pagamento insuficiente!";
    }
  }

}
function pagar() {
    let dinheiro = Number(document.getElementById("dinheiro").value);
    let tempo = Number(document.getElementById("tempo").value);

    let estacionamento = new parquimetro (tempo, dinheiro);
    estacionamento.conta();
}
