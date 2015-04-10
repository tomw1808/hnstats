function getNewcombinatorSpanFromResults(result) {
    var objResponse = JSON.parse(result.response);
    var ncSpan = document.createElement("span");

    if ("response" in objResponse && "docs" in objResponse.response && objResponse.response.docs.length > 0) {
        var doc = objResponse.response.docs[0];
        var txt = doc.hn_num_points + " upvotes and " + doc.hn_num_comments + " comments in ";
        var innerspan = document.createElement("span");
        for (var i = 0; i < doc.source_links.length; i++) {
            var a = document.createElement('a');
            a.setAttribute("href", doc.source_links[i]);
            a.setAttribute("style", "margin-left: 2px");
            var favicon = document.createElement("img");
            favicon.setAttribute("style", "width: 1em; height: 1em;");
            favicon.setAttribute("src", getNewscombinatorFavicon(doc.source_links[i]));
            a.appendChild(favicon);
            innerspan.appendChild(a);
        }
        txt += innerspan.outerHTML;
        ncSpan.innerHTML = txt;
    }
    ncSpan.setAttribute("id", "nagrgt-iframe");
    return ncSpan;
}

function getNewscombinatorFavicon(data) {
    var a = document.createElement('a');
    a.href = data;

    var favicon = "favicon.ico";
    if (a.hostname.indexOf("makerland") != -1) {
        favicon = "static/img/makerland_favicon_SMALL.ico";
    }
    if (a.hostname.indexOf("soylentnews") != -1) {
        favicon = "favicon-soylentnews.png";
    }
    if (a.hostname.indexOf("inbound") != -1) {
        favicon = "assets/sites/inbound/img/fav.ico";
    }
    return a.protocol + "//" + a.hostname + "/" + favicon;
}

function newscombinatorLoadComments(url, callback) {
    var xhr;
    url = "http://api.nagrgtr.com/api/search/?q=" + encodeURIComponent("url:\""+url.replace(/(ref|trk|hn|m|mbid|lang|mt|referrer|smid|mod|partner|_\w*)=[^&]*&?/gi, "")+"\"") + "&rows=1";

    if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"];

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch (e) {
            }
        } // end for
    }

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        // all is well
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}
