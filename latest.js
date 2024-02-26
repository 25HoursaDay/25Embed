var reason = "Prevented";
var contentOwner = "u";

const _25embedDefaults = {
  allowSameHost: "y",
  allowFileHost: "n",
  allowDataHost: "y",
  allowBlobHost: "y",
  allowBlankHost: "n",
  allowProxyHost: "y",
  supportDevs: "y",
  onlyAllowHTTP: "n",
  onlyAllowHTTPS: "n",
  rickRoll: "n",
  ultraThreatProtection: "n"
};

const themeList = ["blue", "green", "red"];


if (typeof _25embedOptions == "undefined") {
  var _25embedOptions = {};
  console.log(_25embedOptions);
}

let x;
for (x in _25embedDefaults) {
  if (typeof _25embedOptions[x] !== "undefined") {
    if (_25embedOptions[x] !== "y" || _25embedOptions[x] !== "n") {
      _25embedOptions[x] = _25embedDefaults[x];
    }
  } else {
    _25embedOptions[x] = _25embedDefaults[x];
  }
  console.log(x);
  console.log(_25embedOptions[x]);
}


if (_25embedOptions.supportDevs !== "n") {
  var supDev = `<script async src="https://arc.io/widget.min.js#mppA68Nm"></` + `script>`;
} else {
  var supDev = "";
}

if (typeof theme !== "undefined") {
  if (!themeList.includes(theme)) {
    var theme = "blue";
  }
} else {
  var theme = "blue";
}
if (typeof _25embedWhitelistDomains !== "undefined") {
  _25embedWhitelistDomains.push("25HoursaDay.github.io");
  _25embedWhitelistDomains.push("home-schoology.github.io");
} else {
  var _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"];
}

if (typeof _25embedBlacklistDomains !== "undefined") {

} else {
  var _25embedBlacklistDomains = [];
}


if (_25embedOptions.allowFileHost == "n" && (window.location.protocol == "file:" || new URL(document.referrer).protocol == "file:")) {
  _25HoursaDay_on_github("n", "Content was loaded with a file: URL.");
}
if (_25embedOptions.allowDataHost == "n" && (window.location.protocol == "data:" || new URL(document.referrer).protocol == "data:")) {
  _25HoursaDay_on_github("n", "Content was loaded with a data: URL.");
}
if (_25embedOptions.allowBlobHost == "n" && (window.location.protocol == "blob:" || new URL(document.referrer).protocol == "blob:")) {
  _25HoursaDay_on_github("n", "Content was loaded with a blob: URL.");
}
if (_25embedOptions.allowBlankHost == "n" && (window.location.protocol == "about:" || new URL(document.referrer).protocol == "about:")) {
  _25HoursaDay_on_github("n", "Content was loaded with an about: URL.");
}
/*
if (_25embedWhitelistDomains.includes(new URL().hostname)) {

}
*/
ASH: if (_25embedOptions.allowSameHost == "y") {
  // ancestorOrigins is only for google chrome
  ASH1: if (typeof document.location.ancestorOrigins !== "undefined") {
    ASH2: for (var i = 0; i < document.location.ancestorOrigins.length; i++) {
      if (_25embedBlacklistDomains.includes(new URL(document.location.ancestorOrigins[i]).hostname)) {
        // if blacklisted, end
        _25HoursaDay_on_github("n", "Blacklisted URLs are involved.");
        break ASH;
      } else {
        if (_25embedWhitelistDomains.includes(new URL(document.location.ancestorOrigins[i]).hostname)) {
          // if whitelisted, skip
        } else {
          if (document.location.hostname != new URL(document.location.ancestorOrigins[i]).hostname) {
            _25HoursaDay_on_github("n", "This content does not belong to this page.");
            break ASH;
          }
        }
      }
      // this is after the checks
    }
    // after i if statement
  }
  if (_25embedBlacklistDomains.includes(new URL(document.referrer).hostname)) {
    // if blacklisted
    _25HoursaDay_on_github("n", "Blacklisted URLs are involved.");
  } else {
    if (_25embedWhitelistDomains.includes(new URL(document.referrer).hostname)) {
      // if whitelisted
    } else {
      if (new URL(document.referrer).hostname != new URL(document.location.href).hostname) {
        _25HoursaDay_on_github("n", "This content does not belong to this page.");
        break ASH;
      }
    }
  }
}
else {
  if (window != window.top) {
    _25HoursaDay_on_github("n", "This content has been embedded or iframed.");
    break ASH;
  }
  if (document.referrer != document.location.href) {
    _25HoursaDay_on_github("n", "This content has been embedded or iframed.");
    break ASH;
  }
  if (typeof document.location.ancestorOrigins !== "undefined") {
    _25HoursaDay_on_github("n", "This content has been embedded or iframed.");
    break ASH;
  }
  if (window.frameElement) {
    _25HoursaDay_on_github("n", "This content has been embedded or iframed.");
    break ASH;
  }
}
/*
if (_25embedOptions.ultraThreatProtection == "y") {
  if (window.top.location.hostname == "http://webcache.googleusercontent.com/" || window.location.hostname == "http://webcache.googleusercontent.com/") {

    window.close();
    _25embedLaunch("n", 'Protocol "ultraThreatProtection"');
  }
}

function ogSrc() {
  window.open(ogContent);
}

function repo() {
  window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");
}
*/
function _25HoursaDay_on_github(del, rsn) {
  if (del == "n") {
    document.write(`
  <link href="https://cdn.jsdelivr.net/gh/25HoursaDay/commissioned-resources@8d4c488e3d3ea97213f07cbcc2a8215df2927b70/25Embed/style.css" rel="stylesheet" type="text/css"/>
  ` + supDev + `
  <div id="_25embedScreen" class="_25embedScreen">
  <h1 id="titleMsg" class="titleMsg">This content has been guarded by 25Embed.</h1>
  <h2 id="reason" class="reason">Reason: "` + rsn + `"</h2>
  <div class="rowClass">
  <button id="ogSrc" class="mBtn" onclick="ogSrc()">Original Content</button>
  <button id="repo" class="mBtn" onclick="repo()">Learn More</button>
  </div>
  <script>
  var ogContent = self.location;
  function ogSrc() {window.open(ogContent);}
  function repo() {window.open("https://github.com/25HoursaDay/commissioned-resources/blob/main/25Embed/README.md#about-25embed");}
  
  function changeTheme(tvar1, tvar2, tvar3, tvar4, tvar5) {
  const rdadad = document.querySelector('html');
  rdadad.style.setProperty('--var1', tvar1);
  rdadad.style.setProperty('--var2', tvar2);
  rdadad.style.setProperty('--var3', tvar3);
  rdadad.style.setProperty('--var4', tvar4);
  rdadad.style.setProperty('--var5', tvar5);
}

console.log(theme);
if (theme == "green") {
console.log("dgdgdrg");
changeTheme("black","lime","green","lime","lime");
} else if (theme == "red") {
console.log("dgdgdrg");
changeTheme("black","red","darkred","red","red");
}
  </` + `script>
  </div>
`);
  }
}
