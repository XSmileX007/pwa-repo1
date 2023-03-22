var myCacheName = "myPWACache";

const addResourcesToCache = async (resources) => {
    console.log("Add to cache ..");
    const cache = await caches.open(myCacheName);
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    console.log("Installing ... ");
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/pwa-repo1/css/style.css",
            "/app.js",
            "/pwa-repo1/media/icons/icon-32.png",
            "/pwa-repo1/media/icons/icon-512.png",
        ])
    );
});