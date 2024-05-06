import { IReadingsForDay } from "./interfaces";

const Data: { [dateKey: string]: IReadingsForDay } = {
    "2024/05/05": {
        "datePretty": "Sunday, May 5, 2024",
        "calendar": "6th Sunday of Easter",
        "rcl": {
            "readings": [
                {
                    "pretty": "Psalm 104:28\u201334",
                    "readQS": "Psalm+104:28-34",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Ezekiel 47:1\u201312",
                    "readQS": "Ezekiel+47:1-12",
                    "audioQS": "Ezek.47"
                },
                {
                    "pretty": "Acts 3:1\u201312",
                    "readQS": "Acts+3:1-12",
                    "audioQS": "Acts.3"
                },
                {
                    "pretty": "John 21:1\u201319",
                    "readQS": "John+21:1-19",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+104:28-34%3B+Ezekiel+47:1-12%3B+John+21:1-19",
            "audioQS": "Ps.104,Ezek.47,John.21"
        },
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 104:28\u201334",
                    "readQS": "Psalm+104:28-34",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Ezekiel 47:1\u201312",
                    "readQS": "Ezekiel+47:1-12",
                    "audioQS": "Ezek.47"
                },
                {
                    "pretty": "John 21:1\u201319",
                    "readQS": "John+21:1-19",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+104:28-34%3B+Ezekiel+47:1-12%3B+John+21:1-19",
            "audioQS": "Ps.104,Ezek.47,John.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Song of Solomon 4:16\u20135:2,8:6\u20137",
                    "readQS": "Song+of+Solomon+4:16-5:2,8:6-7",
                    "audioQS": "Song.4"
                },
                {
                    "pretty": "Revelation 3:14\u201322",
                    "readQS": "Revelation+3:14-22",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+45%3B+Song+of+Solomon+4:16-5:2,8:6-7%3B+Revelation+3:14-22",
            "audioQS": "Ps.45,Song.4,Rev.3"
        }
    },
    "2024/05/06": {
        "datePretty": "Monday, May 6, 2024",
        "calendar": "Week of 6th Sunday of Easter",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Numbers 16:1\u201335",
                    "readQS": "Numbers+16:1-35",
                    "audioQS": "Num.16"
                },
                {
                    "pretty": "Luke 6:27\u201338",
                    "readQS": "Luke+6:27-38",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+65%3B+Numbers+16:1-35%3B+Luke+6:27-38",
            "audioQS": "Ps.65,Num.16,Luke.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Deuteronomy 26",
                    "readQS": "Deuteronomy+26",
                    "audioQS": "Deut.26"
                },
                {
                    "pretty": "1 Peter 4:1\u201311",
                    "readQS": "1+Peter+4:1-11",
                    "audioQS": "1Pet.4"
                }
            ],
            "readQS": "Psalm+121%3B+Deuteronomy+26%3B+1+Peter+4:1-11",
            "audioQS": "Ps.121,Deut.26,1Pet.4"
        }
    },
    "2024/05/07": {
        "datePretty": "Tuesday, May 7, 2024",
        "calendar": "Week of 6th Sunday of Easter",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Numbers 16:36\u2013end",
                    "readQS": "Numbers+16:36-",
                    "audioQS": "Num.16"
                },
                {
                    "pretty": "Luke 6:39\u2013end",
                    "readQS": "Luke+6:39-",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+126%3B+Numbers+16:36-%3B+Luke+6:39-",
            "audioQS": "Ps.126,Num.16,Luke.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 128",
                    "readQS": "Psalm+128",
                    "audioQS": "Ps.128"
                },
                {
                    "pretty": "Deuteronomy 28:1\u201314",
                    "readQS": "Deuteronomy+28:1-14",
                    "audioQS": "Deut.28"
                },
                {
                    "pretty": "1 Peter 4:12\u2013end",
                    "readQS": "1+Peter+4:12-",
                    "audioQS": "1Pet.4"
                }
            ],
            "readQS": "Psalm+128%3B+Deuteronomy+28:1-14%3B+1+Peter+4:12-",
            "audioQS": "Ps.128,Deut.28,1Pet.4"
        }
    },
    "2024/05/08": {
        "datePretty": "Wednesday, May 8, 2024",
        "calendar": "Week of 6th Sunday of Easter",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Numbers 17:1\u201311",
                    "readQS": "Numbers+17:1-11",
                    "audioQS": "Num.17"
                },
                {
                    "pretty": "Luke 7:1\u201310",
                    "readQS": "Luke+7:1-10",
                    "audioQS": "Luke.7"
                }
            ],
            "readQS": "Psalm+132%3B+Numbers+17:1-11%3B+Luke+7:1-10",
            "audioQS": "Ps.132,Num.17,Luke.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 15,24",
                    "readQS": "Psalm+15,24",
                    "audioQS": "Ps.15,24"
                },
                {
                    "pretty": "2 Samuel 23:1\u20135",
                    "readQS": "2+Samuel+23:1-5",
                    "audioQS": "2Sam.23"
                },
                {
                    "pretty": "Colossians 2:20\u2013end,3:1\u20134",
                    "readQS": "Colossians+2:20-,3:1-4",
                    "audioQS": "Col.2"
                }
            ],
            "readQS": "Psalm+15,24%3B+2+Samuel+23:1-5%3B+Colossians+2:20-,3:1-4",
            "audioQS": "Ps.15,24,2Sam.23,Col.2"
        }
    },
    "2024/05/09": {
        "datePretty": "Thursday, May 9, 2024",
        "calendar": "Ascension Day",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Isaiah 52:7\u201315",
                    "readQS": "Isaiah+52:7-15",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Hebrews 7:(11\u201325),26\u201328",
                    "readQS": "Hebrews+7:%2811-25%29,26-28",
                    "audioQS": "Heb.7"
                }
            ],
            "readQS": "Psalm+110%3B+Isaiah+52:7-15%3B+Hebrews+7:%2811-25%29,26-28",
            "audioQS": "Ps.110,Isa.52,Heb.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 8",
                    "readQS": "Psalm+8",
                    "audioQS": "Ps.8"
                },
                {
                    "pretty": "2 Kings 2:1\u201315",
                    "readQS": "2+Kings+2:1-15",
                    "audioQS": "2Kgs.2"
                },
                {
                    "pretty": "Revelation 5",
                    "readQS": "Revelation+5",
                    "audioQS": "Rev.5"
                }
            ],
            "readQS": "Psalm+8%3B+2+Kings+2:1-15%3B+Revelation+5",
            "audioQS": "Ps.8,2Kgs.2,Rev.5"
        }
    },
    "2024/05/10": {
        "datePretty": "Friday, May 10, 2024",
        "calendar": "10 days between Ascension Day and Pentecost",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 81",
                    "readQS": "Psalm+81",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Numbers 20:1\u201313",
                    "readQS": "Numbers+20:1-13",
                    "audioQS": "Num.20"
                },
                {
                    "pretty": "Luke 7:11\u201317",
                    "readQS": "Luke+7:11-17",
                    "audioQS": "Luke.7"
                }
            ],
            "readQS": "Psalm+81%3B+Numbers+20:1-13%3B+Luke+7:11-17",
            "audioQS": "Ps.81,Num.20,Luke.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Deuteronomy 29:2\u201315",
                    "readQS": "Deuteronomy+29:2-15",
                    "audioQS": "Deut.29"
                },
                {
                    "pretty": "1 John 1:1\u20132:6",
                    "readQS": "1+John+1:1-2:6",
                    "audioQS": "1John.1"
                }
            ],
            "readQS": "Psalm+145%3B+Deuteronomy+29:2-15%3B+1+John+1:1-2:6",
            "audioQS": "Ps.145,Deut.29,1John.1"
        }
    },
    "2024/05/11": {
        "datePretty": "Saturday, May 11, 2024",
        "calendar": "10 days between Ascension Day and Pentecost",
        "rcl": null,
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Numbers 21:4\u20139",
                    "readQS": "Numbers+21:4-9",
                    "audioQS": "Num.21"
                },
                {
                    "pretty": "Luke 7:18\u201335",
                    "readQS": "Luke+7:18-35",
                    "audioQS": "Luke.7"
                }
            ],
            "readQS": "Psalm+47%3B+Numbers+21:4-9%3B+Luke+7:18-35",
            "audioQS": "Ps.47,Num.21,Luke.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Deuteronomy 30",
                    "readQS": "Deuteronomy+30",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "1 John 2:7\u201317",
                    "readQS": "1+John+2:7-17",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+85%3B+Deuteronomy+30%3B+1+John+2:7-17",
            "audioQS": "Ps.85,Deut.30,1John.2"
        }
    }
};

export default Data;