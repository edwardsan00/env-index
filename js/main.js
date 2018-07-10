(function(){
    // let btnDraw = $('#btnDraw');
    //
    // let word = $('.enova-title'),
    //     cadenaVieja = word.html(),
    //     palabras = cadenaVieja.split(""),
    //     cadena = [];
    // let withE = palabras.map((e, i, a) => {
    //   const templateLetra = `<span class="destacada">${e}</span>`
    //   const templateSin = `<span class="normal">${e}</span>`
    //   if(i == 0 || i == 42 || i == 61)
    //     cadena.push(templateLetra)
    //   // else if (e == '<' || e == '>')
    //   //   return false
    //   else
    //     cadena.push(templateSin)
    // });
    // let nuevaCadena = cadena.join("")
    // word.html(nuevaCadena)
    //
    // const animarLetras = function(){
    //   let animar = $('.destacada');
    //
    //   let arrayRandom = function(arr){
    //     let newArray = [];
    //     for(var i=0; i < 10; i++){
    //       newArray.push(arr.splice(Math.floor(Math.random() * arr.length),1)[0]);
    //     }
    //     return newArray;
    //   }
    //
    //   arrayRandom(animar).map((e, i) => {
    //     setTimeout(function(){
    //       e.classList.add('fadeIn')
    //       e.classList.remove('destacada')
    //       console.log(e)
    //     }, Math.random() * (2000 - 100) + 100);
    //   });
    //
    //   const letrasNormales = $('.normal');
    //   console.log(letrasDestacadas)
    //   setTimeout(function(){
    //     letrasNormales.animate({
    //       'opacity': 1,
    //       'color': 'rgba(255,255,255, .4)'
    //     }, 2000).animate({
    //       'color': 'rgba(255,255,255, .6)'
    //     }, 1);
    //   }, 2000)
    //
    // }
    // animarLetras();


      let destacada = $('.destacada');

        let arrayRandom = function(arr){
          let newArray = [];
          for(var i=0; i < 5; i++){
            newArray.push(arr.splice(Math.floor(Math.random() * arr.length),1)[0]);
          }
          let ordenados = [];
          let sinOrdenar = [];
          newArray.map(e => {
            if(e.textContent == 'u' || e.textContent == 'x'){
              ordenados.push(e)
            }else{
              sinOrdenar.push(e)
            }
          })
          return ordenados.concat(sinOrdenar)
        }
        console.log(arrayRandom(destacada))
        arrayRandom(destacada).map((e, i) => {
          setTimeout(function(){
            e.classList.add('fadeIn')
            e.classList.remove('destacada')
          }, Math.random() * (2000 - 100) + 100);
        });

        setTimeout(function(){
          const title = $('.enova-title');
          title.animate({
            'color': 'rgba(255,255,255, .6)'
          }, 3000);
        }, 2000)

        setTimeout(function(){
          const resaltadas = $('.fadeIn');
            resaltadas.each(function(){
              $(this).animate({
                'color': 'rgba(255,255,255, .6)'
              })
            })
        }, 3000)



})();
