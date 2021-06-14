/* globals ripples */
(function meterial (global, angular) {

    var app = angular.module('material', []);

    function checkbox () {
        return {
            restrict: 'C',
            link: function checkboxLink ($scope, elem) {
                var input = elem[0].querySelector(' > label > input');
                if (input.classList.contains('bs-material')) {
                    return;
                }
                input.classList.add('bs-material');

                var $input = angular.element(input);
                $input.after('<span class="check"></span>');

                $input.on('change', function() {
                    $input.blur();
                });
            }
        };
    }
    app.directive('checkbox', checkbox);

    function radio () {
        return {
            restrict: 'C',
            link: function radioLink ($scope, elem) {
                var input = elem[0].querySelector(' > label > input');
                if (input.classList.contains('bs-material')) {
                    return;
                }
                input.classList.add('bs-material');
                angular.element(input).after('<span class="circle"></span><span class="check"></span>');
            }
        };
    }
    app.directive('radio', radio);

    function formControl () {
        return {
            restrict: 'C',
            link: function formControlLink ($scope, elem) {
                if (elem.hasClass('bs-material')) {
                    return;
                }

                elem.wrap('<div class="form-control-wrapper"></div>');
                elem.after('<span class="material-input"></span>');

                if (elem.hasClass('floating-label')) {
                    var placeholder = elem.attr('placeholder');
                    elem.attr('placeholder', null).removeClass('floating-label');
                    elem.after('<div class="floating-label">' + placeholder + '</div>');
                }
                if (elem.val() === null || elem.val() == 'undefined' || elem.val() === '') {
                    elem.addClass('empty');
                }

                elem.on('keyup change', function() {
                    setTimeout(function() {
                        if (elem.val() === '') {
                            elem.addClass('empty');
                        } else {
                            elem.removeClass('empty');
                        }
                    }, 1);
                });

                var $parent = elem.parent(); // form-control-wrapper
                var $fileinput = $parent.next(); // original sibling
                if ($fileinput.length > 0 && $fileinput[0].type === 'file') {
                    $parent.addClass('fileinput');
                    elem.after($fileinput);

                    $parent.on('focus', function() {
                        elem.addClass('focus');
                    });
                    $parent.on('blur', function() {
                        elem.removeClass('focus');
                    })
                    $fileinput.on('change', function() {
                        var value = [];
                        $.each($fileinput[0].files, function(i, file) {
                            console.log(file);
                            value.push(file.name);
                        });
                        value = value.join(', ');
                        if (value) {
                            elem.removeClass('empty');
                        } else {
                            elem.addClass('empty');
                        }
                        elem.val(value);
                    });
                }
            }
        };
    }
    app.directive('formControl', formControl);

    function run ($document) {
        initRipples ();
    }
    app.run(run);
    
    function initRipples () {
        if (typeof ripples == 'object') {
            ripples.init( '.btn:not(.btn-link),' +
                          '.card-image,' +
                          '.navbar a:not(.withoutripple),' +
                          '.nav-tabs a:not(.withoutripple),' +
                          '.withripple' );
        }
    }

})(this, angular);
