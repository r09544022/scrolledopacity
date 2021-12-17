$(function () {
	var winh = $(window).height();
	var outer_pos = $("#outer").offset().top;
	var outer_end = outer_pos + $("#outer").height();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();
		$(".opa").each(function (index) {
			if (scrolled > outer_pos && scrolled < outer_end) {
				$(this).css("opacity", $(this).data("pos") - (scrolled - outer_pos) / winh);
				console.log(
					"[" +
						((scrolled - outer_pos) / winh).toPrecision(1) +
						"]" +
						index +
						": " +
						$(this).css("opacity")
				);
			}
		});
	});
});

