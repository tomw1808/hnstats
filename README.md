# HN-Stats

> Adding stats manually is pretty oldschool 

[HN-Stats Demo Page](http://www.newscombinator.com/hnstats)


## Introduction

Ever made a little side-project and posted it on Hacker-News, or Reddit, or somewhere else? Maintaining stats and links to the HN discussions manually is a pain, isn't it? 

Wouldn't it be great if there was a little helper to automate this? HN-Stats is born.

## Installation

You have a website? Add the following to your HTML site where you want the stats appear:

```html
<div id="newscombinator-stats"></div>
```

And the following right before the body closing tag:

```html
<script src="http://www.newscombinator.com/static/js/hnstats.min.js"></script>
<script type="text/javascript">
    !function (containerElement, containerID, targetUrl) {
        if (containerElement.getElementById(containerID)) {
            var location = "" + targetUrl;
            newscombinatorLoadComments(location,
                    function (result) {
                        var spanStats = getNewcombinatorSpanFromResults(result);
                        containerElement.getElementById(containerID).appendChild(spanStats);
                    }
            );
        }
    }(
            document, //target element containing the container with the...
            'newscombinator-stats', //...target-id of the hn-stats (where the span will be written to)
            document.location //the url to load the stats for
    );
</script>
```

You should be fine. It's easier than watering your plants, isn't it?

## Limitations

Newscombinator is constantly grabbing links from the sources mentioned below - and updating stats as long as they are on the top or new sections. It takes about 2-5 minutes from the first post on Hacker-News (and all the others) until the stats will appear. Also, currently only http-support, no https. So consider it for small projects, github pages, etc... And its empty if there are no stats (yet), or it can't find anything. Feel free to fork, hack, improve, dismantle and iterate - agile if you want. The source is pretty self explanatory. 

## License

Feel free to redistribute, modify and use the code for and in any projects. I will not take any responsibility or whatsoever for code/server and or information provided, and keep the right to change/modify/stop the underlying API at any time. You can find more in the provided LICENSE. You can take it for granted, I will not pursue any copyright claims to the software, either modified or not. I personally think its good manner to get in touch with me before using the software for third party apps or anything else.

## Sources

Coinspotting - for Cryptocurrencies, DataTau, Devmaster, Dzone, Echo JS - News for Javascript, Firespotting - for Ideas, Inbound - For Marketing, Lamernews, Lesswrong Discussion, Lobsters, Makernews, Med Technology News - medical technology, Pullup.io - NodeJS related, r/Algorithms, r/Analytics, r/Analyzit, r/Angular JS, r/Bitcoin, r/BSD, r/Business Intelligence, r/Cableporn, r/Coding, r/Coq, r/Crypto, r/Data is Beautiful, r/Data Science, r/Database, r/DataHoarder, r/Datasets, r/Dependent Types, r/Design, r/Devkit, r/Django, r/DuckDuckGo, r/embeddedlinux, r/Entrepeneur, r/FreeBSD, r/Frontend, r/FSharp, r/Gamification, r/HaikuOS, r/Haskell, r/Homelab, r/Ingress, r/IPython, r/Kernel, r/Linux, r/Linux Devices, r/Linuxadmin, r/LinuxDev, r/Lisp, r/Lowlevel, r/Machine Learning, r/Math, r/NetBSD, r/NetSec, r/NodeJS, r/Ocaml, r/OpenBSD, r/OpenData, r/Opensource Hardware, r/OpenSUSE, r/OpenWRT, r/Optimization, r/OS Dev, r/Philosophy of Science, r/Philospohy of Math, r/Programming, r/Programming Languages, r/Python, r/REMath, r/Reverse Engineering, r/RTLSDR, r/Scala, r/Semantic Web, r/Smallbusiness, r/Startups, r/Statistics, r/Sysadmin, r/Sysor, r/Systems,                r/Types, r/Unix, r/Usefulscripts, r/Visualization, r/VRD, r/Webdesign, r/Webdev, Slashdot.org, Soylent                News, USV - Union Square Ventures, WoodSpotting , Y Combinator - Hacker News.                

## Contact

Get in touch with me on thomas at newscombinator dot com. Or like the [HNCombinator](https://twitter.com/HNCombinator) on twitter, I would be delighted if you follow it. If you want to get the latest infos, when what happens, why not [subscribe](http://eepurl.com/-q6v1)? We don't like spam.
