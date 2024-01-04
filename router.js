    /*todo array link*/
    const link=document.querySelectorAll('#linkArticolo')
    console.log('Link',link)

    /*TODO array articoli*/
    const articoli=document.querySelectorAll('article')
    console.log('Articoli',articoli)

    /*TODO RESET*/
    function reset() { 
        for (let i=0;i<articoli.length;i++) {
            articoli[i].style.display='none'
        }        
    }reset(); articoli[0].style.display='block';

    /*TODO NASCONDI*/
    function nascondi(articolo) { 
        if(articolo.style.display=='block'){ 
            articolo.style.display='none'; 
            console.log(articolo,'Se si vede, nascondi')
        }else{
            articolo.style.display='block';
            console.log(articolo,'Se è nascosto, mostra')
        }        
    }
    /*fixme Swich*/
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click',()=>{//quando si clicca su un link
            reset()//nascondi tutti gli articoli
            console.log(link[i])//mostra in console il pulsante premuto
            articoli[i].style.display='block'//mostra l'articolo legato al link
        })
        
    }