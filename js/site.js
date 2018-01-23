var opendrawer = function() {
    var drawer = $('.sidenav');

    if ( drawer.width() > 0  )
        drawer.width(0);
    else
        drawer.width(250);
}