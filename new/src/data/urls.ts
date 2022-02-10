
export const readingUrl = (version: string, readings: string): string  => {
    return `https://www.biblegateway.com/passage/?version=${version}&search=${readings}`;
};

export const audioUrl = (version: string, readings: string): string => {
    return `https://www.biblegateway.com/audio/${version}/${readings}`;
};

export const AUDIO_TRANSLATIONS: Array<{text: string, value: string}> = [
    {
        text: "MSG",
        value: "dolan/msg"
    },
    {
        text: "NIV",
        value: "mclean/niv"
    },
    {
        text: "NLT",
        value: "breathe/nlt"
    },
    {
        text: "NKJV",
        value: "laraye/nkjv"
    }
];

export const READING_TRANSLATIONS: Array<{text: string, value: string}> = [
    {
        text: "NIV",
        value: "NIV"
    },
    {
        text: "MSG",
        value: "MSG"
    },
    {
        text: "NLT",
        value: "NLT"
    },
    {
        text: "NKJV",
        value: "NKJV"
    }
];