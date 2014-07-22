(function (radiuses) {
    var frag = document.createDocumentFragment();
    radiuses = [7, 1.5, 20];
    radiuses.forEach(createParagrafInFragment);
    function createParagrafInFragment(radius) {
        var element = document.createElement('p');
        element.id = radius;
        element.innerHTML = 'r = ' + radius + ', area = ' + calcCircleArea(radius);
        frag.appendChild(element);
    }
    function calcCircleArea(r) {
        return Math.PI * r * r;
    }
    document.body.appendChild(frag);
}());
