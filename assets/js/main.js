

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

// Кнопка_Показать еще_на странице_Галерея работ
$(".section_show_more").each(function() {
		let more = $(this).find(".show_more");
		let hide = $(this).find(".hide_content");
		hide.hide();
		more.click(function() {
				hide.slideToggle();
				more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
		});
});


// copy text button
$('#copy').click(function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($('#text_for_copy').text()).select();
		document.execCommand("copy");
		$temp.remove();

		// $(this).text('');
});
