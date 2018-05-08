importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');
console.log("Hello from the custom service worker");
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
console.log(workbox.core);

const bgSyncPlugin = new workbox.backgroundSync.Plugin(
    'Todo_Post',
    {
        callbacks: {
            requestWillReplay: (request) => {
                console.log("This request will now replay: ", request);
            }
        }
    }
);

const networkOnlyStrategy = new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
});

const networkFirstStrategy = new workbox.strategies.NetworkFirst({
    cacheName: 'dynamic-cache-v1'
});

const route = workbox.routing.registerRoute(
    'http://localhost:8080/todos',
    args => {
        console.log('API hit');
        return networkOnlyStrategy.handle(args);
    },
    'POST'
);

workbox.routing.registerRoute(
    'http://localhost:8080/todos', 
    args => {
        console.log(args);
        return networkFirstStrategy.handle(args)
    },
    'GET'
);