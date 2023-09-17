<!-- Player container element -->
<div id='rmp'/>
<!-- Set up player configuration options -->
<script>
    // Here we pass our MPEG-DASH streaming source
    const src = {
        //dash: &quot;&quot; + id + &quot;&quot;,
        // For older devices and iOS where MPEG-DASH is not supported, we provide a HLS (or MP4) fallback
        hls: &quot;&quot; + id + &quot;&quot;,
    };
    const settings = {
        licenseKey: &#39;Y21hbWNlbXNhcSEqXyVjczl2ZWEwN292PWkyK2NlZDBnZTcyeWVpP3JvbTVkYXNpczMwZGIwQSVfKg==&#39;,
        src: src,
        autoHeightMode: true,
        autoHeightModeRatio: 1.7777777778,
        autoplay: false,
        viewablePlayPause: false,
        preload: &quot;auto&quot;,
        sharing: false,
        gaTrackingId: &quot;UA-143545378-1&quot;,
        skin: &quot;s2&quot;,
   // Let us add a poster frame to our player
      contentMetadata: {
        poster: [
          &#39;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTxwb-qVZKkHduHD-x2Mil6ZxI-acGprtOzAFBGSYfnCXaQ9BvHv7gy5FtI9ZRJA2NK1kLrjquggXPNu8_YNCx6oNc1z73dvmU2NznVWDaMUh49bd8AlK9eTcNR3r8uYP6NYjhkHVBaEM5D-2PyFyZVgZqJAyGcv_9z-u6batVs_dKqat7stv8QVes/s1600/trakteer-qrcode.jpeg&#39;
        ]
      }
};
    const rmp = new RadiantMP(&#39;rmp&#39;);
    rmp.init(settings);

</script>
