var opendrawer = function() {
    var drawer = $('nav');

    if ( drawer.width() > 0  )
        drawer.width(0);
    else
        drawer.width(250);
}