/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "//formspree.io/bobandjeanclouse@gmail.com",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                dataType: "json",
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                    ga('send','event','button', 'message_sent');
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });



    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Oh Virginia (video)",
            artist:"Bob Clouse",
            m4v:"media/oh_virginia/oh_virginia_video.m4v",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title:"Your Face",
            artist:"The Stark Palace",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title:"Hidden",
            artist:"Miaow",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        },
        {
            title:"Big Buck Bunny Trailer",
            artist:"Blender Foundation",
            m4v:"http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
            ogv:"http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
            webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
            poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
        },
        {
            title:"Finding Nemo Teaser",
            artist:"Pixar",
            m4v: "http://www.jplayer.org/video/m4v/Finding_Nemo_Teaser.m4v",
            ogv: "http://www.jplayer.org/video/ogv/Finding_Nemo_Teaser.ogv",
            webmv: "http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm",
            poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
        },
        {
            title:"Cyber Sonnet",
            artist:"The Stark Palace",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg",
            poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
        },
        {
            title:"Incredibles Teaser",
            artist:"Pixar",
            m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
            ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
            webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
            poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
        },
        {
            title:"Tempered Song",
            artist:"Miaow",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        },
        {
            title:"Lentement",
            artist:"Miaow",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
        }
    ], {
        swfPath: "../dist/jplayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true
    });


});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
