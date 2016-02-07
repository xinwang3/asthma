console.log('asthma.js loaded');


if(window.divAsthma){
    $('<h1 style="color:white;background-color:black;line-height:60px" id="asthmaLogHead">&nbsp;Your Asthma Log Book <a href="https://github.com/sbu-bmi/asthma/" target=_blank><i class="fa fa-github-alt"></i></a></h1>').appendTo(divAsthma);
    $("<h3>How's Asthma treating you today?</h3>").appendTo(divAsthma);
    $('<table><tr><td style="vertical-align:top"><form><p><i class="fa fa-smile-o fa-5x" style="color:green" id="asthmaSmile"></i></p><p><i class="fa fa-meh-o fa-5x" style="color:orange" id="asthmaMeh"></i></p><p><i class="fa fa-frown-o fa-5x" style="color:red" id="asthmaFrown"></i></p></form></td><td id="asthmaFeel" style="vertical-align:top"></td></tr></table>').appendTo(divAsthma);
    asthmaSmile.onclick=function(){
        $(asthmaSmile).removeClass("fa-3x").addClass("fa-5x");
        $(asthmaMeh).removeClass("fa-5x").addClass("fa-4x");
        $(asthmaFrown).removeClass("fa-5x").addClass("fa-4x");
        asthmaFeel.innerHTML='<span style="color:green;font-size:x-large">Glad to hear that! My peak flow is more than 440<br>Can we add the good news to your <button>Log book</button>? <p>Based on your <a href="#">past entries</a>, we have compiled some information about Asthma to help you understand it better and keep it under control...</p></span>';
    };
    asthmaMeh.onclick=function(){
        $(asthmaSmile).removeClass("fa-5x").addClass("fa-4x");
        $(asthmaMeh).removeClass("fa-4x").addClass("fa-5x");
        $(asthmaFrown).removeClass("fa-5x").addClass("fa-4x");
        asthmaFeel.innerHTML='<span style="color:orange;font-size:x-large">Sorry to hear that! My peak flow is between 275 to 440<br>Can we add that to your <button>Log book</button>? Based on your <a href="#">past entries</a>, we have compiled some information that may help.</span>';

    };
    asthmaFrown.onclick=function(){
        $(asthmaSmile).removeClass("fa-5x").addClass("fa-4x");
        $(asthmaMeh).removeClass("fa-5x").addClass("fa-4x");
        $(asthmaFrown).removeClass("fa-4x").addClass("fa-5x");
        asthmaFeel.innerHTML='<span style="color:red;font-size:x-large">Ooops! My peak flow is less than 275<br>Can we add that to your <button>Log book</button>? You may need help to manage this asthma crisis. I see that you previously saved the <a href="#">contact information for your Pediatrician</a>. Asthma crisis should be taken seriously as this <a href="#">CDC video explains</a>. You may also want to ...</span>';

    };

$(function() {
    $("#uploadFile").on("change", function()
    {
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                $("#imagePreview").css("background-image", "url("+this.result+")");
            };
        }
    });
});

    $("<hr>Upload Youe Asthma Action Plan<hr>").appendTo(divAsthma);
    $("<div id='imagePreview'></div>").appendTo(divAsthma);
    $("<input id='uploadFile' type='file' name='image' class='img' />").appendTo(divAsthma);
    $("<hr>SubmitYour Asthma Action Plan <button>Submit</button>").appendTo(divAsthma);
    $("<hr>Reference Information<hr>").appendTo(divAsthma);
}
