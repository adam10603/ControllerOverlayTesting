// The code for parameter parsing is from http://stackoverflow.com/a/1099670/3606363

// Custom paremeters are disabled for now, I'm lazy to figure out how to incorporate them into the current system

/*
function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
} */

function loadContents() {

    var currentLocation = window.location.href;

    currentLocation = currentLocation.replace("#loaded", "");

    if (currentLocation.charAt(currentLocation.length - 1) != '/') {
        currentLocation = currentLocation + '/';
    }

    //var query   = getQueryParams(document.location.search);

    var baseURL = "https://gamepadviewer.com/?p=1&s=0&smeter=1&nocurve=1&soffset=28&sc=_PARAM_SC_&dz=_PARAM_DZ_&delay=_PARAM_DELAY_?editcss=" + currentLocation + "controllerStyle.css";

    var dz      = 0.12;
    var sc      = 1.0;
    var delay   = 0;

    //if (query.dz)       dz  = query.dz;
    //if (query.sc)       sc  = query.sc;
    //if (query.delay) delay  = query.delay;

    baseURL = baseURL.replace("_PARAM_DZ_",       String(dz));
    baseURL = baseURL.replace("_PARAM_SC_",       String(sc));
    baseURL = baseURL.replace("_PARAM_DELAY_",    String(delay));

    var iframe          = document.createElement('iframe');
    iframe.src          = baseURL;
    iframe.innerHTML    = "<p>Your browser does not support iframes.</p>";
    document.body.appendChild(iframe);

    setTimeout(function(){
        /*
        if (!localStorage.overlayReloaded) {
            localStorage.setItem("overlayReloaded", "true");
            window.location.reload(true);
        }
        */
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload(true);
        }
    }, 2000);
}

window.onload = loadContents;
