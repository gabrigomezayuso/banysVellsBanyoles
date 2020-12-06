$(document).scroll(function() {
    $(".navbar").toggleClass(
        "scrolled",
        $(this).scrollTop() > $(".navbar").height()
    );
});

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


// $(document).ready(function() {
//     $("#cookies").addClass("display");
//     $("#close-cookies").click(function() {
//         event.preventDefault();
//         $("#cookies").addClass("close-cookies");
//     });
// });

window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#00a4ff"
            },
            "button": {
                "background": "#fff",
                "text": "#00a4ff "
            }
        },
        "type": "opt-out",
        "content": {
            "message": "Website cookies alert by Cookie Consent",
            "href": "https://cookieconsent.insites.com"
        }
    })
});