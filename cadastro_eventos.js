let nomeDealuno= ["Cleusan", "Victor", "Diego", "Zore"]
let Datas= ["13", "15", "16", "18"]
let Idades=["18", "19", "20", "17"]
const data= 14;
        

    for ( let indice=0; indice < nomeDealuno.length; indice++){
        if (Datas.length < 100){
            console.log("Permitido a tentativa de cadastro");
        }
        else{
            console.log("Tentativa de cadastro não permitida");
        }
            if (Idades[indice] < 18 ){
                console.log("Evento não permitido por conta da idade")
                indice++;
            }
                if (indice == nomeDealuno.length){
                    break;
                }
                if (Datas[indice] > data)
                    console.log(nomeDealuno[indice], Datas[indice], "Evento Permitido")
                else{
                    console.log(nomeDealuno[indice], Datas[indice], "Evento não permitido")          
                    }
                     
                
                
    }    
       
    




 