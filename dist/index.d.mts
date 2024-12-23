declare const measurements: {
    ns: number;
    us: number;
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
    mo: number;
    y: number;
    dec: number;
    c: number;
    kyr: number;
};
type MeasurementKey = keyof typeof measurements;

declare const languages: {
    en: {
        decimal: ".";
        and: string;
        units: ({
            key: "ns";
            name: (c: number) => "nanosecond" | "nanoseconds";
            abbreviation: string;
            matches: string[];
        } | {
            key: "us";
            name: (c: number) => "microsecond" | "microseconds";
            abbreviation: string;
            matches: string[];
        } | {
            key: "ms";
            name: (c: number) => "millisecond" | "milliseconds";
            abbreviation: string;
            matches: string[];
        } | {
            key: "s";
            name: (c: number) => "second" | "seconds";
            abbreviation: string;
            matches: string[];
        } | {
            key: "m";
            name: (c: number) => "minute" | "minutes";
            abbreviation: string;
            matches: string[];
        } | {
            key: "h";
            name: (c: number) => "hour" | "hours";
            abbreviation: string;
            matches: string[];
        } | {
            key: "d";
            name: (c: number) => "day" | "days";
            abbreviation: string;
            /** The decimal separator the language uses. */
            matches: string[];
        } | {
            key: "w";
            name: (c: number) => "week" | "weeks";
            abbreviation: string;
            matches: string[];
        } | {
            key: "mo";
            name: (c: number) => "month" | "months";
            abbreviation: string;
            matches: string[];
        } | {
            key: "y";
            name: (c: number) => "year" | "years";
            abbreviation: string;
            matches: string[];
        } | {
            key: "dec";
            name: (c: number) => "decade" | "decades";
            abbreviation: string;
            matches: string[];
        } | {
            key: "c";
            name: (c: number) => "century" | "centuries";
            abbreviation: string;
            matches: string[];
        } | {
            key: "kyr";
            name: (c: number) => "millennium" | "millennia";
            abbreviation: string;
            matches: string[];
        })[];
    };
    de: Language;
    mi: {
        decimal: ".";
        and: string;
        units: ({
            key: "ns";
            name: string;
            matches: string[];
        } | {
            key: "us";
            name: string;
            matches: string[];
        } | {
            key: "ms";
            name: string;
            matches: string[];
        } | {
            key: "s"; /** Measurement units. */
            name: string;
            matches: string[];
        } | {
            key: "m";
            name: string;
            matches: string[];
        } | {
            key: "h";
            name: string;
            matches: string[];
        } | {
            key: "d";
            name: string;
            matches: string[];
        } | {
            key: "w";
            name: string;
            matches: string[];
        } | {
            key: "mo";
            /** The key for the selected language. */
            name: string;
            matches: string[];
        } | {
            /** The version of 'and' in the language. */
            key: "y";
            name: string;
            matches: string[];
        } | {
            key: "dec";
            name: string;
            matches: string[];
        } | {
            key: "c";
            name: string;
            matches: string[];
        } | {
            key: "kyr";
            name: string;
            matches: string[];
        })[];
    };
    ru: {
        decimal: ".";
        and: string; /** The thousands separator the language uses. */
        units: ({
            key: "ns";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "us";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "ms";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "s";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "m";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "h";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "d";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "w";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "mo";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "y";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "dec";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "c";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        } | {
            key: "kyr";
            name: (c: number) => string;
            abbreviation: string;
            matches: string[];
        })[];
    };
};
type LanguageKey = keyof typeof languages;
interface Language {
    /** The version of 'and' in this language. */
    and: string | ((words: string[]) => string);
    /** The decimal separator this language uses. */
    decimal: '.' | ',';
    /** Measurement units. */
    units: Unit[];
}
interface Unit {
    /** Key to identify this unit. */
    key: MeasurementKey;
    /** Long form of the measurement. */
    name: string | ((count: number) => string);
    /** Short form of the measurement. */
    abbreviation?: string | ((count: number) => string);
    /** Strings used for the string regex. */
    matches: string[];
}
interface LanguageOptions {
    /** The key for the selected language. */
    key: LanguageKey;
    /** The version of 'and' in the language. */
    andValue: string | ((words: string[]) => string);
    /** The decimal separator the language uses. */
    decimalSeparator: string;
    /** The thousands separator the language uses. */
    thousandsSeparator: string;
    /** Whether the language has full short support. */
    supportsAbbreviations: boolean;
    /** The regex to match lengths of time. */
    matcherRegex: RegExp;
    /** The units and their names in the language, as a map. */
    units: Record<string, Unit & {
        ms: number;
    }>;
}

/** Options to pass to the format function. */
interface FormatOptions {
    /** Include input in the output. */
    includeMs?: boolean;
    /** Include sub input in the output. */
    includeSubMs?: boolean;
    /** Insert commas in-between each unit. */
    insertCommas?: boolean;
    /** Round the result to the highest unit. */
    roundUp?: boolean;
    /** Use the short names of measurements. */
    shortFormat?: boolean;
}
/**
 * Convert milliseconds to a human readable string.
 * @param input Number of milliseconds.
 * @param options Options for formatting.
 * @param language Language options.
 * @returns Either a human readable string or null if the input is less than 1 second
 * and `includeMs` and `includeSubMs` are both false.
 */
