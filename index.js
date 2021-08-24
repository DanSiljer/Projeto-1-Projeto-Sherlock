//Projeto 01 – Projeto Detetive
//Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. 


let sim = 0;
let question = 0;
let nome = "";
let questionario = "";
let veredito = "INCOCENTE";



do{ 
    
    
nome = prompt("Informe o nome do(a) meliante:\n");
alert(nome + " responda apenas com SIM ou NAO!");
   
  
  let resposta = prompt("Telefonou para a vítima?").toUpperCase();
   if (resposta === 'SIM' || resposta === 'S'){
      sim += 1;
  }
  
  resposta = prompt("Esteve no local do crime?").toUpperCase();
   if (resposta === 'SIM'|| resposta === 'S'){
      sim += 1;
  }
  
  
  resposta = prompt("Mora perto da vítima?").toUpperCase();
   if (resposta === 'SIM'||resposta === 'S'){
      sim += 1;
  }
  
  resposta = prompt("Devia para a vítima?").toUpperCase();
   if (resposta === 'SIM'||resposta === 'S'){
      sim += 1;
  }
  
  resposta = prompt("Já trabalhou com a vítima?").toUpperCase();
   if (resposta === 'SIM'||resposta === 'S'){
      sim += 1;
 }


if (sim === 2){
  veredito = "Suspeito";
  console.log(nome + " Você é SUSPEITO(A), precisa de um Advogado!")
  
}else if (sim > 2 && sim <= 4){
  veredito = "CULPLICE";
  
  console.log(nome + " Você é CULPLICE! Tem o direito de ficar calado(a).\nTudo o que disser pode e será usado contra você no tribunal")
 
}else if (sim === 5){
  veredito = "CULPADO";
  console.log(nome + " Você é CULPADO(A)! Você tem o direito de ficar calado(a). \n Tudo o que disser pode e será usado contra você no tribunal!")
  
}else {
  alert(nome + " Você é INCOCENTE")
}

console.log();
  
questionario = prompt("Deseja continuar o questionário? (Resp. S / N):").toUpperCase();
  

}while (questionario === "S");


alert("Programa encerrado porque você escolheu " + questionario + " e você foi declarado " + veredito);


