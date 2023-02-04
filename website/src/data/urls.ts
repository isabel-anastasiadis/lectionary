
export const readingUrl = (version: string, readings: string): string  => {
    return `https://www.biblegateway.com/passage/?version=${version}&search=${readings}`;
};

export const audioUrl = (version: string, readings: string): string => {
    return `https://www.biblegateway.com/audio/${version}/${readings}`;
};

export const AUDIO_TRANSLATIONS: Array<{text: string, value: string}> = [
    {
        text: "ESV - by Max McLean" ,
        value: "mclean/esv"
    },
    {
        text: "KJV - by Max McLean",
        value: "mclean/kjv"
    },
    {
        text: "KJV - by Paul Mims",
        value: "mims/kjv"
    },
    {
        text: "KJV - by Dramatized",
        value: "dramatized/kjv"
    },
    {
        text: "MSG - by Kelly Ryan Dolan",
        value: "dolan/msg"
    },
    {
        text: "NIV - by Max McLean",
        value: "mclean/niv"
    },
    {
        text: "NIV - by Dramatized",
        value: "dramatized/niv"
    },
    {
        text: "NIV - by George W. Sarris",
        value: "purevoice/niv"
    },
    {
        text: "NIVUK - by David Suchet",
        value: "suchet/nivuk"
    },
    {
        text: "NKJV - by Simon Bubb",
        value: "bubb/nkjv"
    },
    {
        text: "NKJV - by Tinasha LaRaye",
        value: "laraye/nkjv"
    },
    {
        text: "NLT - by Breathe",
        value: "breathe/nlt"
    }
];

export const READING_TRANSLATIONS: Array<{text: string, value: string}> = [
    {
        text: "ESV - English Standard Version",
        value: "ESV"
    },
    {
        text: "ESVUK - English Standard Version Anglicised",
        value: "ESVUK"
    },
    {
        text: "KJV - King James Version",
        value: "KJV"
    },
    {
        text: "MSG - The Message",
        value: "MSG"
    },
    {
        text: "NIV - New Int'l Version",
        value: "NIV"
    },
    {
        text: "NIVUK - New Int'l Version Anglicised",
        value: "NIVUK"
    },
    {
        text: "NLT - New Living Translation",
        value: "NLT"
    },
    {
        text: "NKJV - New King James Version",
        value: "NKJV"
    }
];