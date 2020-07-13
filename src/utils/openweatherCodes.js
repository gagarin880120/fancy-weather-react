const codes = {
  d200: 'DayThunderstorm',
  d201: 'DayThunderstorm',
  d202: 'DayThunderstorm',
  d210: 'DayLightning',
  d211: 'DayLightning',
  d212: 'DayLightning',
  d221: 'DayLightning',
  d230: 'DayThunderstorm',
  d231: 'DayThunderstorm',
  d232: 'DayThunderstorm',
  d300: 'DaySprinkle',
  d301: 'DaySprinkle',
  d302: 'DayRain',
  d310: 'DayRain',
  d311: 'DayRain',
  d312: 'DayRain',
  d313: 'DayRain',
  d314: 'DayRain',
  d321: 'DaySprinkle',
  d500: 'DaySprinkle',
  d501: 'DayRain',
  d502: 'DayRain',
  d503: 'DayRain',
  d504: 'DayRain',
  d511: 'DayRainMix',
  d520: 'DayShowers',
  d521: 'DayShowers',
  d522: 'DayShowers',
  d531: 'DayStormShowers',
  d600: 'DaySnow',
  d601: 'DaySleet',
  d602: 'DaySnow',
  d611: 'DayRainMix',
  d612: 'DayRainMix',
  d615: 'DayRainMix',
  d616: 'DayRainMix',
  d620: 'DayRainMix',
  d621: 'DaySnow',
  d622: 'DaySnow',
  d701: 'DayShowers',
  d711: 'Smoke',
  d721: 'DayHaze',
  d731: 'Dust',
  d741: 'DayFog',
  d761: 'Dust',
  d762: 'Dust',
  d781: 'Tornado',
  d800: 'DaySunny',
  d801: 'DayCloudyGusts',
  d802: 'DayCloudyGusts',
  d803: 'DayCloudyGusts',
  d804: 'DaySunnyOvercast',
  d900: 'Tornado',
  d902: 'Hurricane',
  d903: 'SnowflakeCold',
  d904: 'Hot',
  d906: 'DayHail',
  d957: 'StrongWind',
  n200: 'NightAltThunderstorm',
  n201: 'NightAltThunderstorm',
  n202: 'NightAltThunderstorm',
  n210: 'NightAltLightning',
  n211: 'NightAltLightning',
  n212: 'NightAltLightning',
  n221: 'NightAltLightning',
  n230: 'NightAltThunderstorm',
  n231: 'NightAltThunderstorm',
  n232: 'NightAltThunderstorm',
  n300: 'NightAltSprinkle',
  n301: 'NightAltSprinkle',
  n302: 'NightAltRain',
  n310: 'NightAltRain',
  n311: 'NightAltRain',
  n312: 'NightAltRain',
  n313: 'NightAltRain',
  n314: 'NightAltRain',
  n321: 'NightAltSprinkle',
  n500: 'NightAltSprinkle',
  n501: 'NightAltRain',
  n502: 'NightAltRain',
  n503: 'NightAltRain',
  n504: 'NightAltRain',
  n511: 'NightAltRainMix',
  n520: 'NightAltShowers',
  n521: 'NightAltShowers',
  n522: 'NightAltShowers',
  n531: 'NightAltStormShowers',
  n600: 'NightAltSnow',
  n601: 'NightAltSleet',
  n602: 'NightAltSnow',
  n611: 'NightAltRainMix',
  n612: 'NightAltRainMix',
  n615: 'NightAltRainMix',
  n616: 'NightAltRainMix',
  n620: 'NightAltRainMix',
  n621: 'NightAltSnow',
  n622: 'NightAltSnow',
  n701: 'NightAltShowers',
  n711: 'Smoke',
  n721: 'DayHaze',
  n731: 'Dust',
  n741: 'NightFog',
  n761: 'Dust',
  n762: 'Dust',
  n781: 'Tornado',
  n800: 'NightClear',
  n801: 'NightAltCloudyGusts',
  n802: 'NightAltCloudyGusts',
  n803: 'NightAltCloudyGusts',
  n804: 'NightAltCloudy',
  n900: 'Tornado',
  n902: 'Hurricane',
  n903: 'SnowflakeCold',
  n904: 'Hot',
  n906: 'NightAltHail',
  n957: 'StrongWind',
};

export default function convertCodeToName(code) {
  return codes[code];
}