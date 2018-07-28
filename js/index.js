"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("#preloader .clock").fadeOut(); // will first fade out the loading animation
});

document.addEventListener('DOMContentLoaded', function() {







$('.carousel-4item-dots-marg').owlCarousel({
    loop: false,
    margin: 60,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

//------------------------------------------------------------------------
//					SUBSCRIBE FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------
$('#subscribe-center-field-2-form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
        email: {
            required: true,
            email: true
        }
    },
    errorPlacement: function (error, element) {
        error.appendTo(element.closest("form"));
    },
    highlight: function (element, errorClass) {
        $(element).parent().addClass('error');
    },
    unhighlight: function (element, errorClass) {
        $(element).parent().removeClass('error');
    },
    messages: {
        email: {
            required: "We need your email address to contact you",
            email: "Please, enter a valid email"
        }
    }
});

//------------------------------------------------------------------------------------
//						SUBSCRIBE FORM MAILCHIMP INTEGRATIONS SCRIPT
//------------------------------------------------------------------------------------
$('#subscribe-center-field-2-form').submit(function () {
    // submit the form
    if ($(this).valid()) {
        $(this).find('[type=submit]').button('loading');
        var action = $(this).attr('action');
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                newsletter_email: $(this).find('.subscribe_email').val(),
                id: this.id
            },
            success: function (data) {
		$('#subscribe-center-field-2-form').find('.subscribe_submit').button('reset');
		//Use modal popups to display messages
		$('#subscribe-center-field-2-success .mailchimp-data-message').html(data);
		$(document).find('#subscribe-center-field-2-success').modal('show');
	},
            error: function () {
		$('#subscribe-center-field-2-form').find('.subscribe_submit').button('reset');
		//Use modal popups to display messages
		$(document).find('#subscribe-center-field-2-error').modal('show');
	}
        });
    }
    return false;
});


});
