module.exports = {
    //配置pwa应用
    pwa: {
        name: "Leepool",
        themeColor: "#2f4053",
        msTileColor: "#fff",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        // configure the workbox plugin (GenerateSW or InjectManifest)
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: "./src/service-worker.js",
            importWorkboxFrom: "disabled",
            importScripts: "https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js"
            // ...other Workbox options...
        }
    }
};