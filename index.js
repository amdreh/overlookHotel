
document.addEventListener('DOMContentLoaded', function() {
    var selected = document.getElementById('powers');
    selected.addEventListener('change', function() {
        if (selected.value === 'Sim') {
            document.body.style.backgroundColor= 'black';
            evilSubtitle();
            evilText();
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