declare function format(input: number, options?: FormatOptions, language?: LanguageOptions): string | null;

interface ParseOptions {
}
/**
 * Parse a human readable string into milliseconds.
 * @param input Timeframe string.
 * @param _options Options for parsing, not used yet.
 * @param language Language options.
 * @returns The number of milliseconds or null if the input is invalid.
 */
declare function parse(input: string, _options?: ParseOptions, language?: LanguageOptions): any;

/**
 * Convert milliseconds to a human readable string.
 * @param input Number of milliseconds.
 * @param options Options for formatting.
 * @example
 * ms(13572468) // => '3 hours 46 minutes and 12 seconds'
 *
 * ms(13572468, { includeMs: true }) // => '3 hours 46 minutes 12 seconds and 468 milliseconds'
 * ms(13572.468, { includeSubMs: true }) // => '13 seconds 572 milliseconds and 468 microseconds'
 *
 * ms(13572468, { roundUp: true }) // => '4 hours'
 * ms(13572468, { shortFormat: true }) // => '3h 46m 12s'
 * ms(13572468, { insertCommas: true }) // => '3 hours, 46 minutes, and 12 seconds'
 */
declare function ms(input: number, options?: FormatOptions): ReturnType<typeof format>;
/**
 * Convert milliseconds to a human readable string.
 * @param input Number of milliseconds.
 * @param language Language key.
 * @param options Options for formatting.
 * @example
 * ms(13572468, 'mi') // => '3 hāora 46 meneti me te 12 hēkona'
 *
 * ms(13572468, 'mi', { includeMs: true }) // => '3 hāora 46 meneti 12 hēkona me te 468 hēkona miri'
 * ms(13572.468, 'mi', { includeSubMs: true }) // => '13 hēkona 572 hēkona miri me te 468 hēkona miriona'
 *
 * ms(13572468, 'mi', { roundUp: true }) // => '4 hāora'
 * ms(13572468, 'mi', { shortFormat: true }) // => '3 hāora 46 meneti me te 12 hēkona'
 * ms(13572468, 'mi', { insertCommas: true }) // => '3 hāora, 46 meneti, me te 12 hēkona'
 */
declare function ms(input: number, language: LanguageKey, options?: FormatOptions): ReturnType<typeof format>;
/**
 * Parse a human readable timeframe string to milliseconds.
 * @param input Timeframe string.
 * @param options Options for parsing.
 * @example
 * ms('2 seconds') // => 2000
 * ms('2 minutes and 30 seconds') // => 150000
 * ms('1.5 days and 1.5 hours') // => 135000000
 *
 * ms('2 hours - 30 minutes') // => 5400000
 * ms('1 day * 365') // => 31536000000
 * ms('1.5 days + 1.5 hours') // => 135000000
 *
 * ms('1 week - 3 days * 2') // => 86400000
 * ms('(1 week - 3 days) * 2') // => 691200000
 */
declare function ms(input: string, options?: ParseOptions): ReturnType<typeof parse>;
/**
 * Parse a human readable timeframe string to milliseconds.
 * @param input Timeframe string.
 * @param language Language key.
 * @param options Options for parsing.
 * @example
 * ms('2 hēkona') // => 2000
 * ms('2 meneti me te 30 hēkona') // => 150000
 * ms('1.5 ra me te 1.5 hāora') // => 135000000
 *
 * ms('2 hāora - 30 meneti') // => 5400000
 * ms('1 rangi * 365') // => 31536000000
 * ms('1.5 ra + 1.5 hāora') // => 135000000
 *
 * ms('1 wiki - 3 ra * 2') // => 86400000
 * ms('(1 wiki - 3 ra) * 2') // => 691200000
 */
declare function ms(input: string, language: LanguageKey, options?: ParseOptions): ReturnType<typeof parse>;
/**
 * Create a new instance with a new default language.
 * @param language Language key.
 * @example
 * const ms = require('enhanced-ms')('mi');
 * ms(2000) // => '2 hēkona'
 * @example
 * const ms = require('enhanced-ms');
 * ms(2000) // => '2 seconds'
 * const newMs = ms('mi');
 * newMs(2000) // => '2 hēkona'
 */
declare function ms(language: LanguageKey): typeof ms;
/**
 * Create a new instance with new default options.
 * @param options Options for parsing and formatting.
 * @example
 * const ms = require('enhanced-ms')({ roundUp: true });
 * ms(13572468) // => '4 hours'
 * @example
 * const ms = require('enhanced-ms');
 * ms(13572468) // => '3 hours 46 minutes and 12 seconds'
 * const newMs = ms({ roundUp: true });
 * newMs(13572468) // => '4 hours'
 */
declare function ms(options: FormatOptions & ParseOptions): typeof ms;
declare const _default: typeof ms & {
    format: typeof format;
    parse: typeof parse;
};

export { type FormatOptions, type ParseOptions, _default as default };
