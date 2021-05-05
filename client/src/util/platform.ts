
export enum OperatingSystem {
  Android,
  iOS,
  MacOS,
  Windows,
  Linux,
  Other
}

export function getOperatingSystem(): OperatingSystem {
  const platform = navigator.platform;
  switch (platform) {
    case 'Macintosh':
    case 'MacIntel':
    case 'MacPPC':
    case 'Mac68K':
      return OperatingSystem.MacOS;
    case 'iPhone':
    case 'iPad':
    case 'iPod':
      return OperatingSystem.iOS;
    case 'Win32':
    case 'Win64':
    case 'Windows':
    case 'WinCE':
      return OperatingSystem.Windows;
  }
  const userAgent = navigator.userAgent;
  if (/Android/.test(userAgent)) {
    return OperatingSystem.Android;
  } else if (/Linux/.test(platform)) {
    return OperatingSystem.Linux;
  } else {
    return OperatingSystem.Other;
  }
}

export function isInStandaloneMode() {
  return (window.matchMedia('(display-mode: standalone)').matches)
    || ('standalone' in window.navigator && (window.navigator as any).standalone)
    || document.referrer.includes('android-app://');
}

export function disableTouchSelection() {
  (document.body.style as any)['-webkit-user-select'] = 'none';
}

export function disablePinchZoom() {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
  }
  let content = viewportMeta.getAttribute('content') || '';
  content = content ? content + ', user-scalable=no' : 'user-scalable=no';
  viewportMeta.setAttribute('content', content);
}

export function isMobileDevice(): boolean {
  // use media queries
  return !!window.matchMedia("only screen and (hover: none) and (pointer: coarse)").matches;
}