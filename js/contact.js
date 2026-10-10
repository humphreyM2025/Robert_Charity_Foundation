$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // Initialize EmailJS with the public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: 'xNsCxYsqo5CDj7Av5' });
    }

    var emailjsServiceId = 'service_vtgjxb4';
    var emailjsTemplateId = 'template_m1xet8m';

    function showFormMessage(type, message) {
        var $alert = $('#contactFormAlert');
        $alert.removeClass('contact_form_alert--success contact_form_alert--error');
        $alert.addClass('contact_form_alert--' + type);
        $alert.text(message).show();
    }

    function clearFormMessage() {
        $('#contactFormAlert').removeClass('contact_form_alert--success contact_form_alert--error').text('').hide();
    }

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: false,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "please enter a valid phone number"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                var $form = $(form);
                var $btn = $form.find('button[type="submit"]');

                // Prevent duplicate submissions while the email is being sent
                if ($btn.data('submitting')) {
                    return false;
                }

                clearFormMessage();
                $btn.data('submitting', true).prop('disabled', true);

                var params = {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    number: $('#number').val(),
                    subject: $('#subject').val(),
                    message: $('#message').val()
                };

                // The EmailJS template uses {{name}}, {{email}}, {{number}},
                // {{subject}} and {{message}}, and its "Reply To" is set to {{email}}
                // so replies go straight back to the visitor.
                emailjs.send(emailjsServiceId, emailjsTemplateId, params)
                    .then(function() {
                        showFormMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
                        form.reset();
                    }, function(error) {
                        showFormMessage('error', 'Sorry, we could not send your message. Please try again or email us directly at charityfoundationrobert@gmail.com.');
                        console.error('EmailJS error:', error);
                    })
                    .then(function() {
                        $btn.data('submitting', false).prop('disabled', false);
                    });

                return false;
            }
        })
    })
        
 })(jQuery)
})