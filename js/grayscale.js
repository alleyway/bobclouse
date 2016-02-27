/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50 && $(window).width() > 768) {
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

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
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
        jPlayer: "#jquery_jplayer_2",
        cssSelectorAncestor: "#jp_container_2"
    }, [
        {
            title:"1. Celebrate Virginia (clip)",
            mp3:"media/life_and_times/track01.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"2. Maybe Baby (clip)",
            mp3:"media/life_and_times/track02.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"3. Puttin' Me On (clip)",
            mp3:"media/life_and_times/track03.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"4. Goodbye to Love (clip)",
            mp3:"media/life_and_times/track04.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"5. Jeannie Lee (clip)",
            mp3:"media/life_and_times/track05.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"6. Runaway Heart (clip)",
            mp3:"media/life_and_times/track06.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"7. Falling in Love (clip)",
            mp3:"media/life_and_times/track07.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"8. Never Again (clip)",
            mp3:"media/life_and_times/track08.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"9. Pardon Me (clip)",
            mp3:"media/life_and_times/track09.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"10. Field Sobriety Hop (clip)",
            mp3:"media/life_and_times/track10.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"11. Mail Box Blues (clip)",
            mp3:"media/life_and_times/track11.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"12. Molly Bolyn (clip)",
            mp3:"media/life_and_times/track12.mp3",
            poster:"media/life_and_times/cover.jpg"
        },
        {
            title:"13. Oh, Virginia (clip)",
            mp3:"media/life_and_times/track13.mp3",
            poster:"media/life_and_times/cover.jpg"
        }

    ], {
        swfPath: "bower_components/jplayer/dist/jplayer",
        supplied: "mp3, m4v",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true,
        size: {
            width: "100%"
        }
    });

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_3",
        cssSelectorAncestor: "#jp_container_3"
    }, [
        {
            title:"1. For Me and My Gal (clip)",
            mp3:"media/new_look_at_old_favs/track01.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        }
        ,{
            title:"2. Whispering (clip)",
            mp3:"media/new_look_at_old_favs/track02.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"3. Ballin' The Jack (clip)",
            mp3:"media/new_look_at_old_favs/track03.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"4. Toot, Toot Tootsie Goodbye (clip)",
            mp3:"media/new_look_at_old_favs/track04.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"5. Peg Of My Heart (clip)",
            mp3:"media/new_look_at_old_favs/track05.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"6. I want a Girl, Just Like The Girl (clip)",
            mp3:"media/new_look_at_old_favs/track06.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"7. Look For The Silver Lining (clip)",
            mp3:"media/new_look_at_old_favs/track07.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"8. Way Down Yonder In New Orleans (clip)",
            mp3:"media/new_look_at_old_favs/track08.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"9. You're A Grand Old Flag (clip)",
            mp3:"media/new_look_at_old_favs/track09.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        },
        {
            title:"10. April Showers (clip)",
            mp3:"media/new_look_at_old_favs/track10.mp3",
            poster:"media/new_look_at_old_favs/cover.jpg"
        }

    ], {
        swfPath: "bower_components/jplayer/dist/jplayer",
        supplied: "mp3, m4v",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true,
        size: {
            width: "100%"
        }
    });

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_4",
        cssSelectorAncestor: "#jp_container_4"
    }, [
        {
            title:"How High the Moon",
            mp3:"media/performances/01.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Hello Dolly",
            mp3:"media/performances/02.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"As Time Goes By (instrumental) ",
            mp3:"media/performances/03.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"I Don't Know Why",
            mp3:"media/performances/04.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Tenderly (instrumental)",
            mp3:"media/performances/05.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Good Luck Charm",
            mp3:"media/performances/06.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Your Cheatin' Heart",
            mp3:"media/performances/07.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Autumn In New York (instrumental)",
            mp3:"media/performances/08.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Hey Good Lookin'",
            mp3:"media/performances/09.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"The Nearness Of You",
            mp3:"media/performances/10.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Bali Hai (instrumental)",
            mp3:"media/performances/11.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"Folsom Prison Blues",
            mp3:"media/performances/12.mp3",
            poster:"media/performances/cover.jpg"
        },
        {
            title:"What A Wonderful World",
            mp3:"media/performances/13.mp3",
            poster:"media/performances/cover.jpg"
        }

    ], {
        swfPath: "bower_components/jplayer/dist/jplayer",
        supplied: "mp3, m4v",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true,
        size: {
            width: "100%"
        }
    });

    new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Oh, Virginia!",
            artist:"Choral Version with Video",
            m4v:"media/oh_virginia/oh_virginia_video.m4v",
            poster:"media/oh_virginia/oh_virginia_video.jpg"
        },
        {
            title:"Oh, Virginia!",
            artist:"Katy Benko",
            mp3:"media/oh_virginia/oh_virginia_katy_benko.mp3",
            poster:"media/oh_virginia/oh_virginia_katy_benko.jpg"
        }
    ], {
        swfPath: "bower_components/jplayer/dist/jplayer",
        supplied: "m4v, mp3",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true,
        size: {
            width: "100%"
        }
    });



    function resizePosters() {
        var jp = $(".jp-jplayer");
        var width = jp.width();

        var newHeight = Math.round(540/910 * width);
        jp.css("height", newHeight + "px");
        $(".jp-jplayer img").css("height", newHeight + "px");

    }

    $(window).resize(function(){
        resizePosters();
    });

    resizePosters();

});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});


