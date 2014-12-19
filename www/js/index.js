document.addEventListener('deviceready', function() {

    var bipbipSound = new Media
    (
        cordova.file.applicationDirectory + '/www/audio/bipbip.wav',
        mediaSuccess,
        mediaError,
        mediaStatus
    );

    function mediaSuccess()
    {

    }

    function mediaError(error)
    {
        alert(error);
    }

    function mediaStatus()
    {

    }

    document.querySelectorAll('button').addEventListener('click',function()
    {
        bipbipSound.play();
    });


});