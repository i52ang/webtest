(function(window, $) {
	function swipePage(options) {

		var self = this;

		var opt = $.extend({
			sectionSelector : '.section',
			activeClass : 'active',
			notransitionClass : 'notransition'
		}, options);

		var $section = self.find(opt.sectionSelector);
		var active = $section.filter(opt.activeClass);
		var current = $section.index(active);

		var height = $(window).height();
		$section.height(height);

		if (current === -1) {
			$section.eq(0).addClass(opt.activeClass);
			current = 0;
		}

		$section.off();
		$section.on('swipeup', function(e) {
			if (current === $section.length - 1) {
				return;
			}
			if ($section.index(e.target) === -1) {
				return;
			}
			$section.eq(current + 1).trigger('activate.page');
		})

		.on('swipedown', function(e) {
			if (current === 0) {
				return;
			}
			if ($section.index(e.target) === -1) {
				return;
			}
			$section.eq(current - 1).trigger('activate.page');
		})

		.on('activate.page', function(e) {
			$section.eq(current).removeClass(opt.activeClass);

			$(e.target).addClass(opt.activeClass);

			// Update the active slide index
			current = $section.index(e.target);
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
			if ((e.distY > e.distX && e.distY < -e.distX)
					|| (e.distY < e.distX && e.distY > -e.distX)) {
				var $target = $(e.target);
				var isSlider = $.data(e.target, 'slider');
				if (isSlider === undefined) {
					isSlider = $(e.target).closest('.slider').length > 0;
					$.data(e.target, isSlider);
				}
				if (!isSlider) {
					e.preventDefault();
				}
				return;
			}
	
			// To allow the slide to keep step with the finger,
			// temporarily disable transitions.
			self.addClass(opt.notransitionClass);
		})

		.on('move', function(e) {
			var top = 100 * e.distY / height;

			// Move slides with the finger
			if (e.distY > 0) {
				if ($section[current - 1]) {
					self.css({
						top: -height * current + e.distY
					});
				} else {
					self.css({
						top: -height * current + e.distY / 5
					});
				}
			} else if (e.distY < 0) {
				if ($section[current + 1]) {
					self.css({
						top: -height * current + e.distY
					});
				} else {
					self.css({
						top: -height * current + e.distY / 4
					});
				}
			}
		})

		.on('moveend', function(e) {
			self.removeClass(opt.notransitionClass);

			self.css({
				top: -height * (current)
			});
		});
	}


	$.fn.swipePage = swipePage;
})(window, jQuery);
