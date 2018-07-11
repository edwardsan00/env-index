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
        arrayRandom(destacada).map((e, i) => {
          setTimeout(function(){
            e.classList.add('fadeInText')
            e.classList.remove('destacada')
          }, Math.random() * (2000 - 100) + 100);
        });

        setTimeout(function(){
          const title = $('.enova-title');
          title.animate({
            'color': 'rgba(255,255,255, .6)'
          }, 2500);
        }, 2000)

        setTimeout(function(){
          const resaltadas = $('.fadeInText');
            resaltadas.each(function(){
              $(this).animate({
                'color': 'rgba(255,255,255, .6)'
              })
            })
        }, 3000)

        var width,
            height,
            offsetW,
            offsetH;

        const mask =  $('.mask'),
              content = $('.container'),
              img =   $('.enova-img'),
              slogan = $('.enova-slogan'),
              btn = $('.enova-btn'),
              separador = $('.enova-separador'),
              titulo = $('.enova-title');

        let obtenerMedidas = function(width, height){
          if(width >= 320){
            offsetW = 30;
            offsetH = 30
          }
          if(width >= 400){
            offsetW = 50;
            offsetH = 50;
          }
          if(width >= 1024){
            offsetW = 75;
            offsetH = 75;
          }
          if(width >= 1600){
            offsetW = 100;
            offsetH = 100;
          }
        }

        width = $(window).width()
        height = $(window).height()
        obtenerMedidas(width, height)

      $(window).resize(function() {
        width = $(this).width()
        height = $(this).height()
        obtenerMedidas(width, height)
      })

        const wMask = mask.width() - offsetW,
              hMask = mask.height() - offsetH;
        setTimeout(()=>{
          mask.animate({
            width: `${wMask}px`,
            height: `${hMask}px`,
          }, 1500 );
        }, 4000);


        setTimeout(() => {
          img.addClass('fadeIn')
          slogan.addClass('fadeIn')
          btn.addClass('fadeIn')
          separador.addClass('fadeIn')
        }, 4000);

        let widthBtn = $('.wrapper-bottom').width();
        btn.on('click', function(){
          btn.css({
            'transform': `translate(${widthBtn}px)`,
            'transition': 'transform ease 1s'
          })
          setTimeout(()=>{
            mask.animate({
              width: `100vw`,
              height: `100vh`,
            }, 1500 );
          }, 0)
          setTimeout(()=>{
            img.removeClass('fadeIn').addClass('fadeOut')
            slogan.removeClass('fadeIn').addClass('fadeOut')
            btn.removeClass('fadeIn').addClass('fadeOut')
            separador.removeClass('fadeIn').addClass('fadeOut')
            titulo.removeClass('fadeInText').addClass('fadeOut')
          }, 1000)
        })

        // const c = document.getElementById('myCanvas');
        // let ctx = c.getContext("2d");
        // w = c.width;
        // h = c.height;
        // console.log(w, h);
        // ctx.strokeStyle="#222";
        // let lw = 3;
        // ctx.lineWidth = lw;
        // // for(let i = 0; i < 50; i+=10){
        // //     ctx.beginPath();
        // //     ctx. moveTo(0 - lw, i * 2)
        // //     ctx.bezierCurveTo(0, i, 1 * i, 10, i, 0 - lw);
        // //     ctx.stroke();
        // // }
})();
