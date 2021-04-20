'use strict';


var Style = (function () {

	var width = $(window).width();

	function general() {

		//toggling menu icons 
		$("#menu .card-title").append("<i style='float:right' class='fas fa-angle-double-down p-1'>");
		$("#menu .card-title").click(function () {
			if ($(this).hasClass("collapsed")) {
				$(this).find("i").removeClass("fa-angle-double-down");
				$(this).find("i").addClass("fa-angle-double-up");

			} else {

				$(this).find("i").removeClass("fa-angle-double-up");
				$(this).find("i").addClass("fa-angle-double-down");
			}

		});

		// margin between soc icons
		$("#soc img").addClass("mx-3");
	}

	function page_nav() {
		width > 765 ?
		//desktop:
		$('body').scrollspy({
			 target: "#navbarNav",
			offset: 50
		})
		: //mobile:
		$('body').scrollspy({
			target: "#bottom_nav",
		   offset: 30
	   });

		// margin
		var icons_margin;

		width < 765 ? icons_margin = "mx-0" : icons_margin = "mx-3";
		$("nav a").addClass(icons_margin);

		// Add smooth scrolling to all menu links
		$("nav a").on('click', function () {

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000);

			return false;
		});

	}

	function mobile() {
		$("section").addClass("pt-3");
		$("section>.row").addClass("py-3 my-3");
		$("#events .card").addClass("mx-0");
		$('label').removeClass("border-light");
$('body').prepend('<div id="bottom_nav" class="row" style="border-top:1px solid #e7c6a9; background:black; width:100%; height:auto; position: fixed; bottom: 0; z-index:5"></div>');
		$(".nav-link").addClass("col px-0").appendTo('#bottom_nav');
	}

	function desktop() {

		$("body").prepend('	<img src="media/pix/bg.jpg" id="bg" alt="Lights in the dark">');
		$("section").addClass("pt-5");
		$("section>.row").addClass("py-5 my-5");
		$("#about .row").removeClass("py-5");

		$("#events").css({
			height: "650px"
		});

		$("#events .card, #events p, #events a").hide();
		var delay = 0,
			card = $(".card-group .card");

		card.each(function () {
			delay = delay + 250;
			$(this).css({
				width: "20%"
			}).delay(delay).fadeIn();
		});

		$("p, a").delay(delay).fadeIn();

	}



	function init() {
		general()
		page_nav();
		width > 765 ? desktop() : mobile();
	}
	return {
		init: init
	};

})();

var ContactForm = (function () { // validation and processing form

	var reg,
		the_value;

	function validation() {

		function details() {
			$("#name, #email, #tel").blur(function () { // green/red border visual hints
				reg = new RegExp($(this).attr("pattern"));
				the_value = $(this).val();

				if (reg.test(the_value)) {

					$(this).addClass('valid');
				} else {

					$(this).addClass('invalid');
				}
			});
		}

		function subject() {

			// fading additional fields for performers:
			function input_toggle(trigger, target) {
				$(trigger).on('click', function () {
					if ($(trigger).is(':checked')) {

						$(target).fadeIn();
					} else {
						$(target).fadeOut();
					}
				});

			}

			

			function table_order() {
				$('#datetimepicker').datetimepicker({
					theme: "dark",
					defaultTime: "21:00",
					step: 15,
					yearStart: 2018,
					yearEnd: 2050,
					minTime: "20:00",
					maxTime: false
				});

				$("#table").change(function () {

					if ($(this).prop("checked") == true) {

						$("#datetimepicker").fadeIn();

					} else if ($(this).prop("checked") == false) {

						$("#datetimepicker").fadeOut();
					}
				});
			}


			input_toggle("#perform", "#performance");
			input_toggle("#instrumental", "#instrument");
			table_order();
		}

		details();
		subject();
	}

	function processing() { //processing form

		var reason = [],
			performance_type = [];

		function arr_toggle(arr, input) {

			$(input).on('change', function () {


				var val = $(this).val();


				if (arr.includes(val) && $(input).prop(":checked", true)) {

					for (var i = 0; i < arr.length; i++) {

						if (arr[i] == val) {
							arr.splice(i, 1);
						}
					}

				} else {
					arr.push(val);
				}
	
			});

		}
		arr_toggle(reason, ".reason>input:checkbox");
		arr_toggle(performance_type, "#performance input:checkbox");

		//	cleaning performing fields if #perform is unchecked 
		function perform() {
			$("input:checkbox").on("change", function () {

				if (!$("#perform").is(":checked")) {

					$('#performance input[type=checkbox]').prop('checked', false);
					$('#performance input[type=radio]').prop('checked', false);
					performance_type.length = 0;
				}


			});
		}

		function perform_link() {
			if (window.location.hash == "#contact+") {

				window.location.hash = '#contact';
				$('#perform').click(); //clicking but not toggling (((
				$("#performance").fadeIn();
				

				$("#name").focus();
			}
		}
		perform();
		perform_link();

		function clear_form() {
			reason.length = 0;
			performance_type.length = 0;
			$('input[type=checkbox]').prop('checked', false);
			$("#datetimepicker").fadeOut();
			$('input[type=text], input[type=tel], textarea').val('');
			$('input').removeClass("valid invalid");
			$("#performance, #instrument").fadeOut();
			$('#submit_msg').html('<img id="close"src="media/icons/close.png" alt="close">');

		}




		$("form").on("submit", function () {
			// closing button for submit message
			$("#close").on('click', function () {
				$("#submit_msg").slideUp();
				$("section").css("opacity", 1);

				clear_form();
			});

			$("#close").appendTo('#submit_msg').fadeIn();


			var name = $('#name').val(),
				email = $('#email').val(),
				tel = $('#tel').val(),
				day = $('input[name=day]').val(),
				song = $("#song").val(),
				author = $("#author").val(),
				instrument = $("#instrument").val(),
				message = $('#message').val(),
				dateAndTime = $("#datetimepicker").val();

			//hiding the form, showing success/failure message :
			if (name && email && tel && reason && reg.test(the_value)) {
				$("section").css("opacity", 0.5);
				$('#submit_msg').slideDown();

				// clear previous inputs and hints
			}

			//  processing data :
			$.post("process_form.php", {
					name: name,
					email: email,
					tel: tel,
					reason: reason,
					performance_type: performance_type,
					day: day,
					song: song,
					author: author,
					instrument: instrument,

					message: message,
					dateAndTime: dateAndTime
				},
				function (data) {
					$("#submit_msg").append("<p>" + data + "</p>");
				});

			return false;

		});
	}

	function init() {
		validation();
		processing();
	}
	return {
		init: init
	};
})();

$(document).ready(function () {

	Style.init();
	ContactForm.init();
});