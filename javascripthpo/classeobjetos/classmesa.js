class Mesa
{
  constructor(material, altura, largura, profundidade, pernas, cor)
  {
    //this significa variavel interna da classe
   this.material=material;
   this.altura=altura;
   this.largura=largura;
   this.profundidade=profundidade;
   this.pernas=pernas;
   this.cor=cor;

   }
   regularAltura(novaAltura)
    {
     this.altura=novaAltura;

    }
    verificarAltura()
    {
    
     console.log(`Nova altura ${this.altura}`);
    }
}
//defini duas mesas
const mesa1= new Mesa("madeira", 1.0, 1.7, 0.5, 4, "Mogano");
mesa1.regularAltura(1.3);
mesa1.verificarAltura();
const mesa2= new Mesa("aço", 2.0, 1.7, 1.5, 6, "Mogano");
mesa2.regularAltura(1.5);
mesa2.verificarAltura();