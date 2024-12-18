**<h1 align="center">25Embed (name WIP)</h1>**

**<h2>If you were directed to this page from an embed, please contact the original content owner to let them know their hard work is being stolen!</h2>**

<h1>Installation</h1>
<p>To install 25Embed, first you must create your own <a href="https://github.com/25HoursaDay/25Embed/blob/main/config.js">config.js</a> file using the <a href="">25Embed Config Tool</a> if you want custom settings.
</p>

<h3>Install with HTML (recommended)</h3>
<p>To install 25Embed in an HTML file, you must add the <a href="https://github.com/25HoursaDay/25Embed/blob/main/latest.js">latest.js</a> file and custom <a href="https://github.com/25HoursaDay/25Embed/blob/main/config.js">config.js</a> file (leave out if you want default settings) in script tags in the head of your file.</p>

<p>Example:</p>

```html
<html>
  <head>
    <!-- Your head content -->
    <script src="path to config file"></script>
    <script src="path to 25Embed file"></script>
  </head>
  <body>
    <!-- Your body content -->
  </body>
</html>
```

Put your [config.js](https://github.com/25HoursaDay/25Embed/blob/main/config.js) file url where it says "path to config file", and put the [25Embed](https://github.com/25HoursaDay/25Embed/blob/main/latest.js) file url where it says "path to 25Embed file".

<h3>Install with Javascript</h3>

If you would like to install 25Embed in your index.js file, you can add the following code:
```javascript
document.head.append(`
  <script src="path to config file"></script>
  <script src="path to 25Embed file"></script>
`);
```
Put your [config.js](https://github.com/25HoursaDay/25Embed/blob/main/config.js) file url where it says "path to config file", and put the [25Embed](https://github.com/25HoursaDay/25Embed/blob/main/latest.js) file url where it says "path to 25Embed file".

<h3>Settings</h3>

The [config.js](https://github.com/25HoursaDay/25Embed/blob/main/config.js) file is the file where your 25Embed settings are held.
If you would like to change your config file to enable/disable the default settings, you must create your own [config.js](https://github.com/25HoursaDay/25Embed/blob/main/config.js) file with the settings adjusted to your liking.
To see a list of all settings and their functions, [click here!]()

<h1>History</h1>
<p>I first thought of the concept of 25Embed back when I was a dumb skid, when I would just embed things into google sites.</p>
<p>I figured there had to be a way to prevent someone from so easily stealing your content like I was doing, but I didn't know how to create something like that at the time.</p>
<p>Fast forward two years, and I now had (some of) the ability to make something like that... so I did.</p>
<p>I now add features and optimize code when I can/want to.</p>

<h1>Similar tools</h1>
<h3>Here are some noteworthy tools similar to 25Embed, just in case you dont want to use mine:</h3>
<p><a href="https://unframed.netlify.app/">Unframed</a>: A friend actually found and told me about this while I was working on 25Embed in class instead of doing work. (I kinda stole the idea of Unframed's UI ngl).</p>

<p><a href="http://unbed.gq/">Unbed</a>:
Basically Unframed but was made for embeds. It's the same concept.
</p>

<h1>Problems and Solutions</h1>
<p>This tool is not perfect under any means, that means it cannot protect from everything, so here I will list various vulnerabilities and ways to further protect your site in hopes that your content will remain safe.</p>
<h3>Vulnerabilities</h3>
<h4>Problem | Solution</h4>
<p>Sandbox iframes | A project I found called <a href="https://github.com/JamesMGreene/sandblaster">Sandblaster</a> may work (although it is a little old)</p>
<p>Outsider scripts that run before 25E | Make sure 25E is the first script ran on your site</p>
<p>Proxies | Some Anti-Proxy products do exist, but almost all of them either dont work very well, need to grab the user's IP, or both. I am currently working on a solution to this problem.</p>
<p>Plain code ripping | Not sure, maybe use your host to run scripts? Idk backend stuff.</p>

<h1>Further Protection</h1>
<p>To further protect your content, you may want to do some of the following:</p>
<p>Add authentication like <a href="https://auth0.com/">Auth0</a>.</p>
<p>Use HTTP headers or meta tags on your site. Many of the settings have better alternatives as HTTP headers and meta tags.</p>
