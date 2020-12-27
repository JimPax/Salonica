function modalClose() {
    if (location.hash == '#popup1' || '#popup2' || '#popup3') {
        location.hash = '#section-locations';
    }
}

document.addEventListener('keyup', function(e) {
    if (e.key == 27) {
       modalClose();
    } else if (e.keyIdentifier == 27) {
        modalClose();
    } else if (e.keyCode == 27) {
        modalClose();
    }
});

window.onload = function() {
    document.querySelector('#n1').addEventListener("click", function(e) {
        document.querySelector(".navigation__checkbox").checked = false
    });
    document.querySelector('#n2').addEventListener("click", function(e) {
        document.querySelector(".navigation__checkbox").checked = false
    });
    document.querySelector('#n3').addEventListener("click", function(e) {
        document.querySelector(".navigation__checkbox").checked = false
    });
    document.querySelector('#n4').addEventListener("click", function(e) {
        document.querySelector(".navigation__checkbox").checked = false
    });
}