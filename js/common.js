$(document).ready(function() {

	// Portfolio animation + mixItUp (start)
	$('#portfolio_grid').mixItUp();
	$('.s_portfolio li').click(function() {
		$('.s_portfolio li').removeClass('active');
		$(this).addClass('active');
	});
	// Portfolio animation (end)

	// About me scale photo (start)
	$('.popup').magnificPopup({type:'image'});
	$('.popup_content').magnificPopup({type:'inline', showCloseBtn: true});
	// About me scale photo (end)

	// Header animation (start)
	$('.top_text h1').animated('fadeInDown', 'fadeOutUp');
	$('.top_text p, .section_header').animated('fadeInUp', 'fadeOutDown');
	$('.top_text a').animated('fadeInUp', 'fadeOutDown');
	// Header animation (end)

	// About me animation (start)
	$('.animation_left').animated('fadeInLeft', 'fadeOutDown');
	$('.animation_center').animated('flipInY', 'fadeOutDown');
	$('.animation_right').animated('fadeInRight', 'fadeOutDown');
	// About me animation (end)

	// Resume animation (start)
	$('.left .resume_item').animated('fadeInLeft', 'fadeOutDown');
	$('.right .resume_item').animated('fadeInRight', 'fadeOutDown');
	// Resume animation (end)

	// Header parallax animation + resize (start)
	function heightDetect() {
		$('.main_head').css('height', $(window).height())
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	// Header parallax animation (start)

	// Menu animation (start)
	$('.toggle_mnu').click(function() {
		$('.sandwich').toggleClass('active');
	});
	$('.top_mnu ul a').click(function() {
		$('.top_mnu').fadeOut(600);
		$('.sandwich').toggleClass('active');
		$('.top_text').css('opacity', '1');
	}).append('<span>');
	$('.toggle_mnu').click(function() {
		if ($('.top_mnu').is(':visible')) {
			$('.top_text').removeClass('h_opacify');
			$('.top_mnu').fadeOut(600);
			$('.top_mnu li a').removeClass('fadeInUp animated');
		} else {
			$('.top_text').addClass('h_opacify');
			$('.top_mnu').fadeIn(600);
			$('.top_mnu li a').addClass('fadeInUp animated');
		};
	});
	// Menu animation (end)

	// Portfolio addId (start)
	$('.portfolio_item').each(function(i) {
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.port_descr').attr('id', 'work_' + i);
	});
	// Portfolio addId (end)

	// Form (start)
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	// Form (end)

	// Scroll to ID (start)
	$('.top_mnu ul a').mPageScroll2id();
	// Scroll to ID (end)
});

$(window).load(function() {
	// Preloader animation (start)
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
	// Preloader animation (end)
});
