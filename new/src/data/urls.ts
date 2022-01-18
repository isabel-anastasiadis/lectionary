
export const readingUrl = (version: string, readings: string): string  => {
    return `https://www.biblegateway.com/passage/?version=${version}&search=${readings}`;
};

export const audioUrl = (version: string, readings: string): string => {
    return `https://www.biblegateway.com/audio/${version}/${readings}`;
};

export const AUDIO_TRANSLATIONS: Array<{name: string, value: string}> = [
    {
        name: "MSG",
        value: "dolan/msg"
    },
    {
        name: "NIV",
        value: "mclean/niv"
    },
    {
        name: "NLT",
        value: "breathe/nlt"
    }
];

export const READING_TRANSLATIONS: Array<{name: string, value: string}> = [
    {
        name: "NIV",
        value: "NIV"
    },
    {
        name: "MSG",
        value: "MSG"
    },
    {
        name: "NLT",
        value: "NLT"
    }
];