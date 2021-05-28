(function(window, $) {
	function swipeSlider() {

		var self = this;

		var wrap = self.closest('.slider-wrapper');
		var active = self.filter('.active');
		var current = self.index(active);
		var width = wrap.width();

		self.off();
		self.on('swipeleft', function(e) {
			if (current === self.length - 1) {
				return;
			}
			self.eq(current + 1).trigger('activate.slider');
		})

		.on('swiperight', function(e) {
			if (current === 0) {
				return;
			}
			self.eq(current - 1).trigger('activate.slider');
		})

		.on('activate.slider', function(e) {
			self.eq(current).removeClass('active');

			$(e.target).addClass('active');

			// Update the active slide index
			current = self.index(e.target);
			e.stopPropagation();
		})

		// The code below handles what happens before any swipe event is
		// triggered.
		// It makes the slides demo on this page work nicely, but really doesn't
		// have much to do with demonstrating the swipe events themselves. For
		// more
		// on move events see:
		//
		// http://stephband.info/jquery.event.move

		.on('movestart', function(e) {
			// If the movestart heads off in a upwards or downwards
			// direction, prevent it so that the browser scrolls
			// normally.
			if ((e.distX > e.distY && e.distX < -e.distY)
					|| (e.distX < e.distY && e.distX > -e.distY)) {
				// e.preventDefault();
				return;
			}

			// To allow the slide to keep step with the finger,
			// temporarily disable transitions.
			wrap.addClass('notransition');
		})

		.on('move', function(e) {
			var left = 100 * e.distX / width;

			// Move slides with the finger
			// self[current].style.left = (left + 15) + '%';
			// if (self[current - 1]) {
			// self[current - 1].style.left = (left - 60) + '%';
			// }
			// if (self[current + 1]) {
			// self[current + 1].style.left = (left + 90) + '%';
			// }
			if (e.distX < 0) {
				if (self[current + 1]) {
					self[current].style.left = (left + 15) + '%';
					self[current + 1].style.left = (left + 90) + '%';
				} else {
					self[current].style.left = (left / 4 + 15) + '%';
				}
				if (self[current - 1]) {
					self[current - 1].style.left = (left - 60) + '%';
				}
			}
			if (e.distX > 0) {
				if (self[current + 1]) {
					self[current + 1].style.left = (left + 90) + '%';
				}
				if (self[current - 1]) {
					self[current].style.left = (left + 15) + '%';
					self[current - 1].style.left = (left - 60) + '%';
				} else {
					self[current].style.left = (left / 5 + 15) + '%';
				}
			}
		})

		.on('moveend', function(e) {
			wrap.removeClass('notransition');

			self[current].style.left = '';

			if (self[current + 1]) {
				self[current + 1].style.left = '';
			}
			if (self[current - 1]) {
				self[current - 1].style.left = '';
			}
		});
	}

	$.fn.swipeSlider = swipeSlider;
})(window, jQuery);
