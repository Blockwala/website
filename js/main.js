'use strict';
$(document).ready(function() {

	// Sections Open/Close
	$('#more-button').on('click', function(){
		$('.more').addClass('active');
	});

	$('#exit-more').on('click', function() {
		$('.more').removeClass('active');
	});

	$('#contact-button').on('click', function(){
		$('.contact').addClass('active');
	});

	$('#exit-contact').on('click', function() {
		$('.contact').removeClass('active');
	});

	// Countdown
	$('.countdown').countdown({
		date: date,
		render: function(data) {
			$(this.el).html(
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.days + "</h2>" + " <h4>days</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.hours + "</h2>" + " <h4>hours</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.min, 2) + "</h2>" + " <h4>minutes</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.sec, 2) + "</h2>" + " <h4>seconds</h4></div>");
		}
	});

	// Particles
	particlesJS("particles", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},"color":{"value":"#000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#000","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

	// Contact Form
	var $contactForm = $('#contact-form');

	$contactForm.on("submit", function(e) {
		e.preventDefault();
		var $submit = $('input:submit', $contactForm);
		var proceed = true;

		var post_data = {
			'email': email,
			'user_name'     : $('input[name=name]').val(), 
			'user_email'    : $('input[name=email]').val(), 
			'msg'           : $('textarea[name=message]').val()
		};
		$.post('contact_me.php', post_data, function(response){

			var output = response.text;

			$("#name").val('');
			$("#email").val('');
			$("#msg").val('');

			$("#contact-form #contact-result").addClass("submited");
			$("#contact-form #contact-result").html(output);
		}, 'json');
	});
});