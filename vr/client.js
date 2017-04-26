// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

import {setCustomizedVideoPlayer, BasicVideoPlayer} from 'OVRVideo';
import videojs from 'video.js';
import * as HLS from 'videojs-contrib-hls';
/**
 * The HLS video player
 */
class HLSVideoPlayer extends BasicVideoPlayer {
  constructor() {
    super();
    this.source = document.createElement('source');
    this.videoElement.appendChild(this.source);
  }

  initializeVideo(src: string, metaData: any) {
    console.log(src);
    this.source.setAttribute('src', src);
    this.source.setAttribute('type', 'application/x-mpegURL');
    this.videoElement.crossOrigin = 'anonymous';
    this._bindMediaEvents();
    this.player = videojs(this.videoElement);
  }
}


function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'WelcomeToVR', parent, {
    // Add custom options here
    ...options,
  });

  setCustomizedVideoPlayer(HLSVideoPlayer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
