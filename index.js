
document.addEventListener('DOMContentLoaded', function() {
    var selected = document.getElementById('powers');
    selected.addEventListener('change', function() {
        if (selected.value === 'Sim') {
            document.body.style.backgroundColor= 'black';
        } else {location.reload();}
    });
});
