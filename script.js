document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var correctUsername = 'm3vu';
    var correctPassword = 'marcury';

    if (username === correctUsername && password === correctPassword) {
        var mainContainer = document.getElementById('main-container');
        mainContainer.style.display = 'flex';
        mainContainer.style.flexDirection = 'column';
        mainContainer.style.justifyContent = 'center';
        mainContainer.style.alignItems = 'center';
        mainContainer.style.height = '100vh';
        mainContainer.innerHTML = '';
        document.body.classList.add('after-login');

        var mp3List = [
            'song1.mp3',
            'song2.mp3',
            'song3.mp3',
            'song4.mp3',
            'song5.mp3',
            'song6.mp3',
        ];

        mp3List.forEach(function(mp3Path) {
            var audioWrapper = document.createElement('div');
            audioWrapper.className = 'audio-wrapper';
            var audio = document.createElement('audio');
            var source = document.createElement('source');

            source.src = mp3Path;
            source.type = 'audio/mpeg';
            audio.controls = true;

            audio.appendChild(source);
            audioWrapper.appendChild(audio);
            mainContainer.appendChild(audioWrapper);
        });

    } else {
        window.location.reload();
    }
});
