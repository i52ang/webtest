(function objectTest (window) {
    
    var largeObject;

    function alloc() {
        largeObject = [];
        for (var i = 0; i < 1000000; i++) {
            largeObject.push(10000000 * i + "?");
        }
        info();
    }

    function free() {
        largeObject = null;
        info();
    }

    function info() {
        document.querySelector('#info').innerHTML = (largeObject || []).length;
    }

    document.querySelector('#alloc').onclick = alloc;
    document.querySelector('#free').onclick = free;
})(window);