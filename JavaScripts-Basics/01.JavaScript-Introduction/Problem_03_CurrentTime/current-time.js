(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    console.log(hours + ':' + ((minutes > 9) ? minutes : ('0' + minutes)));
}());
