
document.addEventListener('DOMContentLoaded', function() {
    var selected = document.getElementById('powers');
    selected.addEventListener('change', function() {
        if (selected.value === 'Sim') {
            document.body.style.backgroundColor= 'black';
            evilSubtitle();
            evilText();
            evilPics();
            evilFootText();
        } else {location.reload();}
    });
});

function evilSubtitle () {
    const subtitle = document.getElementById('subtitle');
    subtitle.innerText = "SUA FAMÍLIA JAMAIS RETORNARÁ";    
}

function evilText() {
    const firstP = document.getElementById('firstP');
    const secondP = document.getElementById('secondP');

    firstP.innerText = "ll boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy ";
    secondP.innerText = "and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy all work and no play makes Jack a dull boy ";
}

function evilPics() {
    document.getElementById('dannyTorrance').src = './images/evilDannyTorrance.jpeg';
    document.getElementById('jackTorrance').src = './images/evilJackTorrance.jpeg';
    document.getElementById('andreGarcia').src = './images/evilAndreGarcia.png';
    document.getElementById('stephenKing').src = './images/evilStephenKing.jpeg';
    document.getElementById('overlookHotel').src = './images/goodOverlookHotel.png';
}

function evilFootText() {
    const footText = document.getElementById('footText');
    footText.innerText = "redrumREDRUMredrum";
}
