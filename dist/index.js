'use strict';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });

// src/measurements.ts
var measurements = {
  ns: 1e-6,
  us: 1e-3,
  ms: 1,
  s: 1e3,
  m: 6e4,
  h: 36e5,
  d: 864e5,
  w: 6048e5,
  mo: 2628e6,
  // 28 days
  y: 31536e6,
  // 365 days
  dec: 31536e7,
  // 10 years
  c: 31536e8,
  // 100 years
  kyr: 31536e9
  // 1000 years
};

// src/locales/de.ts
var de_default = {
  decimal: ",",
  and: "und",
  units: [
    {
      key: "ns",
      name: (c) => c === 1 ? "Nanosekunde" : "Nanosekunden",
      matches: ["ns", "nanos", "nanosekunde", "nanosekunden"]
    },
    {
      key: "us",
      name: (c) => c === 1 ? "Mikrosekunde" : "Mikrosekunden",
      matches: ["us", "mk", "mikrosekunde", "mikrosekunden", "mikros"]
    },
    {
      key: "ms",
      name: (c) => c === 1 ? "Millisekunde" : "Millisekunden",
      matches: ["ms", "ml", "mi", "millisekunde", "millisekunden", "millis"]
    },
    {
      key: "s",
      name: (c) => c === 1 ? "Sekunde" : "Sekunden",
      matches: ["s", "sekunde", "sekunden", "sek", "seks"]
    },
    {
      key: "m",
      name: (c) => c === 1 ? "Minute" : "Minuten",
      matches: ["m", "minute", "minuten", "min", "mins"]
    },
    {
      key: "h",
      name: (c) => c === 1 ? "Stunde" : "Stunden",
      matches: ["h", "stunde", "stunden", "st"]
    },
    {
      key: "d",
      name: (c) => c === 1 ? "Tag" : "Tage",
      matches: ["d", "t", "tag", "tage"]
    },
    {
      key: "w",
      name: (c) => c === 1 ? "Woche" : "Wochen",
      matches: ["w", "wo", "woche", "wochen"]
    },
    {
      key: "mo",
      name: (c) => c === 1 ? "Monat" : "Monate",
      matches: ["mo", "monat", "monate"]
    },
    {
      key: "y",
      name: (c) => c === 1 ? "Jahr" : "Jahre",
      matches: ["y", "a", "j", "jahr", "jahre"]
    },
    {
      key: "dec",
      name: (c) => c === 1 ? "Jahrzehnt" : "Jahrzehnte",
      abbreviation: "Jz.",
      matches: ["jz", "jahrzehnt", "jahrzehnte"]
    },
    {
      key: "c",
      name: (c) => c === 1 ? "Jahrhundert" : "Jahrhunderte",
      abbreviation: "Jh.",
      matches: ["c", "jh", "jhd", "jahrhundert", "jahrhunderte"]
    },
    {
      key: "kyr",
      name: (c) => c === 1 ? "Jahrtausend" : "Jahrtausende",
      abbreviation: "Jt.",
      matches: ["jt", "jtd", "jtsd", "jahrt", "jahrtausend", "jahrtausende"]
    }
  ]
};

