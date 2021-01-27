function cantidadDeAlumnos(){
    for(var i=1; i<=5; i++) {
        
        function primerTrimestre(){
            var suma = 0;
            for (var i=1; i <=3; i++){
                var nota = parseInt(prompt(" Primer Trimestre Ingresa la nota " + i));
                
                while (nota<=0 || nota>10 ){
                alert("Numero inválido, colocalo de nuevo");
                nota = parseInt(prompt(" Primer Trimestre Ingresa la nota " + i));
                }
                suma = suma + nota;
            }
            return suma;
        }
    
        var promedioPimerTrimestre = primerTrimestre()/3;
        console.log ("Este es el promedio del primer trimestre " + promedioPimerTrimestre)
    
        function segundoTrimestre(){
            var suma = 0;
            for (var i=1; i <=3; i++){
                var nota = parseInt(prompt("Segundo Trimestre Ingresa la nota " + i));
                
                while (nota<=0 || nota>10 ){
                alert("Numero inválido, colocalo de nuevo");
                nota = parseInt(prompt("Segundo Trimestre Ingresa la nota " + i));
                }
                suma = suma + nota;
            }
            return suma;
        }
        var promedioSegundoTrimestre = segundoTrimestre()/3;
        console.log ("Este es el promedio del segundo trimestre " + promedioSegundoTrimestre)
    
        function tercerTrimestre(){
            var suma = 0;
            for (var i=1; i <=3; i++){
                var nota = parseInt(prompt("Tercer Trimestre Ingresa la nota " + i));
                
                while (nota<=0 || nota>10 ){
                alert("Numero inválido, colocalo de nuevo");
                nota = parseInt(prompt("Tercer Trimestre Ingresa la nota " + i));
                }
                suma = suma + nota;
            }
            return suma;
        }
    
        var promedioTercerTrimestre = tercerTrimestre()/3;
        console.log ("Este es el promedio del tercer trimestre " + promedioTercerTrimestre)
    
        var sumaAnual = promedioPimerTrimestre + promedioSegundoTrimestre + promedioTercerTrimestre;
        var resultadoAnual= sumaAnual / 3;
    
        console.log( "Alumno número " +i + " este es su promedio anual "  + resultadoAnual);
    
        if(resultadoAnual>=7 && resultadoAnual<=10){
            alert("Felicidades, pasaste de año");
        }else{
            alert("No pasaste de año, nos vemos en el recuperatorio");
        }
    }

}
cantidadDeAlumnos();
