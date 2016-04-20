console.log('loaded myAsthma.js :-)');

(function(){
    document.body.style.backgroundColor="silver"
    var h ='</div>'
    h += '<h3 style="color:maroon">Welcome to your action plan</h3>'
    h += '<div style="color:blue" id="msg"> Start by loading an Action Plan:</div>'
    h += '<input type="file" id="inputFile">'
    h += '<hr><img id="myAsthmaPic">'
    h += '</div>'
    //sbmApps.render(h)
    document.body.innerHTML=h
    var reader = new FileReader()
    reader.onload=function(f){
        localStorage.setItem('myAsthmaPic',f.target.result)
        console.log('pic size '+f.total+' saved in localStorage')
        loadImg()
        4
    }
    var loadImg=function(){
        var imgSrc = localStorage.myAsthmaPic
        if(imgSrc){
            myAsthmaPic.src=localStorage.myAsthmaPic
            msg.textContent='you can load a new action plan if you want'
        }
    }
    inputFile.onchange=function(evt){
        var ff = evt.target.files
        reader.readAsDataURL(ff[0])
    }
    loadImg()

    4


})()

