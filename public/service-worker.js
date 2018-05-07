importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');
console.log("Hello from the custom service worker");
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
console.log(workbox.core);