// src/locales/en.ts
var en_default = {
  decimal: ".",
  and: "and",
  units: [
    {
      key: "ns",
      name: (c) => c === 1 ? "nanosecond" : "nanoseconds",
      abbreviation: "ns",
      matches: ["ns", "nanosecond", "nanoseconds"]
    },
    {
      key: "us",
      name: (c) => c === 1 ? "microsecond" : "microseconds",
      abbreviation: "\xB5s",
      matches: ["\xB5s", "us", "microsecond", "microseconds"]
    },
    {
      key: "ms",
      name: (c) => c === 1 ? "millisecond" : "milliseconds",
      abbreviation: "ms",
      matches: ["ms", "millisecond", "milliseconds", "msec", "msecs"]
    },
    {
      key: "s",
      name: (c) => c === 1 ? "second" : "seconds",
      abbreviation: "s",
      matches: ["s", "second", "seconds", "sec", "secs"]
    },
    {
      key: "m",
      name: (c) => c === 1 ? "minute" : "minutes",
      abbreviation: "m",
      matches: ["m", "minute", "minutes", "min", "mins"]
    },
    {
      key: "h",
      name: (c) => c === 1 ? "hour" : "hours",
      abbreviation: "h",
      matches: ["h", "hour", "hours", "hr", "hrs"]
    },
    {
      key: "d",
      name: (c) => c === 1 ? "day" : "days",
      abbreviation: "d",
      matches: ["d", "day", "days"]
    },
    {
      key: "w",
      name: (c) => c === 1 ? "week" : "weeks",
      abbreviation: "w",
      matches: ["w", "week", "weeks", "wk", "wks"]
    },
    {
      key: "mo",
      name: (c) => c === 1 ? "month" : "months",
      abbreviation: "mo",
      matches: ["mo", "month", "months", "mth", "mths", "mnth", "mnths"]
    },
    {
      key: "y",
      name: (c) => c === 1 ? "year" : "years",
      abbreviation: "y",
      matches: ["y", "year", "years", "yr", "yrs"]
    },
    {
      key: "dec",
      name: (c) => c === 1 ? "decade" : "decades",
      abbreviation: "dec",
      matches: ["dec", "decade", "decades"]
    },
    {
      key: "c",
      name: (c) => c === 1 ? "century" : "centuries",
      abbreviation: "c",
      matches: ["c", "century", "centuries", "hundred years"]
    },
    {
      key: "kyr",
      name: (c) => c === 1 ? "millennium" : "millennia",
      abbreviation: "kyr",
      matches: ["kyr", "millennium", "millenniums", "thousand years"]
    }
  ]
};

// src/locales/mi.ts
var mi_default = {
  decimal: ".",
  and: "me te",
  units: [
    {
      key: "ns",
      name: "h\u0113kona nanomiri",
      matches: [
        "h\u0113kona nanomiri",
        "h\u0113konananomiri",
        "hekona nanomiri",
        "hekonananomiri"
      ]
    },
    {
      key: "us",
      name: "h\u0113kona miriona",
      matches: [
        "h\u0113kona miriona",
        "h\u0113konamiriona",
        "hekona miriona",
        "hekonamiriona"
      ]
    },
    {
      key: "ms",
      name: "h\u0113kona miri",
      matches: ["h\u0113kona miri", "k\u0101konamiri", "hekona miri", "hekonamiri"]
    },
    {
      key: "s",
      name: "h\u0113kona",
      matches: ["h\u0113kona", "hekona"]
    },
    {
      key: "m",
      name: "meneti",
      matches: ["meneti"]
    },
    {
      key: "h",
      name: "h\u0101ora",
      matches: ["h\u0101ora", "haora"]
    },
    {
      key: "d",
      name: "r\u0101",
      matches: ["r\u0101", "ra"]
    },
    {
      key: "w",
      name: "wiki",
      matches: ["wiki"]
    },
    {
      key: "mo",
      name: "marama",
      matches: ["marama"]
    },
    {
      key: "y",
      name: "tau",
      matches: ["tau", "houanga"]
    },
    {
      key: "dec",
      name: "tekau tau",
      matches: ["tekautau", "tekau tau"]
    },
    {
      key: "c",
      name: "rau tau",
      matches: ["rautau", "rau tau"]
    },
    {
      key: "kyr",
      name: "mano tau",
      matches: ["manotau", "mano tau"]
    }
  ]
};

