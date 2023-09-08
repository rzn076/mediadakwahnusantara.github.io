function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7E-mqArwbGHOcqaFcbT7fKjQVSJjFd4sk_3Rlc9hqxBO3QRTkyipuPFD21hAA92tz_r8kFp4K7qHEvI5YSQzIxyP9iHkKofOf9zRKZFWtIla-XduwY1kCZi088V5Z5ha_-eNNUEmtNL_E35AT7irgrQRlNI__J0Hd_5OamS1Xcm1EcLy6avFzPTjLVE8/s1600/footem.jpg',
        position: 'bottom-Left',
        watermark: "https://blogger.googleusercontent.com/img/a/AVvXsEjKBinP-w8AqewBy_c_2SOr-mGjd9PNLhtxCQjlnTmW_XlJSJWPEDoXus_PC6t06NlyPB2qdzCc1shI5ENFL62I7FMtBPRR5nZA0F-ymambDJyxkfTr6dfGyixXZA4DUzXNVESD94SK49kAS62h4YTt0XbVgEtPSVxYJ-bALueIZeM3YPIGztWAkRE656_e=s176",
        player_watermark_link: "https://www.footem.site",
        width: '100%',
        height: '100%',
        fullscreenEnabled: 'true',
        hideMediaControl: 'false',
        plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback],

        chromecast: {
            appId: '9DFB77C0',
            media: {
                type: ChromecastPlugin.Movie,
                title: 'Player HLS - DASH',
            },
        },

        shakaConfiguration: {
            preferredAudioLanguage: 'en-US',
            drm: {
                servers: {
                    'com.widevine.alpha': license
                }
            },
            streaming: {
                rebufferingGoal: 15
            }
        },
        shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
        },

    });

    document.title = "Watching: " + url;

}

playM3u8(window.location.href.split("#")[1], window.location.href.split("=")[1])
