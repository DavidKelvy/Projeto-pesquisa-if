function FuncMesa (material, altura, largura, profundidade)
{
   this.material=material;
   this.altura=altura;
   this.largura=largura;
   this.profundidade=profundidade;
   
}
FuncMesa.prototype.perna=1;
const mesa1= new FuncMesa("madeira", 1.0, 1.7, 0.5);
const mesa2= new FuncMesa("emitusa", 1.0, 1.7, 0.5);

mesa2.perna=4;
console.log(mesa1.perna)
console.log(mesa2.perna)
FuncMesa.prototype.info=function()
{
   console.log(this.material, this.perna)
}
mesa1.info();
mesa2.info();


