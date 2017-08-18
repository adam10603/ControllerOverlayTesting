// The code for parameter parsing is from http://stackoverflow.com/a/1099670/3606363

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}

function loadContents() {
    var query   = getQueryParams(document.location.search);
    var baseURL = "https://gamepadviewer.com/?p=1&s=0&smeter=1&nocurve=1&sc=_PARAM_SC_&dz=_PARAM_DZ_&delay=_PARAM_DELAY_?editcss=" + window.location.href + "controllerStyle.css";
    var dz      = 0.12;
    var sc      = 1.0;
    var delay   = 0;

    if (query.dz)       dz  = query.dz;
    if (query.sc)       sc  = query.sc;
    if (query.delay) delay  = query.delay;

    baseURL = baseURL.replace("_PARAM_DZ_",       String(dz));
    baseURL = baseURL.replace("_PARAM_SC_",       String(sc));
    baseURL = baseURL.replace("_PARAM_DELAY_",    String(delay));

    var iframe          = document.createElement('iframe');
    iframe.src          = baseURL;
    iframe.innerHTML    = "<p>Your browser does not support iframes.</p>";
    document.body.appendChild(iframe);

    setTimeout(function(){ /*
        if (!localStorage.overlayReloaded) {
            localStorage.setItem("overlayReloaded", "true");
            window.location.reload(true);
        } */
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload(true);
        }
    }, 2000);
}

var url = window.location.href;

if (url.charAt(url.length - 1) != '/') {
    url = url + '/';
}

window.alert(url);

window.onload = loadContents;
