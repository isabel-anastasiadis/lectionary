import { IReadingsForDay } from "./interfaces";

const Data: { [dateKey: string]: IReadingsForDay } = {
    "2020/12/01": {
        "datePretty": "Tuesday, December 1, 2020",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Isaiah 43:1\u201313",
                    "readQS": "Isaiah+43:1-13",
                    "audioQS": "Isa.43"
                },
                {
                    "pretty": "Revelation 20",
                    "readQS": "Revelation+20",
                    "audioQS": "Rev.20"
                }
            ],
            "readQS": "Psalm+80%3B+Isaiah+43:1-13%3B+Revelation+20",
            "audioQS": "Ps.80,Isa.43,Rev.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Isaiah 26:1\u201313",
                    "readQS": "Isaiah+26:1-13",
                    "audioQS": "Isa.26"
                },
                {
                    "pretty": "Matthew 12:22\u201337",
                    "readQS": "Matthew+12:22-37",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+74%3B+Isaiah+26:1-13%3B+Matthew+12:22-37",
            "audioQS": "Ps.74,Isa.26,Matt.12"
        }
    },
    "2020/12/02": {
        "datePretty": "Wednesday, December 2, 2020",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 7",
                    "readQS": "Psalm+7",
                    "audioQS": "Ps.7"
                },
                {
                    "pretty": "Isaiah 43:14\u2013end",
                    "readQS": "Isaiah+43:14-",
                    "audioQS": "Isa.43"
                },
                {
                    "pretty": "Revelation 21:1\u20138",
                    "readQS": "Revelation+21:1-8",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+7%3B+Isaiah+43:14-%3B+Revelation+21:1-8",
            "audioQS": "Ps.7,Isa.43,Rev.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Isaiah 28:1\u201313",
                    "readQS": "Isaiah+28:1-13",
                    "audioQS": "Isa.28"
                },
                {
                    "pretty": "Matthew 12:38\u2013end",
                    "readQS": "Matthew+12:38-",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+77%3B+Isaiah+28:1-13%3B+Matthew+12:38-",
            "audioQS": "Ps.77,Isa.28,Matt.12"
        }
    },
    "2020/12/03": {
        "datePretty": "Thursday, December 3, 2020",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Isaiah 44:1\u20138",
                    "readQS": "Isaiah+44:1-8",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 21:9\u201321",
                    "readQS": "Revelation+21:9-21",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+42%3B+Isaiah+44:1-8%3B+Revelation+21:9-21",
            "audioQS": "Ps.42,Isa.44,Rev.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Isaiah 28:14\u2013end",
                    "readQS": "Isaiah+28:14-",
                    "audioQS": "Isa.28"
                },
                {
                    "pretty": "Matthew 13:1\u201323",
                    "readQS": "Matthew+13:1-23",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+40%3B+Isaiah+28:14-%3B+Matthew+13:1-23",
            "audioQS": "Ps.40,Isa.28,Matt.13"
        }
    },
    "2020/12/04": {
        "datePretty": "Friday, December 4, 2020",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Isaiah 44:9\u201323",
                    "readQS": "Isaiah+44:9-23",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 21:22\u201322:5",
                    "readQS": "Revelation+21:22-22:5",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+25%3B+Isaiah+44:9-23%3B+Revelation+21:22-22:5",
            "audioQS": "Ps.25,Isa.44,Rev.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 17",
                    "readQS": "Psalm+17",
                    "audioQS": "Ps.17"
                },
                {
                    "pretty": "Isaiah 29:1\u201314",
                    "readQS": "Isaiah+29:1-14",
                    "audioQS": "Isa.29"
                },
                {
                    "pretty": "Matthew 13:24\u201343",
                    "readQS": "Matthew+13:24-43",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+17%3B+Isaiah+29:1-14%3B+Matthew+13:24-43",
            "audioQS": "Ps.17,Isa.29,Matt.13"
        }
    },
    "2020/12/05": {
        "datePretty": "Saturday, December 5, 2020",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Isaiah 44:24\u201345:13",
                    "readQS": "Isaiah+44:24-45:13",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 22:6\u2013end",
                    "readQS": "Revelation+22:6-",
                    "audioQS": "Rev.22"
                }
            ],
            "readQS": "Psalm+9%3B+Isaiah+44:24-45:13%3B+Revelation+22:6-",
            "audioQS": "Ps.9,Isa.44,Rev.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Isaiah 29:15\u2013end",
                    "readQS": "Isaiah+29:15-",
                    "audioQS": "Isa.29"
                },
                {
                    "pretty": "Matthew 13:44\u2013end",
                    "readQS": "Matthew+13:44-",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+27%3B+Isaiah+29:15-%3B+Matthew+13:44-",
            "audioQS": "Ps.27,Isa.29,Matt.13"
        }
    },
    "2020/12/06": {
        "datePretty": "Sunday, December 6, 2020",
        "calendar": "2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Zephaniah 3:14\u201320",
                    "readQS": "Zephaniah+3:14-20",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Luke 1:5\u201320",
                    "readQS": "Luke+1:5-20",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+80%3B+Zephaniah+3:14-20%3B+Luke+1:5-20",
            "audioQS": "Ps.80,Zeph.3,Luke.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "1 Kings 22:1\u201328",
                    "readQS": "1+Kings+22:1-28",
                    "audioQS": "1Kgs.22"
                },
                {
                    "pretty": "Romans 15:4\u201313",
                    "readQS": "Romans+15:4-13",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+40%3B+1+Kings+22:1-28%3B+Romans+15:4-13",
            "audioQS": "Ps.40,1Kgs.22,Rom.15"
        }
    },
    "2020/12/07": {
        "datePretty": "Monday, December 7, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Isaiah 45:14\u2013end",
                    "readQS": "Isaiah+45:14-",
                    "audioQS": "Isa.45"
                },
                {
                    "pretty": "1 Thessalonians 1",
                    "readQS": "1+Thessalonians+1",
                    "audioQS": "1Thess.1"
                }
            ],
            "readQS": "Psalm+44%3B+Isaiah+45:14-%3B+1+Thessalonians+1",
            "audioQS": "Ps.44,Isa.45,1Thess.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Isaiah 30:1\u201318",
                    "readQS": "Isaiah+30:1-18",
                    "audioQS": "Isa.30"
                },
                {
                    "pretty": "Matthew 14:1\u201312",
                    "readQS": "Matthew+14:1-12",
                    "audioQS": "Matt.14"
                }
            ],
            "readQS": "Psalm+144%3B+Isaiah+30:1-18%3B+Matthew+14:1-12",
            "audioQS": "Ps.144,Isa.30,Matt.14"
        }
    },
    "2020/12/08": {
        "datePretty": "Tuesday, December 8, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "Isaiah 46",
                    "readQS": "Isaiah+46",
                    "audioQS": "Isa.46"
                },
                {
                    "pretty": "1 Thessalonians 2:1\u201312",
                    "readQS": "1+Thessalonians+2:1-12",
                    "audioQS": "1Thess.2"
                }
            ],
            "readQS": "Psalm+56%3B+Isaiah+46%3B+1+Thessalonians+2:1-12",
            "audioQS": "Ps.56,Isa.46,1Thess.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Isaiah 30:19\u2013end",
                    "readQS": "Isaiah+30:19-",
                    "audioQS": "Isa.30"
                },
                {
                    "pretty": "Matthew 14:13\u2013end",
                    "readQS": "Matthew+14:13-",
                    "audioQS": "Matt.14"
                }
            ],
            "readQS": "Psalm+11%3B+Isaiah+30:19-%3B+Matthew+14:13-",
            "audioQS": "Ps.11,Isa.30,Matt.14"
        }
    },
    "2020/12/09": {
        "datePretty": "Wednesday, December 9, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "Isaiah 47",
                    "readQS": "Isaiah+47",
                    "audioQS": "Isa.47"
                },
                {
                    "pretty": "1 Thessalonians 2:13\u2013end",
                    "readQS": "1+Thessalonians+2:13-",
                    "audioQS": "1Thess.2"
                }
            ],
            "readQS": "Psalm+62%3B+Isaiah+47%3B+1+Thessalonians+2:13-",
            "audioQS": "Ps.62,Isa.47,1Thess.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 10",
                    "readQS": "Psalm+10",
                    "audioQS": "Ps.10"
                },
                {
                    "pretty": "Isaiah 31",
                    "readQS": "Isaiah+31",
                    "audioQS": "Isa.31"
                },
                {
                    "pretty": "Matthew 15:1\u201320",
                    "readQS": "Matthew+15:1-20",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+10%3B+Isaiah+31%3B+Matthew+15:1-20",
            "audioQS": "Ps.10,Isa.31,Matt.15"
        }
    },
    "2020/12/10": {
        "datePretty": "Thursday, December 10, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 54",
                    "readQS": "Psalm+54",
                    "audioQS": "Ps.54"
                },
                {
                    "pretty": "Isaiah 48:1\u201311",
                    "readQS": "Isaiah+48:1-11",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "1 Thessalonians 3",
                    "readQS": "1+Thessalonians+3",
                    "audioQS": "1Thess.3"
                }
            ],
            "readQS": "Psalm+54%3B+Isaiah+48:1-11%3B+1+Thessalonians+3",
            "audioQS": "Ps.54,Isa.48,1Thess.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Isaiah 32",
                    "readQS": "Isaiah+32",
                    "audioQS": "Isa.32"
                },
                {
                    "pretty": "Matthew 15:21\u201328",
                    "readQS": "Matthew+15:21-28",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+73%3B+Isaiah+32%3B+Matthew+15:21-28",
            "audioQS": "Ps.73,Isa.32,Matt.15"
        }
    },
    "2020/12/11": {
        "datePretty": "Friday, December 11, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Isaiah 48:12\u2013end",
                    "readQS": "Isaiah+48:12-",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "1 Thessalonians 4:1\u201312",
                    "readQS": "1+Thessalonians+4:1-12",
                    "audioQS": "1Thess.4"
                }
            ],
            "readQS": "Psalm+86%3B+Isaiah+48:12-%3B+1+Thessalonians+4:1-12",
            "audioQS": "Ps.86,Isa.48,1Thess.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Isaiah 33:1\u201322",
                    "readQS": "Isaiah+33:1-22",
                    "audioQS": "Isa.33"
                },
                {
                    "pretty": "Matthew 15:29\u2013end",
                    "readQS": "Matthew+15:29-",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+90%3B+Isaiah+33:1-22%3B+Matthew+15:29-",
            "audioQS": "Ps.90,Isa.33,Matt.15"
        }
    },
    "2020/12/12": {
        "datePretty": "Saturday, December 12, 2020",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 49:1\u201313",
                    "readQS": "Isaiah+49:1-13",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "1 Thessalonians 4:13\u2013end",
                    "readQS": "1+Thessalonians+4:13-",
                    "audioQS": "1Thess.4"
                }
            ],
            "readQS": "Psalm+145%3B+Isaiah+49:1-13%3B+1+Thessalonians+4:13-",
            "audioQS": "Ps.145,Isa.49,1Thess.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "Isaiah 35",
                    "readQS": "Isaiah+35",
                    "audioQS": "Isa.35"
                },
                {
                    "pretty": "Matthew 16:1\u201312",
                    "readQS": "Matthew+16:1-12",
                    "audioQS": "Matt.16"
                }
            ],
            "readQS": "Psalm+94%3B+Isaiah+35%3B+Matthew+16:1-12",
            "audioQS": "Ps.94,Isa.35,Matt.16"
        }
    },
    "2020/12/13": {
        "datePretty": "Sunday, December 13, 2020",
        "calendar": "3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50:1\u20136,62",
                    "readQS": "Psalm+50:1-6,62",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Isaiah 12",
                    "readQS": "Isaiah+12",
                    "audioQS": "Isa.12"
                },
                {
                    "pretty": "Luke 1:57\u201366",
                    "readQS": "Luke+1:57-66",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+50:1-6,62%3B+Isaiah+12%3B+Luke+1:57-66",
            "audioQS": "Ps.50,Isa.12,Luke.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 68:1\u201319",
                    "readQS": "Psalm+68:1-19",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Malachi 3:1\u20134",
                    "readQS": "Malachi+3:1-4",
                    "audioQS": "Mal.3"
                },
                {
                    "pretty": "4",
                    "readQS": "4",
                    "audioQS": "4"
                },
                {
                    "pretty": "Philippians 4:4\u20137",
                    "readQS": "Philippians+4:4-7",
                    "audioQS": "Phil.4"
                }
            ],
            "readQS": "Psalm+68:1-19%3B+Malachi+3:1-4%3B4%3B+Philippians+4:4-7",
            "audioQS": "Ps.68,Mal.3,4,Phil.4"
        }
    },
    "2020/12/14": {
        "datePretty": "Monday, December 14, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Isaiah 49:14\u201325",
                    "readQS": "Isaiah+49:14-25",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "1 Thessalonians 5:1\u201311",
                    "readQS": "1+Thessalonians+5:1-11",
                    "audioQS": "1Thess.5"
                }
            ],
            "readQS": "Psalm+40%3B+Isaiah+49:14-25%3B+1+Thessalonians+5:1-11",
            "audioQS": "Ps.40,Isa.49,1Thess.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 26",
                    "readQS": "Psalm+26",
                    "audioQS": "Ps.26"
                },
                {
                    "pretty": "Isaiah 38:1\u20138,38:21\u201322",
                    "readQS": "Isaiah+38:1-8,38:21-22",
                    "audioQS": "Isa.38"
                },
                {
                    "pretty": "Matthew 16:13\u2013end",
                    "readQS": "Matthew+16:13-",
                    "audioQS": "Matt.16"
                }
            ],
            "readQS": "Psalm+26%3B+Isaiah+38:1-8,38:21-22+%3B+Matthew+16:13-",
            "audioQS": "Ps.26,Isa.38,Matt.16"
        }
    },
    "2020/12/15": {
        "datePretty": "Tuesday, December 15, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 70",
                    "readQS": "Psalm+70",
                    "audioQS": "Ps.70"
                },
                {
                    "pretty": "Isaiah 50",
                    "readQS": "Isaiah+50",
                    "audioQS": "Isa.50"
                },
                {
                    "pretty": "1 Thessalonians 5:12\u2013end",
                    "readQS": "1+Thessalonians+5:12-",
                    "audioQS": "1Thess.5"
                }
            ],
            "readQS": "Psalm+70%3B+Isaiah+50%3B+1+Thessalonians+5:12-",
            "audioQS": "Ps.70,Isa.50,1Thess.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Isaiah 38:9\u201320",
                    "readQS": "Isaiah+38:9-20",
                    "audioQS": "Isa.38"
                },
                {
                    "pretty": "Matthew 17:1\u201313",
                    "readQS": "Matthew+17:1-13",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+50%3B+Isaiah+38:9-20+%3B+Matthew+17:1-13",
            "audioQS": "Ps.50,Isa.38,Matt.17"
        }
    },
    "2020/12/16": {
        "datePretty": "Wednesday, December 16, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 75",
                    "readQS": "Psalm+75",
                    "audioQS": "Ps.75"
                },
                {
                    "pretty": "Isaiah 51:1\u20138",
                    "readQS": "Isaiah+51:1-8",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 1",
                    "readQS": "2+Thessalonians+1",
                    "audioQS": "2Thess.1"
                }
            ],
            "readQS": "Psalm+75%3B+Isaiah+51:1-8%3B+2+Thessalonians+1",
            "audioQS": "Ps.75,Isa.51,2Thess.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 82",
                    "readQS": "Psalm+82",
                    "audioQS": "Ps.82"
                },
                {
                    "pretty": "Isaiah 39",
                    "readQS": "Isaiah+39",
                    "audioQS": "Isa.39"
                },
                {
                    "pretty": "Matthew 17:14\u201321",
                    "readQS": "Matthew+17:14-21",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+82%3B+Isaiah+39%3B+Matthew+17:14-21",
            "audioQS": "Ps.82,Isa.39,Matt.17"
        }
    },
    "2020/12/17": {
        "datePretty": "Thursday, December 17, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Isaiah 51:9\u201316",
                    "readQS": "Isaiah+51:9-16",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 2",
                    "readQS": "2+Thessalonians+2",
                    "audioQS": "2Thess.2"
                }
            ],
            "readQS": "Psalm+76%3B+Isaiah+51:9-16%3B+2+Thessalonians+2",
            "audioQS": "Ps.76,Isa.51,2Thess.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Zephaniah 1:1\u20132:3",
                    "readQS": "Zephaniah+1:1-2:3",
                    "audioQS": "Zeph.1"
                },
                {
                    "pretty": "Matthew 17:22\u2013end",
                    "readQS": "Matthew+17:22-",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+44%3B+Zephaniah+1:1-2:3%3B+Matthew+17:22-",
            "audioQS": "Ps.44,Zeph.1,Matt.17"
        }
    },
    "2020/12/18": {
        "datePretty": "Friday, December 18, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Isaiah 51:17\u2013end",
                    "readQS": "Isaiah+51:17-",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 3",
                    "readQS": "2+Thessalonians+3",
                    "audioQS": "2Thess.3"
                }
            ],
            "readQS": "Psalm+98%3B+Isaiah+51:17-%3B+2+Thessalonians+3",
            "audioQS": "Ps.98,Isa.51,2Thess.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
                },
                {
                    "pretty": "Zephaniah 3:1\u201313",
                    "readQS": "Zephaniah+3:1-13",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Matthew 18:1\u201320",
                    "readQS": "Matthew+18:1-20",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+49%3B+Zephaniah+3:1-13%3B+Matthew+18:1-20",
            "audioQS": "Ps.49,Zeph.3,Matt.18"
        }
    },
    "2020/12/19": {
        "datePretty": "Saturday, December 19, 2020",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
                },
                {
                    "pretty": "Isaiah 52:1\u201312",
                    "readQS": "Isaiah+52:1-12",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Jude",
                    "readQS": "Jude",
                    "audioQS": "Jude"
                }
            ],
            "readQS": "Psalm+146%3B+Isaiah+52:1-12%3B+Jude",
            "audioQS": "Ps.146,Isa.52,Jude"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Zephaniah 3:14\u2013end",
                    "readQS": "Zephaniah+3:14-",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Matthew 18:21\u2013end",
                    "readQS": "Matthew+18:21-",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+57%3B+Zephaniah+3:14-%3B+Matthew+18:21-",
            "audioQS": "Ps.57,Zeph.3,Matt.18"
        }
    },
    "2020/12/20": {
        "datePretty": "Sunday, December 20, 2020",
        "calendar": "4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Isaiah 7:10\u201316",
                    "readQS": "Isaiah+7:10-16",
                    "audioQS": "Isa.7"
                },
                {
                    "pretty": "Romans 1:1\u20137",
                    "readQS": "Romans+1:1-7",
                    "audioQS": "Rom.1"
                }
            ],
            "readQS": "Psalm+144%3B+Isaiah+7:10-16%3B+Romans+1:1-7",
            "audioQS": "Ps.144,Isa.7,Rom.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Zechariah 2:10\u201313",
                    "readQS": "Zechariah+2:10-13",
                    "audioQS": "Zech.2"
                },
                {
                    "pretty": "Luke 1:39\u201355",
                    "readQS": "Luke+1:39-55",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+113%3B+Zechariah+2:10-13%3B+Luke+1:39-55",
            "audioQS": "Ps.113,Zech.2,Luke.1"
        }
    },
    "2020/12/21": {
        "datePretty": "Monday, December 21, 2020",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Isaiah 52:13\u2013end",
                    "readQS": "Isaiah+52:13-",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Isaiah 53",
                    "readQS": "Isaiah+53",
                    "audioQS": "Isa.53"
                },
                {
                    "pretty": "2 Peter 1:1\u201315",
                    "readQS": "2+Peter+1:1-15",
                    "audioQS": "2Pet.1"
                }
            ],
            "readQS": "Psalm+121%3B+Isaiah+52:13-%3B+Isaiah+53%3B+2+Peter+1:1-15",
            "audioQS": "Ps.121,Isa.52,Isa.53,2Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "Malachi 1:1,1:6\u2013end",
                    "readQS": "Malachi+1:1,1:6-",
                    "audioQS": "Mal.1"
                },
                {
                    "pretty": "Matthew 19:1\u201312",
                    "readQS": "Matthew+19:1-12",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+84%3B+Malachi+1:1,1:6-%3B+Matthew+19:1-12",
            "audioQS": "Ps.84,Mal.1,Matt.19"
        }
    },
    "2020/12/22": {
        "datePretty": "Tuesday, December 22, 2020",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 124",
                    "readQS": "Psalm+124",
                    "audioQS": "Ps.124"
                },
                {
                    "pretty": "Isaiah 54",
                    "readQS": "Isaiah+54",
                    "audioQS": "Isa.54"
                },
                {
                    "pretty": "2 Peter 1:16\u20132:3",
                    "readQS": "2+Peter+1:16-2:3",
                    "audioQS": "2Pet.1"
                }
            ],
            "readQS": "Psalm+124%3B+Isaiah+54%3B+2+Peter+1:16-2:3",
            "audioQS": "Ps.124,Isa.54,2Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Malachi 2:1\u201316",
                    "readQS": "Malachi+2:1-16",
                    "audioQS": "Mal.2"
                },
                {
                    "pretty": "Matthew 19:13\u201315",
                    "readQS": "Matthew+19:13-15",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+48%3B+Malachi+2:1-16%3B+Matthew+19:13-15",
            "audioQS": "Ps.48,Mal.2,Matt.19"
        }
    },
    "2020/12/23": {
        "datePretty": "Wednesday, December 23, 2020",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "Isaiah 55",
                    "readQS": "Isaiah+55",
                    "audioQS": "Isa.55"
                },
                {
                    "pretty": "2 Peter 2:4\u2013end",
                    "readQS": "2+Peter+2:4-",
                    "audioQS": "2Pet.2"
                }
            ],
            "readQS": "Psalm+130%3B+Isaiah+55%3B+2+Peter+2:4-",
            "audioQS": "Ps.130,Isa.55,2Pet.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Malachi 2:17\u20133:12",
                    "readQS": "Malachi+2:17-3:12",
                    "audioQS": "Mal.2"
                },
                {
                    "pretty": "Matthew 19:16\u2013end",
                    "readQS": "Matthew+19:16-",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Malachi+2:17-3:12%3B+Matthew+19:16-",
            "audioQS": "Ps.89,Mal.2,Matt.19"
        }
    },
    "2020/12/24": {
        "datePretty": "Thursday, December 24, 2020",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Isaiah 56:1\u20138",
                    "readQS": "Isaiah+56:1-8",
                    "audioQS": "Isa.56"
                },
                {
                    "pretty": "2 Peter 3",
                    "readQS": "2+Peter+3",
                    "audioQS": "2Pet.3"
                }
            ],
            "readQS": "Psalm+45%3B+Isaiah+56:1-8%3B+2+Peter+3",
            "audioQS": "Ps.45,Isa.56,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Zechariah 2",
                    "readQS": "Zechariah+2",
                    "audioQS": "Zech.2"
                },
                {
                    "pretty": "Revelation 1:1\u20138",
                    "readQS": "Revelation+1:1-8",
                    "audioQS": "Rev.1"
                }
            ],
            "readQS": "Psalm+85%3B+Zechariah+2%3B+Revelation+1:1-8",
            "audioQS": "Ps.85,Zech.2,Rev.1"
        }
    },
    "2020/12/25": {
        "datePretty": "Friday, December 25, 2020",
        "calendar": "Christmas day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Isaiah 62:1\u20135",
                    "readQS": "Isaiah+62:1-5",
                    "audioQS": "Isa.62"
                },
                {
                    "pretty": "Matthew 1:18\u201325",
                    "readQS": "Matthew+1:18-25",
                    "audioQS": "Matt.1"
                }
            ],
            "readQS": "Psalm+110%3B+Isaiah+62:1-5%3B+Matthew+1:18-25",
            "audioQS": "Ps.110,Isa.62,Matt.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 8",
                    "readQS": "Psalm+8",
                    "audioQS": "Ps.8"
                },
                {
                    "pretty": "Isaiah 65:17\u201325",
                    "readQS": "Isaiah+65:17-25",
                    "audioQS": "Isa.65"
                },
                {
                    "pretty": "Philippians 2:5\u201311",
                    "readQS": "Philippians+2:5-11",
                    "audioQS": "Phil.2"
                },
                {
                    "pretty": "Luke 2:1\u201320",
                    "readQS": "Luke+2:1-20",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+8%3B+Isaiah+65:17-25%3B+Philippians+2:5-11%3B+Luke+2:1-20",
            "audioQS": "Ps.8,Isa.65,Phil.2,Luke.2"
        }
    },
    "2020/12/26": {
        "datePretty": "Saturday, December 26, 2020",
        "calendar": "St Stephen, the first Christian Martyr",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 13",
                    "readQS": "Psalm+13",
                    "audioQS": "Ps.13"
                },
                {
                    "pretty": "Jeremiah 26:12\u201315",
                    "readQS": "Jeremiah+26:12-15",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "Acts 6",
                    "readQS": "Acts+6",
                    "audioQS": "Acts.6"
                }
            ],
            "readQS": "Psalm+13%3B+Jeremiah+26:12-15%3B+Acts+6",
            "audioQS": "Ps.13,Jer.26,Acts.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Genesis 4:1\u201310",
                    "readQS": "Genesis+4:1-10",
                    "audioQS": "Gen.4"
                },
                {
                    "pretty": "Matthew 23:34\u201339",
                    "readQS": "Matthew+23:34-39",
                    "audioQS": "Matt.23"
                }
            ],
            "readQS": "Psalm+86%3B+Genesis+4:1-10%3B+Matthew+23:34-39",
            "audioQS": "Ps.86,Gen.4,Matt.23"
        }
    },
    "2020/12/27": {
        "datePretty": "Sunday, December 27, 2020",
        "calendar": "St John the Evangelist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 21",
                    "readQS": "Psalm+21",
                    "audioQS": "Ps.21"
                },
                {
                    "pretty": "147:12\u2013end",
                    "readQS": "147:12-",
                    "audioQS": "147"
                },
                {
                    "pretty": "Exodus 33:12\u201323",
                    "readQS": "Exodus+33:12-23",
                    "audioQS": "Exod.33"
                },
                {
                    "pretty": "1 John 2:1\u201311",
                    "readQS": "1+John+2:1-11",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+21%3B147:12-%3B+Exodus+33:12-23%3B+1+John+2:1-11",
            "audioQS": "Ps.21,147,Exod.33,1John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 6:1\u20138",
                    "readQS": "Isaiah+6:1-8",
                    "audioQS": "Isa.6"
                },
                {
                    "pretty": "1 John 5:1\u201312",
                    "readQS": "1+John+5:1-12",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+6:1-8%3B+1+John+5:1-12",
            "audioQS": "Ps.97,Isa.6,1John.5"
        }
    },
    "2020/12/28": {
        "datePretty": "Monday, December 28, 2020",
        "calendar": "Holy Innocents",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Genesis 37:13\u201320",
                    "readQS": "Genesis+37:13-20",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Matthew 18:1\u201310",
                    "readQS": "Matthew+18:1-10",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+36%3B+Genesis+37:13-20%3B+Matthew+18:1-10",
            "audioQS": "Ps.36,Gen.37,Matt.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 128",
                    "readQS": "Psalm+128",
                    "audioQS": "Ps.128"
                },
                {
                    "pretty": "Isaiah 49:14\u201325",
                    "readQS": "Isaiah+49:14-25",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Mark 10:13\u201316",
                    "readQS": "Mark+10:13-16",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+128%3B+Isaiah+49:14-25%3B+Mark+10:13-16",
            "audioQS": "Ps.128,Isa.49,Mark.10"
        }
    },
    "2020/12/29": {
        "datePretty": "Tuesday, December 29, 2020",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Isaiah 57:15\u2013end",
                    "readQS": "Isaiah+57:15-",
                    "audioQS": "Isa.57"
                },
                {
                    "pretty": "John 1:1\u201318",
                    "readQS": "John+1:1-18",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+19%3B+Isaiah+57:15-%3B+John+1:1-18",
            "audioQS": "Ps.19,Isa.57,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Jonah 1",
                    "readQS": "Jonah+1",
                    "audioQS": "Jonah.1"
                },
                {
                    "pretty": "Colossians 1:1\u201314",
                    "readQS": "Colossians+1:1-14",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+132%3B+Jonah+1%3B+Colossians+1:1-14",
            "audioQS": "Ps.132,Jonah.1,Col.1"
        }
    },
    "2020/12/30": {
        "datePretty": "Wednesday, December 30, 2020",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Isaiah 59:1\u201315a",
                    "readQS": "Isaiah+59:1-15a",
                    "audioQS": "Isa.59"
                },
                {
                    "pretty": "John 1:19\u201328",
                    "readQS": "John+1:19-28",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+113%3B+Isaiah+59:1-15a%3B+John+1:19-28",
            "audioQS": "Ps.113,Isa.59,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Jonah 2",
                    "readQS": "Jonah+2",
                    "audioQS": "Jonah.2"
                },
                {
                    "pretty": "Colossians 1:15\u201323",
                    "readQS": "Colossians+1:15-23",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+65%3B+Jonah+2%3B+Colossians+1:15-23",
            "audioQS": "Ps.65,Jonah.2,Col.1"
        }
    },
    "2020/12/31": {
        "datePretty": "Thursday, December 31, 2020",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "Isaiah 59:15b\u2013end",
                    "readQS": "Isaiah+59:15b-",
                    "audioQS": "Isa.59"
                },
                {
                    "pretty": "John 1:29\u201334",
                    "readQS": "John+1:29-34",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+102%3B+Isaiah+59:15b-%3B+John+1:29-34",
            "audioQS": "Ps.102,Isa.59,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Jonah 3",
                    "readQS": "Jonah+3",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "Jonah 4",
                    "readQS": "Jonah+4",
                    "audioQS": "Jonah.4"
                },
                {
                    "pretty": "Colossians 1:24\u20132:7",
                    "readQS": "Colossians+1:24-2:7",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+90%3B+Jonah+3%3B+Jonah+4%3B+Colossians+1:24-2:7",
            "audioQS": "Ps.90,Jonah.3,Jonah.4,Col.1"
        }
    },
    "2021/01/01": {
        "datePretty": "Friday, January 1, 2021",
        "calendar": "The naming of Jesus",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 103",
                    "readQS": "Psalm+103",
                    "audioQS": "Ps.103"
                },
                {
                    "pretty": "Genesis 17:1\u201313",
                    "readQS": "Genesis+17:1-13",
                    "audioQS": "Gen.17"
                },
                {
                    "pretty": "Romans 2:17\u201329",
                    "readQS": "Romans+2:17-29",
                    "audioQS": "Rom.2"
                }
            ],
            "readQS": "Psalm+103%3B+Genesis+17:1-13%3B+Romans+2:17-29",
            "audioQS": "Ps.103,Gen.17,Rom.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Deuteronomy 30:1\u201320",
                    "readQS": "Deuteronomy+30:1-20",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "Acts 3:1\u201316",
                    "readQS": "Acts+3:1-16",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+115%3B+Deuteronomy+30:1-20%3B+Acts+3:1-16",
            "audioQS": "Ps.115,Deut.30,Acts.3"
        }
    },
    "2021/01/02": {
        "datePretty": "Saturday, January 2, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 18:1\u201330",
                    "readQS": "Psalm+18:1-30",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Isaiah 60:1\u201312",
                    "readQS": "Isaiah+60:1-12",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "John 1:35\u201342",
                    "readQS": "John+1:35-42",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+18:1-30%3B+Isaiah+60:1-12%3B+John+1:35-42",
            "audioQS": "Ps.18,Isa.60,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Ruth 1",
                    "readQS": "Ruth+1",
                    "audioQS": "Ruth.1"
                },
                {
                    "pretty": "Colossians 2:8\u2013end",
                    "readQS": "Colossians+2:8-",
                    "audioQS": "Col.2"
                }
            ],
            "readQS": "Psalm+46%3B+Ruth+1%3B+Colossians+2:8-",
            "audioQS": "Ps.46,Ruth.1,Col.2"
        }
    },
    "2021/01/03": {
        "datePretty": "Sunday, January 3, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 87",
                    "readQS": "Psalm+87",
                    "audioQS": "Ps.87"
                },
                {
                    "pretty": "Zechariah 8:1\u20138",
                    "readQS": "Zechariah+8:1-8",
                    "audioQS": "Zech.8"
                },
                {
                    "pretty": "Luke 2:41\u201352",
                    "readQS": "Luke+2:41-52",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+87%3B+Zechariah+8:1-8%3B+Luke+2:41-52",
            "audioQS": "Ps.87,Zech.8,Luke.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Isaiah 46:3\u201313",
                    "readQS": "Isaiah+46:3-13",
                    "audioQS": "Isa.46"
                },
                {
                    "pretty": "Romans 12:1\u20138",
                    "readQS": "Romans+12:1-8",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+135%3B+Isaiah+46:3-13%3B+Romans+12:1-8",
            "audioQS": "Ps.135,Isa.46,Rom.12"
        }
    },
    "2021/01/04": {
        "datePretty": "Monday, January 4, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Isaiah 61",
                    "readQS": "Isaiah+61",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "John 2:1\u201312",
                    "readQS": "John+2:1-12",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Isaiah+61%3B+John+2:1-12",
            "audioQS": "Ps.89,Isa.61,John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 87",
                    "readQS": "Psalm+87",
                    "audioQS": "Ps.87"
                },
                {
                    "pretty": "Ruth 3",
                    "readQS": "Ruth+3",
                    "audioQS": "Ruth.3"
                },
                {
                    "pretty": "Colossians 3:12\u20134:1",
                    "readQS": "Colossians+3:12-4:1",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+87%3B+Ruth+3%3B+Colossians+3:12-4:1",
            "audioQS": "Ps.87,Ruth.3,Col.3"
        }
    },
    "2021/01/05": {
        "datePretty": "Tuesday, January 5, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Isaiah 62",
                    "readQS": "Isaiah+62",
                    "audioQS": "Isa.62"
                },
                {
                    "pretty": "John 2:13\u2013end",
                    "readQS": "John+2:13-",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+48%3B+Isaiah+62%3B+John+2:13-",
            "audioQS": "Ps.48,Isa.62,John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 49:1\u201313",
                    "readQS": "Isaiah+49:1-13",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "John 4:7\u201326",
                    "readQS": "John+4:7-26",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+49:1-13%3B+John+4:7-26",
            "audioQS": "Ps.97,Isa.49,John.4"
        }
    },
    "2021/01/06": {
        "datePretty": "Wednesday, January 6, 2021",
        "calendar": "The Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Jeremiah 31:7\u201314",
                    "readQS": "Jeremiah+31:7-14",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "John 1:29\u201334",
                    "readQS": "John+1:29-34",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+132%3B+Jeremiah+31:7-14%3B+John+1:29-34",
            "audioQS": "Ps.132,Jer.31,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Isaiah 60:1\u20139",
                    "readQS": "Isaiah+60:1-9",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "John 2:1\u201311",
                    "readQS": "John+2:1-11",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+98%3B+Isaiah+60:1-9%3B+John+2:1-11",
            "audioQS": "Ps.98,Isa.60,John.2"
        }
    },
    "2021/01/07": {
        "datePretty": "Thursday, January 7, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 99",
                    "readQS": "Psalm+99",
                    "audioQS": "Ps.99"
                },
                {
                    "pretty": "Isaiah 63:7\u2013end",
                    "readQS": "Isaiah+63:7-",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "1 John 3",
                    "readQS": "1+John+3",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+99%3B+Isaiah+63:7-%3B+1+John+3",
            "audioQS": "Ps.99,Isa.63,1John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Jeremiah 23:1\u20138",
                    "readQS": "Jeremiah+23:1-8",
                    "audioQS": "Jer.23"
                },
                {
                    "pretty": "Matthew 20:1\u201316",
                    "readQS": "Matthew+20:1-16",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+118%3B+Jeremiah+23:1-8%3B+Matthew+20:1-16",
            "audioQS": "Ps.118,Jer.23,Matt.20"
        }
    },
    "2021/01/08": {
        "datePretty": "Friday, January 8, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Isaiah 64",
                    "readQS": "Isaiah+64",
                    "audioQS": "Isa.64"
                },
                {
                    "pretty": "1 John 4:7\u2013end",
                    "readQS": "1+John+4:7-",
                    "audioQS": "1John.4"
                }
            ],
            "readQS": "Psalm+46%3B+Isaiah+64%3B+1+John+4:7-",
            "audioQS": "Ps.46,Isa.64,1John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Jeremiah 30:1\u201317",
                    "readQS": "Jeremiah+30:1-17",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "Matthew 20:17\u201328",
                    "readQS": "Matthew+20:17-28",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+145%3B+Jeremiah+30:1-17%3B+Matthew+20:17-28",
            "audioQS": "Ps.145,Jer.30,Matt.20"
        }
    },
    "2021/01/09": {
        "datePretty": "Saturday, January 9, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "Isaiah 65:1\u201316",
                    "readQS": "Isaiah+65:1-16",
                    "audioQS": "Isa.65"
                },
                {
                    "pretty": "1 John 5:1\u201312",
                    "readQS": "1+John+5:1-12",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+148%3B+Isaiah+65:1-16%3B+1+John+5:1-12",
            "audioQS": "Ps.148,Isa.65,1John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Jeremiah 30:18\u201331:9",
                    "readQS": "Jeremiah+30:18-31:9",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "Matthew 20:29\u2013end",
                    "readQS": "Matthew+20:29-",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+67%3B+Jeremiah+30:18-31:9%3B+Matthew+20:29-",
            "audioQS": "Ps.67,Jer.30,Matt.20"
        }
    },
    "2021/01/10": {
        "datePretty": "Sunday, January 10, 2021",
        "calendar": "1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u201329",
                    "readQS": "Psalm+89:19-29",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "1 Samuel 16:1\u20132,13",
                    "readQS": "1+Samuel+16:1-2,13",
                    "audioQS": "1Sam.16"
                },
                {
                    "pretty": "John 1:29\u201334",
                    "readQS": "John+1:29-34",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+89:19-29%3B+1+Samuel+16:1-2,13%3B+John+1:29-34",
            "audioQS": "Ps.89,1Sam.16,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Isaiah 42:1\u20139",
                    "readQS": "Isaiah+42:1-9",
                    "audioQS": "Isa.42"
                },
                {
                    "pretty": "Ephesians 2:1\u201310",
                    "readQS": "Ephesians+2:1-10",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+46%3B+Isaiah+42:1-9%3B+Ephesians+2:1-10",
            "audioQS": "Ps.46,Isa.42,Eph.2"
        }
    },
    "2021/01/11": {
        "datePretty": "Monday, January 11, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
                },
                {
                    "pretty": "Amos 1",
                    "readQS": "Amos+1",
                    "audioQS": "Amos.1"
                },
                {
                    "pretty": "1 Corinthians 1:1\u201317",
                    "readQS": "1+Corinthians+1:1-17",
                    "audioQS": "1Cor.1"
                }
            ],
            "readQS": "Psalm+2%3B+Amos+1%3B+1+Corinthians+1:1-17",
            "audioQS": "Ps.2,Amos.1,1Cor.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Genesis 1:1\u201319",
                    "readQS": "Genesis+1:1-19",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 21:1\u201317",
                    "readQS": "Matthew+21:1-17",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+34%3B+Genesis+1:1-19%3B+Matthew+21:1-17",
            "audioQS": "Ps.34,Gen.1,Matt.21"
        }
    },
    "2021/01/12": {
        "datePretty": "Tuesday, January 12, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Amos 2",
                    "readQS": "Amos+2",
                    "audioQS": "Amos.2"
                },
                {
                    "pretty": "1 Corinthians 1:18\u2013end",
                    "readQS": "1+Corinthians+1:18-",
                    "audioQS": "1Cor.1"
                }
            ],
            "readQS": "Psalm+9%3B+Amos+2%3B+1+Corinthians+1:18-",
            "audioQS": "Ps.9,Amos.2,1Cor.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Genesis 1:20\u20132:3",
                    "readQS": "Genesis+1:20-2:3",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 21:18\u201332",
                    "readQS": "Matthew+21:18-32",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+45%3B+Genesis+1:20-2:3%3B+Matthew+21:18-32",
            "audioQS": "Ps.45,Gen.1,Matt.21"
        }
    },
    "2021/01/13": {
        "datePretty": "Wednesday, January 13, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 20",
                    "readQS": "Psalm+20",
                    "audioQS": "Ps.20"
                },
                {
                    "pretty": "Amos 3",
                    "readQS": "Amos+3",
                    "audioQS": "Amos.3"
                },
                {
                    "pretty": "1 Corinthians 2",
                    "readQS": "1+Corinthians+2",
                    "audioQS": "1Cor.2"
                }
            ],
            "readQS": "Psalm+20%3B+Amos+3%3B+1+Corinthians+2",
            "audioQS": "Ps.20,Amos.3,1Cor.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Genesis 2:4\u2013end",
                    "readQS": "Genesis+2:4-",
                    "audioQS": "Gen.2"
                },
                {
                    "pretty": "Matthew 21:33\u2013end",
                    "readQS": "Matthew+21:33-",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+47%3B+Genesis+2:4-%3B+Matthew+21:33-",
            "audioQS": "Ps.47,Gen.2,Matt.21"
        }
    },
    "2021/01/14": {
        "datePretty": "Thursday, January 14, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 21",
                    "readQS": "Psalm+21",
                    "audioQS": "Ps.21"
                },
                {
                    "pretty": "Amos 4",
                    "readQS": "Amos+4",
                    "audioQS": "Amos.4"
                },
                {
                    "pretty": "1 Corinthians 3",
                    "readQS": "1+Corinthians+3",
                    "audioQS": "1Cor.3"
                }
            ],
            "readQS": "Psalm+21%3B+Amos+4%3B+1+Corinthians+3",
            "audioQS": "Ps.21,Amos.4,1Cor.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Genesis 3",
                    "readQS": "Genesis+3",
                    "audioQS": "Gen.3"
                },
                {
                    "pretty": "Matthew 22:1\u201314",
                    "readQS": "Matthew+22:1-14",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+61%3B+Genesis+3%3B+Matthew+22:1-14",
            "audioQS": "Ps.61,Gen.3,Matt.22"
        }
    },
    "2021/01/15": {
        "datePretty": "Friday, January 15, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Amos 5:1\u201317",
                    "readQS": "Amos+5:1-17",
                    "audioQS": "Amos.5"
                },
                {
                    "pretty": "1 Corinthians 4",
                    "readQS": "1+Corinthians+4",
                    "audioQS": "1Cor.4"
                }
            ],
            "readQS": "Psalm+67%3B+Amos+5:1-17%3B+1+Corinthians+4",
            "audioQS": "Ps.67,Amos.5,1Cor.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Genesis 4:1\u201316,4:25\u201326",
                    "readQS": "Genesis+4:1-16,4:25-26",
                    "audioQS": "Gen.4"
                },
                {
                    "pretty": "Matthew 22:15\u201333",
                    "readQS": "Matthew+22:15-33",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+68%3B+Genesis+4:1-16,4:25-26%3B+Matthew+22:15-33",
            "audioQS": "Ps.68,Gen.4,Matt.22"
        }
    },
    "2021/01/16": {
        "datePretty": "Saturday, January 16, 2021",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Amos 5:18\u2013end",
                    "readQS": "Amos+5:18-",
                    "audioQS": "Amos.5"
                },
                {
                    "pretty": "1 Corinthians 5",
                    "readQS": "1+Corinthians+5",
                    "audioQS": "1Cor.5"
                }
            ],
            "readQS": "Psalm+33%3B+Amos+5:18-%3B+1+Corinthians+5",
            "audioQS": "Ps.33,Amos.5,1Cor.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Genesis 6:1\u201310",
                    "readQS": "Genesis+6:1-10",
                    "audioQS": "Gen.6"
                },
                {
                    "pretty": "Matthew 22:34\u2013end",
                    "readQS": "Matthew+22:34-",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+85%3B+Genesis+6:1-10%3B+Matthew+22:34-",
            "audioQS": "Ps.85,Gen.6,Matt.22"
        }
    },
    "2021/01/17": {
        "datePretty": "Sunday, January 17, 2021",
        "calendar": "2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145:1\u201312",
                    "readQS": "Psalm+145:1-12",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 62:1\u20135",
                    "readQS": "Isaiah+62:1-5",
                    "audioQS": "Isa.62"
                },
                {
                    "pretty": "1 Corinthians 6:11\u201320",
                    "readQS": "1+Corinthians+6:11-20",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+145:1-12%3B+Isaiah+62:1-5%3B+1+Corinthians+6:11-20",
            "audioQS": "Ps.145,Isa.62,1Cor.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "Isaiah 60:9\u201322",
                    "readQS": "Isaiah+60:9-22",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "Hebrews 6:17\u20137:10",
                    "readQS": "Hebrews+6:17-7:10",
                    "audioQS": "Heb.6"
                }
            ],
            "readQS": "Psalm+96%3B+Isaiah+60:9-22%3B+Hebrews+6:17-7:10",
            "audioQS": "Ps.96,Isa.60,Heb.6"
        }
    },
    "2021/01/18": {
        "datePretty": "Monday, January 18, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
                },
                {
                    "pretty": "Amos 6",
                    "readQS": "Amos+6",
                    "audioQS": "Amos.6"
                },
                {
                    "pretty": "1 Corinthians 6:1\u201311",
                    "readQS": "1+Corinthians+6:1-11",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+146%3B+Amos+6%3B+1+Corinthians+6:1-11",
            "audioQS": "Ps.146,Amos.6,1Cor.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Genesis 6:11\u20137:10",
                    "readQS": "Genesis+6:11-7:10",
                    "audioQS": "Gen.6"
                },
                {
                    "pretty": "Matthew 24:1\u201314",
                    "readQS": "Matthew+24:1-14",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+71%3B+Genesis+6:11-7:10%3B+Matthew+24:1-14",
            "audioQS": "Ps.71,Gen.6,Matt.24"
        }
    },
    "2021/01/19": {
        "datePretty": "Tuesday, January 19, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Amos 7",
                    "readQS": "Amos+7",
                    "audioQS": "Amos.7"
                },
                {
                    "pretty": "1 Corinthians 6:12\u2013end",
                    "readQS": "1+Corinthians+6:12-",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+132%3B+Amos+7%3B+1+Corinthians+6:12-",
            "audioQS": "Ps.132,Amos.7,1Cor.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Genesis 7:11\u2013end",
                    "readQS": "Genesis+7:11-",
                    "audioQS": "Gen.7"
                },
                {
                    "pretty": "Matthew 24:15\u201328",
                    "readQS": "Matthew+24:15-28",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Genesis+7:11-%3B+Matthew+24:15-28",
            "audioQS": "Ps.89,Gen.7,Matt.24"
        }
    },
    "2021/01/20": {
        "datePretty": "Wednesday, January 20, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 81",
                    "readQS": "Psalm+81",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Amos 8",
                    "readQS": "Amos+8",
                    "audioQS": "Amos.8"
                },
                {
                    "pretty": "1 Corinthians 7:1\u201324",
                    "readQS": "1+Corinthians+7:1-24",
                    "audioQS": "1Cor.7"
                }
            ],
            "readQS": "Psalm+81%3B+Amos+8%3B+1+Corinthians+7:1-24",
            "audioQS": "Ps.81,Amos.8,1Cor.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Genesis 8:1\u201314",
                    "readQS": "Genesis+8:1-14",
                    "audioQS": "Gen.8"
                },
                {
                    "pretty": "Matthew 24:29\u2013end",
                    "readQS": "Matthew+24:29-",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+97%3B+Genesis+8:1-14%3B+Matthew+24:29-",
            "audioQS": "Ps.97,Gen.8,Matt.24"
        }
    },
    "2021/01/21": {
        "datePretty": "Thursday, January 21, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Amos 9",
                    "readQS": "Amos+9",
                    "audioQS": "Amos.9"
                },
                {
                    "pretty": "1 Corinthians 7:25\u2013end",
                    "readQS": "1+Corinthians+7:25-",
                    "audioQS": "1Cor.7"
                }
            ],
            "readQS": "Psalm+76%3B+Amos+9%3B+1+Corinthians+7:25-",
            "audioQS": "Ps.76,Amos.9,1Cor.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Genesis 8:15\u20139:7",
                    "readQS": "Genesis+8:15-9:7",
                    "audioQS": "Gen.8"
                },
                {
                    "pretty": "Matthew 25:1\u201313",
                    "readQS": "Matthew+25:1-13",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+111%3B+Genesis+8:15-9:7%3B+Matthew+25:1-13",
            "audioQS": "Ps.111,Gen.8,Matt.25"
        }
    },
    "2021/01/22": {
        "datePretty": "Friday, January 22, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Hosea 1:1\u20132:1",
                    "readQS": "Hosea+1:1-2:1",
                    "audioQS": "Hos.1"
                },
                {
                    "pretty": "1 Corinthians 8",
                    "readQS": "1+Corinthians+8",
                    "audioQS": "1Cor.8"
                }
            ],
            "readQS": "Psalm+27%3B+Hosea+1:1-2:1%3B+1+Corinthians+8",
            "audioQS": "Ps.27,Hos.1,1Cor.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Genesis 9:8\u201319",
                    "readQS": "Genesis+9:8-19",
                    "audioQS": "Gen.9"
                },
                {
                    "pretty": "Matthew 25:14\u201330",
                    "readQS": "Matthew+25:14-30",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+73%3B+Genesis+9:8-19%3B+Matthew+25:14-30",
            "audioQS": "Ps.73,Gen.9,Matt.25"
        }
    },
    "2021/01/23": {
        "datePretty": "Saturday, January 23, 2021",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 122",
                    "readQS": "Psalm+122",
                    "audioQS": "Ps.122"
                },
                {
                    "pretty": "Hosea 2:2\u201317",
                    "readQS": "Hosea+2:2-17",
                    "audioQS": "Hos.2"
                },
                {
                    "pretty": "1 Corinthians 9:1\u201314",
                    "readQS": "1+Corinthians+9:1-14",
                    "audioQS": "1Cor.9"
                }
            ],
            "readQS": "Psalm+122%3B+Hosea+2:2-17%3B+1+Corinthians+9:1-14",
            "audioQS": "Ps.122,Hos.2,1Cor.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Genesis 11:1\u20139",
                    "readQS": "Genesis+11:1-9",
                    "audioQS": "Gen.11"
                },
                {
                    "pretty": "Matthew 25:31\u2013end",
                    "readQS": "Matthew+25:31-",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+61%3B+Genesis+11:1-9%3B+Matthew+25:31-",
            "audioQS": "Ps.61,Gen.11,Matt.25"
        }
    },
    "2021/01/24": {
        "datePretty": "Sunday, January 24, 2021",
        "calendar": "3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Jonah 3:1\u20135,10",
                    "readQS": "Jonah+3:1-5,10",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "John 3:16\u201321",
                    "readQS": "John+3:16-21",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+113%3B+Jonah+3:1-5,10%3B+John+3:16-21",
            "audioQS": "Ps.113,Jonah.3,John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Jeremiah 3:21\u20134:2",
                    "readQS": "Jeremiah+3:21-4:2",
                    "audioQS": "Jer.3"
                },
                {
                    "pretty": "Titus 2:1\u20138,11\u201314",
                    "readQS": "Titus+2:1-8,11-14",
                    "audioQS": "Titus.2"
                }
            ],
            "readQS": "Psalm+33%3B+Jeremiah+3:21-4:2%3B+Titus+2:1-8,11-14",
            "audioQS": "Ps.33,Jer.3,Titus.2"
        }
    },
    "2021/01/25": {
        "datePretty": "Monday, January 25, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 108",
                    "readQS": "Psalm+108",
                    "audioQS": "Ps.108"
                },
                {
                    "pretty": "Hosea 2:18\u2013end",
                    "readQS": "Hosea+2:18-",
                    "audioQS": "Hos.2"
                },
                {
                    "pretty": "Hosea 3",
                    "readQS": "Hosea+3",
                    "audioQS": "Hos.3"
                },
                {
                    "pretty": "1 Corinthians 9:15\u2013end",
                    "readQS": "1+Corinthians+9:15-",
                    "audioQS": "1Cor.9"
                }
            ],
            "readQS": "Psalm+108%3B+Hosea+2:18-%3B+Hosea+3%3B+1+Corinthians+9:15-",
            "audioQS": "Ps.108,Hos.2,Hos.3,1Cor.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "Genesis 11:27\u201312:9",
                    "readQS": "Genesis+11:27-12:9",
                    "audioQS": "Gen.11"
                },
                {
                    "pretty": "Matthew 26:1\u201316",
                    "readQS": "Matthew+26:1-16",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+138%3B+Genesis+11:27-12:9%3B+Matthew+26:1-16",
            "audioQS": "Ps.138,Gen.11,Matt.26"
        }
    },
    "2021/01/26": {
        "datePretty": "Tuesday, January 26, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Hosea 4:1\u201316",
                    "readQS": "Hosea+4:1-16",
                    "audioQS": "Hos.4"
                },
                {
                    "pretty": "1 Corinthians 10:1\u201313",
                    "readQS": "1+Corinthians+10:1-13",
                    "audioQS": "1Cor.10"
                }
            ],
            "readQS": "Psalm+36%3B+Hosea+4:1-16%3B+1+Corinthians+10:1-13",
            "audioQS": "Ps.36,Hos.4,1Cor.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Genesis 13:2\u2013end",
                    "readQS": "Genesis+13:2-",
                    "audioQS": "Gen.13"
                },
                {
                    "pretty": "Matthew 26:17\u201335",
                    "readQS": "Matthew+26:17-35",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+145%3B+Genesis+13:2-%3B+Matthew+26:17-35",
            "audioQS": "Ps.145,Gen.13,Matt.26"
        }
    },
    "2021/01/27": {
        "datePretty": "Wednesday, January 27, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Hosea 5:1\u20137",
                    "readQS": "Hosea+5:1-7",
                    "audioQS": "Hos.5"
                },
                {
                    "pretty": "1 Corinthians 10:14\u201311:1",
                    "readQS": "1+Corinthians+10:14-11:1",
                    "audioQS": "1Cor.10"
                }
            ],
            "readQS": "Psalm+46%3B+Hosea+5:1-7%3B+1+Corinthians+10:14-11:1",
            "audioQS": "Ps.46,Hos.5,1Cor.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 29",
                    "readQS": "Psalm+29",
                    "audioQS": "Ps.29"
                },
                {
                    "pretty": "Genesis 14",
                    "readQS": "Genesis+14",
                    "audioQS": "Gen.14"
                },
                {
                    "pretty": "Matthew 26:36\u201346",
                    "readQS": "Matthew+26:36-46",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+29%3B+Genesis+14%3B+Matthew+26:36-46",
            "audioQS": "Ps.29,Gen.14,Matt.26"
        }
    },
    "2021/01/28": {
        "datePretty": "Thursday, January 28, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Hosea 5:8\u20136:6",
                    "readQS": "Hosea+5:8-6:6",
                    "audioQS": "Hos.5"
                },
                {
                    "pretty": "1 Corinthians 11:2\u201316",
                    "readQS": "1+Corinthians+11:2-16",
                    "audioQS": "1Cor.11"
                }
            ],
            "readQS": "Psalm+47%3B+Hosea+5:8-6:6%3B+1+Corinthians+11:2-16",
            "audioQS": "Ps.47,Hos.5,1Cor.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "Genesis 15",
                    "readQS": "Genesis+15",
                    "audioQS": "Gen.15"
                },
                {
                    "pretty": "Matthew 26:47\u201356",
                    "readQS": "Matthew+26:47-56",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+24%3B+Genesis+15%3B+Matthew+26:47-56",
            "audioQS": "Ps.24,Gen.15,Matt.26"
        }
    },
    "2021/01/29": {
        "datePretty": "Friday, January 29, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Hosea 6:7\u20137:2",
                    "readQS": "Hosea+6:7-7:2",
                    "audioQS": "Hos.6"
                },
                {
                    "pretty": "1 Corinthians 11:17\u2013end",
                    "readQS": "1+Corinthians+11:17-",
                    "audioQS": "1Cor.11"
                }
            ],
            "readQS": "Psalm+65%3B+Hosea+6:7-7:2%3B+1+Corinthians+11:17-",
            "audioQS": "Ps.65,Hos.6,1Cor.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Genesis 16",
                    "readQS": "Genesis+16",
                    "audioQS": "Gen.16"
                },
                {
                    "pretty": "Matthew 26:57\u2013end",
                    "readQS": "Matthew+26:57-",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+67%3B+Genesis+16%3B+Matthew+26:57-",
            "audioQS": "Ps.67,Gen.16,Matt.26"
        }
    },
    "2021/01/30": {
        "datePretty": "Saturday, January 30, 2021",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Hosea 8",
                    "readQS": "Hosea+8",
                    "audioQS": "Hos.8"
                },
                {
                    "pretty": "1 Corinthians 12:1\u201311",
                    "readQS": "1+Corinthians+12:1-11",
                    "audioQS": "1Cor.12"
                }
            ],
            "readQS": "Psalm+68%3B+Hosea+8%3B+1+Corinthians+12:1-11",
            "audioQS": "Ps.68,Hos.8,1Cor.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Genesis 17:1\u201322",
                    "readQS": "Genesis+17:1-22",
                    "audioQS": "Gen.17"
                },
                {
                    "pretty": "Matthew 27:1\u201310",
                    "readQS": "Matthew+27:1-10",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+72%3B+Genesis+17:1-22%3B+Matthew+27:1-10",
            "audioQS": "Ps.72,Gen.17,Matt.27"
        }
    },
    "2021/01/31": {
        "datePretty": "Sunday, January 31, 2021",
        "calendar": "4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71:1\u20136,15\u201317",
                    "readQS": "Psalm+71:1-6,15-17",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Jeremiah 1:4\u201310",
                    "readQS": "Jeremiah+1:4-10",
                    "audioQS": "Jer.1"
                },
                {
                    "pretty": "Mark 1:40\u201345",
                    "readQS": "Mark+1:40-45",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+71:1-6,15-17%3B+Jeremiah+1:4-10%3B+Mark+1:40-45",
            "audioQS": "Ps.71,Jer.1,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "1 Samuel 3:1\u201320",
                    "readQS": "1+Samuel+3:1-20",
                    "audioQS": "1Sam.3"
                },
                {
                    "pretty": "1 Corinthians 14:12\u201320",
                    "readQS": "1+Corinthians+14:12-20",
                    "audioQS": "1Cor.14"
                }
            ],
            "readQS": "Psalm+34%3B+1+Samuel+3:1-20%3B+1+Corinthians+14:12-20",
            "audioQS": "Ps.34,1Sam.3,1Cor.14"
        }
    },
    "2021/02/01": {
        "datePretty": "Monday, February 1, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Hosea 9",
                    "readQS": "Hosea+9",
                    "audioQS": "Hos.9"
                },
                {
                    "pretty": "1 Corinthians 12:12\u2013end",
                    "readQS": "1+Corinthians+12:12-",
                    "audioQS": "1Cor.12"
                }
            ],
            "readQS": "Psalm+57%3B+Hosea+9%3B+1+Corinthians+12:12-",
            "audioQS": "Ps.57,Hos.9,1Cor.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 20",
                    "readQS": "Psalm+20",
                    "audioQS": "Ps.20"
                },
                {
                    "pretty": "Genesis 18:1\u201315",
                    "readQS": "Genesis+18:1-15",
                    "audioQS": "Gen.18"
                },
                {
                    "pretty": "Matthew 27:11\u201326",
                    "readQS": "Matthew+27:11-26",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+20%3B+Genesis+18:1-15%3B+Matthew+27:11-26",
            "audioQS": "Ps.20,Gen.18,Matt.27"
        }
    },
    "2021/02/02": {
        "datePretty": "Tuesday, February 2, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 93",
                    "readQS": "Psalm+93",
                    "audioQS": "Ps.93"
                },
                {
                    "pretty": "Hosea 10",
                    "readQS": "Hosea+10",
                    "audioQS": "Hos.10"
                },
                {
                    "pretty": "1 Corinthians 13",
                    "readQS": "1+Corinthians+13",
                    "audioQS": "1Cor.13"
                }
            ],
            "readQS": "Psalm+93%3B+Hosea+10%3B+1+Corinthians+13",
            "audioQS": "Ps.93,Hos.10,1Cor.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Genesis 18:16\u2013end",
                    "readQS": "Genesis+18:16-",
                    "audioQS": "Gen.18"
                },
                {
                    "pretty": "Matthew 27:27\u201344",
                    "readQS": "Matthew+27:27-44",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+19%3B+Genesis+18:16-%3B+Matthew+27:27-44",
            "audioQS": "Ps.19,Gen.18,Matt.27"
        }
    },
    "2021/02/03": {
        "datePretty": "Wednesday, February 3, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 95",
                    "readQS": "Psalm+95",
                    "audioQS": "Ps.95"
                },
                {
                    "pretty": "Hosea 11:1\u201311",
                    "readQS": "Hosea+11:1-11",
                    "audioQS": "Hos.11"
                },
                {
                    "pretty": "1 Corinthians 14:1\u201319",
                    "readQS": "1+Corinthians+14:1-19",
                    "audioQS": "1Cor.14"
                }
            ],
            "readQS": "Psalm+95%3B+Hosea+11:1-11%3B+1+Corinthians+14:1-19",
            "audioQS": "Ps.95,Hos.11,1Cor.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 81",
                    "readQS": "Psalm+81",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Genesis 19:1\u20133,19:12\u201329",
                    "readQS": "Genesis+19:1-3,19:12-29",
                    "audioQS": "Gen.19"
                },
                {
                    "pretty": "Matthew 27:45\u201356",
                    "readQS": "Matthew+27:45-56",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+81%3B+Genesis+19:1-3,19:12-29%3B+Matthew+27:45-56",
            "audioQS": "Ps.81,Gen.19,Matt.27"
        }
    },
    "2021/02/04": {
        "datePretty": "Thursday, February 4, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Hosea 11:12\u2013end",
                    "readQS": "Hosea+11:12-",
                    "audioQS": "Hos.11"
                },
                {
                    "pretty": "Hosea 12",
                    "readQS": "Hosea+12",
                    "audioQS": "Hos.12"
                },
                {
                    "pretty": "1 Corinthians 14:20\u2013end",
                    "readQS": "1+Corinthians+14:20-",
                    "audioQS": "1Cor.14"
                }
            ],
            "readQS": "Psalm+110%3B+Hosea+11:12-%3B+Hosea+12%3B+1+Corinthians+14:20-",
            "audioQS": "Ps.110,Hos.11,Hos.12,1Cor.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Genesis 21:1\u201321",
                    "readQS": "Genesis+21:1-21",
                    "audioQS": "Gen.21"
                },
                {
                    "pretty": "Matthew 27:57\u2013end",
                    "readQS": "Matthew+27:57-",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+86%3B+Genesis+21:1-21%3B+Matthew+27:57-",
            "audioQS": "Ps.86,Gen.21,Matt.27"
        }
    },
    "2021/02/05": {
        "datePretty": "Friday, February 5, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Hosea 13:1\u201314",
                    "readQS": "Hosea+13:1-14",
                    "audioQS": "Hos.13"
                },
                {
                    "pretty": "1 Corinthians 16:1\u20139",
                    "readQS": "1+Corinthians+16:1-9",
                    "audioQS": "1Cor.16"
                }
            ],
            "readQS": "Psalm+115%3B+Hosea+13:1-14%3B+1+Corinthians+16:1-9",
            "audioQS": "Ps.115,Hos.13,1Cor.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Genesis 22:1\u201319",
                    "readQS": "Genesis+22:1-19",
                    "audioQS": "Gen.22"
                },
                {
                    "pretty": "Matthew 28:1\u201315",
                    "readQS": "Matthew+28:1-15",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+147%3B+Genesis+22:1-19%3B+Matthew+28:1-15",
            "audioQS": "Ps.147,Gen.22,Matt.28"
        }
    },
    "2021/02/06": {
        "datePretty": "Saturday, February 6, 2021",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Hosea 14",
                    "readQS": "Hosea+14",
                    "audioQS": "Hos.14"
                },
                {
                    "pretty": "1 Corinthians 16:",
                    "readQS": "1+Corinthians+16:",
                    "audioQS": "1Cor.16"
                }
            ],
            "readQS": "Psalm+118%3B+Hosea+14%3B+1+Corinthians+16:",
            "audioQS": "Ps.118,Hos.14,1Cor.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 150",
                    "readQS": "Psalm+150",
                    "audioQS": "Ps.150"
                },
                {
                    "pretty": "Genesis 23",
                    "readQS": "Genesis+23",
                    "audioQS": "Gen.23"
                },
                {
                    "pretty": "Matthew 28:16\u2013end",
                    "readQS": "Matthew+28:16-",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+150%3B+Genesis+23%3B+Matthew+28:16-",
            "audioQS": "Ps.150,Gen.23,Matt.28"
        }
    },
    "2021/02/07": {
        "datePretty": "Sunday, February 7, 2021",
        "calendar": "2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 2,3",
                    "readQS": "Psalm+2,3",
                    "audioQS": "Ps.2,3"
                },
                {
                    "pretty": "Jeremiah 26:1\u201316",
                    "readQS": "Jeremiah+26:1-16",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "Acts 3:1\u201310",
                    "readQS": "Acts+3:1-10",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+2,3%3B+Jeremiah+26:1-16%3B+Acts+3:1-10",
            "audioQS": "Ps.2,3,Jer.26,Acts.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Numbers 13:1\u20132,27\u201333",
                    "readQS": "Numbers+13:1-2,27-33",
                    "audioQS": "Num.13"
                },
                {
                    "pretty": "Philippians 2:12\u201328",
                    "readQS": "Philippians+2:12-28",
                    "audioQS": "Phil.2"
                }
            ],
            "readQS": "Psalm+5%3B+Numbers+13:1-2,27-33%3B+Philippians+2:12-28",
            "audioQS": "Ps.5,Num.13,Phil.2"
        }
    },
    "2021/02/08": {
        "datePretty": "Monday, February 8, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Ecclesiastes 7:1\u201314",
                    "readQS": "Ecclesiastes+7:1-14",
                    "audioQS": "Eccl.7"
                },
                {
                    "pretty": "John 19:1\u201316",
                    "readQS": "John+19:1-16",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+30%3B+Ecclesiastes+7:1-14%3B+John+19:1-16",
            "audioQS": "Ps.30,Eccl.7,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Genesis 29:31\u201330:24",
                    "readQS": "Genesis+29:31-30:24",
                    "audioQS": "Gen.29"
                },
                {
                    "pretty": "2 Timothy 4:1\u20138",
                    "readQS": "2+Timothy+4:1-8",
                    "audioQS": "2Tim.4"
                }
            ],
            "readQS": "Psalm+28%3B+Genesis+29:31-30:24%3B+2+Timothy+4:1-8",
            "audioQS": "Ps.28,Gen.29,2Tim.4"
        }
    },
    "2021/02/09": {
        "datePretty": "Tuesday, February 9, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Ecclesiastes 7:15\u2013end",
                    "readQS": "Ecclesiastes+7:15-",
                    "audioQS": "Eccl.7"
                },
                {
                    "pretty": "John 19:17\u201330",
                    "readQS": "John+19:17-30",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+36%3B+Ecclesiastes+7:15-%3B+John+19:17-30",
            "audioQS": "Ps.36,Eccl.7,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Genesis 31:1\u201324",
                    "readQS": "Genesis+31:1-24",
                    "audioQS": "Gen.31"
                },
                {
                    "pretty": "2 Timothy 4:9\u2013end",
                    "readQS": "2+Timothy+4:9-",
                    "audioQS": "2Tim.4"
                }
            ],
            "readQS": "Psalm+33%3B+Genesis+31:1-24%3B+2+Timothy+4:9-",
            "audioQS": "Ps.33,Gen.31,2Tim.4"
        }
    },
    "2021/02/10": {
        "datePretty": "Wednesday, February 10, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Ecclesiastes 8",
                    "readQS": "Ecclesiastes+8",
                    "audioQS": "Eccl.8"
                },
                {
                    "pretty": "John 19:31\u2013end",
                    "readQS": "John+19:31-",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+34%3B+Ecclesiastes+8%3B+John+19:31-",
            "audioQS": "Ps.34,Eccl.8,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Genesis 31:25\u201332:2",
                    "readQS": "Genesis+31:25-32:2",
                    "audioQS": "Gen.31"
                },
                {
                    "pretty": "Titus 1",
                    "readQS": "Titus+1",
                    "audioQS": "Titus.1"
                }
            ],
            "readQS": "Psalm+119:33-56%3B+Genesis+31:25-32:2%3B+Titus+1",
            "audioQS": "Ps.119,Gen.31,Titus.1"
        }
    },
    "2021/02/11": {
        "datePretty": "Thursday, February 11, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Ecclesiastes 9",
                    "readQS": "Ecclesiastes+9",
                    "audioQS": "Eccl.9"
                },
                {
                    "pretty": "John 20:1\u201310",
                    "readQS": "John+20:1-10",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+37%3B+Ecclesiastes+9%3B+John+20:1-10",
            "audioQS": "Ps.37,Eccl.9,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Genesis 32:3\u201330",
                    "readQS": "Genesis+32:3-30",
                    "audioQS": "Gen.32"
                },
                {
                    "pretty": "Titus 2",
                    "readQS": "Titus+2",
                    "audioQS": "Titus.2"
                }
            ],
            "readQS": "Psalm+40%3B+Genesis+32:3-30%3B+Titus+2",
            "audioQS": "Ps.40,Gen.32,Titus.2"
        }
    },
    "2021/02/12": {
        "datePretty": "Friday, February 12, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Ecclesiastes 11:1\u20138",
                    "readQS": "Ecclesiastes+11:1-8",
                    "audioQS": "Eccl.11"
                },
                {
                    "pretty": "John 20:11\u201318",
                    "readQS": "John+20:11-18",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+31%3B+Ecclesiastes+11:1-8%3B+John+20:11-18",
            "audioQS": "Ps.31,Eccl.11,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "Genesis 33:1\u201317",
                    "readQS": "Genesis+33:1-17",
                    "audioQS": "Gen.33"
                },
                {
                    "pretty": "Titus 3",
                    "readQS": "Titus+3",
                    "audioQS": "Titus.3"
                }
            ],
            "readQS": "Psalm+35%3B+Genesis+33:1-17%3B+Titus+3",
            "audioQS": "Ps.35,Gen.33,Titus.3"
        }
    },
    "2021/02/13": {
        "datePretty": "Saturday, February 13, 2021",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Ecclesiastes 11:9\u2013end",
                    "readQS": "Ecclesiastes+11:9-",
                    "audioQS": "Eccl.11"
                },
                {
                    "pretty": "Ecclesiastes 12",
                    "readQS": "Ecclesiastes+12",
                    "audioQS": "Eccl.12"
                },
                {
                    "pretty": "John 20:19\u2013end",
                    "readQS": "John+20:19-",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+42%3B+Ecclesiastes+11:9-%3B+Ecclesiastes+12%3B+John+20:19-",
            "audioQS": "Ps.42,Eccl.11,Eccl.12,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Genesis 35",
                    "readQS": "Genesis+35",
                    "audioQS": "Gen.35"
                },
                {
                    "pretty": "Philemon",
                    "readQS": "Philemon",
                    "audioQS": "Phlm"
                }
            ],
            "readQS": "Psalm+46%3B+Genesis+35%3B+Philemon",
            "audioQS": "Ps.46,Gen.35,Phlm"
        }
    },
    "2021/02/14": {
        "datePretty": "Sunday, February 14, 2021",
        "calendar": "The Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 7",
                    "readQS": "Psalm+7",
                    "audioQS": "Ps.7"
                },
                {
                    "pretty": "Jeremiah 30:1\u20133,10\u201322",
                    "readQS": "Jeremiah+30:1-3,10-22",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "Acts 6",
                    "readQS": "Acts+6",
                    "audioQS": "Acts.6"
                }
            ],
            "readQS": "Psalm+7%3B+Jeremiah+30:1-3,10-22%3B+Acts+6",
            "audioQS": "Ps.7,Jer.30,Acts.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 6",
                    "readQS": "Psalm+6",
                    "audioQS": "Ps.6"
                },
                {
                    "pretty": "Numbers 20:2\u201313",
                    "readQS": "Numbers+20:2-13",
                    "audioQS": "Num.20"
                },
                {
                    "pretty": "Philippians 3:7\u201321",
                    "readQS": "Philippians+3:7-21",
                    "audioQS": "Phil.3"
                }
            ],
            "readQS": "Psalm+6%3B+Numbers+20:2-13%3B+Philippians+3:7-21",
            "audioQS": "Ps.6,Num.20,Phil.3"
        }
    },
    "2021/02/15": {
        "datePretty": "Monday, February 15, 2021",
        "calendar": "Week of the Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Jeremiah 1",
                    "readQS": "Jeremiah+1",
                    "audioQS": "Jer.1"
                },
                {
                    "pretty": "John 3:1\u201321",
                    "readQS": "John+3:1-21",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+44%3B+Jeremiah+1%3B+John+3:1-21",
            "audioQS": "Ps.44,Jer.1,John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Genesis 37:1\u201311",
                    "readQS": "Genesis+37:1-11",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Galatians 1",
                    "readQS": "Galatians+1",
                    "audioQS": "Gal.1"
                }
            ],
            "readQS": "Psalm+47%3B+Genesis+37:1-11%3B+Galatians+1",
            "audioQS": "Ps.47,Gen.37,Gal.1"
        }
    },
    "2021/02/16": {
        "datePretty": "Tuesday, February 16, 2021",
        "calendar": "Shrove Tuesday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Jeremiah 2:1\u201313",
                    "readQS": "Jeremiah+2:1-13",
                    "audioQS": "Jer.2"
                },
                {
                    "pretty": "John 3:22\u2013end",
                    "readQS": "John+3:22-",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+48%3B+Jeremiah+2:1-13%3B+John+3:22-",
            "audioQS": "Ps.48,Jer.2,John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Genesis 37:12\u2013end",
                    "readQS": "Genesis+37:12-",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Galatians 2:1\u201310",
                    "readQS": "Galatians+2:1-10",
                    "audioQS": "Gal.2"
                }
            ],
            "readQS": "Psalm+50%3B+Genesis+37:12-%3B+Galatians+2:1-10",
            "audioQS": "Ps.50,Gen.37,Gal.2"
        }
    },
    "2021/02/17": {
        "datePretty": "Wednesday, February 17, 2021",
        "calendar": "Ash Wednesday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "Daniel 9:3\u20136,17\u201319",
                    "readQS": "Daniel+9:3-6,17-19",
                    "audioQS": "Dan.9"
                },
                {
                    "pretty": "1 Timothy 6:6\u201319",
                    "readQS": "1+Timothy+6:6-19",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+38%3B+Daniel+9:3-6,17-19%3B+1+Timothy+6:6-19",
            "audioQS": "Ps.38,Dan.9,1Tim.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Isaiah 1:10\u201318",
                    "readQS": "Isaiah+1:10-18",
                    "audioQS": "Isa.1"
                },
                {
                    "pretty": "Luke 15:11\u201332",
                    "readQS": "Luke+15:11-32",
                    "audioQS": "Luke.15"
                }
            ],
            "readQS": "Psalm+51%3B+Isaiah+1:10-18%3B+Luke+15:11-32",
            "audioQS": "Ps.51,Isa.1,Luke.15"
        }
    },
    "2021/02/18": {
        "datePretty": "Thursday, February 18, 2021",
        "calendar": "1st day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Jeremiah 2:14\u201332",
                    "readQS": "Jeremiah+2:14-32",
                    "audioQS": "Jer.2"
                },
                {
                    "pretty": "John 4:1\u201326",
                    "readQS": "John+4:1-26",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+77%3B+Jeremiah+2:14-32%3B+John+4:1-26",
            "audioQS": "Ps.77,Jer.2,John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Genesis 39",
                    "readQS": "Genesis+39",
                    "audioQS": "Gen.39"
                },
                {
                    "pretty": "Galatians 2:11\u2013end",
                    "readQS": "Galatians+2:11-",
                    "audioQS": "Gal.2"
                }
            ],
            "readQS": "Psalm+74%3B+Genesis+39%3B+Galatians+2:11-",
            "audioQS": "Ps.74,Gen.39,Gal.2"
        }
    },
    "2021/02/19": {
        "datePretty": "Friday, February 19, 2021",
        "calendar": "2nd day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 3",
                    "readQS": "Psalm+3",
                    "audioQS": "Ps.3"
                },
                {
                    "pretty": "Jeremiah 3:6\u201322",
                    "readQS": "Jeremiah+3:6-22",
                    "audioQS": "Jer.3"
                },
                {
                    "pretty": "John 4:27\u201342",
                    "readQS": "John+4:27-42",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+3%3B+Jeremiah+3:6-22%3B+John+4:27-42",
            "audioQS": "Ps.3,Jer.3,John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Genesis 40",
                    "readQS": "Genesis+40",
                    "audioQS": "Gen.40"
                },
                {
                    "pretty": "Galatians 3:1\u201314",
                    "readQS": "Galatians+3:1-14",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+31%3B+Genesis+40%3B+Galatians+3:1-14",
            "audioQS": "Ps.31,Gen.40,Gal.3"
        }
    },
    "2021/02/20": {
        "datePretty": "Saturday, February 20, 2021",
        "calendar": "3rd day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Jeremiah 4:1\u201318",
                    "readQS": "Jeremiah+4:1-18",
                    "audioQS": "Jer.4"
                },
                {
                    "pretty": "John 4:43\u2013end",
                    "readQS": "John+4:43-",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+71%3B+Jeremiah+4:1-18%3B+John+4:43-",
            "audioQS": "Ps.71,Jer.4,John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Genesis 41:1\u201324",
                    "readQS": "Genesis+41:1-24",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 3:15\u201322",
                    "readQS": "Galatians+3:15-22",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+73%3B+Genesis+41:1-24%3B+Galatians+3:15-22",
            "audioQS": "Ps.73,Gen.41,Gal.3"
        }
    },
    "2021/02/21": {
        "datePretty": "Sunday, February 21, 2021",
        "calendar": "1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Exodus 34:1\u201310",
                    "readQS": "Exodus+34:1-10",
                    "audioQS": "Exod.34"
                },
                {
                    "pretty": "Romans 10:8b\u201313",
                    "readQS": "Romans+10:8b-13",
                    "audioQS": "Rom.10"
                }
            ],
            "readQS": "Psalm+77%3B+Exodus+34:1-10%3B+Romans+10:8b-13",
            "audioQS": "Ps.77,Exod.34,Rom.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:17\u201332",
                    "readQS": "Psalm+119:17-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Genesis 2:15\u201317",
                    "readQS": "Genesis+2:15-17",
                    "audioQS": "Gen.2"
                },
                {
                    "pretty": "Romans 5:12\u201319",
                    "readQS": "Romans+5:12-19",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+119:17-32%3B+Genesis+2:15-17%3B+Romans+5:12-19",
            "audioQS": "Ps.119,Gen.2,Rom.5"
        }
    },
    "2021/02/22": {
        "datePretty": "Monday, February 22, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Jeremiah 4:19\u2013end",
                    "readQS": "Jeremiah+4:19-",
                    "audioQS": "Jer.4"
                },
                {
                    "pretty": "John 5:1\u201318",
                    "readQS": "John+5:1-18",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+11%3B+Jeremiah+4:19-%3B+John+5:1-18",
            "audioQS": "Ps.11,Jer.4,John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 13",
                    "readQS": "Psalm+13",
                    "audioQS": "Ps.13"
                },
                {
                    "pretty": "Genesis 41:25\u201345",
                    "readQS": "Genesis+41:25-45",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 3:23\u20134:7",
                    "readQS": "Galatians+3:23-4:7",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+13%3B+Genesis+41:25-45%3B+Galatians+3:23-4:7",
            "audioQS": "Ps.13,Gen.41,Gal.3"
        }
    },
    "2021/02/23": {
        "datePretty": "Tuesday, February 23, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Jeremiah 5:1\u201319",
                    "readQS": "Jeremiah+5:1-19",
                    "audioQS": "Jer.5"
                },
                {
                    "pretty": "John 5:19\u201329",
                    "readQS": "John+5:19-29",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+44%3B+Jeremiah+5:1-19%3B+John+5:19-29",
            "audioQS": "Ps.44,Jer.5,John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
                },
                {
                    "pretty": "Genesis 41:46\u201342:5",
                    "readQS": "Genesis+41:46-42:5",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 4:8\u201320",
                    "readQS": "Galatians+4:8-20",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+49%3B+Genesis+41:46-42:5%3B+Galatians+4:8-20",
            "audioQS": "Ps.49,Gen.41,Gal.4"
        }
    },
    "2021/02/24": {
        "datePretty": "Wednesday, February 24, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 6",
                    "readQS": "Psalm+6",
                    "audioQS": "Ps.6"
                },
                {
                    "pretty": "Jeremiah 5:20\u2013end",
                    "readQS": "Jeremiah+5:20-",
                    "audioQS": "Jer.5"
                },
                {
                    "pretty": "John 5:30\u2013end",
                    "readQS": "John+5:30-",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+6%3B+Jeremiah+5:20-%3B+John+5:30-",
            "audioQS": "Ps.6,Jer.5,John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Genesis 42:6\u201317",
                    "readQS": "Genesis+42:6-17",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 4:21\u20135:1",
                    "readQS": "Galatians+4:21-5:1",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+28%3B+Genesis+42:6-17%3B+Galatians+4:21-5:1",
            "audioQS": "Ps.28,Gen.42,Gal.4"
        }
    },
    "2021/02/25": {
        "datePretty": "Thursday, February 25, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Jeremiah 6:9\u201321",
                    "readQS": "Jeremiah+6:9-21",
                    "audioQS": "Jer.6"
                },
                {
                    "pretty": "John 6:1\u201315",
                    "readQS": "John+6:1-15",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+42%3B+Jeremiah+6:9-21%3B+John+6:1-15",
            "audioQS": "Ps.42,Jer.6,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 142",
                    "readQS": "Psalm+142",
                    "audioQS": "Ps.142"
                },
                {
                    "pretty": "Genesis 42:18\u201328",
                    "readQS": "Genesis+42:18-28",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 5:2\u201315",
                    "readQS": "Galatians+5:2-15",
                    "audioQS": "Gal.5"
                }
            ],
            "readQS": "Psalm+142%3B+Genesis+42:18-28%3B+Galatians+5:2-15",
            "audioQS": "Ps.142,Gen.42,Gal.5"
        }
    },
    "2021/02/26": {
        "datePretty": "Friday, February 26, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Jeremiah 6:22\u2013end",
                    "readQS": "Jeremiah+6:22-",
                    "audioQS": "Jer.6"
                },
                {
                    "pretty": "John 6:16\u201327",
                    "readQS": "John+6:16-27",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+22%3B+Jeremiah+6:22-%3B+John+6:16-27",
            "audioQS": "Ps.22,Jer.6,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Genesis 42:29\u2013end",
                    "readQS": "Genesis+42:29-",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 5:16\u2013end",
                    "readQS": "Galatians+5:16-",
                    "audioQS": "Gal.5"
                }
            ],
            "readQS": "Psalm+55%3B+Genesis+42:29-%3B+Galatians+5:16-",
            "audioQS": "Ps.55,Gen.42,Gal.5"
        }
    },
    "2021/02/27": {
        "datePretty": "Saturday, February 27, 2021",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 63",
                    "readQS": "Psalm+63",
                    "audioQS": "Ps.63"
                },
                {
                    "pretty": "Jeremiah 7:1\u201320",
                    "readQS": "Jeremiah+7:1-20",
                    "audioQS": "Jer.7"
                },
                {
                    "pretty": "John 6:27\u201340",
                    "readQS": "John+6:27-40",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+63%3B+Jeremiah+7:1-20%3B+John+6:27-40",
            "audioQS": "Ps.63,Jer.7,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Genesis 43:1\u201315",
                    "readQS": "Genesis+43:1-15",
                    "audioQS": "Gen.43"
                },
                {
                    "pretty": "Galatians 6",
                    "readQS": "Galatians+6",
                    "audioQS": "Gal.6"
                }
            ],
            "readQS": "Psalm+4%3B+Genesis+43:1-15%3B+Galatians+6",
            "audioQS": "Ps.4,Gen.43,Gal.6"
        }
    },
    "2021/02/28": {
        "datePretty": "Sunday, February 28, 2021",
        "calendar": "2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 105:1\u20136,37\u201345",
                    "readQS": "Psalm+105:1-6,37-45",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Isaiah 51:1\u201311",
                    "readQS": "Isaiah+51:1-11",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "Galatians 3:1\u20139,23\u201329",
                    "readQS": "Galatians+3:1-9,23-29",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+105:1-6,37-45%3B+Isaiah+51:1-11%3B+Galatians+3:1-9,23-29",
            "audioQS": "Ps.105,Isa.51,Gal.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Genesis 12:1\u20139",
                    "readQS": "Genesis+12:1-9",
                    "audioQS": "Gen.12"
                },
                {
                    "pretty": "Hebrews 11:1\u20133,8\u201316",
                    "readQS": "Hebrews+11:1-3,8-16",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+135%3B+Genesis+12:1-9%3B+Hebrews+11:1-3,8-16",
            "audioQS": "Ps.135,Gen.12,Heb.11"
        }
    },
    "2021/03/01": {
        "datePretty": "Monday, March 1, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 32",
                    "readQS": "Psalm+32",
                    "audioQS": "Ps.32"
                },
                {
                    "pretty": "Jeremiah 7:21\u2013end",
                    "readQS": "Jeremiah+7:21-",
                    "audioQS": "Jer.7"
                },
                {
                    "pretty": "John 6:41\u201351",
                    "readQS": "John+6:41-51",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+32%3B+Jeremiah+7:21-%3B+John+6:41-51",
            "audioQS": "Ps.32,Jer.7,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 17",
                    "readQS": "Psalm+17",
                    "audioQS": "Ps.17"
                },
                {
                    "pretty": "Genesis 43:16\u2013end",
                    "readQS": "Genesis+43:16-",
                    "audioQS": "Gen.43"
                },
                {
                    "pretty": "Hebrews 1",
                    "readQS": "Hebrews+1",
                    "audioQS": "Heb.1"
                }
            ],
            "readQS": "Psalm+17%3B+Genesis+43:16-%3B+Hebrews+1",
            "audioQS": "Ps.17,Gen.43,Heb.1"
        }
    },
    "2021/03/02": {
        "datePretty": "Tuesday, March 2, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Jeremiah 8:1\u201315",
                    "readQS": "Jeremiah+8:1-15",
                    "audioQS": "Jer.8"
                },
                {
                    "pretty": "John 6:52\u201359",
                    "readQS": "John+6:52-59",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+50%3B+Jeremiah+8:1-15%3B+John+6:52-59",
            "audioQS": "Ps.50,Jer.8,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 64",
                    "readQS": "Psalm+64",
                    "audioQS": "Ps.64"
                },
                {
                    "pretty": "Genesis 44:1\u201317",
                    "readQS": "Genesis+44:1-17",
                    "audioQS": "Gen.44"
                },
                {
                    "pretty": "Hebrews 2:1\u20139",
                    "readQS": "Hebrews+2:1-9",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+64%3B+Genesis+44:1-17%3B+Hebrews+2:1-9",
            "audioQS": "Ps.64,Gen.44,Heb.2"
        }
    },
    "2021/03/03": {
        "datePretty": "Wednesday, March 3, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "Jeremiah 8:18\u20139:11",
                    "readQS": "Jeremiah+8:18-9:11",
                    "audioQS": "Jer.8"
                },
                {
                    "pretty": "John 6:60\u2013end",
                    "readQS": "John+6:60-",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+35%3B+Jeremiah+8:18-9:11%3B+John+6:60-",
            "audioQS": "Ps.35,Jer.8,John.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 39",
                    "readQS": "Psalm+39",
                    "audioQS": "Ps.39"
                },
                {
                    "pretty": "Genesis 44:18\u2013end",
                    "readQS": "Genesis+44:18-",
                    "audioQS": "Gen.44"
                },
                {
                    "pretty": "Hebrews 2:10\u2013end",
                    "readQS": "Hebrews+2:10-",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+39%3B+Genesis+44:18-%3B+Hebrews+2:10-",
            "audioQS": "Ps.39,Gen.44,Heb.2"
        }
    },
    "2021/03/04": {
        "datePretty": "Thursday, March 4, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Jeremiah 9:12\u201324",
                    "readQS": "Jeremiah+9:12-24",
                    "audioQS": "Jer.9"
                },
                {
                    "pretty": "John 7:1\u201313",
                    "readQS": "John+7:1-13",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+34%3B+Jeremiah+9:12-24%3B+John+7:1-13",
            "audioQS": "Ps.34,Jer.9,John.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "Genesis 45:1\u201315",
                    "readQS": "Genesis+45:1-15",
                    "audioQS": "Gen.45"
                },
                {
                    "pretty": "Hebrews 3:1\u20136",
                    "readQS": "Hebrews+3:1-6",
                    "audioQS": "Heb.3"
                }
            ],
            "readQS": "Psalm+59%3B+Genesis+45:1-15%3B+Hebrews+3:1-6",
            "audioQS": "Ps.59,Gen.45,Heb.3"
        }
    },
    "2021/03/05": {
        "datePretty": "Friday, March 5, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 41",
                    "readQS": "Psalm+41",
                    "audioQS": "Ps.41"
                },
                {
                    "pretty": "Jeremiah 10:1\u201316",
                    "readQS": "Jeremiah+10:1-16",
                    "audioQS": "Jer.10"
                },
                {
                    "pretty": "John 7:14\u201324",
                    "readQS": "John+7:14-24",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+41%3B+Jeremiah+10:1-16%3B+John+7:14-24",
            "audioQS": "Ps.41,Jer.10,John.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "Genesis 45:16\u2013end",
                    "readQS": "Genesis+45:16-",
                    "audioQS": "Gen.45"
                },
                {
                    "pretty": "Hebrews 3:7\u2013end",
                    "readQS": "Hebrews+3:7-",
                    "audioQS": "Heb.3"
                }
            ],
            "readQS": "Psalm+69%3B+Genesis+45:16-%3B+Hebrews+3:7-",
            "audioQS": "Ps.69,Gen.45,Heb.3"
        }
    },
    "2021/03/06": {
        "datePretty": "Saturday, March 6, 2021",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Jeremiah 10:17\u201324",
                    "readQS": "Jeremiah+10:17-24",
                    "audioQS": "Jer.10"
                },
                {
                    "pretty": "John 7:25\u201336",
                    "readQS": "John+7:25-36",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+25%3B+Jeremiah+10:17-24%3B+John+7:25-36",
            "audioQS": "Ps.25,Jer.10,John.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Genesis 46:1\u20137,46:28\u2013end",
                    "readQS": "Genesis+46:1-7,46:28-",
                    "audioQS": "Gen.46"
                },
                {
                    "pretty": "Hebrews 4:1\u201313",
                    "readQS": "Hebrews+4:1-13",
                    "audioQS": "Heb.4"
                }
            ],
            "readQS": "Psalm+116%3B+Genesis+46:1-7,46:28-%3B+Hebrews+4:1-13",
            "audioQS": "Ps.116,Gen.46,Heb.4"
        }
    },
    "2021/03/07": {
        "datePretty": "Sunday, March 7, 2021",
        "calendar": "3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 18:1\u201325",
                    "readQS": "Psalm+18:1-25",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Jeremiah 38",
                    "readQS": "Jeremiah+38",
                    "audioQS": "Jer.38"
                },
                {
                    "pretty": "Philippians 1:1\u201326",
                    "readQS": "Philippians+1:1-26",
                    "audioQS": "Phil.1"
                }
            ],
            "readQS": "Psalm+18:1-25%3B+Jeremiah+38%3B+Philippians+1:1-26",
            "audioQS": "Ps.18,Jer.38,Phil.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11,12",
                    "readQS": "Psalm+11,12",
                    "audioQS": "Ps.11,12"
                },
                {
                    "pretty": "Exodus 5:1\u20136:1",
                    "readQS": "Exodus+5:1-6:1",
                    "audioQS": "Exod.5"
                },
                {
                    "pretty": "Matthew 10:16\u201322",
                    "readQS": "Matthew+10:16-22",
                    "audioQS": "Matt.10"
                }
            ],
            "readQS": "Psalm+11,12%3B+Exodus+5:1-6:1%3B+Matthew+10:16-22",
            "audioQS": "Ps.11,12,Exod.5,Matt.10"
        }
    },
    "2021/03/08": {
        "datePretty": "Monday, March 8, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Jeremiah 11:1\u201317",
                    "readQS": "Jeremiah+11:1-17",
                    "audioQS": "Jer.11"
                },
                {
                    "pretty": "John 7:37\u201352",
                    "readQS": "John+7:37-52",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+5%3B+Jeremiah+11:1-17%3B+John+7:37-52",
            "audioQS": "Ps.5,Jer.11,John.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 17",
                    "readQS": "Psalm+17",
                    "audioQS": "Ps.17"
                },
                {
                    "pretty": "Genesis 47:1\u201327",
                    "readQS": "Genesis+47:1-27",
                    "audioQS": "Gen.47"
                },
                {
                    "pretty": "Hebrews 4:14\u20135:10",
                    "readQS": "Hebrews+4:14-5:10",
                    "audioQS": "Heb.4"
                }
            ],
            "readQS": "Psalm+17%3B+Genesis+47:1-27%3B+Hebrews+4:14-5:10",
            "audioQS": "Ps.17,Gen.47,Heb.4"
        }
    },
    "2021/03/09": {
        "datePretty": "Tuesday, March 9, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Jeremiah 11:18\u201312:6",
                    "readQS": "Jeremiah+11:18-12:6",
                    "audioQS": "Jer.11"
                },
                {
                    "pretty": "John 7:53\u20138:11",
                    "readQS": "John+7:53-8:11",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+9%3B+Jeremiah+11:18-12:6%3B+John+7:53-8:11",
            "audioQS": "Ps.9,Jer.11,John.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 64",
                    "readQS": "Psalm+64",
                    "audioQS": "Ps.64"
                },
                {
                    "pretty": "Genesis 47:28\u2013end",
                    "readQS": "Genesis+47:28-",
                    "audioQS": "Gen.47"
                },
                {
                    "pretty": "Genesis 48",
                    "readQS": "Genesis+48",
                    "audioQS": "Gen.48"
                },
                {
                    "pretty": "Hebrews 5:11\u20136:12",
                    "readQS": "Hebrews+5:11-6:12",
                    "audioQS": "Heb.5"
                }
            ],
            "readQS": "Psalm+64%3B+Genesis+47:28-%3B+Genesis+48%3B+Hebrews+5:11-6:12",
            "audioQS": "Ps.64,Gen.47,Gen.48,Heb.5"
        }
    },
    "2021/03/10": {
        "datePretty": "Wednesday, March 10, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "Jeremiah 13:1\u201311",
                    "readQS": "Jeremiah+13:1-11",
                    "audioQS": "Jer.13"
                },
                {
                    "pretty": "John 8:12\u201330",
                    "readQS": "John+8:12-30",
                    "audioQS": "John.8"
                }
            ],
            "readQS": "Psalm+38%3B+Jeremiah+13:1-11%3B+John+8:12-30",
            "audioQS": "Ps.38,Jer.13,John.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 39",
                    "readQS": "Psalm+39",
                    "audioQS": "Ps.39"
                },
                {
                    "pretty": "Genesis 49:1\u201332",
                    "readQS": "Genesis+49:1-32",
                    "audioQS": "Gen.49"
                },
                {
                    "pretty": "Hebrews 6:13\u2013end",
                    "readQS": "Hebrews+6:13-",
                    "audioQS": "Heb.6"
                }
            ],
            "readQS": "Psalm+39%3B+Genesis+49:1-32%3B+Hebrews+6:13-",
            "audioQS": "Ps.39,Gen.49,Heb.6"
        }
    },
    "2021/03/11": {
        "datePretty": "Thursday, March 11, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "Jeremiah 14",
                    "readQS": "Jeremiah+14",
                    "audioQS": "Jer.14"
                },
                {
                    "pretty": "John 8:31\u201347",
                    "readQS": "John+8:31-47",
                    "audioQS": "John.8"
                }
            ],
            "readQS": "Psalm+56%3B+Jeremiah+14%3B+John+8:31-47",
            "audioQS": "Ps.56,Jer.14,John.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "Genesis 49:33\u2013end",
                    "readQS": "Genesis+49:33-",
                    "audioQS": "Gen.49"
                },
                {
                    "pretty": "Genesis 50",
                    "readQS": "Genesis+50",
                    "audioQS": "Gen.50"
                },
                {
                    "pretty": "Hebrews 7:1\u201310",
                    "readQS": "Hebrews+7:1-10",
                    "audioQS": "Heb.7"
                }
            ],
            "readQS": "Psalm+59%3B+Genesis+49:33-%3B+Genesis+50%3B+Hebrews+7:1-10",
            "audioQS": "Ps.59,Gen.49,Gen.50,Heb.7"
        }
    },
    "2021/03/12": {
        "datePretty": "Friday, March 12, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Jeremiah 15:10\u2013end",
                    "readQS": "Jeremiah+15:10-",
                    "audioQS": "Jer.15"
                },
                {
                    "pretty": "John 8:48\u2013end",
                    "readQS": "John+8:48-",
                    "audioQS": "John.8"
                }
            ],
            "readQS": "Psalm+22%3B+Jeremiah+15:10-%3B+John+8:48-",
            "audioQS": "Ps.22,Jer.15,John.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "Exodus 1:1\u201314",
                    "readQS": "Exodus+1:1-14",
                    "audioQS": "Exod.1"
                },
                {
                    "pretty": "Hebrews 7:11\u2013end",
                    "readQS": "Hebrews+7:11-",
                    "audioQS": "Heb.7"
                }
            ],
            "readQS": "Psalm+69%3B+Exodus+1:1-14%3B+Hebrews+7:11-",
            "audioQS": "Ps.69,Exod.1,Heb.7"
        }
    },
    "2021/03/13": {
        "datePretty": "Saturday, March 13, 2021",
        "calendar": "Week of 3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Jeremiah 16:10\u201317:4",
                    "readQS": "Jeremiah+16:10-17:4",
                    "audioQS": "Jer.16"
                },
                {
                    "pretty": "John 9:1\u201317",
                    "readQS": "John+9:1-17",
                    "audioQS": "John.9"
                }
            ],
            "readQS": "Psalm+31%3B+Jeremiah+16:10-17:4%3B+John+9:1-17",
            "audioQS": "Ps.31,Jer.16,John.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Exodus 1:22\u20132:10",
                    "readQS": "Exodus+1:22-2:10",
                    "audioQS": "Exod.1"
                },
                {
                    "pretty": "Hebrews 8",
                    "readQS": "Hebrews+8",
                    "audioQS": "Heb.8"
                }
            ],
            "readQS": "Psalm+116%3B+Exodus+1:22-2:10%3B+Hebrews+8",
            "audioQS": "Ps.116,Exod.1,Heb.8"
        }
    },
    "2021/03/14": {
        "datePretty": "Sunday, March 14, 2021",
        "calendar": "4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "1 Samuel 16:1\u201313",
                    "readQS": "1+Samuel+16:1-13",
                    "audioQS": "1Sam.16"
                },
                {
                    "pretty": "John 9:1\u201325",
                    "readQS": "John+9:1-25",
                    "audioQS": "John.9"
                }
            ],
            "readQS": "Psalm+27%3B+1+Samuel+16:1-13%3B+John+9:1-25",
            "audioQS": "Ps.27,1Sam.16,John.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 13,14",
                    "readQS": "Psalm+13,14",
                    "audioQS": "Ps.13,14"
                },
                {
                    "pretty": "Exodus 6:2\u201313",
                    "readQS": "Exodus+6:2-13",
                    "audioQS": "Exod.6"
                },
                {
                    "pretty": "Romans 5:1\u201311",
                    "readQS": "Romans+5:1-11",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+13,14%3B+Exodus+6:2-13%3B+Romans+5:1-11",
            "audioQS": "Ps.13,14,Exod.6,Rom.5"
        }
    },
    "2021/03/15": {
        "datePretty": "Monday, March 15, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Jeremiah 17:5\u201318",
                    "readQS": "Jeremiah+17:5-18",
                    "audioQS": "Jer.17"
                },
                {
                    "pretty": "John 9:18\u2013end",
                    "readQS": "John+9:18-",
                    "audioQS": "John.9"
                }
            ],
            "readQS": "Psalm+77%3B+Jeremiah+17:5-18%3B+John+9:18-",
            "audioQS": "Ps.77,Jer.17,John.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Exodus 2:11\u201322",
                    "readQS": "Exodus+2:11-22",
                    "audioQS": "Exod.2"
                },
                {
                    "pretty": "Hebrews 9:1\u201314",
                    "readQS": "Hebrews+9:1-14",
                    "audioQS": "Heb.9"
                }
            ],
            "readQS": "Psalm+25%3B+Exodus+2:11-22%3B+Hebrews+9:1-14",
            "audioQS": "Ps.25,Exod.2,Heb.9"
        }
    },
    "2021/03/16": {
        "datePretty": "Tuesday, March 16, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 79",
                    "readQS": "Psalm+79",
                    "audioQS": "Ps.79"
                },
                {
                    "pretty": "Jeremiah 18:1\u201312",
                    "readQS": "Jeremiah+18:1-12",
                    "audioQS": "Jer.18"
                },
                {
                    "pretty": "John 10:1\u201310",
                    "readQS": "John+10:1-10",
                    "audioQS": "John.10"
                }
            ],
            "readQS": "Psalm+79%3B+Jeremiah+18:1-12%3B+John+10:1-10",
            "audioQS": "Ps.79,Jer.18,John.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Exodus 2:23\u20133:20",
                    "readQS": "Exodus+2:23-3:20",
                    "audioQS": "Exod.2"
                },
                {
                    "pretty": "Hebrews 9:15\u2013end",
                    "readQS": "Hebrews+9:15-",
                    "audioQS": "Heb.9"
                }
            ],
            "readQS": "Psalm+80%3B+Exodus+2:23-3:20%3B+Hebrews+9:15-",
            "audioQS": "Ps.80,Exod.2,Heb.9"
        }
    },
    "2021/03/17": {
        "datePretty": "Wednesday, March 17, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Jeremiah 18:13\u2013end",
                    "readQS": "Jeremiah+18:13-",
                    "audioQS": "Jer.18"
                },
                {
                    "pretty": "John 10:11\u201321",
                    "readQS": "John+10:11-21",
                    "audioQS": "John.10"
                }
            ],
            "readQS": "Psalm+90%3B+Jeremiah+18:13-%3B+John+10:11-21",
            "audioQS": "Ps.90,Jer.18,John.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "Exodus 4:1\u201323",
                    "readQS": "Exodus+4:1-23",
                    "audioQS": "Exod.4"
                },
                {
                    "pretty": "Hebrews 10:1\u201318",
                    "readQS": "Hebrews+10:1-18",
                    "audioQS": "Heb.10"
                }
            ],
            "readQS": "Psalm+91%3B+Exodus+4:1-23%3B+Hebrews+10:1-18",
            "audioQS": "Ps.91,Exod.4,Heb.10"
        }
    },
    "2021/03/18": {
        "datePretty": "Thursday, March 18, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Jeremiah 19:1\u201313",
                    "readQS": "Jeremiah+19:1-13",
                    "audioQS": "Jer.19"
                },
                {
                    "pretty": "John 10:22\u2013end",
                    "readQS": "John+10:22-",
                    "audioQS": "John.10"
                }
            ],
            "readQS": "Psalm+86%3B+Jeremiah+19:1-13%3B+John+10:22-",
            "audioQS": "Ps.86,Jer.19,John.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "Exodus 4:27\u20136:1",
                    "readQS": "Exodus+4:27-6:1",
                    "audioQS": "Exod.4"
                },
                {
                    "pretty": "Hebrews 10:19\u201325",
                    "readQS": "Hebrews+10:19-25",
                    "audioQS": "Heb.10"
                }
            ],
            "readQS": "Psalm+94%3B+Exodus+4:27-6:1%3B+Hebrews+10:19-25",
            "audioQS": "Ps.94,Exod.4,Heb.10"
        }
    },
    "2021/03/19": {
        "datePretty": "Friday, March 19, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "Jeremiah 19:14\u201320:6",
                    "readQS": "Jeremiah+19:14-20:6",
                    "audioQS": "Jer.19"
                },
                {
                    "pretty": "John 11:1\u201316",
                    "readQS": "John+11:1-16",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+102%3B+Jeremiah+19:14-20:6%3B+John+11:1-16",
            "audioQS": "Ps.102,Jer.19,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 16",
                    "readQS": "Psalm+16",
                    "audioQS": "Ps.16"
                },
                {
                    "pretty": "Exodus 6:2\u201313",
                    "readQS": "Exodus+6:2-13",
                    "audioQS": "Exod.6"
                },
                {
                    "pretty": "Hebrews 10:26\u2013end",
                    "readQS": "Hebrews+10:26-",
                    "audioQS": "Heb.10"
                }
            ],
            "readQS": "Psalm+16%3B+Exodus+6:2-13%3B+Hebrews+10:26-",
            "audioQS": "Ps.16,Exod.6,Heb.10"
        }
    },
    "2021/03/20": {
        "datePretty": "Saturday, March 20, 2021",
        "calendar": "Week of 4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 32",
                    "readQS": "Psalm+32",
                    "audioQS": "Ps.32"
                },
                {
                    "pretty": "Jeremiah 20:7\u2013end",
                    "readQS": "Jeremiah+20:7-",
                    "audioQS": "Jer.20"
                },
                {
                    "pretty": "John 11:17\u201327",
                    "readQS": "John+11:17-27",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+32%3B+Jeremiah+20:7-%3B+John+11:17-27",
            "audioQS": "Ps.32,Jer.20,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 140",
                    "readQS": "Psalm+140",
                    "audioQS": "Ps.140"
                },
                {
                    "pretty": "Exodus 7:8\u2013end",
                    "readQS": "Exodus+7:8-",
                    "audioQS": "Exod.7"
                },
                {
                    "pretty": "Hebrews 11:1\u201316",
                    "readQS": "Hebrews+11:1-16",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+140%3B+Exodus+7:8-%3B+Hebrews+11:1-16",
            "audioQS": "Ps.140,Exod.7,Heb.11"
        }
    },
    "2021/03/21": {
        "datePretty": "Sunday, March 21, 2021",
        "calendar": "5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 107:1\u201322",
                    "readQS": "Psalm+107:1-22",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "Exodus 24:3\u20138",
                    "readQS": "Exodus+24:3-8",
                    "audioQS": "Exod.24"
                },
                {
                    "pretty": "Hebrews 12:18\u201329",
                    "readQS": "Hebrews+12:18-29",
                    "audioQS": "Heb.12"
                }
            ],
            "readQS": "Psalm+107:1-22%3B+Exodus+24:3-8%3B+Hebrews+12:18-29",
            "audioQS": "Ps.107,Exod.24,Heb.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Exodus 7:8\u201324",
                    "readQS": "Exodus+7:8-24",
                    "audioQS": "Exod.7"
                },
                {
                    "pretty": "Romans 5:12\u201321",
                    "readQS": "Romans+5:12-21",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+34%3B+Exodus+7:8-24%3B+Romans+5:12-21",
            "audioQS": "Ps.34,Exod.7,Rom.5"
        }
    },
    "2021/03/22": {
        "datePretty": "Monday, March 22, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Jeremiah 21:1\u201310",
                    "readQS": "Jeremiah+21:1-10",
                    "audioQS": "Jer.21"
                },
                {
                    "pretty": "John 11:28\u201344",
                    "readQS": "John+11:28-44",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+73%3B+Jeremiah+21:1-10%3B+John+11:28-44",
            "audioQS": "Ps.73,Jer.21,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 26",
                    "readQS": "Psalm+26",
                    "audioQS": "Ps.26"
                },
                {
                    "pretty": "Exodus 8:1\u201319",
                    "readQS": "Exodus+8:1-19",
                    "audioQS": "Exod.8"
                },
                {
                    "pretty": "Hebrews 11:17\u201331",
                    "readQS": "Hebrews+11:17-31",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+26%3B+Exodus+8:1-19%3B+Hebrews+11:17-31",
            "audioQS": "Ps.26,Exod.8,Heb.11"
        }
    },
    "2021/03/23": {
        "datePretty": "Tuesday, March 23, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "Jeremiah 22:1\u20135,22:13\u201319",
                    "readQS": "Jeremiah+22:1-5,22:13-19",
                    "audioQS": "Jer.22"
                },
                {
                    "pretty": "John 11:45\u2013end",
                    "readQS": "John+11:45-",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+35%3B+Jeremiah+22:1-5,22:13-19%3B+John+11:45-",
            "audioQS": "Ps.35,Jer.22,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Exodus 8:20\u2013end",
                    "readQS": "Exodus+8:20-",
                    "audioQS": "Exod.8"
                },
                {
                    "pretty": "Hebrews 11:32\u201312:2",
                    "readQS": "Hebrews+11:32-12:2",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+61%3B+Exodus+8:20-%3B+Hebrews+11:32-12:2",
            "audioQS": "Ps.61,Exod.8,Heb.11"
        }
    },
    "2021/03/24": {
        "datePretty": "Wednesday, March 24, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Jeremiah 22:20\u201323:8",
                    "readQS": "Jeremiah+22:20-23:8",
                    "audioQS": "Jer.22"
                },
                {
                    "pretty": "John 12:1\u201311",
                    "readQS": "John+12:1-11",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+55%3B+Jeremiah+22:20-23:8%3B+John+12:1-11",
            "audioQS": "Ps.55,Jer.22,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "Exodus 9:1\u201312",
                    "readQS": "Exodus+9:1-12",
                    "audioQS": "Exod.9"
                },
                {
                    "pretty": "Hebrews 12:3\u201313",
                    "readQS": "Hebrews+12:3-13",
                    "audioQS": "Heb.12"
                }
            ],
            "readQS": "Psalm+62%3B+Exodus+9:1-12%3B+Hebrews+12:3-13",
            "audioQS": "Ps.62,Exod.9,Heb.12"
        }
    },
    "2021/03/25": {
        "datePretty": "Thursday, March 25, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Jeremiah 23:9\u201332",
                    "readQS": "Jeremiah+23:9-32",
                    "audioQS": "Jer.23"
                },
                {
                    "pretty": "John 12:12\u201319",
                    "readQS": "John+12:12-19",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+40%3B+Jeremiah+23:9-32%3B+John+12:12-19",
            "audioQS": "Ps.40,Jer.23,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
                },
                {
                    "pretty": "Exodus 9:13\u2013end",
                    "readQS": "Exodus+9:13-",
                    "audioQS": "Exod.9"
                },
                {
                    "pretty": "Hebrews 12:14\u2013end",
                    "readQS": "Hebrews+12:14-",
                    "audioQS": "Heb.12"
                }
            ],
            "readQS": "Psalm+43%3B+Exodus+9:13-%3B+Hebrews+12:14-",
            "audioQS": "Ps.43,Exod.9,Heb.12"
        }
    },
    "2021/03/26": {
        "datePretty": "Friday, March 26, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Jeremiah 24",
                    "readQS": "Jeremiah+24",
                    "audioQS": "Jer.24"
                },
                {
                    "pretty": "John 12:20\u201336a",
                    "readQS": "John+12:20-36a",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+22%3B+Jeremiah+24%3B+John+12:20-36a",
            "audioQS": "Ps.22,Jer.24,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Exodus 10",
                    "readQS": "Exodus+10",
                    "audioQS": "Exod.10"
                },
                {
                    "pretty": "Hebrews 13:1\u201316",
                    "readQS": "Hebrews+13:1-16",
                    "audioQS": "Heb.13"
                }
            ],
            "readQS": "Psalm+31%3B+Exodus+10%3B+Hebrews+13:1-16",
            "audioQS": "Ps.31,Exod.10,Heb.13"
        }
    },
    "2021/03/27": {
        "datePretty": "Saturday, March 27, 2021",
        "calendar": "Week of 5th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Jeremiah 25:1\u201314",
                    "readQS": "Jeremiah+25:1-14",
                    "audioQS": "Jer.25"
                },
                {
                    "pretty": "John 12:36b\u2013end",
                    "readQS": "John+12:36b-",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+23%3B+Jeremiah+25:1-14%3B+John+12:36b-",
            "audioQS": "Ps.23,Jer.25,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "Exodus 11",
                    "readQS": "Exodus+11",
                    "audioQS": "Exod.11"
                },
                {
                    "pretty": "Hebrews 13:17\u2013end",
                    "readQS": "Hebrews+13:17-",
                    "audioQS": "Heb.13"
                }
            ],
            "readQS": "Psalm+130%3B+Exodus+11%3B+Hebrews+13:17-",
            "audioQS": "Ps.130,Exod.11,Heb.13"
        }
    },
    "2021/03/28": {
        "datePretty": "Sunday, March 28, 2021",
        "calendar": "Palm Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 61,62",
                    "readQS": "Psalm+61,62",
                    "audioQS": "Ps.61,62"
                },
                {
                    "pretty": "Zechariah 9:9\u201312",
                    "readQS": "Zechariah+9:9-12",
                    "audioQS": "Zech.9"
                },
                {
                    "pretty": "1 Corinthians 2:1\u201312",
                    "readQS": "1+Corinthians+2:1-12",
                    "audioQS": "1Cor.2"
                }
            ],
            "readQS": "Psalm+61,62%3B+Zechariah+9:9-12%3B+1+Corinthians+2:1-12",
            "audioQS": "Ps.61,62,Zech.9,1Cor.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69:1\u201320",
                    "readQS": "Psalm+69:1-20",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "Isaiah 5:1\u20137",
                    "readQS": "Isaiah+5:1-7",
                    "audioQS": "Isa.5"
                },
                {
                    "pretty": "Mark 12:1\u201312",
                    "readQS": "Mark+12:1-12",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+69:1-20%3B+Isaiah+5:1-7%3B+Mark+12:1-12",
            "audioQS": "Ps.69,Isa.5,Mark.12"
        }
    },
    "2021/03/29": {
        "datePretty": "Monday, March 29, 2021",
        "calendar": "Monday in Holy Week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 41",
                    "readQS": "Psalm+41",
                    "audioQS": "Ps.41"
                },
                {
                    "pretty": "Lamentations 1:1\u201312a",
                    "readQS": "Lamentations+1:1-12a",
                    "audioQS": "Lam.1"
                },
                {
                    "pretty": "Luke 22:1\u201323",
                    "readQS": "Luke+22:1-23",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+41%3B+Lamentations+1:1-12a%3B+Luke+22:1-23",
            "audioQS": "Ps.41,Lam.1,Luke.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Lamentations 2:8\u201319",
                    "readQS": "Lamentations+2:8-19",
                    "audioQS": "Lam.2"
                },
                {
                    "pretty": "Colossians 1:18\u201323",
                    "readQS": "Colossians+1:18-23",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+25%3B+Lamentations+2:8-19%3B+Colossians+1:18-23",
            "audioQS": "Ps.25,Lam.2,Col.1"
        }
    },
    "2021/03/30": {
        "datePretty": "Tuesday, March 30, 2021",
        "calendar": "Tuesday in Holy Week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Lamentations 3:1\u201318",
                    "readQS": "Lamentations+3:1-18",
                    "audioQS": "Lam.3"
                },
                {
                    "pretty": "Luke 22:24\u201353",
                    "readQS": "Luke+22:24-53",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+27%3B+Lamentations+3:1-18%3B+Luke+22:24-53",
            "audioQS": "Ps.27,Lam.3,Luke.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 55:13\u201324",
                    "readQS": "Psalm+55:13-24",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Lamentations 3:40\u201351",
                    "readQS": "Lamentations+3:40-51",
                    "audioQS": "Lam.3"
                },
                {
                    "pretty": "Galatians 6:11\u201318",
                    "readQS": "Galatians+6:11-18",
                    "audioQS": "Gal.6"
                }
            ],
            "readQS": "Psalm+55:13-24%3B+Lamentations+3:40-51%3B+Galatians+6:11-18",
            "audioQS": "Ps.55,Lam.3,Gal.6"
        }
    },
    "2021/03/31": {
        "datePretty": "Wednesday, March 31, 2021",
        "calendar": "Wednesday in Holy Week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "Jeremiah 11:18\u201320",
                    "readQS": "Jeremiah+11:18-20",
                    "audioQS": "Jer.11"
                },
                {
                    "pretty": "Luke 22:54\u201371",
                    "readQS": "Luke+22:54-71",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+102%3B+Jeremiah+11:18-20%3B+Luke+22:54-71",
            "audioQS": "Ps.102,Jer.11,Luke.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Isaiah 63:1\u20139",
                    "readQS": "Isaiah+63:1-9",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "Revelation 14:18\u2013end",
                    "readQS": "Revelation+14:18-",
                    "audioQS": "Rev.14"
                },
                {
                    "pretty": "Revelation 15:1\u20134",
                    "readQS": "Revelation+15:1-4",
                    "audioQS": "Rev.15"
                }
            ],
            "readQS": "Psalm+88%3B+Isaiah+63:1-9%3B+Revelation+14:18-%3B+Revelation+15:1-4",
            "audioQS": "Ps.88,Isa.63,Rev.14,Rev.15"
        }
    },
    "2021/04/01": {
        "datePretty": "Thursday, April 1, 2021",
        "calendar": "Maundy Thursday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42,43",
                    "readQS": "Psalm+42,43",
                    "audioQS": "Ps.42,43"
                },
                {
                    "pretty": "Leviticus 16:2\u201324",
                    "readQS": "Leviticus+16:2-24",
                    "audioQS": "Lev.16"
                },
                {
                    "pretty": "Luke 23:1\u201325",
                    "readQS": "Luke+23:1-25",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+42,43%3B+Leviticus+16:2-24%3B+Luke+23:1-25",
            "audioQS": "Ps.42,43,Lev.16,Luke.23"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 39",
                    "readQS": "Psalm+39",
                    "audioQS": "Ps.39"
                },
                {
                    "pretty": "Exodus 11",
                    "readQS": "Exodus+11",
                    "audioQS": "Exod.11"
                },
                {
                    "pretty": "Ephesians 2:11\u201318",
                    "readQS": "Ephesians+2:11-18",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+39%3B+Exodus+11%3B+Ephesians+2:11-18",
            "audioQS": "Ps.39,Exod.11,Eph.2"
        }
    },
    "2021/04/02": {
        "datePretty": "Friday, April 2, 2021",
        "calendar": "Good Friday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "Genesis 22:1\u201318",
                    "readQS": "Genesis+22:1-18",
                    "audioQS": "Gen.22"
                },
                {
                    "pretty": "Hebrews 10:1\u201310",
                    "readQS": "Hebrews+10:1-10",
                    "audioQS": "Heb.10"
                }
            ],
            "readQS": "Psalm+69%3B+Genesis+22:1-18%3B+Hebrews+10:1-10",
            "audioQS": "Ps.69,Gen.22,Heb.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 130,143",
                    "readQS": "Psalm+130,143",
                    "audioQS": "Ps.130,143"
                },
                {
                    "pretty": "Lamentations 5:15\u201322",
                    "readQS": "Lamentations+5:15-22",
                    "audioQS": "Lam.5"
                },
                {
                    "pretty": "Colossians 1:18\u201323",
                    "readQS": "Colossians+1:18-23",
                    "audioQS": "Col.1"
                },
                {
                    "pretty": "John 19:38\u2013end",
                    "readQS": "John+19:38-",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+130,143%3B+Lamentations+5:15-22%3B+Colossians+1:18-23%3B+John+19:38-",
            "audioQS": "Ps.130,143,Lam.5,Col.1,John.19"
        }
    },
    "2021/04/03": {
        "datePretty": "Saturday, April 3, 2021",
        "calendar": "Holy Saturday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 142",
                    "readQS": "Psalm+142",
                    "audioQS": "Ps.142"
                },
                {
                    "pretty": "Hosea 6:1\u20136",
                    "readQS": "Hosea+6:1-6",
                    "audioQS": "Hos.6"
                },
                {
                    "pretty": "John 2:18\u201322",
                    "readQS": "John+2:18-22",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+142%3B+Hosea+6:1-6%3B+John+2:18-22",
            "audioQS": "Ps.142,Hos.6,John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Job 19:21\u201327",
                    "readQS": "Job+19:21-27",
                    "audioQS": "Job.19"
                },
                {
                    "pretty": "1 John 5:5\u201312",
                    "readQS": "1+John+5:5-12",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+116%3B+Job+19:21-27%3B+1+John+5:5-12",
            "audioQS": "Ps.116,Job.19,1John.5"
        }
    },
    "2021/04/04": {
        "datePretty": "Sunday, April 4, 2021",
        "calendar": "Easter day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 114,117",
                    "readQS": "Psalm+114,117",
                    "audioQS": "Ps.114,117"
                },
                {
                    "pretty": "Genesis 1:1\u20135,26\u201331",
                    "readQS": "Genesis+1:1-5,26-31",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "2 Corinthians 5:14\u20136:2",
                    "readQS": "2+Corinthians+5:14-6:2",
                    "audioQS": "2Cor.5"
                }
            ],
            "readQS": "Psalm+114,117%3B+Genesis+1:1-5,26-31%3B+2+Corinthians+5:14-6:2",
            "audioQS": "Ps.114,117,Gen.1,2Cor.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Ezekiel 37:1\u201314",
                    "readQS": "Ezekiel+37:1-14",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "Luke 24:13\u201335",
                    "readQS": "Luke+24:13-35",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+105%3B+Ezekiel+37:1-14%3B+Luke+24:13-35",
            "audioQS": "Ps.105,Ezek.37,Luke.24"
        }
    },
    "2021/04/05": {
        "datePretty": "Monday, April 5, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Song of Solomon 1:9\u20132:7",
                    "readQS": "Song+of+Solomon+1:9-2:7",
                    "audioQS": "Song.1"
                },
                {
                    "pretty": "Mark 16:1\u20138",
                    "readQS": "Mark+16:1-8",
                    "audioQS": "Mark.16"
                }
            ],
            "readQS": "Psalm+111%3B+Song+of+Solomon+1:9-2:7%3B+Mark+16:1-8",
            "audioQS": "Ps.111,Song.1,Mark.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Exodus 12:1\u201314",
                    "readQS": "Exodus+12:1-14",
                    "audioQS": "Exod.12"
                },
                {
                    "pretty": "1 Corinthians 15:1\u201311",
                    "readQS": "1+Corinthians+15:1-11",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+135%3B+Exodus+12:1-14%3B+1+Corinthians+15:1-11",
            "audioQS": "Ps.135,Exod.12,1Cor.15"
        }
    },
    "2021/04/06": {
        "datePretty": "Tuesday, April 6, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 112",
                    "readQS": "Psalm+112",
                    "audioQS": "Ps.112"
                },
                {
                    "pretty": "Song of Solomon 2:8\u2013end",
                    "readQS": "Song+of+Solomon+2:8-",
                    "audioQS": "Song.2"
                },
                {
                    "pretty": "Luke 24:1\u201312",
                    "readQS": "Luke+24:1-12",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+112%3B+Song+of+Solomon+2:8-%3B+Luke+24:1-12",
            "audioQS": "Ps.112,Song.2,Luke.24"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "Exodus 12:14\u201336",
                    "readQS": "Exodus+12:14-36",
                    "audioQS": "Exod.12"
                },
                {
                    "pretty": "1 Corinthians 15:12\u201319",
                    "readQS": "1+Corinthians+15:12-19",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+136%3B+Exodus+12:14-36%3B+1+Corinthians+15:12-19",
            "audioQS": "Ps.136,Exod.12,1Cor.15"
        }
    },
    "2021/04/07": {
        "datePretty": "Wednesday, April 7, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Song of Solomon 3",
                    "readQS": "Song+of+Solomon+3",
                    "audioQS": "Song.3"
                },
                {
                    "pretty": "Matthew 28:16\u2013end",
                    "readQS": "Matthew+28:16-",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+113%3B+Song+of+Solomon+3%3B+Matthew+28:16-",
            "audioQS": "Ps.113,Song.3,Matt.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Exodus 12:37\u2013end",
                    "readQS": "Exodus+12:37-",
                    "audioQS": "Exod.12"
                },
                {
                    "pretty": "1 Corinthians 15:20\u201328",
                    "readQS": "1+Corinthians+15:20-28",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+105%3B+Exodus+12:37-%3B+1+Corinthians+15:20-28",
            "audioQS": "Ps.105,Exod.12,1Cor.15"
        }
    },
    "2021/04/08": {
        "datePretty": "Thursday, April 8, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 114",
                    "readQS": "Psalm+114",
                    "audioQS": "Ps.114"
                },
                {
                    "pretty": "Song of Solomon 5:2\u20136:3",
                    "readQS": "Song+of+Solomon+5:2-6:3",
                    "audioQS": "Song.5"
                },
                {
                    "pretty": "Luke 7:11\u201317",
                    "readQS": "Luke+7:11-17",
                    "audioQS": "Luke.7"
                }
            ],
            "readQS": "Psalm+114%3B+Song+of+Solomon+5:2-6:3%3B+Luke+7:11-17",
            "audioQS": "Ps.114,Song.5,Luke.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Exodus 13:1\u201316",
                    "readQS": "Exodus+13:1-16",
                    "audioQS": "Exod.13"
                },
                {
                    "pretty": "1 Corinthians 15:29\u201334",
                    "readQS": "1+Corinthians+15:29-34",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+106%3B+Exodus+13:1-16%3B+1+Corinthians+15:29-34",
            "audioQS": "Ps.106,Exod.13,1Cor.15"
        }
    },
    "2021/04/09": {
        "datePretty": "Friday, April 9, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Song of Solomon 7:10\u20138:4",
                    "readQS": "Song+of+Solomon+7:10-8:4",
                    "audioQS": "Song.7"
                },
                {
                    "pretty": "Luke 8:41\u2013end",
                    "readQS": "Luke+8:41-",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+115%3B+Song+of+Solomon+7:10-8:4%3B+Luke+8:41-",
            "audioQS": "Ps.115,Song.7,Luke.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 107",
                    "readQS": "Psalm+107",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "Exodus 13:17\u201314:14",
                    "readQS": "Exodus+13:17-14:14",
                    "audioQS": "Exod.13"
                },
                {
                    "pretty": "1 Corinthians 15:35\u201350",
                    "readQS": "1+Corinthians+15:35-50",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+107%3B+Exodus+13:17-14:14%3B+1+Corinthians+15:35-50",
            "audioQS": "Ps.107,Exod.13,1Cor.15"
        }
    },
    "2021/04/10": {
        "datePretty": "Saturday, April 10, 2021",
        "calendar": "Easter week",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Song of Solomon 8:5\u20137",
                    "readQS": "Song+of+Solomon+8:5-7",
                    "audioQS": "Song.8"
                },
                {
                    "pretty": "John 11:17\u201344",
                    "readQS": "John+11:17-44",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+116%3B+Song+of+Solomon+8:5-7%3B+John+11:17-44",
            "audioQS": "Ps.116,Song.8,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Exodus 14:15\u2013end",
                    "readQS": "Exodus+14:15-",
                    "audioQS": "Exod.14"
                },
                {
                    "pretty": "1 Corinthians 15:51\u2013end",
                    "readQS": "1+Corinthians+15:51-",
                    "audioQS": "1Cor.15"
                }
            ],
            "readQS": "Psalm+145%3B+Exodus+14:15-%3B+1+Corinthians+15:51-",
            "audioQS": "Ps.145,Exod.14,1Cor.15"
        }
    },
    "2021/04/11": {
        "datePretty": "Sunday, April 11, 2021",
        "calendar": "2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 22:20\u201331",
                    "readQS": "Psalm+22:20-31",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Isaiah 53:6\u201312",
                    "readQS": "Isaiah+53:6-12",
                    "audioQS": "Isa.53"
                },
                {
                    "pretty": "Romans 4:13\u201325",
                    "readQS": "Romans+4:13-25",
                    "audioQS": "Rom.4"
                }
            ],
            "readQS": "Psalm+22:20-31%3B+Isaiah+53:6-12%3B+Romans+4:13-25",
            "audioQS": "Ps.22,Isa.53,Rom.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 143:1\u201312",
                    "readQS": "Psalm+143:1-12",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Isaiah 26:1\u20139,19",
                    "readQS": "Isaiah+26:1-9,19",
                    "audioQS": "Isa.26"
                },
                {
                    "pretty": "Luke 24:1\u201312",
                    "readQS": "Luke+24:1-12",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+143:1-12%3B+Isaiah+26:1-9,19%3B+Luke+24:1-12",
            "audioQS": "Ps.143,Isa.26,Luke.24"
        }
    },
    "2021/04/12": {
        "datePretty": "Monday, April 12, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Deuteronomy 1:3\u201318",
                    "readQS": "Deuteronomy+1:3-18",
                    "audioQS": "Deut.1"
                },
                {
                    "pretty": "John 20:1\u201310",
                    "readQS": "John+20:1-10",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+19%3B+Deuteronomy+1:3-18%3B+John+20:1-10",
            "audioQS": "Ps.19,Deut.1,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Exodus 15:1\u201321",
                    "readQS": "Exodus+15:1-21",
                    "audioQS": "Exod.15"
                },
                {
                    "pretty": "Colossians 1:1\u201314",
                    "readQS": "Colossians+1:1-14",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+139%3B+Exodus+15:1-21%3B+Colossians+1:1-14",
            "audioQS": "Ps.139,Exod.15,Col.1"
        }
    },
    "2021/04/13": {
        "datePretty": "Tuesday, April 13, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 8",
                    "readQS": "Psalm+8",
                    "audioQS": "Ps.8"
                },
                {
                    "pretty": "Deuteronomy 1:19\u201340",
                    "readQS": "Deuteronomy+1:19-40",
                    "audioQS": "Deut.1"
                },
                {
                    "pretty": "John 20:11\u201318",
                    "readQS": "John+20:11-18",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+8%3B+Deuteronomy+1:19-40%3B+John+20:11-18",
            "audioQS": "Ps.8,Deut.1,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104",
                    "readQS": "Psalm+104",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Exodus 15:22\u201316:10",
                    "readQS": "Exodus+15:22-16:10",
                    "audioQS": "Exod.15"
                },
                {
                    "pretty": "Colossians 1:15\u2013end",
                    "readQS": "Colossians+1:15-",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+104%3B+Exodus+15:22-16:10%3B+Colossians+1:15-",
            "audioQS": "Ps.104,Exod.15,Col.1"
        }
    },
    "2021/04/14": {
        "datePretty": "Wednesday, April 14, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Deuteronomy 3:18\u2013end",
                    "readQS": "Deuteronomy+3:18-",
                    "audioQS": "Deut.3"
                },
                {
                    "pretty": "John 20:19\u2013end",
                    "readQS": "John+20:19-",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+30%3B+Deuteronomy+3:18-%3B+John+20:19-",
            "audioQS": "Ps.30,Deut.3,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Exodus 16:11\u2013end",
                    "readQS": "Exodus+16:11-",
                    "audioQS": "Exod.16"
                },
                {
                    "pretty": "Colossians 2:1\u201315",
                    "readQS": "Colossians+2:1-15",
                    "audioQS": "Col.2"
                }
            ],
            "readQS": "Psalm+33%3B+Exodus+16:11-%3B+Colossians+2:1-15",
            "audioQS": "Ps.33,Exod.16,Col.2"
        }
    },
    "2021/04/15": {
        "datePretty": "Thursday, April 15, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Deuteronomy 4:1\u201314",
                    "readQS": "Deuteronomy+4:1-14",
                    "audioQS": "Deut.4"
                },
                {
                    "pretty": "John 21:1\u201314",
                    "readQS": "John+21:1-14",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+28%3B+Deuteronomy+4:1-14%3B+John+21:1-14",
            "audioQS": "Ps.28,Deut.4,John.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Exodus 17",
                    "readQS": "Exodus+17",
                    "audioQS": "Exod.17"
                },
                {
                    "pretty": "Colossians 2:16\u20133:11",
                    "readQS": "Colossians+2:16-3:11",
                    "audioQS": "Col.2"
                }
            ],
            "readQS": "Psalm+34%3B+Exodus+17%3B+Colossians+2:16-3:11",
            "audioQS": "Ps.34,Exod.17,Col.2"
        }
    },
    "2021/04/16": {
        "datePretty": "Friday, April 16, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Deuteronomy 4:15\u201331",
                    "readQS": "Deuteronomy+4:15-31",
                    "audioQS": "Deut.4"
                },
                {
                    "pretty": "John 21:15\u201319",
                    "readQS": "John+21:15-19",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+61%3B+Deuteronomy+4:15-31%3B+John+21:15-19",
            "audioQS": "Ps.61,Deut.4,John.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Exodus 18:1\u201312",
                    "readQS": "Exodus+18:1-12",
                    "audioQS": "Exod.18"
                },
                {
                    "pretty": "Colossians 3:12\u20134:1",
                    "readQS": "Colossians+3:12-4:1",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+118%3B+Exodus+18:1-12%3B+Colossians+3:12-4:1",
            "audioQS": "Ps.118,Exod.18,Col.3"
        }
    },
    "2021/04/17": {
        "datePretty": "Saturday, April 17, 2021",
        "calendar": "Week of 2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "Deuteronomy 4:32\u201340",
                    "readQS": "Deuteronomy+4:32-40",
                    "audioQS": "Deut.4"
                },
                {
                    "pretty": "John 21:20\u2013end",
                    "readQS": "John+21:20-",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+84%3B+Deuteronomy+4:32-40%3B+John+21:20-",
            "audioQS": "Ps.84,Deut.4,John.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "Exodus 18:13\u2013end",
                    "readQS": "Exodus+18:13-",
                    "audioQS": "Exod.18"
                },
                {
                    "pretty": "Colossians 4:2\u2013end",
                    "readQS": "Colossians+4:2-",
                    "audioQS": "Col.4"
                }
            ],
            "readQS": "Psalm+66%3B+Exodus+18:13-%3B+Colossians+4:2-",
            "audioQS": "Ps.66,Exod.18,Col.4"
        }
    },
    "2021/04/18": {
        "datePretty": "Sunday, April 18, 2021",
        "calendar": "3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77:11\u201320",
                    "readQS": "Psalm+77:11-20",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Isaiah 63:7\u201315",
                    "readQS": "Isaiah+63:7-15",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "1 Corinthians 10:1\u201313",
                    "readQS": "1+Corinthians+10:1-13",
                    "audioQS": "1Cor.10"
                }
            ],
            "readQS": "Psalm+77:11-20%3B+Isaiah+63:7-15%3B+1+Corinthians+10:1-13",
            "audioQS": "Ps.77,Isa.63,1Cor.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 142",
                    "readQS": "Psalm+142",
                    "audioQS": "Ps.142"
                },
                {
                    "pretty": "Deuteronomy 7:7\u201313",
                    "readQS": "Deuteronomy+7:7-13",
                    "audioQS": "Deut.7"
                },
                {
                    "pretty": "Revelation 2:1\u201311",
                    "readQS": "Revelation+2:1-11",
                    "audioQS": "Rev.2"
                }
            ],
            "readQS": "Psalm+142%3B+Deuteronomy+7:7-13%3B+Revelation+2:1-11",
            "audioQS": "Ps.142,Deut.7,Rev.2"
        }
    },
    "2021/04/19": {
        "datePretty": "Monday, April 19, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "Deuteronomy 5:1\u201322",
                    "readQS": "Deuteronomy+5:1-22",
                    "audioQS": "Deut.5"
                },
                {
                    "pretty": "Ephesians 1:1\u201314",
                    "readQS": "Ephesians+1:1-14",
                    "audioQS": "Eph.1"
                }
            ],
            "readQS": "Psalm+96%3B+Deuteronomy+5:1-22%3B+Ephesians+1:1-14",
            "audioQS": "Ps.96,Deut.5,Eph.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Exodus 19",
                    "readQS": "Exodus+19",
                    "audioQS": "Exod.19"
                },
                {
                    "pretty": "Luke 1:1\u201325",
                    "readQS": "Luke+1:1-25",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+61%3B+Exodus+19%3B+Luke+1:1-25",
            "audioQS": "Ps.61,Exod.19,Luke.1"
        }
    },
    "2021/04/20": {
        "datePretty": "Tuesday, April 20, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Deuteronomy 5:22\u2013end",
                    "readQS": "Deuteronomy+5:22-",
                    "audioQS": "Deut.5"
                },
                {
                    "pretty": "Ephesians 1:15\u2013end",
                    "readQS": "Ephesians+1:15-",
                    "audioQS": "Eph.1"
                }
            ],
            "readQS": "Psalm+98%3B+Deuteronomy+5:22-%3B+Ephesians+1:15-",
            "audioQS": "Ps.98,Deut.5,Eph.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Exodus 20:1\u201321",
                    "readQS": "Exodus+20:1-21",
                    "audioQS": "Exod.20"
                },
                {
                    "pretty": "Luke 1:26\u201338",
                    "readQS": "Luke+1:26-38",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+71%3B+Exodus+20:1-21%3B+Luke+1:26-38",
            "audioQS": "Ps.71,Exod.20,Luke.1"
        }
    },
    "2021/04/21": {
        "datePretty": "Wednesday, April 21, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Deuteronomy 6",
                    "readQS": "Deuteronomy+6",
                    "audioQS": "Deut.6"
                },
                {
                    "pretty": "Ephesians 2:1\u201310",
                    "readQS": "Ephesians+2:1-10",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+105%3B+Deuteronomy+6%3B+Ephesians+2:1-10",
            "audioQS": "Ps.105,Deut.6,Eph.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Exodus 24",
                    "readQS": "Exodus+24",
                    "audioQS": "Exod.24"
                },
                {
                    "pretty": "Luke 1:39\u201356",
                    "readQS": "Luke+1:39-56",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+72%3B+Exodus+24%3B+Luke+1:39-56",
            "audioQS": "Ps.72,Exod.24,Luke.1"
        }
    },
    "2021/04/22": {
        "datePretty": "Thursday, April 22, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "Deuteronomy 7:1\u201311",
                    "readQS": "Deuteronomy+7:1-11",
                    "audioQS": "Deut.7"
                },
                {
                    "pretty": "Ephesians 2:11\u2013end",
                    "readQS": "Ephesians+2:11-",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+136%3B+Deuteronomy+7:1-11%3B+Ephesians+2:11-",
            "audioQS": "Ps.136,Deut.7,Eph.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Exodus 25:1\u201322",
                    "readQS": "Exodus+25:1-22",
                    "audioQS": "Exod.25"
                },
                {
                    "pretty": "Luke 1:57\u2013end",
                    "readQS": "Luke+1:57-",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+73%3B+Exodus+25:1-22%3B+Luke+1:57-",
            "audioQS": "Ps.73,Exod.25,Luke.1"
        }
    },
    "2021/04/23": {
        "datePretty": "Friday, April 23, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 107",
                    "readQS": "Psalm+107",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "Deuteronomy 7:12\u2013end",
                    "readQS": "Deuteronomy+7:12-",
                    "audioQS": "Deut.7"
                },
                {
                    "pretty": "Ephesians 3:1\u201313",
                    "readQS": "Ephesians+3:1-13",
                    "audioQS": "Eph.3"
                }
            ],
            "readQS": "Psalm+107%3B+Deuteronomy+7:12-%3B+Ephesians+3:1-13",
            "audioQS": "Ps.107,Deut.7,Eph.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Exodus 28:1\u20134a,28:29\u201338",
                    "readQS": "Exodus+28:1-4a,28:29-38",
                    "audioQS": "Exod.28"
                },
                {
                    "pretty": "Luke 2:1\u201320",
                    "readQS": "Luke+2:1-20",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+77%3B+Exodus+28:1-4a,28:29-38%3B+Luke+2:1-20",
            "audioQS": "Ps.77,Exod.28,Luke.2"
        }
    },
    "2021/04/24": {
        "datePretty": "Saturday, April 24, 2021",
        "calendar": "Week of 3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Deuteronomy 8",
                    "readQS": "Deuteronomy+8",
                    "audioQS": "Deut.8"
                },
                {
                    "pretty": "Ephesians 3:14\u2013end",
                    "readQS": "Ephesians+3:14-",
                    "audioQS": "Eph.3"
                }
            ],
            "readQS": "Psalm+110%3B+Deuteronomy+8%3B+Ephesians+3:14-",
            "audioQS": "Ps.110,Deut.8,Eph.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Exodus 29:1\u20139",
                    "readQS": "Exodus+29:1-9",
                    "audioQS": "Exod.29"
                },
                {
                    "pretty": "Luke 2:21\u201340",
                    "readQS": "Luke+2:21-40",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+27%3B+Exodus+29:1-9%3B+Luke+2:21-40",
            "audioQS": "Ps.27,Exod.29,Luke.2"
        }
    },
    "2021/04/25": {
        "datePretty": "Sunday, April 25, 2021",
        "calendar": "4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:89\u201396",
                    "readQS": "Psalm+119:89-96",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Nehemiah 7:73b \u2013 8:12",
                    "readQS": "Nehemiah+7:73b+-+8:12",
                    "audioQS": "Neh.7"
                },
                {
                    "pretty": "Luke 24:25\u201332",
                    "readQS": "Luke+24:25-32",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+119:89-96%3B+Nehemiah+7:73b+-+8:12%3B+Luke+24:25-32",
            "audioQS": "Ps.119,Neh.7,Luke.24"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 81:8\u201316",
                    "readQS": "Psalm+81:8-16",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Exodus 16:4\u201315",
                    "readQS": "Exodus+16:4-15",
                    "audioQS": "Exod.16"
                },
                {
                    "pretty": "Revelation 2:12\u201317",
                    "readQS": "Revelation+2:12-17",
                    "audioQS": "Rev.2"
                }
            ],
            "readQS": "Psalm+81:8-16%3B+Exodus+16:4-15%3B+Revelation+2:12-17",
            "audioQS": "Ps.81,Exod.16,Rev.2"
        }
    },
    "2021/04/26": {
        "datePretty": "Monday, April 26, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 103",
                    "readQS": "Psalm+103",
                    "audioQS": "Ps.103"
                },
                {
                    "pretty": "Deuteronomy 9:1\u201321",
                    "readQS": "Deuteronomy+9:1-21",
                    "audioQS": "Deut.9"
                },
                {
                    "pretty": "Ephesians 4:1\u201316",
                    "readQS": "Ephesians+4:1-16",
                    "audioQS": "Eph.4"
                }
            ],
            "readQS": "Psalm+103%3B+Deuteronomy+9:1-21%3B+Ephesians+4:1-16",
            "audioQS": "Ps.103,Deut.9,Eph.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 114",
                    "readQS": "Psalm+114",
                    "audioQS": "Ps.114"
                },
                {
                    "pretty": "Exodus 32:1\u201314",
                    "readQS": "Exodus+32:1-14",
                    "audioQS": "Exod.32"
                },
                {
                    "pretty": "Luke 2:41\u2013end",
                    "readQS": "Luke+2:41-",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+114%3B+Exodus+32:1-14%3B+Luke+2:41-",
            "audioQS": "Ps.114,Exod.32,Luke.2"
        }
    },
    "2021/04/27": {
        "datePretty": "Tuesday, April 27, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Deuteronomy 9:23\u201310:5",
                    "readQS": "Deuteronomy+9:23-10:5",
                    "audioQS": "Deut.9"
                },
                {
                    "pretty": "Ephesians 4:17\u2013end",
                    "readQS": "Ephesians+4:17-",
                    "audioQS": "Eph.4"
                }
            ],
            "readQS": "Psalm+139%3B+Deuteronomy+9:23-10:5%3B+Ephesians+4:17-",
            "audioQS": "Ps.139,Deut.9,Eph.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Exodus 32:15\u201334",
                    "readQS": "Exodus+32:15-34",
                    "audioQS": "Exod.32"
                },
                {
                    "pretty": "Luke 3:1\u201314",
                    "readQS": "Luke+3:1-14",
                    "audioQS": "Luke.3"
                }
            ],
            "readQS": "Psalm+116%3B+Exodus+32:15-34%3B+Luke+3:1-14",
            "audioQS": "Ps.116,Exod.32,Luke.3"
        }
    },
    "2021/04/28": {
        "datePretty": "Wednesday, April 28, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Deuteronomy 10:12\u2013end",
                    "readQS": "Deuteronomy+10:12-",
                    "audioQS": "Deut.10"
                },
                {
                    "pretty": "Ephesians 5:1\u201314",
                    "readQS": "Ephesians+5:1-14",
                    "audioQS": "Eph.5"
                }
            ],
            "readQS": "Psalm+135%3B+Deuteronomy+10:12-%3B+Ephesians+5:1-14",
            "audioQS": "Ps.135,Deut.10,Eph.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Exodus 33",
                    "readQS": "Exodus+33",
                    "audioQS": "Exod.33"
                },
                {
                    "pretty": "Luke 3:15\u201322",
                    "readQS": "Luke+3:15-22",
                    "audioQS": "Luke.3"
                }
            ],
            "readQS": "Psalm+47%3B+Exodus+33%3B+Luke+3:15-22",
            "audioQS": "Ps.47,Exod.33,Luke.3"
        }
    },
    "2021/04/29": {
        "datePretty": "Thursday, April 29, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Deuteronomy 11:8\u2013end",
                    "readQS": "Deuteronomy+11:8-",
                    "audioQS": "Deut.11"
                },
                {
                    "pretty": "Ephesians 5:15\u2013end",
                    "readQS": "Ephesians+5:15-",
                    "audioQS": "Eph.5"
                }
            ],
            "readQS": "Psalm+118%3B+Deuteronomy+11:8-%3B+Ephesians+5:15-",
            "audioQS": "Ps.118,Deut.11,Eph.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Exodus 34:1\u201310,34:27\u2013end",
                    "readQS": "Exodus+34:1-10,34:27-",
                    "audioQS": "Exod.34"
                },
                {
                    "pretty": "Luke 4:1\u201313",
                    "readQS": "Luke+4:1-13",
                    "audioQS": "Luke.4"
                }
            ],
            "readQS": "Psalm+85%3B+Exodus+34:1-10,34:27-%3B+Luke+4:1-13",
            "audioQS": "Ps.85,Exod.34,Luke.4"
        }
    },
    "2021/04/30": {
        "datePretty": "Friday, April 30, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Deuteronomy 12:1\u201314",
                    "readQS": "Deuteronomy+12:1-14",
                    "audioQS": "Deut.12"
                },
                {
                    "pretty": "Ephesians 6:1\u20139",
                    "readQS": "Ephesians+6:1-9",
                    "audioQS": "Eph.6"
                }
            ],
            "readQS": "Psalm+33%3B+Deuteronomy+12:1-14%3B+Ephesians+6:1-9",
            "audioQS": "Ps.33,Deut.12,Eph.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Exodus 35:20\u201336:7",
                    "readQS": "Exodus+35:20-36:7",
                    "audioQS": "Exod.35"
                },
                {
                    "pretty": "Luke 4:14\u201330",
                    "readQS": "Luke+4:14-30",
                    "audioQS": "Luke.4"
                }
            ],
            "readQS": "Psalm+36%3B+Exodus+35:20-36:7%3B+Luke+4:14-30",
            "audioQS": "Ps.36,Exod.35,Luke.4"
        }
    },
    "2021/05/01": {
        "datePretty": "Saturday, May 1, 2021",
        "calendar": "Week of 4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Deuteronomy 15:1\u201318",
                    "readQS": "Deuteronomy+15:1-18",
                    "audioQS": "Deut.15"
                },
                {
                    "pretty": "Ephesians 6:10\u2013end",
                    "readQS": "Ephesians+6:10-",
                    "audioQS": "Eph.6"
                }
            ],
            "readQS": "Psalm+34%3B+Deuteronomy+15:1-18%3B+Ephesians+6:10-",
            "audioQS": "Ps.34,Deut.15,Eph.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "Exodus 40:17\u2013end",
                    "readQS": "Exodus+40:17-",
                    "audioQS": "Exod.40"
                },
                {
                    "pretty": "Luke 4:31\u201337",
                    "readQS": "Luke+4:31-37",
                    "audioQS": "Luke.4"
                }
            ],
            "readQS": "Psalm+84%3B+Exodus+40:17-%3B+Luke+4:31-37",
            "audioQS": "Ps.84,Exod.40,Luke.4"
        }
    },
    "2021/05/02": {
        "datePretty": "Sunday, May 2, 2021",
        "calendar": "5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44:16\u201327",
                    "readQS": "Psalm+44:16-27",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Daniel 3:16\u201328",
                    "readQS": "Daniel+3:16-28",
                    "audioQS": "Dan.3"
                },
                {
                    "pretty": "Hebrews 11:32\u201312:2",
                    "readQS": "Hebrews+11:32-12:2",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+44:16-27%3B+Daniel+3:16-28%3B+Hebrews+11:32-12:2",
            "audioQS": "Ps.44,Dan.3,Heb.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "Isaiah 60:1\u201314",
                    "readQS": "Isaiah+60:1-14",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "Revelation 3:1\u201313",
                    "readQS": "Revelation+3:1-13",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+96%3B+Isaiah+60:1-14%3B+Revelation+3:1-13",
            "audioQS": "Ps.96,Isa.60,Rev.3"
        }
    },
    "2021/05/03": {
        "datePretty": "Monday, May 3, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Deuteronomy 16:1\u201320",
                    "readQS": "Deuteronomy+16:1-20",
                    "audioQS": "Deut.16"
                },
                {
                    "pretty": "1 Peter 1:1\u201312",
                    "readQS": "1+Peter+1:1-12",
                    "audioQS": "1Pet.1"
                }
            ],
            "readQS": "Psalm+145%3B+Deuteronomy+16:1-20%3B+1+Peter+1:1-12",
            "audioQS": "Ps.145,Deut.16,1Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Numbers 9:15\u2013end",
                    "readQS": "Numbers+9:15-",
                    "audioQS": "Num.9"
                },
                {
                    "pretty": "Numbers 10:33\u2013end",
                    "readQS": "Numbers+10:33-",
                    "audioQS": "Num.10"
                },
                {
                    "pretty": "Luke 4:38\u2013end",
                    "readQS": "Luke+4:38-",
                    "audioQS": "Luke.4"
                }
            ],
            "readQS": "Psalm+105%3B+Numbers+9:15-%3B+Numbers+10:33-%3B+Luke+4:38-",
            "audioQS": "Ps.105,Num.9,Num.10,Luke.4"
        }
    },
    "2021/05/04": {
        "datePretty": "Tuesday, May 4, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Deuteronomy 17:8\u2013end",
                    "readQS": "Deuteronomy+17:8-",
                    "audioQS": "Deut.17"
                },
                {
                    "pretty": "1 Peter 1:13\u2013end",
                    "readQS": "1+Peter+1:13-",
                    "audioQS": "1Pet.1"
                }
            ],
            "readQS": "Psalm+19%3B+Deuteronomy+17:8-%3B+1+Peter+1:13-",
            "audioQS": "Ps.19,Deut.17,1Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Numbers 11:1\u201333",
                    "readQS": "Numbers+11:1-33",
                    "audioQS": "Num.11"
                },
                {
                    "pretty": "Luke 5:1\u201311",
                    "readQS": "Luke+5:1-11",
                    "audioQS": "Luke.5"
                }
            ],
            "readQS": "Psalm+97%3B+Numbers+11:1-33%3B+Luke+5:1-11",
            "audioQS": "Ps.97,Num.11,Luke.5"
        }
    },
    "2021/05/05": {
        "datePretty": "Wednesday, May 5, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Deuteronomy 18:9\u2013end",
                    "readQS": "Deuteronomy+18:9-",
                    "audioQS": "Deut.18"
                },
                {
                    "pretty": "1 Peter 2:1\u201310",
                    "readQS": "1+Peter+2:1-10",
                    "audioQS": "1Pet.2"
                }
            ],
            "readQS": "Psalm+30%3B+Deuteronomy+18:9-%3B+1+Peter+2:1-10",
            "audioQS": "Ps.30,Deut.18,1Pet.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 99",
                    "readQS": "Psalm+99",
                    "audioQS": "Ps.99"
                },
                {
                    "pretty": "Numbers 12",
                    "readQS": "Numbers+12",
                    "audioQS": "Num.12"
                },
                {
                    "pretty": "Luke 5:12\u201326",
                    "readQS": "Luke+5:12-26",
                    "audioQS": "Luke.5"
                }
            ],
            "readQS": "Psalm+99%3B+Numbers+12%3B+Luke+5:12-26",
            "audioQS": "Ps.99,Num.12,Luke.5"
        }
    },
    "2021/05/06": {
        "datePretty": "Thursday, May 6, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Deuteronomy 19",
                    "readQS": "Deuteronomy+19",
                    "audioQS": "Deut.19"
                },
                {
                    "pretty": "1 Peter 2:11\u2013end",
                    "readQS": "1+Peter+2:11-",
                    "audioQS": "1Pet.2"
                }
            ],
            "readQS": "Psalm+57%3B+Deuteronomy+19%3B+1+Peter+2:11-",
            "audioQS": "Ps.57,Deut.19,1Pet.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104",
                    "readQS": "Psalm+104",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Numbers 13:1\u20133,13:17\u2013end",
                    "readQS": "Numbers+13:1-3,13:17-",
                    "audioQS": "Num.13"
                },
                {
                    "pretty": "Luke 5:27\u2013end",
                    "readQS": "Luke+5:27-",
                    "audioQS": "Luke.5"
                }
            ],
            "readQS": "Psalm+104%3B+Numbers+13:1-3,13:17-%3B+Luke+5:27-",
            "audioQS": "Ps.104,Num.13,Luke.5"
        }
    },
    "2021/05/07": {
        "datePretty": "Friday, May 7, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "Deuteronomy 21:22\u201322:8",
                    "readQS": "Deuteronomy+21:22-22:8",
                    "audioQS": "Deut.21"
                },
                {
                    "pretty": "1 Peter 3:1\u201312",
                    "readQS": "1+Peter+3:1-12",
                    "audioQS": "1Pet.3"
                }
            ],
            "readQS": "Psalm+138%3B+Deuteronomy+21:22-22:8%3B+1+Peter+3:1-12",
            "audioQS": "Ps.138,Deut.21,1Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "Numbers 14:1\u201325",
                    "readQS": "Numbers+14:1-25",
                    "audioQS": "Num.14"
                },
                {
                    "pretty": "Luke 6:1\u201311",
                    "readQS": "Luke+6:1-11",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+66%3B+Numbers+14:1-25%3B+Luke+6:1-11",
            "audioQS": "Ps.66,Num.14,Luke.6"
        }
    },
    "2021/05/08": {
        "datePretty": "Saturday, May 8, 2021",
        "calendar": "Week of 5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
                },
                {
                    "pretty": "Deuteronomy 24:5\u2013end",
                    "readQS": "Deuteronomy+24:5-",
                    "audioQS": "Deut.24"
                },
                {
                    "pretty": "1 Peter 3:13\u2013end",
                    "readQS": "1+Peter+3:13-",
                    "audioQS": "1Pet.3"
                }
            ],
            "readQS": "Psalm+146%3B+Deuteronomy+24:5-%3B+1+Peter+3:13-",
            "audioQS": "Ps.146,Deut.24,1Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Numbers 14:26\u2013end",
                    "readQS": "Numbers+14:26-",
                    "audioQS": "Num.14"
                },
                {
                    "pretty": "Luke 6:12\u201326",
                    "readQS": "Luke+6:12-26",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+118%3B+Numbers+14:26-%3B+Luke+6:12-26",
            "audioQS": "Ps.118,Num.14,Luke.6"
        }
    },
    "2021/05/09": {
        "datePretty": "Sunday, May 9, 2021",
        "calendar": "6th Sunday of Easter",
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
                    "pretty": "Song of Solomon 4:16\u20135:2",
                    "readQS": "Song+of+Solomon+4:16-5:2",
                    "audioQS": "Song.4"
                },
                {
                    "pretty": "8:6\u20137",
                    "readQS": "8:6-7",
                    "audioQS": "8"
                },
                {
                    "pretty": "Revelation 3:14\u2013end",
                    "readQS": "Revelation+3:14-",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+45%3B+Song+of+Solomon+4:16-5:2%3B8:6-7%3B+Revelation+3:14-",
            "audioQS": "Ps.45,Song.4,8,Rev.3"
        }
    },
    "2021/05/10": {
        "datePretty": "Monday, May 10, 2021",
        "calendar": "Week of 6th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
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
            "readQS": "Psalm+65%3B+Deuteronomy+26%3B+1+Peter+4:1-11",
            "audioQS": "Ps.65,Deut.26,1Pet.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
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
            "readQS": "Psalm+121%3B+Numbers+16:1-35%3B+Luke+6:27-38",
            "audioQS": "Ps.121,Num.16,Luke.6"
        }
    },
    "2021/05/11": {
        "datePretty": "Tuesday, May 11, 2021",
        "calendar": "Week of 6th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
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
            "readQS": "Psalm+126%3B+Deuteronomy+28:1-14%3B+1+Peter+4:12-",
            "audioQS": "Ps.126,Deut.28,1Pet.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 128",
                    "readQS": "Psalm+128",
                    "audioQS": "Ps.128"
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
            "readQS": "Psalm+128%3B+Numbers+16:36-%3B+Luke+6:39-",
            "audioQS": "Ps.128,Num.16,Luke.6"
        }
    },
    "2021/05/12": {
        "datePretty": "Wednesday, May 12, 2021",
        "calendar": "Week of 6th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Deuteronomy 28:58\u2013end",
                    "readQS": "Deuteronomy+28:58-",
                    "audioQS": "Deut.28"
                },
                {
                    "pretty": "1 Peter 5",
                    "readQS": "1+Peter+5",
                    "audioQS": "1Pet.5"
                }
            ],
            "readQS": "Psalm+132%3B+Deuteronomy+28:58-%3B+1+Peter+5",
            "audioQS": "Ps.132,Deut.28,1Pet.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 15,24",
                    "readQS": "Psalm+15,24",
                    "audioQS": "Ps.15,24"
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
            "readQS": "Psalm+15,24%3B+Numbers+17:1-11%3B+Luke+7:1-10",
            "audioQS": "Ps.15,24,Num.17,Luke.7"
        }
    },
    "2021/05/13": {
        "datePretty": "Thursday, May 13, 2021",
        "calendar": "Ascension Day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110,150",
                    "readQS": "Psalm+110,150",
                    "audioQS": "Ps.110,150"
                },
                {
                    "pretty": "Isaiah 52:7\u201315",
                    "readQS": "Isaiah+52:7-15",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Hebrews 7:11\u201328",
                    "readQS": "Hebrews+7:11-28",
                    "audioQS": "Heb.7"
                }
            ],
            "readQS": "Psalm+110,150%3B+Isaiah+52:7-15%3B+Hebrews+7:11-28",
            "audioQS": "Ps.110,150,Isa.52,Heb.7"
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
    "2021/05/14": {
        "datePretty": "Friday, May 14, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 81",
                    "readQS": "Psalm+81",
                    "audioQS": "Ps.81"
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
            "readQS": "Psalm+81%3B+Deuteronomy+29:2-15%3B+1+John+1:1-2:6",
            "audioQS": "Ps.81,Deut.29,1John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
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
            "readQS": "Psalm+145%3B+Numbers+20:1-13%3B+Luke+7:11-17",
            "audioQS": "Ps.145,Num.20,Luke.7"
        }
    },
    "2021/05/15": {
        "datePretty": "Saturday, May 15, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
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
            "readQS": "Psalm+47%3B+Deuteronomy+30%3B+1+John+2:7-17",
            "audioQS": "Ps.47,Deut.30,1John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
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
            "readQS": "Psalm+85%3B+Numbers+21:4-9%3B+Luke+7:18-35",
            "audioQS": "Ps.85,Num.21,Luke.7"
        }
    },
    "2021/05/16": {
        "datePretty": "Sunday, May 16, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Isaiah 14:3\u201315",
                    "readQS": "Isaiah+14:3-15",
                    "audioQS": "Isa.14"
                },
                {
                    "pretty": "Revelation 14:1\u201313",
                    "readQS": "Revelation+14:1-13",
                    "audioQS": "Rev.14"
                }
            ],
            "readQS": "Psalm+76%3B+Isaiah+14:3-15%3B+Revelation+14:1-13",
            "audioQS": "Ps.76,Isa.14,Rev.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147:1\u201312",
                    "readQS": "Psalm+147:1-12",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Isaiah 61",
                    "readQS": "Isaiah+61",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "Luke 4:14\u201321",
                    "readQS": "Luke+4:14-21",
                    "audioQS": "Luke.4"
                }
            ],
            "readQS": "Psalm+147:1-12%3B+Isaiah+61%3B+Luke+4:14-21",
            "audioQS": "Ps.147,Isa.61,Luke.4"
        }
    },
    "2021/05/17": {
        "datePretty": "Monday, May 17, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 93",
                    "readQS": "Psalm+93",
                    "audioQS": "Ps.93"
                },
                {
                    "pretty": "Deuteronomy 31:1\u201313",
                    "readQS": "Deuteronomy+31:1-13",
                    "audioQS": "Deut.31"
                },
                {
                    "pretty": "1 John 2:18\u2013end",
                    "readQS": "1+John+2:18-",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+93%3B+Deuteronomy+31:1-13%3B+1+John+2:18-",
            "audioQS": "Ps.93,Deut.31,1John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 18",
                    "readQS": "Psalm+18",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Numbers 22:1\u201335",
                    "readQS": "Numbers+22:1-35",
                    "audioQS": "Num.22"
                },
                {
                    "pretty": "Luke 7:36\u2013end",
                    "readQS": "Luke+7:36-",
                    "audioQS": "Luke.7"
                }
            ],
            "readQS": "Psalm+18%3B+Numbers+22:1-35%3B+Luke+7:36-",
            "audioQS": "Ps.18,Num.22,Luke.7"
        }
    },
    "2021/05/18": {
        "datePretty": "Tuesday, May 18, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 99",
                    "readQS": "Psalm+99",
                    "audioQS": "Ps.99"
                },
                {
                    "pretty": "Deuteronomy 31:14\u201329",
                    "readQS": "Deuteronomy+31:14-29",
                    "audioQS": "Deut.31"
                },
                {
                    "pretty": "1 John 3:1\u201310",
                    "readQS": "1+John+3:1-10",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+99%3B+Deuteronomy+31:14-29%3B+1+John+3:1-10",
            "audioQS": "Ps.99,Deut.31,1John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Numbers 22:36\u201323:12",
                    "readQS": "Numbers+22:36-23:12",
                    "audioQS": "Num.22"
                },
                {
                    "pretty": "Luke 8:1\u201315",
                    "readQS": "Luke+8:1-15",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+68%3B+Numbers+22:36-23:12%3B+Luke+8:1-15",
            "audioQS": "Ps.68,Num.22,Luke.8"
        }
    },
    "2021/05/19": {
        "datePretty": "Wednesday, May 19, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 29",
                    "readQS": "Psalm+29",
                    "audioQS": "Ps.29"
                },
                {
                    "pretty": "Deuteronomy 31:30\u201332:14",
                    "readQS": "Deuteronomy+31:30-32:14",
                    "audioQS": "Deut.31"
                },
                {
                    "pretty": "1 John 3:11\u2013end",
                    "readQS": "1+John+3:11-",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+29%3B+Deuteronomy+31:30-32:14%3B+1+John+3:11-",
            "audioQS": "Ps.29,Deut.31,1John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Numbers 23:13\u2013end",
                    "readQS": "Numbers+23:13-",
                    "audioQS": "Num.23"
                },
                {
                    "pretty": "Luke 8:16\u201325",
                    "readQS": "Luke+8:16-25",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+46%3B+Numbers+23:13-%3B+Luke+8:16-25",
            "audioQS": "Ps.46,Num.23,Luke.8"
        }
    },
    "2021/05/20": {
        "datePretty": "Thursday, May 20, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "Deuteronomy 32:15\u201347",
                    "readQS": "Deuteronomy+32:15-47",
                    "audioQS": "Deut.32"
                },
                {
                    "pretty": "1 John 4:1\u20136",
                    "readQS": "1+John+4:1-6",
                    "audioQS": "1John.4"
                }
            ],
            "readQS": "Psalm+24%3B+Deuteronomy+32:15-47%3B+1+John+4:1-6",
            "audioQS": "Ps.24,Deut.32,1John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Numbers 24",
                    "readQS": "Numbers+24",
                    "audioQS": "Num.24"
                },
                {
                    "pretty": "Luke 8:26\u201339",
                    "readQS": "Luke+8:26-39",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+139%3B+Numbers+24%3B+Luke+8:26-39",
            "audioQS": "Ps.139,Num.24,Luke.8"
        }
    },
    "2021/05/21": {
        "datePretty": "Friday, May 21, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Deuteronomy 33",
                    "readQS": "Deuteronomy+33",
                    "audioQS": "Deut.33"
                },
                {
                    "pretty": "1 John 4:7\u2013end",
                    "readQS": "1+John+4:7-",
                    "audioQS": "1John.4"
                }
            ],
            "readQS": "Psalm+28%3B+Deuteronomy+33%3B+1+John+4:7-",
            "audioQS": "Ps.28,Deut.33,1John.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Numbers 27:12\u2013end",
                    "readQS": "Numbers+27:12-",
                    "audioQS": "Num.27"
                },
                {
                    "pretty": "Luke 8:40\u2013end",
                    "readQS": "Luke+8:40-",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+147%3B+Numbers+27:12-%3B+Luke+8:40-",
            "audioQS": "Ps.147,Num.27,Luke.8"
        }
    },
    "2021/05/22": {
        "datePretty": "Saturday, May 22, 2021",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
                },
                {
                    "pretty": "Deuteronomy 32:48\u2013end",
                    "readQS": "Deuteronomy+32:48-",
                    "audioQS": "Deut.32"
                },
                {
                    "pretty": "Deuteronomy 34",
                    "readQS": "Deuteronomy+34",
                    "audioQS": "Deut.34"
                },
                {
                    "pretty": "1 John 5",
                    "readQS": "1+John+5",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+43%3B+Deuteronomy+32:48-%3B+Deuteronomy+34%3B+1+John+5",
            "audioQS": "Ps.43,Deut.32,Deut.34,1John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Numbers 32:1\u201327",
                    "readQS": "Numbers+32:1-27",
                    "audioQS": "Num.32"
                },
                {
                    "pretty": "Luke 9:1\u201317",
                    "readQS": "Luke+9:1-17",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+48%3B+Numbers+32:1-27%3B+Luke+9:1-17",
            "audioQS": "Ps.48,Num.32,Luke.9"
        }
    },
    "2021/05/23": {
        "datePretty": "Sunday, May 23, 2021",
        "calendar": "Day of Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 11:1\u20139",
                    "readQS": "Isaiah+11:1-9",
                    "audioQS": "Isa.11"
                },
                {
                    "pretty": "1 Corinthians 12:4\u201313",
                    "readQS": "1+Corinthians+12:4-13",
                    "audioQS": "1Cor.12"
                }
            ],
            "readQS": "Psalm+145%3B+Isaiah+11:1-9%3B+1+Corinthians+12:4-13",
            "audioQS": "Ps.145,Isa.11,1Cor.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139:1\u201311",
                    "readQS": "Psalm+139:1-11",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Ezekiel 36:22\u201328",
                    "readQS": "Ezekiel+36:22-28",
                    "audioQS": "Ezek.36"
                },
                {
                    "pretty": "Acts 2:22\u201338",
                    "readQS": "Acts+2:22-38",
                    "audioQS": "Acts.2"
                }
            ],
            "readQS": "Psalm+139:1-11%3B+Ezekiel+36:22-28%3B+Acts+2:22-38",
            "audioQS": "Ps.139,Ezek.36,Acts.2"
        }
    },
    "2021/05/24": {
        "datePretty": "Monday, May 24, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Job 1",
                    "readQS": "Job+1",
                    "audioQS": "Job.1"
                },
                {
                    "pretty": "Romans 1:1\u201317",
                    "readQS": "Romans+1:1-17",
                    "audioQS": "Rom.1"
                }
            ],
            "readQS": "Psalm+126%3B+Job+1%3B+Romans+1:1-17",
            "audioQS": "Ps.126,Job.1,Rom.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "Joshua 1",
                    "readQS": "Joshua+1",
                    "audioQS": "Josh.1"
                },
                {
                    "pretty": "Luke 9:18\u201327",
                    "readQS": "Luke+9:18-27",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+127%3B+Joshua+1%3B+Luke+9:18-27",
            "audioQS": "Ps.127,Josh.1,Luke.9"
        }
    },
    "2021/05/25": {
        "datePretty": "Tuesday, May 25, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Job 2",
                    "readQS": "Job+2",
                    "audioQS": "Job.2"
                },
                {
                    "pretty": "Romans 1:18\u2013end",
                    "readQS": "Romans+1:18-",
                    "audioQS": "Rom.1"
                }
            ],
            "readQS": "Psalm+132%3B+Job+2%3B+Romans+1:18-",
            "audioQS": "Ps.132,Job.2,Rom.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Joshua 2",
                    "readQS": "Joshua+2",
                    "audioQS": "Josh.2"
                },
                {
                    "pretty": "Luke 9:28\u201336",
                    "readQS": "Luke+9:28-36",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+135%3B+Joshua+2%3B+Luke+9:28-36",
            "audioQS": "Ps.135,Josh.2,Luke.9"
        }
    },
    "2021/05/26": {
        "datePretty": "Wednesday, May 26, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Job 3",
                    "readQS": "Job+3",
                    "audioQS": "Job.3"
                },
                {
                    "pretty": "Romans 2:1\u201316",
                    "readQS": "Romans+2:1-16",
                    "audioQS": "Rom.2"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Job+3%3B+Romans+2:1-16",
            "audioQS": "Ps.119,Job.3,Rom.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "Joshua 3",
                    "readQS": "Joshua+3",
                    "audioQS": "Josh.3"
                },
                {
                    "pretty": "Luke 9:37\u201350",
                    "readQS": "Luke+9:37-50",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+136%3B+Joshua+3%3B+Luke+9:37-50",
            "audioQS": "Ps.136,Josh.3,Luke.9"
        }
    },
    "2021/05/27": {
        "datePretty": "Thursday, May 27, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Job 4",
                    "readQS": "Job+4",
                    "audioQS": "Job.4"
                },
                {
                    "pretty": "Romans 2:17\u2013end",
                    "readQS": "Romans+2:17-",
                    "audioQS": "Rom.2"
                }
            ],
            "readQS": "Psalm+143%3B+Job+4%3B+Romans+2:17-",
            "audioQS": "Ps.143,Job.4,Rom.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "Joshua 4:1\u20135:1",
                    "readQS": "Joshua+4:1-5:1",
                    "audioQS": "Josh.4"
                },
                {
                    "pretty": "Luke 9:51\u2013end",
                    "readQS": "Luke+9:51-",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+138%3B+Joshua+4:1-5:1%3B+Luke+9:51-",
            "audioQS": "Ps.138,Josh.4,Luke.9"
        }
    },
    "2021/05/28": {
        "datePretty": "Friday, May 28, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Job 5",
                    "readQS": "Job+5",
                    "audioQS": "Job.5"
                },
                {
                    "pretty": "Romans 3:1\u201320",
                    "readQS": "Romans+3:1-20",
                    "audioQS": "Rom.3"
                }
            ],
            "readQS": "Psalm+144%3B+Job+5%3B+Romans+3:1-20",
            "audioQS": "Ps.144,Job.5,Rom.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Joshua 5:2\u2013end",
                    "readQS": "Joshua+5:2-",
                    "audioQS": "Josh.5"
                },
                {
                    "pretty": "Luke 10:1\u201316",
                    "readQS": "Luke+10:1-16",
                    "audioQS": "Luke.10"
                }
            ],
            "readQS": "Psalm+145%3B+Joshua+5:2-%3B+Luke+10:1-16",
            "audioQS": "Ps.145,Josh.5,Luke.10"
        }
    },
    "2021/05/29": {
        "datePretty": "Saturday, May 29, 2021",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Job 6",
                    "readQS": "Job+6",
                    "audioQS": "Job.6"
                },
                {
                    "pretty": "Romans 3:21\u2013end",
                    "readQS": "Romans+3:21-",
                    "audioQS": "Rom.3"
                }
            ],
            "readQS": "Psalm+147%3B+Job+6%3B+Romans+3:21-",
            "audioQS": "Ps.147,Job.6,Rom.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "Joshua 6:1\u201320",
                    "readQS": "Joshua+6:1-20",
                    "audioQS": "Josh.6"
                },
                {
                    "pretty": "Luke 10:17\u201324",
                    "readQS": "Luke+10:17-24",
                    "audioQS": "Luke.10"
                }
            ],
            "readQS": "Psalm+148%3B+Joshua+6:1-20%3B+Luke+10:17-24",
            "audioQS": "Ps.148,Josh.6,Luke.10"
        }
    },
    "2021/05/30": {
        "datePretty": "Sunday, May 30, 2021",
        "calendar": "Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33:1\u201312",
                    "readQS": "Psalm+33:1-12",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Proverbs 8:1\u20134,22\u201331",
                    "readQS": "Proverbs+8:1-4,22-31",
                    "audioQS": "Prov.8"
                },
                {
                    "pretty": "2 Corinthians 13:5\u201310,11\u201313",
                    "readQS": "2+Corinthians+13:5-10,11-13",
                    "audioQS": "2Cor.13"
                }
            ],
            "readQS": "Psalm+33:1-12%3B+Proverbs+8:1-4,22-31%3B+2+Corinthians+13:5-10,11-13",
            "audioQS": "Ps.33,Prov.8,2Cor.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104:1\u201310",
                    "readQS": "Psalm+104:1-10",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Ezekiel 1:4\u201310,22\u201328a",
                    "readQS": "Ezekiel+1:4-10,22-28a",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "Revelation 4",
                    "readQS": "Revelation+4",
                    "audioQS": "Rev.4"
                }
            ],
            "readQS": "Psalm+104:1-10%3B+Ezekiel+1:4-10,22-28a%3B+Revelation+4",
            "audioQS": "Ps.104,Ezek.1,Rev.4"
        }
    },
    "2021/05/31": {
        "datePretty": "Monday, May 31, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Job 7",
                    "readQS": "Job+7",
                    "audioQS": "Job.7"
                },
                {
                    "pretty": "Romans 4:1\u201312",
                    "readQS": "Romans+4:1-12",
                    "audioQS": "Rom.4"
                }
            ],
            "readQS": "Psalm+1%3B+Job+7%3B+Romans+4:1-12",
            "audioQS": "Ps.1,Job.7,Rom.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Joshua 7:1\u201315",
                    "readQS": "Joshua+7:1-15",
                    "audioQS": "Josh.7"
                },
                {
                    "pretty": "Luke 10:25\u201337",
                    "readQS": "Luke+10:25-37",
                    "audioQS": "Luke.10"
                }
            ],
            "readQS": "Psalm+4%3B+Joshua+7:1-15%3B+Luke+10:25-37",
            "audioQS": "Ps.4,Josh.7,Luke.10"
        }
    },
    "2021/06/01": {
        "datePretty": "Tuesday, June 1, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Job 8",
                    "readQS": "Job+8",
                    "audioQS": "Job.8"
                },
                {
                    "pretty": "Romans 4:13\u2013end",
                    "readQS": "Romans+4:13-",
                    "audioQS": "Rom.4"
                }
            ],
            "readQS": "Psalm+5%3B+Job+8%3B+Romans+4:13-",
            "audioQS": "Ps.5,Job.8,Rom.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Joshua 7:16\u2013end",
                    "readQS": "Joshua+7:16-",
                    "audioQS": "Josh.7"
                },
                {
                    "pretty": "Luke 10:38\u2013end",
                    "readQS": "Luke+10:38-",
                    "audioQS": "Luke.10"
                }
            ],
            "readQS": "Psalm+9%3B+Joshua+7:16-%3B+Luke+10:38-",
            "audioQS": "Ps.9,Josh.7,Luke.10"
        }
    },
    "2021/06/02": {
        "datePretty": "Wednesday, June 2, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Job 9",
                    "readQS": "Job+9",
                    "audioQS": "Job.9"
                },
                {
                    "pretty": "Romans 5:1\u201311",
                    "readQS": "Romans+5:1-11",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+Job+9%3B+Romans+5:1-11",
            "audioQS": "Ps.119,Job.9,Rom.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Joshua 8:1\u201329",
                    "readQS": "Joshua+8:1-29",
                    "audioQS": "Josh.8"
                },
                {
                    "pretty": "Luke 11:1\u201313",
                    "readQS": "Luke+11:1-13",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+11%3B+Joshua+8:1-29%3B+Luke+11:1-13",
            "audioQS": "Ps.11,Josh.8,Luke.11"
        }
    },
    "2021/06/03": {
        "datePretty": "Thursday, June 3, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Job 10",
                    "readQS": "Job+10",
                    "audioQS": "Job.10"
                },
                {
                    "pretty": "Romans 5:12\u2013end",
                    "readQS": "Romans+5:12-",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+15%3B+Job+10%3B+Romans+5:12-",
            "audioQS": "Ps.15,Job.10,Rom.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 18",
                    "readQS": "Psalm+18",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Joshua 8:30\u2013end",
                    "readQS": "Joshua+8:30-",
                    "audioQS": "Josh.8"
                },
                {
                    "pretty": "Luke 11:14\u201328",
                    "readQS": "Luke+11:14-28",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+18%3B+Joshua+8:30-%3B+Luke+11:14-28",
            "audioQS": "Ps.18,Josh.8,Luke.11"
        }
    },
    "2021/06/04": {
        "datePretty": "Friday, June 4, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Job 11",
                    "readQS": "Job+11",
                    "audioQS": "Job.11"
                },
                {
                    "pretty": "Romans 6:1\u201314",
                    "readQS": "Romans+6:1-14",
                    "audioQS": "Rom.6"
                }
            ],
            "readQS": "Psalm+19%3B+Job+11%3B+Romans+6:1-14",
            "audioQS": "Ps.19,Job.11,Rom.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Joshua 9:3\u201326",
                    "readQS": "Joshua+9:3-26",
                    "audioQS": "Josh.9"
                },
                {
                    "pretty": "Luke 11:29\u201336",
                    "readQS": "Luke+11:29-36",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+22%3B+Joshua+9:3-26%3B+Luke+11:29-36",
            "audioQS": "Ps.22,Josh.9,Luke.11"
        }
    },
    "2021/06/05": {
        "datePretty": "Saturday, June 5, 2021",
        "calendar": "Trinity",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Job 12",
                    "readQS": "Job+12",
                    "audioQS": "Job.12"
                },
                {
                    "pretty": "Romans 6:15\u2013end",
                    "readQS": "Romans+6:15-",
                    "audioQS": "Rom.6"
                }
            ],
            "readQS": "Psalm+23%3B+Job+12%3B+Romans+6:15-",
            "audioQS": "Ps.23,Job.12,Rom.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "Joshua 10:1\u201315",
                    "readQS": "Joshua+10:1-15",
                    "audioQS": "Josh.10"
                },
                {
                    "pretty": "Luke 11:37\u2013end",
                    "readQS": "Luke+11:37-",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+24%3B+Joshua+10:1-15%3B+Luke+11:37-",
            "audioQS": "Ps.24,Josh.10,Luke.11"
        }
    },
    "2021/06/06": {
        "datePretty": "Sunday, June 6, 2021",
        "calendar": "10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Deuteronomy 6:10\u201325",
                    "readQS": "Deuteronomy+6:10-25",
                    "audioQS": "Deut.6"
                },
                {
                    "pretty": "Acts 22:22\u201323:11",
                    "readQS": "Acts+22:22-23:11",
                    "audioQS": "Acts.22"
                }
            ],
            "readQS": "Psalm+36%3B+Deuteronomy+6:10-25%3B+Acts+22:22-23:11",
            "audioQS": "Ps.36,Deut.6,Acts.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 37:1\u201311",
                    "readQS": "Psalm+37:1-11",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Jeremiah 6:16\u201321",
                    "readQS": "Jeremiah+6:16-21",
                    "audioQS": "Jer.6"
                },
                {
                    "pretty": "Romans 9:1\u201313",
                    "readQS": "Romans+9:1-13",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+37:1-11%3B+Jeremiah+6:16-21%3B+Romans+9:1-13",
            "audioQS": "Ps.37,Jer.6,Rom.9"
        }
    },
    "2021/06/07": {
        "datePretty": "Monday, June 7, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Job 13",
                    "readQS": "Job+13",
                    "audioQS": "Job.13"
                },
                {
                    "pretty": "Romans 7:1\u20136",
                    "readQS": "Romans+7:1-6",
                    "audioQS": "Rom.7"
                }
            ],
            "readQS": "Psalm+30%3B+Job+13%3B+Romans+7:1-6",
            "audioQS": "Ps.30,Job.13,Rom.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Joshua 14",
                    "readQS": "Joshua+14",
                    "audioQS": "Josh.14"
                },
                {
                    "pretty": "Luke 12:1\u201312",
                    "readQS": "Luke+12:1-12",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+28%3B+Joshua+14%3B+Luke+12:1-12",
            "audioQS": "Ps.28,Josh.14,Luke.12"
        }
    },
    "2021/06/08": {
        "datePretty": "Tuesday, June 8, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Job 14",
                    "readQS": "Job+14",
                    "audioQS": "Job.14"
                },
                {
                    "pretty": "Romans 7:7\u2013end",
                    "readQS": "Romans+7:7-",
                    "audioQS": "Rom.7"
                }
            ],
            "readQS": "Psalm+36%3B+Job+14%3B+Romans+7:7-",
            "audioQS": "Ps.36,Job.14,Rom.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Joshua 21:43\u201322:8",
                    "readQS": "Joshua+21:43-22:8",
                    "audioQS": "Josh.21"
                },
                {
                    "pretty": "Luke 12:13\u201321",
                    "readQS": "Luke+12:13-21",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+33%3B+Joshua+21:43-22:8%3B+Luke+12:13-21",
            "audioQS": "Ps.33,Josh.21,Luke.12"
        }
    },
    "2021/06/09": {
        "datePretty": "Wednesday, June 9, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Job 15",
                    "readQS": "Job+15",
                    "audioQS": "Job.15"
                },
                {
                    "pretty": "Romans 8:1\u201311",
                    "readQS": "Romans+8:1-11",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+34%3B+Job+15%3B+Romans+8:1-11",
            "audioQS": "Ps.34,Job.15,Rom.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Joshua 22:9\u2013end",
                    "readQS": "Joshua+22:9-",
                    "audioQS": "Josh.22"
                },
                {
                    "pretty": "Luke 12:22\u201331",
                    "readQS": "Luke+12:22-31",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+119:33-56%3B+Joshua+22:9-%3B+Luke+12:22-31",
            "audioQS": "Ps.119,Josh.22,Luke.12"
        }
    },
    "2021/06/10": {
        "datePretty": "Thursday, June 10, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Job 16:1\u201317:2",
                    "readQS": "Job+16:1-17:2",
                    "audioQS": "Job.16"
                },
                {
                    "pretty": "Romans 8:12\u201317",
                    "readQS": "Romans+8:12-17",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+37%3B+Job+16:1-17:2%3B+Romans+8:12-17",
            "audioQS": "Ps.37,Job.16,Rom.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Joshua 23",
                    "readQS": "Joshua+23",
                    "audioQS": "Josh.23"
                },
                {
                    "pretty": "Luke 12:32\u201340",
                    "readQS": "Luke+12:32-40",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+40%3B+Joshua+23%3B+Luke+12:32-40",
            "audioQS": "Ps.40,Josh.23,Luke.12"
        }
    },
    "2021/06/11": {
        "datePretty": "Friday, June 11, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Job 17:3\u2013end",
                    "readQS": "Job+17:3-",
                    "audioQS": "Job.17"
                },
                {
                    "pretty": "Romans 8:18\u201330",
                    "readQS": "Romans+8:18-30",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+31%3B+Job+17:3-%3B+Romans+8:18-30",
            "audioQS": "Ps.31,Job.17,Rom.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "Joshua 24:1\u201328",
                    "readQS": "Joshua+24:1-28",
                    "audioQS": "Josh.24"
                },
                {
                    "pretty": "Luke 12:41\u201348",
                    "readQS": "Luke+12:41-48",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+35%3B+Joshua+24:1-28%3B+Luke+12:41-48",
            "audioQS": "Ps.35,Josh.24,Luke.12"
        }
    },
    "2021/06/12": {
        "datePretty": "Saturday, June 12, 2021",
        "calendar": "Week of 10th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Job 18",
                    "readQS": "Job+18",
                    "audioQS": "Job.18"
                },
                {
                    "pretty": "Romans 8:31\u2013end",
                    "readQS": "Romans+8:31-",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+42%3B+Job+18%3B+Romans+8:31-",
            "audioQS": "Ps.42,Job.18,Rom.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Joshua 24:29\u2013end",
                    "readQS": "Joshua+24:29-",
                    "audioQS": "Josh.24"
                },
                {
                    "pretty": "Luke 12:49\u2013end",
                    "readQS": "Luke+12:49-",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+46%3B+Joshua+24:29-%3B+Luke+12:49-",
            "audioQS": "Ps.46,Josh.24,Luke.12"
        }
    },
    "2021/06/13": {
        "datePretty": "Sunday, June 13, 2021",
        "calendar": "11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42,43",
                    "readQS": "Psalm+42,43",
                    "audioQS": "Ps.42,43"
                },
                {
                    "pretty": "Deuteronomy 10:12\u201311:1",
                    "readQS": "Deuteronomy+10:12-11:1",
                    "audioQS": "Deut.10"
                },
                {
                    "pretty": "Acts 23:12\u201335",
                    "readQS": "Acts+23:12-35",
                    "audioQS": "Acts.23"
                }
            ],
            "readQS": "Psalm+42,43%3B+Deuteronomy+10:12-11:1%3B+Acts+23:12-35",
            "audioQS": "Ps.42,43,Deut.10,Acts.23"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 39",
                    "readQS": "Psalm+39",
                    "audioQS": "Ps.39"
                },
                {
                    "pretty": "Jeremiah 7:1\u201316",
                    "readQS": "Jeremiah+7:1-16",
                    "audioQS": "Jer.7"
                },
                {
                    "pretty": "Romans 9:14\u201326",
                    "readQS": "Romans+9:14-26",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+39%3B+Jeremiah+7:1-16%3B+Romans+9:14-26",
            "audioQS": "Ps.39,Jer.7,Rom.9"
        }
    },
    "2021/06/14": {
        "datePretty": "Monday, June 14, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Job 19",
                    "readQS": "Job+19",
                    "audioQS": "Job.19"
                },
                {
                    "pretty": "Romans 9:1\u201318",
                    "readQS": "Romans+9:1-18",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+44%3B+Job+19%3B+Romans+9:1-18",
            "audioQS": "Ps.44,Job.19,Rom.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Judges 2",
                    "readQS": "Judges+2",
                    "audioQS": "Judg.2"
                },
                {
                    "pretty": "Luke 13:1\u20139",
                    "readQS": "Luke+13:1-9",
                    "audioQS": "Luke.13"
                }
            ],
            "readQS": "Psalm+47%3B+Judges+2%3B+Luke+13:1-9",
            "audioQS": "Ps.47,Judg.2,Luke.13"
        }
    },
    "2021/06/15": {
        "datePretty": "Tuesday, June 15, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Job 21",
                    "readQS": "Job+21",
                    "audioQS": "Job.21"
                },
                {
                    "pretty": "Romans 9:19\u2013end",
                    "readQS": "Romans+9:19-",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+48%3B+Job+21%3B+Romans+9:19-",
            "audioQS": "Ps.48,Job.21,Rom.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Judges 4:1\u201323",
                    "readQS": "Judges+4:1-23",
                    "audioQS": "Judg.4"
                },
                {
                    "pretty": "Luke 13:10\u201321",
                    "readQS": "Luke+13:10-21",
                    "audioQS": "Luke.13"
                }
            ],
            "readQS": "Psalm+50%3B+Judges+4:1-23%3B+Luke+13:10-21",
            "audioQS": "Ps.50,Judg.4,Luke.13"
        }
    },
    "2021/06/16": {
        "datePretty": "Wednesday, June 16, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Job 22",
                    "readQS": "Job+22",
                    "audioQS": "Job.22"
                },
                {
                    "pretty": "Romans 10:1\u201310",
                    "readQS": "Romans+10:1-10",
                    "audioQS": "Rom.10"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Job+22%3B+Romans+10:1-10",
            "audioQS": "Ps.119,Job.22,Rom.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "Judges 5",
                    "readQS": "Judges+5",
                    "audioQS": "Judg.5"
                },
                {
                    "pretty": "Luke 13:22\u2013end",
                    "readQS": "Luke+13:22-",
                    "audioQS": "Luke.13"
                }
            ],
            "readQS": "Psalm+59%3B+Judges+5%3B+Luke+13:22-",
            "audioQS": "Ps.59,Judg.5,Luke.13"
        }
    },
    "2021/06/17": {
        "datePretty": "Thursday, June 17, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Job 23",
                    "readQS": "Job+23",
                    "audioQS": "Job.23"
                },
                {
                    "pretty": "Romans 10:11\u2013end",
                    "readQS": "Romans+10:11-",
                    "audioQS": "Rom.10"
                }
            ],
            "readQS": "Psalm+57%3B+Job+23%3B+Romans+10:11-",
            "audioQS": "Ps.57,Job.23,Rom.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "Judges 6:1\u201324",
                    "readQS": "Judges+6:1-24",
                    "audioQS": "Judg.6"
                },
                {
                    "pretty": "Luke 14:1\u201311",
                    "readQS": "Luke+14:1-11",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+62%3B+Judges+6:1-24%3B+Luke+14:1-11",
            "audioQS": "Ps.62,Judg.6,Luke.14"
        }
    },
    "2021/06/18": {
        "datePretty": "Friday, June 18, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Job 24",
                    "readQS": "Job+24",
                    "audioQS": "Job.24"
                },
                {
                    "pretty": "Romans 11:1\u201312",
                    "readQS": "Romans+11:1-12",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+51%3B+Job+24%3B+Romans+11:1-12",
            "audioQS": "Ps.51,Job.24,Rom.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "Judges 6:25\u2013end",
                    "readQS": "Judges+6:25-",
                    "audioQS": "Judg.6"
                },
                {
                    "pretty": "Luke 14:12\u201324",
                    "readQS": "Luke+14:12-24",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+38%3B+Judges+6:25-%3B+Luke+14:12-24",
            "audioQS": "Ps.38,Judg.6,Luke.14"
        }
    },
    "2021/06/19": {
        "datePretty": "Saturday, June 19, 2021",
        "calendar": "Week of 11th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Job 25\u201326",
                    "readQS": "Job+25-26",
                    "audioQS": "Job.25\u201326"
                },
                {
                    "pretty": "Romans 11:13\u201324",
                    "readQS": "Romans+11:13-24",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+68%3B+Job+25-26%3B+Romans+11:13-24",
            "audioQS": "Ps.68,Job.25\u201326,Rom.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "Judges 7",
                    "readQS": "Judges+7",
                    "audioQS": "Judg.7"
                },
                {
                    "pretty": "Luke 14:25\u2013end",
                    "readQS": "Luke+14:25-",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+66%3B+Judges+7%3B+Luke+14:25-",
            "audioQS": "Ps.66,Judg.7,Luke.14"
        }
    },
    "2021/06/20": {
        "datePretty": "Sunday, June 20, 2021",
        "calendar": "12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Deuteronomy 11:1\u201315",
                    "readQS": "Deuteronomy+11:1-15",
                    "audioQS": "Deut.11"
                },
                {
                    "pretty": "Acts 27:1\u201312",
                    "readQS": "Acts+27:1-12",
                    "audioQS": "Acts.27"
                }
            ],
            "readQS": "Psalm+48%3B+Deuteronomy+11:1-15%3B+Acts+27:1-12",
            "audioQS": "Ps.48,Deut.11,Acts.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
                },
                {
                    "pretty": "Jeremiah 10:1\u201316",
                    "readQS": "Jeremiah+10:1-16",
                    "audioQS": "Jer.10"
                },
                {
                    "pretty": "Romans 11:25\u201336",
                    "readQS": "Romans+11:25-36",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+49%3B+Jeremiah+10:1-16%3B+Romans+11:25-36",
            "audioQS": "Ps.49,Jer.10,Rom.11"
        }
    },
    "2021/06/21": {
        "datePretty": "Monday, June 21, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Job 27",
                    "readQS": "Job+27",
                    "audioQS": "Job.27"
                },
                {
                    "pretty": "Romans 11:25\u2013end",
                    "readQS": "Romans+11:25-",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+71%3B+Job+27%3B+Romans+11:25-",
            "audioQS": "Ps.71,Job.27,Rom.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Judges 8:22\u2013end",
                    "readQS": "Judges+8:22-",
                    "audioQS": "Judg.8"
                },
                {
                    "pretty": "Luke 15:1\u201310",
                    "readQS": "Luke+15:1-10",
                    "audioQS": "Luke.15"
                }
            ],
            "readQS": "Psalm+72%3B+Judges+8:22-%3B+Luke+15:1-10",
            "audioQS": "Ps.72,Judg.8,Luke.15"
        }
    },
    "2021/06/22": {
        "datePretty": "Tuesday, June 22, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Job 28",
                    "readQS": "Job+28",
                    "audioQS": "Job.28"
                },
                {
                    "pretty": "Romans 12:1\u20138",
                    "readQS": "Romans+12:1-8",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+73%3B+Job+28%3B+Romans+12:1-8",
            "audioQS": "Ps.73,Job.28,Rom.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Judges 9:1\u201321",
                    "readQS": "Judges+9:1-21",
                    "audioQS": "Judg.9"
                },
                {
                    "pretty": "Luke 15:11\u2013end",
                    "readQS": "Luke+15:11-",
                    "audioQS": "Luke.15"
                }
            ],
            "readQS": "Psalm+74%3B+Judges+9:1-21%3B+Luke+15:11-",
            "audioQS": "Ps.74,Judg.9,Luke.15"
        }
    },
    "2021/06/23": {
        "datePretty": "Wednesday, June 23, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Job 29",
                    "readQS": "Job+29",
                    "audioQS": "Job.29"
                },
                {
                    "pretty": "Romans 12:9\u2013end",
                    "readQS": "Romans+12:9-",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+77%3B+Job+29%3B+Romans+12:9-",
            "audioQS": "Ps.77,Job.29,Rom.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:81\u2013104",
                    "readQS": "Psalm+119:81-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Judges 9:22\u2013end",
                    "readQS": "Judges+9:22-",
                    "audioQS": "Judg.9"
                },
                {
                    "pretty": "Luke 16:1\u201318",
                    "readQS": "Luke+16:1-18",
                    "audioQS": "Luke.16"
                }
            ],
            "readQS": "Psalm+119:81-104%3B+Judges+9:22-%3B+Luke+16:1-18",
            "audioQS": "Ps.119,Judg.9,Luke.16"
        }
    },
    "2021/06/24": {
        "datePretty": "Thursday, June 24, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Job 30",
                    "readQS": "Job+30",
                    "audioQS": "Job.30"
                },
                {
                    "pretty": "Romans 13:1\u20137",
                    "readQS": "Romans+13:1-7",
                    "audioQS": "Rom.13"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Job+30%3B+Romans+13:1-7",
            "audioQS": "Ps.78,Job.30,Rom.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78:40\u2013end",
                    "readQS": "Psalm+78:40-",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Judges 11:1\u201311",
                    "readQS": "Judges+11:1-11",
                    "audioQS": "Judg.11"
                },
                {
                    "pretty": "Luke 16:19\u2013end",
                    "readQS": "Luke+16:19-",
                    "audioQS": "Luke.16"
                }
            ],
            "readQS": "Psalm+78:40-%3B+Judges+11:1-11%3B+Luke+16:19-",
            "audioQS": "Ps.78,Judg.11,Luke.16"
        }
    },
    "2021/06/25": {
        "datePretty": "Friday, June 25, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Job 31",
                    "readQS": "Job+31",
                    "audioQS": "Job.31"
                },
                {
                    "pretty": "Romans 13:8\u2013end",
                    "readQS": "Romans+13:8-",
                    "audioQS": "Rom.13"
                }
            ],
            "readQS": "Psalm+55%3B+Job+31%3B+Romans+13:8-",
            "audioQS": "Ps.55,Job.31,Rom.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "Judges 11:29\u2013end",
                    "readQS": "Judges+11:29-",
                    "audioQS": "Judg.11"
                },
                {
                    "pretty": "Luke 17:1\u201310",
                    "readQS": "Luke+17:1-10",
                    "audioQS": "Luke.17"
                }
            ],
            "readQS": "Psalm+69%3B+Judges+11:29-%3B+Luke+17:1-10",
            "audioQS": "Ps.69,Judg.11,Luke.17"
        }
    },
    "2021/06/26": {
        "datePretty": "Saturday, June 26, 2021",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Job 32",
                    "readQS": "Job+32",
                    "audioQS": "Job.32"
                },
                {
                    "pretty": "Romans 14:1\u201312",
                    "readQS": "Romans+14:1-12",
                    "audioQS": "Rom.14"
                }
            ],
            "readQS": "Psalm+76%3B+Job+32%3B+Romans+14:1-12",
            "audioQS": "Ps.76,Job.32,Rom.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "Judges 12:1\u20137",
                    "readQS": "Judges+12:1-7",
                    "audioQS": "Judg.12"
                },
                {
                    "pretty": "Luke 17:11\u201319",
                    "readQS": "Luke+17:11-19",
                    "audioQS": "Luke.17"
                }
            ],
            "readQS": "Psalm+84%3B+Judges+12:1-7%3B+Luke+17:11-19",
            "audioQS": "Ps.84,Judg.12,Luke.17"
        }
    },
    "2021/06/27": {
        "datePretty": "Sunday, June 27, 2021",
        "calendar": "13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "Deuteronomy 15:1\u201311",
                    "readQS": "Deuteronomy+15:1-11",
                    "audioQS": "Deut.15"
                },
                {
                    "pretty": "Acts 27:13\u201332,33\u201334",
                    "readQS": "Acts+27:13-32,33-34",
                    "audioQS": "Acts.27"
                }
            ],
            "readQS": "Psalm+56%3B+Deuteronomy+15:1-11%3B+Acts+27:13-32,33-34",
            "audioQS": "Ps.56,Deut.15,Acts.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 53",
                    "readQS": "Psalm+53",
                    "audioQS": "Ps.53"
                },
                {
                    "pretty": "Jeremiah 11:1\u201314",
                    "readQS": "Jeremiah+11:1-14",
                    "audioQS": "Jer.11"
                },
                {
                    "pretty": "Romans 13:1\u201310",
                    "readQS": "Romans+13:1-10",
                    "audioQS": "Rom.13"
                }
            ],
            "readQS": "Psalm+53%3B+Jeremiah+11:1-14%3B+Romans+13:1-10",
            "audioQS": "Ps.53,Jer.11,Rom.13"
        }
    },
    "2021/06/28": {
        "datePretty": "Monday, June 28, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Job 33",
                    "readQS": "Job+33",
                    "audioQS": "Job.33"
                },
                {
                    "pretty": "Romans 14:13\u2013end",
                    "readQS": "Romans+14:13-",
                    "audioQS": "Rom.14"
                }
            ],
            "readQS": "Psalm+80%3B+Job+33%3B+Romans+14:13-",
            "audioQS": "Ps.80,Job.33,Rom.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Judges 13:1\u201324",
                    "readQS": "Judges+13:1-24",
                    "audioQS": "Judg.13"
                },
                {
                    "pretty": "Luke 17:20\u2013end",
                    "readQS": "Luke+17:20-",
                    "audioQS": "Luke.17"
                }
            ],
            "readQS": "Psalm+85%3B+Judges+13:1-24%3B+Luke+17:20-",
            "audioQS": "Ps.85,Judg.13,Luke.17"
        }
    },
    "2021/06/29": {
        "datePretty": "Tuesday, June 29, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Job 38",
                    "readQS": "Job+38",
                    "audioQS": "Job.38"
                },
                {
                    "pretty": "Romans 15:1\u201313",
                    "readQS": "Romans+15:1-13",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Job+38%3B+Romans+15:1-13",
            "audioQS": "Ps.89,Job.38,Rom.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u2013end",
                    "readQS": "Psalm+89:19-",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Judges 14",
                    "readQS": "Judges+14",
                    "audioQS": "Judg.14"
                },
                {
                    "pretty": "Luke 18:1\u201314",
                    "readQS": "Luke+18:1-14",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+89:19-%3B+Judges+14%3B+Luke+18:1-14",
            "audioQS": "Ps.89,Judg.14,Luke.18"
        }
    },
    "2021/06/30": {
        "datePretty": "Wednesday, June 30, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Job 39",
                    "readQS": "Job+39",
                    "audioQS": "Job.39"
                },
                {
                    "pretty": "Romans 15:14\u201321",
                    "readQS": "Romans+15:14-21",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+Job+39%3B+Romans+15:14-21",
            "audioQS": "Ps.119,Job.39,Rom.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "Judges 15:1\u201316:3",
                    "readQS": "Judges+15:1-16:3",
                    "audioQS": "Judg.15"
                },
                {
                    "pretty": "Luke 18:15\u201330",
                    "readQS": "Luke+18:15-30",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+91%3B+Judges+15:1-16:3%3B+Luke+18:15-30",
            "audioQS": "Ps.91,Judg.15,Luke.18"
        }
    },
    "2021/07/01": {
        "datePretty": "Thursday, July 1, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "Job 40",
                    "readQS": "Job+40",
                    "audioQS": "Job.40"
                },
                {
                    "pretty": "Romans 15:22\u2013end",
                    "readQS": "Romans+15:22-",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+92%3B+Job+40%3B+Romans+15:22-",
            "audioQS": "Ps.92,Job.40,Rom.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "Judges 16:4\u2013end",
                    "readQS": "Judges+16:4-",
                    "audioQS": "Judg.16"
                },
                {
                    "pretty": "Luke 18:31\u2013end",
                    "readQS": "Luke+18:31-",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+94%3B+Judges+16:4-%3B+Luke+18:31-",
            "audioQS": "Ps.94,Judg.16,Luke.18"
        }
    },
    "2021/07/02": {
        "datePretty": "Friday, July 2, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Job 41",
                    "readQS": "Job+41",
                    "audioQS": "Job.41"
                },
                {
                    "pretty": "Romans 16:1\u201316",
                    "readQS": "Romans+16:1-16",
                    "audioQS": "Rom.16"
                }
            ],
            "readQS": "Psalm+88%3B+Job+41%3B+Romans+16:1-16",
            "audioQS": "Ps.88,Job.41,Rom.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "Judges 17",
                    "readQS": "Judges+17",
                    "audioQS": "Judg.17"
                },
                {
                    "pretty": "Luke 19:1\u201310",
                    "readQS": "Luke+19:1-10",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+102%3B+Judges+17%3B+Luke+19:1-10",
            "audioQS": "Ps.102,Judg.17,Luke.19"
        }
    },
    "2021/07/03": {
        "datePretty": "Saturday, July 3, 2021",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Job 42",
                    "readQS": "Job+42",
                    "audioQS": "Job.42"
                },
                {
                    "pretty": "Romans 16:17\u2013end",
                    "readQS": "Romans+16:17-",
                    "audioQS": "Rom.16"
                }
            ],
            "readQS": "Psalm+97%3B+Job+42%3B+Romans+16:17-",
            "audioQS": "Ps.97,Job.42,Rom.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104",
                    "readQS": "Psalm+104",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Judges 18:1\u201320,18:27\u2013end",
                    "readQS": "Judges+18:1-20,18:27-",
                    "audioQS": "Judg.18"
                },
                {
                    "pretty": "Luke 19:11\u201327",
                    "readQS": "Luke+19:11-27",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+104%3B+Judges+18:1-20,18:27-%3B+Luke+19:11-27",
            "audioQS": "Ps.104,Judg.18,Luke.19"
        }
    },
    "2021/07/04": {
        "datePretty": "Sunday, July 4, 2021",
        "calendar": "14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Deuteronomy 24:10\u201322",
                    "readQS": "Deuteronomy+24:10-22",
                    "audioQS": "Deut.24"
                },
                {
                    "pretty": "Acts 28:1\u201316",
                    "readQS": "Acts+28:1-16",
                    "audioQS": "Acts.28"
                }
            ],
            "readQS": "Psalm+57%3B+Deuteronomy+24:10-22%3B+Acts+28:1-16",
            "audioQS": "Ps.57,Deut.24,Acts.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 64",
                    "readQS": "Psalm+64",
                    "audioQS": "Ps.64"
                },
                {
                    "pretty": "Jeremiah 20:1\u201311a",
                    "readQS": "Jeremiah+20:1-11a",
                    "audioQS": "Jer.20"
                },
                {
                    "pretty": "Romans 14:1\u201317",
                    "readQS": "Romans+14:1-17",
                    "audioQS": "Rom.14"
                }
            ],
            "readQS": "Psalm+64%3B+Jeremiah+20:1-11a%3B+Romans+14:1-17",
            "audioQS": "Ps.64,Jer.20,Rom.14"
        }
    },
    "2021/07/05": {
        "datePretty": "Monday, July 5, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Ezekiel 1:1\u201314",
                    "readQS": "Ezekiel+1:1-14",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "2 Corinthians 1:1\u201314",
                    "readQS": "2+Corinthians+1:1-14",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+98%3B+Ezekiel+1:1-14%3B+2+Corinthians+1:1-14",
            "audioQS": "Ps.98,Ezek.1,2Cor.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "1 Samuel 1:1\u201320",
                    "readQS": "1+Samuel+1:1-20",
                    "audioQS": "1Sam.1"
                },
                {
                    "pretty": "Luke 19:28\u201340",
                    "readQS": "Luke+19:28-40",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+105%3B+1+Samuel+1:1-20%3B+Luke+19:28-40",
            "audioQS": "Ps.105,1Sam.1,Luke.19"
        }
    },
    "2021/07/06": {
        "datePretty": "Tuesday, July 6, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Ezekiel 1:15\u20132:2",
                    "readQS": "Ezekiel+1:15-2:2",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "2 Corinthians 1:15\u20132:4",
                    "readQS": "2+Corinthians+1:15-2:4",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+106%3B+Ezekiel+1:15-2:2%3B+2+Corinthians+1:15-2:4",
            "audioQS": "Ps.106,Ezek.1,2Cor.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 107",
                    "readQS": "Psalm+107",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "1 Samuel 1:21\u20132:11",
                    "readQS": "1+Samuel+1:21-2:11",
                    "audioQS": "1Sam.1"
                },
                {
                    "pretty": "Luke 19:41\u2013end",
                    "readQS": "Luke+19:41-",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+107%3B+1+Samuel+1:21-2:11%3B+Luke+19:41-",
            "audioQS": "Ps.107,1Sam.1,Luke.19"
        }
    },
    "2021/07/07": {
        "datePretty": "Wednesday, July 7, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Ezekiel 2:3\u20133:11",
                    "readQS": "Ezekiel+2:3-3:11",
                    "audioQS": "Ezek.2"
                },
                {
                    "pretty": "2 Corinthians 2:5\u2013end",
                    "readQS": "2+Corinthians+2:5-",
                    "audioQS": "2Cor.2"
                }
            ],
            "readQS": "Psalm+111%3B+Ezekiel+2:3-3:11%3B+2+Corinthians+2:5-",
            "audioQS": "Ps.111,Ezek.2,2Cor.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:129\u2013152",
                    "readQS": "Psalm+119:129-152",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Samuel 2:12\u201326",
                    "readQS": "1+Samuel+2:12-26",
                    "audioQS": "1Sam.2"
                },
                {
                    "pretty": "Luke 20:1\u20138",
                    "readQS": "Luke+20:1-8",
                    "audioQS": "Luke.20"
                }
            ],
            "readQS": "Psalm+119:129-152%3B+1+Samuel+2:12-26%3B+Luke+20:1-8",
            "audioQS": "Ps.119,1Sam.2,Luke.20"
        }
    },
    "2021/07/08": {
        "datePretty": "Thursday, July 8, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Ezekiel 3:12\u2013end",
                    "readQS": "Ezekiel+3:12-",
                    "audioQS": "Ezek.3"
                },
                {
                    "pretty": "2 Corinthians 3",
                    "readQS": "2+Corinthians+3",
                    "audioQS": "2Cor.3"
                }
            ],
            "readQS": "Psalm+115%3B+Ezekiel+3:12-%3B+2+Corinthians+3",
            "audioQS": "Ps.115,Ezek.3,2Cor.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "1 Samuel 2:27\u2013end",
                    "readQS": "1+Samuel+2:27-",
                    "audioQS": "1Sam.2"
                },
                {
                    "pretty": "Luke 20:9\u201319",
                    "readQS": "Luke+20:9-19",
                    "audioQS": "Luke.20"
                }
            ],
            "readQS": "Psalm+116%3B+1+Samuel+2:27-%3B+Luke+20:9-19",
            "audioQS": "Ps.116,1Sam.2,Luke.20"
        }
    },
    "2021/07/09": {
        "datePretty": "Friday, July 9, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Ezekiel 8",
                    "readQS": "Ezekiel+8",
                    "audioQS": "Ezek.8"
                },
                {
                    "pretty": "2 Corinthians 4",
                    "readQS": "2+Corinthians+4",
                    "audioQS": "2Cor.4"
                }
            ],
            "readQS": "Psalm+139%3B+Ezekiel+8%3B+2+Corinthians+4",
            "audioQS": "Ps.139,Ezek.8,2Cor.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "1 Samuel 3:1\u20134:1a",
                    "readQS": "1+Samuel+3:1-4:1a",
                    "audioQS": "1Sam.3"
                },
                {
                    "pretty": "Luke 20:20\u201326",
                    "readQS": "Luke+20:20-26",
                    "audioQS": "Luke.20"
                }
            ],
            "readQS": "Psalm+130%3B+1+Samuel+3:1-4:1a%3B+Luke+20:20-26",
            "audioQS": "Ps.130,1Sam.3,Luke.20"
        }
    },
    "2021/07/10": {
        "datePretty": "Saturday, July 10, 2021",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Ezekiel 9",
                    "readQS": "Ezekiel+9",
                    "audioQS": "Ezek.9"
                },
                {
                    "pretty": "2 Corinthians 5",
                    "readQS": "2+Corinthians+5",
                    "audioQS": "2Cor.5"
                }
            ],
            "readQS": "Psalm+121%3B+Ezekiel+9%3B+2+Corinthians+5",
            "audioQS": "Ps.121,Ezek.9,2Cor.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "1 Samuel 4:1b\u2013end",
                    "readQS": "1+Samuel+4:1b-",
                    "audioQS": "1Sam.4"
                },
                {
                    "pretty": "Luke 20:27\u201340",
                    "readQS": "Luke+20:27-40",
                    "audioQS": "Luke.20"
                }
            ],
            "readQS": "Psalm+118%3B+1+Samuel+4:1b-%3B+Luke+20:27-40",
            "audioQS": "Ps.118,1Sam.4,Luke.20"
        }
    },
    "2021/07/11": {
        "datePretty": "Sunday, July 11, 2021",
        "calendar": "15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Deuteronomy 28:1\u201314",
                    "readQS": "Deuteronomy+28:1-14",
                    "audioQS": "Deut.28"
                },
                {
                    "pretty": "Acts 28:17\u201331",
                    "readQS": "Acts+28:17-31",
                    "audioQS": "Acts.28"
                }
            ],
            "readQS": "Psalm+65%3B+Deuteronomy+28:1-14%3B+Acts+28:17-31",
            "audioQS": "Ps.65,Deut.28,Acts.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "Job 4:1",
                    "readQS": "Job+4:1",
                    "audioQS": "Job.4"
                },
                {
                    "pretty": "5:6\u201327",
                    "readQS": "5:6-27",
                    "audioQS": "5"
                },
                {
                    "pretty": "Romans 15:14\u201329",
                    "readQS": "Romans+15:14-29",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+66%3B+Job+4:1%3B5:6-27%3B+Romans+15:14-29",
            "audioQS": "Ps.66,Job.4,5,Rom.15"
        }
    },
    "2021/07/12": {
        "datePretty": "Monday, July 12, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Ezekiel 10:1\u201319",
                    "readQS": "Ezekiel+10:1-19",
                    "audioQS": "Ezek.10"
                },
                {
                    "pretty": "2 Corinthians 6:1\u20137:1",
                    "readQS": "2+Corinthians+6:1-7:1",
                    "audioQS": "2Cor.6"
                }
            ],
            "readQS": "Psalm+126%3B+Ezekiel+10:1-19%3B+2+Corinthians+6:1-7:1",
            "audioQS": "Ps.126,Ezek.10,2Cor.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "1 Samuel 5",
                    "readQS": "1+Samuel+5",
                    "audioQS": "1Sam.5"
                },
                {
                    "pretty": "Luke 20:41\u201321:4",
                    "readQS": "Luke+20:41-21:4",
                    "audioQS": "Luke.20"
                }
            ],
            "readQS": "Psalm+127%3B+1+Samuel+5%3B+Luke+20:41-21:4",
            "audioQS": "Ps.127,1Sam.5,Luke.20"
        }
    },
    "2021/07/13": {
        "datePretty": "Tuesday, July 13, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Ezekiel 11:14\u2013end",
                    "readQS": "Ezekiel+11:14-",
                    "audioQS": "Ezek.11"
                },
                {
                    "pretty": "2 Corinthians 7:2\u2013end",
                    "readQS": "2+Corinthians+7:2-",
                    "audioQS": "2Cor.7"
                }
            ],
            "readQS": "Psalm+132%3B+Ezekiel+11:14-%3B+2+Corinthians+7:2-",
            "audioQS": "Ps.132,Ezek.11,2Cor.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "1 Samuel 6:1\u201316",
                    "readQS": "1+Samuel+6:1-16",
                    "audioQS": "1Sam.6"
                },
                {
                    "pretty": "Luke 21:5\u201319",
                    "readQS": "Luke+21:5-19",
                    "audioQS": "Luke.21"
                }
            ],
            "readQS": "Psalm+135%3B+1+Samuel+6:1-16%3B+Luke+21:5-19",
            "audioQS": "Ps.135,1Sam.6,Luke.21"
        }
    },
    "2021/07/14": {
        "datePretty": "Wednesday, July 14, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 12:1\u201316",
                    "readQS": "Ezekiel+12:1-16",
                    "audioQS": "Ezek.12"
                },
                {
                    "pretty": "2 Corinthians 8:1\u201315",
                    "readQS": "2+Corinthians+8:1-15",
                    "audioQS": "2Cor.8"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Ezekiel+12:1-16%3B+2+Corinthians+8:1-15",
            "audioQS": "Ps.119,Ezek.12,2Cor.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "1 Samuel 7",
                    "readQS": "1+Samuel+7",
                    "audioQS": "1Sam.7"
                },
                {
                    "pretty": "Luke 21:20\u201328",
                    "readQS": "Luke+21:20-28",
                    "audioQS": "Luke.21"
                }
            ],
            "readQS": "Psalm+136%3B+1+Samuel+7%3B+Luke+21:20-28",
            "audioQS": "Ps.136,1Sam.7,Luke.21"
        }
    },
    "2021/07/15": {
        "datePretty": "Thursday, July 15, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Ezekiel 12:17\u2013end",
                    "readQS": "Ezekiel+12:17-",
                    "audioQS": "Ezek.12"
                },
                {
                    "pretty": "2 Corinthians 8:16\u20139:5",
                    "readQS": "2+Corinthians+8:16-9:5",
                    "audioQS": "2Cor.8"
                }
            ],
            "readQS": "Psalm+143%3B+Ezekiel+12:17-%3B+2+Corinthians+8:16-9:5",
            "audioQS": "Ps.143,Ezek.12,2Cor.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "1 Samuel 8",
                    "readQS": "1+Samuel+8",
                    "audioQS": "1Sam.8"
                },
                {
                    "pretty": "Luke 21:29\u2013end",
                    "readQS": "Luke+21:29-",
                    "audioQS": "Luke.21"
                }
            ],
            "readQS": "Psalm+138%3B+1+Samuel+8%3B+Luke+21:29-",
            "audioQS": "Ps.138,1Sam.8,Luke.21"
        }
    },
    "2021/07/16": {
        "datePretty": "Friday, July 16, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Ezekiel 13:1\u201316",
                    "readQS": "Ezekiel+13:1-16",
                    "audioQS": "Ezek.13"
                },
                {
                    "pretty": "2 Corinthians 9:6\u2013end",
                    "readQS": "2+Corinthians+9:6-",
                    "audioQS": "2Cor.9"
                }
            ],
            "readQS": "Psalm+144%3B+Ezekiel+13:1-16%3B+2+Corinthians+9:6-",
            "audioQS": "Ps.144,Ezek.13,2Cor.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "1 Samuel 9:1\u201314",
                    "readQS": "1+Samuel+9:1-14",
                    "audioQS": "1Sam.9"
                },
                {
                    "pretty": "Luke 22:1\u201313",
                    "readQS": "Luke+22:1-13",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+145%3B+1+Samuel+9:1-14%3B+Luke+22:1-13",
            "audioQS": "Ps.145,1Sam.9,Luke.22"
        }
    },
    "2021/07/17": {
        "datePretty": "Saturday, July 17, 2021",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Ezekiel 14:1\u201311",
                    "readQS": "Ezekiel+14:1-11",
                    "audioQS": "Ezek.14"
                },
                {
                    "pretty": "2 Corinthians 10",
                    "readQS": "2+Corinthians+10",
                    "audioQS": "2Cor.10"
                }
            ],
            "readQS": "Psalm+147%3B+Ezekiel+14:1-11%3B+2+Corinthians+10",
            "audioQS": "Ps.147,Ezek.14,2Cor.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "1 Samuel 9:15\u201310:1",
                    "readQS": "1+Samuel+9:15-10:1",
                    "audioQS": "1Sam.9"
                },
                {
                    "pretty": "Luke 22:14\u201323",
                    "readQS": "Luke+22:14-23",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+148%3B+1+Samuel+9:15-10:1%3B+Luke+22:14-23",
            "audioQS": "Ps.148,1Sam.9,Luke.22"
        }
    },
    "2021/07/18": {
        "datePretty": "Sunday, July 18, 2021",
        "calendar": "16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 67,70",
                    "readQS": "Psalm+67,70",
                    "audioQS": "Ps.67,70"
                },
                {
                    "pretty": "Deuteronomy 30:1\u201310",
                    "readQS": "Deuteronomy+30:1-10",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "1 Peter 3:8\u201318",
                    "readQS": "1+Peter+3:8-18",
                    "audioQS": "1Pet.3"
                }
            ],
            "readQS": "Psalm+67,70%3B+Deuteronomy+30:1-10%3B+1+Peter+3:8-18",
            "audioQS": "Ps.67,70,Deut.30,1Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Job 13:13\u201314:6",
                    "readQS": "Job+13:13-14:6",
                    "audioQS": "Job.13"
                },
                {
                    "pretty": "Hebrews 2:5\u201318",
                    "readQS": "Hebrews+2:5-18",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+73%3B+Job+13:13-14:6%3B+Hebrews+2:5-18",
            "audioQS": "Ps.73,Job.13,Heb.2"
        }
    },
    "2021/07/19": {
        "datePretty": "Monday, July 19, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Ezekiel 14:12\u2013end",
                    "readQS": "Ezekiel+14:12-",
                    "audioQS": "Ezek.14"
                },
                {
                    "pretty": "2 Corinthians 11:1\u201315",
                    "readQS": "2+Corinthians+11:1-15",
                    "audioQS": "2Cor.11"
                }
            ],
            "readQS": "Psalm+1%3B+Ezekiel+14:12-%3B+2+Corinthians+11:1-15",
            "audioQS": "Ps.1,Ezek.14,2Cor.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "1 Samuel 10:1\u201316",
                    "readQS": "1+Samuel+10:1-16",
                    "audioQS": "1Sam.10"
                },
                {
                    "pretty": "Luke 22:24\u201330",
                    "readQS": "Luke+22:24-30",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+4%3B+1+Samuel+10:1-16%3B+Luke+22:24-30",
            "audioQS": "Ps.4,1Sam.10,Luke.22"
        }
    },
    "2021/07/20": {
        "datePretty": "Tuesday, July 20, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Ezekiel 18:1\u201320",
                    "readQS": "Ezekiel+18:1-20",
                    "audioQS": "Ezek.18"
                },
                {
                    "pretty": "2 Corinthians 11:16\u2013end",
                    "readQS": "2+Corinthians+11:16-",
                    "audioQS": "2Cor.11"
                }
            ],
            "readQS": "Psalm+5%3B+Ezekiel+18:1-20%3B+2+Corinthians+11:16-",
            "audioQS": "Ps.5,Ezek.18,2Cor.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "1 Samuel 10:17\u2013end",
                    "readQS": "1+Samuel+10:17-",
                    "audioQS": "1Sam.10"
                },
                {
                    "pretty": "Luke 22:31\u201338",
                    "readQS": "Luke+22:31-38",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+9%3B+1+Samuel+10:17-%3B+Luke+22:31-38",
            "audioQS": "Ps.9,1Sam.10,Luke.22"
        }
    },
    "2021/07/21": {
        "datePretty": "Wednesday, July 21, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 18:21\u201332",
                    "readQS": "Ezekiel+18:21-32",
                    "audioQS": "Ezek.18"
                },
                {
                    "pretty": "2 Corinthians 12",
                    "readQS": "2+Corinthians+12",
                    "audioQS": "2Cor.12"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+Ezekiel+18:21-32%3B+2+Corinthians+12",
            "audioQS": "Ps.119,Ezek.18,2Cor.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "1 Samuel 11",
                    "readQS": "1+Samuel+11",
                    "audioQS": "1Sam.11"
                },
                {
                    "pretty": "Luke 22:39\u201346",
                    "readQS": "Luke+22:39-46",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+11%3B+1+Samuel+11%3B+Luke+22:39-46",
            "audioQS": "Ps.11,1Sam.11,Luke.22"
        }
    },
    "2021/07/22": {
        "datePretty": "Thursday, July 22, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Ezekiel 20:1\u201320",
                    "readQS": "Ezekiel+20:1-20",
                    "audioQS": "Ezek.20"
                },
                {
                    "pretty": "2 Corinthians 13",
                    "readQS": "2+Corinthians+13",
                    "audioQS": "2Cor.13"
                }
            ],
            "readQS": "Psalm+15%3B+Ezekiel+20:1-20%3B+2+Corinthians+13",
            "audioQS": "Ps.15,Ezek.20,2Cor.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 18",
                    "readQS": "Psalm+18",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "1 Samuel 12",
                    "readQS": "1+Samuel+12",
                    "audioQS": "1Sam.12"
                },
                {
                    "pretty": "Luke 22:47\u201362",
                    "readQS": "Luke+22:47-62",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+18%3B+1+Samuel+12%3B+Luke+22:47-62",
            "audioQS": "Ps.18,1Sam.12,Luke.22"
        }
    },
    "2021/07/23": {
        "datePretty": "Friday, July 23, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Ezekiel 20:21\u201338",
                    "readQS": "Ezekiel+20:21-38",
                    "audioQS": "Ezek.20"
                },
                {
                    "pretty": "James 1:1\u201311",
                    "readQS": "James+1:1-11",
                    "audioQS": "Jas.1"
                }
            ],
            "readQS": "Psalm+19%3B+Ezekiel+20:21-38%3B+James+1:1-11",
            "audioQS": "Ps.19,Ezek.20,Jas.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "1 Samuel 13:5\u201318",
                    "readQS": "1+Samuel+13:5-18",
                    "audioQS": "1Sam.13"
                },
                {
                    "pretty": "Luke 22:63\u2013end",
                    "readQS": "Luke+22:63-",
                    "audioQS": "Luke.22"
                }
            ],
            "readQS": "Psalm+22%3B+1+Samuel+13:5-18%3B+Luke+22:63-",
            "audioQS": "Ps.22,1Sam.13,Luke.22"
        }
    },
    "2021/07/24": {
        "datePretty": "Saturday, July 24, 2021",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Ezekiel 24:15\u2013end",
                    "readQS": "Ezekiel+24:15-",
                    "audioQS": "Ezek.24"
                },
                {
                    "pretty": "James 1:12\u2013end",
                    "readQS": "James+1:12-",
                    "audioQS": "Jas.1"
                }
            ],
            "readQS": "Psalm+23%3B+Ezekiel+24:15-%3B+James+1:12-",
            "audioQS": "Ps.23,Ezek.24,Jas.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "1 Samuel 13:19\u201314:15",
                    "readQS": "1+Samuel+13:19-14:15",
                    "audioQS": "1Sam.13"
                },
                {
                    "pretty": "Luke 23:1\u201312",
                    "readQS": "Luke+23:1-12",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+24%3B+1+Samuel+13:19-14:15%3B+Luke+23:1-12",
            "audioQS": "Ps.24,1Sam.13,Luke.23"
        }
    },
    "2021/07/25": {
        "datePretty": "Sunday, July 25, 2021",
        "calendar": "17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 7,29,117",
                    "readQS": "Psalm+7,29,117",
                    "audioQS": "Ps.7,29,117"
                },
                {
                    "pretty": "2 Kings 1:9\u201315",
                    "readQS": "2+Kings+1:9-15",
                    "audioQS": "2Kgs.1"
                },
                {
                    "pretty": "Luke 9:46\u201356",
                    "readQS": "Luke+9:46-56",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+7,29,117%3B+2+Kings+1:9-15%3B+Luke+9:46-56",
            "audioQS": "Ps.7,29,117,2Kgs.1,Luke.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "Jeremiah 26:1\u201315",
                    "readQS": "Jeremiah+26:1-15",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "Mark 1:14\u201320",
                    "readQS": "Mark+1:14-20",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+94%3B+Jeremiah+26:1-15%3B+Mark+1:14-20",
            "audioQS": "Ps.94,Jer.26,Mark.1"
        }
    },
    "2021/07/26": {
        "datePretty": "Monday, July 26, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Ezekiel 28:1\u201319",
                    "readQS": "Ezekiel+28:1-19",
                    "audioQS": "Ezek.28"
                },
                {
                    "pretty": "James 2:1\u201313",
                    "readQS": "James+2:1-13",
                    "audioQS": "Jas.2"
                }
            ],
            "readQS": "Psalm+30%3B+Ezekiel+28:1-19%3B+James+2:1-13",
            "audioQS": "Ps.30,Ezek.28,Jas.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "1 Samuel 14:24\u201346",
                    "readQS": "1+Samuel+14:24-46",
                    "audioQS": "1Sam.14"
                },
                {
                    "pretty": "Luke 23:13\u201325",
                    "readQS": "Luke+23:13-25",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+28%3B+1+Samuel+14:24-46%3B+Luke+23:13-25",
            "audioQS": "Ps.28,1Sam.14,Luke.23"
        }
    },
    "2021/07/27": {
        "datePretty": "Tuesday, July 27, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Ezekiel 33:1\u201320",
                    "readQS": "Ezekiel+33:1-20",
                    "audioQS": "Ezek.33"
                },
                {
                    "pretty": "James 2:14\u2013end",
                    "readQS": "James+2:14-",
                    "audioQS": "Jas.2"
                }
            ],
            "readQS": "Psalm+36%3B+Ezekiel+33:1-20%3B+James+2:14-",
            "audioQS": "Ps.36,Ezek.33,Jas.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "1 Samuel 15:1\u201323",
                    "readQS": "1+Samuel+15:1-23",
                    "audioQS": "1Sam.15"
                },
                {
                    "pretty": "Luke 23:26\u201343",
                    "readQS": "Luke+23:26-43",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+33%3B+1+Samuel+15:1-23%3B+Luke+23:26-43",
            "audioQS": "Ps.33,1Sam.15,Luke.23"
        }
    },
    "2021/07/28": {
        "datePretty": "Wednesday, July 28, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Ezekiel 33:21\u2013end",
                    "readQS": "Ezekiel+33:21-",
                    "audioQS": "Ezek.33"
                },
                {
                    "pretty": "James 3",
                    "readQS": "James+3",
                    "audioQS": "Jas.3"
                }
            ],
            "readQS": "Psalm+34%3B+Ezekiel+33:21-%3B+James+3",
            "audioQS": "Ps.34,Ezek.33,Jas.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Samuel 16",
                    "readQS": "1+Samuel+16",
                    "audioQS": "1Sam.16"
                },
                {
                    "pretty": "Luke 23:44\u201356a",
                    "readQS": "Luke+23:44-56a",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+119:33-56%3B+1+Samuel+16%3B+Luke+23:44-56a",
            "audioQS": "Ps.119,1Sam.16,Luke.23"
        }
    },
    "2021/07/29": {
        "datePretty": "Thursday, July 29, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Ezekiel 34:1\u201316",
                    "readQS": "Ezekiel+34:1-16",
                    "audioQS": "Ezek.34"
                },
                {
                    "pretty": "James 4:1\u201312",
                    "readQS": "James+4:1-12",
                    "audioQS": "Jas.4"
                }
            ],
            "readQS": "Psalm+37%3B+Ezekiel+34:1-16%3B+James+4:1-12",
            "audioQS": "Ps.37,Ezek.34,Jas.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "1 Samuel 17:1\u201330",
                    "readQS": "1+Samuel+17:1-30",
                    "audioQS": "1Sam.17"
                },
                {
                    "pretty": "Luke 23:56b\u201324:12",
                    "readQS": "Luke+23:56b-24:12",
                    "audioQS": "Luke.23"
                }
            ],
            "readQS": "Psalm+40%3B+1+Samuel+17:1-30%3B+Luke+23:56b-24:12",
            "audioQS": "Ps.40,1Sam.17,Luke.23"
        }
    },
    "2021/07/30": {
        "datePretty": "Friday, July 30, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Ezekiel 34:17\u2013end",
                    "readQS": "Ezekiel+34:17-",
                    "audioQS": "Ezek.34"
                },
                {
                    "pretty": "James 4:13\u20135:6",
                    "readQS": "James+4:13-5:6",
                    "audioQS": "Jas.4"
                }
            ],
            "readQS": "Psalm+31%3B+Ezekiel+34:17-%3B+James+4:13-5:6",
            "audioQS": "Ps.31,Ezek.34,Jas.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "1 Samuel 17:31\u201354",
                    "readQS": "1+Samuel+17:31-54",
                    "audioQS": "1Sam.17"
                },
                {
                    "pretty": "Luke 24:13\u201335",
                    "readQS": "Luke+24:13-35",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+35%3B+1+Samuel+17:31-54%3B+Luke+24:13-35",
            "audioQS": "Ps.35,1Sam.17,Luke.24"
        }
    },
    "2021/07/31": {
        "datePretty": "Saturday, July 31, 2021",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Ezekiel 36:16\u201336",
                    "readQS": "Ezekiel+36:16-36",
                    "audioQS": "Ezek.36"
                },
                {
                    "pretty": "James 5:7\u2013end",
                    "readQS": "James+5:7-",
                    "audioQS": "Jas.5"
                }
            ],
            "readQS": "Psalm+42%3B+Ezekiel+36:16-36%3B+James+5:7-",
            "audioQS": "Ps.42,Ezek.36,Jas.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "1 Samuel 17:55\u201318:16",
                    "readQS": "1+Samuel+17:55-18:16",
                    "audioQS": "1Sam.17"
                },
                {
                    "pretty": "Luke 24:36\u2013end",
                    "readQS": "Luke+24:36-",
                    "audioQS": "Luke.24"
                }
            ],
            "readQS": "Psalm+46%3B+1+Samuel+17:55-18:16%3B+Luke+24:36-",
            "audioQS": "Ps.46,1Sam.17,Luke.24"
        }
    },
    "2021/08/01": {
        "datePretty": "Sunday, August 1, 2021",
        "calendar": "18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Song of Solomon 5:2\u201316",
                    "readQS": "Song+of+Solomon+5:2-16",
                    "audioQS": "Song.5"
                },
                {
                    "pretty": "2 Peter 1:1\u201315",
                    "readQS": "2+Peter+1:1-15",
                    "audioQS": "2Pet.1"
                }
            ],
            "readQS": "Psalm+86%3B+Song+of+Solomon+5:2-16%3B+2+Peter+1:1-15",
            "audioQS": "Ps.86,Song.5,2Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Job 28",
                    "readQS": "Job+28",
                    "audioQS": "Job.28"
                },
                {
                    "pretty": "Hebrews 11:17\u201331",
                    "readQS": "Hebrews+11:17-31",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+88%3B+Job+28%3B+Hebrews+11:17-31",
            "audioQS": "Ps.88,Job.28,Heb.11"
        }
    },
    "2021/08/02": {
        "datePretty": "Monday, August 2, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Ezekiel 37:1\u201314",
                    "readQS": "Ezekiel+37:1-14",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "Mark 1:1\u201313",
                    "readQS": "Mark+1:1-13",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+44%3B+Ezekiel+37:1-14%3B+Mark+1:1-13",
            "audioQS": "Ps.44,Ezek.37,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "1 Samuel 19:1\u201318",
                    "readQS": "1+Samuel+19:1-18",
                    "audioQS": "1Sam.19"
                },
                {
                    "pretty": "Acts 1:1\u201314",
                    "readQS": "Acts+1:1-14",
                    "audioQS": "Acts.1"
                }
            ],
            "readQS": "Psalm+47%3B+1+Samuel+19:1-18%3B+Acts+1:1-14",
            "audioQS": "Ps.47,1Sam.19,Acts.1"
        }
    },
    "2021/08/03": {
        "datePretty": "Tuesday, August 3, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Ezekiel 37:15\u2013end",
                    "readQS": "Ezekiel+37:15-",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "Mark 1:14\u201320",
                    "readQS": "Mark+1:14-20",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+48%3B+Ezekiel+37:15-%3B+Mark+1:14-20",
            "audioQS": "Ps.48,Ezek.37,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "1 Samuel 20:1\u201317",
                    "readQS": "1+Samuel+20:1-17",
                    "audioQS": "1Sam.20"
                },
                {
                    "pretty": "Acts 1:15\u2013end",
                    "readQS": "Acts+1:15-",
                    "audioQS": "Acts.1"
                }
            ],
            "readQS": "Psalm+50%3B+1+Samuel+20:1-17%3B+Acts+1:15-",
            "audioQS": "Ps.50,1Sam.20,Acts.1"
        }
    },
    "2021/08/04": {
        "datePretty": "Wednesday, August 4, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 39:21\u2013end",
                    "readQS": "Ezekiel+39:21-",
                    "audioQS": "Ezek.39"
                },
                {
                    "pretty": "Mark 1:21\u201328",
                    "readQS": "Mark+1:21-28",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Ezekiel+39:21-%3B+Mark+1:21-28",
            "audioQS": "Ps.119,Ezek.39,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "1 Samuel 20:18\u2013end",
                    "readQS": "1+Samuel+20:18-",
                    "audioQS": "1Sam.20"
                },
                {
                    "pretty": "Acts 2:1\u201321",
                    "readQS": "Acts+2:1-21",
                    "audioQS": "Acts.2"
                }
            ],
            "readQS": "Psalm+59%3B+1+Samuel+20:18-%3B+Acts+2:1-21",
            "audioQS": "Ps.59,1Sam.20,Acts.2"
        }
    },
    "2021/08/05": {
        "datePretty": "Thursday, August 5, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Ezekiel 43:1\u201312",
                    "readQS": "Ezekiel+43:1-12",
                    "audioQS": "Ezek.43"
                },
                {
                    "pretty": "Mark 1:29\u2013end",
                    "readQS": "Mark+1:29-",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+57%3B+Ezekiel+43:1-12%3B+Mark+1:29-",
            "audioQS": "Ps.57,Ezek.43,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "1 Samuel 21:1\u201322:5",
                    "readQS": "1+Samuel+21:1-22:5",
                    "audioQS": "1Sam.21"
                },
                {
                    "pretty": "Acts 2:22\u201336",
                    "readQS": "Acts+2:22-36",
                    "audioQS": "Acts.2"
                }
            ],
            "readQS": "Psalm+62%3B+1+Samuel+21:1-22:5%3B+Acts+2:22-36",
            "audioQS": "Ps.62,1Sam.21,Acts.2"
        }
    },
    "2021/08/06": {
        "datePretty": "Friday, August 6, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Ezekiel 44:4\u201316",
                    "readQS": "Ezekiel+44:4-16",
                    "audioQS": "Ezek.44"
                },
                {
                    "pretty": "Mark 2:1\u201312",
                    "readQS": "Mark+2:1-12",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+51%3B+Ezekiel+44:4-16%3B+Mark+2:1-12",
            "audioQS": "Ps.51,Ezek.44,Mark.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "1 Samuel 22:6\u2013end",
                    "readQS": "1+Samuel+22:6-",
                    "audioQS": "1Sam.22"
                },
                {
                    "pretty": "Acts 2:37\u2013end",
                    "readQS": "Acts+2:37-",
                    "audioQS": "Acts.2"
                }
            ],
            "readQS": "Psalm+38%3B+1+Samuel+22:6-%3B+Acts+2:37-",
            "audioQS": "Ps.38,1Sam.22,Acts.2"
        }
    },
    "2021/08/07": {
        "datePretty": "Saturday, August 7, 2021",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Ezekiel 47:1\u201312",
                    "readQS": "Ezekiel+47:1-12",
                    "audioQS": "Ezek.47"
                },
                {
                    "pretty": "Mark 2:13\u201322",
                    "readQS": "Mark+2:13-22",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+68%3B+Ezekiel+47:1-12%3B+Mark+2:13-22",
            "audioQS": "Ps.68,Ezek.47,Mark.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "1 Samuel 23",
                    "readQS": "1+Samuel+23",
                    "audioQS": "1Sam.23"
                },
                {
                    "pretty": "Acts 3:1\u201310",
                    "readQS": "Acts+3:1-10",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+66%3B+1+Samuel+23%3B+Acts+3:1-10",
            "audioQS": "Ps.66,1Sam.23,Acts.3"
        }
    },
    "2021/08/08": {
        "datePretty": "Sunday, August 8, 2021",
        "calendar": "19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Song of Solomon 8:5\u20137",
                    "readQS": "Song+of+Solomon+8:5-7",
                    "audioQS": "Song.8"
                },
                {
                    "pretty": "2 Peter 3:8\u201313",
                    "readQS": "2+Peter+3:8-13",
                    "audioQS": "2Pet.3"
                }
            ],
            "readQS": "Psalm+90%3B+Song+of+Solomon+8:5-7%3B+2+Peter+3:8-13",
            "audioQS": "Ps.90,Song.8,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "Job 39:1\u201340:4",
                    "readQS": "Job+39:1-40:4",
                    "audioQS": "Job.39"
                },
                {
                    "pretty": "Hebrews 12:1\u201317",
                    "readQS": "Hebrews+12:1-17",
                    "audioQS": "Heb.12"
                }
            ],
            "readQS": "Psalm+91%3B+Job+39:1-40:4%3B+Hebrews+12:1-17",
            "audioQS": "Ps.91,Job.39,Heb.12"
        }
    },
    "2021/08/09": {
        "datePretty": "Monday, August 9, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Proverbs 1:1\u201319",
                    "readQS": "Proverbs+1:1-19",
                    "audioQS": "Prov.1"
                },
                {
                    "pretty": "Mark 2:23\u20133:6",
                    "readQS": "Mark+2:23-3:6",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+71%3B+Proverbs+1:1-19%3B+Mark+2:23-3:6",
            "audioQS": "Ps.71,Prov.1,Mark.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "1 Samuel 24",
                    "readQS": "1+Samuel+24",
                    "audioQS": "1Sam.24"
                },
                {
                    "pretty": "Acts 3:11\u2013end",
                    "readQS": "Acts+3:11-",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+72%3B+1+Samuel+24%3B+Acts+3:11-",
            "audioQS": "Ps.72,1Sam.24,Acts.3"
        }
    },
    "2021/08/10": {
        "datePretty": "Tuesday, August 10, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Proverbs 1:20\u2013end",
                    "readQS": "Proverbs+1:20-",
                    "audioQS": "Prov.1"
                },
                {
                    "pretty": "Mark 3:7\u201319a",
                    "readQS": "Mark+3:7-19a",
                    "audioQS": "Mark.3"
                }
            ],
            "readQS": "Psalm+73%3B+Proverbs+1:20-%3B+Mark+3:7-19a",
            "audioQS": "Ps.73,Prov.1,Mark.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "1 Samuel 26",
                    "readQS": "1+Samuel+26",
                    "audioQS": "1Sam.26"
                },
                {
                    "pretty": "Acts 4:1\u201312",
                    "readQS": "Acts+4:1-12",
                    "audioQS": "Acts.4"
                }
            ],
            "readQS": "Psalm+74%3B+1+Samuel+26%3B+Acts+4:1-12",
            "audioQS": "Ps.74,1Sam.26,Acts.4"
        }
    },
    "2021/08/11": {
        "datePretty": "Wednesday, August 11, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Proverbs 2",
                    "readQS": "Proverbs+2",
                    "audioQS": "Prov.2"
                },
                {
                    "pretty": "Mark 3:19b\u2013end",
                    "readQS": "Mark+3:19b-",
                    "audioQS": "Mark.3"
                }
            ],
            "readQS": "Psalm+77%3B+Proverbs+2%3B+Mark+3:19b-",
            "audioQS": "Ps.77,Prov.2,Mark.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:81\u2013104",
                    "readQS": "Psalm+119:81-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Samuel 28:3\u2013end",
                    "readQS": "1+Samuel+28:3-",
                    "audioQS": "1Sam.28"
                },
                {
                    "pretty": "Acts 4:13\u201331",
                    "readQS": "Acts+4:13-31",
                    "audioQS": "Acts.4"
                }
            ],
            "readQS": "Psalm+119:81-104%3B+1+Samuel+28:3-%3B+Acts+4:13-31",
            "audioQS": "Ps.119,1Sam.28,Acts.4"
        }
    },
    "2021/08/12": {
        "datePretty": "Thursday, August 12, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Proverbs 3:1\u201326",
                    "readQS": "Proverbs+3:1-26",
                    "audioQS": "Prov.3"
                },
                {
                    "pretty": "Mark 4:1\u201320",
                    "readQS": "Mark+4:1-20",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Proverbs+3:1-26%3B+Mark+4:1-20",
            "audioQS": "Ps.78,Prov.3,Mark.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78:40\u2013end",
                    "readQS": "Psalm+78:40-",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "1 Samuel 31",
                    "readQS": "1+Samuel+31",
                    "audioQS": "1Sam.31"
                },
                {
                    "pretty": "Acts 4:32\u20135:11",
                    "readQS": "Acts+4:32-5:11",
                    "audioQS": "Acts.4"
                }
            ],
            "readQS": "Psalm+78:40-%3B+1+Samuel+31%3B+Acts+4:32-5:11",
            "audioQS": "Ps.78,1Sam.31,Acts.4"
        }
    },
    "2021/08/13": {
        "datePretty": "Friday, August 13, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Proverbs 3:27\u20134:19",
                    "readQS": "Proverbs+3:27-4:19",
                    "audioQS": "Prov.3"
                },
                {
                    "pretty": "Mark 4:21\u201334",
                    "readQS": "Mark+4:21-34",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+55%3B+Proverbs+3:27-4:19%3B+Mark+4:21-34",
            "audioQS": "Ps.55,Prov.3,Mark.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "2 Samuel 1",
                    "readQS": "2+Samuel+1",
                    "audioQS": "2Sam.1"
                },
                {
                    "pretty": "Acts 5:12\u201326",
                    "readQS": "Acts+5:12-26",
                    "audioQS": "Acts.5"
                }
            ],
            "readQS": "Psalm+69%3B+2+Samuel+1%3B+Acts+5:12-26",
            "audioQS": "Ps.69,2Sam.1,Acts.5"
        }
    },
    "2021/08/14": {
        "datePretty": "Saturday, August 14, 2021",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Proverbs 6:1\u201319",
                    "readQS": "Proverbs+6:1-19",
                    "audioQS": "Prov.6"
                },
                {
                    "pretty": "Mark 4:35\u2013end",
                    "readQS": "Mark+4:35-",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+76%3B+Proverbs+6:1-19%3B+Mark+4:35-",
            "audioQS": "Ps.76,Prov.6,Mark.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "2 Samuel 2:1\u201311",
                    "readQS": "2+Samuel+2:1-11",
                    "audioQS": "2Sam.2"
                },
                {
                    "pretty": "Acts 5:27\u2013end",
                    "readQS": "Acts+5:27-",
                    "audioQS": "Acts.5"
                }
            ],
            "readQS": "Psalm+84%3B+2+Samuel+2:1-11%3B+Acts+5:27-",
            "audioQS": "Ps.84,2Sam.2,Acts.5"
        }
    },
    "2021/08/15": {
        "datePretty": "Sunday, August 15, 2021",
        "calendar": "20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106:1\u201310",
                    "readQS": "Psalm+106:1-10",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Jonah 1",
                    "readQS": "Jonah+1",
                    "audioQS": "Jonah.1"
                },
                {
                    "pretty": "2 Peter 3:14\u201318",
                    "readQS": "2+Peter+3:14-18",
                    "audioQS": "2Pet.3"
                }
            ],
            "readQS": "Psalm+106:1-10%3B+Jonah+1%3B+2+Peter+3:14-18",
            "audioQS": "Ps.106,Jonah.1,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 100",
                    "readQS": "Psalm+100",
                    "audioQS": "Ps.100"
                },
                {
                    "pretty": "Exodus 2:23\u20133:10",
                    "readQS": "Exodus+2:23-3:10",
                    "audioQS": "Exod.2"
                },
                {
                    "pretty": "Hebrews 13:1\u201315",
                    "readQS": "Hebrews+13:1-15",
                    "audioQS": "Heb.13"
                }
            ],
            "readQS": "Psalm+100%3B+Exodus+2:23-3:10%3B+Hebrews+13:1-15",
            "audioQS": "Ps.100,Exod.2,Heb.13"
        }
    },
    "2021/08/16": {
        "datePretty": "Monday, August 16, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Proverbs 8:1\u201321",
                    "readQS": "Proverbs+8:1-21",
                    "audioQS": "Prov.8"
                },
                {
                    "pretty": "Mark 5:1\u201320",
                    "readQS": "Mark+5:1-20",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+80%3B+Proverbs+8:1-21%3B+Mark+5:1-20",
            "audioQS": "Ps.80,Prov.8,Mark.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "2 Samuel 3:12\u2013end",
                    "readQS": "2+Samuel+3:12-",
                    "audioQS": "2Sam.3"
                },
                {
                    "pretty": "Acts 6",
                    "readQS": "Acts+6",
                    "audioQS": "Acts.6"
                }
            ],
            "readQS": "Psalm+85%3B+2+Samuel+3:12-%3B+Acts+6",
            "audioQS": "Ps.85,2Sam.3,Acts.6"
        }
    },
    "2021/08/17": {
        "datePretty": "Tuesday, August 17, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Proverbs 8:22\u2013end",
                    "readQS": "Proverbs+8:22-",
                    "audioQS": "Prov.8"
                },
                {
                    "pretty": "Mark 5:21\u201334",
                    "readQS": "Mark+5:21-34",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Proverbs+8:22-%3B+Mark+5:21-34",
            "audioQS": "Ps.89,Prov.8,Mark.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u2013end",
                    "readQS": "Psalm+89:19-",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "2 Samuel 5:1\u201312",
                    "readQS": "2+Samuel+5:1-12",
                    "audioQS": "2Sam.5"
                },
                {
                    "pretty": "Acts 7:1\u201316",
                    "readQS": "Acts+7:1-16",
                    "audioQS": "Acts.7"
                }
            ],
            "readQS": "Psalm+89:19-%3B+2+Samuel+5:1-12%3B+Acts+7:1-16",
            "audioQS": "Ps.89,2Sam.5,Acts.7"
        }
    },
    "2021/08/18": {
        "datePretty": "Wednesday, August 18, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Proverbs 9",
                    "readQS": "Proverbs+9",
                    "audioQS": "Prov.9"
                },
                {
                    "pretty": "Mark 5:35\u2013end",
                    "readQS": "Mark+5:35-",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+Proverbs+9%3B+Mark+5:35-",
            "audioQS": "Ps.119,Prov.9,Mark.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "2 Samuel 6:1\u201319",
                    "readQS": "2+Samuel+6:1-19",
                    "audioQS": "2Sam.6"
                },
                {
                    "pretty": "Acts 7:17\u201343",
                    "readQS": "Acts+7:17-43",
                    "audioQS": "Acts.7"
                }
            ],
            "readQS": "Psalm+91%3B+2+Samuel+6:1-19%3B+Acts+7:17-43",
            "audioQS": "Ps.91,2Sam.6,Acts.7"
        }
    },
    "2021/08/19": {
        "datePretty": "Thursday, August 19, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "Proverbs 10:1\u201312",
                    "readQS": "Proverbs+10:1-12",
                    "audioQS": "Prov.10"
                },
                {
                    "pretty": "Mark 6:1\u201313",
                    "readQS": "Mark+6:1-13",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+92%3B+Proverbs+10:1-12%3B+Mark+6:1-13",
            "audioQS": "Ps.92,Prov.10,Mark.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "2 Samuel 7:1\u201317",
                    "readQS": "2+Samuel+7:1-17",
                    "audioQS": "2Sam.7"
                },
                {
                    "pretty": "Acts 7:44\u201353",
                    "readQS": "Acts+7:44-53",
                    "audioQS": "Acts.7"
                }
            ],
            "readQS": "Psalm+94%3B+2+Samuel+7:1-17%3B+Acts+7:44-53",
            "audioQS": "Ps.94,2Sam.7,Acts.7"
        }
    },
    "2021/08/20": {
        "datePretty": "Friday, August 20, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Proverbs 11:1\u201312",
                    "readQS": "Proverbs+11:1-12",
                    "audioQS": "Prov.11"
                },
                {
                    "pretty": "Mark 6:14\u201329",
                    "readQS": "Mark+6:14-29",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+88%3B+Proverbs+11:1-12%3B+Mark+6:14-29",
            "audioQS": "Ps.88,Prov.11,Mark.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "2 Samuel 7:18\u2013end",
                    "readQS": "2+Samuel+7:18-",
                    "audioQS": "2Sam.7"
                },
                {
                    "pretty": "Acts 7:54\u20138:3",
                    "readQS": "Acts+7:54-8:3",
                    "audioQS": "Acts.7"
                }
            ],
            "readQS": "Psalm+102%3B+2+Samuel+7:18-%3B+Acts+7:54-8:3",
            "audioQS": "Ps.102,2Sam.7,Acts.7"
        }
    },
    "2021/08/21": {
        "datePretty": "Saturday, August 21, 2021",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Proverbs 12:10\u2013end",
                    "readQS": "Proverbs+12:10-",
                    "audioQS": "Prov.12"
                },
                {
                    "pretty": "Mark 6:30\u201344",
                    "readQS": "Mark+6:30-44",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+97%3B+Proverbs+12:10-%3B+Mark+6:30-44",
            "audioQS": "Ps.97,Prov.12,Mark.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104",
                    "readQS": "Psalm+104",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "2 Samuel 9",
                    "readQS": "2+Samuel+9",
                    "audioQS": "2Sam.9"
                },
                {
                    "pretty": "Acts 8:4\u201325",
                    "readQS": "Acts+8:4-25",
                    "audioQS": "Acts.8"
                }
            ],
            "readQS": "Psalm+104%3B+2+Samuel+9%3B+Acts+8:4-25",
            "audioQS": "Ps.104,2Sam.9,Acts.8"
        }
    },
    "2021/08/22": {
        "datePretty": "Sunday, August 22, 2021",
        "calendar": "21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Jonah 2",
                    "readQS": "Jonah+2",
                    "audioQS": "Jonah.2"
                },
                {
                    "pretty": "Revelation 1",
                    "readQS": "Revelation+1",
                    "audioQS": "Rev.1"
                }
            ],
            "readQS": "Psalm+115%3B+Jonah+2%3B+Revelation+1",
            "audioQS": "Ps.115,Jonah.2,Rev.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "Exodus 4:27\u20135:1",
                    "readQS": "Exodus+4:27-5:1",
                    "audioQS": "Exod.4"
                },
                {
                    "pretty": "Hebrews 13:16\u201321",
                    "readQS": "Hebrews+13:16-21",
                    "audioQS": "Heb.13"
                }
            ],
            "readQS": "Psalm+116%3B+Exodus+4:27-5:1%3B+Hebrews+13:16-21",
            "audioQS": "Ps.116,Exod.4,Heb.13"
        }
    },
    "2021/08/23": {
        "datePretty": "Monday, August 23, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Proverbs 14:31\u201315:17",
                    "readQS": "Proverbs+14:31-15:17",
                    "audioQS": "Prov.14"
                },
                {
                    "pretty": "Mark 6:45\u2013end",
                    "readQS": "Mark+6:45-",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+98%3B+Proverbs+14:31-15:17%3B+Mark+6:45-",
            "audioQS": "Ps.98,Prov.14,Mark.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "2 Samuel 11",
                    "readQS": "2+Samuel+11",
                    "audioQS": "2Sam.11"
                },
                {
                    "pretty": "Acts 8:26\u2013end",
                    "readQS": "Acts+8:26-",
                    "audioQS": "Acts.8"
                }
            ],
            "readQS": "Psalm+105%3B+2+Samuel+11%3B+Acts+8:26-",
            "audioQS": "Ps.105,2Sam.11,Acts.8"
        }
    },
    "2021/08/24": {
        "datePretty": "Tuesday, August 24, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Proverbs 15:18\u2013end",
                    "readQS": "Proverbs+15:18-",
                    "audioQS": "Prov.15"
                },
                {
                    "pretty": "Mark 7:1\u201313",
                    "readQS": "Mark+7:1-13",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+106%3B+Proverbs+15:18-%3B+Mark+7:1-13",
            "audioQS": "Ps.106,Prov.15,Mark.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 107",
                    "readQS": "Psalm+107",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "2 Samuel 12:1\u201325",
                    "readQS": "2+Samuel+12:1-25",
                    "audioQS": "2Sam.12"
                },
                {
                    "pretty": "Acts 9:1\u201319a",
                    "readQS": "Acts+9:1-19a",
                    "audioQS": "Acts.9"
                }
            ],
            "readQS": "Psalm+107%3B+2+Samuel+12:1-25%3B+Acts+9:1-19a",
            "audioQS": "Ps.107,2Sam.12,Acts.9"
        }
    },
    "2021/08/25": {
        "datePretty": "Wednesday, August 25, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Proverbs 18:10\u2013end",
                    "readQS": "Proverbs+18:10-",
                    "audioQS": "Prov.18"
                },
                {
                    "pretty": "Mark 7:14\u201323",
                    "readQS": "Mark+7:14-23",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+111%3B+Proverbs+18:10-%3B+Mark+7:14-23",
            "audioQS": "Ps.111,Prov.18,Mark.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:129\u2013152",
                    "readQS": "Psalm+119:129-152",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Samuel 15:1\u201312",
                    "readQS": "2+Samuel+15:1-12",
                    "audioQS": "2Sam.15"
                },
                {
                    "pretty": "Acts 9:19b\u201331",
                    "readQS": "Acts+9:19b-31",
                    "audioQS": "Acts.9"
                }
            ],
            "readQS": "Psalm+119:129-152%3B+2+Samuel+15:1-12%3B+Acts+9:19b-31",
            "audioQS": "Ps.119,2Sam.15,Acts.9"
        }
    },
    "2021/08/26": {
        "datePretty": "Thursday, August 26, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Proverbs 20:1\u201322",
                    "readQS": "Proverbs+20:1-22",
                    "audioQS": "Prov.20"
                },
                {
                    "pretty": "Mark 7:24\u201330",
                    "readQS": "Mark+7:24-30",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+115%3B+Proverbs+20:1-22%3B+Mark+7:24-30",
            "audioQS": "Ps.115,Prov.20,Mark.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "2 Samuel 15:13\u2013end",
                    "readQS": "2+Samuel+15:13-",
                    "audioQS": "2Sam.15"
                },
                {
                    "pretty": "Acts 9:32\u2013end",
                    "readQS": "Acts+9:32-",
                    "audioQS": "Acts.9"
                }
            ],
            "readQS": "Psalm+116%3B+2+Samuel+15:13-%3B+Acts+9:32-",
            "audioQS": "Ps.116,2Sam.15,Acts.9"
        }
    },
    "2021/08/27": {
        "datePretty": "Friday, August 27, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Proverbs 22:1\u201316",
                    "readQS": "Proverbs+22:1-16",
                    "audioQS": "Prov.22"
                },
                {
                    "pretty": "Mark 7:31\u2013end",
                    "readQS": "Mark+7:31-",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+139%3B+Proverbs+22:1-16%3B+Mark+7:31-",
            "audioQS": "Ps.139,Prov.22,Mark.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "2 Samuel 16:1\u201314",
                    "readQS": "2+Samuel+16:1-14",
                    "audioQS": "2Sam.16"
                },
                {
                    "pretty": "Acts 10:1\u201316",
                    "readQS": "Acts+10:1-16",
                    "audioQS": "Acts.10"
                }
            ],
            "readQS": "Psalm+130%3B+2+Samuel+16:1-14%3B+Acts+10:1-16",
            "audioQS": "Ps.130,2Sam.16,Acts.10"
        }
    },
    "2021/08/28": {
        "datePretty": "Saturday, August 28, 2021",
        "calendar": "Week of 21th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Proverbs 24:23\u2013end",
                    "readQS": "Proverbs+24:23-",
                    "audioQS": "Prov.24"
                },
                {
                    "pretty": "Mark 8:1\u201310",
                    "readQS": "Mark+8:1-10",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+121%3B+Proverbs+24:23-%3B+Mark+8:1-10",
            "audioQS": "Ps.121,Prov.24,Mark.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "2 Samuel 17:1\u201323",
                    "readQS": "2+Samuel+17:1-23",
                    "audioQS": "2Sam.17"
                },
                {
                    "pretty": "Acts 10:17\u201333",
                    "readQS": "Acts+10:17-33",
                    "audioQS": "Acts.10"
                }
            ],
            "readQS": "Psalm+118%3B+2+Samuel+17:1-23%3B+Acts+10:17-33",
            "audioQS": "Ps.118,2Sam.17,Acts.10"
        }
    },
    "2021/08/29": {
        "datePretty": "Sunday, August 29, 2021",
        "calendar": "22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:17\u201340",
                    "readQS": "Psalm+119:17-40",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jonah 3:1\u20139",
                    "readQS": "Jonah+3:1-9",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "Revelation 3:14\u201322",
                    "readQS": "Revelation+3:14-22",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+119:17-40%3B+Jonah+3:1-9%3B+Revelation+3:14-22",
            "audioQS": "Ps.119,Jonah.3,Rev.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201316",
                    "readQS": "Psalm+119:1-16",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Exodus 12:21\u201327",
                    "readQS": "Exodus+12:21-27",
                    "audioQS": "Exod.12"
                },
                {
                    "pretty": "Matthew 4:23\u20135:20",
                    "readQS": "Matthew+4:23-5:20",
                    "audioQS": "Matt.4"
                }
            ],
            "readQS": "Psalm+119:1-16%3B+Exodus+12:21-27%3B+Matthew+4:23-5:20",
            "audioQS": "Ps.119,Exod.12,Matt.4"
        }
    },
    "2021/08/30": {
        "datePretty": "Monday, August 30, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Proverbs 25:1\u201314",
                    "readQS": "Proverbs+25:1-14",
                    "audioQS": "Prov.25"
                },
                {
                    "pretty": "Mark 8:11\u201321",
                    "readQS": "Mark+8:11-21",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+126%3B+Proverbs+25:1-14%3B+Mark+8:11-21",
            "audioQS": "Ps.126,Prov.25,Mark.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "2 Samuel 18:1\u201318",
                    "readQS": "2+Samuel+18:1-18",
                    "audioQS": "2Sam.18"
                },
                {
                    "pretty": "Acts 10:34\u2013end",
                    "readQS": "Acts+10:34-",
                    "audioQS": "Acts.10"
                }
            ],
            "readQS": "Psalm+127%3B+2+Samuel+18:1-18%3B+Acts+10:34-",
            "audioQS": "Ps.127,2Sam.18,Acts.10"
        }
    },
    "2021/08/31": {
        "datePretty": "Tuesday, August 31, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Proverbs 25:15\u2013end",
                    "readQS": "Proverbs+25:15-",
                    "audioQS": "Prov.25"
                },
                {
                    "pretty": "Mark 8:22\u201326",
                    "readQS": "Mark+8:22-26",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+132%3B+Proverbs+25:15-%3B+Mark+8:22-26",
            "audioQS": "Ps.132,Prov.25,Mark.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "2 Samuel 18:19\u201319:8a",
                    "readQS": "2+Samuel+18:19-19:8a",
                    "audioQS": "2Sam.18"
                },
                {
                    "pretty": "Acts 11:1\u201318",
                    "readQS": "Acts+11:1-18",
                    "audioQS": "Acts.11"
                }
            ],
            "readQS": "Psalm+135%3B+2+Samuel+18:19-19:8a%3B+Acts+11:1-18",
            "audioQS": "Ps.135,2Sam.18,Acts.11"
        }
    },
    "2021/09/01": {
        "datePretty": "Wednesday, September 1, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Proverbs 26:12\u2013end",
                    "readQS": "Proverbs+26:12-",
                    "audioQS": "Prov.26"
                },
                {
                    "pretty": "Mark 8:27\u20139:1",
                    "readQS": "Mark+8:27-9:1",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Proverbs+26:12-%3B+Mark+8:27-9:1",
            "audioQS": "Ps.119,Prov.26,Mark.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "2 Samuel 19:8b\u201323",
                    "readQS": "2+Samuel+19:8b-23",
                    "audioQS": "2Sam.19"
                },
                {
                    "pretty": "Acts 11:19\u2013end",
                    "readQS": "Acts+11:19-",
                    "audioQS": "Acts.11"
                }
            ],
            "readQS": "Psalm+136%3B+2+Samuel+19:8b-23%3B+Acts+11:19-",
            "audioQS": "Ps.136,2Sam.19,Acts.11"
        }
    },
    "2021/09/02": {
        "datePretty": "Thursday, September 2, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Proverbs 27:1\u201322",
                    "readQS": "Proverbs+27:1-22",
                    "audioQS": "Prov.27"
                },
                {
                    "pretty": "Mark 9:2\u201313",
                    "readQS": "Mark+9:2-13",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+143%3B+Proverbs+27:1-22%3B+Mark+9:2-13",
            "audioQS": "Ps.143,Prov.27,Mark.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "2 Samuel 19:24\u2013end",
                    "readQS": "2+Samuel+19:24-",
                    "audioQS": "2Sam.19"
                },
                {
                    "pretty": "Acts 12:1\u201317",
                    "readQS": "Acts+12:1-17",
                    "audioQS": "Acts.12"
                }
            ],
            "readQS": "Psalm+138%3B+2+Samuel+19:24-%3B+Acts+12:1-17",
            "audioQS": "Ps.138,2Sam.19,Acts.12"
        }
    },
    "2021/09/03": {
        "datePretty": "Friday, September 3, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Proverbs 30:1\u20139,30:24\u201331",
                    "readQS": "Proverbs+30:1-9,30:24-31",
                    "audioQS": "Prov.30"
                },
                {
                    "pretty": "Mark 9:14\u201329",
                    "readQS": "Mark+9:14-29",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+144%3B+Proverbs+30:1-9,30:24-31%3B+Mark+9:14-29",
            "audioQS": "Ps.144,Prov.30,Mark.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "2 Samuel 23:1\u20137",
                    "readQS": "2+Samuel+23:1-7",
                    "audioQS": "2Sam.23"
                },
                {
                    "pretty": "Acts 12:18\u2013end",
                    "readQS": "Acts+12:18-",
                    "audioQS": "Acts.12"
                }
            ],
            "readQS": "Psalm+145%3B+2+Samuel+23:1-7%3B+Acts+12:18-",
            "audioQS": "Ps.145,2Sam.23,Acts.12"
        }
    },
    "2021/09/04": {
        "datePretty": "Saturday, September 4, 2021",
        "calendar": "Week of 22th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Proverbs 31:10\u2013end",
                    "readQS": "Proverbs+31:10-",
                    "audioQS": "Prov.31"
                },
                {
                    "pretty": "Mark 9:30\u201337",
                    "readQS": "Mark+9:30-37",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+147%3B+Proverbs+31:10-%3B+Mark+9:30-37",
            "audioQS": "Ps.147,Prov.31,Mark.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "2 Samuel 24",
                    "readQS": "2+Samuel+24",
                    "audioQS": "2Sam.24"
                },
                {
                    "pretty": "Acts 13:1\u201312",
                    "readQS": "Acts+13:1-12",
                    "audioQS": "Acts.13"
                }
            ],
            "readQS": "Psalm+148%3B+2+Samuel+24%3B+Acts+13:1-12",
            "audioQS": "Ps.148,2Sam.24,Acts.13"
        }
    },
    "2021/09/05": {
        "datePretty": "Sunday, September 5, 2021",
        "calendar": "23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201372",
                    "readQS": "Psalm+119:57-72",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jonah 3:10\u20134:11",
                    "readQS": "Jonah+3:10-4:11",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "Revelation 8:1\u20135",
                    "readQS": "Revelation+8:1-5",
                    "audioQS": "Rev.8"
                }
            ],
            "readQS": "Psalm+119:57-72%3B+Jonah+3:10-4:11%3B+Revelation+8:1-5",
            "audioQS": "Ps.119,Jonah.3,Rev.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:41\u201356",
                    "readQS": "Psalm+119:41-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Exodus 14:5\u201331",
                    "readQS": "Exodus+14:5-31",
                    "audioQS": "Exod.14"
                },
                {
                    "pretty": "Matthew 6:1\u201318",
                    "readQS": "Matthew+6:1-18",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+119:41-56%3B+Exodus+14:5-31%3B+Matthew+6:1-18",
            "audioQS": "Ps.119,Exod.14,Matt.6"
        }
    },
    "2021/09/06": {
        "datePretty": "Monday, September 6, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "1 Chronicles 10:1\u201311:9",
                    "readQS": "1+Chronicles+10:1-11:9",
                    "audioQS": "1Chr.10"
                },
                {
                    "pretty": "Mark 9:38\u2013end",
                    "readQS": "Mark+9:38-",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+1%3B+1+Chronicles+10:1-11:9%3B+Mark+9:38-",
            "audioQS": "Ps.1,1Chr.10,Mark.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "1 Kings 1:5\u201331",
                    "readQS": "1+Kings+1:5-31",
                    "audioQS": "1Kgs.1"
                },
                {
                    "pretty": "Acts 13:13\u201343",
                    "readQS": "Acts+13:13-43",
                    "audioQS": "Acts.13"
                }
            ],
            "readQS": "Psalm+4%3B+1+Kings+1:5-31%3B+Acts+13:13-43",
            "audioQS": "Ps.4,1Kgs.1,Acts.13"
        }
    },
    "2021/09/07": {
        "datePretty": "Tuesday, September 7, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "1 Chronicles 13",
                    "readQS": "1+Chronicles+13",
                    "audioQS": "1Chr.13"
                },
                {
                    "pretty": "Mark 10:1\u201316",
                    "readQS": "Mark+10:1-16",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+5%3B+1+Chronicles+13%3B+Mark+10:1-16",
            "audioQS": "Ps.5,1Chr.13,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "1 Kings 1:32\u20132:4",
                    "readQS": "1+Kings+1:32-2:4",
                    "audioQS": "1Kgs.1"
                },
                {
                    "pretty": "1 Kings 2:10\u201312",
                    "readQS": "1+Kings+2:10-12",
                    "audioQS": "1Kgs.2"
                },
                {
                    "pretty": "Acts 13:44\u201314:7",
                    "readQS": "Acts+13:44-14:7",
                    "audioQS": "Acts.13"
                }
            ],
            "readQS": "Psalm+9%3B+1+Kings+1:32-2:4%3B+1+Kings+2:10-12%3B+Acts+13:44-14:7",
            "audioQS": "Ps.9,1Kgs.1,1Kgs.2,Acts.13"
        }
    },
    "2021/09/08": {
        "datePretty": "Wednesday, September 8, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Chronicles 15:1\u201316:3",
                    "readQS": "1+Chronicles+15:1-16:3",
                    "audioQS": "1Chr.15"
                },
                {
                    "pretty": "Mark 10:17\u201331",
                    "readQS": "Mark+10:17-31",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+1+Chronicles+15:1-16:3%3B+Mark+10:17-31",
            "audioQS": "Ps.119,1Chr.15,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "1 Kings 3",
                    "readQS": "1+Kings+3",
                    "audioQS": "1Kgs.3"
                },
                {
                    "pretty": "Acts 14:8\u2013end",
                    "readQS": "Acts+14:8-",
                    "audioQS": "Acts.14"
                }
            ],
            "readQS": "Psalm+11%3B+1+Kings+3%3B+Acts+14:8-",
            "audioQS": "Ps.11,1Kgs.3,Acts.14"
        }
    },
    "2021/09/09": {
        "datePretty": "Thursday, September 9, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "1 Chronicles 17",
                    "readQS": "1+Chronicles+17",
                    "audioQS": "1Chr.17"
                },
                {
                    "pretty": "Mark 10:32\u201334",
                    "readQS": "Mark+10:32-34",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+15%3B+1+Chronicles+17%3B+Mark+10:32-34",
            "audioQS": "Ps.15,1Chr.17,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 18",
                    "readQS": "Psalm+18",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "1 Kings 4:29\u20135:12",
                    "readQS": "1+Kings+4:29-5:12",
                    "audioQS": "1Kgs.4"
                },
                {
                    "pretty": "Acts 15:1\u201321",
                    "readQS": "Acts+15:1-21",
                    "audioQS": "Acts.15"
                }
            ],
            "readQS": "Psalm+18%3B+1+Kings+4:29-5:12%3B+Acts+15:1-21",
            "audioQS": "Ps.18,1Kgs.4,Acts.15"
        }
    },
    "2021/09/10": {
        "datePretty": "Friday, September 10, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "1 Chronicles 21:1\u201322:1",
                    "readQS": "1+Chronicles+21:1-22:1",
                    "audioQS": "1Chr.21"
                },
                {
                    "pretty": "Mark 10:35\u201345",
                    "readQS": "Mark+10:35-45",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+19%3B+1+Chronicles+21:1-22:1%3B+Mark+10:35-45",
            "audioQS": "Ps.19,1Chr.21,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "1 Kings 6:1,6:11\u201328",
                    "readQS": "1+Kings+6:1,6:11-28",
                    "audioQS": "1Kgs.6"
                },
                {
                    "pretty": "Acts 15:22\u201335",
                    "readQS": "Acts+15:22-35",
                    "audioQS": "Acts.15"
                }
            ],
            "readQS": "Psalm+22%3B+1+Kings+6:1,6:11-28%3B+Acts+15:22-35",
            "audioQS": "Ps.22,1Kgs.6,Acts.15"
        }
    },
    "2021/09/11": {
        "datePretty": "Saturday, September 11, 2021",
        "calendar": "Week of 23th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "1 Chronicles 22:2\u2013end",
                    "readQS": "1+Chronicles+22:2-",
                    "audioQS": "1Chr.22"
                },
                {
                    "pretty": "Mark 10:46\u2013end",
                    "readQS": "Mark+10:46-",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+23%3B+1+Chronicles+22:2-%3B+Mark+10:46-",
            "audioQS": "Ps.23,1Chr.22,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "1 Kings 8:1\u201330",
                    "readQS": "1+Kings+8:1-30",
                    "audioQS": "1Kgs.8"
                },
                {
                    "pretty": "Acts 15:36\u201316:5",
                    "readQS": "Acts+15:36-16:5",
                    "audioQS": "Acts.15"
                }
            ],
            "readQS": "Psalm+24%3B+1+Kings+8:1-30%3B+Acts+15:36-16:5",
            "audioQS": "Ps.24,1Kgs.8,Acts.15"
        }
    },
    "2021/09/12": {
        "datePretty": "Sunday, September 12, 2021",
        "calendar": "24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013120",
                    "readQS": "Psalm+119:105-120",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Isaiah 44:24\u201345:8",
                    "readQS": "Isaiah+44:24-45:8",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 12:1\u201312",
                    "readQS": "Revelation+12:1-12",
                    "audioQS": "Rev.12"
                }
            ],
            "readQS": "Psalm+119:105-120%3B+Isaiah+44:24-45:8%3B+Revelation+12:1-12",
            "audioQS": "Ps.119,Isa.44,Rev.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:73\u201388",
                    "readQS": "Psalm+119:73-88",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Exodus 18:13\u201326",
                    "readQS": "Exodus+18:13-26",
                    "audioQS": "Exod.18"
                },
                {
                    "pretty": "Matthew 7:1\u201314",
                    "readQS": "Matthew+7:1-14",
                    "audioQS": "Matt.7"
                }
            ],
            "readQS": "Psalm+119:73-88%3B+Exodus+18:13-26%3B+Matthew+7:1-14",
            "audioQS": "Ps.119,Exod.18,Matt.7"
        }
    },
    "2021/09/13": {
        "datePretty": "Monday, September 13, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "1 Chronicles 28:1\u201310",
                    "readQS": "1+Chronicles+28:1-10",
                    "audioQS": "1Chr.28"
                },
                {
                    "pretty": "Mark 11:1\u201311",
                    "readQS": "Mark+11:1-11",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+30%3B+1+Chronicles+28:1-10%3B+Mark+11:1-11",
            "audioQS": "Ps.30,1Chr.28,Mark.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "1 Kings 8:31\u201362",
                    "readQS": "1+Kings+8:31-62",
                    "audioQS": "1Kgs.8"
                },
                {
                    "pretty": "Acts 16:6\u201324",
                    "readQS": "Acts+16:6-24",
                    "audioQS": "Acts.16"
                }
            ],
            "readQS": "Psalm+28%3B+1+Kings+8:31-62%3B+Acts+16:6-24",
            "audioQS": "Ps.28,1Kgs.8,Acts.16"
        }
    },
    "2021/09/14": {
        "datePretty": "Tuesday, September 14, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "1 Chronicles 28:11\u2013end",
                    "readQS": "1+Chronicles+28:11-",
                    "audioQS": "1Chr.28"
                },
                {
                    "pretty": "Mark 11:12\u201326",
                    "readQS": "Mark+11:12-26",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+36%3B+1+Chronicles+28:11-%3B+Mark+11:12-26",
            "audioQS": "Ps.36,1Chr.28,Mark.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "1 Kings 8:63\u20139:9",
                    "readQS": "1+Kings+8:63-9:9",
                    "audioQS": "1Kgs.8"
                },
                {
                    "pretty": "Acts 16:25\u2013end",
                    "readQS": "Acts+16:25-",
                    "audioQS": "Acts.16"
                }
            ],
            "readQS": "Psalm+33%3B+1+Kings+8:63-9:9%3B+Acts+16:25-",
            "audioQS": "Ps.33,1Kgs.8,Acts.16"
        }
    },
    "2021/09/15": {
        "datePretty": "Wednesday, September 15, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "1 Chronicles 29:1\u20139",
                    "readQS": "1+Chronicles+29:1-9",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "Mark 11:27\u2013end",
                    "readQS": "Mark+11:27-",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+34%3B+1+Chronicles+29:1-9%3B+Mark+11:27-",
            "audioQS": "Ps.34,1Chr.29,Mark.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Kings 10:1\u201325",
                    "readQS": "1+Kings+10:1-25",
                    "audioQS": "1Kgs.10"
                },
                {
                    "pretty": "Acts 17:1\u201315",
                    "readQS": "Acts+17:1-15",
                    "audioQS": "Acts.17"
                }
            ],
            "readQS": "Psalm+119:33-56%3B+1+Kings+10:1-25%3B+Acts+17:1-15",
            "audioQS": "Ps.119,1Kgs.10,Acts.17"
        }
    },
    "2021/09/16": {
        "datePretty": "Thursday, September 16, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "1 Chronicles 29:10\u201320",
                    "readQS": "1+Chronicles+29:10-20",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "Mark 12:1\u201312",
                    "readQS": "Mark+12:1-12",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+37%3B+1+Chronicles+29:10-20%3B+Mark+12:1-12",
            "audioQS": "Ps.37,1Chr.29,Mark.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "1 Kings 11:1\u201313",
                    "readQS": "1+Kings+11:1-13",
                    "audioQS": "1Kgs.11"
                },
                {
                    "pretty": "Acts 17:16\u2013end",
                    "readQS": "Acts+17:16-",
                    "audioQS": "Acts.17"
                }
            ],
            "readQS": "Psalm+40%3B+1+Kings+11:1-13%3B+Acts+17:16-",
            "audioQS": "Ps.40,1Kgs.11,Acts.17"
        }
    },
    "2021/09/17": {
        "datePretty": "Friday, September 17, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "1 Chronicles 29:21\u2013end",
                    "readQS": "1+Chronicles+29:21-",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "Mark 12:13\u201317",
                    "readQS": "Mark+12:13-17",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+31%3B+1+Chronicles+29:21-%3B+Mark+12:13-17",
            "audioQS": "Ps.31,1Chr.29,Mark.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "1 Kings 11:26\u2013end",
                    "readQS": "1+Kings+11:26-",
                    "audioQS": "1Kgs.11"
                },
                {
                    "pretty": "Acts 18:1\u201321",
                    "readQS": "Acts+18:1-21",
                    "audioQS": "Acts.18"
                }
            ],
            "readQS": "Psalm+35%3B+1+Kings+11:26-%3B+Acts+18:1-21",
            "audioQS": "Ps.35,1Kgs.11,Acts.18"
        }
    },
    "2021/09/18": {
        "datePretty": "Saturday, September 18, 2021",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "2 Chronicles 1:1\u201313",
                    "readQS": "2+Chronicles+1:1-13",
                    "audioQS": "2Chr.1"
                },
                {
                    "pretty": "Mark 12:18\u201327",
                    "readQS": "Mark+12:18-27",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+42%3B+2+Chronicles+1:1-13%3B+Mark+12:18-27",
            "audioQS": "Ps.42,2Chr.1,Mark.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "1 Kings 12:1\u201324",
                    "readQS": "1+Kings+12:1-24",
                    "audioQS": "1Kgs.12"
                },
                {
                    "pretty": "Acts 18:22\u201319:7",
                    "readQS": "Acts+18:22-19:7",
                    "audioQS": "Acts.18"
                }
            ],
            "readQS": "Psalm+46%3B+1+Kings+12:1-24%3B+Acts+18:22-19:7",
            "audioQS": "Ps.46,1Kgs.12,Acts.18"
        }
    },
    "2021/09/19": {
        "datePretty": "Sunday, September 19, 2021",
        "calendar": "25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013176",
                    "readQS": "Psalm+119:153-176",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Isaiah 45:9\u201322",
                    "readQS": "Isaiah+45:9-22",
                    "audioQS": "Isa.45"
                },
                {
                    "pretty": "Revelation 14:1\u20135",
                    "readQS": "Revelation+14:1-5",
                    "audioQS": "Rev.14"
                }
            ],
            "readQS": "Psalm+119:153-176%3B+Isaiah+45:9-22%3B+Revelation+14:1-5",
            "audioQS": "Ps.119,Isa.45,Rev.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:137\u2013152",
                    "readQS": "Psalm+119:137-152",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Exodus 19:10\u201325",
                    "readQS": "Exodus+19:10-25",
                    "audioQS": "Exod.19"
                },
                {
                    "pretty": "Matthew 8:23\u201334",
                    "readQS": "Matthew+8:23-34",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+119:137-152%3B+Exodus+19:10-25%3B+Matthew+8:23-34",
            "audioQS": "Ps.119,Exod.19,Matt.8"
        }
    },
    "2021/09/20": {
        "datePretty": "Monday, September 20, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "2 Chronicles 2:1\u201316",
                    "readQS": "2+Chronicles+2:1-16",
                    "audioQS": "2Chr.2"
                },
                {
                    "pretty": "Mark 12:28\u201334",
                    "readQS": "Mark+12:28-34",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+44%3B+2+Chronicles+2:1-16%3B+Mark+12:28-34",
            "audioQS": "Ps.44,2Chr.2,Mark.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "1 Kings 12:25\u201313:10",
                    "readQS": "1+Kings+12:25-13:10",
                    "audioQS": "1Kgs.12"
                },
                {
                    "pretty": "Acts 19:8\u201320",
                    "readQS": "Acts+19:8-20",
                    "audioQS": "Acts.19"
                }
            ],
            "readQS": "Psalm+47%3B+1+Kings+12:25-13:10%3B+Acts+19:8-20",
            "audioQS": "Ps.47,1Kgs.12,Acts.19"
        }
    },
    "2021/09/21": {
        "datePretty": "Tuesday, September 21, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "2 Chronicles 3",
                    "readQS": "2+Chronicles+3",
                    "audioQS": "2Chr.3"
                },
                {
                    "pretty": "Mark 12:35\u2013end",
                    "readQS": "Mark+12:35-",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+48%3B+2+Chronicles+3%3B+Mark+12:35-",
            "audioQS": "Ps.48,2Chr.3,Mark.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "1 Kings 13:11\u2013end",
                    "readQS": "1+Kings+13:11-",
                    "audioQS": "1Kgs.13"
                },
                {
                    "pretty": "Acts 19:21\u2013end",
                    "readQS": "Acts+19:21-",
                    "audioQS": "Acts.19"
                }
            ],
            "readQS": "Psalm+50%3B+1+Kings+13:11-%3B+Acts+19:21-",
            "audioQS": "Ps.50,1Kgs.13,Acts.19"
        }
    },
    "2021/09/22": {
        "datePretty": "Wednesday, September 22, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Chronicles 5",
                    "readQS": "2+Chronicles+5",
                    "audioQS": "2Chr.5"
                },
                {
                    "pretty": "Mark 13:1\u201313",
                    "readQS": "Mark+13:1-13",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+2+Chronicles+5%3B+Mark+13:1-13",
            "audioQS": "Ps.119,2Chr.5,Mark.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "1 Kings 17",
                    "readQS": "1+Kings+17",
                    "audioQS": "1Kgs.17"
                },
                {
                    "pretty": "Acts 20:1\u201316",
                    "readQS": "Acts+20:1-16",
                    "audioQS": "Acts.20"
                }
            ],
            "readQS": "Psalm+59%3B+1+Kings+17%3B+Acts+20:1-16",
            "audioQS": "Ps.59,1Kgs.17,Acts.20"
        }
    },
    "2021/09/23": {
        "datePretty": "Thursday, September 23, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "2 Chronicles 6:1\u201321",
                    "readQS": "2+Chronicles+6:1-21",
                    "audioQS": "2Chr.6"
                },
                {
                    "pretty": "Mark 13:14\u201323",
                    "readQS": "Mark+13:14-23",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+57%3B+2+Chronicles+6:1-21%3B+Mark+13:14-23",
            "audioQS": "Ps.57,2Chr.6,Mark.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "1 Kings 18:1\u201320",
                    "readQS": "1+Kings+18:1-20",
                    "audioQS": "1Kgs.18"
                },
                {
                    "pretty": "Acts 20:17\u2013end",
                    "readQS": "Acts+20:17-",
                    "audioQS": "Acts.20"
                }
            ],
            "readQS": "Psalm+62%3B+1+Kings+18:1-20%3B+Acts+20:17-",
            "audioQS": "Ps.62,1Kgs.18,Acts.20"
        }
    },
    "2021/09/24": {
        "datePretty": "Friday, September 24, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "2 Chronicles 6:22\u2013end",
                    "readQS": "2+Chronicles+6:22-",
                    "audioQS": "2Chr.6"
                },
                {
                    "pretty": "Mark 13:24\u201331",
                    "readQS": "Mark+13:24-31",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+51%3B+2+Chronicles+6:22-%3B+Mark+13:24-31",
            "audioQS": "Ps.51,2Chr.6,Mark.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "1 Kings 18:21\u2013end",
                    "readQS": "1+Kings+18:21-",
                    "audioQS": "1Kgs.18"
                },
                {
                    "pretty": "Acts 21:1\u201316",
                    "readQS": "Acts+21:1-16",
                    "audioQS": "Acts.21"
                }
            ],
            "readQS": "Psalm+38%3B+1+Kings+18:21-%3B+Acts+21:1-16",
            "audioQS": "Ps.38,1Kgs.18,Acts.21"
        }
    },
    "2021/09/25": {
        "datePretty": "Saturday, September 25, 2021",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "2 Chronicles 7",
                    "readQS": "2+Chronicles+7",
                    "audioQS": "2Chr.7"
                },
                {
                    "pretty": "Mark 13:32\u2013end",
                    "readQS": "Mark+13:32-",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+68%3B+2+Chronicles+7%3B+Mark+13:32-",
            "audioQS": "Ps.68,2Chr.7,Mark.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "1 Kings 19",
                    "readQS": "1+Kings+19",
                    "audioQS": "1Kgs.19"
                },
                {
                    "pretty": "Acts 21:17\u201336",
                    "readQS": "Acts+21:17-36",
                    "audioQS": "Acts.21"
                }
            ],
            "readQS": "Psalm+66%3B+1+Kings+19%3B+Acts+21:17-36",
            "audioQS": "Ps.66,1Kgs.19,Acts.21"
        }
    },
    "2021/09/26": {
        "datePretty": "Sunday, September 26, 2021",
        "calendar": "26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 122",
                    "readQS": "Psalm+122",
                    "audioQS": "Ps.122"
                },
                {
                    "pretty": "Isaiah 48:12\u201322",
                    "readQS": "Isaiah+48:12-22",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "Luke 11:37\u201354",
                    "readQS": "Luke+11:37-54",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+122%3B+Isaiah+48:12-22%3B+Luke+11:37-54",
            "audioQS": "Ps.122,Isa.48,Luke.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 120,121",
                    "readQS": "Psalm+120,121",
                    "audioQS": "Ps.120,121"
                },
                {
                    "pretty": "Exodus 24",
                    "readQS": "Exodus+24",
                    "audioQS": "Exod.24"
                },
                {
                    "pretty": "Matthew 9:1\u20138",
                    "readQS": "Matthew+9:1-8",
                    "audioQS": "Matt.9"
                }
            ],
            "readQS": "Psalm+120,121%3B+Exodus+24%3B+Matthew+9:1-8",
            "audioQS": "Ps.120,121,Exod.24,Matt.9"
        }
    },
    "2021/09/27": {
        "datePretty": "Monday, September 27, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "2 Chronicles 9:1\u201312",
                    "readQS": "2+Chronicles+9:1-12",
                    "audioQS": "2Chr.9"
                },
                {
                    "pretty": "Mark 14:1\u201311",
                    "readQS": "Mark+14:1-11",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+71%3B+2+Chronicles+9:1-12%3B+Mark+14:1-11",
            "audioQS": "Ps.71,2Chr.9,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "1 Kings 21",
                    "readQS": "1+Kings+21",
                    "audioQS": "1Kgs.21"
                },
                {
                    "pretty": "Acts 21:37\u201322:21",
                    "readQS": "Acts+21:37-22:21",
                    "audioQS": "Acts.21"
                }
            ],
            "readQS": "Psalm+72%3B+1+Kings+21%3B+Acts+21:37-22:21",
            "audioQS": "Ps.72,1Kgs.21,Acts.21"
        }
    },
    "2021/09/28": {
        "datePretty": "Tuesday, September 28, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "2 Chronicles 10:1\u201311:4",
                    "readQS": "2+Chronicles+10:1-11:4",
                    "audioQS": "2Chr.10"
                },
                {
                    "pretty": "Mark 14:12\u201325",
                    "readQS": "Mark+14:12-25",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+73%3B+2+Chronicles+10:1-11:4%3B+Mark+14:12-25",
            "audioQS": "Ps.73,2Chr.10,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "1 Kings 22:1\u201328",
                    "readQS": "1+Kings+22:1-28",
                    "audioQS": "1Kgs.22"
                },
                {
                    "pretty": "Acts 22:22\u201323:11",
                    "readQS": "Acts+22:22-23:11",
                    "audioQS": "Acts.22"
                }
            ],
            "readQS": "Psalm+74%3B+1+Kings+22:1-28%3B+Acts+22:22-23:11",
            "audioQS": "Ps.74,1Kgs.22,Acts.22"
        }
    },
    "2021/09/29": {
        "datePretty": "Wednesday, September 29, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "2 Chronicles 12",
                    "readQS": "2+Chronicles+12",
                    "audioQS": "2Chr.12"
                },
                {
                    "pretty": "Mark 14:26\u201342",
                    "readQS": "Mark+14:26-42",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+77%3B+2+Chronicles+12%3B+Mark+14:26-42",
            "audioQS": "Ps.77,2Chr.12,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:81\u2013104",
                    "readQS": "Psalm+119:81-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Kings 22:29\u201345",
                    "readQS": "1+Kings+22:29-45",
                    "audioQS": "1Kgs.22"
                },
                {
                    "pretty": "Acts 23:12\u2013end",
                    "readQS": "Acts+23:12-",
                    "audioQS": "Acts.23"
                }
            ],
            "readQS": "Psalm+119:81-104%3B+1+Kings+22:29-45%3B+Acts+23:12-",
            "audioQS": "Ps.119,1Kgs.22,Acts.23"
        }
    },
    "2021/09/30": {
        "datePretty": "Thursday, September 30, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "2 Chronicles 13:1\u201314:1",
                    "readQS": "2+Chronicles+13:1-14:1",
                    "audioQS": "2Chr.13"
                },
                {
                    "pretty": "Mark 14:43\u201352",
                    "readQS": "Mark+14:43-52",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+2+Chronicles+13:1-14:1%3B+Mark+14:43-52",
            "audioQS": "Ps.78,2Chr.13,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78:40\u2013end",
                    "readQS": "Psalm+78:40-",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "2 Kings 1:2\u201317",
                    "readQS": "2+Kings+1:2-17",
                    "audioQS": "2Kgs.1"
                },
                {
                    "pretty": "Acts 24:1\u201323",
                    "readQS": "Acts+24:1-23",
                    "audioQS": "Acts.24"
                }
            ],
            "readQS": "Psalm+78:40-%3B+2+Kings+1:2-17%3B+Acts+24:1-23",
            "audioQS": "Ps.78,2Kgs.1,Acts.24"
        }
    },
    "2021/10/01": {
        "datePretty": "Friday, October 1, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "2 Chronicles 14:2\u2013end",
                    "readQS": "2+Chronicles+14:2-",
                    "audioQS": "2Chr.14"
                },
                {
                    "pretty": "Mark 14:53\u201365",
                    "readQS": "Mark+14:53-65",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+55%3B+2+Chronicles+14:2-%3B+Mark+14:53-65",
            "audioQS": "Ps.55,2Chr.14,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "2 Kings 2:1\u201318",
                    "readQS": "2+Kings+2:1-18",
                    "audioQS": "2Kgs.2"
                },
                {
                    "pretty": "Acts 24:24\u201325:12",
                    "readQS": "Acts+24:24-25:12",
                    "audioQS": "Acts.24"
                }
            ],
            "readQS": "Psalm+69%3B+2+Kings+2:1-18%3B+Acts+24:24-25:12",
            "audioQS": "Ps.69,2Kgs.2,Acts.24"
        }
    },
    "2021/10/02": {
        "datePretty": "Saturday, October 2, 2021",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "2 Chronicles 15:1\u201315",
                    "readQS": "2+Chronicles+15:1-15",
                    "audioQS": "2Chr.15"
                },
                {
                    "pretty": "Mark 14:66\u2013end",
                    "readQS": "Mark+14:66-",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+76%3B+2+Chronicles+15:1-15%3B+Mark+14:66-",
            "audioQS": "Ps.76,2Chr.15,Mark.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "2 Kings 4:1\u201337",
                    "readQS": "2+Kings+4:1-37",
                    "audioQS": "2Kgs.4"
                },
                {
                    "pretty": "Acts 25:13\u2013end",
                    "readQS": "Acts+25:13-",
                    "audioQS": "Acts.25"
                }
            ],
            "readQS": "Psalm+84%3B+2+Kings+4:1-37%3B+Acts+25:13-",
            "audioQS": "Ps.84,2Kgs.4,Acts.25"
        }
    },
    "2021/10/03": {
        "datePretty": "Sunday, October 3, 2021",
        "calendar": "27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 123,124",
                    "readQS": "Psalm+123,124",
                    "audioQS": "Ps.123,124"
                },
                {
                    "pretty": "Isaiah 49:13\u201323",
                    "readQS": "Isaiah+49:13-23",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Luke 12:1\u201312",
                    "readQS": "Luke+12:1-12",
                    "audioQS": "Luke.12"
                }
            ],
            "readQS": "Psalm+123,124%3B+Isaiah+49:13-23%3B+Luke+12:1-12",
            "audioQS": "Ps.123,124,Isa.49,Luke.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 125,126",
                    "readQS": "Psalm+125,126",
                    "audioQS": "Ps.125,126"
                },
                {
                    "pretty": "Joshua 3:7\u201317",
                    "readQS": "Joshua+3:7-17",
                    "audioQS": "Josh.3"
                },
                {
                    "pretty": "Matthew 10:1\u201322",
                    "readQS": "Matthew+10:1-22",
                    "audioQS": "Matt.10"
                }
            ],
            "readQS": "Psalm+125,126%3B+Joshua+3:7-17%3B+Matthew+10:1-22",
            "audioQS": "Ps.125,126,Josh.3,Matt.10"
        }
    },
    "2021/10/04": {
        "datePretty": "Monday, October 4, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "2 Chronicles 17:1\u201312",
                    "readQS": "2+Chronicles+17:1-12",
                    "audioQS": "2Chr.17"
                },
                {
                    "pretty": "Mark 15:1\u201315",
                    "readQS": "Mark+15:1-15",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+80%3B+2+Chronicles+17:1-12%3B+Mark+15:1-15",
            "audioQS": "Ps.80,2Chr.17,Mark.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "2 Kings 5",
                    "readQS": "2+Kings+5",
                    "audioQS": "2Kgs.5"
                },
                {
                    "pretty": "Acts 26:1\u201323",
                    "readQS": "Acts+26:1-23",
                    "audioQS": "Acts.26"
                }
            ],
            "readQS": "Psalm+85%3B+2+Kings+5%3B+Acts+26:1-23",
            "audioQS": "Ps.85,2Kgs.5,Acts.26"
        }
    },
    "2021/10/05": {
        "datePretty": "Tuesday, October 5, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "2 Chronicles 18:1\u201327",
                    "readQS": "2+Chronicles+18:1-27",
                    "audioQS": "2Chr.18"
                },
                {
                    "pretty": "Mark 15:16\u201332",
                    "readQS": "Mark+15:16-32",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+2+Chronicles+18:1-27%3B+Mark+15:16-32",
            "audioQS": "Ps.89,2Chr.18,Mark.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u2013end",
                    "readQS": "Psalm+89:19-",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "2 Kings 6:1\u201323",
                    "readQS": "2+Kings+6:1-23",
                    "audioQS": "2Kgs.6"
                },
                {
                    "pretty": "Acts 26:24\u2013end",
                    "readQS": "Acts+26:24-",
                    "audioQS": "Acts.26"
                }
            ],
            "readQS": "Psalm+89:19-%3B+2+Kings+6:1-23%3B+Acts+26:24-",
            "audioQS": "Ps.89,2Kgs.6,Acts.26"
        }
    },
    "2021/10/06": {
        "datePretty": "Wednesday, October 6, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Chronicles 18:28\u2013end",
                    "readQS": "2+Chronicles+18:28-",
                    "audioQS": "2Chr.18"
                },
                {
                    "pretty": "2 Chronicles 19",
                    "readQS": "2+Chronicles+19",
                    "audioQS": "2Chr.19"
                },
                {
                    "pretty": "Mark 15:33\u201341",
                    "readQS": "Mark+15:33-41",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+2+Chronicles+18:28-%3B+2+Chronicles+19%3B+Mark+15:33-41",
            "audioQS": "Ps.119,2Chr.18,2Chr.19,Mark.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "2 Kings 9:1\u201316",
                    "readQS": "2+Kings+9:1-16",
                    "audioQS": "2Kgs.9"
                },
                {
                    "pretty": "Acts 27:1\u201326",
                    "readQS": "Acts+27:1-26",
                    "audioQS": "Acts.27"
                }
            ],
            "readQS": "Psalm+91%3B+2+Kings+9:1-16%3B+Acts+27:1-26",
            "audioQS": "Ps.91,2Kgs.9,Acts.27"
        }
    },
    "2021/10/07": {
        "datePretty": "Thursday, October 7, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "2 Chronicles 20:1\u201323",
                    "readQS": "2+Chronicles+20:1-23",
                    "audioQS": "2Chr.20"
                },
                {
                    "pretty": "Mark 15:42\u2013end",
                    "readQS": "Mark+15:42-",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+92%3B+2+Chronicles+20:1-23%3B+Mark+15:42-",
            "audioQS": "Ps.92,2Chr.20,Mark.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "2 Kings 9:17\u2013end",
                    "readQS": "2+Kings+9:17-",
                    "audioQS": "2Kgs.9"
                },
                {
                    "pretty": "Acts 27:27\u2013end",
                    "readQS": "Acts+27:27-",
                    "audioQS": "Acts.27"
                }
            ],
            "readQS": "Psalm+94%3B+2+Kings+9:17-%3B+Acts+27:27-",
            "audioQS": "Ps.94,2Kgs.9,Acts.27"
        }
    },
    "2021/10/08": {
        "datePretty": "Friday, October 8, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "2 Chronicles 22:10\u2013end",
                    "readQS": "2+Chronicles+22:10-",
                    "audioQS": "2Chr.22"
                },
                {
                    "pretty": "2 Chronicles 23",
                    "readQS": "2+Chronicles+23",
                    "audioQS": "2Chr.23"
                },
                {
                    "pretty": "Mark 16:1\u20138",
                    "readQS": "Mark+16:1-8",
                    "audioQS": "Mark.16"
                }
            ],
            "readQS": "Psalm+88%3B+2+Chronicles+22:10-%3B+2+Chronicles+23%3B+Mark+16:1-8",
            "audioQS": "Ps.88,2Chr.22,2Chr.23,Mark.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "2 Kings 12:1\u201319",
                    "readQS": "2+Kings+12:1-19",
                    "audioQS": "2Kgs.12"
                },
                {
                    "pretty": "Acts 28:1\u201316",
                    "readQS": "Acts+28:1-16",
                    "audioQS": "Acts.28"
                }
            ],
            "readQS": "Psalm+102%3B+2+Kings+12:1-19%3B+Acts+28:1-16",
            "audioQS": "Ps.102,2Kgs.12,Acts.28"
        }
    },
    "2021/10/09": {
        "datePretty": "Saturday, October 9, 2021",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "2 Chronicles 24:1\u201322",
                    "readQS": "2+Chronicles+24:1-22",
                    "audioQS": "2Chr.24"
                },
                {
                    "pretty": "Mark 16:9\u2013end",
                    "readQS": "Mark+16:9-",
                    "audioQS": "Mark.16"
                }
            ],
            "readQS": "Psalm+97%3B+2+Chronicles+24:1-22%3B+Mark+16:9-",
            "audioQS": "Ps.97,2Chr.24,Mark.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 104",
                    "readQS": "Psalm+104",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "2 Kings 17:1\u201323",
                    "readQS": "2+Kings+17:1-23",
                    "audioQS": "2Kgs.17"
                },
                {
                    "pretty": "Acts 28:17\u2013end",
                    "readQS": "Acts+28:17-",
                    "audioQS": "Acts.28"
                }
            ],
            "readQS": "Psalm+104%3B+2+Kings+17:1-23%3B+Acts+28:17-",
            "audioQS": "Ps.104,2Kgs.17,Acts.28"
        }
    },
    "2021/10/10": {
        "datePretty": "Sunday, October 10, 2021",
        "calendar": "28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 129,130",
                    "readQS": "Psalm+129,130",
                    "audioQS": "Ps.129,130"
                },
                {
                    "pretty": "Isaiah 50:4\u201310",
                    "readQS": "Isaiah+50:4-10",
                    "audioQS": "Isa.50"
                },
                {
                    "pretty": "Luke 13:22\u201330",
                    "readQS": "Luke+13:22-30",
                    "audioQS": "Luke.13"
                }
            ],
            "readQS": "Psalm+129,130%3B+Isaiah+50:4-10%3B+Luke+13:22-30",
            "audioQS": "Ps.129,130,Isa.50,Luke.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "Joshua 5:13\u20136:20",
                    "readQS": "Joshua+5:13-6:20",
                    "audioQS": "Josh.5"
                },
                {
                    "pretty": "Matthew 11:20\u201330",
                    "readQS": "Matthew+11:20-30",
                    "audioQS": "Matt.11"
                }
            ],
            "readQS": "Psalm+127%3B+Joshua+5:13-6:20%3B+Matthew+11:20-30",
            "audioQS": "Ps.127,Josh.5,Matt.11"
        }
    },
    "2021/10/11": {
        "datePretty": "Monday, October 11, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "2 Chronicles 26:1\u201321",
                    "readQS": "2+Chronicles+26:1-21",
                    "audioQS": "2Chr.26"
                },
                {
                    "pretty": "John 13:1\u201311",
                    "readQS": "John+13:1-11",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+98%3B+2+Chronicles+26:1-21%3B+John+13:1-11",
            "audioQS": "Ps.98,2Chr.26,John.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "2 Kings 17:24\u2013end",
                    "readQS": "2+Kings+17:24-",
                    "audioQS": "2Kgs.17"
                },
                {
                    "pretty": "Philippians 1:1\u201311",
                    "readQS": "Philippians+1:1-11",
                    "audioQS": "Phil.1"
                }
            ],
            "readQS": "Psalm+105%3B+2+Kings+17:24-%3B+Philippians+1:1-11",
            "audioQS": "Ps.105,2Kgs.17,Phil.1"
        }
    },
    "2021/10/12": {
        "datePretty": "Tuesday, October 12, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "2 Chronicles 28",
                    "readQS": "2+Chronicles+28",
                    "audioQS": "2Chr.28"
                },
                {
                    "pretty": "John 13:12\u201320",
                    "readQS": "John+13:12-20",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+106%3B+2+Chronicles+28%3B+John+13:12-20",
            "audioQS": "Ps.106,2Chr.28,John.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 107",
                    "readQS": "Psalm+107",
                    "audioQS": "Ps.107"
                },
                {
                    "pretty": "2 Kings 18:1\u201312",
                    "readQS": "2+Kings+18:1-12",
                    "audioQS": "2Kgs.18"
                },
                {
                    "pretty": "Philippians 1:12\u2013end",
                    "readQS": "Philippians+1:12-",
                    "audioQS": "Phil.1"
                }
            ],
            "readQS": "Psalm+107%3B+2+Kings+18:1-12%3B+Philippians+1:12-",
            "audioQS": "Ps.107,2Kgs.18,Phil.1"
        }
    },
    "2021/10/13": {
        "datePretty": "Wednesday, October 13, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "2 Chronicles 29:1\u201319",
                    "readQS": "2+Chronicles+29:1-19",
                    "audioQS": "2Chr.29"
                },
                {
                    "pretty": "John 13:21\u201330",
                    "readQS": "John+13:21-30",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+111%3B+2+Chronicles+29:1-19%3B+John+13:21-30",
            "audioQS": "Ps.111,2Chr.29,John.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:129\u2013152",
                    "readQS": "Psalm+119:129-152",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Kings 18:13\u2013end",
                    "readQS": "2+Kings+18:13-",
                    "audioQS": "2Kgs.18"
                },
                {
                    "pretty": "Philippians 2:1\u201313",
                    "readQS": "Philippians+2:1-13",
                    "audioQS": "Phil.2"
                }
            ],
            "readQS": "Psalm+119:129-152%3B+2+Kings+18:13-%3B+Philippians+2:1-13",
            "audioQS": "Ps.119,2Kgs.18,Phil.2"
        }
    },
    "2021/10/14": {
        "datePretty": "Thursday, October 14, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "2 Chronicles 29:20\u2013end",
                    "readQS": "2+Chronicles+29:20-",
                    "audioQS": "2Chr.29"
                },
                {
                    "pretty": "John 13:31\u2013end",
                    "readQS": "John+13:31-",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+115%3B+2+Chronicles+29:20-%3B+John+13:31-",
            "audioQS": "Ps.115,2Chr.29,John.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 116",
                    "readQS": "Psalm+116",
                    "audioQS": "Ps.116"
                },
                {
                    "pretty": "2 Kings 19:1\u201319",
                    "readQS": "2+Kings+19:1-19",
                    "audioQS": "2Kgs.19"
                },
                {
                    "pretty": "Philippians 2:14\u2013end",
                    "readQS": "Philippians+2:14-",
                    "audioQS": "Phil.2"
                }
            ],
            "readQS": "Psalm+116%3B+2+Kings+19:1-19%3B+Philippians+2:14-",
            "audioQS": "Ps.116,2Kgs.19,Phil.2"
        }
    },
    "2021/10/15": {
        "datePretty": "Friday, October 15, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "2 Chronicles 30",
                    "readQS": "2+Chronicles+30",
                    "audioQS": "2Chr.30"
                },
                {
                    "pretty": "John 14:1\u201314",
                    "readQS": "John+14:1-14",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+139%3B+2+Chronicles+30%3B+John+14:1-14",
            "audioQS": "Ps.139,2Chr.30,John.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "2 Kings 19:20\u201336",
                    "readQS": "2+Kings+19:20-36",
                    "audioQS": "2Kgs.19"
                },
                {
                    "pretty": "Philippians 3:1\u20134:1",
                    "readQS": "Philippians+3:1-4:1",
                    "audioQS": "Phil.3"
                }
            ],
            "readQS": "Psalm+130%3B+2+Kings+19:20-36%3B+Philippians+3:1-4:1",
            "audioQS": "Ps.130,2Kgs.19,Phil.3"
        }
    },
    "2021/10/16": {
        "datePretty": "Saturday, October 16, 2021",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "2 Chronicles 32:1\u201322",
                    "readQS": "2+Chronicles+32:1-22",
                    "audioQS": "2Chr.32"
                },
                {
                    "pretty": "John 14:15\u2013end",
                    "readQS": "John+14:15-",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+121%3B+2+Chronicles+32:1-22%3B+John+14:15-",
            "audioQS": "Ps.121,2Chr.32,John.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "2 Kings 20",
                    "readQS": "2+Kings+20",
                    "audioQS": "2Kgs.20"
                },
                {
                    "pretty": "Philippians 4:2\u2013end",
                    "readQS": "Philippians+4:2-",
                    "audioQS": "Phil.4"
                }
            ],
            "readQS": "Psalm+118%3B+2+Kings+20%3B+Philippians+4:2-",
            "audioQS": "Ps.118,2Kgs.20,Phil.4"
        }
    },
    "2021/10/17": {
        "datePretty": "Sunday, October 17, 2021",
        "calendar": "29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 133,134,137:1\u20136",
                    "readQS": "Psalm+133,134,137:1-6",
                    "audioQS": "Ps.133,134,137"
                },
                {
                    "pretty": "Isaiah 54:1\u201314",
                    "readQS": "Isaiah+54:1-14",
                    "audioQS": "Isa.54"
                },
                {
                    "pretty": "Luke 13:31\u201335",
                    "readQS": "Luke+13:31-35",
                    "audioQS": "Luke.13"
                }
            ],
            "readQS": "Psalm+133,134,137:1-6%3B+Isaiah+54:1-14%3B+Luke+13:31-35",
            "audioQS": "Ps.133,134,137,Isa.54,Luke.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 141",
                    "readQS": "Psalm+141",
                    "audioQS": "Ps.141"
                },
                {
                    "pretty": "Joshua 14:6\u201314",
                    "readQS": "Joshua+14:6-14",
                    "audioQS": "Josh.14"
                },
                {
                    "pretty": "Matthew 12:1\u201321",
                    "readQS": "Matthew+12:1-21",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+141%3B+Joshua+14:6-14%3B+Matthew+12:1-21",
            "audioQS": "Ps.141,Josh.14,Matt.12"
        }
    },
    "2021/10/18": {
        "datePretty": "Monday, October 18, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "2 Chronicles 33:1\u201313",
                    "readQS": "2+Chronicles+33:1-13",
                    "audioQS": "2Chr.33"
                },
                {
                    "pretty": "John 15:1\u201311",
                    "readQS": "John+15:1-11",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+126%3B+2+Chronicles+33:1-13%3B+John+15:1-11",
            "audioQS": "Ps.126,2Chr.33,John.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "2 Kings 21:1\u201318",
                    "readQS": "2+Kings+21:1-18",
                    "audioQS": "2Kgs.21"
                },
                {
                    "pretty": "1 Timothy 1:1\u201317",
                    "readQS": "1+Timothy+1:1-17",
                    "audioQS": "1Tim.1"
                }
            ],
            "readQS": "Psalm+127%3B+2+Kings+21:1-18%3B+1+Timothy+1:1-17",
            "audioQS": "Ps.127,2Kgs.21,1Tim.1"
        }
    },
    "2021/10/19": {
        "datePretty": "Tuesday, October 19, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "2 Chronicles 34:1\u201318",
                    "readQS": "2+Chronicles+34:1-18",
                    "audioQS": "2Chr.34"
                },
                {
                    "pretty": "John 15:12\u201317",
                    "readQS": "John+15:12-17",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+132%3B+2+Chronicles+34:1-18%3B+John+15:12-17",
            "audioQS": "Ps.132,2Chr.34,John.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "2 Kings 22:1\u201323:3",
                    "readQS": "2+Kings+22:1-23:3",
                    "audioQS": "2Kgs.22"
                },
                {
                    "pretty": "1 Timothy 1:18\u2013end",
                    "readQS": "1+Timothy+1:18-",
                    "audioQS": "1Tim.1"
                },
                {
                    "pretty": "1 Timothy 2",
                    "readQS": "1+Timothy+2",
                    "audioQS": "1Tim.2"
                }
            ],
            "readQS": "Psalm+135%3B+2+Kings+22:1-23:3%3B+1+Timothy+1:18-%3B+1+Timothy+2",
            "audioQS": "Ps.135,2Kgs.22,1Tim.1,1Tim.2"
        }
    },
    "2021/10/20": {
        "datePretty": "Wednesday, October 20, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Chronicles 34:19\u2013end",
                    "readQS": "2+Chronicles+34:19-",
                    "audioQS": "2Chr.34"
                },
                {
                    "pretty": "John 15:18\u2013end",
                    "readQS": "John+15:18-",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+119:153-%3B+2+Chronicles+34:19-%3B+John+15:18-",
            "audioQS": "Ps.119,2Chr.34,John.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "2 Kings 23:4\u201325",
                    "readQS": "2+Kings+23:4-25",
                    "audioQS": "2Kgs.23"
                },
                {
                    "pretty": "1 Timothy 3",
                    "readQS": "1+Timothy+3",
                    "audioQS": "1Tim.3"
                }
            ],
            "readQS": "Psalm+136%3B+2+Kings+23:4-25%3B+1+Timothy+3",
            "audioQS": "Ps.136,2Kgs.23,1Tim.3"
        }
    },
    "2021/10/21": {
        "datePretty": "Thursday, October 21, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "2 Chronicles 35:1\u201319",
                    "readQS": "2+Chronicles+35:1-19",
                    "audioQS": "2Chr.35"
                },
                {
                    "pretty": "John 16:1\u201315",
                    "readQS": "John+16:1-15",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+143%3B+2+Chronicles+35:1-19%3B+John+16:1-15",
            "audioQS": "Ps.143,2Chr.35,John.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138",
                    "readQS": "Psalm+138",
                    "audioQS": "Ps.138"
                },
                {
                    "pretty": "2 Kings 23:36\u201324:17",
                    "readQS": "2+Kings+23:36-24:17",
                    "audioQS": "2Kgs.23"
                },
                {
                    "pretty": "1 Timothy 4",
                    "readQS": "1+Timothy+4",
                    "audioQS": "1Tim.4"
                }
            ],
            "readQS": "Psalm+138%3B+2+Kings+23:36-24:17%3B+1+Timothy+4",
            "audioQS": "Ps.138,2Kgs.23,1Tim.4"
        }
    },
    "2021/10/22": {
        "datePretty": "Friday, October 22, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "2 Chronicles 35:20\u201336:10",
                    "readQS": "2+Chronicles+35:20-36:10",
                    "audioQS": "2Chr.35"
                },
                {
                    "pretty": "John 16:16\u201322",
                    "readQS": "John+16:16-22",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+144%3B+2+Chronicles+35:20-36:10%3B+John+16:16-22",
            "audioQS": "Ps.144,2Chr.35,John.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "2 Kings 24:18\u201325:12",
                    "readQS": "2+Kings+24:18-25:12",
                    "audioQS": "2Kgs.24"
                },
                {
                    "pretty": "1 Timothy 5:1\u201316",
                    "readQS": "1+Timothy+5:1-16",
                    "audioQS": "1Tim.5"
                }
            ],
            "readQS": "Psalm+145%3B+2+Kings+24:18-25:12%3B+1+Timothy+5:1-16",
            "audioQS": "Ps.145,2Kgs.24,1Tim.5"
        }
    },
    "2021/10/23": {
        "datePretty": "Saturday, October 23, 2021",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "2 Chronicles 36:11\u2013end",
                    "readQS": "2+Chronicles+36:11-",
                    "audioQS": "2Chr.36"
                },
                {
                    "pretty": "John 16:23\u2013end",
                    "readQS": "John+16:23-",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+147%3B+2+Chronicles+36:11-%3B+John+16:23-",
            "audioQS": "Ps.147,2Chr.36,John.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "2 Kings 25:22\u2013end",
                    "readQS": "2+Kings+25:22-",
                    "audioQS": "2Kgs.25"
                },
                {
                    "pretty": "1 Timothy 5:17\u2013end",
                    "readQS": "1+Timothy+5:17-",
                    "audioQS": "1Tim.5"
                }
            ],
            "readQS": "Psalm+148%3B+2+Kings+25:22-%3B+1+Timothy+5:17-",
            "audioQS": "Ps.148,2Kgs.25,1Tim.5"
        }
    },
    "2021/10/24": {
        "datePretty": "Sunday, October 24, 2021",
        "calendar": "30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:89\u2013104",
                    "readQS": "Psalm+119:89-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Isaiah 59:9\u201320",
                    "readQS": "Isaiah+59:9-20",
                    "audioQS": "Isa.59"
                },
                {
                    "pretty": "Luke 14:1\u201314",
                    "readQS": "Luke+14:1-14",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+119:89-104%3B+Isaiah+59:9-20%3B+Luke+14:1-14",
            "audioQS": "Ps.119,Isa.59,Luke.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:121\u2013136",
                    "readQS": "Psalm+119:121-136",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Eccles 11,12",
                    "readQS": "Eccles+11,12",
                    "audioQS": "Eccles 11,12"
                },
                {
                    "pretty": "2 Timothy 2:1\u20137",
                    "readQS": "2+Timothy+2:1-7",
                    "audioQS": "2Tim.2"
                }
            ],
            "readQS": "Psalm+119:121-136%3B+Eccles+11,12%3B+2+Timothy+2:1-7",
            "audioQS": "Ps.119,Eccles 11,12,2Tim.2"
        }
    },
    "2021/10/25": {
        "datePretty": "Monday, October 25, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Micah 1:1\u20139",
                    "readQS": "Micah+1:1-9",
                    "audioQS": "Mic.1"
                },
                {
                    "pretty": "John 17:1\u20135",
                    "readQS": "John+17:1-5",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+1%3B+Micah+1:1-9%3B+John+17:1-5",
            "audioQS": "Ps.1,Mic.1,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Exodus 22:21\u201327",
                    "readQS": "Exodus+22:21-27",
                    "audioQS": "Exod.22"
                },
                {
                    "pretty": "Exodus 23:1\u201317",
                    "readQS": "Exodus+23:1-17",
                    "audioQS": "Exod.23"
                },
                {
                    "pretty": "1 Timothy 6:1\u201310",
                    "readQS": "1+Timothy+6:1-10",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+4%3B+Exodus+22:21-27%3B+Exodus+23:1-17%3B+1+Timothy+6:1-10",
            "audioQS": "Ps.4,Exod.22,Exod.23,1Tim.6"
        }
    },
    "2021/10/26": {
        "datePretty": "Tuesday, October 26, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Micah 2",
                    "readQS": "Micah+2",
                    "audioQS": "Mic.2"
                },
                {
                    "pretty": "John 17:6\u201319",
                    "readQS": "John+17:6-19",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+5%3B+Micah+2%3B+John+17:6-19",
            "audioQS": "Ps.5,Mic.2,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Exodus 29:38\u201330:16",
                    "readQS": "Exodus+29:38-30:16",
                    "audioQS": "Exod.29"
                },
                {
                    "pretty": "1 Timothy 6:11\u2013end",
                    "readQS": "1+Timothy+6:11-",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+9%3B+Exodus+29:38-30:16%3B+1+Timothy+6:11-",
            "audioQS": "Ps.9,Exod.29,1Tim.6"
        }
    },
    "2021/10/27": {
        "datePretty": "Wednesday, October 27, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Micah 3",
                    "readQS": "Micah+3",
                    "audioQS": "Mic.3"
                },
                {
                    "pretty": "John 17:20\u2013end",
                    "readQS": "John+17:20-",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+Micah+3%3B+John+17:20-",
            "audioQS": "Ps.119,Mic.3,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Leviticus 8",
                    "readQS": "Leviticus+8",
                    "audioQS": "Lev.8"
                },
                {
                    "pretty": "2 Timothy 1:1\u201314",
                    "readQS": "2+Timothy+1:1-14",
                    "audioQS": "2Tim.1"
                }
            ],
            "readQS": "Psalm+11%3B+Leviticus+8%3B+2+Timothy+1:1-14",
            "audioQS": "Ps.11,Lev.8,2Tim.1"
        }
    },
    "2021/10/28": {
        "datePretty": "Thursday, October 28, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Micah 4:1\u20135:1",
                    "readQS": "Micah+4:1-5:1",
                    "audioQS": "Mic.4"
                },
                {
                    "pretty": "John 18:1\u201311",
                    "readQS": "John+18:1-11",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+15%3B+Micah+4:1-5:1%3B+John+18:1-11",
            "audioQS": "Ps.15,Mic.4,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 18",
                    "readQS": "Psalm+18",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Leviticus 9",
                    "readQS": "Leviticus+9",
                    "audioQS": "Lev.9"
                },
                {
                    "pretty": "2 Timothy 1:15\u20132:13",
                    "readQS": "2+Timothy+1:15-2:13",
                    "audioQS": "2Tim.1"
                }
            ],
            "readQS": "Psalm+18%3B+Leviticus+9%3B+2+Timothy+1:15-2:13",
            "audioQS": "Ps.18,Lev.9,2Tim.1"
        }
    },
    "2021/10/29": {
        "datePretty": "Friday, October 29, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Micah 5:2\u2013end",
                    "readQS": "Micah+5:2-",
                    "audioQS": "Mic.5"
                },
                {
                    "pretty": "John 18:12\u201327",
                    "readQS": "John+18:12-27",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+19%3B+Micah+5:2-%3B+John+18:12-27",
            "audioQS": "Ps.19,Mic.5,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Leviticus 16:2\u201324",
                    "readQS": "Leviticus+16:2-24",
                    "audioQS": "Lev.16"
                },
                {
                    "pretty": "2 Timothy 2:14\u2013end",
                    "readQS": "2+Timothy+2:14-",
                    "audioQS": "2Tim.2"
                }
            ],
            "readQS": "Psalm+22%3B+Leviticus+16:2-24%3B+2+Timothy+2:14-",
            "audioQS": "Ps.22,Lev.16,2Tim.2"
        }
    },
    "2021/10/30": {
        "datePretty": "Saturday, October 30, 2021",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Micah 6",
                    "readQS": "Micah+6",
                    "audioQS": "Mic.6"
                },
                {
                    "pretty": "John 18:28\u2013end",
                    "readQS": "John+18:28-",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+23%3B+Micah+6%3B+John+18:28-",
            "audioQS": "Ps.23,Mic.6,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "Leviticus 17",
                    "readQS": "Leviticus+17",
                    "audioQS": "Lev.17"
                },
                {
                    "pretty": "2 Timothy 3",
                    "readQS": "2+Timothy+3",
                    "audioQS": "2Tim.3"
                }
            ],
            "readQS": "Psalm+24%3B+Leviticus+17%3B+2+Timothy+3",
            "audioQS": "Ps.24,Lev.17,2Tim.3"
        }
    },
    "2021/10/31": {
        "datePretty": "Sunday, October 31, 2021",
        "calendar": "4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 112,149",
                    "readQS": "Psalm+112,149",
                    "audioQS": "Ps.112,149"
                },
                {
                    "pretty": "Jeremiah 31:31\u201334",
                    "readQS": "Jeremiah+31:31-34",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "1 John 3:1\u20133",
                    "readQS": "1+John+3:1-3",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+112,149%3B+Jeremiah+31:31-34%3B+1+John+3:1-3",
            "audioQS": "Ps.112,149,Jer.31,1John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Daniel 2:1\u201311,25\u201348",
                    "readQS": "Daniel+2:1-11,25-48",
                    "audioQS": "Dan.2"
                },
                {
                    "pretty": "Revelation 7:9\u201317",
                    "readQS": "Revelation+7:9-17",
                    "audioQS": "Rev.7"
                }
            ],
            "readQS": "Psalm+145%3B+Daniel+2:1-11,25-48%3B+Revelation+7:9-17",
            "audioQS": "Ps.145,Dan.2,Rev.7"
        }
    },
    "2021/11/01": {
        "datePretty": "Monday, November 1, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
                },
                {
                    "pretty": "Isaiah 1:1\u201320",
                    "readQS": "Isaiah+1:1-20",
                    "audioQS": "Isa.1"
                },
                {
                    "pretty": "Matthew 1:18\u2013end",
                    "readQS": "Matthew+1:18-",
                    "audioQS": "Matt.1"
                }
            ],
            "readQS": "Psalm+2%3B+Isaiah+1:1-20%3B+Matthew+1:18-",
            "audioQS": "Ps.2,Isa.1,Matt.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "Daniel 1",
                    "readQS": "Daniel+1",
                    "audioQS": "Dan.1"
                },
                {
                    "pretty": "Revelation 1",
                    "readQS": "Revelation+1",
                    "audioQS": "Rev.1"
                }
            ],
            "readQS": "Psalm+92%3B+Daniel+1%3B+Revelation+1",
            "audioQS": "Ps.92,Dan.1,Rev.1"
        }
    },
    "2021/11/02": {
        "datePretty": "Tuesday, November 2, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Isaiah 1:21\u2013end",
                    "readQS": "Isaiah+1:21-",
                    "audioQS": "Isa.1"
                },
                {
                    "pretty": "Matthew 2:1\u201315",
                    "readQS": "Matthew+2:1-15",
                    "audioQS": "Matt.2"
                }
            ],
            "readQS": "Psalm+5%3B+Isaiah+1:21-%3B+Matthew+2:1-15",
            "audioQS": "Ps.5,Isa.1,Matt.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 100",
                    "readQS": "Psalm+100",
                    "audioQS": "Ps.100"
                },
                {
                    "pretty": "Daniel 2:1\u201324",
                    "readQS": "Daniel+2:1-24",
                    "audioQS": "Dan.2"
                },
                {
                    "pretty": "Revelation 2:1\u201311",
                    "readQS": "Revelation+2:1-11",
                    "audioQS": "Rev.2"
                }
            ],
            "readQS": "Psalm+100%3B+Daniel+2:1-24%3B+Revelation+2:1-11",
            "audioQS": "Ps.100,Dan.2,Rev.2"
        }
    },
    "2021/11/03": {
        "datePretty": "Wednesday, November 3, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Isaiah 2:1\u201311",
                    "readQS": "Isaiah+2:1-11",
                    "audioQS": "Isa.2"
                },
                {
                    "pretty": "Matthew 2:16\u2013end",
                    "readQS": "Matthew+2:16-",
                    "audioQS": "Matt.2"
                }
            ],
            "readQS": "Psalm+9%3B+Isaiah+2:1-11%3B+Matthew+2:16-",
            "audioQS": "Ps.9,Isa.2,Matt.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 112",
                    "readQS": "Psalm+112",
                    "audioQS": "Ps.112"
                },
                {
                    "pretty": "Daniel 2:25\u2013end",
                    "readQS": "Daniel+2:25-",
                    "audioQS": "Dan.2"
                },
                {
                    "pretty": "Revelation 2:12\u2013end",
                    "readQS": "Revelation+2:12-",
                    "audioQS": "Rev.2"
                }
            ],
            "readQS": "Psalm+112%3B+Daniel+2:25-%3B+Revelation+2:12-",
            "audioQS": "Ps.112,Dan.2,Rev.2"
        }
    },
    "2021/11/04": {
        "datePretty": "Thursday, November 4, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Isaiah 2:12\u2013end",
                    "readQS": "Isaiah+2:12-",
                    "audioQS": "Isa.2"
                },
                {
                    "pretty": "Matthew 3",
                    "readQS": "Matthew+3",
                    "audioQS": "Matt.3"
                }
            ],
            "readQS": "Psalm+15%3B+Isaiah+2:12-%3B+Matthew+3",
            "audioQS": "Ps.15,Isa.2,Matt.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Daniel 3:1\u201318",
                    "readQS": "Daniel+3:1-18",
                    "audioQS": "Dan.3"
                },
                {
                    "pretty": "Revelation 3:1\u201313",
                    "readQS": "Revelation+3:1-13",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+118%3B+Daniel+3:1-18%3B+Revelation+3:1-13",
            "audioQS": "Ps.118,Dan.3,Rev.3"
        }
    },
    "2021/11/05": {
        "datePretty": "Friday, November 5, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 16",
                    "readQS": "Psalm+16",
                    "audioQS": "Ps.16"
                },
                {
                    "pretty": "Isaiah 3:1\u201315",
                    "readQS": "Isaiah+3:1-15",
                    "audioQS": "Isa.3"
                },
                {
                    "pretty": "Matthew 4:1\u201311",
                    "readQS": "Matthew+4:1-11",
                    "audioQS": "Matt.4"
                }
            ],
            "readQS": "Psalm+16%3B+Isaiah+3:1-15%3B+Matthew+4:1-11",
            "audioQS": "Ps.16,Isa.3,Matt.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Daniel 3:19\u2013end",
                    "readQS": "Daniel+3:19-",
                    "audioQS": "Dan.3"
                },
                {
                    "pretty": "Revelation 3:14\u2013end",
                    "readQS": "Revelation+3:14-",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+143%3B+Daniel+3:19-%3B+Revelation+3:14-",
            "audioQS": "Ps.143,Dan.3,Rev.3"
        }
    },
    "2021/11/06": {
        "datePretty": "Saturday, November 6, 2021",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 18:31\u2013end",
                    "readQS": "Psalm+18:31-",
                    "audioQS": "Ps.18"
                },
                {
                    "pretty": "Isaiah 4:2\u20135:7",
                    "readQS": "Isaiah+4:2-5:7",
                    "audioQS": "Isa.4"
                },
                {
                    "pretty": "Matthew 4:12\u201322",
                    "readQS": "Matthew+4:12-22",
                    "audioQS": "Matt.4"
                }
            ],
            "readQS": "Psalm+18:31-%3B+Isaiah+4:2-5:7%3B+Matthew+4:12-22",
            "audioQS": "Ps.18,Isa.4,Matt.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Daniel 4:1\u201318",
                    "readQS": "Daniel+4:1-18",
                    "audioQS": "Dan.4"
                },
                {
                    "pretty": "Revelation 4",
                    "readQS": "Revelation+4",
                    "audioQS": "Rev.4"
                }
            ],
            "readQS": "Psalm+145%3B+Daniel+4:1-18%3B+Revelation+4",
            "audioQS": "Ps.145,Dan.4,Rev.4"
        }
    },
    "2021/11/07": {
        "datePretty": "Sunday, November 7, 2021",
        "calendar": "3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "Micah 4:1\u20135",
                    "readQS": "Micah+4:1-5",
                    "audioQS": "Mic.4"
                },
                {
                    "pretty": "Philippians 4:6\u20139",
                    "readQS": "Philippians+4:6-9",
                    "audioQS": "Phil.4"
                }
            ],
            "readQS": "Psalm+136%3B+Micah+4:1-5%3B+Philippians+4:6-9",
            "audioQS": "Ps.136,Mic.4,Phil.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Isaiah 10:33\u201311:9",
                    "readQS": "Isaiah+10:33-11:9",
                    "audioQS": "Isa.10"
                },
                {
                    "pretty": "John 14:1\u201329",
                    "readQS": "John+14:1-29",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+46%3B+Isaiah+10:33-11:9%3B+John+14:1-29",
            "audioQS": "Ps.46,Isa.10,John.14"
        }
    },
    "2021/11/08": {
        "datePretty": "Monday, November 8, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 20",
                    "readQS": "Psalm+20",
                    "audioQS": "Ps.20"
                },
                {
                    "pretty": "Isaiah 5:8\u201324",
                    "readQS": "Isaiah+5:8-24",
                    "audioQS": "Isa.5"
                },
                {
                    "pretty": "Matthew 4:23\u20135:12",
                    "readQS": "Matthew+4:23-5:12",
                    "audioQS": "Matt.4"
                }
            ],
            "readQS": "Psalm+20%3B+Isaiah+5:8-24%3B+Matthew+4:23-5:12",
            "audioQS": "Ps.20,Isa.5,Matt.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Daniel 4:19\u2013end",
                    "readQS": "Daniel+4:19-",
                    "audioQS": "Dan.4"
                },
                {
                    "pretty": "Revelation 5",
                    "readQS": "Revelation+5",
                    "audioQS": "Rev.5"
                }
            ],
            "readQS": "Psalm+34%3B+Daniel+4:19-%3B+Revelation+5",
            "audioQS": "Ps.34,Dan.4,Rev.5"
        }
    },
    "2021/11/09": {
        "datePretty": "Tuesday, November 9, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 21",
                    "readQS": "Psalm+21",
                    "audioQS": "Ps.21"
                },
                {
                    "pretty": "Isaiah 5:25\u2013end",
                    "readQS": "Isaiah+5:25-",
                    "audioQS": "Isa.5"
                },
                {
                    "pretty": "Matthew 5:13\u201320",
                    "readQS": "Matthew+5:13-20",
                    "audioQS": "Matt.5"
                }
            ],
            "readQS": "Psalm+21%3B+Isaiah+5:25-%3B+Matthew+5:13-20",
            "audioQS": "Ps.21,Isa.5,Matt.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Daniel 5:1\u201312",
                    "readQS": "Daniel+5:1-12",
                    "audioQS": "Dan.5"
                },
                {
                    "pretty": "Revelation 6",
                    "readQS": "Revelation+6",
                    "audioQS": "Rev.6"
                }
            ],
            "readQS": "Psalm+40%3B+Daniel+5:1-12%3B+Revelation+6",
            "audioQS": "Ps.40,Dan.5,Rev.6"
        }
    },
    "2021/11/10": {
        "datePretty": "Wednesday, November 10, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Isaiah 6",
                    "readQS": "Isaiah+6",
                    "audioQS": "Isa.6"
                },
                {
                    "pretty": "Matthew 5:21\u201337",
                    "readQS": "Matthew+5:21-37",
                    "audioQS": "Matt.5"
                }
            ],
            "readQS": "Psalm+23%3B+Isaiah+6%3B+Matthew+5:21-37",
            "audioQS": "Ps.23,Isa.6,Matt.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Daniel 5:13\u2013end",
                    "readQS": "Daniel+5:13-",
                    "audioQS": "Dan.5"
                },
                {
                    "pretty": "Revelation 7:1\u20134,7:9\u2013end",
                    "readQS": "Revelation+7:1-4,7:9-",
                    "audioQS": "Rev.7"
                }
            ],
            "readQS": "Psalm+37%3B+Daniel+5:13-%3B+Revelation+7:1-4,7:9-",
            "audioQS": "Ps.37,Dan.5,Rev.7"
        }
    },
    "2021/11/11": {
        "datePretty": "Thursday, November 11, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 26",
                    "readQS": "Psalm+26",
                    "audioQS": "Ps.26"
                },
                {
                    "pretty": "Isaiah 7:1\u201317",
                    "readQS": "Isaiah+7:1-17",
                    "audioQS": "Isa.7"
                },
                {
                    "pretty": "Matthew 5:38\u2013end",
                    "readQS": "Matthew+5:38-",
                    "audioQS": "Matt.5"
                }
            ],
            "readQS": "Psalm+26%3B+Isaiah+7:1-17%3B+Matthew+5:38-",
            "audioQS": "Ps.26,Isa.7,Matt.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
                },
                {
                    "pretty": "Daniel 6",
                    "readQS": "Daniel+6",
                    "audioQS": "Dan.6"
                },
                {
                    "pretty": "Revelation 8",
                    "readQS": "Revelation+8",
                    "audioQS": "Rev.8"
                }
            ],
            "readQS": "Psalm+43%3B+Daniel+6%3B+Revelation+8",
            "audioQS": "Ps.43,Dan.6,Rev.8"
        }
    },
    "2021/11/12": {
        "datePretty": "Friday, November 12, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 32",
                    "readQS": "Psalm+32",
                    "audioQS": "Ps.32"
                },
                {
                    "pretty": "Isaiah 8:1\u201315",
                    "readQS": "Isaiah+8:1-15",
                    "audioQS": "Isa.8"
                },
                {
                    "pretty": "Matthew 6:1\u201318",
                    "readQS": "Matthew+6:1-18",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+32%3B+Isaiah+8:1-15%3B+Matthew+6:1-18",
            "audioQS": "Ps.32,Isa.8,Matt.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Daniel 7:1\u201314",
                    "readQS": "Daniel+7:1-14",
                    "audioQS": "Dan.7"
                },
                {
                    "pretty": "Revelation 9:1\u201312",
                    "readQS": "Revelation+9:1-12",
                    "audioQS": "Rev.9"
                }
            ],
            "readQS": "Psalm+31%3B+Daniel+7:1-14%3B+Revelation+9:1-12",
            "audioQS": "Ps.31,Dan.7,Rev.9"
        }
    },
    "2021/11/13": {
        "datePretty": "Saturday, November 13, 2021",
        "calendar": "Week of 3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Isaiah 8:16\u20139:7",
                    "readQS": "Isaiah+8:16-9:7",
                    "audioQS": "Isa.8"
                },
                {
                    "pretty": "Matthew 6:19\u2013end",
                    "readQS": "Matthew+6:19-",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+33%3B+Isaiah+8:16-9:7%3B+Matthew+6:19-",
            "audioQS": "Ps.33,Isa.8,Matt.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Daniel 7:15\u2013end",
                    "readQS": "Daniel+7:15-",
                    "audioQS": "Dan.7"
                },
                {
                    "pretty": "Revelation 9:13\u2013end",
                    "readQS": "Revelation+9:13-",
                    "audioQS": "Rev.9"
                }
            ],
            "readQS": "Psalm+86%3B+Daniel+7:15-%3B+Revelation+9:13-",
            "audioQS": "Ps.86,Dan.7,Rev.9"
        }
    },
    "2021/11/14": {
        "datePretty": "Sunday, November 14, 2021",
        "calendar": "2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "1 Samuel 9:27\u201310:2a",
                    "readQS": "1+Samuel+9:27-10:2a",
                    "audioQS": "1Sam.9"
                },
                {
                    "pretty": "10:17\u201326",
                    "readQS": "10:17-26",
                    "audioQS": "10"
                },
                {
                    "pretty": "Matthew 13:31\u201335",
                    "readQS": "Matthew+13:31-35",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+96%3B+1+Samuel+9:27-10:2a%3B10:17-26%3B+Matthew+13:31-35",
            "audioQS": "Ps.96,1Sam.9,10,Matt.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 95",
                    "readQS": "Psalm+95",
                    "audioQS": "Ps.95"
                },
                {
                    "pretty": "Daniel 3:13\u201330",
                    "readQS": "Daniel+3:13-30",
                    "audioQS": "Dan.3"
                },
                {
                    "pretty": "Matthew 13:24\u201330,36\u201343",
                    "readQS": "Matthew+13:24-30,36-43",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+95%3B+Daniel+3:13-30%3B+Matthew+13:24-30,36-43",
            "audioQS": "Ps.95,Dan.3,Matt.13"
        }
    },
    "2021/11/15": {
        "datePretty": "Monday, November 15, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Isaiah 9:8\u201310:4",
                    "readQS": "Isaiah+9:8-10:4",
                    "audioQS": "Isa.9"
                },
                {
                    "pretty": "Matthew 7:1\u201312",
                    "readQS": "Matthew+7:1-12",
                    "audioQS": "Matt.7"
                }
            ],
            "readQS": "Psalm+47%3B+Isaiah+9:8-10:4%3B+Matthew+7:1-12",
            "audioQS": "Ps.47,Isa.9,Matt.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Daniel 8:1\u201314",
                    "readQS": "Daniel+8:1-14",
                    "audioQS": "Dan.8"
                },
                {
                    "pretty": "Revelation 10",
                    "readQS": "Revelation+10",
                    "audioQS": "Rev.10"
                }
            ],
            "readQS": "Psalm+71%3B+Daniel+8:1-14%3B+Revelation+10",
            "audioQS": "Ps.71,Dan.8,Rev.10"
        }
    },
    "2021/11/16": {
        "datePretty": "Tuesday, November 16, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 52",
                    "readQS": "Psalm+52",
                    "audioQS": "Ps.52"
                },
                {
                    "pretty": "Isaiah 10:5\u201319",
                    "readQS": "Isaiah+10:5-19",
                    "audioQS": "Isa.10"
                },
                {
                    "pretty": "Matthew 7:13\u2013end",
                    "readQS": "Matthew+7:13-",
                    "audioQS": "Matt.7"
                }
            ],
            "readQS": "Psalm+52%3B+Isaiah+10:5-19%3B+Matthew+7:13-",
            "audioQS": "Ps.52,Isa.10,Matt.7"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Daniel 8:15\u2013end",
                    "readQS": "Daniel+8:15-",
                    "audioQS": "Dan.8"
                },
                {
                    "pretty": "Revelation 11:1\u201314",
                    "readQS": "Revelation+11:1-14",
                    "audioQS": "Rev.11"
                }
            ],
            "readQS": "Psalm+67%3B+Daniel+8:15-%3B+Revelation+11:1-14",
            "audioQS": "Ps.67,Dan.8,Rev.11"
        }
    },
    "2021/11/17": {
        "datePretty": "Wednesday, November 17, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "Isaiah 10:20\u201332",
                    "readQS": "Isaiah+10:20-32",
                    "audioQS": "Isa.10"
                },
                {
                    "pretty": "Matthew 8:1\u201313",
                    "readQS": "Matthew+8:1-13",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+56%3B+Isaiah+10:20-32%3B+Matthew+8:1-13",
            "audioQS": "Ps.56,Isa.10,Matt.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Daniel 9:1\u201319",
                    "readQS": "Daniel+9:1-19",
                    "audioQS": "Dan.9"
                },
                {
                    "pretty": "Revelation 11:15\u2013end",
                    "readQS": "Revelation+11:15-",
                    "audioQS": "Rev.11"
                }
            ],
            "readQS": "Psalm+73%3B+Daniel+9:1-19%3B+Revelation+11:15-",
            "audioQS": "Ps.73,Dan.9,Rev.11"
        }
    },
    "2021/11/18": {
        "datePretty": "Thursday, November 18, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "Isaiah 10:33\u201311:9",
                    "readQS": "Isaiah+10:33-11:9",
                    "audioQS": "Isa.10"
                },
                {
                    "pretty": "Matthew 8:14\u201322",
                    "readQS": "Matthew+8:14-22",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+62%3B+Isaiah+10:33-11:9%3B+Matthew+8:14-22",
            "audioQS": "Ps.62,Isa.10,Matt.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Daniel 9:20\u2013end",
                    "readQS": "Daniel+9:20-",
                    "audioQS": "Dan.9"
                },
                {
                    "pretty": "Revelation 12",
                    "readQS": "Revelation+12",
                    "audioQS": "Rev.12"
                }
            ],
            "readQS": "Psalm+76%3B+Daniel+9:20-%3B+Revelation+12",
            "audioQS": "Ps.76,Dan.9,Rev.12"
        }
    },
    "2021/11/19": {
        "datePretty": "Friday, November 19, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 63",
                    "readQS": "Psalm+63",
                    "audioQS": "Ps.63"
                },
                {
                    "pretty": "Isaiah 11:10\u2013end",
                    "readQS": "Isaiah+11:10-",
                    "audioQS": "Isa.11"
                },
                {
                    "pretty": "Isaiah 12",
                    "readQS": "Isaiah+12",
                    "audioQS": "Isa.12"
                },
                {
                    "pretty": "Matthew 8:23\u2013end",
                    "readQS": "Matthew+8:23-",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+63%3B+Isaiah+11:10-%3B+Isaiah+12%3B+Matthew+8:23-",
            "audioQS": "Ps.63,Isa.11,Isa.12,Matt.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Daniel 10:1\u201311:1",
                    "readQS": "Daniel+10:1-11:1",
                    "audioQS": "Dan.10"
                },
                {
                    "pretty": "Revelation 13:1\u201310",
                    "readQS": "Revelation+13:1-10",
                    "audioQS": "Rev.13"
                }
            ],
            "readQS": "Psalm+77%3B+Daniel+10:1-11:1%3B+Revelation+13:1-10",
            "audioQS": "Ps.77,Dan.10,Rev.13"
        }
    },
    "2021/11/20": {
        "datePretty": "Saturday, November 20, 2021",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Isaiah 13:1\u201313",
                    "readQS": "Isaiah+13:1-13",
                    "audioQS": "Isa.13"
                },
                {
                    "pretty": "Matthew 9:1\u201317",
                    "readQS": "Matthew+9:1-17",
                    "audioQS": "Matt.9"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Isaiah+13:1-13%3B+Matthew+9:1-17",
            "audioQS": "Ps.78,Isa.13,Matt.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78:40\u2013end",
                    "readQS": "Psalm+78:40-",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Daniel 12",
                    "readQS": "Daniel+12",
                    "audioQS": "Dan.12"
                },
                {
                    "pretty": "Revelation 13:11\u2013end",
                    "readQS": "Revelation+13:11-",
                    "audioQS": "Rev.13"
                }
            ],
            "readQS": "Psalm+78:40-%3B+Daniel+12%3B+Revelation+13:11-",
            "audioQS": "Ps.78,Dan.12,Rev.13"
        }
    },
    "2021/11/21": {
        "datePretty": "Sunday, November 21, 2021",
        "calendar": "1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 29,110",
                    "readQS": "Psalm+29,110",
                    "audioQS": "Ps.29,110"
                },
                {
                    "pretty": "Isaiah 32:1\u20138",
                    "readQS": "Isaiah+32:1-8",
                    "audioQS": "Isa.32"
                },
                {
                    "pretty": "Revelation 3:7\u201322",
                    "readQS": "Revelation+3:7-22",
                    "audioQS": "Rev.3"
                }
            ],
            "readQS": "Psalm+29,110%3B+Isaiah+32:1-8%3B+Revelation+3:7-22",
            "audioQS": "Ps.29,110,Isa.32,Rev.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Daniel 5",
                    "readQS": "Daniel+5",
                    "audioQS": "Dan.5"
                },
                {
                    "pretty": "John 6:1\u201315",
                    "readQS": "John+6:1-15",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+72%3B+Daniel+5%3B+John+6:1-15",
            "audioQS": "Ps.72,Dan.5,John.6"
        }
    },
    "2021/11/22": {
        "datePretty": "Monday, November 22, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "Isaiah 14:3\u201320",
                    "readQS": "Isaiah+14:3-20",
                    "audioQS": "Isa.14"
                },
                {
                    "pretty": "Matthew 9:18\u201334",
                    "readQS": "Matthew+9:18-34",
                    "audioQS": "Matt.9"
                }
            ],
            "readQS": "Psalm+96%3B+Isaiah+14:3-20%3B+Matthew+9:18-34",
            "audioQS": "Ps.96,Isa.14,Matt.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Isaiah 40:1\u201311",
                    "readQS": "Isaiah+40:1-11",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "Revelation 14:1\u201313",
                    "readQS": "Revelation+14:1-13",
                    "audioQS": "Rev.14"
                }
            ],
            "readQS": "Psalm+80%3B+Isaiah+40:1-11%3B+Revelation+14:1-13",
            "audioQS": "Ps.80,Isa.40,Rev.14"
        }
    },
    "2021/11/23": {
        "datePretty": "Tuesday, November 23, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 17",
                    "readQS": "Isaiah+17",
                    "audioQS": "Isa.17"
                },
                {
                    "pretty": "Matthew 9:35\u201310:15",
                    "readQS": "Matthew+9:35-10:15",
                    "audioQS": "Matt.9"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+17%3B+Matthew+9:35-10:15",
            "audioQS": "Ps.97,Isa.17,Matt.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 101",
                    "readQS": "Psalm+101",
                    "audioQS": "Ps.101"
                },
                {
                    "pretty": "Isaiah 40:12\u201326",
                    "readQS": "Isaiah+40:12-26",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "Revelation 14:14\u2013end",
                    "readQS": "Revelation+14:14-",
                    "audioQS": "Rev.14"
                },
                {
                    "pretty": "Revelation 15",
                    "readQS": "Revelation+15",
                    "audioQS": "Rev.15"
                }
            ],
            "readQS": "Psalm+101%3B+Isaiah+40:12-26%3B+Revelation+14:14-%3B+Revelation+15",
            "audioQS": "Ps.101,Isa.40,Rev.14,Rev.15"
        }
    },
    "2021/11/24": {
        "datePretty": "Wednesday, November 24, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 112",
                    "readQS": "Psalm+112",
                    "audioQS": "Ps.112"
                },
                {
                    "pretty": "Isaiah 19",
                    "readQS": "Isaiah+19",
                    "audioQS": "Isa.19"
                },
                {
                    "pretty": "Matthew 10:16\u201333",
                    "readQS": "Matthew+10:16-33",
                    "audioQS": "Matt.10"
                }
            ],
            "readQS": "Psalm+112%3B+Isaiah+19%3B+Matthew+10:16-33",
            "audioQS": "Ps.112,Isa.19,Matt.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 122",
                    "readQS": "Psalm+122",
                    "audioQS": "Ps.122"
                },
                {
                    "pretty": "Isaiah 40:27\u201341:7",
                    "readQS": "Isaiah+40:27-41:7",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "Revelation 16:1\u201311",
                    "readQS": "Revelation+16:1-11",
                    "audioQS": "Rev.16"
                }
            ],
            "readQS": "Psalm+122%3B+Isaiah+40:27-41:7%3B+Revelation+16:1-11",
            "audioQS": "Ps.122,Isa.40,Rev.16"
        }
    },
    "2021/11/25": {
        "datePretty": "Thursday, November 25, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 125",
                    "readQS": "Psalm+125",
                    "audioQS": "Ps.125"
                },
                {
                    "pretty": "Isaiah 21:1\u201312",
                    "readQS": "Isaiah+21:1-12",
                    "audioQS": "Isa.21"
                },
                {
                    "pretty": "Matthew 10:34\u201311:1",
                    "readQS": "Matthew+10:34-11:1",
                    "audioQS": "Matt.10"
                }
            ],
            "readQS": "Psalm+125%3B+Isaiah+21:1-12%3B+Matthew+10:34-11:1",
            "audioQS": "Ps.125,Isa.21,Matt.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 133",
                    "readQS": "Psalm+133",
                    "audioQS": "Ps.133"
                },
                {
                    "pretty": "Isaiah 41:8\u201320",
                    "readQS": "Isaiah+41:8-20",
                    "audioQS": "Isa.41"
                },
                {
                    "pretty": "Revelation 16:12\u2013end",
                    "readQS": "Revelation+16:12-",
                    "audioQS": "Rev.16"
                }
            ],
            "readQS": "Psalm+133%3B+Isaiah+41:8-20%3B+Revelation+16:12-",
            "audioQS": "Ps.133,Isa.41,Rev.16"
        }
    },
    "2021/11/26": {
        "datePretty": "Friday, November 26, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Isaiah 22:1\u201314",
                    "readQS": "Isaiah+22:1-14",
                    "audioQS": "Isa.22"
                },
                {
                    "pretty": "Matthew 11:2\u201319",
                    "readQS": "Matthew+11:2-19",
                    "audioQS": "Matt.11"
                }
            ],
            "readQS": "Psalm+139%3B+Isaiah+22:1-14%3B+Matthew+11:2-19",
            "audioQS": "Ps.139,Isa.22,Matt.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
                },
                {
                    "pretty": "Isaiah 41:21\u201342:9",
                    "readQS": "Isaiah+41:21-42:9",
                    "audioQS": "Isa.41"
                },
                {
                    "pretty": "Revelation 17",
                    "readQS": "Revelation+17",
                    "audioQS": "Rev.17"
                }
            ],
            "readQS": "Psalm+146%3B+Isaiah+41:21-42:9%3B+Revelation+17",
            "audioQS": "Ps.146,Isa.41,Rev.17"
        }
    },
    "2021/11/27": {
        "datePretty": "Saturday, November 27, 2021",
        "calendar": "Week of 1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 24",
                    "readQS": "Isaiah+24",
                    "audioQS": "Isa.24"
                },
                {
                    "pretty": "Matthew 11:20\u2013end",
                    "readQS": "Matthew+11:20-",
                    "audioQS": "Matt.11"
                }
            ],
            "readQS": "Psalm+145%3B+Isaiah+24%3B+Matthew+11:20-",
            "audioQS": "Ps.145,Isa.24,Matt.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 150",
                    "readQS": "Psalm+150",
                    "audioQS": "Ps.150"
                },
                {
                    "pretty": "Isaiah 42:10\u201317",
                    "readQS": "Isaiah+42:10-17",
                    "audioQS": "Isa.42"
                },
                {
                    "pretty": "Revelation 18",
                    "readQS": "Revelation+18",
                    "audioQS": "Rev.18"
                }
            ],
            "readQS": "Psalm+150%3B+Isaiah+42:10-17%3B+Revelation+18",
            "audioQS": "Ps.150,Isa.42,Rev.18"
        }
    },
    "2021/11/28": {
        "datePretty": "Sunday, November 28, 2021",
        "calendar": "",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Isaiah 51:4\u201311",
                    "readQS": "Isaiah+51:4-11",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "Romans 13:11\u201314",
                    "readQS": "Romans+13:11-14",
                    "audioQS": "Rom.13"
                }
            ],
            "readQS": "Psalm+44%3B+Isaiah+51:4-11%3B+Romans+13:11-14",
            "audioQS": "Ps.44,Isa.51,Rom.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Joel 3:9\u201321",
                    "readQS": "Joel+3:9-21",
                    "audioQS": "Joel.3"
                },
                {
                    "pretty": "Revelation 14:13\u201315:4",
                    "readQS": "Revelation+14:13-15:4",
                    "audioQS": "Rev.14"
                }
            ],
            "readQS": "Psalm+9%3B+Joel+3:9-21%3B+Revelation+14:13-15:4",
            "audioQS": "Ps.9,Joel.3,Rev.14"
        }
    },
    "2021/11/29": {
        "datePretty": "Monday, November 29, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Isaiah 25:1\u20139",
                    "readQS": "Isaiah+25:1-9",
                    "audioQS": "Isa.25"
                },
                {
                    "pretty": "Matthew 12:1\u201321",
                    "readQS": "Matthew+12:1-21",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+50%3B+Isaiah+25:1-9%3B+Matthew+12:1-21",
            "audioQS": "Ps.50,Isa.25,Matt.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Isaiah 42:18\u2013end",
                    "readQS": "Isaiah+42:18-",
                    "audioQS": "Isa.42"
                },
                {
                    "pretty": "Revelation 19",
                    "readQS": "Revelation+19",
                    "audioQS": "Rev.19"
                }
            ],
            "readQS": "Psalm+71%3B+Isaiah+42:18-%3B+Revelation+19",
            "audioQS": "Ps.71,Isa.42,Rev.19"
        }
    },
    "2021/11/30": {
        "datePretty": "Tuesday, November 30, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Isaiah 26:1\u201313",
                    "readQS": "Isaiah+26:1-13",
                    "audioQS": "Isa.26"
                },
                {
                    "pretty": "Matthew 12:22\u201337",
                    "readQS": "Matthew+12:22-37",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+80%3B+Isaiah+26:1-13%3B+Matthew+12:22-37",
            "audioQS": "Ps.80,Isa.26,Matt.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Isaiah 43:1\u201313",
                    "readQS": "Isaiah+43:1-13",
                    "audioQS": "Isa.43"
                },
                {
                    "pretty": "Revelation 20",
                    "readQS": "Revelation+20",
                    "audioQS": "Rev.20"
                }
            ],
            "readQS": "Psalm+74%3B+Isaiah+43:1-13%3B+Revelation+20",
            "audioQS": "Ps.74,Isa.43,Rev.20"
        }
    },
    "2021/12/01": {
        "datePretty": "Wednesday, December 1, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 7",
                    "readQS": "Psalm+7",
                    "audioQS": "Ps.7"
                },
                {
                    "pretty": "Isaiah 28:1\u201313",
                    "readQS": "Isaiah+28:1-13",
                    "audioQS": "Isa.28"
                },
                {
                    "pretty": "Matthew 12:38\u2013end",
                    "readQS": "Matthew+12:38-",
                    "audioQS": "Matt.12"
                }
            ],
            "readQS": "Psalm+7%3B+Isaiah+28:1-13%3B+Matthew+12:38-",
            "audioQS": "Ps.7,Isa.28,Matt.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Isaiah 43:14\u2013end",
                    "readQS": "Isaiah+43:14-",
                    "audioQS": "Isa.43"
                },
                {
                    "pretty": "Revelation 21:1\u20138",
                    "readQS": "Revelation+21:1-8",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+77%3B+Isaiah+43:14-%3B+Revelation+21:1-8",
            "audioQS": "Ps.77,Isa.43,Rev.21"
        }
    },
    "2021/12/02": {
        "datePretty": "Thursday, December 2, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Isaiah 28:14\u2013end",
                    "readQS": "Isaiah+28:14-",
                    "audioQS": "Isa.28"
                },
                {
                    "pretty": "Matthew 13:1\u201323",
                    "readQS": "Matthew+13:1-23",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+42%3B+Isaiah+28:14-%3B+Matthew+13:1-23",
            "audioQS": "Ps.42,Isa.28,Matt.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Isaiah 44:1\u20138",
                    "readQS": "Isaiah+44:1-8",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 21:9\u201321",
                    "readQS": "Revelation+21:9-21",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+40%3B+Isaiah+44:1-8%3B+Revelation+21:9-21",
            "audioQS": "Ps.40,Isa.44,Rev.21"
        }
    },
    "2021/12/03": {
        "datePretty": "Friday, December 3, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Isaiah 29:1\u201314",
                    "readQS": "Isaiah+29:1-14",
                    "audioQS": "Isa.29"
                },
                {
                    "pretty": "Matthew 13:24\u201343",
                    "readQS": "Matthew+13:24-43",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+25%3B+Isaiah+29:1-14%3B+Matthew+13:24-43",
            "audioQS": "Ps.25,Isa.29,Matt.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 17",
                    "readQS": "Psalm+17",
                    "audioQS": "Ps.17"
                },
                {
                    "pretty": "Isaiah 44:9\u201323",
                    "readQS": "Isaiah+44:9-23",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 21:22\u201322:5",
                    "readQS": "Revelation+21:22-22:5",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+17%3B+Isaiah+44:9-23%3B+Revelation+21:22-22:5",
            "audioQS": "Ps.17,Isa.44,Rev.21"
        }
    },
    "2021/12/04": {
        "datePretty": "Saturday, December 4, 2021",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Isaiah 29:15\u2013end",
                    "readQS": "Isaiah+29:15-",
                    "audioQS": "Isa.29"
                },
                {
                    "pretty": "Matthew 13:44\u2013end",
                    "readQS": "Matthew+13:44-",
                    "audioQS": "Matt.13"
                }
            ],
            "readQS": "Psalm+9%3B+Isaiah+29:15-%3B+Matthew+13:44-",
            "audioQS": "Ps.9,Isa.29,Matt.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Isaiah 44:24\u201345:13",
                    "readQS": "Isaiah+44:24-45:13",
                    "audioQS": "Isa.44"
                },
                {
                    "pretty": "Revelation 22:6\u2013end",
                    "readQS": "Revelation+22:6-",
                    "audioQS": "Rev.22"
                }
            ],
            "readQS": "Psalm+27%3B+Isaiah+44:24-45:13%3B+Revelation+22:6-",
            "audioQS": "Ps.27,Isa.44,Rev.22"
        }
    },
    "2021/12/05": {
        "datePretty": "Sunday, December 5, 2021",
        "calendar": "2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Isaiah 64:1\u20137",
                    "readQS": "Isaiah+64:1-7",
                    "audioQS": "Isa.64"
                },
                {
                    "pretty": "Matthew 11:2\u201311",
                    "readQS": "Matthew+11:2-11",
                    "audioQS": "Matt.11"
                }
            ],
            "readQS": "Psalm+80%3B+Isaiah+64:1-7%3B+Matthew+11:2-11",
            "audioQS": "Ps.80,Isa.64,Matt.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 75",
                    "readQS": "Psalm+75",
                    "audioQS": "Ps.75"
                },
                {
                    "pretty": "Isaiah 40:1\u201311",
                    "readQS": "Isaiah+40:1-11",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "Luke 1:1\u201325",
                    "readQS": "Luke+1:1-25",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+75%3B+Isaiah+40:1-11%3B+Luke+1:1-25",
            "audioQS": "Ps.75,Isa.40,Luke.1"
        }
    },
    "2021/12/06": {
        "datePretty": "Monday, December 6, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Isaiah 30:1\u201318",
                    "readQS": "Isaiah+30:1-18",
                    "audioQS": "Isa.30"
                },
                {
                    "pretty": "Matthew 14:1\u201312",
                    "readQS": "Matthew+14:1-12",
                    "audioQS": "Matt.14"
                }
            ],
            "readQS": "Psalm+44%3B+Isaiah+30:1-18%3B+Matthew+14:1-12",
            "audioQS": "Ps.44,Isa.30,Matt.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Isaiah 45:14\u2013end",
                    "readQS": "Isaiah+45:14-",
                    "audioQS": "Isa.45"
                },
                {
                    "pretty": "1 Thessalonians 1",
                    "readQS": "1+Thessalonians+1",
                    "audioQS": "1Thess.1"
                }
            ],
            "readQS": "Psalm+144%3B+Isaiah+45:14-%3B+1+Thessalonians+1",
            "audioQS": "Ps.144,Isa.45,1Thess.1"
        }
    },
    "2021/12/07": {
        "datePretty": "Tuesday, December 7, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "Isaiah 30:19\u2013end",
                    "readQS": "Isaiah+30:19-",
                    "audioQS": "Isa.30"
                },
                {
                    "pretty": "Matthew 14:13\u2013end",
                    "readQS": "Matthew+14:13-",
                    "audioQS": "Matt.14"
                }
            ],
            "readQS": "Psalm+56%3B+Isaiah+30:19-%3B+Matthew+14:13-",
            "audioQS": "Ps.56,Isa.30,Matt.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Isaiah 46",
                    "readQS": "Isaiah+46",
                    "audioQS": "Isa.46"
                },
                {
                    "pretty": "1 Thessalonians 2:1\u201312",
                    "readQS": "1+Thessalonians+2:1-12",
                    "audioQS": "1Thess.2"
                }
            ],
            "readQS": "Psalm+11%3B+Isaiah+46%3B+1+Thessalonians+2:1-12",
            "audioQS": "Ps.11,Isa.46,1Thess.2"
        }
    },
    "2021/12/08": {
        "datePretty": "Wednesday, December 8, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "Isaiah 31",
                    "readQS": "Isaiah+31",
                    "audioQS": "Isa.31"
                },
                {
                    "pretty": "Matthew 15:1\u201320",
                    "readQS": "Matthew+15:1-20",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+62%3B+Isaiah+31%3B+Matthew+15:1-20",
            "audioQS": "Ps.62,Isa.31,Matt.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 10",
                    "readQS": "Psalm+10",
                    "audioQS": "Ps.10"
                },
                {
                    "pretty": "Isaiah 47",
                    "readQS": "Isaiah+47",
                    "audioQS": "Isa.47"
                },
                {
                    "pretty": "1 Thessalonians 2:13\u2013end",
                    "readQS": "1+Thessalonians+2:13-",
                    "audioQS": "1Thess.2"
                }
            ],
            "readQS": "Psalm+10%3B+Isaiah+47%3B+1+Thessalonians+2:13-",
            "audioQS": "Ps.10,Isa.47,1Thess.2"
        }
    },
    "2021/12/09": {
        "datePretty": "Thursday, December 9, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 54",
                    "readQS": "Psalm+54",
                    "audioQS": "Ps.54"
                },
                {
                    "pretty": "Isaiah 32",
                    "readQS": "Isaiah+32",
                    "audioQS": "Isa.32"
                },
                {
                    "pretty": "Matthew 15:21\u201328",
                    "readQS": "Matthew+15:21-28",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+54%3B+Isaiah+32%3B+Matthew+15:21-28",
            "audioQS": "Ps.54,Isa.32,Matt.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Isaiah 48:1\u201311",
                    "readQS": "Isaiah+48:1-11",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "1 Thessalonians 3",
                    "readQS": "1+Thessalonians+3",
                    "audioQS": "1Thess.3"
                }
            ],
            "readQS": "Psalm+73%3B+Isaiah+48:1-11%3B+1+Thessalonians+3",
            "audioQS": "Ps.73,Isa.48,1Thess.3"
        }
    },
    "2021/12/10": {
        "datePretty": "Friday, December 10, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Isaiah 33:1\u201322",
                    "readQS": "Isaiah+33:1-22",
                    "audioQS": "Isa.33"
                },
                {
                    "pretty": "Matthew 15:29\u2013end",
                    "readQS": "Matthew+15:29-",
                    "audioQS": "Matt.15"
                }
            ],
            "readQS": "Psalm+86%3B+Isaiah+33:1-22%3B+Matthew+15:29-",
            "audioQS": "Ps.86,Isa.33,Matt.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Isaiah 48:12\u2013end",
                    "readQS": "Isaiah+48:12-",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "1 Thessalonians 4:1\u201312",
                    "readQS": "1+Thessalonians+4:1-12",
                    "audioQS": "1Thess.4"
                }
            ],
            "readQS": "Psalm+90%3B+Isaiah+48:12-%3B+1+Thessalonians+4:1-12",
            "audioQS": "Ps.90,Isa.48,1Thess.4"
        }
    },
    "2021/12/11": {
        "datePretty": "Saturday, December 11, 2021",
        "calendar": "Week of 2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145",
                    "readQS": "Psalm+145",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 35",
                    "readQS": "Isaiah+35",
                    "audioQS": "Isa.35"
                },
                {
                    "pretty": "Matthew 16:1\u201312",
                    "readQS": "Matthew+16:1-12",
                    "audioQS": "Matt.16"
                }
            ],
            "readQS": "Psalm+145%3B+Isaiah+35%3B+Matthew+16:1-12",
            "audioQS": "Ps.145,Isa.35,Matt.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 94",
                    "readQS": "Psalm+94",
                    "audioQS": "Ps.94"
                },
                {
                    "pretty": "Isaiah 49:1\u201313",
                    "readQS": "Isaiah+49:1-13",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "1 Thessalonians 4:13\u2013end",
                    "readQS": "1+Thessalonians+4:13-",
                    "audioQS": "1Thess.4"
                }
            ],
            "readQS": "Psalm+94%3B+Isaiah+49:1-13%3B+1+Thessalonians+4:13-",
            "audioQS": "Ps.94,Isa.49,1Thess.4"
        }
    },
    "2021/12/12": {
        "datePretty": "Sunday, December 12, 2021",
        "calendar": "3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 12,14",
                    "readQS": "Psalm+12,14",
                    "audioQS": "Ps.12,14"
                },
                {
                    "pretty": "Isaiah 25:1\u20139",
                    "readQS": "Isaiah+25:1-9",
                    "audioQS": "Isa.25"
                },
                {
                    "pretty": "1 Corinthians 4:1\u20135",
                    "readQS": "1+Corinthians+4:1-5",
                    "audioQS": "1Cor.4"
                }
            ],
            "readQS": "Psalm+12,14%3B+Isaiah+25:1-9%3B+1+Corinthians+4:1-5",
            "audioQS": "Ps.12,14,Isa.25,1Cor.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50:1\u20136",
                    "readQS": "Psalm+50:1-6",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Isaiah 35",
                    "readQS": "Isaiah+35",
                    "audioQS": "Isa.35"
                },
                {
                    "pretty": "Luke 1:57\u201366",
                    "readQS": "Luke+1:57-66",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+50:1-6%3B+Isaiah+35%3B+Luke+1:57-66",
            "audioQS": "Ps.50,Isa.35,Luke.1"
        }
    },
    "2021/12/13": {
        "datePretty": "Monday, December 13, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Isaiah 38:1\u20138,38:21\u201322",
                    "readQS": "Isaiah+38:1-8,38:21-22",
                    "audioQS": "Isa.38"
                },
                {
                    "pretty": "Matthew 16:13\u2013end",
                    "readQS": "Matthew+16:13-",
                    "audioQS": "Matt.16"
                }
            ],
            "readQS": "Psalm+40%3B+Isaiah+38:1-8,38:21-22%3B+Matthew+16:13-",
            "audioQS": "Ps.40,Isa.38,Matt.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 26",
                    "readQS": "Psalm+26",
                    "audioQS": "Ps.26"
                },
                {
                    "pretty": "Isaiah 49:14\u201325",
                    "readQS": "Isaiah+49:14-25",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "1 Thessalonians 5:1\u201311",
                    "readQS": "1+Thessalonians+5:1-11",
                    "audioQS": "1Thess.5"
                }
            ],
            "readQS": "Psalm+26%3B+Isaiah+49:14-25%3B+1+Thessalonians+5:1-11",
            "audioQS": "Ps.26,Isa.49,1Thess.5"
        }
    },
    "2021/12/14": {
        "datePretty": "Tuesday, December 14, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 70",
                    "readQS": "Psalm+70",
                    "audioQS": "Ps.70"
                },
                {
                    "pretty": "Isaiah 38:9\u201320",
                    "readQS": "Isaiah+38:9-20",
                    "audioQS": "Isa.38"
                },
                {
                    "pretty": "Matthew 17:1\u201313",
                    "readQS": "Matthew+17:1-13",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+70%3B+Isaiah+38:9-20%3B+Matthew+17:1-13",
            "audioQS": "Ps.70,Isa.38,Matt.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Isaiah 50",
                    "readQS": "Isaiah+50",
                    "audioQS": "Isa.50"
                },
                {
                    "pretty": "1 Thessalonians 5:12\u2013end",
                    "readQS": "1+Thessalonians+5:12-",
                    "audioQS": "1Thess.5"
                }
            ],
            "readQS": "Psalm+50%3B+Isaiah+50%3B+1+Thessalonians+5:12-",
            "audioQS": "Ps.50,Isa.50,1Thess.5"
        }
    },
    "2021/12/15": {
        "datePretty": "Wednesday, December 15, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 75",
                    "readQS": "Psalm+75",
                    "audioQS": "Ps.75"
                },
                {
                    "pretty": "Isaiah 39",
                    "readQS": "Isaiah+39",
                    "audioQS": "Isa.39"
                },
                {
                    "pretty": "Matthew 17:14\u201321",
                    "readQS": "Matthew+17:14-21",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+75%3B+Isaiah+39%3B+Matthew+17:14-21",
            "audioQS": "Ps.75,Isa.39,Matt.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 82",
                    "readQS": "Psalm+82",
                    "audioQS": "Ps.82"
                },
                {
                    "pretty": "Isaiah 51:1\u20138",
                    "readQS": "Isaiah+51:1-8",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 1",
                    "readQS": "2+Thessalonians+1",
                    "audioQS": "2Thess.1"
                }
            ],
            "readQS": "Psalm+82%3B+Isaiah+51:1-8%3B+2+Thessalonians+1",
            "audioQS": "Ps.82,Isa.51,2Thess.1"
        }
    },
    "2021/12/16": {
        "datePretty": "Thursday, December 16, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Zephaniah 1:1\u20132:3",
                    "readQS": "Zephaniah+1:1-2:3",
                    "audioQS": "Zeph.1"
                },
                {
                    "pretty": "Matthew 17:22\u2013end",
                    "readQS": "Matthew+17:22-",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+76%3B+Zephaniah+1:1-2:3%3B+Matthew+17:22-",
            "audioQS": "Ps.76,Zeph.1,Matt.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Isaiah 51:9\u201316",
                    "readQS": "Isaiah+51:9-16",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 2",
                    "readQS": "2+Thessalonians+2",
                    "audioQS": "2Thess.2"
                }
            ],
            "readQS": "Psalm+44%3B+Isaiah+51:9-16%3B+2+Thessalonians+2",
            "audioQS": "Ps.44,Isa.51,2Thess.2"
        }
    },
    "2021/12/17": {
        "datePretty": "Friday, December 17, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Zephaniah 3:1\u201313",
                    "readQS": "Zephaniah+3:1-13",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Matthew 18:1\u201320",
                    "readQS": "Matthew+18:1-20",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+98%3B+Zephaniah+3:1-13%3B+Matthew+18:1-20",
            "audioQS": "Ps.98,Zeph.3,Matt.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
                },
                {
                    "pretty": "Isaiah 51:17\u2013end",
                    "readQS": "Isaiah+51:17-",
                    "audioQS": "Isa.51"
                },
                {
                    "pretty": "2 Thessalonians 3",
                    "readQS": "2+Thessalonians+3",
                    "audioQS": "2Thess.3"
                }
            ],
            "readQS": "Psalm+49%3B+Isaiah+51:17-%3B+2+Thessalonians+3",
            "audioQS": "Ps.49,Isa.51,2Thess.3"
        }
    },
    "2021/12/18": {
        "datePretty": "Saturday, December 18, 2021",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Zephaniah 3:14\u2013end",
                    "readQS": "Zephaniah+3:14-",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Matthew 18:21\u2013end",
                    "readQS": "Matthew+18:21-",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+71%3B+Zephaniah+3:14-%3B+Matthew+18:21-",
            "audioQS": "Ps.71,Zeph.3,Matt.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
                },
                {
                    "pretty": "Isaiah 52:1\u201312",
                    "readQS": "Isaiah+52:1-12",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Jude",
                    "readQS": "Jude",
                    "audioQS": "Jude"
                }
            ],
            "readQS": "Psalm+43%3B+Isaiah+52:1-12%3B+Jude",
            "audioQS": "Ps.43,Isa.52,Jude"
        }
    },
    "2021/12/19": {
        "datePretty": "Sunday, December 19, 2021",
        "calendar": "4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Isaiah 32:1\u20138",
                    "readQS": "Isaiah+32:1-8",
                    "audioQS": "Isa.32"
                },
                {
                    "pretty": "Revelation 22:6\u201321",
                    "readQS": "Revelation+22:6-21",
                    "audioQS": "Rev.22"
                }
            ],
            "readQS": "Psalm+144%3B+Isaiah+32:1-8%3B+Revelation+22:6-21",
            "audioQS": "Ps.144,Isa.32,Rev.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 123",
                    "readQS": "Psalm+123",
                    "audioQS": "Ps.123"
                },
                {
                    "pretty": "Isaiah 10:33\u201311:10",
                    "readQS": "Isaiah+10:33-11:10",
                    "audioQS": "Isa.10"
                },
                {
                    "pretty": "Matthew 1:18\u201325",
                    "readQS": "Matthew+1:18-25",
                    "audioQS": "Matt.1"
                }
            ],
            "readQS": "Psalm+123%3B+Isaiah+10:33-11:10%3B+Matthew+1:18-25",
            "audioQS": "Ps.123,Isa.10,Matt.1"
        }
    },
    "2021/12/20": {
        "datePretty": "Monday, December 20, 2021",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Malachi 1:1,1:6\u2013end",
                    "readQS": "Malachi+1:1,1:6-",
                    "audioQS": "Mal.1"
                },
                {
                    "pretty": "Matthew 19:1\u201312",
                    "readQS": "Matthew+19:1-12",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+46%3B+Malachi+1:1,1:6-%3B+Matthew+19:1-12",
            "audioQS": "Ps.46,Mal.1,Matt.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Isaiah 52:13\u2013end",
                    "readQS": "Isaiah+52:13-",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Isaiah 53",
                    "readQS": "Isaiah+53",
                    "audioQS": "Isa.53"
                },
                {
                    "pretty": "2 Peter 1:1\u201315",
                    "readQS": "2+Peter+1:1-15",
                    "audioQS": "2Pet.1"
                }
            ],
            "readQS": "Psalm+4%3B+Isaiah+52:13-%3B+Isaiah+53%3B+2+Peter+1:1-15",
            "audioQS": "Ps.4,Isa.52,Isa.53,2Pet.1"
        }
    },
    "2021/12/21": {
        "datePretty": "Tuesday, December 21, 2021",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Malachi 2:1\u201316",
                    "readQS": "Malachi+2:1-16",
                    "audioQS": "Mal.2"
                },
                {
                    "pretty": "Matthew 19:13\u201315",
                    "readQS": "Matthew+19:13-15",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+121%3B+Malachi+2:1-16%3B+Matthew+19:13-15",
            "audioQS": "Ps.121,Mal.2,Matt.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "Isaiah 54",
                    "readQS": "Isaiah+54",
                    "audioQS": "Isa.54"
                },
                {
                    "pretty": "2 Peter 1:16\u20132:3",
                    "readQS": "2+Peter+1:16-2:3",
                    "audioQS": "2Pet.1"
                }
            ],
            "readQS": "Psalm+84%3B+Isaiah+54%3B+2+Peter+1:16-2:3",
            "audioQS": "Ps.84,Isa.54,2Pet.1"
        }
    },
    "2021/12/22": {
        "datePretty": "Wednesday, December 22, 2021",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 124",
                    "readQS": "Psalm+124",
                    "audioQS": "Ps.124"
                },
                {
                    "pretty": "Malachi 2:17\u20133:12",
                    "readQS": "Malachi+2:17-3:12",
                    "audioQS": "Mal.2"
                },
                {
                    "pretty": "Matthew 19:16\u2013end",
                    "readQS": "Matthew+19:16-",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+124%3B+Malachi+2:17-3:12%3B+Matthew+19:16-",
            "audioQS": "Ps.124,Mal.2,Matt.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Isaiah 55",
                    "readQS": "Isaiah+55",
                    "audioQS": "Isa.55"
                },
                {
                    "pretty": "2 Peter 2:4\u2013end",
                    "readQS": "2+Peter+2:4-",
                    "audioQS": "2Pet.2"
                }
            ],
            "readQS": "Psalm+48%3B+Isaiah+55%3B+2+Peter+2:4-",
            "audioQS": "Ps.48,Isa.55,2Pet.2"
        }
    },
    "2021/12/23": {
        "datePretty": "Thursday, December 23, 2021",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "Malachi 3:13\u2013end",
                    "readQS": "Malachi+3:13-",
                    "audioQS": "Mal.3"
                },
                {
                    "pretty": "Malachi 4",
                    "readQS": "Malachi+4",
                    "audioQS": "Mal.4"
                },
                {
                    "pretty": "Matthew 23:1\u201312",
                    "readQS": "Matthew+23:1-12",
                    "audioQS": "Matt.23"
                }
            ],
            "readQS": "Psalm+130%3B+Malachi+3:13-%3B+Malachi+4%3B+Matthew+23:1-12",
            "audioQS": "Ps.130,Mal.3,Mal.4,Matt.23"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Isaiah 56:1\u20138",
                    "readQS": "Isaiah+56:1-8",
                    "audioQS": "Isa.56"
                },
                {
                    "pretty": "2 Peter 3",
                    "readQS": "2+Peter+3",
                    "audioQS": "2Pet.3"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Isaiah+56:1-8%3B+2+Peter+3",
            "audioQS": "Ps.89,Isa.56,2Pet.3"
        }
    },
    "2021/12/24": {
        "datePretty": "Friday, December 24, 2021",
        "calendar": "Christmas eve",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Nahum 1",
                    "readQS": "Nahum+1",
                    "audioQS": "Nah.1"
                },
                {
                    "pretty": "Matthew 23:13\u201328",
                    "readQS": "Matthew+23:13-28",
                    "audioQS": "Matt.23"
                }
            ],
            "readQS": "Psalm+45%3B+Nahum+1%3B+Matthew+23:13-28",
            "audioQS": "Ps.45,Nah.1,Matt.23"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Zechariah 2",
                    "readQS": "Zechariah+2",
                    "audioQS": "Zech.2"
                },
                {
                    "pretty": "Revelation 1:1\u20138",
                    "readQS": "Revelation+1:1-8",
                    "audioQS": "Rev.1"
                }
            ],
            "readQS": "Psalm+85%3B+Zechariah+2%3B+Revelation+1:1-8",
            "audioQS": "Ps.85,Zech.2,Rev.1"
        }
    },
    "2021/12/25": {
        "datePretty": "Saturday, December 25, 2021",
        "calendar": "Christmas day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Isaiah 62:1\u20135",
                    "readQS": "Isaiah+62:1-5",
                    "audioQS": "Isa.62"
                },
                {
                    "pretty": "Matthew 1:18\u201325",
                    "readQS": "Matthew+1:18-25",
                    "audioQS": "Matt.1"
                }
            ],
            "readQS": "Psalm+110%3B+Isaiah+62:1-5%3B+Matthew+1:18-25",
            "audioQS": "Ps.110,Isa.62,Matt.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 8",
                    "readQS": "Psalm+8",
                    "audioQS": "Ps.8"
                },
                {
                    "pretty": "Isaiah 65:17\u201325",
                    "readQS": "Isaiah+65:17-25",
                    "audioQS": "Isa.65"
                },
                {
                    "pretty": "Philippians 2:5\u201311",
                    "readQS": "Philippians+2:5-11",
                    "audioQS": "Phil.2"
                },
                {
                    "pretty": "Luke 2:1\u201320",
                    "readQS": "Luke+2:1-20",
                    "audioQS": "Luke.2"
                }
            ],
            "readQS": "Psalm+8%3B+Isaiah+65:17-25%3B+Philippians+2:5-11%3B+Luke+2:1-20",
            "audioQS": "Ps.8,Isa.65,Phil.2,Luke.2"
        }
    },
    "2021/12/26": {
        "datePretty": "Sunday, December 26, 2021",
        "calendar": "St Stephen, the first Christian Martyr",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 13",
                    "readQS": "Psalm+13",
                    "audioQS": "Ps.13"
                },
                {
                    "pretty": "Jeremiah 26:12\u201315",
                    "readQS": "Jeremiah+26:12-15",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "Acts 6",
                    "readQS": "Acts+6",
                    "audioQS": "Acts.6"
                }
            ],
            "readQS": "Psalm+13%3B+Jeremiah+26:12-15%3B+Acts+6",
            "audioQS": "Ps.13,Jer.26,Acts.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Genesis 4:1\u201310",
                    "readQS": "Genesis+4:1-10",
                    "audioQS": "Gen.4"
                },
                {
                    "pretty": "Matthew 23:34\u201339",
                    "readQS": "Matthew+23:34-39",
                    "audioQS": "Matt.23"
                }
            ],
            "readQS": "Psalm+86%3B+Genesis+4:1-10%3B+Matthew+23:34-39",
            "audioQS": "Ps.86,Gen.4,Matt.23"
        }
    },
    "2021/12/27": {
        "datePretty": "Monday, December 27, 2021",
        "calendar": "St John the Evangelist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 21",
                    "readQS": "Psalm+21",
                    "audioQS": "Ps.21"
                },
                {
                    "pretty": "Exodus 33:12\u201323",
                    "readQS": "Exodus+33:12-23",
                    "audioQS": "Exod.33"
                },
                {
                    "pretty": "1 John 2:1\u201311",
                    "readQS": "1+John+2:1-11",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+21%3B+Exodus+33:12-23%3B+1+John+2:1-11",
            "audioQS": "Ps.21,Exod.33,1John.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 6:1\u20138",
                    "readQS": "Isaiah+6:1-8",
                    "audioQS": "Isa.6"
                },
                {
                    "pretty": "1 John 5:1\u201312",
                    "readQS": "1+John+5:1-12",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+6:1-8%3B+1+John+5:1-12",
            "audioQS": "Ps.97,Isa.6,1John.5"
        }
    },
    "2021/12/28": {
        "datePretty": "Tuesday, December 28, 2021",
        "calendar": "Holy Innocents",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Genesis 37:13\u201320",
                    "readQS": "Genesis+37:13-20",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Matthew 18:1\u201310",
                    "readQS": "Matthew+18:1-10",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+36%3B+Genesis+37:13-20%3B+Matthew+18:1-10",
            "audioQS": "Ps.36,Gen.37,Matt.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 128",
                    "readQS": "Psalm+128",
                    "audioQS": "Ps.128"
                },
                {
                    "pretty": "Isaiah 49:14\u201325",
                    "readQS": "Isaiah+49:14-25",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Mark 10:13\u201316",
                    "readQS": "Mark+10:13-16",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+128%3B+Isaiah+49:14-25%3B+Mark+10:13-16",
            "audioQS": "Ps.128,Isa.49,Mark.10"
        }
    },
    "2021/12/29": {
        "datePretty": "Wednesday, December 29, 2021",
        "calendar": "Week of 1st Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Jonah 1",
                    "readQS": "Jonah+1",
                    "audioQS": "Jonah.1"
                },
                {
                    "pretty": "Colossians 1:1\u201314",
                    "readQS": "Colossians+1:1-14",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+19%3B+Jonah+1%3B+Colossians+1:1-14",
            "audioQS": "Ps.19,Jonah.1,Col.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Isaiah 57:15\u2013end",
                    "readQS": "Isaiah+57:15-",
                    "audioQS": "Isa.57"
                },
                {
                    "pretty": "John 1:1\u201318",
                    "readQS": "John+1:1-18",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+132%3B+Isaiah+57:15-%3B+John+1:1-18",
            "audioQS": "Ps.132,Isa.57,John.1"
        }
    },
    "2021/12/30": {
        "datePretty": "Thursday, December 30, 2021",
        "calendar": "Week of 1st Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Jonah 2",
                    "readQS": "Jonah+2",
                    "audioQS": "Jonah.2"
                },
                {
                    "pretty": "Colossians 1:15\u201323",
                    "readQS": "Colossians+1:15-23",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+113%3B+Jonah+2%3B+Colossians+1:15-23",
            "audioQS": "Ps.113,Jonah.2,Col.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Isaiah 59:1\u201315a",
                    "readQS": "Isaiah+59:1-15a",
                    "audioQS": "Isa.59"
                },
                {
                    "pretty": "John 1:19\u201328",
                    "readQS": "John+1:19-28",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+65%3B+Isaiah+59:1-15a%3B+John+1:19-28",
            "audioQS": "Ps.65,Isa.59,John.1"
        }
    },
    "2021/12/31": {
        "datePretty": "Friday, December 31, 2021",
        "calendar": "Week of 1st Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 102",
                    "readQS": "Psalm+102",
                    "audioQS": "Ps.102"
                },
                {
                    "pretty": "Jonah 3",
                    "readQS": "Jonah+3",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "Jonah 4",
                    "readQS": "Jonah+4",
                    "audioQS": "Jonah.4"
                },
                {
                    "pretty": "Colossians 1:24\u20132:7",
                    "readQS": "Colossians+1:24-2:7",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+102%3B+Jonah+3%3B+Jonah+4%3B+Colossians+1:24-2:7",
            "audioQS": "Ps.102,Jonah.3,Jonah.4,Col.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "Isaiah 59:15b\u2013end",
                    "readQS": "Isaiah+59:15b-",
                    "audioQS": "Isa.59"
                },
                {
                    "pretty": "John 1:29\u201334",
                    "readQS": "John+1:29-34",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+90%3B+Isaiah+59:15b-%3B+John+1:29-34",
            "audioQS": "Ps.90,Isa.59,John.1"
        }
    },
    "2022/01/01": {
        "datePretty": "Saturday, January 1, 2022",
        "calendar": "The naming of Jesus",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 103",
                    "readQS": "Psalm+103",
                    "audioQS": "Ps.103"
                },
                {
                    "pretty": "Genesis 17:1\u201313",
                    "readQS": "Genesis+17:1-13",
                    "audioQS": "Gen.17"
                },
                {
                    "pretty": "Romans 2:17\u201329",
                    "readQS": "Romans+2:17-29",
                    "audioQS": "Rom.2"
                }
            ],
            "readQS": "Psalm+103%3B+Genesis+17:1-13%3B+Romans+2:17-29",
            "audioQS": "Ps.103,Gen.17,Rom.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Deuteronomy 30:1\u201320",
                    "readQS": "Deuteronomy+30:1-20",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "Acts 3:1\u201316",
                    "readQS": "Acts+3:1-16",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+115%3B+Deuteronomy+30:1-20%3B+Acts+3:1-16",
            "audioQS": "Ps.115,Deut.30,Acts.3"
        }
    },
    "2022/01/02": {
        "datePretty": "Sunday, January 2, 2022",
        "calendar": "2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 87",
                    "readQS": "Psalm+87",
                    "audioQS": "Ps.87"
                },
                {
                    "pretty": "Isaiah 12",
                    "readQS": "Isaiah+12",
                    "audioQS": "Isa.12"
                },
                {
                    "pretty": "1 Thes 2:1\u20138",
                    "readQS": "1+Thes+2:1-8",
                    "audioQS": "1 Thes 2"
                }
            ],
            "readQS": "Psalm+87%3B+Isaiah+12%3B+1+Thes+2:1-8",
            "audioQS": "Ps.87,Isa.12,1 Thes 2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "1 Samuel 1:20\u2013end",
                    "readQS": "1+Samuel+1:20-",
                    "audioQS": "1Sam.1"
                },
                {
                    "pretty": "1 John 4:7\u201316",
                    "readQS": "1+John+4:7-16",
                    "audioQS": "1John.4"
                }
            ],
            "readQS": "Psalm+135%3B+1+Samuel+1:20-%3B+1+John+4:7-16",
            "audioQS": "Ps.135,1Sam.1,1John.4"
        }
    },
    "2022/01/03": {
        "datePretty": "Monday, January 3, 2022",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
                },
                {
                    "pretty": "Ruth 2",
                    "readQS": "Ruth+2",
                    "audioQS": "Ruth.2"
                },
                {
                    "pretty": "Colossians 3:1\u201311",
                    "readQS": "Colossians+3:1-11",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+127%3B+Ruth+2%3B+Colossians+3:1-11",
            "audioQS": "Ps.127,Ruth.2,Col.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
                },
                {
                    "pretty": "Isaiah 60:13\u2013end",
                    "readQS": "Isaiah+60:13-",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "John 1:43\u2013end",
                    "readQS": "John+1:43-",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+2%3B+Isaiah+60:13-%3B+John+1:43-",
            "audioQS": "Ps.2,Isa.60,John.1"
        }
    },
    "2022/01/04": {
        "datePretty": "Tuesday, January 4, 2022",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Ruth 3",
                    "readQS": "Ruth+3",
                    "audioQS": "Ruth.3"
                },
                {
                    "pretty": "Colossians 3:12\u20134:1",
                    "readQS": "Colossians+3:12-4:1",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Ruth+3%3B+Colossians+3:12-4:1",
            "audioQS": "Ps.89,Ruth.3,Col.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 87",
                    "readQS": "Psalm+87",
                    "audioQS": "Ps.87"
                },
                {
                    "pretty": "Isaiah 61",
                    "readQS": "Isaiah+61",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "John 2:1\u201312",
                    "readQS": "John+2:1-12",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+87%3B+Isaiah+61%3B+John+2:1-12",
            "audioQS": "Ps.87,Isa.61,John.2"
        }
    },
    "2022/01/05": {
        "datePretty": "Wednesday, January 5, 2022",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Ruth 4:1\u201317",
                    "readQS": "Ruth+4:1-17",
                    "audioQS": "Ruth.4"
                },
                {
                    "pretty": "Colossians 4:2\u2013end",
                    "readQS": "Colossians+4:2-",
                    "audioQS": "Col.4"
                }
            ],
            "readQS": "Psalm+48%3B+Ruth+4:1-17%3B+Colossians+4:2-",
            "audioQS": "Ps.48,Ruth.4,Col.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 49:1\u201313",
                    "readQS": "Isaiah+49:1-13",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "John 4:7\u201326",
                    "readQS": "John+4:7-26",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+49:1-13%3B+John+4:7-26",
            "audioQS": "Ps.97,Isa.49,John.4"
        }
    },
    "2022/01/06": {
        "datePretty": "Thursday, January 6, 2022",
        "calendar": "The Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Jeremiah 31:7\u201314",
                    "readQS": "Jeremiah+31:7-14",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "John 1:29\u201334",
                    "readQS": "John+1:29-34",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+132%3B+Jeremiah+31:7-14%3B+John+1:29-34",
            "audioQS": "Ps.132,Jer.31,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 98,100",
                    "readQS": "Psalm+98,100",
                    "audioQS": "Ps.98,100"
                },
                {
                    "pretty": "Isaiah 60:1\u20139",
                    "readQS": "Isaiah+60:1-9",
                    "audioQS": "Isa.60"
                },
                {
                    "pretty": "John 2:1\u201311",
                    "readQS": "John+2:1-11",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+98,100%3B+Isaiah+60:1-9%3B+John+2:1-11",
            "audioQS": "Ps.98,100,Isa.60,John.2"
        }
    },
    "2022/01/07": {
        "datePretty": "Friday, January 7, 2022",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 99",
                    "readQS": "Psalm+99",
                    "audioQS": "Ps.99"
                },
                {
                    "pretty": "Jeremiah 23:1\u20138",
                    "readQS": "Jeremiah+23:1-8",
                    "audioQS": "Jer.23"
                },
                {
                    "pretty": "Matthew 20:1\u201316",
                    "readQS": "Matthew+20:1-16",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+99%3B+Jeremiah+23:1-8%3B+Matthew+20:1-16",
            "audioQS": "Ps.99,Jer.23,Matt.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Isaiah 63:7\u2013end",
                    "readQS": "Isaiah+63:7-",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "1 John 3",
                    "readQS": "1+John+3",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+118%3B+Isaiah+63:7-%3B+1+John+3",
            "audioQS": "Ps.118,Isa.63,1John.3"
        }
    },
    "2022/01/08": {
        "datePretty": "Saturday, January 8, 2022",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Jeremiah 30:1\u201317",
                    "readQS": "Jeremiah+30:1-17",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "Matthew 20:17\u201328",
                    "readQS": "Matthew+20:17-28",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+46%3B+Jeremiah+30:1-17%3B+Matthew+20:17-28",
            "audioQS": "Ps.46,Jer.30,Matt.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Isaiah 61",
                    "readQS": "Isaiah+61",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "Titus 2:11\u201314",
                    "readQS": "Titus+2:11-14",
                    "audioQS": "Titus.2"
                },
                {
                    "pretty": "Titus 3:4\u20137",
                    "readQS": "Titus+3:4-7",
                    "audioQS": "Titus.3"
                }
            ],
            "readQS": "Psalm+36%3B+Isaiah+61%3B+Titus+2:11-14%3BTitus+3:4-7",
            "audioQS": "Ps.36,Isa.61,Titus.2,Titus.3"
        }
    },
    "2022/01/09": {
        "datePretty": "Sunday, January 9, 2022",
        "calendar": "The Baptism of the Lord",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u201329",
                    "readQS": "Psalm+89:19-29",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Isaiah 42:1\u20139",
                    "readQS": "Isaiah+42:1-9",
                    "audioQS": "Isa.42"
                },
                {
                    "pretty": "Acts 19:1\u20137",
                    "readQS": "Acts+19:1-7",
                    "audioQS": "Acts.19"
                }
            ],
            "readQS": "Psalm+89:19-29%3B+Isaiah+42:1-9%3B+Acts+19:1-7",
            "audioQS": "Ps.89,Isa.42,Acts.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46,47",
                    "readQS": "Psalm+46,47",
                    "audioQS": "Ps.46,47"
                },
                {
                    "pretty": "Isaiah 55:1\u201311",
                    "readQS": "Isaiah+55:1-11",
                    "audioQS": "Isa.55"
                },
                {
                    "pretty": "Romans 6:1\u201311",
                    "readQS": "Romans+6:1-11",
                    "audioQS": "Rom.6"
                }
            ],
            "readQS": "Psalm+46,47%3B+Isaiah+55:1-11%3B+Romans+6:1-11",
            "audioQS": "Ps.46,47,Isa.55,Rom.6"
        }
    },
    "2022/01/10": {
        "datePretty": "Monday, January 10, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
                },
                {
                    "pretty": "Genesis 1:1\u201319",
                    "readQS": "Genesis+1:1-19",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 21:1\u201317",
                    "readQS": "Matthew+21:1-17",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+2%3B+Genesis+1:1-19%3B+Matthew+21:1-17",
            "audioQS": "Ps.2,Gen.1,Matt.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Amos 1",
                    "readQS": "Amos+1",
                    "audioQS": "Amos.1"
                },
                {
                    "pretty": "1 Corinthians 1:1\u201317",
                    "readQS": "1+Corinthians+1:1-17",
                    "audioQS": "1Cor.1"
                }
            ],
            "readQS": "Psalm+34%3B+Amos+1%3B+1+Corinthians+1:1-17",
            "audioQS": "Ps.34,Amos.1,1Cor.1"
        }
    },
    "2022/01/11": {
        "datePretty": "Tuesday, January 11, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Genesis 1:20\u20132:3",
                    "readQS": "Genesis+1:20-2:3",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 21:18\u201332",
                    "readQS": "Matthew+21:18-32",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+9%3B+Genesis+1:20-2:3%3B+Matthew+21:18-32",
            "audioQS": "Ps.9,Gen.1,Matt.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Amos 2",
                    "readQS": "Amos+2",
                    "audioQS": "Amos.2"
                },
                {
                    "pretty": "1 Corinthians 1:18\u2013end",
                    "readQS": "1+Corinthians+1:18-",
                    "audioQS": "1Cor.1"
                }
            ],
            "readQS": "Psalm+45%3B+Amos+2%3B+1+Corinthians+1:18-",
            "audioQS": "Ps.45,Amos.2,1Cor.1"
        }
    },
    "2022/01/12": {
        "datePretty": "Wednesday, January 12, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 20",
                    "readQS": "Psalm+20",
                    "audioQS": "Ps.20"
                },
                {
                    "pretty": "Genesis 2:4\u2013end",
                    "readQS": "Genesis+2:4-",
                    "audioQS": "Gen.2"
                },
                {
                    "pretty": "Matthew 21:33\u2013end",
                    "readQS": "Matthew+21:33-",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+20%3B+Genesis+2:4-%3B+Matthew+21:33-",
            "audioQS": "Ps.20,Gen.2,Matt.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Amos 3",
                    "readQS": "Amos+3",
                    "audioQS": "Amos.3"
                },
                {
                    "pretty": "1 Corinthians 2",
                    "readQS": "1+Corinthians+2",
                    "audioQS": "1Cor.2"
                }
            ],
            "readQS": "Psalm+47%3B+Amos+3%3B+1+Corinthians+2",
            "audioQS": "Ps.47,Amos.3,1Cor.2"
        }
    },
    "2022/01/13": {
        "datePretty": "Thursday, January 13, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 21",
                    "readQS": "Psalm+21",
                    "audioQS": "Ps.21"
                },
                {
                    "pretty": "Genesis 3",
                    "readQS": "Genesis+3",
                    "audioQS": "Gen.3"
                },
                {
                    "pretty": "Matthew 22:1\u201314",
                    "readQS": "Matthew+22:1-14",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+21%3B+Genesis+3%3B+Matthew+22:1-14",
            "audioQS": "Ps.21,Gen.3,Matt.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Amos 4",
                    "readQS": "Amos+4",
                    "audioQS": "Amos.4"
                },
                {
                    "pretty": "1 Corinthians 3",
                    "readQS": "1+Corinthians+3",
                    "audioQS": "1Cor.3"
                }
            ],
            "readQS": "Psalm+61%3B+Amos+4%3B+1+Corinthians+3",
            "audioQS": "Ps.61,Amos.4,1Cor.3"
        }
    },
    "2022/01/14": {
        "datePretty": "Friday, January 14, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Genesis 4:1\u201316,4:25\u201326",
                    "readQS": "Genesis+4:1-16,4:25-26",
                    "audioQS": "Gen.4"
                },
                {
                    "pretty": "Matthew 22:15\u201333",
                    "readQS": "Matthew+22:15-33",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+67%3B+Genesis+4:1-16,4:25-26%3B+Matthew+22:15-33",
            "audioQS": "Ps.67,Gen.4,Matt.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Amos 5:1\u201317",
                    "readQS": "Amos+5:1-17",
                    "audioQS": "Amos.5"
                },
                {
                    "pretty": "1 Corinthians 4",
                    "readQS": "1+Corinthians+4",
                    "audioQS": "1Cor.4"
                }
            ],
            "readQS": "Psalm+68%3B+Amos+5:1-17%3B+1+Corinthians+4",
            "audioQS": "Ps.68,Amos.5,1Cor.4"
        }
    },
    "2022/01/15": {
        "datePretty": "Saturday, January 15, 2022",
        "calendar": "Week of 1st Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Genesis 6:1\u201310",
                    "readQS": "Genesis+6:1-10",
                    "audioQS": "Gen.6"
                },
                {
                    "pretty": "Matthew 22:34\u2013end",
                    "readQS": "Matthew+22:34-",
                    "audioQS": "Matt.22"
                }
            ],
            "readQS": "Psalm+33%3B+Genesis+6:1-10%3B+Matthew+22:34-",
            "audioQS": "Ps.33,Gen.6,Matt.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Amos 5:18\u2013end",
                    "readQS": "Amos+5:18-",
                    "audioQS": "Amos.5"
                },
                {
                    "pretty": "1 Corinthians 5",
                    "readQS": "1+Corinthians+5",
                    "audioQS": "1Cor.5"
                }
            ],
            "readQS": "Psalm+85%3B+Amos+5:18-%3B+1+Corinthians+5",
            "audioQS": "Ps.85,Amos.5,1Cor.5"
        }
    },
    "2022/01/16": {
        "datePretty": "Sunday, January 16, 2022",
        "calendar": "2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145:1\u201313",
                    "readQS": "Psalm+145:1-13",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Isaiah 49:1\u20137",
                    "readQS": "Isaiah+49:1-7",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Acts 16:11\u201315",
                    "readQS": "Acts+16:11-15",
                    "audioQS": "Acts.16"
                }
            ],
            "readQS": "Psalm+145:1-13%3B+Isaiah+49:1-7%3B+Acts+16:11-15",
            "audioQS": "Ps.145,Isa.49,Acts.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "1 Samuel 3:1\u201320",
                    "readQS": "1+Samuel+3:1-20",
                    "audioQS": "1Sam.3"
                },
                {
                    "pretty": "Ephesians 4:1\u201316",
                    "readQS": "Ephesians+4:1-16",
                    "audioQS": "Eph.4"
                }
            ],
            "readQS": "Psalm+96%3B+1+Samuel+3:1-20%3B+Ephesians+4:1-16",
            "audioQS": "Ps.96,1Sam.3,Eph.4"
        }
    },
    "2022/01/17": {
        "datePretty": "Monday, January 17, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
                },
                {
                    "pretty": "Genesis 6:11\u20137:10",
                    "readQS": "Genesis+6:11-7:10",
                    "audioQS": "Gen.6"
                },
                {
                    "pretty": "Matthew 24:1\u201314",
                    "readQS": "Matthew+24:1-14",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+146%3B+Genesis+6:11-7:10%3B+Matthew+24:1-14",
            "audioQS": "Ps.146,Gen.6,Matt.24"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Amos 6",
                    "readQS": "Amos+6",
                    "audioQS": "Amos.6"
                },
                {
                    "pretty": "1 Corinthians 6:1\u201311",
                    "readQS": "1+Corinthians+6:1-11",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+71%3B+Amos+6%3B+1+Corinthians+6:1-11",
            "audioQS": "Ps.71,Amos.6,1Cor.6"
        }
    },
    "2022/01/18": {
        "datePretty": "Tuesday, January 18, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Genesis 7:11\u2013end",
                    "readQS": "Genesis+7:11-",
                    "audioQS": "Gen.7"
                },
                {
                    "pretty": "Matthew 24:15\u201328",
                    "readQS": "Matthew+24:15-28",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+132%3B+Genesis+7:11-%3B+Matthew+24:15-28",
            "audioQS": "Ps.132,Gen.7,Matt.24"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Amos 7",
                    "readQS": "Amos+7",
                    "audioQS": "Amos.7"
                },
                {
                    "pretty": "1 Corinthians 6:12\u2013end",
                    "readQS": "1+Corinthians+6:12-",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+89:1-37%3B+Amos+7%3B+1+Corinthians+6:12-",
            "audioQS": "Ps.89,Amos.7,1Cor.6"
        }
    },
    "2022/01/19": {
        "datePretty": "Wednesday, January 19, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 81",
                    "readQS": "Psalm+81",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Genesis 8:1\u201314",
                    "readQS": "Genesis+8:1-14",
                    "audioQS": "Gen.8"
                },
                {
                    "pretty": "Matthew 24:29\u2013end",
                    "readQS": "Matthew+24:29-",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+81%3B+Genesis+8:1-14%3B+Matthew+24:29-",
            "audioQS": "Ps.81,Gen.8,Matt.24"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Amos 8",
                    "readQS": "Amos+8",
                    "audioQS": "Amos.8"
                },
                {
                    "pretty": "1 Corinthians 7:1\u201324",
                    "readQS": "1+Corinthians+7:1-24",
                    "audioQS": "1Cor.7"
                }
            ],
            "readQS": "Psalm+97%3B+Amos+8%3B+1+Corinthians+7:1-24",
            "audioQS": "Ps.97,Amos.8,1Cor.7"
        }
    },
    "2022/01/20": {
        "datePretty": "Thursday, January 20, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Genesis 8:15\u20139:7",
                    "readQS": "Genesis+8:15-9:7",
                    "audioQS": "Gen.8"
                },
                {
                    "pretty": "Matthew 25:1\u201313",
                    "readQS": "Matthew+25:1-13",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+76%3B+Genesis+8:15-9:7%3B+Matthew+25:1-13",
            "audioQS": "Ps.76,Gen.8,Matt.25"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Amos 9",
                    "readQS": "Amos+9",
                    "audioQS": "Amos.9"
                },
                {
                    "pretty": "1 Corinthians 7:25\u2013end",
                    "readQS": "1+Corinthians+7:25-",
                    "audioQS": "1Cor.7"
                }
            ],
            "readQS": "Psalm+111%3B+Amos+9%3B+1+Corinthians+7:25-",
            "audioQS": "Ps.111,Amos.9,1Cor.7"
        }
    },
    "2022/01/21": {
        "datePretty": "Friday, January 21, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 27",
                    "readQS": "Psalm+27",
                    "audioQS": "Ps.27"
                },
                {
                    "pretty": "Genesis 9:8\u201319",
                    "readQS": "Genesis+9:8-19",
                    "audioQS": "Gen.9"
                },
                {
                    "pretty": "Matthew 25:14\u201330",
                    "readQS": "Matthew+25:14-30",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+27%3B+Genesis+9:8-19%3B+Matthew+25:14-30",
            "audioQS": "Ps.27,Gen.9,Matt.25"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Hosea 1:1\u20132:1",
                    "readQS": "Hosea+1:1-2:1",
                    "audioQS": "Hos.1"
                },
                {
                    "pretty": "1 Corinthians 8",
                    "readQS": "1+Corinthians+8",
                    "audioQS": "1Cor.8"
                }
            ],
            "readQS": "Psalm+73%3B+Hosea+1:1-2:1%3B+1+Corinthians+8",
            "audioQS": "Ps.73,Hos.1,1Cor.8"
        }
    },
    "2022/01/22": {
        "datePretty": "Saturday, January 22, 2022",
        "calendar": "Week of 2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 122",
                    "readQS": "Psalm+122",
                    "audioQS": "Ps.122"
                },
                {
                    "pretty": "Genesis 11:1\u20139",
                    "readQS": "Genesis+11:1-9",
                    "audioQS": "Gen.11"
                },
                {
                    "pretty": "Matthew 25:31\u2013end",
                    "readQS": "Matthew+25:31-",
                    "audioQS": "Matt.25"
                }
            ],
            "readQS": "Psalm+122%3B+Genesis+11:1-9%3B+Matthew+25:31-",
            "audioQS": "Ps.122,Gen.11,Matt.25"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 61",
                    "readQS": "Psalm+61",
                    "audioQS": "Ps.61"
                },
                {
                    "pretty": "Hosea 2:2\u201317",
                    "readQS": "Hosea+2:2-17",
                    "audioQS": "Hos.2"
                },
                {
                    "pretty": "1 Corinthians 9:1\u201314",
                    "readQS": "1+Corinthians+9:1-14",
                    "audioQS": "1Cor.9"
                }
            ],
            "readQS": "Psalm+61%3B+Hosea+2:2-17%3B+1+Corinthians+9:1-14",
            "audioQS": "Ps.61,Hos.2,1Cor.9"
        }
    },
    "2022/01/23": {
        "datePretty": "Sunday, January 23, 2022",
        "calendar": "3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Deuteronomy 30:11\u201315",
                    "readQS": "Deuteronomy+30:11-15",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "3 John 1:5\u20138",
                    "readQS": "3+John+1:5-8",
                    "audioQS": "3John.1"
                }
            ],
            "readQS": "Psalm+113%3B+Deuteronomy+30:11-15%3B+3+John+1:5-8",
            "audioQS": "Ps.113,Deut.30,3John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Numbers 9:15\u201323",
                    "readQS": "Numbers+9:15-23",
                    "audioQS": "Num.9"
                },
                {
                    "pretty": "1 Corinthians 7:17\u201324",
                    "readQS": "1+Corinthians+7:17-24",
                    "audioQS": "1Cor.7"
                }
            ],
            "readQS": "Psalm+33%3B+Numbers+9:15-23%3B+1+Corinthians+7:17-24",
            "audioQS": "Ps.33,Num.9,1Cor.7"
        }
    },
    "2022/01/24": {
        "datePretty": "Monday, January 24, 2022",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 108",
                    "readQS": "Psalm+108",
                    "audioQS": "Ps.108"
                },
                {
                    "pretty": "Genesis 11:27\u201312:9",
                    "readQS": "Genesis+11:27-12:9",
                    "audioQS": "Gen.11"
                },
                {
                    "pretty": "Matthew 26:1\u201316",
                    "readQS": "Matthew+26:1-16",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+108%3B+Genesis+11:27-12:9%3B+Matthew+26:1-16",
            "audioQS": "Ps.108,Gen.11,Matt.26"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 149",
                    "readQS": "Psalm+149",
                    "audioQS": "Ps.149"
                },
                {
                    "pretty": "Isaiah 49:1\u201313",
                    "readQS": "Isaiah+49:1-13",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Acts 22:3\u201316",
                    "readQS": "Acts+22:3-16",
                    "audioQS": "Acts.22"
                }
            ],
            "readQS": "Psalm+149%3B+Isaiah+49:1-13%3B+Acts+22:3-16",
            "audioQS": "Ps.149,Isa.49,Acts.22"
        }
    },
    "2022/01/25": {
        "datePretty": "Tuesday, January 25, 2022",
        "calendar": "The Conversion of Saint Paul",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 66,147:12\u201320",
                    "readQS": "Psalm+66,147:12-20",
                    "audioQS": "Ps.66,147"
                },
                {
                    "pretty": "Ezekiel 3:22\u201327",
                    "readQS": "Ezekiel+3:22-27",
                    "audioQS": "Ezek.3"
                },
                {
                    "pretty": "Philippians 3:1\u201314",
                    "readQS": "Philippians+3:1-14",
                    "audioQS": "Phil.3"
                }
            ],
            "readQS": "Psalm+66,147:12-20%3B+Ezekiel+3:22-27%3B+Philippians+3:1-14",
            "audioQS": "Ps.66,147,Ezek.3,Phil.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:41\u201356",
                    "readQS": "Psalm+119:41-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Isaiah 56:1\u20138",
                    "readQS": "Isaiah+56:1-8",
                    "audioQS": "Isa.56"
                },
                {
                    "pretty": "Colossians 1:24\u2013end",
                    "readQS": "Colossians+1:24-",
                    "audioQS": "Col.1"
                },
                {
                    "pretty": "Colossians 2:1\u20137",
                    "readQS": "Colossians+2:1-7",
                    "audioQS": "Col.2"
                },
                {
                    "pretty": "",
                    "readQS": "",
                    "audioQS": ""
                }
            ],
            "readQS": "Psalm+119:41-56%3B+Isaiah+56:1-8%3B+Colossians+1:24-%3B+Colossians+2:1-7%3B",
            "audioQS": "Ps.119,Isa.56,Col.1,Col.2,"
        }
    },
    "2022/01/26": {
        "datePretty": "Wednesday, January 26, 2022",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Genesis 14",
                    "readQS": "Genesis+14",
                    "audioQS": "Gen.14"
                },
                {
                    "pretty": "Matthew 26:36\u201346",
                    "readQS": "Matthew+26:36-46",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+46%3B+Genesis+14%3B+Matthew+26:36-46",
            "audioQS": "Ps.46,Gen.14,Matt.26"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 29",
                    "readQS": "Psalm+29",
                    "audioQS": "Ps.29"
                },
                {
                    "pretty": "Hosea 5:1\u20137",
                    "readQS": "Hosea+5:1-7",
                    "audioQS": "Hos.5"
                },
                {
                    "pretty": "1 Corinthians 10:14\u201311:1",
                    "readQS": "1+Corinthians+10:14-11:1",
                    "audioQS": "1Cor.10"
                }
            ],
            "readQS": "Psalm+29%3B+Hosea+5:1-7%3B+1+Corinthians+10:14-11:1",
            "audioQS": "Ps.29,Hos.5,1Cor.10"
        }
    },
    "2022/01/27": {
        "datePretty": "Thursday, January 27, 2022",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "Genesis 15",
                    "readQS": "Genesis+15",
                    "audioQS": "Gen.15"
                },
                {
                    "pretty": "Matthew 26:47\u201356",
                    "readQS": "Matthew+26:47-56",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+47%3B+Genesis+15%3B+Matthew+26:47-56",
            "audioQS": "Ps.47,Gen.15,Matt.26"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
                },
                {
                    "pretty": "Hosea 5:8\u20136:6",
                    "readQS": "Hosea+5:8-6:6",
                    "audioQS": "Hos.5"
                },
                {
                    "pretty": "1 Corinthians 11:2\u201316",
                    "readQS": "1+Corinthians+11:2-16",
                    "audioQS": "1Cor.11"
                }
            ],
            "readQS": "Psalm+24%3B+Hosea+5:8-6:6%3B+1+Corinthians+11:2-16",
            "audioQS": "Ps.24,Hos.5,1Cor.11"
        }
    },
    "2022/01/28": {
        "datePretty": "Friday, January 28, 2022",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 65",
                    "readQS": "Psalm+65",
                    "audioQS": "Ps.65"
                },
                {
                    "pretty": "Genesis 16",
                    "readQS": "Genesis+16",
                    "audioQS": "Gen.16"
                },
                {
                    "pretty": "Matthew 26:57\u2013end",
                    "readQS": "Matthew+26:57-",
                    "audioQS": "Matt.26"
                }
            ],
            "readQS": "Psalm+65%3B+Genesis+16%3B+Matthew+26:57-",
            "audioQS": "Ps.65,Gen.16,Matt.26"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "Hosea 6:7\u20137:2",
                    "readQS": "Hosea+6:7-7:2",
                    "audioQS": "Hos.6"
                },
                {
                    "pretty": "1 Corinthians 11:17\u2013end",
                    "readQS": "1+Corinthians+11:17-",
                    "audioQS": "1Cor.11"
                }
            ],
            "readQS": "Psalm+67%3B+Hosea+6:7-7:2%3B+1+Corinthians+11:17-",
            "audioQS": "Ps.67,Hos.6,1Cor.11"
        }
    },
    "2022/01/29": {
        "datePretty": "Saturday, January 29, 2022",
        "calendar": "Week of 3rd Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Genesis 17:1\u201322",
                    "readQS": "Genesis+17:1-22",
                    "audioQS": "Gen.17"
                },
                {
                    "pretty": "Matthew 27:1\u201310",
                    "readQS": "Matthew+27:1-10",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+68%3B+Genesis+17:1-22%3B+Matthew+27:1-10",
            "audioQS": "Ps.68,Gen.17,Matt.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Hosea 8",
                    "readQS": "Hosea+8",
                    "audioQS": "Hos.8"
                },
                {
                    "pretty": "1 Corinthians 12:1\u201311",
                    "readQS": "1+Corinthians+12:1-11",
                    "audioQS": "1Cor.12"
                }
            ],
            "readQS": "Psalm+72%3B+Hosea+8%3B+1+Corinthians+12:1-11",
            "audioQS": "Ps.72,Hos.8,1Cor.12"
        }
    },
    "2022/01/30": {
        "datePretty": "Sunday, January 30, 2022",
        "calendar": "4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71:1\u20136,15\u201317",
                    "readQS": "Psalm+71:1-6,15-17",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Micah 6:1\u20138",
                    "readQS": "Micah+6:1-8",
                    "audioQS": "Mic.6"
                },
                {
                    "pretty": "1 Corinthians 6:12\u201320",
                    "readQS": "1+Corinthians+6:12-20",
                    "audioQS": "1Cor.6"
                }
            ],
            "readQS": "Psalm+71:1-6,15-17%3B+Micah+6:1-8%3B+1+Corinthians+6:12-20",
            "audioQS": "Ps.71,Mic.6,1Cor.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "1 Chronicles on 29:6\u201319",
                    "readQS": "1+Chronicles+on+29:6-19",
                    "audioQS": "1Chr.on.29"
                },
                {
                    "pretty": "Acts 7:44\u201350",
                    "readQS": "Acts+7:44-50",
                    "audioQS": "Acts.7"
                }
            ],
            "readQS": "Psalm+34%3B+1+Chronicles+on+29:6-19%3B+Acts+7:44-50",
            "audioQS": "Ps.34,1Chr.on.29,Acts.7"
        }
    },
    "2022/01/31": {
        "datePretty": "Monday, January 31, 2022",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Genesis 18:1\u201315",
                    "readQS": "Genesis+18:1-15",
                    "audioQS": "Gen.18"
                },
                {
                    "pretty": "Matthew 27:11\u201326",
                    "readQS": "Matthew+27:11-26",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+57%3B+Genesis+18:1-15%3B+Matthew+27:11-26",
            "audioQS": "Ps.57,Gen.18,Matt.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 20",
                    "readQS": "Psalm+20",
                    "audioQS": "Ps.20"
                },
                {
                    "pretty": "Hosea 9",
                    "readQS": "Hosea+9",
                    "audioQS": "Hos.9"
                },
                {
                    "pretty": "1 Corinthians 12:12\u2013end",
                    "readQS": "1+Corinthians+12:12-",
                    "audioQS": "1Cor.12"
                }
            ],
            "readQS": "Psalm+20%3B+Hosea+9%3B+1+Corinthians+12:12-",
            "audioQS": "Ps.20,Hos.9,1Cor.12"
        }
    },
    "2022/02/01": {
        "datePretty": "Tuesday, February 1, 2022",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 93",
                    "readQS": "Psalm+93",
                    "audioQS": "Ps.93"
                },
                {
                    "pretty": "Genesis 18:16\u2013end",
                    "readQS": "Genesis+18:16-",
                    "audioQS": "Gen.18"
                },
                {
                    "pretty": "Matthew 27:27\u201344",
                    "readQS": "Matthew+27:27-44",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+93%3B+Genesis+18:16-%3B+Matthew+27:27-44",
            "audioQS": "Ps.93,Gen.18,Matt.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "1 Samuel 1:19b\u201328",
                    "readQS": "1+Samuel+1:19b-28",
                    "audioQS": "1Sam.1"
                },
                {
                    "pretty": "Hebrews 4:11\u201316",
                    "readQS": "Hebrews+4:11-16",
                    "audioQS": "Heb.4"
                }
            ],
            "readQS": "Psalm+118%3B+1+Samuel+1:19b-28%3B+Hebrews+4:11-16",
            "audioQS": "Ps.118,1Sam.1,Heb.4"
        }
    },
    "2022/02/02": {
        "datePretty": "Wednesday, February 2, 2022",
        "calendar": "Presentation of Jesus at the Temple",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48,146",
                    "readQS": "Psalm+48,146",
                    "audioQS": "Ps.48,146"
                },
                {
                    "pretty": "Exodus 13:1\u201316",
                    "readQS": "Exodus+13:1-16",
                    "audioQS": "Exod.13"
                },
                {
                    "pretty": "Rom 12:1\u20135",
                    "readQS": "Rom+12:1-5",
                    "audioQS": "Rom 12"
                }
            ],
            "readQS": "Psalm+48,146%3B+Exodus+13:1-16%3B+Rom+12:1-5",
            "audioQS": "Ps.48,146,Exod.13,Rom 12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 122,123",
                    "readQS": "Psalm+122,123",
                    "audioQS": "Ps.122,123"
                },
                {
                    "pretty": "Haggai 2:1\u20139",
                    "readQS": "Haggai+2:1-9",
                    "audioQS": "Hag.2"
                },
                {
                    "pretty": "John 2:18\u201322",
                    "readQS": "John+2:18-22",
                    "audioQS": "John.2"
                }
            ],
            "readQS": "Psalm+122,123%3B+Haggai+2:1-9%3B+John+2:18-22",
            "audioQS": "Ps.122,123,Hag.2,John.2"
        }
    },
    "2022/02/03": {
        "datePretty": "Thursday, February 3, 2022",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 110",
                    "readQS": "Psalm+110",
                    "audioQS": "Ps.110"
                },
                {
                    "pretty": "Genesis 21:1\u201321",
                    "readQS": "Genesis+21:1-21",
                    "audioQS": "Gen.21"
                },
                {
                    "pretty": "Matthew 27:57\u2013end",
                    "readQS": "Matthew+27:57-",
                    "audioQS": "Matt.27"
                }
            ],
            "readQS": "Psalm+110%3B+Genesis+21:1-21%3B+Matthew+27:57-",
            "audioQS": "Ps.110,Gen.21,Matt.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Hosea 11:12\u2013end",
                    "readQS": "Hosea+11:12-",
                    "audioQS": "Hos.11"
                },
                {
                    "pretty": "Hosea 12",
                    "readQS": "Hosea+12",
                    "audioQS": "Hos.12"
                },
                {
                    "pretty": "1 Corinthians 14:20\u2013end",
                    "readQS": "1+Corinthians+14:20-",
                    "audioQS": "1Cor.14"
                }
            ],
            "readQS": "Psalm+86%3B+Hosea+11:12-%3B+Hosea+12%3B+1+Corinthians+14:20-",
            "audioQS": "Ps.86,Hos.11,Hos.12,1Cor.14"
        }
    },
    "2022/02/04": {
        "datePretty": "Friday, February 4, 2022",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Genesis 22:1\u201319",
                    "readQS": "Genesis+22:1-19",
                    "audioQS": "Gen.22"
                },
                {
                    "pretty": "Matthew 28:1\u201315",
                    "readQS": "Matthew+28:1-15",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+115%3B+Genesis+22:1-19%3B+Matthew+28:1-15",
            "audioQS": "Ps.115,Gen.22,Matt.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Hosea 13:1\u201314",
                    "readQS": "Hosea+13:1-14",
                    "audioQS": "Hos.13"
                },
                {
                    "pretty": "1 Corinthians 16:1\u20139",
                    "readQS": "1+Corinthians+16:1-9",
                    "audioQS": "1Cor.16"
                }
            ],
            "readQS": "Psalm+147%3B+Hosea+13:1-14%3B+1+Corinthians+16:1-9",
            "audioQS": "Ps.147,Hos.13,1Cor.16"
        }
    },
    "2022/02/05": {
        "datePretty": "Saturday, February 5, 2022",
        "calendar": "Week of 4th Sunday after the Ephiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 118",
                    "readQS": "Psalm+118",
                    "audioQS": "Ps.118"
                },
                {
                    "pretty": "Genesis 23",
                    "readQS": "Genesis+23",
                    "audioQS": "Gen.23"
                },
                {
                    "pretty": "Matthew 28:16\u2013end",
                    "readQS": "Matthew+28:16-",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+118%3B+Genesis+23%3B+Matthew+28:16-",
            "audioQS": "Ps.118,Gen.23,Matt.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 150",
                    "readQS": "Psalm+150",
                    "audioQS": "Ps.150"
                },
                {
                    "pretty": "Hosea 14",
                    "readQS": "Hosea+14",
                    "audioQS": "Hos.14"
                },
                {
                    "pretty": "1 Corinthians 16:10\u2013end",
                    "readQS": "1+Corinthians+16:10-",
                    "audioQS": "1Cor.16"
                }
            ],
            "readQS": "Psalm+150%3B+Hosea+14%3B+1+Corinthians+16:10-",
            "audioQS": "Ps.150,Hos.14,1Cor.16"
        }
    },
    "2022/02/06": {
        "datePretty": "Sunday, February 6, 2022",
        "calendar": "4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 3,4",
                    "readQS": "Psalm+3,4",
                    "audioQS": "Ps.3,4"
                },
                {
                    "pretty": "Jeremiah 26:1\u201316",
                    "readQS": "Jeremiah+26:1-16",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "Acts 3:1\u201310",
                    "readQS": "Acts+3:1-10",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+3,4%3B+Jeremiah+26:1-16%3B+Acts+3:1-10",
            "audioQS": "Ps.3,4,Jer.26,Acts.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
                },
                {
                    "pretty": "Hosea 1",
                    "readQS": "Hosea+1",
                    "audioQS": "Hos.1"
                },
                {
                    "pretty": "Colossians 3:1\u201322",
                    "readQS": "Colossians+3:1-22",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+2%3B+Hosea+1%3B+Colossians+3:1-22",
            "audioQS": "Ps.2,Hos.1,Col.3"
        }
    },
    "2022/02/07": {
        "datePretty": "Monday, February 7, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Leviticus 19:1\u201318,19:30\u2013end",
                    "readQS": "Leviticus+19:1-18,19:30-",
                    "audioQS": "Lev.19"
                },
                {
                    "pretty": "1 Timothy 1:1\u201317",
                    "readQS": "1+Timothy+1:1-17",
                    "audioQS": "1Tim.1"
                }
            ],
            "readQS": "Psalm+30%3B+Leviticus+19:1-18,19:30-%3B+1+Timothy+1:1-17",
            "audioQS": "Ps.30,Lev.19,1Tim.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "1 Chronicles 28:1\u201310",
                    "readQS": "1+Chronicles+28:1-10",
                    "audioQS": "1Chr.28"
                },
                {
                    "pretty": "John 15:1\u201311",
                    "readQS": "John+15:1-11",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+28%3B+1+Chronicles+28:1-10%3B+John+15:1-11",
            "audioQS": "Ps.28,1Chr.28,John.15"
        }
    },
    "2022/02/08": {
        "datePretty": "Tuesday, February 8, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Leviticus 23:1\u201322",
                    "readQS": "Leviticus+23:1-22",
                    "audioQS": "Lev.23"
                },
                {
                    "pretty": "1 Timothy 1:18\u2013end",
                    "readQS": "1+Timothy+1:18-",
                    "audioQS": "1Tim.1"
                },
                {
                    "pretty": "1 Timothy 2",
                    "readQS": "1+Timothy+2",
                    "audioQS": "1Tim.2"
                }
            ],
            "readQS": "Psalm+36%3B+Leviticus+23:1-22%3B+1+Timothy+1:18-%3B+1+Timothy+2",
            "audioQS": "Ps.36,Lev.23,1Tim.1,1Tim.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "1 Chronicles 28:11\u2013end",
                    "readQS": "1+Chronicles+28:11-",
                    "audioQS": "1Chr.28"
                },
                {
                    "pretty": "John 15:12\u201317",
                    "readQS": "John+15:12-17",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+33%3B+1+Chronicles+28:11-%3B+John+15:12-17",
            "audioQS": "Ps.33,1Chr.28,John.15"
        }
    },
    "2022/02/09": {
        "datePretty": "Wednesday, February 9, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Leviticus 23:23\u2013end",
                    "readQS": "Leviticus+23:23-",
                    "audioQS": "Lev.23"
                },
                {
                    "pretty": "1 Timothy 3",
                    "readQS": "1+Timothy+3",
                    "audioQS": "1Tim.3"
                }
            ],
            "readQS": "Psalm+34%3B+Leviticus+23:23-%3B+1+Timothy+3",
            "audioQS": "Ps.34,Lev.23,1Tim.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "1 Chronicles 29:1\u20139",
                    "readQS": "1+Chronicles+29:1-9",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "John 15:18\u2013end",
                    "readQS": "John+15:18-",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+119:33-56%3B+1+Chronicles+29:1-9%3B+John+15:18-",
            "audioQS": "Ps.119,1Chr.29,John.15"
        }
    },
    "2022/02/10": {
        "datePretty": "Thursday, February 10, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Leviticus 24:1\u20139",
                    "readQS": "Leviticus+24:1-9",
                    "audioQS": "Lev.24"
                },
                {
                    "pretty": "1 Timothy 4",
                    "readQS": "1+Timothy+4",
                    "audioQS": "1Tim.4"
                }
            ],
            "readQS": "Psalm+37%3B+Leviticus+24:1-9%3B+1+Timothy+4",
            "audioQS": "Ps.37,Lev.24,1Tim.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "1 Chronicles 29:10\u201320",
                    "readQS": "1+Chronicles+29:10-20",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "John 16:1\u201315",
                    "readQS": "John+16:1-15",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+40%3B+1+Chronicles+29:10-20%3B+John+16:1-15",
            "audioQS": "Ps.40,1Chr.29,John.16"
        }
    },
    "2022/02/11": {
        "datePretty": "Friday, February 11, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Leviticus 25:1\u201324",
                    "readQS": "Leviticus+25:1-24",
                    "audioQS": "Lev.25"
                },
                {
                    "pretty": "1 Timothy 5:1\u201316",
                    "readQS": "1+Timothy+5:1-16",
                    "audioQS": "1Tim.5"
                }
            ],
            "readQS": "Psalm+31%3B+Leviticus+25:1-24%3B+1+Timothy+5:1-16",
            "audioQS": "Ps.31,Lev.25,1Tim.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "1 Chronicles 29:21\u2013end",
                    "readQS": "1+Chronicles+29:21-",
                    "audioQS": "1Chr.29"
                },
                {
                    "pretty": "John 16:16\u201322",
                    "readQS": "John+16:16-22",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+35%3B+1+Chronicles+29:21-%3B+John+16:16-22",
            "audioQS": "Ps.35,1Chr.29,John.16"
        }
    },
    "2022/02/12": {
        "datePretty": "Saturday, February 12, 2022",
        "calendar": "Week of 4th Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Numbers 6:1\u20135,6:21\u2013end",
                    "readQS": "Numbers+6:1-5,6:21-",
                    "audioQS": "Num.6"
                },
                {
                    "pretty": "1 Timothy 5:17\u2013end",
                    "readQS": "1+Timothy+5:17-",
                    "audioQS": "1Tim.5"
                }
            ],
            "readQS": "Psalm+42%3B+Numbers+6:1-5,6:21-%3B+1+Timothy+5:17-",
            "audioQS": "Ps.42,Num.6,1Tim.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "2 Chronicles 1:1\u201313",
                    "readQS": "2+Chronicles+1:1-13",
                    "audioQS": "2Chr.1"
                },
                {
                    "pretty": "John 16:23\u2013end",
                    "readQS": "John+16:23-",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+46%3B+2+Chronicles+1:1-13%3B+John+16:23-",
            "audioQS": "Ps.46,2Chr.1,John.16"
        }
    },
    "2022/02/13": {
        "datePretty": "Sunday, February 13, 2022",
        "calendar": "3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 7",
                    "readQS": "Psalm+7",
                    "audioQS": "Ps.7"
                },
                {
                    "pretty": "Jeremiah 30:1\u20133,10\u201322",
                    "readQS": "Jeremiah+30:1-3,10-22",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "Acts 6",
                    "readQS": "Acts+6",
                    "audioQS": "Acts.6"
                }
            ],
            "readQS": "Psalm+7%3B+Jeremiah+30:1-3,10-22%3B+Acts+6",
            "audioQS": "Ps.7,Jer.30,Acts.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 6",
                    "readQS": "Psalm+6",
                    "audioQS": "Ps.6"
                },
                {
                    "pretty": "Hosea 10:1\u20138,12",
                    "readQS": "Hosea+10:1-8,12",
                    "audioQS": "Hos.10"
                },
                {
                    "pretty": "Galatians 4:8\u201320",
                    "readQS": "Galatians+4:8-20",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+6%3B+Hosea+10:1-8,12%3B+Galatians+4:8-20",
            "audioQS": "Ps.6,Hos.10,Gal.4"
        }
    },
    "2022/02/14": {
        "datePretty": "Monday, February 14, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Genesis 24:1\u201328",
                    "readQS": "Genesis+24:1-28",
                    "audioQS": "Gen.24"
                },
                {
                    "pretty": "1 Timothy 6:1\u201310",
                    "readQS": "1+Timothy+6:1-10",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+44%3B+Genesis+24:1-28%3B+1+Timothy+6:1-10",
            "audioQS": "Ps.44,Gen.24,1Tim.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "2 Chronicles 2:1\u201316",
                    "readQS": "2+Chronicles+2:1-16",
                    "audioQS": "2Chr.2"
                },
                {
                    "pretty": "John 17:1\u20135",
                    "readQS": "John+17:1-5",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+47%3B+2+Chronicles+2:1-16%3B+John+17:1-5",
            "audioQS": "Ps.47,2Chr.2,John.17"
        }
    },
    "2022/02/15": {
        "datePretty": "Tuesday, February 15, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Genesis 24:29\u2013end",
                    "readQS": "Genesis+24:29-",
                    "audioQS": "Gen.24"
                },
                {
                    "pretty": "1 Timothy 6:11\u2013end",
                    "readQS": "1+Timothy+6:11-",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+48%3B+Genesis+24:29-%3B+1+Timothy+6:11-",
            "audioQS": "Ps.48,Gen.24,1Tim.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "2 Chronicles 3",
                    "readQS": "2+Chronicles+3",
                    "audioQS": "2Chr.3"
                },
                {
                    "pretty": "John 17:6\u201319",
                    "readQS": "John+17:6-19",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+50%3B+2+Chronicles+3%3B+John+17:6-19",
            "audioQS": "Ps.50,2Chr.3,John.17"
        }
    },
    "2022/02/16": {
        "datePretty": "Wednesday, February 16, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Genesis 25:7\u201311,25:19\u2013end",
                    "readQS": "Genesis+25:7-11,25:19-",
                    "audioQS": "Gen.25"
                },
                {
                    "pretty": "2 Timothy 1:1\u201314",
                    "readQS": "2+Timothy+1:1-14",
                    "audioQS": "2Tim.1"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Genesis+25:7-11,25:19-%3B+2+Timothy+1:1-14",
            "audioQS": "Ps.119,Gen.25,2Tim.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "2 Chronicles 5",
                    "readQS": "2+Chronicles+5",
                    "audioQS": "2Chr.5"
                },
                {
                    "pretty": "John 17:20\u2013end",
                    "readQS": "John+17:20-",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+59%3B+2+Chronicles+5%3B+John+17:20-",
            "audioQS": "Ps.59,2Chr.5,John.17"
        }
    },
    "2022/02/17": {
        "datePretty": "Thursday, February 17, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Genesis 26:34\u201327:40",
                    "readQS": "Genesis+26:34-27:40",
                    "audioQS": "Gen.26"
                },
                {
                    "pretty": "2 Timothy 1:15\u20132:13",
                    "readQS": "2+Timothy+1:15-2:13",
                    "audioQS": "2Tim.1"
                }
            ],
            "readQS": "Psalm+57%3B+Genesis+26:34-27:40%3B+2+Timothy+1:15-2:13",
            "audioQS": "Ps.57,Gen.26,2Tim.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
                },
                {
                    "pretty": "2 Chronicles 6:1\u201321",
                    "readQS": "2+Chronicles+6:1-21",
                    "audioQS": "2Chr.6"
                },
                {
                    "pretty": "John 18:1\u201311",
                    "readQS": "John+18:1-11",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+62%3B+2+Chronicles+6:1-21%3B+John+18:1-11",
            "audioQS": "Ps.62,2Chr.6,John.18"
        }
    },
    "2022/02/18": {
        "datePretty": "Friday, February 18, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Genesis 27:41\u2013end",
                    "readQS": "Genesis+27:41-",
                    "audioQS": "Gen.27"
                },
                {
                    "pretty": "Genesis 28",
                    "readQS": "Genesis+28",
                    "audioQS": "Gen.28"
                },
                {
                    "pretty": "2 Timothy 2:14\u2013end",
                    "readQS": "2+Timothy+2:14-",
                    "audioQS": "2Tim.2"
                }
            ],
            "readQS": "Psalm+51%3B+Genesis+27:41-%3B+Genesis+28%3B+2+Timothy+2:14-",
            "audioQS": "Ps.51,Gen.27,Gen.28,2Tim.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "2 Chronicles 6:22\u2013end",
                    "readQS": "2+Chronicles+6:22-",
                    "audioQS": "2Chr.6"
                },
                {
                    "pretty": "John 18:12\u201327",
                    "readQS": "John+18:12-27",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+38%3B+2+Chronicles+6:22-%3B+John+18:12-27",
            "audioQS": "Ps.38,2Chr.6,John.18"
        }
    },
    "2022/02/19": {
        "datePretty": "Saturday, February 19, 2022",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Genesis 29:1\u201330",
                    "readQS": "Genesis+29:1-30",
                    "audioQS": "Gen.29"
                },
                {
                    "pretty": "2 Timothy 3",
                    "readQS": "2+Timothy+3",
                    "audioQS": "2Tim.3"
                }
            ],
            "readQS": "Psalm+68%3B+Genesis+29:1-30%3B+2+Timothy+3",
            "audioQS": "Ps.68,Gen.29,2Tim.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "2 Chronicles 7",
                    "readQS": "2+Chronicles+7",
                    "audioQS": "2Chr.7"
                },
                {
                    "pretty": "John 18:28\u2013end",
                    "readQS": "John+18:28-",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+66%3B+2+Chronicles+7%3B+John+18:28-",
            "audioQS": "Ps.66,2Chr.7,John.18"
        }
    },
    "2022/02/20": {
        "datePretty": "Sunday, February 20, 2022",
        "calendar": "2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 104:1\u201326",
                    "readQS": "Psalm+104:1-26",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Jeremiah 28:1\u201311",
                    "readQS": "Jeremiah+28:1-11",
                    "audioQS": "Jer.28"
                },
                {
                    "pretty": "Acts 14:8\u201317",
                    "readQS": "Acts+14:8-17",
                    "audioQS": "Acts.14"
                }
            ],
            "readQS": "Psalm+104:1-26%3B+Jeremiah+28:1-11%3B+Acts+14:8-17",
            "audioQS": "Ps.104,Jer.28,Acts.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Genesis 1:1\u20132:3",
                    "readQS": "Genesis+1:1-2:3",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 6:25\u2013end",
                    "readQS": "Matthew+6:25-",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+147%3B+Genesis+1:1-2:3%3B+Matthew+6:25-",
            "audioQS": "Ps.147,Gen.1,Matt.6"
        }
    },
    "2022/02/21": {
        "datePretty": "Monday, February 21, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Genesis 29:31\u201330:24",
                    "readQS": "Genesis+29:31-30:24",
                    "audioQS": "Gen.29"
                },
                {
                    "pretty": "2 Timothy 4:1\u20138",
                    "readQS": "2+Timothy+4:1-8",
                    "audioQS": "2Tim.4"
                }
            ],
            "readQS": "Psalm+71%3B+Genesis+29:31-30:24%3B+2+Timothy+4:1-8",
            "audioQS": "Ps.71,Gen.29,2Tim.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "2 Chronicles 9:1\u201312",
                    "readQS": "2+Chronicles+9:1-12",
                    "audioQS": "2Chr.9"
                },
                {
                    "pretty": "John 19:1\u201316",
                    "readQS": "John+19:1-16",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+72%3B+2+Chronicles+9:1-12%3B+John+19:1-16",
            "audioQS": "Ps.72,2Chr.9,John.19"
        }
    },
    "2022/02/22": {
        "datePretty": "Tuesday, February 22, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Genesis 31:1\u201324",
                    "readQS": "Genesis+31:1-24",
                    "audioQS": "Gen.31"
                },
                {
                    "pretty": "2 Timothy 4:9\u2013end",
                    "readQS": "2+Timothy+4:9-",
                    "audioQS": "2Tim.4"
                }
            ],
            "readQS": "Psalm+73%3B+Genesis+31:1-24%3B+2+Timothy+4:9-",
            "audioQS": "Ps.73,Gen.31,2Tim.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "2 Chronicles 10:1\u201311:4",
                    "readQS": "2+Chronicles+10:1-11:4",
                    "audioQS": "2Chr.10"
                },
                {
                    "pretty": "John 19:17\u201330",
                    "readQS": "John+19:17-30",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+74%3B+2+Chronicles+10:1-11:4%3B+John+19:17-30",
            "audioQS": "Ps.74,2Chr.10,John.19"
        }
    },
    "2022/02/23": {
        "datePretty": "Wednesday, February 23, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Genesis 31:25\u201332:2",
                    "readQS": "Genesis+31:25-32:2",
                    "audioQS": "Gen.31"
                },
                {
                    "pretty": "Titus 1",
                    "readQS": "Titus+1",
                    "audioQS": "Titus.1"
                }
            ],
            "readQS": "Psalm+77%3B+Genesis+31:25-32:2%3B+Titus+1",
            "audioQS": "Ps.77,Gen.31,Titus.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:81\u2013104",
                    "readQS": "Psalm+119:81-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Chronicles 12",
                    "readQS": "2+Chronicles+12",
                    "audioQS": "2Chr.12"
                },
                {
                    "pretty": "John 19:31\u2013end",
                    "readQS": "John+19:31-",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+119:81-104%3B+2+Chronicles+12%3B+John+19:31-",
            "audioQS": "Ps.119,2Chr.12,John.19"
        }
    },
    "2022/02/24": {
        "datePretty": "Thursday, February 24, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Genesis 32:3\u201330",
                    "readQS": "Genesis+32:3-30",
                    "audioQS": "Gen.32"
                },
                {
                    "pretty": "Titus 2",
                    "readQS": "Titus+2",
                    "audioQS": "Titus.2"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Genesis+32:3-30%3B+Titus+2",
            "audioQS": "Ps.78,Gen.32,Titus.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78:40\u2013end",
                    "readQS": "Psalm+78:40-",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "2 Chronicles 13:1\u201314:1",
                    "readQS": "2+Chronicles+13:1-14:1",
                    "audioQS": "2Chr.13"
                },
                {
                    "pretty": "John 20:1\u201310",
                    "readQS": "John+20:1-10",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+78:40-%3B+2+Chronicles+13:1-14:1%3B+John+20:1-10",
            "audioQS": "Ps.78,2Chr.13,John.20"
        }
    },
    "2022/02/25": {
        "datePretty": "Friday, February 25, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Genesis 33:1\u201317",
                    "readQS": "Genesis+33:1-17",
                    "audioQS": "Gen.33"
                },
                {
                    "pretty": "Titus 3",
                    "readQS": "Titus+3",
                    "audioQS": "Titus.3"
                }
            ],
            "readQS": "Psalm+55%3B+Genesis+33:1-17%3B+Titus+3",
            "audioQS": "Ps.55,Gen.33,Titus.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 69",
                    "readQS": "Psalm+69",
                    "audioQS": "Ps.69"
                },
                {
                    "pretty": "2 Chronicles 14:2\u2013end",
                    "readQS": "2+Chronicles+14:2-",
                    "audioQS": "2Chr.14"
                },
                {
                    "pretty": "John 20:11\u201318",
                    "readQS": "John+20:11-18",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+69%3B+2+Chronicles+14:2-%3B+John+20:11-18",
            "audioQS": "Ps.69,2Chr.14,John.20"
        }
    },
    "2022/02/26": {
        "datePretty": "Saturday, February 26, 2022",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Genesis 35",
                    "readQS": "Genesis+35",
                    "audioQS": "Gen.35"
                },
                {
                    "pretty": "Philemon",
                    "readQS": "Philemon",
                    "audioQS": "Phlm"
                }
            ],
            "readQS": "Psalm+76%3B+Genesis+35%3B+Philemon",
            "audioQS": "Ps.76,Gen.35,Phlm"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "2 Chronicles 15:1\u201315",
                    "readQS": "2+Chronicles+15:1-15",
                    "audioQS": "2Chr.15"
                },
                {
                    "pretty": "John 20:19\u2013end",
                    "readQS": "John+20:19-",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+84%3B+2+Chronicles+15:1-15%3B+John+20:19-",
            "audioQS": "Ps.84,2Chr.15,John.20"
        }
    },
    "2022/02/27": {
        "datePretty": "Sunday, February 27, 2022",
        "calendar": "The Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 104:1\u201326",
                    "readQS": "Psalm+104:1-26",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Jeremiah 28:1\u201311",
                    "readQS": "Jeremiah+28:1-11",
                    "audioQS": "Jer.28"
                },
                {
                    "pretty": "Acts 14:8\u201317",
                    "readQS": "Acts+14:8-17",
                    "audioQS": "Acts.14"
                }
            ],
            "readQS": "Psalm+104:1-26%3B+Jeremiah+28:1-11%3B+Acts+14:8-17",
            "audioQS": "Ps.104,Jer.28,Acts.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Genesis 1:1\u20132:3",
                    "readQS": "Genesis+1:1-2:3",
                    "audioQS": "Gen.1"
                },
                {
                    "pretty": "Matthew 6:25\u2013end",
                    "readQS": "Matthew+6:25-",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+147%3B+Genesis+1:1-2:3%3B+Matthew+6:25-",
            "audioQS": "Ps.147,Gen.1,Matt.6"
        }
    },
    "2022/02/28": {
        "datePretty": "Monday, February 28, 2022",
        "calendar": "Week of the Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Genesis 37:1\u201311",
                    "readQS": "Genesis+37:1-11",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Galatians 1",
                    "readQS": "Galatians+1",
                    "audioQS": "Gal.1"
                }
            ],
            "readQS": "Psalm+80%3B+Genesis+37:1-11%3B+Galatians+1",
            "audioQS": "Ps.80,Gen.37,Gal.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Jeremiah 1",
                    "readQS": "Jeremiah+1",
                    "audioQS": "Jer.1"
                },
                {
                    "pretty": "John 3:1\u201321",
                    "readQS": "John+3:1-21",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+85%3B+Jeremiah+1%3B+John+3:1-21",
            "audioQS": "Ps.85,Jer.1,John.3"
        }
    },
    "2022/03/01": {
        "datePretty": "Tuesday, March 1, 2022",
        "calendar": "Shrove Tuesday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Genesis 37:12\u2013end",
                    "readQS": "Genesis+37:12-",
                    "audioQS": "Gen.37"
                },
                {
                    "pretty": "Galatians 2:1\u201310",
                    "readQS": "Galatians+2:1-10",
                    "audioQS": "Gal.2"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Genesis+37:12-%3B+Galatians+2:1-10",
            "audioQS": "Ps.89,Gen.37,Gal.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u2013end",
                    "readQS": "Psalm+89:19-",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Jeremiah 2:1\u201313",
                    "readQS": "Jeremiah+2:1-13",
                    "audioQS": "Jer.2"
                },
                {
                    "pretty": "John 3:22\u2013end",
                    "readQS": "John+3:22-",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+89:19-%3B+Jeremiah+2:1-13%3B+John+3:22-",
            "audioQS": "Ps.89,Jer.2,John.3"
        }
    },
    "2022/03/02": {
        "datePretty": "Wednesday, March 2, 2022",
        "calendar": "Ash Wednesday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
                },
                {
                    "pretty": "Daniel 9:3\u20136,17\u201319",
                    "readQS": "Daniel+9:3-6,17-19",
                    "audioQS": "Dan.9"
                },
                {
                    "pretty": "1 Timothy 6:6\u201319",
                    "readQS": "1+Timothy+6:6-19",
                    "audioQS": "1Tim.6"
                }
            ],
            "readQS": "Psalm+38%3B+Daniel+9:3-6,17-19%3B+1+Timothy+6:6-19",
            "audioQS": "Ps.38,Dan.9,1Tim.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Isaiah 1:10\u201318",
                    "readQS": "Isaiah+1:10-18",
                    "audioQS": "Isa.1"
                },
                {
                    "pretty": "Luke 15:11\u201332",
                    "readQS": "Luke+15:11-32",
                    "audioQS": "Luke.15"
                }
            ],
            "readQS": "Psalm+51%3B+Isaiah+1:10-18%3B+Luke+15:11-32",
            "audioQS": "Ps.51,Isa.1,Luke.15"
        }
    },
    "2022/03/03": {
        "datePretty": "Thursday, March 3, 2022",
        "calendar": "1st day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Genesis 39",
                    "readQS": "Genesis+39",
                    "audioQS": "Gen.39"
                },
                {
                    "pretty": "Galatians 2:11\u2013end",
                    "readQS": "Galatians+2:11-",
                    "audioQS": "Gal.2"
                }
            ],
            "readQS": "Psalm+77%3B+Genesis+39%3B+Galatians+2:11-",
            "audioQS": "Ps.77,Gen.39,Gal.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Jeremiah 2:14\u201332",
                    "readQS": "Jeremiah+2:14-32",
                    "audioQS": "Jer.2"
                },
                {
                    "pretty": "John 4:1\u201326",
                    "readQS": "John+4:1-26",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+74%3B+Jeremiah+2:14-32%3B+John+4:1-26",
            "audioQS": "Ps.74,Jer.2,John.4"
        }
    },
    "2022/03/04": {
        "datePretty": "Friday, March 4, 2022",
        "calendar": "2nd day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 3",
                    "readQS": "Psalm+3",
                    "audioQS": "Ps.3"
                },
                {
                    "pretty": "Genesis 40",
                    "readQS": "Genesis+40",
                    "audioQS": "Gen.40"
                },
                {
                    "pretty": "Galatians 3:1\u201314",
                    "readQS": "Galatians+3:1-14",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+3%3B+Genesis+40%3B+Galatians+3:1-14",
            "audioQS": "Ps.3,Gen.40,Gal.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Jeremiah 3:6\u201322",
                    "readQS": "Jeremiah+3:6-22",
                    "audioQS": "Jer.3"
                },
                {
                    "pretty": "John 4:27\u201342",
                    "readQS": "John+4:27-42",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+31%3B+Jeremiah+3:6-22%3B+John+4:27-42",
            "audioQS": "Ps.31,Jer.3,John.4"
        }
    },
    "2022/03/05": {
        "datePretty": "Saturday, March 5, 2022",
        "calendar": "3rd day of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Genesis 41:1\u201324",
                    "readQS": "Genesis+41:1-24",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 3:15\u201322",
                    "readQS": "Galatians+3:15-22",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+71%3B+Genesis+41:1-24%3B+Galatians+3:15-22",
            "audioQS": "Ps.71,Gen.41,Gal.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Jeremiah 4:1\u201318",
                    "readQS": "Jeremiah+4:1-18",
                    "audioQS": "Jer.4"
                },
                {
                    "pretty": "John 4:43\u2013end",
                    "readQS": "John+4:43-",
                    "audioQS": "John.4"
                }
            ],
            "readQS": "Psalm+73%3B+Jeremiah+4:1-18%3B+John+4:43-",
            "audioQS": "Ps.73,Jer.4,John.4"
        }
    },
    "2022/03/06": {
        "datePretty": "Sunday, March 6, 2022",
        "calendar": "1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50:1\u201315",
                    "readQS": "Psalm+50:1-15",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Micah 6:1\u20138",
                    "readQS": "Micah+6:1-8",
                    "audioQS": "Mic.6"
                },
                {
                    "pretty": "Luke 5:27\u201339",
                    "readQS": "Luke+5:27-39",
                    "audioQS": "Luke.5"
                }
            ],
            "readQS": "Psalm+50:1-15%3B+Micah+6:1-8%3B+Luke+5:27-39",
            "audioQS": "Ps.50,Mic.6,Luke.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:73\u201388",
                    "readQS": "Psalm+119:73-88",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jonah 3",
                    "readQS": "Jonah+3",
                    "audioQS": "Jonah.3"
                },
                {
                    "pretty": "Luke 18:9\u201314",
                    "readQS": "Luke+18:9-14",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+119:73-88%3B+Jonah+3%3B+Luke+18:9-14",
            "audioQS": "Ps.119,Jonah.3,Luke.18"
        }
    },
    "2022/03/07": {
        "datePretty": "Monday, March 7, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "Genesis 41:25\u201345",
                    "readQS": "Genesis+41:25-45",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 3:23\u20134:7",
                    "readQS": "Galatians+3:23-4:7",
                    "audioQS": "Gal.3"
                }
            ],
            "readQS": "Psalm+11%3B+Genesis+41:25-45%3B+Galatians+3:23-4:7",
            "audioQS": "Ps.11,Gen.41,Gal.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 13",
                    "readQS": "Psalm+13",
                    "audioQS": "Ps.13"
                },
                {
                    "pretty": "Jeremiah 4:19\u2013end",
                    "readQS": "Jeremiah+4:19-",
                    "audioQS": "Jer.4"
                },
                {
                    "pretty": "John 5:1\u201318",
                    "readQS": "John+5:1-18",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+13%3B+Jeremiah+4:19-%3B+John+5:1-18",
            "audioQS": "Ps.13,Jer.4,John.5"
        }
    },
    "2022/03/08": {
        "datePretty": "Tuesday, March 8, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Genesis 41:46\u201342:5",
                    "readQS": "Genesis+41:46-42:5",
                    "audioQS": "Gen.41"
                },
                {
                    "pretty": "Galatians 4:8\u201320",
                    "readQS": "Galatians+4:8-20",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+44%3B+Genesis+41:46-42:5%3B+Galatians+4:8-20",
            "audioQS": "Ps.44,Gen.41,Gal.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
                },
                {
                    "pretty": "Jeremiah 5:1\u201319",
                    "readQS": "Jeremiah+5:1-19",
                    "audioQS": "Jer.5"
                },
                {
                    "pretty": "John 5:19\u201329",
                    "readQS": "John+5:19-29",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+49%3B+Jeremiah+5:1-19%3B+John+5:19-29",
            "audioQS": "Ps.49,Jer.5,John.5"
        }
    },
    "2022/03/09": {
        "datePretty": "Wednesday, March 9, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 6",
                    "readQS": "Psalm+6",
                    "audioQS": "Ps.6"
                },
                {
                    "pretty": "Genesis 42:6\u201317",
                    "readQS": "Genesis+42:6-17",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 4:21\u20135:1",
                    "readQS": "Galatians+4:21-5:1",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+6%3B+Genesis+42:6-17%3B+Galatians+4:21-5:1",
            "audioQS": "Ps.6,Gen.42,Gal.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
                },
                {
                    "pretty": "Jeremiah 5:20\u2013end",
                    "readQS": "Jeremiah+5:20-",
                    "audioQS": "Jer.5"
                },
                {
                    "pretty": "John 5:30\u2013end",
                    "readQS": "John+5:30-",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+28%3B+Jeremiah+5:20-%3B+John+5:30-",
            "audioQS": "Ps.28,Jer.5,John.5"
        }
    },
    "2022/03/10": {
        "datePretty": "Thursday, March 10, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Genesis 42:18\u201328",
                    "readQS": "Genesis+42:18-28",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 5:2\u201315",
                    "readQS": "Galatians+5:2-15",
                    "audioQS": "Gal.5"
                }
            ],
            "readQS": "Psalm+42%3B+Genesis+42:18-28%3B+Galatians+5:2-15",
            "audioQS": "Ps.42,Gen.42,Gal.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 142",
                    "readQS": "Psalm+142",
                    "audioQS": "Ps.142"
                },
                {
                    "pretty": "Jeremiah 6:9\u201321",
                    "readQS": "Jeremiah+6:9-21",
                    "audioQS": "Jer.6"
                },
                {
                    "pretty": "John 6:1\u201315",
                    "readQS": "John+6:1-15",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+142%3B+Jeremiah+6:9-21%3B+John+6:1-15",
            "audioQS": "Ps.142,Jer.6,John.6"
        }
    },
    "2022/03/11": {
        "datePretty": "Friday, March 11, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
                },
                {
                    "pretty": "Genesis 42:29\u2013end",
                    "readQS": "Genesis+42:29-",
                    "audioQS": "Gen.42"
                },
                {
                    "pretty": "Galatians 5:16\u2013end",
                    "readQS": "Galatians+5:16-",
                    "audioQS": "Gal.5"
                }
            ],
            "readQS": "Psalm+22%3B+Genesis+42:29-%3B+Galatians+5:16-",
            "audioQS": "Ps.22,Gen.42,Gal.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Jeremiah 6:22\u2013end",
                    "readQS": "Jeremiah+6:22-",
                    "audioQS": "Jer.6"
                },
                {
                    "pretty": "John 6:16\u201327",
                    "readQS": "John+6:16-27",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+55%3B+Jeremiah+6:22-%3B+John+6:16-27",
            "audioQS": "Ps.55,Jer.6,John.6"
        }
    },
    "2022/03/12": {
        "datePretty": "Saturday, March 12, 2022",
        "calendar": "Week of 1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 63",
                    "readQS": "Psalm+63",
                    "audioQS": "Ps.63"
                },
                {
                    "pretty": "Genesis 43:1\u201315",
                    "readQS": "Genesis+43:1-15",
                    "audioQS": "Gen.43"
                },
                {
                    "pretty": "Galatians 6",
                    "readQS": "Galatians+6",
                    "audioQS": "Gal.6"
                }
            ],
            "readQS": "Psalm+63%3B+Genesis+43:1-15%3B+Galatians+6",
            "audioQS": "Ps.63,Gen.43,Gal.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Jeremiah 7:1\u201320",
                    "readQS": "Jeremiah+7:1-20",
                    "audioQS": "Jer.7"
                },
                {
                    "pretty": "John 6:27\u201340",
                    "readQS": "John+6:27-40",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+4%3B+Jeremiah+7:1-20%3B+John+6:27-40",
            "audioQS": "Ps.4,Jer.7,John.6"
        }
    },
    "2022/03/13": {
        "datePretty": "Sunday, March 13, 2022",
        "calendar": "2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:161\u2013176",
                    "readQS": "Psalm+119:161-176",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Genesis 17:1\u20137,15\u201316",
                    "readQS": "Genesis+17:1-7,15-16",
                    "audioQS": "Gen.17"
                },
                {
                    "pretty": "Romans 11:13\u201324",
                    "readQS": "Romans+11:13-24",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+119:161-176%3B+Genesis+17:1-7,15-16%3B+Romans+11:13-24",
            "audioQS": "Ps.119,Gen.17,Rom.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Jeremiah 22:1\u20139,13\u201317",
                    "readQS": "Jeremiah+22:1-9,13-17",
                    "audioQS": "Jer.22"
                },
                {
                    "pretty": "Luke 14:27\u201333",
                    "readQS": "Luke+14:27-33",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+135%3B+Jeremiah+22:1-9,13-17%3B+Luke+14:27-33",
            "audioQS": "Ps.135,Jer.22,Luke.14"
        }
    },
    "2022/03/14": {
        "datePretty": "Monday, March 14, 2022",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 32",
                    "readQS": "Psalm+32",
                    "audioQS": "Ps.32"
                },
                {
                    "pretty": "Genesis 43:16\u2013end",
                    "readQS": "Genesis+43:16-",
                    "audioQS": "Gen.43"
                },
                {
                    "pretty": "Hebrews 1",
                    "readQS": "Hebrews+1",
                    "audioQS": "Heb.1"
                }
            ],
            "readQS": "Psalm+32%3B+Genesis+43:16-%3B+Hebrews+1",
            "audioQS": "Ps.32,Gen.43,Heb.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 17",
                    "readQS": "Psalm+17",
                    "audioQS": "Ps.17"
                },
                {
                    "pretty": "Jeremiah 7:21\u2013end",
                    "readQS": "Jeremiah+7:21-",
                    "audioQS": "Jer.7"
                },
                {
                    "pretty": "John 6:41\u201351",
                    "readQS": "John+6:41-51",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+17%3B+Jeremiah+7:21-%3B+John+6:41-51",
            "audioQS": "Ps.17,Jer.7,John.6"
        }
    },
    "2022/03/15": {
        "datePretty": "Tuesday, March 15, 2022",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Genesis 44:1\u201317",
                    "readQS": "Genesis+44:1-17",
                    "audioQS": "Gen.44"
                },
                {
                    "pretty": "Hebrews 2:1\u20139",
                    "readQS": "Hebrews+2:1-9",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+50%3B+Genesis+44:1-17%3B+Hebrews+2:1-9",
            "audioQS": "Ps.50,Gen.44,Heb.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 64",
                    "readQS": "Psalm+64",
                    "audioQS": "Ps.64"
                },
                {
                    "pretty": "Jeremiah 8:1\u201315",
                    "readQS": "Jeremiah+8:1-15",
                    "audioQS": "Jer.8"
                },
                {
                    "pretty": "John 6:52\u201359",
                    "readQS": "John+6:52-59",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+64%3B+Jeremiah+8:1-15%3B+John+6:52-59",
            "audioQS": "Ps.64,Jer.8,John.6"
        }
    },
    "2022/03/16": {
        "datePretty": "Wednesday, March 16, 2022",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
                },
                {
                    "pretty": "Genesis 44:18\u2013end",
                    "readQS": "Genesis+44:18-",
                    "audioQS": "Gen.44"
                },
                {
                    "pretty": "Hebrews 2:10\u2013end",
                    "readQS": "Hebrews+2:10-",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+35%3B+Genesis+44:18-%3B+Hebrews+2:10-",
            "audioQS": "Ps.35,Gen.44,Heb.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 39",
                    "readQS": "Psalm+39",
                    "audioQS": "Ps.39"
                },
                {
                    "pretty": "Jeremiah 8:18\u20139:11",
                    "readQS": "Jeremiah+8:18-9:11",
                    "audioQS": "Jer.8"
                },
                {
                    "pretty": "John 6:60\u2013end",
                    "readQS": "John+6:60-",
                    "audioQS": "John.6"
                }
            ],
            "readQS": "Psalm+39%3B+Jeremiah+8:18-9:11%3B+John+6:60-",
            "audioQS": "Ps.39,Jer.8,John.6"
        }
    },
    "2022/03/17": {
        "datePretty": "Thursday, March 17, 2022",
        "calendar": "Week of 2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Genesis 45:1\u201315",
                    "readQS": "Genesis+45:1-15",
                    "audioQS": "Gen.45"
                },
                {
                    "pretty": "Hebrews 3:1\u20136",
                    "readQS": "Hebrews+3:1-6",
                    "audioQS": "Heb.3"
                }
            ],
            "readQS": "Psalm+34%3B+Genesis+45:1-15%3B+Hebrews+3:1-6",
            "audioQS": "Ps.34,Gen.45,Heb.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
                },
                {
                    "pretty": "Jeremiah 9:12\u201324",
                    "readQS": "Jeremiah+9:12-24",
                    "audioQS": "Jer.9"
                },
                {
                    "pretty": "John 7:1\u201313",
                    "readQS": "John+7:1-13",
                    "audioQS": "John.7"
                }
            ],
            "readQS": "Psalm+59%3B+Jeremiah+9:12-24%3B+John+7:1-13",
            "audioQS": "Ps.59,Jer.9,John.7"
        }
    }
};

export default Data;