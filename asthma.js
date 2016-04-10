console.log('asthma.js loaded');

sbmApps.linkStore();

if(location.href.match('sbm-it.github.io/apps')){appSpace.innerHTML='<div id="divAsthma"></div>'}

$.getScript('https://sbu-bmi.github.io/asthma/Hello.js',function(){

if(window.divAsthma){
    $('<button onclick="hello(\'google\').login()" style="color:black;background-color:yellow;line-height:20px">Log in My Asthma Action Plan</button>').appendTo(divAsthma);
    $('<h1 style="color:grey;background-color:pink;line-height:60px" id="asthmaLogHead">&nbsp;My Asthma My Plan<a href="https://github.com/sbu-bmi/asthma/" target=_blank><i class="fa fa-github-alt"></i></a></h1>').appendTo(divAsthma);
    $("<h3>Welcome to MyAsthma MyPlan.  You have access to the plans of the children listed below.  Please click on the button to view the plan.<h3>").appendTo(divAsthma);
    $("<h4>Harry Potter<h4>").appendTo(divAsthma);
    $("<h4>Sponge Bob<h4>").appendTo(divAsthma);
    $("<h4>Clark Kent <h4>").appendTo(divAsthma);
    $("<div id='imagePreview'></div>").appendTo(divAsthma);
    $("<input id='uploadFile' type='file' name='image' class='img' />").appendTo(divAsthma);
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

                    x = imagePreview.style.backgroundImage;
                    localStorage.setItem('myDataURL',x);
                    img = document.createElement('img');
                    document.body.appendChild(img);
                    img.src=localStorage.getItem('myDataURL').slice(5,-2);
                };
            }
        });
    });


    $("<span><hr>Reference Information<hr></span>").appendTo(divAsthma);
    hello.on('auth.login', function(auth) {

    // Call user information, for the given network
    hello(auth.network).api('/me').then(function(r) {
      // Inject it into the container
      var label = document.getElementById('profile_' + auth.network);
      if (!label) {
        label = document.createElement('div');
        label.id = 'profile_' + auth.network;
        document.getElementById('profile').appendChild(label);
      }
      label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
    });
    });

        hello.init({
        google: '305166684229-se0kd4a5ldgc2g1kbdf46giufacun7ld.apps.googleusercontent.com'
        },

        {redirect_uri: 'http://sbu-bmi.github.io/asthma'});

}
}
);
