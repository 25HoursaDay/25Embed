// MAY BE OUTDATED IDK

/* DEFAULT SETTINGS: */
// n is disabled, y is enabled
const _25embedOptions = {
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
let theme = "blue";

const _25embedWhitelistDomains = ["25HoursaDay.github.io", "home-schoology.github.io"]; // domains allowed to embed content, defaulted to blank
const _25embedBlacklistDomains = []; // domains not allowed to embed content, defaulted to none


function changeTheme(var1, var2, var3, var4, var5) {
  const rdadad = document.querySelector('html');
  rdadad.style.setProperty('--var1', var1);
  rdadad.style.setProperty('--var2', var2);
  rdadad.style.setProperty('--var3', var3);
  rdadad.style.setProperty('--var4', var4);
  rdadad.style.setProperty('--var5', var5);
}

//    changeTheme("black", "lime", "green", "lime", "lime");
//    changeTheme("black", "#1a1aff", "darkblue", "blue", "blue");
//    changeTheme("black", "red", "darkred", "red", "red");
  