// src/locales/ru.ts
function formatTime(value, unit) {
  let words = {
    \u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B: ["\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434"],
    \u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B: ["\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434"],
    \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B: ["\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434"],
    \u0441\u0435\u043A\u0443\u043D\u0434\u044B: ["\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u0441\u0435\u043A\u0443\u043D\u0434"],
    \u043C\u0438\u043D\u0443\u0442\u044B: ["\u043C\u0438\u043D\u0443\u0442\u0430", "\u043C\u0438\u043D\u0443\u0442\u044B", "\u043C\u0438\u043D\u0443\u0442"],
    \u0447\u0430\u0441\u044B: ["\u0447\u0430\u0441", "\u0447\u0430\u0441\u0430", "\u0447\u0430\u0441\u043E\u0432"],
    \u0434\u043D\u0438: ["\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439"],
    \u043D\u0435\u0434\u0435\u043B\u0438: ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043D\u0435\u0434\u0435\u043B\u0438", "\u043D\u0435\u0434\u0435\u043B\u044C"],
    \u043C\u0435\u0441\u044F\u0446\u044B: ["\u043C\u0435\u0441\u044F\u0446", "\u043C\u0435\u0441\u044F\u0446\u0430", "\u043C\u0435\u0441\u044F\u0446\u0435\u0432"],
    \u0433\u043E\u0434\u044B: ["\u0433\u043E\u0434", "\u0433\u043E\u0434\u0430", "\u043B\u0435\u0442"],
    \u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u044F: ["\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u0435", "\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u044F", "\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u0439"],
    \u0432\u0435\u043A\u0430: ["\u0432\u0435\u043A", "\u0432\u0435\u043A\u0430", "\u0432\u0435\u043A\u043E\u0432"],
    \u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u044F: ["\u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u0435", "\u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u044F", "\u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u0439"]
  }[unit], lastDigit = value % 10, lastTwoDigits = value % 100, word;
  return lastTwoDigits >= 11 && lastTwoDigits <= 19 ? word = words[2] : lastDigit === 1 ? word = words[0] : lastDigit >= 2 && lastDigit <= 4 ? word = words[1] : word = words[2], `${word}`;
}
__name(formatTime, "formatTime");
var ru_default = {
  decimal: ".",
  and: "\u0438",
  units: [
    {
      key: "ns",
      name: (c) => formatTime(c, "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
      abbreviation: "\u043D\u0441",
      matches: ["\u043D\u0441", "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434", "\u043D\u0430\u043D\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B"]
    },
    {
      key: "us",
      name: (c) => formatTime(c, "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
      abbreviation: "\u043C\u043A\u0441",
      matches: ["\u043C\u043A\u0441", "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434", "\u043C\u0438\u043A\u0440\u043E\u0441\u0435\u043A\u0443\u043D\u0434\u044B"]
    },
    {
      key: "ms",
      name: (c) => formatTime(c, "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
      abbreviation: "\u043C\u0441",
      matches: ["\u043C\u0441", "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434", "\u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u043C\u0441\u0435\u043A"]
    },
    {
      key: "s",
      name: (c) => formatTime(c, "\u0441\u0435\u043A\u0443\u043D\u0434\u044B"),
      abbreviation: "\u0441",
      matches: ["\u0441", "\u0441\u0435\u043A\u0443\u043D\u0434\u0430", "\u0441\u0435\u043A\u0443\u043D\u0434", "\u0441\u0435\u043A\u0443\u043D\u0434\u044B", "\u0441\u0435\u043A"]
    },
    {
      key: "m",
      name: (c) => formatTime(c, "\u043C\u0438\u043D\u0443\u0442\u044B"),
      abbreviation: "\u043C",
      matches: ["\u043C", "\u043C\u0438\u043D\u0443\u0442\u0430", "\u043C\u0438\u043D\u0443\u0442\u044B", "\u043C\u0438\u043D\u0443\u0442", "\u043C\u0438\u043D"]
    },
    {
      key: "h",
      name: (c) => formatTime(c, "\u0447\u0430\u0441\u044B"),
      abbreviation: "\u0447",
      matches: ["\u0447", "\u0447\u0430\u0441", "\u0447\u0430\u0441\u0430", "\u0447\u0430\u0441\u043E\u0432"]
    },
    {
      key: "d",
      name: (c) => formatTime(c, "\u0434\u043D\u0438"),
      abbreviation: "\u0434",
      matches: ["\u0434", "\u0434\u0435\u043D\u044C", "\u0434\u043D\u044F", "\u0434\u043D\u0435\u0439"]
    },
    {
      key: "w",
      name: (c) => formatTime(c, "\u043D\u0435\u0434\u0435\u043B\u0438"),
      abbreviation: "\u043D",
      matches: ["\u043D", "\u043D\u0435\u0434\u0435\u043B\u044F", "\u043D\u0435\u0434\u0435\u043B\u0438", "\u043D\u0435\u0434\u0435\u043B\u044C"]
    },
    {
      key: "mo",
      name: (c) => formatTime(c, "\u043C\u0435\u0441\u044F\u0446\u044B"),
      abbreviation: "\u043C\u0435\u0441",
      matches: ["\u043C\u0435\u0441", "\u043C\u0435\u0441\u044F\u0446", "\u043C\u0435\u0441\u044F\u0446\u0430", "\u043C\u0435\u0441\u044F\u0446\u0435\u0432"]
    },
    {
      key: "y",
      name: (c) => formatTime(c, "\u0433\u043E\u0434\u044B"),
      abbreviation: "\u0433",
      matches: ["\u0433", "\u0433\u043E\u0434", "\u0433\u043E\u0434\u0430", "\u043B\u0435\u0442", "\u043B"]
    },
    {
      key: "dec",
      name: (c) => formatTime(c, "\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u044F"),
      abbreviation: "\u0434\u0441\u043B",
      matches: ["\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u0435", "\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u044F", "\u0434\u0435\u0441\u044F\u0442\u0438\u043B\u0435\u0442\u0438\u0439", "\u0434\u0435\u0441\u044F\u0442\u043A\u043E\u0432 \u043B\u0435\u0442", "\u0434\u0435\u0441\u044F\u0442\u043A\u0430 \u043B\u0435\u0442", "\u0434\u0435\u0441\u044F\u0442\u043E\u043A \u043B\u0435\u0442"]
    },
    {
      key: "c",
      name: (c) => formatTime(c, "\u0432\u0435\u043A\u0430"),
      abbreviation: "\u0432\u043A",
      matches: ["\u0432\u0435\u043A", "\u0432\u0435\u043A\u0430", "\u0432\u0435\u043A\u043E\u0432"]
    },
    {
      key: "kyr",
      name: (c) => formatTime(c, "\u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u044F"),
      abbreviation: "\u0442\u044B\u0441",
      matches: ["\u0442\u044B\u0441", "\u0442\u044B\u0441\u044F\u0447\u0435\u043B\u0435\u0442\u0438\u0435", "\u0442\u044B\u0441\u044F\u0447\u0430\u043B\u0435\u0442\u0438\u044F", "\u0442\u044B\u0441\u044F\u0447\u0430\u043B\u0435\u0442\u0438\u0439", "\u0442\u044B\u0441\u044F\u0447\u0430 \u043B\u0435\u0442", "\u0442\u044B\u0441\u044F\u0447\u0438 \u043B\u0435\u0442", "\u0442\u044B\u0441\u044F\u0447 \u043B\u0435\u0442"]
    }
  ]
};

// src/languages.ts
var languages = { en: en_default, de: de_default, mi: mi_default, ru: ru_default };
function isLanguageKey(value) {
  return typeof value == "string" && value in languages;
}
__name(isLanguageKey, "isLanguageKey");
var makeLanguageOptionsCache = /* @__PURE__ */ new Map();
function makeLanguageOptions(key) {
  let language = languages[key];
  if (!language)
    throw new Error(`Language for key "${key}" not found`);
  let andValue = language.and, decimalSeparator = language.decimal, thousandsSeparator = decimalSeparator === "." ? "," : ".", matcherRegex = new RegExp(
    // biome-ignore lint/style/useTemplate: Better readability
    `[-+*/]+|[()]|(?![${decimalSeparator}${thousandsSeparator}])[\\d${decimalSeparator}${thousandsSeparator}]+|(?<=\\s|\\d)(` + // Units
    language.units.flatMap(({ matches }) => matches).sort((a, b) => b.length - a.length).join("|") + ")",
    "gi"
  ), units = language.units.reduce((all, cur) => {
    for (let match of [...cur.matches, cur.key])
      all[match] = Object.assign(cur, { ms: measurements[cur.key] });
    return all;
  }, {});
  return {
    key,
    decimalSeparator,
    thousandsSeparator,
    supportsAbbreviations: language.units.every((unit) => "abbreviation" in unit),
    andValue,
    matcherRegex,
    units
  };
}
__name(makeLanguageOptions, "makeLanguageOptions");
function getLanguageOptions(key) {
  let options = makeLanguageOptionsCache.get(key);
  return options || (options = makeLanguageOptions(key), makeLanguageOptionsCache.set(key, options)), options;
}
__name(getLanguageOptions, "getLanguageOptions");
var defaultLanguageOptions = makeLanguageOptions("en");

// src/format.ts
var defaultFormatOptions = {
  includeMs: !1,
  includeSubMs: !1,
  insertCommas: !1,
  shortFormat: !1,
  roundUp: !1
};
function format(input, options = defaultFormatOptions, language = defaultLanguageOptions) {
  let isNegative = input < 0;
  isNegative && (input *= -1);
  let resultPrefix = isNegative ? "-" : "";
  if (!options.includeMs && !options.includeSubMs && input < 1e3)
    return null;
  let parsedTime = parseTime(
    input,
    options.includeMs,
    options.includeSubMs || options.roundUp
  ), timeEntries = [];
  for (let key in parsedTime) {
    let value = parsedTime[key];
    value > 0 && timeEntries.push([key, value]);
  }
  if (timeEntries.length === 0)
    return null;
  let useShort = options.shortFormat && language.supportsAbbreviations;
  if (options.roundUp) {
    let highestUnit = language.units[timeEntries[0][0]], totalValue = timeEntries[0][1];
    for (let i = timeEntries.length - 2; i >= 0; i--) {
      let [key, value] = timeEntries[i];
      value * language.units[key].ms > 0 && (key === highestUnit.key ? totalValue += 1 : timeEntries[i][1] += 1);
    }
    return addThousandsSeparators(
      resultPrefix + formatResult(totalValue, highestUnit, useShort),
      language.thousandsSeparator,
      totalValue >= 1e3
    );
  }
  let timeStrings = timeEntries.map(([key, value]) => formatResult(value, language.units[key], useShort)), totalLength = timeStrings.length;
  return !useShort && totalLength > 1 && (timeStrings[totalLength - 1] = /*
  */
  `${language.andValue} ${timeStrings[totalLength - 1]}`), addThousandsSeparators(
    resultPrefix + timeStrings.join(useShort || !options.insertCommas ? " " : ", "),
    language.thousandsSeparator,
    timeEntries.some(([_, value]) => value > 999)
  );
}
__name(format, "format");
function pluraliseUnit(unit, count, useShort) {
  let abbreviation = typeof unit.abbreviation == "function" ? unit.abbreviation(Math.abs(count)) : unit.abbreviation, name = typeof unit.name == "function" ? unit.name(Math.abs(count)) : unit.name;
  return useShort && abbreviation ? abbreviation : name;
}
__name(pluraliseUnit, "pluraliseUnit");
function parseTime(milliseconds, includeMs = !1, includeSubMs = !1) {
  includeSubMs && (includeMs = !0);
  let round = milliseconds > 0 ? Math.floor : Math.ceil;
  return {
    y: round(milliseconds / measurements.y),
    d: round(milliseconds / measurements.d) % 365,
    h: round(milliseconds / measurements.h) % 24,
    m: round(milliseconds / measurements.m) % 60,
    s: round(milliseconds / measurements.s) % 60,
    ms: includeMs ? round(milliseconds) % 1e3 : -1,
    us: includeSubMs ? round(milliseconds / measurements.us) % 1e3 : -1,
    ns: includeSubMs ? round(milliseconds / measurements.ns) % 1e3 : -1
  };
}
__name(parseTime, "parseTime");
function formatResult(amount, unit, useShort = !1) {
  return `${amount}${useShort ? "" : " "}${pluraliseUnit(
    unit,
    amount,
    useShort
  )}`;
}
__name(formatResult, "formatResult");
function addThousandsSeparators(value, separator, needsSeparators) {
  return needsSeparators ? value.replaceAll(/\B(?=(?:\d{3})+(?!\d))/g, separator) : value;
}
__name(addThousandsSeparators, "addThousandsSeparators");

// src/parse.ts
var defaultParseOptions = {};
function parse(input, _options = defaultParseOptions, language = defaultLanguageOptions) {
  if (input.length <= 1)
    return null;
  let foundMatches = input.match(language.matcherRegex);
  if (!foundMatches || foundMatches.length === 0)
    return null;
  let isNegative = foundMatches[0] === "-";
  isNegative && foundMatches.shift();
  let finalCode = [], valueBuffer = "";
  for (let i = 0; i < foundMatches.length; i++) {
    let [previous, current, next] = [
      foundMatches[i - 1],
      foundMatches[i],
      foundMatches[i + 1]
    ];
    if (isOperator(current) || isBracket(current))
      valueBuffer += current;
    else if (/[\d ,.]/.test(current)) {
      previous && !isOperator(previous) && (valueBuffer += "+"), next && next in language.units && (valueBuffer += "(");
      let hasThousands = current.includes(language.thousandsSeparator), hasDecimal = current.includes(language.decimalSeparator);
      if (hasThousands && hasDecimal) {
        let [_thousands, decimal] = current.split(language.decimalSeparator), thousands = (_thousands ?? "").replaceAll(language.thousandsSeparator, "");
        valueBuffer += `${thousands}.${decimal}`;
      } else
        hasThousands ? valueBuffer += current.replaceAll(language.thousandsSeparator, "") : hasDecimal ? valueBuffer += current.replaceAll(language.decimalSeparator, ".") : valueBuffer += current;
    } else {
      let unit = language.units[current];
      if (!unit)
        continue;
      previous && !isOperator(previous) && (valueBuffer += "*"), valueBuffer += String(unit.ms), previous && /[\d.]/.test(previous) && (valueBuffer += ")");
    }
    valueBuffer.length > 0 && (finalCode.push(valueBuffer), valueBuffer = "");
  }
  if (finalCode.length === 0)
    return null;
  try {
    let code = finalCode.join(""), result = new Function(`return ${code}`)();
    return isNegative ? -result : result;
  } catch {
    return null;
  }
}
__name(parse, "parse");
function isOperator(value) {
  return value === "-" || value === "+" || value === "*" || value === "/";
}
__name(isOperator, "isOperator");
function isBracket(value) {
  return value === "(" || value === ")";
}
__name(isBracket, "isBracket");

// src/index.ts
function ms(...upperArgs) {
  typeof upperArgs[1] == "object" && (upperArgs[2] = upperArgs[1], upperArgs[1] = void 0);
  let hasDefaultLanguage = isLanguageKey(upperArgs[0]), hasDefaultOptions = typeof upperArgs[0] == "object";
  if (hasDefaultLanguage || hasDefaultOptions)
    return (...lowerArgs) => (typeof lowerArgs[1] == "object" && (lowerArgs[2] = lowerArgs[1], lowerArgs[1] = void 0), !lowerArgs[1] && hasDefaultLanguage && (lowerArgs[1] = upperArgs[0]), lowerArgs[2] = mergeOptions(
      hasDefaultOptions ? upperArgs[0] : {},
      upperArgs[2] ?? {},
      lowerArgs[2] ?? {}
    ), ms(...lowerArgs));
  let input = upperArgs[0], languageOptions = getLanguageOptions(upperArgs[1] ?? "en"), resolvedOptions = formatOptions(upperArgs[2] ?? {});
  if (typeof input == "number") {
    if (Number.isNaN(input) || !Number.isFinite(input))
      throw new TypeError("Expected a finite number");
    return format(input, resolvedOptions, languageOptions);
  } else if (typeof input == "string")
    return parse(input, resolvedOptions, languageOptions);
  throw new TypeError("Expected a string or number");
}
__name(ms, "ms");
var src_default = Object.assign(ms, { format, parse });
function mergeOptions(...options) {
  return options.length <= 1 ? options[0] ?? {} : options.reduce((mergedOptions, options2) => Object.assign(mergedOptions, options2), {});
}
__name(mergeOptions, "mergeOptions");
function formatOptions(defaultOptions, passOptions) {
  return {
    ...defaultFormatOptions,
    ...defaultParseOptions,
    ...defaultOptions,
    ...passOptions
  };
}
__name(formatOptions, "formatOptions");

module.exports = src_default;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map