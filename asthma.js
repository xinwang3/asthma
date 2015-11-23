console.log('asthma.js loaded')


if(window.divAsthma){
    $('<h1 style="color:white;background-color:black;line-height:60px" id="asthmaLogHead">&nbsp;Your Asthma Log Book <a href="https://github.com/sbu-bmi/asthma/" target=_blank><i class="fa fa-github-alt"></i></a></h1>').appendTo(divAsthma)
    $("<h3>How's Asthma treating you today?</h3>").appendTo(divAsthma)
    $('<table><tr><td style="vertical-align:top"><form><p><i class="fa fa-heart fa-5x" style="color:green" id="asthmaheart"></i></p><p><i class="fa fa-heart-o fa-5x" style="color:orange" id="asthmahearto"></i></p><p><i class="fa fa-heartbeat fa-5x" style="color:red" id="asthmaheartb"></i></p></form></td><td id="asthmaFeel" style="vertical-align:top"></td></tr></table>').appendTo(divAsthma)
    asthmaheart.onclick=function(){
        $(asthmaheart).removeClass("fa-3x").addClass("fa-5x")
        $(asthmahearto).removeClass("fa-5x").addClass("fa-4x")
        $(asthmaheartb).removeClass("fa-5x").addClass("fa-4x")
        asthmaFeel.innerHTML='<span style="color:green;font-size:x-large">Glad to hear that!<br>Can we add the good news to your <button>Log book</button>? <p>Based on your <a href="#">past entries</a>, we have compiled some information about Asthma to help you understand it better and keep it under control...</p></span>'
        4
    }
    asthmahearto.onclick=function(){
        $(asthmaheart).removeClass("fa-5x").addClass("fa-4x")
        $(asthmahearto).removeClass("fa-4x").addClass("fa-5x")
        $(asthmaheartb).removeClass("fa-5x").addClass("fa-4x")
        asthmaFeel.innerHTML='<span style="color:orange;font-size:x-large">Sorry to hear that!<br>Can we add that to your <button>Log book</button>? Based on your <a href="#">past entries</a>, we have compiled some information that may help.</span>'
        4
    }
    asthmaheartb.onclick=function(){
        $(asthmaheart).removeClass("fa-5x").addClass("fa-4x")
        $(asthmahearto).removeClass("fa-5x").addClass("fa-4x")
        $(asthmaheartb).removeClass("fa-4x").addClass("fa-5x")
        asthmaFeel.innerHTML='<span style="color:red;font-size:x-large">Ooops!<br>Can we add that to your <button>Log book</button>? You may need help to manage this asthma crisis. I see that you previously saved the <a href="#">contact information for your Pediatrician</a>. Asthma crisis should be taken seriously as this <a href="#">CDC video explains</a>. You may also want to ...</span>'
        4
    }
    $("<hr>Your Log<hr>Reference Information(More information coming soon)<hr>").appendTo(divAsthma)
}
