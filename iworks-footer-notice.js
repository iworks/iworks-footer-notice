/**
 * get cookie value
 */
window.iworks_footer_notice.functions.get_cookie_value = function( cname ) {
    var name = cname + "=";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var ca = decoded_cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/**
 * set Cookie Notice
 */
window.iworks_footer_notice.functions.set_cookie_notice = function () {
    var notice = document.getElementById( window.iworks_footer_notice.name );
    var expires = new Date();
    var value = parseInt( expires.getTime() );
    var cookie = '';
    /**
     * set default data
     */
    var data_to_send = new FormData();
    /**
     * XMLHttpRequest object
     */
    var xhttp = new XMLHttpRequest();
    /**
     * set time
     */
    value = parseInt( expires.getTime() );
    /**
     * add time
     */
    value += parseInt( window.iworks_footer_notice.cookie.value ) * 1000;
    /**
     * add time zone
     */
    value += parseInt( window.iworks_footer_notice.cookie.timezone ) * 1000;
    /**
     * set time
     */
    expires.setTime( value + 2 * 24 * 60 * 60 * 1000 );
    /**
     * add cookie timestamp
     */
    cookie = window.iworks_footer_notice.cookie.name + '=' + value/1000 + ';';
    cookie += ' expires=' + expires.toUTCString() + ';';
    if ( window.iworks_footer_notice.cookie.domain ) {
        cookie += ' domain=' + window.iworks_footer_notice.cookie.domain + ';';
    }
    /**
     * Add cookie now (fix cache issue)
     */
    cookie += ' path=' + window.iworks_footer_notice.cookie.path + ';';
    if ( 'on' === window.iworks_footer_notice.cookie.secure ) {
        cookie += ' secure;'
    }
    document.cookie = cookie;
    cookie = window.iworks_footer_notice.cookie.name + '_close=hide;';
    cookie += ' expires=;';
    if ( window.iworks_footer_notice.cookie.domain ) {
        cookie += ' domain=' + window.iworks_footer_notice.cookie.domain + ';';
    }
    cookie += ' path=' + window.iworks_footer_notice.cookie.path + ';';
    if ( 'on' === window.iworks_footer_notice.cookie.secure ) {
        cookie += ' secure;'
    }
    document.cookie = cookie;
    /**
     * set user meta
     */
    if ( undefined !== window.iworks_footer_notice.logged && 'yes' === window.iworks_footer_notice.logged ) {
        data_to_send.append( 'action', window.iworks_footer_notice.ajax_actions.logged );
        data_to_send.append( 'user_id', window.iworks_footer_notice.user_id );
    } else {
        data_to_send.append( 'action', window.iworks_footer_notice.ajax_actions.anonymous );
    }
    data_to_send.append( 'nonce', window.iworks_footer_notice.nonce );
    /**
     * send data
     */
    xhttp.open( 'post', window.iworks_footer_notice.ajaxurl, true );
    xhttp.send( data_to_send );
    /**
     * remove
     */
    notice.remove();
};

window.addEventListener( 'load', (event) => {
    var button_close = document.getElementById( window.iworks_footer_notice.button_close.element_id );
    if ( 10 ) {
        button_close.addEventListener( 'click', (event) => {
            event.preventDefault();
            window.console.log(event);
            window.iworks_footer_notice.functions.set_cookie_notice();
            return false;
        });
    }
    /**
     * it ws already shown
     */
    value = window.iworks_footer_notice.functions.get_cookie_value( window.iworks_footer_notice.cookie.name + '_close' );
    if ( 'hide' === value ) {
        document.getElementById( window.iworks_footer_notice.name ).remove();
    }
});
