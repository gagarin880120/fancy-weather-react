const countries = {
  AF: { en: 'Afghanistan', ru: 'Афганистан' },
  AX: { en: 'Åland Islands', ru: 'Аландские острова' },
  AL: { en: 'Albania', ru: 'Албания' },
  DZ: { en: 'Algeria', ru: 'Алжир' },
  AS: { en: 'American Samoa', ru: 'Американское Самоа' },
  AD: { en: 'Andorra', ru: 'Андорра' },
  AO: { en: 'Angola', ru: 'Ангола' },
  AI: { en: 'Anguilla', ru: 'Ангилья' },
  AQ: { en: 'Antarctica', ru: 'Антарктика' },
  AG: { en: 'Antigua and Barbuda', ru: 'Антигуа и Барбуда' },
  AR: { en: 'Argentina', ru: 'Аргентина' },
  AM: { en: 'Armenia', ru: 'Армения' },
  AW: { en: 'Aruba', ru: 'Аруба' },
  AU: { en: 'Australia', ru: 'Австралия' },
  AT: { en: 'Austria', ru: 'Австрия' },
  AZ: { en: 'Azerbaijan', ru: 'Азербайджан' },
  BS: { en: 'Bahamas', ru: 'Багамские Острова' },
  BH: { en: 'Bahrain', ru: 'Бахрейн' },
  BD: { en: 'Bangladesh', ru: 'Бангладеш' },
  BB: { en: 'Barbados', ru: 'Барбадос' },
  BY: { en: 'Belarus', ru: 'Беларусь' },
  BE: { en: 'Belgium', ru: 'Бельгия' },
  BZ: { en: 'Belize', ru: 'Белиз' },
  BJ: { en: 'Benin', ru: 'Бенин' },
  BM: { en: 'Bermuda', ru: 'Бермуды' },
  BT: { en: 'Bhutan', ru: 'Бутан' },
  BO: { en: 'Bolivia', ru: 'Боливия' },
  BQ: { en: 'Bonaire, Sint Eustatius and Saba', ru: 'Бонэйр, Синт-Эстатиус и Саба' },
  BA: { en: 'Bosnia and Herzegovina', ru: 'Босния и Герцеговина' },
  BW: { en: 'Botswana', ru: 'Ботсвана' },
  BV: { en: 'Bouvet Island', ru: 'Остров Буве' },
  BR: { en: 'Brazil', ru: 'Бразилия' },
  IO: { en: 'British Indian Ocean Territory', ru: 'Британская территория в Индийском океане' },
  BN: { en: 'Brunei Darussalam', ru: 'Бруней' },
  BG: { en: 'Bulgaria', ru: 'Болгария' },
  BF: { en: 'Burkina Faso', ru: 'Буркина-Фасо' },
  BI: { en: 'Burundi', ru: 'Бурунди' },
  CV: { en: 'Cabo Verde', ru: 'Кабо-Верде' },
  KH: { en: 'Cambodia', ru: 'Камбоджа' },
  CM: { en: 'Cameroon', ru: 'Камерун' },
  CA: { en: 'Canada', ru: 'Канада' },
  KY: { en: 'Cayman Islands', ru: 'Острова Кайман' },
  CF: { en: 'Central African Republic', ru: 'ЦАР' },
  TD: { en: 'Chad', ru: 'Чад' },
  CL: { en: 'Chile', ru: 'Чили' },
  CN: { en: 'China', ru: 'Китай' },
  CX: { en: 'Christmas Island', ru: 'Остров Рождества' },
  CC: { en: 'Cocos (Keeling) Islands', ru: 'Кокосовые острова' },
  CO: { en: 'Colombia', ru: 'Колумбия' },
  KM: { en: 'Comoros', ru: 'Коморы' },
  CG: { en: 'Congo', ru: 'Республика Конго' },
  CD: { en: 'Congo, Democratic Republic of the', ru: 'ДР Конго' },
  CK: { en: 'Cook Islands', ru: 'Острова Кука' },
  CR: { en: 'Costa Rica', ru: 'Коста-Рика' },
  CI: { en: "Côte d'Ivoire", ru: 'Кот-д’Ивуар' },
  HR: { en: 'Croatia', ru: 'Хорватия' },
  CU: { en: 'Cuba', ru: 'Куба' },
  CW: { en: 'Curaçao', ru: 'Кюрасао' },
  CY: { en: 'Cyprus', ru: 'Кипр' },
  CZ: { en: 'Czechia', ru: 'Чехия' },
  DK: { en: 'Denmark', ru: 'Дания' },
  DJ: { en: 'Djibouti', ru: 'Джибути' },
  DM: { en: 'Dominica', ru: 'Доминика' },
  DO: { en: 'Dominican Republic', ru: 'Доминиканская Республика' },
  EC: { en: 'Ecuador', ru: 'Эквадор' },
  EG: { en: 'Egypt', ru: 'Египет' },
  SV: { en: 'El Salvador', ru: 'Сальвадор' },
  GQ: { en: 'Equatorial Guinea', ru: 'Экваториальная Гвинея' },
  ER: { en: 'Eritrea', ru: 'Эритрея' },
  EE: { en: 'Estonia', ru: 'Эстония' },
  SZ: { en: 'Eswatini', ru: 'Эсватини' },
  ET: { en: 'Ethiopia', ru: 'Эфиопия' },
  FK: { en: 'Falkland Islands (Malvinas)', ru: 'Фолклендские острова' },
  FO: { en: 'Faroe Islands', ru: 'Фарерские острова' },
  FJ: { en: 'Fiji', ru: 'Фиджи' },
  FI: { en: 'Finland', ru: 'Финляндия' },
  FR: { en: 'France', ru: 'Франция' },
  GF: { en: 'French Guiana', ru: 'Гвиана' },
  PF: { en: 'French Polynesia', ru: 'Французская Полинезия' },
  TF: { en: 'French Southern Territories', ru: 'Французские Южные и Антарктические территории' },
  GA: { en: 'Gabon', ru: 'Габон' },
  GM: { en: 'Gambia', ru: 'Гамбия' },
  GE: { en: 'Georgia', ru: 'Грузия' },
  DE: { en: 'Germany', ru: 'Германия' },
  GH: { en: 'Ghana', ru: 'Гана' },
  GI: { en: 'Gibraltar', ru: 'Гибралтар' },
  GR: { en: 'Greece', ru: 'Греция' },
  GL: { en: 'Greenland', ru: 'Гренландия' },
  GD: { en: 'Grenada', ru: 'Гренада' },
  GP: { en: 'Guadeloupe', ru: 'Гваделупа' },
  GU: { en: 'Guam', ru: 'Гуам' },
  GT: { en: 'Guatemala', ru: 'Гватемала' },
  GG: { en: 'Guernsey', ru: 'Гернси' },
  GN: { en: 'Guinea', ru: 'Гвинея' },
  GW: { en: 'Guinea-Bissau', ru: 'Гвинея-Бисау' },
  GY: { en: 'Guyana', ru: 'Гайана' },
  HT: { en: 'Haiti', ru: 'Гаити' },
  HM: { en: 'Heard Island and McDonald Islands', ru: 'Херд и Макдональд' },
  VA: { en: 'Vatican City', ru: 'Ватикан' },
  HN: { en: 'Honduras', ru: 'Гондурас' },
  HK: { en: 'Hong Kong', ru: 'Гонконг' },
  HU: { en: 'Hungary', ru: 'Венгрия' },
  IS: { en: 'Iceland', ru: 'Исландия' },
  IN: { en: 'India', ru: 'Индия' },
  ID: { en: 'Indonesia', ru: 'Индонезия' },
  IR: { en: 'Iran', ru: 'Иран' },
  IQ: { en: 'Iraq', ru: 'Ирак' },
  IE: { en: 'Ireland', ru: 'Ирландия' },
  IM: { en: 'Isle of Man', ru: 'Остров Мэн' },
  IL: { en: 'Israel', ru: 'Израиль' },
  IT: { en: 'Italy', ru: 'Италия' },
  JM: { en: 'Jamaica', ru: 'Ямайка' },
  JP: { en: 'Japan', ru: 'Япония' },
  JE: { en: 'Jersey', ru: 'Джерси' },
  JO: { en: 'Jordan', ru: 'Иордания' },
  KZ: { en: 'Kazakhstan', ru: 'Казахстан' },
  KE: { en: 'Kenya', ru: 'Кения' },
  KI: { en: 'Kiribati', ru: 'Кирибати' },
  KP: { en: "Democratic People's Republic of Korea", ru: 'КНДР' },
  KR: { en: 'Republic of Korea', ru: 'Республика Корея' },
  KW: { en: 'Kuwait', ru: 'Кувейт' },
  KG: { en: 'Kyrgyzstan', ru: 'Киргизия' },
  LA: { en: "Lao People's Democratic Republic", ru: 'Лаос' },
  LV: { en: 'Latvia', ru: 'Латвия' },
  LB: { en: 'Lebanon', ru: 'Ливан' },
  LS: { en: 'Lesotho', ru: 'Лесото' },
  LR: { en: 'Liberia', ru: 'Либерия' },
  LY: { en: 'Libya', ru: 'Ливия' },
  LI: { en: 'Liechtenstein', ru: 'Лихтенштейн' },
  LT: { en: 'Lithuania', ru: 'Литва' },
  LU: { en: 'Luxembourg', ru: 'Люксембург' },
  MO: { en: 'Macao', ru: 'Макао' },
  MG: { en: 'Madagascar', ru: 'Мадагаскар' },
  MW: { en: 'Malawi', ru: 'Малави' },
  MY: { en: 'Malaysia', ru: 'Малайзия' },
  MV: { en: 'Maldives', ru: 'Мальдивы' },
  ML: { en: 'Mali', ru: 'Мали' },
  MT: { en: 'Malta', ru: 'Мальта' },
  MH: { en: 'Marshall Islands', ru: 'Маршалловы Острова' },
  MQ: { en: 'Martinique', ru: 'Мартиника' },
  MR: { en: 'Mauritania', ru: 'Мавритания' },
  MU: { en: 'Mauritius', ru: 'Маврикий' },
  YT: { en: 'Mayotte', ru: 'Майотта' },
  MX: { en: 'Mexico', ru: 'Мексика' },
  FM: { en: 'Micronesia', ru: 'Микронезия' },
  MD: { en: 'Moldova', ru: 'Молдавия' },
  MC: { en: 'Monaco', ru: 'Монако' },
  MN: { en: 'Mongolia', ru: 'Монголия' },
  ME: { en: 'Montenegro', ru: 'Черногория' },
  MS: { en: 'Montserrat', ru: 'Монтсеррат' },
  MA: { en: 'Morocco', ru: 'Марокко' },
  MZ: { en: 'Mozambique', ru: 'Мозамбик' },
  MM: { en: 'Myanmar', ru: 'Мьянма' },
  NA: { en: 'Namibia', ru: 'Намибия' },
  NR: { en: 'Nauru', ru: 'Науру' },
  NP: { en: 'Nepal', ru: 'Непал' },
  NL: { en: 'Netherlands', ru: 'Нидерланды' },
  NC: { en: 'New Caledonia', ru: 'Новая Каледония' },
  NZ: { en: 'New Zealand', ru: 'Новая Зеландия' },
  NI: { en: 'Nicaragua', ru: 'Никарагуа' },
  NE: { en: 'Niger', ru: 'Нигер' },
  NG: { en: 'Nigeria', ru: 'Нигерия' },
  NU: { en: 'Niue', ru: 'Ниуэ' },
  NF: { en: 'Norfolk Island', ru: 'Остров Норфолк' },
  MK: { en: 'North Macedonia', ru: 'Северная Македония' },
  MP: { en: 'Northern Mariana Islands', ru: 'Северные Марианские Острова' },
  NO: { en: 'Norway', ru: 'Норвегия' },
  OM: { en: 'Oman', ru: 'Оман' },
  PK: { en: 'Pakistan', ru: 'Пакистан' },
  PW: { en: 'Palau', ru: 'Палау' },
  PS: { en: 'State of Palestine', ru: 'Государство Палестина' },
  PA: { en: 'Panama', ru: 'Панама' },
  PG: { en: 'Papua New Guinea', ru: 'Папуа — Новая Гвинея' },
  PY: { en: 'Paraguay', ru: 'Парагвай' },
  PE: { en: 'Peru', ru: 'Перу' },
  PH: { en: 'Philippines', ru: 'Филиппины' },
  PN: { en: 'Pitcairn', ru: 'Острова Питкэрн' },
  PL: { en: 'Poland', ru: 'Польша' },
  PT: { en: 'Portugal', ru: 'Португалия' },
  PR: { en: 'Puerto Rico', ru: 'Пуэрто-Рико' },
  QA: { en: 'Qatar', ru: 'Катар' },
  RE: { en: 'Réunion', ru: 'Реюньон' },
  RO: { en: 'Romania', ru: 'Румыния' },
  RU: { en: 'Russia', ru: 'Россия' },
  RW: { en: 'Rwanda', ru: 'Руанда' },
  BL: { en: 'Saint Barthélemy', ru: 'Сен-Бартелеми (Карибы)' },
  SH: { en: 'Saint Helena, Ascension and Tristan da Cunha', ru: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья' },
  KN: { en: 'Saint Kitts and Nevis', ru: 'Сент-Китс и Невис' },
  LC: { en: 'Saint Lucia', ru: 'Сент-Люсия' },
  MF: { en: 'Saint Martin', ru: 'Сен-Мартен' },
  PM: { en: 'Saint Pierre and Miquelon', ru: 'Сен-Пьер и Микелон' },
  VC: { en: 'Saint Vincent and the Grenadines', ru: 'Сент-Винсент и Гренадины' },
  WS: { en: 'Samoa', ru: 'Самоа' },
  SM: { en: 'San Marino', ru: 'Сан-Марино' },
  ST: { en: 'Sao Tome and Principe', ru: 'Сан-Томе и Принсипи' },
  SA: { en: 'Saudi Arabia', ru: 'Саудовская Аравия' },
  SN: { en: 'Senegal', ru: 'Сенегал' },
  RS: { en: 'Serbia', ru: 'Сербия' },
  SC: { en: 'Seychelles', ru: 'Сейшельские Острова' },
  SL: { en: 'Sierra Leone', ru: 'Сьерра-Леоне' },
  SG: { en: 'Singapore', ru: 'Сингапур' },
  SX: { en: 'Sint Maarten', ru: 'Синт-Мартен' },
  SK: { en: 'Slovakia', ru: 'Словакия' },
  SI: { en: 'Slovenia', ru: 'Словения' },
  SB: { en: 'Solomon Islands', ru: 'Соломоновы Острова' },
  SO: { en: 'Somalia', ru: 'Сомали' },
  ZA: { en: 'South Africa', ru: 'ЮАР' },
  GS: { en: 'South Georgia and the South Sandwich Islands', ru: 'Южная Георгия и Южные Сандвичевы Острова' },
  SS: { en: 'South Sudan', ru: 'Южный Судан' },
  ES: { en: 'Spain', ru: 'Испания' },
  LK: { en: 'Sri Lanka', ru: 'Шри-Ланка' },
  SD: { en: 'Sudan', ru: 'Судан' },
  SR: { en: 'Suriname', ru: 'Суринам' },
  SJ: { en: 'Svalbard and Jan Mayen', ru: 'Шпицберген и Ян-Майен' },
  SE: { en: 'Sweden', ru: 'Швеция' },
  CH: { en: 'Switzerland', ru: 'Швейцария' },
  SY: { en: 'Syrian Arab Republic', ru: 'Сирия' },
  TW: { en: 'Republic of China (Taiwan)', ru: 'Китайская Республика (Тайвань)' },
  TJ: { en: 'Tajikistan', ru: 'Таджикистан' },
  TZ: { en: 'Tanzania', ru: 'Танзания' },
  TH: { en: 'Thailand', ru: 'Таиланд' },
  TL: { en: 'Timor-Leste', ru: 'Восточный Тимор' },
  TG: { en: 'Togo', ru: 'Того' },
  TK: { en: 'Tokelau', ru: 'Токелау' },
  TO: { en: 'Tonga', ru: 'Тонга' },
  TT: { en: 'Trinidad and Tobago', ru: 'Тринидад и Тобаго' },
  TN: { en: 'Tunisia', ru: 'Тунис' },
  TR: { en: 'Turkey', ru: 'Турция' },
  TM: { en: 'Turkmenistan', ru: 'Туркмения' },
  TC: { en: 'Turks and Caicos Islands', ru: 'Теркс и Кайкос' },
  TV: { en: 'Tuvalu', ru: 'Тувалу' },
  UG: { en: 'Uganda', ru: 'Уганда' },
  UA: { en: 'Ukraine', ru: 'Украина' },
  AE: { en: 'United Arab Emirates', ru: 'ОАЭ' },
  GB: {
    en: 'United Kingdom of Great Britain and Northern Ireland',
    ru: 'Великобритания',
  },
  US: { en: 'United States of America', ru: 'США' },
  UM: { en: 'United States Minor Outlying Islands', ru: 'Внешние малые острова США' },
  UY: { en: 'Uruguay', ru: 'Уругвай' },
  UZ: { en: 'Uzbekistan', ru: 'Узбекистан' },
  VU: { en: 'Vanuatu', ru: 'Вануату' },
  VE: { en: 'Venezuela', ru: 'Венесуэла' },
  VN: { en: 'Vietnam', ru: 'Вьетнам' },
  VG: { en: 'Virgin Islands (British)', ru: 'Виргинские Острова (Великобритания)' },
  VI: { en: 'Virgin Islands (U.S.)', ru: 'Виргинские Острова (США)' },
  WF: { en: 'Wallis and Futuna', ru: 'Уоллис и Футуна' },
  EH: { en: 'Western Sahara', ru: 'САДР' },
  YE: { en: 'Yemen', ru: 'Йемен' },
  ZM: { en: 'Zambia', ru: 'Замбия' },
  ZW: { en: 'Zimbabwe', ru: 'Зимбабве' },
};

export default function convertCodeToCountryName(code, lang) {
  return countries[code][lang];
}
