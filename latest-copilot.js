const reason = "Prevented";
const contentOwner = "u";

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

if (typeof _25embedOptions === "undefined") {
  var _25embedOptions = {};
}

for (let x in _25embedDefaults) {
  if (typeof _25embedOptions[x] !== "undefined") {
    if (_25embedOptions[x] !== "y" && _25embedOptions[x] !== "n") {
      _25embedOptions[x] = _25embedDefaults[x];
    }
  } else {
    _25embedOptions[x] = _25embedDefaults[x];
  }
}

let supDev = _25embedOptions.supportDevs !== "n" 
  ? `<script async src="https://arc.io/widget.min.js#mppA68Nm"></script>` 
  : "";

let theme = themeList.includes(theme) ? theme : "blue";

const _25embedWhitelistDomains = typeof _25embedWhitelistDomains !== "undefined"
  ? _25embedWhitelistDomains.concat(["25HoursaDay.github.io", "home-schoology.github.io"])
  : ["25HoursaDay.github.io", "home-schoology.github.io"];

const _25embedBlacklistDomains = typeof _25embedBlacklistDomains !== "undefined"
  ? _25embedBlacklistDomains
  : [];

const checkURLProtocol = (option, protocol) => {
  if (_25embedOptions[option] === "n" && (window.location.protocol === protocol || new URL(document.referrer).protocol === protocol)) {
    _25HoursaDay_on_github("n", `Content was loaded with a ${protocol} URL.`);
  }
};

checkURLProtocol("allowFileHost", "file:");
checkURLProtocol("allowDataHost", "data:");
checkURLProtocol("allowBlobHost", "blob:");
checkURLProtocol("allowBlankHost", "about:");

if (_25embedOptions.allowSameHost === "y") {
  if (typeof document.location.ancestorOrigins !== "undefined") {
    for (let i = 0; i < document.location.ancestorOrigins.length; i++) {
      let ancestorHost = new URL(document.location.ancestorOrigins[i]).hostname;
      if (_25embedBlacklistDomains.includes(ancestorHost)) {
        _25HoursaDay_on_github("n", "Blacklisted URLs are involved.");
        break;
      } else if (!_25embedWhitelistDomains.includes(ancestorHost) && document.location.hostname !== ancestorHost) {
        _25HoursaDay_on_github("n", "The content that was supposed to be displayed does not belong to this site's domain.");
        break;
      }
    }
  }
  let referrerHost = new URL(document.referrer).hostname;
  if (_25embedBlacklistDomains.includes(referrerHost)) {
    _25HoursaDay_on_github("n", "Blacklisted URLs are involved.");
  } else if (!_25embedWhitelistDomains.includes(referrerHost) && referrerHost !== document.location.hostname) {
    _25HoursaDay_on_github("n", "This content does not belong to this page.");
  }
} else {
  if (window !== window.top || document.referrer !== document.location.href || typeof document.location.ancestorOrigins !== "undefined" || window.frameElement) {
    _25HoursaDay_on_github("n", "This content has been embedded or iframed.");
  }
}

function _25HoursaDay_on_github(del, rsn) {
  if (del === "n") {
    document.write(`
      <link href="https://cdn.jsdelivr.net/gh/25HoursaDay/25Embed@master/style.css" rel="stylesheet" type="text/css"/>
      ${supDev}
      <div id="_25embedScreen" class="_25embedScreen">
        <h1 id="titleMsg" class="titleMsg">This content has been protected by 25Embed.</h1>
        <h2 id="reason ▋
