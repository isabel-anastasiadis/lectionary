import { IReadingsForDay } from "./interfaces";const Data: { [dateKey: string]: IReadingsForDay } = {
    "2022/11/27": {
        "datePretty": "Sunday, November 27, 2022",
        "calendar": "1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Micah 4:1\u20137",
                    "readQS": "Micah+4:1-7",
                    "audioQS": "Mic.4"
                },
                {
                    "pretty": "1 Thessalonians 5:1\u201311",
                    "readQS": "1+Thessalonians+5:1-11",
                    "audioQS": "1Thess.5"
                }
            ],
            "readQS": "Psalm+44%3B+Micah+4:1-7%3B+1+Thessalonians+5:1-11",
            "audioQS": "Ps.44,Mic.4,1Thess.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 9",
                    "readQS": "Psalm+9",
                    "audioQS": "Ps.9"
                },
                {
                    "pretty": "Isaiah 52:1\u201312",
                    "readQS": "Isaiah+52:1-12",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Matthew 24:15\u201328",
                    "readQS": "Matthew+24:15-28",
                    "audioQS": "Matt.24"
                }
            ],
            "readQS": "Psalm+9%3B+Isaiah+52:1-12%3B+Matthew+24:15-28",
            "audioQS": "Ps.9,Isa.52,Matt.24"
        }
    },
    "2022/11/28": {
        "datePretty": "Monday, November 28, 2022",
        "calendar": "Week of 1st Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
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
            "readQS": "Psalm+50%3B+Isaiah+42:18-%3B+Revelation+19",
            "audioQS": "Ps.50,Isa.42,Rev.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
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
            "readQS": "Psalm+71%3B+Isaiah+25:1-9%3B+Matthew+12:1-21",
            "audioQS": "Ps.71,Isa.25,Matt.12"
        }
    },
    "2022/11/29": {
        "datePretty": "Tuesday, November 29, 2022",
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
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Isaiah 49:1\u20139a",
                    "readQS": "Isaiah+49:1-9a",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "1 Corinthians 4:9\u201316",
                    "readQS": "1+Corinthians+4:9-16",
                    "audioQS": "1Cor.4"
                }
            ],
            "readQS": "Psalm+48%3B+Isaiah+49:1-9a%3B+1+Corinthians+4:9-16",
            "audioQS": "Ps.48,Isa.49,1Cor.4"
        }
    },
    "2022/11/30": {
        "datePretty": "Wednesday, November 30, 2022",
        "calendar": "St Andrew the Apostle",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 47,147:1\u201311",
                    "readQS": "Psalm+47,147:1-11",
                    "audioQS": "Ps.47,147"
                },
                {
                    "pretty": "Ezekiel 47:1\u201312",
                    "readQS": "Ezekiel+47:1-12",
                    "audioQS": "Ezek.47"
                },
                {
                    "pretty": "John 12:20\u201332",
                    "readQS": "John+12:20-32",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+47,147:1-11%3B+Ezekiel+47:1-12%3B+John+12:20-32",
            "audioQS": "Ps.47,147,Ezek.47,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 87,96",
                    "readQS": "Psalm+87,96",
                    "audioQS": "Ps.87,96"
                },
                {
                    "pretty": "Zechariah 8:20\u201323",
                    "readQS": "Zechariah+8:20-23",
                    "audioQS": "Zech.8"
                },
                {
                    "pretty": "John 1:35\u201342",
                    "readQS": "John+1:35-42",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+87,96%3B+Zechariah+8:20-23%3B+John+1:35-42",
            "audioQS": "Ps.87,96,Zech.8,John.1"
        }
    },
    "2022/12/01": {
        "datePretty": "Thursday, December 1, 2022",
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
    "2022/12/02": {
        "datePretty": "Friday, December 2, 2022",
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
    "2022/12/03": {
        "datePretty": "Saturday, December 3, 2022",
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
    "2022/12/04": {
        "datePretty": "Sunday, December 4, 2022",
        "calendar": "2nd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Amos 7",
                    "readQS": "Amos+7",
                    "audioQS": "Amos.7"
                },
                {
                    "pretty": "Luke 1:5\u201320",
                    "readQS": "Luke+1:5-20",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+80%3B+Amos+7%3B+Luke+1:5-20",
            "audioQS": "Ps.80,Amos.7,Luke.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 11",
                    "readQS": "Psalm+11",
                    "audioQS": "Ps.11"
                },
                {
                    "pretty": "1 Kings 18:17\u201339",
                    "readQS": "1+Kings+18:17-39",
                    "audioQS": "1Kgs.18"
                },
                {
                    "pretty": "John 1:19\u201328",
                    "readQS": "John+1:19-28",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+11%3B+1+Kings+18:17-39%3B+John+1:19-28",
            "audioQS": "Ps.11,1Kgs.18,John.1"
        }
    },
    "2022/12/05": {
        "datePretty": "Monday, December 5, 2022",
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
    "2022/12/06": {
        "datePretty": "Tuesday, December 6, 2022",
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
    "2022/12/07": {
        "datePretty": "Wednesday, December 7, 2022",
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
    "2022/12/08": {
        "datePretty": "Thursday, December 8, 2022",
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
    "2022/12/09": {
        "datePretty": "Friday, December 9, 2022",
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
    "2022/12/10": {
        "datePretty": "Saturday, December 10, 2022",
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
    "2022/12/11": {
        "datePretty": "Sunday, December 11, 2022",
        "calendar": "3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68:1\u201319",
                    "readQS": "Psalm+68:1-19",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Zephaniah 3:14\u201320",
                    "readQS": "Zephaniah+3:14-20",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Philippians 4:4\u20137",
                    "readQS": "Philippians+4:4-7",
                    "audioQS": "Phil.4"
                }
            ],
            "readQS": "Psalm+68:1-19%3B+Zephaniah+3:14-20%3B+Philippians+4:4-7",
            "audioQS": "Ps.68,Zeph.3,Phil.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 12",
                    "readQS": "Psalm+12",
                    "audioQS": "Ps.12"
                },
                {
                    "pretty": "Isaiah 5:8\u201330",
                    "readQS": "Isaiah+5:8-30",
                    "audioQS": "Isa.5"
                },
                {
                    "pretty": "Acts 13:13\u201341",
                    "readQS": "Acts+13:13-41",
                    "audioQS": "Acts.13"
                }
            ],
            "readQS": "Psalm+12%3B+Isaiah+5:8-30%3B+Acts+13:13-41",
            "audioQS": "Ps.12,Isa.5,Acts.13"
        }
    },
    "2022/12/12": {
        "datePretty": "Monday, December 12, 2022",
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
            "readQS": "Psalm+26%3B+Isaiah+38:1-8,38:21-22%3B+Matthew+16:13-",
            "audioQS": "Ps.26,Isa.38,Matt.16"
        }
    },
    "2022/12/13": {
        "datePretty": "Tuesday, December 13, 2022",
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
            "readQS": "Psalm+50%3B+Isaiah+38:9-20%3B+Matthew+17:1-13",
            "audioQS": "Ps.50,Isa.38,Matt.17"
        }
    },
    "2022/12/14": {
        "datePretty": "Wednesday, December 14, 2022",
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
    "2022/12/15": {
        "datePretty": "Thursday, December 15, 2022",
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
    "2022/12/16": {
        "datePretty": "Friday, December 16, 2022",
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
    "2022/12/17": {
        "datePretty": "Saturday, December 17, 2022",
        "calendar": "Week of 3rd Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
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
            "readQS": "Psalm+71%3B+Isaiah+52:1-12%3B+Jude",
            "audioQS": "Ps.71,Isa.52,Jude"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
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
            "readQS": "Psalm+43%3B+Zephaniah+3:14-%3B+Matthew+18:21-",
            "audioQS": "Ps.43,Zeph.3,Matt.18"
        }
    },
    "2022/12/18": {
        "datePretty": "Sunday, December 18, 2022",
        "calendar": "4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Micah 5:2\u20135a",
                    "readQS": "Micah+5:2-5a",
                    "audioQS": "Mic.5"
                },
                {
                    "pretty": "Luke 1:26\u201338",
                    "readQS": "Luke+1:26-38",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+144%3B+Micah+5:2-5a%3B+Luke+1:26-38",
            "audioQS": "Ps.144,Mic.5,Luke.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "1 Samuel 1:1\u201320",
                    "readQS": "1+Samuel+1:1-20",
                    "audioQS": "1Sam.1"
                },
                {
                    "pretty": "Revelation 22:6\u201321",
                    "readQS": "Revelation+22:6-21",
                    "audioQS": "Rev.22"
                }
            ],
            "readQS": "Psalm+113%3B+1+Samuel+1:1-20%3B+Revelation+22:6-21",
            "audioQS": "Ps.113,1Sam.1,Rev.22"
        }
    },
    "2022/12/19": {
        "datePretty": "Monday, December 19, 2022",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 146",
                    "readQS": "Psalm+146",
                    "audioQS": "Ps.146"
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
            "readQS": "Psalm+146%3B+Isaiah+52:13-%3B+Isaiah+53%3B+2+Peter+1:1-15",
            "audioQS": "Ps.146,Isa.52,Isa.53,2Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
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
            "readQS": "Psalm+57%3B+Malachi+1:1,1:6-%3B+Matthew+19:1-12",
            "audioQS": "Ps.57,Mal.1,Matt.19"
        }
    },
    "2022/12/20": {
        "datePretty": "Tuesday, December 20, 2022",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
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
            "readQS": "Psalm+46%3B+Isaiah+54%3B+2+Peter+1:16-2:3",
            "audioQS": "Ps.46,Isa.54,2Pet.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
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
            "readQS": "Psalm+4%3B+Malachi+2:1-16%3B+Matthew+19:13-15",
            "audioQS": "Ps.4,Mal.2,Matt.19"
        }
    },
    "2022/12/21": {
        "datePretty": "Wednesday, December 21, 2022",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
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
            "readQS": "Psalm+121%3B+Isaiah+55%3B+2+Peter+2:4-",
            "audioQS": "Ps.121,Isa.55,2Pet.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
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
            "readQS": "Psalm+84%3B+Malachi+2:17-3:12%3B+Matthew+19:16-",
            "audioQS": "Ps.84,Mal.2,Matt.19"
        }
    },
    "2022/12/22": {
        "datePretty": "Thursday, December 22, 2022",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 124",
                    "readQS": "Psalm+124",
                    "audioQS": "Ps.124"
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
            "readQS": "Psalm+124%3B+Isaiah+56:1-8%3B+2+Peter+3",
            "audioQS": "Ps.124,Isa.56,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
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
            "readQS": "Psalm+24%3B+Malachi+3:13-%3B+Malachi+4%3B+Matthew+23:1-12",
            "audioQS": "Ps.24,Mal.3,Mal.4,Matt.23"
        }
    },
    "2022/12/23": {
        "datePretty": "Friday, December 23, 2022",
        "calendar": "Week of 4th Sunday of Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 130",
                    "readQS": "Psalm+130",
                    "audioQS": "Ps.130"
                },
                {
                    "pretty": "Isaiah 63:1\u20136",
                    "readQS": "Isaiah+63:1-6",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "2 John",
                    "readQS": "2+John",
                    "audioQS": "2John"
                }
            ],
            "readQS": "Psalm+130%3B+Isaiah+63:1-6%3B+2+John",
            "audioQS": "Ps.130,Isa.63,2John"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201337",
                    "readQS": "Psalm+89:1-37",
                    "audioQS": "Ps.89"
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
            "readQS": "Psalm+89:1-37%3B+Nahum+1%3B+Matthew+23:13-28",
            "audioQS": "Ps.89,Nah.1,Matt.23"
        }
    },
    "2022/12/24": {
        "datePretty": "Saturday, December 24, 2022",
        "calendar": "Christmas eve",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Isaiah 58",
                    "readQS": "Isaiah+58",
                    "audioQS": "Isa.58"
                },
                {
                    "pretty": "3 John",
                    "readQS": "3+John",
                    "audioQS": "3John"
                }
            ],
            "readQS": "Psalm+45%3B+Isaiah+58%3B+3+John",
            "audioQS": "Ps.45,Isa.58,3John"
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
    "2022/12/25": {
        "datePretty": "Sunday, December 25, 2022",
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
                }
            ],
            "readQS": "Psalm+8%3B+Isaiah+65:17-25%3B+Philippians+2:5-11",
            "audioQS": "Ps.8,Isa.65,Phil.2"
        }
    },
    "2022/12/26": {
        "datePretty": "Monday, December 26, 2022",
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
    "2022/12/27": {
        "datePretty": "Tuesday, December 27, 2022",
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
    "2022/12/28": {
        "datePretty": "Wednesday, December 28, 2022",
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
    "2022/12/29": {
        "datePretty": "Thursday, December 29, 2022",
        "calendar": "Week of 1st Sunday of Christmas",
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
    "2022/12/30": {
        "datePretty": "Friday, December 30, 2022",
        "calendar": "Week of 1st Sunday of Christmas",
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
    "2022/12/31": {
        "datePretty": "Saturday, December 31, 2022",
        "calendar": "Week of 1st Sunday of Christmas",
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
    "2023/01/01": {
        "datePretty": "Sunday, January 1, 2023",
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
                    "pretty": "Deuteronomy 30:11\u201320",
                    "readQS": "Deuteronomy+30:11-20",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "Acts 3:1\u201316",
                    "readQS": "Acts+3:1-16",
                    "audioQS": "Acts.3"
                }
            ],
            "readQS": "Psalm+115%3B+Deuteronomy+30:11-20%3B+Acts+3:1-16",
            "audioQS": "Ps.115,Deut.30,Acts.3"
        }
    },
    "2023/01/02": {
        "datePretty": "Monday, January 2, 2023",
        "calendar": "Week of 2nd Sunday of Christmas",
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
    "2023/01/03": {
        "datePretty": "Tuesday, January 3, 2023",
        "calendar": "Week of 2nd Sunday of Christmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 127",
                    "readQS": "Psalm+127",
                    "audioQS": "Ps.127"
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
            "readQS": "Psalm+127%3B+Isaiah+60:13-%3B+John+1:43-",
            "audioQS": "Ps.127,Isa.60,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 2",
                    "readQS": "Psalm+2",
                    "audioQS": "Ps.2"
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
            "readQS": "Psalm+2%3B+Ruth+2%3B+Colossians+3:1-11",
            "audioQS": "Ps.2,Ruth.2,Col.3"
        }
    },
    "2023/01/04": {
        "datePretty": "Wednesday, January 4, 2023",
        "calendar": "Week of 2nd Sunday of Christmas",
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
    "2023/01/05": {
        "datePretty": "Thursday, January 5, 2023",
        "calendar": "Week of 2nd Sunday of Christmas",
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
    "2023/01/06": {
        "datePretty": "Friday, January 6, 2023",
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
    "2023/01/07": {
        "datePretty": "Saturday, January 7, 2023",
        "calendar": "Week of 2nd Sunday of Christmas",
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
    "2023/01/08": {
        "datePretty": "Sunday, January 8, 2023",
        "calendar": "The Baptism of the Lord",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u201329",
                    "readQS": "Psalm+89:19-29",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Exodus 14:15\u201322",
                    "readQS": "Exodus+14:15-22",
                    "audioQS": "Exod.14"
                },
                {
                    "pretty": "1 John 5:6\u20139",
                    "readQS": "1+John+5:6-9",
                    "audioQS": "1John.5"
                }
            ],
            "readQS": "Psalm+89:19-29%3B+Exodus+14:15-22%3B+1+John+5:6-9",
            "audioQS": "Ps.89,Exod.14,1John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46,47",
                    "readQS": "Psalm+46,47",
                    "audioQS": "Ps.46,47"
                },
                {
                    "pretty": "Joshua 3:1\u20138,14\u201317",
                    "readQS": "Joshua+3:1-8,14-17",
                    "audioQS": "Josh.3"
                },
                {
                    "pretty": "Hebrews 1:1\u201312",
                    "readQS": "Hebrews+1:1-12",
                    "audioQS": "Heb.1"
                }
            ],
            "readQS": "Psalm+46,47%3B+Joshua+3:1-8,14-17%3B+Hebrews+1:1-12",
            "audioQS": "Ps.46,47,Josh.3,Heb.1"
        }
    },
    "2023/01/09": {
        "datePretty": "Monday, January 9, 2023",
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
    "2023/01/10": {
        "datePretty": "Tuesday, January 10, 2023",
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
    "2023/01/11": {
        "datePretty": "Wednesday, January 11, 2023",
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
    "2023/01/12": {
        "datePretty": "Thursday, January 12, 2023",
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
    "2023/01/13": {
        "datePretty": "Friday, January 13, 2023",
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
    "2023/01/14": {
        "datePretty": "Saturday, January 14, 2023",
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
    "2023/01/15": {
        "datePretty": "Sunday, January 15, 2023",
        "calendar": "2nd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145:1\u201312",
                    "readQS": "Psalm+145:1-12",
                    "audioQS": "Ps.145"
                },
                {
                    "pretty": "Jeremiah 1:4\u201310",
                    "readQS": "Jeremiah+1:4-10",
                    "audioQS": "Jer.1"
                },
                {
                    "pretty": "Mark 1:14\u201320",
                    "readQS": "Mark+1:14-20",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+145:1-12%3B+Jeremiah+1:4-10%3B+Mark+1:14-20",
            "audioQS": "Ps.145,Jer.1,Mark.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 96",
                    "readQS": "Psalm+96",
                    "audioQS": "Ps.96"
                },
                {
                    "pretty": "Ezekiel 2:1\u20133:4",
                    "readQS": "Ezekiel+2:1-3:4",
                    "audioQS": "Ezek.2"
                },
                {
                    "pretty": "Galatians 1:11\u201324",
                    "readQS": "Galatians+1:11-24",
                    "audioQS": "Gal.1"
                }
            ],
            "readQS": "Psalm+96%3B+Ezekiel+2:1-3:4%3B+Galatians+1:11-24",
            "audioQS": "Ps.96,Ezek.2,Gal.1"
        }
    },
    "2023/01/16": {
        "datePretty": "Monday, January 16, 2023",
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
    "2023/01/17": {
        "datePretty": "Tuesday, January 17, 2023",
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
    "2023/01/18": {
        "datePretty": "Wednesday, January 18, 2023",
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
    "2023/01/19": {
        "datePretty": "Thursday, January 19, 2023",
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
    "2023/01/20": {
        "datePretty": "Friday, January 20, 2023",
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
    "2023/01/21": {
        "datePretty": "Saturday, January 21, 2023",
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
    "2023/01/22": {
        "datePretty": "Sunday, January 22, 2023",
        "calendar": "3rd Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 113",
                    "readQS": "Psalm+113",
                    "audioQS": "Ps.113"
                },
                {
                    "pretty": "Amos 3:1\u20138",
                    "readQS": "Amos+3:1-8",
                    "audioQS": "Amos.3"
                },
                {
                    "pretty": "1 John 1:1\u20134",
                    "readQS": "1+John+1:1-4",
                    "audioQS": "1John.1"
                }
            ],
            "readQS": "Psalm+113%3B+Amos+3:1-8%3B+1+John+1:1-4",
            "audioQS": "Ps.113,Amos.3,1John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Ecclesiastes 3:1\u201311",
                    "readQS": "Ecclesiastes+3:1-11",
                    "audioQS": "Eccl.3"
                },
                {
                    "pretty": "1 Peter 1:3\u201312",
                    "readQS": "1+Peter+1:3-12",
                    "audioQS": "1Pet.1"
                }
            ],
            "readQS": "Psalm+33%3B+Ecclesiastes+3:1-11%3B+1+Peter+1:3-12",
            "audioQS": "Ps.33,Eccl.3,1Pet.1"
        }
    },
    "2023/01/23": {
        "datePretty": "Monday, January 23, 2023",
        "calendar": "Week of 3rd Sunday after the Epiphany",
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
    "2023/01/24": {
        "datePretty": "Tuesday, January 24, 2023",
        "calendar": "Week of 3rd Sunday after the Epiphany",
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
    "2023/01/25": {
        "datePretty": "Wednesday, January 25, 2023",
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
    "2023/01/26": {
        "datePretty": "Thursday, January 26, 2023",
        "calendar": "Week of 3rd Sunday after the Epiphany",
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
    "2023/01/27": {
        "datePretty": "Friday, January 27, 2023",
        "calendar": "Week of 3rd Sunday after the Epiphany",
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
    "2023/01/28": {
        "datePretty": "Saturday, January 28, 2023",
        "calendar": "Week of 3rd Sunday after the Epiphany",
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
    "2023/01/29": {
        "datePretty": "Sunday, January 29, 2023",
        "calendar": "4th Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71:1\u20136,15\u201317",
                    "readQS": "Psalm+71:1-6,15-17",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Haggai 2:1\u20139",
                    "readQS": "Haggai+2:1-9",
                    "audioQS": "Hag.2"
                },
                {
                    "pretty": "1 Cor 3:10\u201317",
                    "readQS": "1+Cor+3:10-17",
                    "audioQS": "1 Cor 3"
                }
            ],
            "readQS": "Psalm+71:1-6,15-17%3B+Haggai+2:1-9%3B+1+Cor+3:10-17",
            "audioQS": "Ps.71,Hag.2,1 Cor 3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Genesis 28:10\u2013end",
                    "readQS": "Genesis+28:10-",
                    "audioQS": "Gen.28"
                },
                {
                    "pretty": "Philemon 1\u201316",
                    "readQS": "Philemon+1-16",
                    "audioQS": "Phlm.1\u201316"
                }
            ],
            "readQS": "Psalm+34%3B+Genesis+28:10-%3B+Philemon+1-16",
            "audioQS": "Ps.34,Gen.28,Phlm.1\u201316"
        }
    },
    "2023/01/30": {
        "datePretty": "Monday, January 30, 2023",
        "calendar": "Week of 4th Sunday after the Epiphany",
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
    "2023/01/31": {
        "datePretty": "Tuesday, January 31, 2023",
        "calendar": "Week of 4th Sunday after the Epiphany",
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
    "2023/02/01": {
        "datePretty": "Wednesday, February 1, 2023",
        "calendar": "Week of 4th Sunday after the Epiphany",
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
    "2023/02/02": {
        "datePretty": "Thursday, February 2, 2023",
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
                    "pretty": "Romans 12:1\u20135",
                    "readQS": "Romans+12:1-5",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+48,146%3B+Exodus+13:1-16%3B+Romans+12:1-5",
            "audioQS": "Ps.48,146,Exod.13,Rom.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 122,132",
                    "readQS": "Psalm+122,132",
                    "audioQS": "Ps.122,132"
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
            "readQS": "Psalm+122,132%3B+Haggai+2:1-9%3B+John+2:18-22",
            "audioQS": "Ps.122,132,Hag.2,John.2"
        }
    },
    "2023/02/03": {
        "datePretty": "Friday, February 3, 2023",
        "calendar": "Week of 4th Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
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
            "readQS": "Psalm+19%3B+Hosea+13:1-14%3B+1+Corinthians+16:1-9",
            "audioQS": "Ps.19,Hos.13,1Cor.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 22",
                    "readQS": "Psalm+22",
                    "audioQS": "Ps.22"
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
            "readQS": "Psalm+22%3B+Genesis+22:1-19%3B+Matthew+28:1-15",
            "audioQS": "Ps.22,Gen.22,Matt.28"
        }
    },
    "2023/02/04": {
        "datePretty": "Saturday, February 4, 2023",
        "calendar": "Week of 4th Sunday after the Epiphany",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
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
            "readQS": "Psalm+23%3B+Hosea+14%3B+1+Corinthians+16:10-",
            "audioQS": "Ps.23,Hos.14,1Cor.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 24",
                    "readQS": "Psalm+24",
                    "audioQS": "Ps.24"
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
            "readQS": "Psalm+24%3B+Genesis+23%3B+Matthew+28:16-",
            "audioQS": "Ps.24,Gen.23,Matt.28"
        }
    },
    "2023/02/05": {
        "datePretty": "Sunday, February 5, 2023",
        "calendar": "3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5,6",
                    "readQS": "Psalm+5,6",
                    "audioQS": "Ps.5,6"
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
            "readQS": "Psalm+5,6%3B+Jeremiah+26:1-16%3B+Acts+3:1-10",
            "audioQS": "Ps.5,6,Jer.26,Acts.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 4",
                    "readQS": "Psalm+4",
                    "audioQS": "Ps.4"
                },
                {
                    "pretty": "Amos 2:4\u201316",
                    "readQS": "Amos+2:4-16",
                    "audioQS": "Amos.2"
                },
                {
                    "pretty": "Ephesians 4:17\u201332",
                    "readQS": "Ephesians+4:17-32",
                    "audioQS": "Eph.4"
                }
            ],
            "readQS": "Psalm+4%3B+Amos+2:4-16%3B+Ephesians+4:17-32",
            "audioQS": "Ps.4,Amos.2,Eph.4"
        }
    },
    "2023/02/06": {
        "datePretty": "Monday, February 6, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
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
            "readQS": "Psalm+30%3B+2+Chronicles+2:1-16%3B+John+17:1-5",
            "audioQS": "Ps.30,2Chr.2,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 28",
                    "readQS": "Psalm+28",
                    "audioQS": "Ps.28"
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
            "readQS": "Psalm+28%3B+Genesis+24:1-28%3B+1+Timothy+6:1-10",
            "audioQS": "Ps.28,Gen.24,1Tim.6"
        }
    },
    "2023/02/07": {
        "datePretty": "Tuesday, February 7, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
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
            "readQS": "Psalm+36%3B+2+Chronicles+3%3B+John+17:6-19",
            "audioQS": "Ps.36,2Chr.3,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
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
            "readQS": "Psalm+33%3B+Genesis+24:29-%3B+1+Timothy+6:11-",
            "audioQS": "Ps.33,Gen.24,1Tim.6"
        }
    },
    "2023/02/08": {
        "datePretty": "Wednesday, February 8, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
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
            "readQS": "Psalm+34%3B+2+Chronicles+5%3B+John+17:20-",
            "audioQS": "Ps.34,2Chr.5,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201356",
                    "readQS": "Psalm+119:33-56",
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
            "readQS": "Psalm+119:33-56%3B+Genesis+25:7-11,25:19-%3B+2+Timothy+1:1-14",
            "audioQS": "Ps.119,Gen.25,2Tim.1"
        }
    },
    "2023/02/09": {
        "datePretty": "Thursday, February 9, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
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
            "readQS": "Psalm+37%3B+2+Chronicles+6:1-21%3B+John+18:1-11",
            "audioQS": "Ps.37,2Chr.6,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
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
            "readQS": "Psalm+40%3B+Genesis+26:34-27:40%3B+2+Timothy+1:15-2:13",
            "audioQS": "Ps.40,Gen.26,2Tim.1"
        }
    },
    "2023/02/10": {
        "datePretty": "Friday, February 10, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
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
            "readQS": "Psalm+31%3B+2+Chronicles+6:22-%3B+John+18:12-27",
            "audioQS": "Ps.31,2Chr.6,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 35",
                    "readQS": "Psalm+35",
                    "audioQS": "Ps.35"
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
            "readQS": "Psalm+35%3B+Genesis+27:41-%3B+Genesis+28%3B+2+Timothy+2:14-",
            "audioQS": "Ps.35,Gen.27,Gen.28,2Tim.2"
        }
    },
    "2023/02/11": {
        "datePretty": "Saturday, February 11, 2023",
        "calendar": "Week of 3rd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
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
            "readQS": "Psalm+42%3B+2+Chronicles+7%3B+John+18:28-",
            "audioQS": "Ps.42,2Chr.7,John.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
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
            "readQS": "Psalm+46%3B+Genesis+29:1-30%3B+2+Timothy+3",
            "audioQS": "Ps.46,Gen.29,2Tim.3"
        }
    },
    "2023/02/12": {
        "datePretty": "Sunday, February 12, 2023",
        "calendar": "2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 100,150",
                    "readQS": "Psalm+100,150",
                    "audioQS": "Ps.100,150"
                },
                {
                    "pretty": "Job 38:1\u201321",
                    "readQS": "Job+38:1-21",
                    "audioQS": "Job.38"
                },
                {
                    "pretty": "Colossians 1:15\u201320",
                    "readQS": "Colossians+1:15-20",
                    "audioQS": "Col.1"
                }
            ],
            "readQS": "Psalm+100,150%3B+Job+38:1-21%3B+Colossians+1:15-20",
            "audioQS": "Ps.100,150,Job.38,Col.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148",
                    "readQS": "Psalm+148",
                    "audioQS": "Ps.148"
                },
                {
                    "pretty": "Proverbs 8:1,22\u201331",
                    "readQS": "Proverbs+8:1,22-31",
                    "audioQS": "Prov.8"
                },
                {
                    "pretty": "Revelation 4",
                    "readQS": "Revelation+4",
                    "audioQS": "Rev.4"
                }
            ],
            "readQS": "Psalm+148%3B+Proverbs+8:1,22-31%3B+Revelation+4",
            "audioQS": "Ps.148,Prov.8,Rev.4"
        }
    },
    "2023/02/13": {
        "datePretty": "Monday, February 13, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
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
            "readQS": "Psalm+44%3B+2+Chronicles+9:1-12%3B+John+19:1-16",
            "audioQS": "Ps.44,2Chr.9,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
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
            "readQS": "Psalm+47%3B+Genesis+29:31-30:24%3B+2+Timothy+4:1-8",
            "audioQS": "Ps.47,Gen.29,2Tim.4"
        }
    },
    "2023/02/14": {
        "datePretty": "Tuesday, February 14, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
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
            "readQS": "Psalm+48%3B+2+Chronicles+10:1-11:4%3B+John+19:17-30",
            "audioQS": "Ps.48,2Chr.10,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
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
            "readQS": "Psalm+50%3B+Genesis+31:1-24%3B+2+Timothy+4:9-",
            "audioQS": "Ps.50,Gen.31,2Tim.4"
        }
    },
    "2023/02/15": {
        "datePretty": "Wednesday, February 15, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
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
            "readQS": "Psalm+119:57-80%3B+2+Chronicles+12%3B+John+19:31-",
            "audioQS": "Ps.119,2Chr.12,John.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 59",
                    "readQS": "Psalm+59",
                    "audioQS": "Ps.59"
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
            "readQS": "Psalm+59%3B+Genesis+31:25-32:2%3B+Titus+1",
            "audioQS": "Ps.59,Gen.31,Titus.1"
        }
    },
    "2023/02/16": {
        "datePretty": "Thursday, February 16, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
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
            "readQS": "Psalm+57%3B+2+Chronicles+13:1-14:1%3B+John+20:1-10",
            "audioQS": "Ps.57,2Chr.13,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 62",
                    "readQS": "Psalm+62",
                    "audioQS": "Ps.62"
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
            "readQS": "Psalm+62%3B+Genesis+32:3-30%3B+Titus+2",
            "audioQS": "Ps.62,Gen.32,Titus.2"
        }
    },
    "2023/02/17": {
        "datePretty": "Friday, February 17, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
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
            "readQS": "Psalm+51%3B+2+Chronicles+14:2-%3B+John+20:11-18",
            "audioQS": "Ps.51,2Chr.14,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
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
            "readQS": "Psalm+38%3B+Genesis+33:1-17%3B+Titus+3",
            "audioQS": "Ps.38,Gen.33,Titus.3"
        }
    },
    "2023/02/18": {
        "datePretty": "Saturday, February 18, 2023",
        "calendar": "Week of 2nd Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
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
            "readQS": "Psalm+68%3B+2+Chronicles+15:1-15%3B+John+20:19-",
            "audioQS": "Ps.68,2Chr.15,John.20"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
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
            "readQS": "Psalm+66%3B+Genesis+35%3B+Philemon",
            "audioQS": "Ps.66,Gen.35,Phlm"
        }
    },
    "2023/02/19": {
        "datePretty": "Sunday, February 19, 2023",
        "calendar": "The Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Exodus 34:29\u2013end",
                    "readQS": "Exodus+34:29-",
                    "audioQS": "Exod.34"
                },
                {
                    "pretty": "2 Corinthians 4:3\u20136",
                    "readQS": "2+Corinthians+4:3-6",
                    "audioQS": "2Cor.4"
                }
            ],
            "readQS": "Psalm+72%3B+Exodus+34:29-%3B+2+Corinthians+4:3-6",
            "audioQS": "Ps.72,Exod.34,2Cor.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 84",
                    "readQS": "Psalm+84",
                    "audioQS": "Ps.84"
                },
                {
                    "pretty": "2 Kings 2:1\u201312",
                    "readQS": "2+Kings+2:1-12",
                    "audioQS": "2Kgs.2"
                },
                {
                    "pretty": "Matthew 17:9\u201323",
                    "readQS": "Matthew+17:9-23",
                    "audioQS": "Matt.17"
                }
            ],
            "readQS": "Psalm+84%3B+2+Kings+2:1-12%3B+Matthew+17:9-23",
            "audioQS": "Ps.84,2Kgs.2,Matt.17"
        }
    },
    "2023/02/20": {
        "datePretty": "Monday, February 20, 2023",
        "calendar": "Week of the Sunday before Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
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
            "readQS": "Psalm+71%3B+Jeremiah+1%3B+John+3:1-21",
            "audioQS": "Ps.71,Jer.1,John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
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
            "readQS": "Psalm+72%3B+Genesis+37:1-11%3B+Galatians+1",
            "audioQS": "Ps.72,Gen.37,Gal.1"
        }
    },
    "2023/02/21": {
        "datePretty": "Tuesday, February 21, 2023",
        "calendar": "Shrove Tuesday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
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
            "readQS": "Psalm+73%3B+Jeremiah+2:1-13%3B+John+3:22-",
            "audioQS": "Ps.73,Jer.2,John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
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
            "readQS": "Psalm+74%3B+Genesis+37:12-%3B+Galatians+2:1-10",
            "audioQS": "Ps.74,Gen.37,Gal.2"
        }
    },
    "2023/02/22": {
        "datePretty": "Wednesday, February 22, 2023",
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
    "2023/02/23": {
        "datePretty": "Thursday, February 23, 2023",
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
    "2023/02/24": {
        "datePretty": "Friday, February 24, 2023",
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
    "2023/02/25": {
        "datePretty": "Saturday, February 25, 2023",
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
    "2023/02/26": {
        "datePretty": "Sunday, February 26, 2023",
        "calendar": "1st Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201316",
                    "readQS": "Psalm+119:1-16",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jeremiah 18:1\u201311",
                    "readQS": "Jeremiah+18:1-11",
                    "audioQS": "Jer.18"
                },
                {
                    "pretty": "Luke 18:9\u201314",
                    "readQS": "Luke+18:9-14",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+119:1-16%3B+Jeremiah+18:1-11%3B+Luke+18:9-14",
            "audioQS": "Ps.119,Jer.18,Luke.18"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50:1\u201315",
                    "readQS": "Psalm+50:1-15",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "Deuteronomy 6:4\u20139,6:16\u201325",
                    "readQS": "Deuteronomy+6:4-9,6:16-25",
                    "audioQS": "Deut.6"
                },
                {
                    "pretty": "Luke 15:1\u201310",
                    "readQS": "Luke+15:1-10",
                    "audioQS": "Luke.15"
                }
            ],
            "readQS": "Psalm+50:1-15%3B+Deuteronomy+6:4-9,6:16-25%3B+Luke+15:1-10",
            "audioQS": "Ps.50,Deut.6,Luke.15"
        }
    },
    "2023/02/27": {
        "datePretty": "Monday, February 27, 2023",
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
    "2023/02/28": {
        "datePretty": "Tuesday, February 28, 2023",
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
    "2023/03/01": {
        "datePretty": "Wednesday, March 1, 2023",
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
    "2023/03/02": {
        "datePretty": "Thursday, March 2, 2023",
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
    "2023/03/03": {
        "datePretty": "Friday, March 3, 2023",
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
    "2023/03/04": {
        "datePretty": "Saturday, March 4, 2023",
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
    "2023/03/05": {
        "datePretty": "Sunday, March 5, 2023",
        "calendar": "2nd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
                },
                {
                    "pretty": "Jeremiah 22:1\u20139",
                    "readQS": "Jeremiah+22:1-9",
                    "audioQS": "Jer.22"
                },
                {
                    "pretty": "Matthew 8:1\u201313",
                    "readQS": "Matthew+8:1-13",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+74%3B+Jeremiah+22:1-9%3B+Matthew+8:1-13",
            "audioQS": "Ps.74,Jer.22,Matt.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 135",
                    "readQS": "Psalm+135",
                    "audioQS": "Ps.135"
                },
                {
                    "pretty": "Numbers 21:4\u20139",
                    "readQS": "Numbers+21:4-9",
                    "audioQS": "Num.21"
                },
                {
                    "pretty": "Luke 14:27\u201333",
                    "readQS": "Luke+14:27-33",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+135%3B+Numbers+21:4-9%3B+Luke+14:27-33",
            "audioQS": "Ps.135,Num.21,Luke.14"
        }
    },
    "2023/03/06": {
        "datePretty": "Monday, March 6, 2023",
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
                    "pretty": "Psalm 74",
                    "readQS": "Psalm+74",
                    "audioQS": "Ps.74"
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
            "readQS": "Psalm+74%3B+Genesis+43:16-%3B+Hebrews+1",
            "audioQS": "Ps.74,Gen.43,Heb.1"
        }
    },
    "2023/03/07": {
        "datePretty": "Tuesday, March 7, 2023",
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
                    "pretty": "Psalm 52",
                    "readQS": "Psalm+52",
                    "audioQS": "Ps.52"
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
            "readQS": "Psalm+52%3B+Genesis+44:1-17%3B+Hebrews+2:1-9",
            "audioQS": "Ps.52,Gen.44,Heb.2"
        }
    },
    "2023/03/08": {
        "datePretty": "Wednesday, March 8, 2023",
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
                    "pretty": "Psalm 3",
                    "readQS": "Psalm+3",
                    "audioQS": "Ps.3"
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
            "readQS": "Psalm+3%3B+Genesis+44:18-%3B+Hebrews+2:10-",
            "audioQS": "Ps.3,Gen.44,Heb.2"
        }
    },
    "2023/03/09": {
        "datePretty": "Thursday, March 9, 2023",
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
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
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
            "readQS": "Psalm+71%3B+Genesis+45:1-15%3B+Hebrews+3:1-6",
            "audioQS": "Ps.71,Gen.45,Heb.3"
        }
    },
    "2023/03/10": {
        "datePretty": "Friday, March 10, 2023",
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
                    "pretty": "Psalm 6",
                    "readQS": "Psalm+6",
                    "audioQS": "Ps.6"
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
            "readQS": "Psalm+6%3B+Genesis+45:16-%3B+Hebrews+3:7-",
            "audioQS": "Ps.6,Gen.45,Heb.3"
        }
    },
    "2023/03/11": {
        "datePretty": "Saturday, March 11, 2023",
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
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
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
            "readQS": "Psalm+23%3B+Genesis+46:1-7,46:28-%3B+Hebrews+4:1-13",
            "audioQS": "Ps.23,Gen.46,Heb.4"
        }
    },
    "2023/03/12": {
        "datePretty": "Sunday, March 12, 2023",
        "calendar": "3rd Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "Amos 7:10\u201317",
                    "readQS": "Amos+7:10-17",
                    "audioQS": "Amos.7"
                },
                {
                    "pretty": "2 Corinthians 1:1\u201311",
                    "readQS": "2+Corinthians+1:1-11",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+46%3B+Amos+7:10-17%3B+2+Corinthians+1:1-11",
            "audioQS": "Ps.46,Amos.7,2Cor.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 40",
                    "readQS": "Psalm+40",
                    "audioQS": "Ps.40"
                },
                {
                    "pretty": "Joshua 1:1\u20139",
                    "readQS": "Joshua+1:1-9",
                    "audioQS": "Josh.1"
                },
                {
                    "pretty": "Ephesians 6:10\u201320",
                    "readQS": "Ephesians+6:10-20",
                    "audioQS": "Eph.6"
                }
            ],
            "readQS": "Psalm+40%3B+Joshua+1:1-9%3B+Ephesians+6:10-20",
            "audioQS": "Ps.40,Josh.1,Eph.6"
        }
    },
    "2023/03/13": {
        "datePretty": "Monday, March 13, 2023",
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
    "2023/03/14": {
        "datePretty": "Tuesday, March 14, 2023",
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
    "2023/03/15": {
        "datePretty": "Wednesday, March 15, 2023",
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
    "2023/03/16": {
        "datePretty": "Thursday, March 16, 2023",
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
    "2023/03/17": {
        "datePretty": "Friday, March 17, 2023",
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
    "2023/03/18": {
        "datePretty": "Saturday, March 18, 2023",
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
    "2023/03/19": {
        "datePretty": "Sunday, March 19, 2023",
        "calendar": "4th Sunday of Lent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Isaiah 43:1\u20137",
                    "readQS": "Isaiah+43:1-7",
                    "audioQS": "Isa.43"
                },
                {
                    "pretty": "Ephesians 2:8\u201314",
                    "readQS": "Ephesians+2:8-14",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+19%3B+Isaiah+43:1-7%3B+Ephesians+2:8-14",
            "audioQS": "Ps.19,Isa.43,Eph.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 31:1\u201316",
                    "readQS": "Psalm+31:1-16",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Micah 7",
                    "readQS": "Micah+7",
                    "audioQS": "Mic.7"
                },
                {
                    "pretty": "James 5",
                    "readQS": "James+5",
                    "audioQS": "Jas.5"
                }
            ],
            "readQS": "Psalm+31:1-16%3B+Micah+7%3B+James+5",
            "audioQS": "Ps.31,Mic.7,Jas.5"
        }
    },
    "2023/03/20": {
        "datePretty": "Monday, March 20, 2023",
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
    "2023/03/21": {
        "datePretty": "Tuesday, March 21, 2023",
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
    "2023/03/22": {
        "datePretty": "Wednesday, March 22, 2023",
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
    "2023/03/23": {
        "datePretty": "Thursday, March 23, 2023",
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
    "2023/03/24": {
        "datePretty": "Friday, March 24, 2023",
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
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "Genesis 3:8\u201315",
                    "readQS": "Genesis+3:8-15",
                    "audioQS": "Gen.3"
                },
                {
                    "pretty": "Galatians 4:1\u20135",
                    "readQS": "Galatians+4:1-5",
                    "audioQS": "Gal.4"
                }
            ],
            "readQS": "Psalm+85%3B+Genesis+3:8-15%3B+Galatians+4:1-5",
            "audioQS": "Ps.85,Gen.3,Gal.4"
        }
    },
    "2023/03/25": {
        "datePretty": "Saturday, March 25, 2023",
        "calendar": "The Annunciation",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111,113",
                    "readQS": "Psalm+111,113",
                    "audioQS": "Ps.111,113"
                },
                {
                    "pretty": "1 Samuel 2:1\u201310",
                    "readQS": "1+Samuel+2:1-10",
                    "audioQS": "1Sam.2"
                },
                {
                    "pretty": "Romans 5:12\u201321",
                    "readQS": "Romans+5:12-21",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+111,113%3B+1+Samuel+2:1-10%3B+Romans+5:12-21",
            "audioQS": "Ps.111,113,1Sam.2,Rom.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 131,146",
                    "readQS": "Psalm+131,146",
                    "audioQS": "Ps.131,146"
                },
                {
                    "pretty": "Isaiah 52:1\u201312",
                    "readQS": "Isaiah+52:1-12",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Hebrews 2:5\u201318",
                    "readQS": "Hebrews+2:5-18",
                    "audioQS": "Heb.2"
                }
            ],
            "readQS": "Psalm+131,146%3B+Isaiah+52:1-12%3B+Hebrews+2:5-18",
            "audioQS": "Ps.131,146,Isa.52,Heb.2"
        }
    },
    "2023/03/26": {
        "datePretty": "Sunday, March 26, 2023",
        "calendar": "5th Sunday of Lent - Passion Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Jeremiah 31:27\u201337",
                    "readQS": "Jeremiah+31:27-37",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "John 12:20\u201333",
                    "readQS": "John+12:20-33",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+86%3B+Jeremiah+31:27-37%3B+John+12:20-33",
            "audioQS": "Ps.86,Jer.31,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Lamentations 3:19\u201333",
                    "readQS": "Lamentations+3:19-33",
                    "audioQS": "Lam.3"
                },
                {
                    "pretty": "Matthew 20:17\u201334",
                    "readQS": "Matthew+20:17-34",
                    "audioQS": "Matt.20"
                }
            ],
            "readQS": "Psalm+30%3B+Lamentations+3:19-33%3B+Matthew+20:17-34",
            "audioQS": "Ps.30,Lam.3,Matt.20"
        }
    },
    "2023/03/27": {
        "datePretty": "Monday, March 27, 2023",
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
    "2023/03/28": {
        "datePretty": "Tuesday, March 28, 2023",
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
    "2023/03/29": {
        "datePretty": "Wednesday, March 29, 2023",
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
    "2023/03/30": {
        "datePretty": "Thursday, March 30, 2023",
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
    "2023/03/31": {
        "datePretty": "Friday, March 31, 2023",
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
    "2023/04/01": {
        "datePretty": "Saturday, April 1, 2023",
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
    "2023/04/02": {
        "datePretty": "Sunday, April 2, 2023",
        "calendar": "6th Sunday of Lent - Palm Sunday",
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
                    "pretty": "Luke 16:19\u201331",
                    "readQS": "Luke+16:19-31",
                    "audioQS": "Luke.16"
                }
            ],
            "readQS": "Psalm+61,62%3B+Zechariah+9:9-12%3B+Luke+16:19-31",
            "audioQS": "Ps.61,62,Zech.9,Luke.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Isaiah 5:1\u20137",
                    "readQS": "Isaiah+5:1-7",
                    "audioQS": "Isa.5"
                },
                {
                    "pretty": "Matthew 21:33\u201346",
                    "readQS": "Matthew+21:33-46",
                    "audioQS": "Matt.21"
                }
            ],
            "readQS": "Psalm+80%3B+Isaiah+5:1-7%3B+Matthew+21:33-46",
            "audioQS": "Ps.80,Isa.5,Matt.21"
        }
    },
    "2023/04/03": {
        "datePretty": "Monday, April 3, 2023",
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
    "2023/04/04": {
        "datePretty": "Tuesday, April 4, 2023",
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
    "2023/04/05": {
        "datePretty": "Wednesday, April 5, 2023",
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
    "2023/04/06": {
        "datePretty": "Thursday, April 6, 2023",
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
    "2023/04/07": {
        "datePretty": "Friday, April 7, 2023",
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
    "2023/04/08": {
        "datePretty": "Saturday, April 8, 2023",
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
    "2023/04/09": {
        "datePretty": "Sunday, April 9, 2023",
        "calendar": "Easter Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 114,117",
                    "readQS": "Psalm+114,117",
                    "audioQS": "Ps.114,117"
                },
                {
                    "pretty": "Exodus 14:10\u201318,14:26\u2013end,15:1\u20132",
                    "readQS": "Exodus+14:10-18,14:26-,15:1-2",
                    "audioQS": "Exod.14"
                },
                {
                    "pretty": "Revelation 15:2\u20134",
                    "readQS": "Revelation+15:2-4",
                    "audioQS": "Rev.15"
                }
            ],
            "readQS": "Psalm+114,117%3B+Exodus+14:10-18,14:26-,15:1-2%3B+Revelation+15:2-4",
            "audioQS": "Ps.114,117,Exod.14,Rev.15"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105",
                    "readQS": "Psalm+105",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "Song of Solomon 3:2\u20135,8:6\u20137",
                    "readQS": "Song+of+Solomon+3:2-5,8:6-7",
                    "audioQS": "Song.3"
                },
                {
                    "pretty": "John 20:11\u201318",
                    "readQS": "John+20:11-18",
                    "audioQS": "John.20"
                }
            ],
            "readQS": "Psalm+105%3B+Song+of+Solomon+3:2-5,8:6-7%3B+John+20:11-18",
            "audioQS": "Ps.105,Song.3,John.20"
        }
    },
    "2023/04/10": {
        "datePretty": "Monday, April 10, 2023",
        "calendar": "Monday in Easter Week",
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
    "2023/04/11": {
        "datePretty": "Tuesday, April 11, 2023",
        "calendar": "Tuesday in Easter Week",
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
    "2023/04/12": {
        "datePretty": "Wednesday, April 12, 2023",
        "calendar": "Wednesday in Easter Week",
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
    "2023/04/13": {
        "datePretty": "Thursday, April 13, 2023",
        "calendar": "Thursday in Easter Week",
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
    "2023/04/14": {
        "datePretty": "Friday, April 14, 2023",
        "calendar": "Friday in Easter Week",
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
    "2023/04/15": {
        "datePretty": "Saturday, April 15, 2023",
        "calendar": "Saturday in Easter Week",
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
    "2023/04/16": {
        "datePretty": "Sunday, April 16, 2023",
        "calendar": "2nd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 81:1\u201310",
                    "readQS": "Psalm+81:1-10",
                    "audioQS": "Ps.81"
                },
                {
                    "pretty": "Exodus 12:1\u201317",
                    "readQS": "Exodus+12:1-17",
                    "audioQS": "Exod.12"
                },
                {
                    "pretty": "1 Corinthians 5:6b\u20138",
                    "readQS": "1+Corinthians+5:6b-8",
                    "audioQS": "1Cor.5"
                }
            ],
            "readQS": "Psalm+81:1-10%3B+Exodus+12:1-17%3B+1+Corinthians+5:6b-8",
            "audioQS": "Ps.81,Exod.12,1Cor.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 30:1\u20135",
                    "readQS": "Psalm+30:1-5",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Daniel 6:1\u201323",
                    "readQS": "Daniel+6:1-23",
                    "audioQS": "Dan.6"
                },
                {
                    "pretty": "Mark 15:46\u201316:8",
                    "readQS": "Mark+15:46-16:8",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+30:1-5%3B+Daniel+6:1-23%3B+Mark+15:46-16:8",
            "audioQS": "Ps.30,Dan.6,Mark.15"
        }
    },
    "2023/04/17": {
        "datePretty": "Monday, April 17, 2023",
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
    "2023/04/18": {
        "datePretty": "Tuesday, April 18, 2023",
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
    "2023/04/19": {
        "datePretty": "Wednesday, April 19, 2023",
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
    "2023/04/20": {
        "datePretty": "Thursday, April 20, 2023",
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
    "2023/04/21": {
        "datePretty": "Friday, April 21, 2023",
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
    "2023/04/22": {
        "datePretty": "Saturday, April 22, 2023",
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
    "2023/04/23": {
        "datePretty": "Sunday, April 23, 2023",
        "calendar": "3rd Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Isaiah 40:1\u201311",
                    "readQS": "Isaiah+40:1-11",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "1 Peter 5:1\u201311",
                    "readQS": "1+Peter+5:1-11",
                    "audioQS": "1Pet.5"
                }
            ],
            "readQS": "Psalm+23%3B+Isaiah+40:1-11%3B+1+Peter+5:1-11",
            "audioQS": "Ps.23,Isa.40,1Pet.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Haggai 1:13 \u2013 2:9",
                    "readQS": "Haggai+1:13+-+2:9",
                    "audioQS": "Hag.1"
                },
                {
                    "pretty": "1 Cor 3:10\u201317",
                    "readQS": "1+Cor+3:10-17",
                    "audioQS": "1 Cor 3"
                }
            ],
            "readQS": "Psalm+48%3B+Haggai+1:13+-+2:9%3B+1+Cor+3:10-17",
            "audioQS": "Ps.48,Hag.1,1 Cor 3"
        }
    },
    "2023/04/24": {
        "datePretty": "Monday, April 24, 2023",
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
    "2023/04/25": {
        "datePretty": "Tuesday, April 25, 2023",
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
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Isaiah 52:7\u201310",
                    "readQS": "Isaiah+52:7-10",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Mark 1:1\u201315",
                    "readQS": "Mark+1:1-15",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+19%3B+Isaiah+52:7-10%3B+Mark+1:1-15",
            "audioQS": "Ps.19,Isa.52,Mark.1"
        }
    },
    "2023/04/26": {
        "datePretty": "Wednesday, April 26, 2023",
        "calendar": "St Mark the Evangelist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37:23\u201341,148",
                    "readQS": "Psalm+37:23-41,148",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Isaiah 62:6\u201310",
                    "readQS": "Isaiah+62:6-10",
                    "audioQS": "Isa.62"
                },
                {
                    "pretty": "Acts 12:25\u2013end",
                    "readQS": "Acts+12:25-",
                    "audioQS": "Acts.12"
                },
                {
                    "pretty": "Acts 13:1\u201313",
                    "readQS": "Acts+13:1-13",
                    "audioQS": "Acts.13"
                }
            ],
            "readQS": "Psalm+37:23-41,148%3B+Isaiah+62:6-10%3B+Acts+12:25-%3B+Acts+13:1-13",
            "audioQS": "Ps.37,Isa.62,Acts.12,Acts.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Ezekiel 1:4\u201314",
                    "readQS": "Ezekiel+1:4-14",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "2 Timothy 4:1\u201311",
                    "readQS": "2+Timothy+4:1-11",
                    "audioQS": "2Tim.4"
                }
            ],
            "readQS": "Psalm+45%3B+Ezekiel+1:4-14%3B+2+Timothy+4:1-11",
            "audioQS": "Ps.45,Ezek.1,2Tim.4"
        }
    },
    "2023/04/27": {
        "datePretty": "Thursday, April 27, 2023",
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
    "2023/04/28": {
        "datePretty": "Friday, April 28, 2023",
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
    "2023/04/29": {
        "datePretty": "Saturday, April 29, 2023",
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
    "2023/04/30": {
        "datePretty": "Sunday, April 30, 2023",
        "calendar": "4th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106:6\u201324",
                    "readQS": "Psalm+106:6-24",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Nehemiah 9:6\u201315",
                    "readQS": "Nehemiah+9:6-15",
                    "audioQS": "Neh.9"
                },
                {
                    "pretty": "1 Corinthians 10:1\u201313",
                    "readQS": "1+Corinthians+10:1-13",
                    "audioQS": "1Cor.10"
                }
            ],
            "readQS": "Psalm+106:6-24%3B+Nehemiah+9:6-15%3B+1+Corinthians+10:1-13",
            "audioQS": "Ps.106,Neh.9,1Cor.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 29:1\u201310",
                    "readQS": "Psalm+29:1-10",
                    "audioQS": "Ps.29"
                },
                {
                    "pretty": "Ezra 3:1\u201313",
                    "readQS": "Ezra+3:1-13",
                    "audioQS": "Ezra.3"
                },
                {
                    "pretty": "Ephesians 2:11\u201322",
                    "readQS": "Ephesians+2:11-22",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+29:1-10%3B+Ezra+3:1-13%3B+Ephesians+2:11-22",
            "audioQS": "Ps.29,Ezra.3,Eph.2"
        }
    },
    "2023/05/01": {
        "datePretty": "Monday, May 1, 2023",
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
                    "pretty": "Psalm 25",
                    "readQS": "Psalm+25",
                    "audioQS": "Ps.25"
                },
                {
                    "pretty": "Isaiah 40:27\u201331",
                    "readQS": "Isaiah+40:27-31",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "John 12:20\u201326",
                    "readQS": "John+12:20-26",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+25%3B+Isaiah+40:27-31%3B+John+12:20-26",
            "audioQS": "Ps.25,Isa.40,John.12"
        }
    },
    "2023/05/02": {
        "datePretty": "Tuesday, May 2, 2023",
        "calendar": "St Phillip and St James, Apostles",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139,146",
                    "readQS": "Psalm+139,146",
                    "audioQS": "Ps.139,146"
                },
                {
                    "pretty": "Proverbs 4:10\u201318",
                    "readQS": "Proverbs+4:10-18",
                    "audioQS": "Prov.4"
                },
                {
                    "pretty": "James 1:1\u201312",
                    "readQS": "James+1:1-12",
                    "audioQS": "Jas.1"
                }
            ],
            "readQS": "Psalm+139,146%3B+Proverbs+4:10-18%3B+James+1:1-12",
            "audioQS": "Ps.139,146,Prov.4,Jas.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 149",
                    "readQS": "Psalm+149",
                    "audioQS": "Ps.149"
                },
                {
                    "pretty": "Job 23:1\u201312",
                    "readQS": "Job+23:1-12",
                    "audioQS": "Job.23"
                },
                {
                    "pretty": "John 1:43\u201351",
                    "readQS": "John+1:43-51",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+149%3B+Job+23:1-12%3B+John+1:43-51",
            "audioQS": "Ps.149,Job.23,John.1"
        }
    },
    "2023/05/03": {
        "datePretty": "Wednesday, May 3, 2023",
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
    "2023/05/04": {
        "datePretty": "Thursday, May 4, 2023",
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
    "2023/05/05": {
        "datePretty": "Friday, May 5, 2023",
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
    "2023/05/06": {
        "datePretty": "Saturday, May 6, 2023",
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
    "2023/05/07": {
        "datePretty": "Sunday, May 7, 2023",
        "calendar": "5th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Ezekiel 37:1\u201312",
                    "readQS": "Ezekiel+37:1-12",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "John 5:19\u201329",
                    "readQS": "John+5:19-29",
                    "audioQS": "John.5"
                }
            ],
            "readQS": "Psalm+30%3B+Ezekiel+37:1-12%3B+John+5:19-29",
            "audioQS": "Ps.30,Ezek.37,John.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 147:1\u201312",
                    "readQS": "Psalm+147:1-12",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Zechariah 4:1\u201310",
                    "readQS": "Zechariah+4:1-10",
                    "audioQS": "Zech.4"
                },
                {
                    "pretty": "Revelation 21:1\u201314",
                    "readQS": "Revelation+21:1-14",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+147:1-12%3B+Zechariah+4:1-10%3B+Revelation+21:1-14",
            "audioQS": "Ps.147,Zech.4,Rev.21"
        }
    },
    "2023/05/08": {
        "datePretty": "Monday, May 8, 2023",
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
    "2023/05/09": {
        "datePretty": "Tuesday, May 9, 2023",
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
    "2023/05/10": {
        "datePretty": "Wednesday, May 10, 2023",
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
    "2023/05/11": {
        "datePretty": "Thursday, May 11, 2023",
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
    "2023/05/12": {
        "datePretty": "Friday, May 12, 2023",
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
    "2023/05/13": {
        "datePretty": "Saturday, May 13, 2023",
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
    "2023/05/14": {
        "datePretty": "Sunday, May 14, 2023",
        "calendar": "6th Sunday of Easter",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73:21\u201328",
                    "readQS": "Psalm+73:21-28",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Job 14:1\u20132,14:7\u201315,19:23\u201327a",
                    "readQS": "Job+14:1-2,14:7-15,19:23-27a",
                    "audioQS": "Job.14"
                },
                {
                    "pretty": "Thess 4:13\u201318",
                    "readQS": "Thess+4:13-18",
                    "audioQS": "Thess 4"
                }
            ],
            "readQS": "Psalm+73:21-28%3B+Job+14:1-2,14:7-15,19:23-27a%3B+Thess+4:13-18",
            "audioQS": "Ps.73,Job.14,Thess 4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 87,36:5\u201310",
                    "readQS": "Psalm+87,36:5-10",
                    "audioQS": "Ps.87,36"
                },
                {
                    "pretty": "Zechariah 8:1\u201313",
                    "readQS": "Zechariah+8:1-13",
                    "audioQS": "Zech.8"
                },
                {
                    "pretty": "Revelation 21:22\u2013end,22:1\u20135",
                    "readQS": "Revelation+21:22-,22:1-5",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+87,36:5-10%3B+Zechariah+8:1-13%3B+Revelation+21:22-,22:1-5",
            "audioQS": "Ps.87,36,Zech.8,Rev.21"
        }
    },
    "2023/05/15": {
        "datePretty": "Monday, May 15, 2023",
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
    "2023/05/16": {
        "datePretty": "Tuesday, May 16, 2023",
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
    "2023/05/17": {
        "datePretty": "Wednesday, May 17, 2023",
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
                    "pretty": "2 Samuel 23:1\u20135",
                    "readQS": "2+Samuel+23:1-5",
                    "audioQS": "2Sam.23"
                },
                {
                    "pretty": "Colossians 2:20\u2013end",
                    "readQS": "Colossians+2:20-",
                    "audioQS": "Col.2"
                },
                {
                    "pretty": "Colossians 3:1\u20134",
                    "readQS": "Colossians+3:1-4",
                    "audioQS": "Col.3"
                }
            ],
            "readQS": "Psalm+15,24%3B+2+Samuel+23:1-5%3B+Colossians+2:20-%3B+Colossians+3:1-4",
            "audioQS": "Ps.15,24,2Sam.23,Col.2,Col.3"
        }
    },
    "2023/05/18": {
        "datePretty": "Thursday, May 18, 2023",
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
    "2023/05/19": {
        "datePretty": "Friday, May 19, 2023",
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
    "2023/05/20": {
        "datePretty": "Saturday, May 20, 2023",
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
    "2023/05/21": {
        "datePretty": "Sunday, May 21, 2023",
        "calendar": "10 days between Ascension Day and Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 104:26\u201335",
                    "readQS": "Psalm+104:26-35",
                    "audioQS": "Ps.104"
                },
                {
                    "pretty": "Isaiah 65:17\u201325",
                    "readQS": "Isaiah+65:17-25",
                    "audioQS": "Isa.65"
                },
                {
                    "pretty": "Revelation 21:1\u20138",
                    "readQS": "Revelation+21:1-8",
                    "audioQS": "Rev.21"
                }
            ],
            "readQS": "Psalm+104:26-35%3B+Isaiah+65:17-25%3B+Revelation+21:1-8",
            "audioQS": "Ps.104,Isa.65,Rev.21"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 47",
                    "readQS": "Psalm+47",
                    "audioQS": "Ps.47"
                },
                {
                    "pretty": "1 Samuel 23:1\u20135",
                    "readQS": "1+Samuel+23:1-5",
                    "audioQS": "1Sam.23"
                },
                {
                    "pretty": "Ephesians 1:15\u201323",
                    "readQS": "Ephesians+1:15-23",
                    "audioQS": "Eph.1"
                }
            ],
            "readQS": "Psalm+47%3B+1+Samuel+23:1-5%3B+Ephesians+1:15-23",
            "audioQS": "Ps.47,1Sam.23,Eph.1"
        }
    },
    "2023/05/22": {
        "datePretty": "Monday, May 22, 2023",
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
    "2023/05/23": {
        "datePretty": "Tuesday, May 23, 2023",
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
    "2023/05/24": {
        "datePretty": "Wednesday, May 24, 2023",
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
    "2023/05/25": {
        "datePretty": "Thursday, May 25, 2023",
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
    "2023/05/26": {
        "datePretty": "Friday, May 26, 2023",
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
    "2023/05/27": {
        "datePretty": "Saturday, May 27, 2023",
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
                    "pretty": "Psalm 97,98",
                    "readQS": "Psalm+97,98",
                    "audioQS": "Ps.97,98"
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
            "readQS": "Psalm+97,98%3B+Numbers+32:1-27%3B+Luke+9:1-17",
            "audioQS": "Ps.97,98,Num.32,Luke.9"
        }
    },
    "2023/05/28": {
        "datePretty": "Sunday, May 28, 2023",
        "calendar": "Day of Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 87",
                    "readQS": "Psalm+87",
                    "audioQS": "Ps.87"
                },
                {
                    "pretty": "Genesis 11:1\u20139",
                    "readQS": "Genesis+11:1-9",
                    "audioQS": "Gen.11"
                },
                {
                    "pretty": "Acts 10:34\u201348",
                    "readQS": "Acts+10:34-48",
                    "audioQS": "Acts.10"
                }
            ],
            "readQS": "Psalm+87%3B+Genesis+11:1-9%3B+Acts+10:34-48",
            "audioQS": "Ps.87,Gen.11,Acts.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67,133",
                    "readQS": "Psalm+67,133",
                    "audioQS": "Ps.67,133"
                },
                {
                    "pretty": "Joel 2:21\u201332",
                    "readQS": "Joel+2:21-32",
                    "audioQS": "Joel.2"
                },
                {
                    "pretty": "Acts 2:14\u201321",
                    "readQS": "Acts+2:14-21",
                    "audioQS": "Acts.2"
                }
            ],
            "readQS": "Psalm+67,133%3B+Joel+2:21-32%3B+Acts+2:14-21",
            "audioQS": "Ps.67,133,Joel.2,Acts.2"
        }
    },
    "2023/05/29": {
        "datePretty": "Monday, May 29, 2023",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "2 Chronicles 17:1\u201312",
                    "readQS": "2+Chronicles+17:1-12",
                    "audioQS": "2Chr.17"
                },
                {
                    "pretty": "Romans 1:1\u201317",
                    "readQS": "Romans+1:1-17",
                    "audioQS": "Rom.1"
                }
            ],
            "readQS": "Psalm+126%3B+2+Chronicles+17:1-12%3B+Romans+1:1-17",
            "audioQS": "Ps.126,2Chr.17,Rom.1"
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
    "2023/05/30": {
        "datePretty": "Tuesday, May 30, 2023",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "2 Chronicles 18:1\u201327",
                    "readQS": "2+Chronicles+18:1-27",
                    "audioQS": "2Chr.18"
                },
                {
                    "pretty": "Romans 1:18\u2013end",
                    "readQS": "Romans+1:18-",
                    "audioQS": "Rom.1"
                }
            ],
            "readQS": "Psalm+132%3B+2+Chronicles+18:1-27%3B+Romans+1:18-",
            "audioQS": "Ps.132,2Chr.18,Rom.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Song of Solomon 2:8\u201314",
                    "readQS": "Song+of+Solomon+2:8-14",
                    "audioQS": "Song.2"
                },
                {
                    "pretty": "Luke 1:26\u201338",
                    "readQS": "Luke+1:26-38",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+45%3B+Song+of+Solomon+2:8-14%3B+Luke+1:26-38",
            "audioQS": "Ps.45,Song.2,Luke.1"
        }
    },
    "2023/05/31": {
        "datePretty": "Wednesday, May 31, 2023",
        "calendar": "The Visitation of Mary to Elizabeth",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 85",
                    "readQS": "Psalm+85",
                    "audioQS": "Ps.85"
                },
                {
                    "pretty": "1 Samuel 2:1\u201310",
                    "readQS": "1+Samuel+2:1-10",
                    "audioQS": "1Sam.2"
                },
                {
                    "pretty": "Mark 3:31\u201335",
                    "readQS": "Mark+3:31-35",
                    "audioQS": "Mark.3"
                }
            ],
            "readQS": "Psalm+85%3B+1+Samuel+2:1-10%3B+Mark+3:31-35",
            "audioQS": "Ps.85,1Sam.2,Mark.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 122",
                    "readQS": "Psalm+122",
                    "audioQS": "Ps.122"
                },
                {
                    "pretty": "Zechariah 2:10\u201313",
                    "readQS": "Zechariah+2:10-13",
                    "audioQS": "Zech.2"
                },
                {
                    "pretty": "John 3:25\u201330",
                    "readQS": "John+3:25-30",
                    "audioQS": "John.3"
                }
            ],
            "readQS": "Psalm+122%3B+Zechariah+2:10-13%3B+John+3:25-30",
            "audioQS": "Ps.122,Zech.2,John.3"
        }
    },
    "2023/06/01": {
        "datePretty": "Thursday, June 1, 2023",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "2 Chronicles 20:1\u201323",
                    "readQS": "2+Chronicles+20:1-23",
                    "audioQS": "2Chr.20"
                },
                {
                    "pretty": "Romans 2:17\u2013end",
                    "readQS": "Romans+2:17-",
                    "audioQS": "Rom.2"
                }
            ],
            "readQS": "Psalm+143%3B+2+Chronicles+20:1-23%3B+Romans+2:17-",
            "audioQS": "Ps.143,2Chr.20,Rom.2"
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
    "2023/06/02": {
        "datePretty": "Friday, June 2, 2023",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
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
                    "pretty": "Romans 3:1\u201320",
                    "readQS": "Romans+3:1-20",
                    "audioQS": "Rom.3"
                }
            ],
            "readQS": "Psalm+144%3B+2+Chronicles+22:10-%3B+2+Chronicles+23%3B+Romans+3:1-20",
            "audioQS": "Ps.144,2Chr.22,2Chr.23,Rom.3"
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
    "2023/06/03": {
        "datePretty": "Saturday, June 3, 2023",
        "calendar": "Week after Pentecost",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "2 Chronicles 24:1\u201322",
                    "readQS": "2+Chronicles+24:1-22",
                    "audioQS": "2Chr.24"
                },
                {
                    "pretty": "Romans 3:21\u2013end",
                    "readQS": "Romans+3:21-",
                    "audioQS": "Rom.3"
                }
            ],
            "readQS": "Psalm+147%3B+2+Chronicles+24:1-22%3B+Romans+3:21-",
            "audioQS": "Ps.147,2Chr.24,Rom.3"
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
    "2023/06/04": {
        "datePretty": "Sunday, June 4, 2023",
        "calendar": "Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86:8\u201313",
                    "readQS": "Psalm+86:8-13",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "Exodus 3:1\u20136,13\u201315",
                    "readQS": "Exodus+3:1-6,13-15",
                    "audioQS": "Exod.3"
                },
                {
                    "pretty": "John 17:1\u201311",
                    "readQS": "John+17:1-11",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+86:8-13%3B+Exodus+3:1-6,13-15%3B+John+17:1-11",
            "audioQS": "Ps.86,Exod.3,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 93,150",
                    "readQS": "Psalm+93,150",
                    "audioQS": "Ps.93,150"
                },
                {
                    "pretty": "Isaiah 6:1\u20138",
                    "readQS": "Isaiah+6:1-8",
                    "audioQS": "Isa.6"
                },
                {
                    "pretty": "John 16:5\u201315",
                    "readQS": "John+16:5-15",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+93,150%3B+Isaiah+6:1-8%3B+John+16:5-15",
            "audioQS": "Ps.93,150,Isa.6,John.16"
        }
    },
    "2023/06/05": {
        "datePretty": "Monday, June 5, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "2 Chronicles 26:1\u201321",
                    "readQS": "2+Chronicles+26:1-21",
                    "audioQS": "2Chr.26"
                },
                {
                    "pretty": "Romans 4:1\u201312",
                    "readQS": "Romans+4:1-12",
                    "audioQS": "Rom.4"
                }
            ],
            "readQS": "Psalm+1%3B+2+Chronicles+26:1-21%3B+Romans+4:1-12",
            "audioQS": "Ps.1,2Chr.26,Rom.4"
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
    "2023/06/06": {
        "datePretty": "Tuesday, June 6, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "2 Chronicles 28",
                    "readQS": "2+Chronicles+28",
                    "audioQS": "2Chr.28"
                },
                {
                    "pretty": "Romans 4:13\u2013end",
                    "readQS": "Romans+4:13-",
                    "audioQS": "Rom.4"
                }
            ],
            "readQS": "Psalm+5%3B+2+Chronicles+28%3B+Romans+4:13-",
            "audioQS": "Ps.5,2Chr.28,Rom.4"
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
    "2023/06/07": {
        "datePretty": "Wednesday, June 7, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "2 Chronicles 29:1\u201319",
                    "readQS": "2+Chronicles+29:1-19",
                    "audioQS": "2Chr.29"
                },
                {
                    "pretty": "Romans 5:1\u201311",
                    "readQS": "Romans+5:1-11",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+2+Chronicles+29:1-19%3B+Romans+5:1-11",
            "audioQS": "Ps.119,2Chr.29,Rom.5"
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
    "2023/06/08": {
        "datePretty": "Thursday, June 8, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "2 Chronicles 29:20\u2013end",
                    "readQS": "2+Chronicles+29:20-",
                    "audioQS": "2Chr.29"
                },
                {
                    "pretty": "Romans 5:12\u2013end",
                    "readQS": "Romans+5:12-",
                    "audioQS": "Rom.5"
                }
            ],
            "readQS": "Psalm+15%3B+2+Chronicles+29:20-%3B+Romans+5:12-",
            "audioQS": "Ps.15,2Chr.29,Rom.5"
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
    "2023/06/09": {
        "datePretty": "Friday, June 9, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "2 Chronicles 30",
                    "readQS": "2+Chronicles+30",
                    "audioQS": "2Chr.30"
                },
                {
                    "pretty": "Romans 6:1\u201314",
                    "readQS": "Romans+6:1-14",
                    "audioQS": "Rom.6"
                }
            ],
            "readQS": "Psalm+19%3B+2+Chronicles+30%3B+Romans+6:1-14",
            "audioQS": "Ps.19,2Chr.30,Rom.6"
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
    "2023/06/10": {
        "datePretty": "Saturday, June 10, 2023",
        "calendar": "Week of Trinity Sunday",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "2 Chronicles 32:1\u201322",
                    "readQS": "2+Chronicles+32:1-22",
                    "audioQS": "2Chr.32"
                },
                {
                    "pretty": "Romans 6:15\u2013end",
                    "readQS": "Romans+6:15-",
                    "audioQS": "Rom.6"
                }
            ],
            "readQS": "Psalm+23%3B+2+Chronicles+32:1-22%3B+Romans+6:15-",
            "audioQS": "Ps.23,2Chr.32,Rom.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 1,15",
                    "readQS": "Psalm+1,15",
                    "audioQS": "Ps.1,15"
                },
                {
                    "pretty": "Isaiah 42:5\u201312",
                    "readQS": "Isaiah+42:5-12",
                    "audioQS": "Isa.42"
                },
                {
                    "pretty": "Acts 14:8\u201328",
                    "readQS": "Acts+14:8-28",
                    "audioQS": "Acts.14"
                }
            ],
            "readQS": "Psalm+1,15%3B+Isaiah+42:5-12%3B+Acts+14:8-28",
            "audioQS": "Ps.1,15,Isa.42,Acts.14"
        }
    },
    "2023/06/11": {
        "datePretty": "Sunday, June 11, 2023",
        "calendar": "Barnabas the Apostle",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 38",
                    "readQS": "Psalm+38",
                    "audioQS": "Ps.38"
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
            "readQS": "Psalm+38%3B+Deuteronomy+6:10-25%3B+Acts+22:22-23:11",
            "audioQS": "Ps.38,Deut.6,Acts.22"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 41",
                    "readQS": "Psalm+41",
                    "audioQS": "Ps.41"
                },
                {
                    "pretty": "1 Samuel 18:1\u201316",
                    "readQS": "1+Samuel+18:1-16",
                    "audioQS": "1Sam.18"
                },
                {
                    "pretty": "Luke 8:41\u201356",
                    "readQS": "Luke+8:41-56",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+41%3B+1+Samuel+18:1-16%3B+Luke+8:41-56",
            "audioQS": "Ps.41,1Sam.18,Luke.8"
        }
    },
    "2023/06/12": {
        "datePretty": "Monday, June 12, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "2 Chronicles 33:1\u201313",
                    "readQS": "2+Chronicles+33:1-13",
                    "audioQS": "2Chr.33"
                },
                {
                    "pretty": "Romans 7:1\u20136",
                    "readQS": "Romans+7:1-6",
                    "audioQS": "Rom.7"
                }
            ],
            "readQS": "Psalm+30%3B+2+Chronicles+33:1-13%3B+Romans+7:1-6",
            "audioQS": "Ps.30,2Chr.33,Rom.7"
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
    "2023/06/13": {
        "datePretty": "Tuesday, June 13, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "2 Chronicles 34:1\u201318",
                    "readQS": "2+Chronicles+34:1-18",
                    "audioQS": "2Chr.34"
                },
                {
                    "pretty": "Romans 7:7\u2013end",
                    "readQS": "Romans+7:7-",
                    "audioQS": "Rom.7"
                }
            ],
            "readQS": "Psalm+36%3B+2+Chronicles+34:1-18%3B+Romans+7:7-",
            "audioQS": "Ps.36,2Chr.34,Rom.7"
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
    "2023/06/14": {
        "datePretty": "Wednesday, June 14, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "2 Chronicles 34:19\u2013end",
                    "readQS": "2+Chronicles+34:19-",
                    "audioQS": "2Chr.34"
                },
                {
                    "pretty": "Romans 8:1\u201311",
                    "readQS": "Romans+8:1-11",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+34%3B+2+Chronicles+34:19-%3B+Romans+8:1-11",
            "audioQS": "Ps.34,2Chr.34,Rom.8"
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
    "2023/06/15": {
        "datePretty": "Thursday, June 15, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "2 Chronicles 35:1\u201319",
                    "readQS": "2+Chronicles+35:1-19",
                    "audioQS": "2Chr.35"
                },
                {
                    "pretty": "Romans 8:12\u201317",
                    "readQS": "Romans+8:12-17",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+37%3B+2+Chronicles+35:1-19%3B+Romans+8:12-17",
            "audioQS": "Ps.37,2Chr.35,Rom.8"
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
    "2023/06/16": {
        "datePretty": "Friday, June 16, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "2 Chronicles 35:20\u201336:10",
                    "readQS": "2+Chronicles+35:20-36:10",
                    "audioQS": "2Chr.35"
                },
                {
                    "pretty": "Romans 8:18\u201330",
                    "readQS": "Romans+8:18-30",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+31%3B+2+Chronicles+35:20-36:10%3B+Romans+8:18-30",
            "audioQS": "Ps.31,2Chr.35,Rom.8"
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
    "2023/06/17": {
        "datePretty": "Saturday, June 17, 2023",
        "calendar": "Week of 12th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "2 Chronicles 36:11\u2013end",
                    "readQS": "2+Chronicles+36:11-",
                    "audioQS": "2Chr.36"
                },
                {
                    "pretty": "Romans 8:31\u2013end",
                    "readQS": "Romans+8:31-",
                    "audioQS": "Rom.8"
                }
            ],
            "readQS": "Psalm+42%3B+2+Chronicles+36:11-%3B+Romans+8:31-",
            "audioQS": "Ps.42,2Chr.36,Rom.8"
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
    "2023/06/18": {
        "datePretty": "Sunday, June 18, 2023",
        "calendar": "13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 45",
                    "readQS": "Psalm+45",
                    "audioQS": "Ps.45"
                },
                {
                    "pretty": "Deuteronomy 10:12\u201311:1",
                    "readQS": "Deuteronomy+10:12-11:1",
                    "audioQS": "Deut.10"
                },
                {
                    "pretty": "Acts 23:12\u2013end",
                    "readQS": "Acts+23:12-",
                    "audioQS": "Acts.23"
                }
            ],
            "readQS": "Psalm+45%3B+Deuteronomy+10:12-11:1%3B+Acts+23:12-",
            "audioQS": "Ps.45,Deut.10,Acts.23"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 43",
                    "readQS": "Psalm+43",
                    "audioQS": "Ps.43"
                },
                {
                    "pretty": "1 Samuel 21:1\u201315",
                    "readQS": "1+Samuel+21:1-15",
                    "audioQS": "1Sam.21"
                },
                {
                    "pretty": "Luke 11:14\u201328",
                    "readQS": "Luke+11:14-28",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+43%3B+1+Samuel+21:1-15%3B+Luke+11:14-28",
            "audioQS": "Ps.43,1Sam.21,Luke.11"
        }
    },
    "2023/06/19": {
        "datePretty": "Monday, June 19, 2023",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Ezra 1",
                    "readQS": "Ezra+1",
                    "audioQS": "Ezra.1"
                },
                {
                    "pretty": "Romans 9:1\u201318",
                    "readQS": "Romans+9:1-18",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+44%3B+Ezra+1%3B+Romans+9:1-18",
            "audioQS": "Ps.44,Ezra.1,Rom.9"
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
    "2023/06/20": {
        "datePretty": "Tuesday, June 20, 2023",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Ezra 3",
                    "readQS": "Ezra+3",
                    "audioQS": "Ezra.3"
                },
                {
                    "pretty": "Romans 9:19\u2013end",
                    "readQS": "Romans+9:19-",
                    "audioQS": "Rom.9"
                }
            ],
            "readQS": "Psalm+48%3B+Ezra+3%3B+Romans+9:19-",
            "audioQS": "Ps.48,Ezra.3,Rom.9"
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
    "2023/06/21": {
        "datePretty": "Wednesday, June 21, 2023",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezra 4:1\u20135",
                    "readQS": "Ezra+4:1-5",
                    "audioQS": "Ezra.4"
                },
                {
                    "pretty": "Romans 10:1\u201310",
                    "readQS": "Romans+10:1-10",
                    "audioQS": "Rom.10"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Ezra+4:1-5%3B+Romans+10:1-10",
            "audioQS": "Ps.119,Ezra.4,Rom.10"
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
    "2023/06/22": {
        "datePretty": "Thursday, June 22, 2023",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Ezra 4:7\u2013end",
                    "readQS": "Ezra+4:7-",
                    "audioQS": "Ezra.4"
                },
                {
                    "pretty": "Romans 10:11\u2013end",
                    "readQS": "Romans+10:11-",
                    "audioQS": "Rom.10"
                }
            ],
            "readQS": "Psalm+57%3B+Ezra+4:7-%3B+Romans+10:11-",
            "audioQS": "Ps.57,Ezra.4,Rom.10"
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
    "2023/06/23": {
        "datePretty": "Friday, June 23, 2023",
        "calendar": "Week of 13th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Ezra 5",
                    "readQS": "Ezra+5",
                    "audioQS": "Ezra.5"
                },
                {
                    "pretty": "Romans 11:1\u201312",
                    "readQS": "Romans+11:1-12",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+51%3B+Ezra+5%3B+Romans+11:1-12",
            "audioQS": "Ps.51,Ezra.5,Rom.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Judges 13:2\u20137,13:24\u201325",
                    "readQS": "Judges+13:2-7,13:24-25",
                    "audioQS": "Judg.13"
                },
                {
                    "pretty": "Luke 1:5\u201325",
                    "readQS": "Luke+1:5-25",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+71%3B+Judges+13:2-7,13:24-25%3B+Luke+1:5-25",
            "audioQS": "Ps.71,Judg.13,Luke.1"
        }
    },
    "2023/06/24": {
        "datePretty": "Saturday, June 24, 2023",
        "calendar": "St John the Baptist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 50,149",
                    "readQS": "Psalm+50,149",
                    "audioQS": "Ps.50,149"
                },
                {
                    "pretty": "Malachi 3:1\u20136",
                    "readQS": "Malachi+3:1-6",
                    "audioQS": "Mal.3"
                },
                {
                    "pretty": "Luke 3:1\u201317",
                    "readQS": "Luke+3:1-17",
                    "audioQS": "Luke.3"
                }
            ],
            "readQS": "Psalm+50,149%3B+Malachi+3:1-6%3B+Luke+3:1-17",
            "audioQS": "Ps.50,149,Mal.3,Luke.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 80,82",
                    "readQS": "Psalm+80,82",
                    "audioQS": "Ps.80,82"
                },
                {
                    "pretty": "Malachi 4",
                    "readQS": "Malachi+4",
                    "audioQS": "Mal.4"
                },
                {
                    "pretty": "Matthew 11:2\u201319",
                    "readQS": "Matthew+11:2-19",
                    "audioQS": "Matt.11"
                }
            ],
            "readQS": "Psalm+80,82%3B+Malachi+4%3B+Matthew+11:2-19",
            "audioQS": "Ps.80,82,Mal.4,Matt.11"
        }
    },
    "2023/06/25": {
        "datePretty": "Sunday, June 25, 2023",
        "calendar": "14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 49",
                    "readQS": "Psalm+49",
                    "audioQS": "Ps.49"
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
            "readQS": "Psalm+49%3B+Deuteronomy+11:1-15%3B+Acts+27:1-12",
            "audioQS": "Ps.49,Deut.11,Acts.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 46",
                    "readQS": "Psalm+46",
                    "audioQS": "Ps.46"
                },
                {
                    "pretty": "1 Samuel 24:1\u201317",
                    "readQS": "1+Samuel+24:1-17",
                    "audioQS": "1Sam.24"
                },
                {
                    "pretty": "Luke 14:12\u201324",
                    "readQS": "Luke+14:12-24",
                    "audioQS": "Luke.14"
                }
            ],
            "readQS": "Psalm+46%3B+1+Samuel+24:1-17%3B+Luke+14:12-24",
            "audioQS": "Ps.46,1Sam.24,Luke.14"
        }
    },
    "2023/06/26": {
        "datePretty": "Monday, June 26, 2023",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Ezra 7",
                    "readQS": "Ezra+7",
                    "audioQS": "Ezra.7"
                },
                {
                    "pretty": "Romans 11:25\u2013end",
                    "readQS": "Romans+11:25-",
                    "audioQS": "Rom.11"
                }
            ],
            "readQS": "Psalm+71%3B+Ezra+7%3B+Romans+11:25-",
            "audioQS": "Ps.71,Ezra.7,Rom.11"
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
    "2023/06/27": {
        "datePretty": "Tuesday, June 27, 2023",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Ezra 8:15\u2013end",
                    "readQS": "Ezra+8:15-",
                    "audioQS": "Ezra.8"
                },
                {
                    "pretty": "Romans 12:1\u20138",
                    "readQS": "Romans+12:1-8",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+73%3B+Ezra+8:15-%3B+Romans+12:1-8",
            "audioQS": "Ps.73,Ezra.8,Rom.12"
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
    "2023/06/28": {
        "datePretty": "Wednesday, June 28, 2023",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Ezra 9",
                    "readQS": "Ezra+9",
                    "audioQS": "Ezra.9"
                },
                {
                    "pretty": "Romans 12:9\u2013end",
                    "readQS": "Romans+12:9-",
                    "audioQS": "Rom.12"
                }
            ],
            "readQS": "Psalm+77%3B+Ezra+9%3B+Romans+12:9-",
            "audioQS": "Ps.77,Ezra.9,Rom.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66,67",
                    "readQS": "Psalm+66,67",
                    "audioQS": "Ps.66,67"
                },
                {
                    "pretty": "Ezekiel 3:4\u201311",
                    "readQS": "Ezekiel+3:4-11",
                    "audioQS": "Ezek.3"
                },
                {
                    "pretty": "Galatians 1:13\u2013end,2:1\u20138",
                    "readQS": "Galatians+1:13-,2:1-8",
                    "audioQS": "Gal.1"
                }
            ],
            "readQS": "Psalm+66,67%3B+Ezekiel+3:4-11%3B+Galatians+1:13-,2:1-8",
            "audioQS": "Ps.66,67,Ezek.3,Gal.1"
        }
    },
    "2023/06/29": {
        "datePretty": "Thursday, June 29, 2023",
        "calendar": "St Peter and St Paul, Apostles, Martyrs",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71,113",
                    "readQS": "Psalm+71,113",
                    "audioQS": "Ps.71,113"
                },
                {
                    "pretty": "Isaiah 49:1\u20136",
                    "readQS": "Isaiah+49:1-6",
                    "audioQS": "Isa.49"
                },
                {
                    "pretty": "Acts 11:1\u201318",
                    "readQS": "Acts+11:1-18",
                    "audioQS": "Acts.11"
                }
            ],
            "readQS": "Psalm+71,113%3B+Isaiah+49:1-6%3B+Acts+11:1-18",
            "audioQS": "Ps.71,113,Isa.49,Acts.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 124,138",
                    "readQS": "Psalm+124,138",
                    "audioQS": "Ps.124,138"
                },
                {
                    "pretty": "Ezekiel 34:11\u201316",
                    "readQS": "Ezekiel+34:11-16",
                    "audioQS": "Ezek.34"
                },
                {
                    "pretty": "John 21:15\u201322",
                    "readQS": "John+21:15-22",
                    "audioQS": "John.21"
                }
            ],
            "readQS": "Psalm+124,138%3B+Ezekiel+34:11-16%3B+John+21:15-22",
            "audioQS": "Ps.124,138,Ezek.34,John.21"
        }
    },
    "2023/06/30": {
        "datePretty": "Friday, June 30, 2023",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Nehemiah 1",
                    "readQS": "Nehemiah+1",
                    "audioQS": "Neh.1"
                },
                {
                    "pretty": "Romans 13:8\u2013end",
                    "readQS": "Romans+13:8-",
                    "audioQS": "Rom.13"
                }
            ],
            "readQS": "Psalm+55%3B+Nehemiah+1%3B+Romans+13:8-",
            "audioQS": "Ps.55,Neh.1,Rom.13"
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
    "2023/07/01": {
        "datePretty": "Saturday, July 1, 2023",
        "calendar": "Week of 14th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Nehemiah 2",
                    "readQS": "Nehemiah+2",
                    "audioQS": "Neh.2"
                },
                {
                    "pretty": "Romans 14:1\u201312",
                    "readQS": "Romans+14:1-12",
                    "audioQS": "Rom.14"
                }
            ],
            "readQS": "Psalm+76%3B+Nehemiah+2%3B+Romans+14:1-12",
            "audioQS": "Ps.76,Neh.2,Rom.14"
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
    "2023/07/02": {
        "datePretty": "Sunday, July 2, 2023",
        "calendar": "15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 52,53",
                    "readQS": "Psalm+52,53",
                    "audioQS": "Ps.52,53"
                },
                {
                    "pretty": "Deuteronomy 15:1\u201311",
                    "readQS": "Deuteronomy+15:1-11",
                    "audioQS": "Deut.15"
                },
                {
                    "pretty": "Acts 27:13\u201344",
                    "readQS": "Acts+27:13-44",
                    "audioQS": "Acts.27"
                }
            ],
            "readQS": "Psalm+52,53%3B+Deuteronomy+15:1-11%3B+Acts+27:13-44",
            "audioQS": "Ps.52,53,Deut.15,Acts.27"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 50",
                    "readQS": "Psalm+50",
                    "audioQS": "Ps.50"
                },
                {
                    "pretty": "1 Samuel 28:3\u201319",
                    "readQS": "1+Samuel+28:3-19",
                    "audioQS": "1Sam.28"
                },
                {
                    "pretty": "Luke 17:20\u201324",
                    "readQS": "Luke+17:20-24",
                    "audioQS": "Luke.17"
                }
            ],
            "readQS": "Psalm+50%3B+1+Samuel+28:3-19%3B+Luke+17:20-24",
            "audioQS": "Ps.50,1Sam.28,Luke.17"
        }
    },
    "2023/07/03": {
        "datePretty": "Monday, July 3, 2023",
        "calendar": "Thomas the Apostle",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92,146",
                    "readQS": "Psalm+92,146",
                    "audioQS": "Ps.92,146"
                },
                {
                    "pretty": "2 Samuel 15:17\u201321",
                    "readQS": "2+Samuel+15:17-21",
                    "audioQS": "2Sam.15"
                },
                {
                    "pretty": "John 11:1\u201316",
                    "readQS": "John+11:1-16",
                    "audioQS": "John.11"
                }
            ],
            "readQS": "Psalm+92,146%3B+2+Samuel+15:17-21%3B+John+11:1-16",
            "audioQS": "Ps.92,146,2Sam.15,John.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Job 42:1\u20136",
                    "readQS": "Job+42:1-6",
                    "audioQS": "Job.42"
                },
                {
                    "pretty": "1 Peter 1:3\u201312",
                    "readQS": "1+Peter+1:3-12",
                    "audioQS": "1Pet.1"
                }
            ],
            "readQS": "Psalm+139%3B+Job+42:1-6%3B+1+Peter+1:3-12",
            "audioQS": "Ps.139,Job.42,1Pet.1"
        }
    },
    "2023/07/04": {
        "datePretty": "Tuesday, July 4, 2023",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Nehemiah 5",
                    "readQS": "Nehemiah+5",
                    "audioQS": "Neh.5"
                },
                {
                    "pretty": "Romans 15:1\u201313",
                    "readQS": "Romans+15:1-13",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Nehemiah+5%3B+Romans+15:1-13",
            "audioQS": "Ps.89,Neh.5,Rom.15"
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
    "2023/07/05": {
        "datePretty": "Wednesday, July 5, 2023",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Nehemiah 6:1\u20137:4",
                    "readQS": "Nehemiah+6:1-7:4",
                    "audioQS": "Neh.6"
                },
                {
                    "pretty": "Romans 15:14\u201321",
                    "readQS": "Romans+15:14-21",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+Nehemiah+6:1-7:4%3B+Romans+15:14-21",
            "audioQS": "Ps.119,Neh.6,Rom.15"
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
    "2023/07/06": {
        "datePretty": "Thursday, July 6, 2023",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "Nehemiah 7:73b\u2013end",
                    "readQS": "Nehemiah+7:73b-",
                    "audioQS": "Neh.7"
                },
                {
                    "pretty": "Nehemiah 8",
                    "readQS": "Nehemiah+8",
                    "audioQS": "Neh.8"
                },
                {
                    "pretty": "Romans 15:22\u2013end",
                    "readQS": "Romans+15:22-",
                    "audioQS": "Rom.15"
                }
            ],
            "readQS": "Psalm+92%3B+Nehemiah+7:73b-%3B+Nehemiah+8%3B+Romans+15:22-",
            "audioQS": "Ps.92,Neh.7,Neh.8,Rom.15"
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
    "2023/07/07": {
        "datePretty": "Friday, July 7, 2023",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Nehemiah 9:1\u201323",
                    "readQS": "Nehemiah+9:1-23",
                    "audioQS": "Neh.9"
                },
                {
                    "pretty": "Romans 16:1\u201316",
                    "readQS": "Romans+16:1-16",
                    "audioQS": "Rom.16"
                }
            ],
            "readQS": "Psalm+88%3B+Nehemiah+9:1-23%3B+Romans+16:1-16",
            "audioQS": "Ps.88,Neh.9,Rom.16"
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
    "2023/07/08": {
        "datePretty": "Saturday, July 8, 2023",
        "calendar": "Week of 15th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Nehemiah 9:24\u2013end",
                    "readQS": "Nehemiah+9:24-",
                    "audioQS": "Neh.9"
                },
                {
                    "pretty": "Romans 16:17\u2013end",
                    "readQS": "Romans+16:17-",
                    "audioQS": "Rom.16"
                }
            ],
            "readQS": "Psalm+97%3B+Nehemiah+9:24-%3B+Romans+16:17-",
            "audioQS": "Ps.97,Neh.9,Rom.16"
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
    "2023/07/09": {
        "datePretty": "Sunday, July 9, 2023",
        "calendar": "16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55:1\u201315,18\u201322",
                    "readQS": "Psalm+55:1-15,18-22",
                    "audioQS": "Ps.55"
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
            "readQS": "Psalm+55:1-15,18-22%3B+Deuteronomy+24:10-22%3B+Acts+28:1-16",
            "audioQS": "Ps.55,Deut.24,Acts.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 56",
                    "readQS": "Psalm+56",
                    "audioQS": "Ps.56"
                },
                {
                    "pretty": "2 Samuel 2:1\u201311,3:1",
                    "readQS": "2+Samuel+2:1-11,3:1",
                    "audioQS": "2Sam.2"
                },
                {
                    "pretty": "Luke 18:31\u201319:10",
                    "readQS": "Luke+18:31-19:10",
                    "audioQS": "Luke.18"
                }
            ],
            "readQS": "Psalm+56%3B+2+Samuel+2:1-11,3:1%3B+Luke+18:31-19:10",
            "audioQS": "Ps.56,2Sam.2,Luke.18"
        }
    },
    "2023/07/10": {
        "datePretty": "Monday, July 10, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Nehemiah 12:27\u201347",
                    "readQS": "Nehemiah+12:27-47",
                    "audioQS": "Neh.12"
                },
                {
                    "pretty": "2 Corinthians 1:1\u201314",
                    "readQS": "2+Corinthians+1:1-14",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+98%3B+Nehemiah+12:27-47%3B+2+Corinthians+1:1-14",
            "audioQS": "Ps.98,Neh.12,2Cor.1"
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
    "2023/07/11": {
        "datePretty": "Tuesday, July 11, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Nehemiah 13:1\u201314",
                    "readQS": "Nehemiah+13:1-14",
                    "audioQS": "Neh.13"
                },
                {
                    "pretty": "2 Corinthians 1:15\u20132:4",
                    "readQS": "2+Corinthians+1:15-2:4",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+106%3B+Nehemiah+13:1-14%3B+2+Corinthians+1:15-2:4",
            "audioQS": "Ps.106,Neh.13,2Cor.1"
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
    "2023/07/12": {
        "datePretty": "Wednesday, July 12, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Nehemiah 13:15\u2013end",
                    "readQS": "Nehemiah+13:15-",
                    "audioQS": "Neh.13"
                },
                {
                    "pretty": "2 Corinthians 2:5\u2013end",
                    "readQS": "2+Corinthians+2:5-",
                    "audioQS": "2Cor.2"
                }
            ],
            "readQS": "Psalm+111%3B+Nehemiah+13:15-%3B+2+Corinthians+2:5-",
            "audioQS": "Ps.111,Neh.13,2Cor.2"
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
    "2023/07/13": {
        "datePretty": "Thursday, July 13, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Esther 1",
                    "readQS": "Esther+1",
                    "audioQS": "Esth.1"
                },
                {
                    "pretty": "2 Corinthians 3",
                    "readQS": "2+Corinthians+3",
                    "audioQS": "2Cor.3"
                }
            ],
            "readQS": "Psalm+115%3B+Esther+1%3B+2+Corinthians+3",
            "audioQS": "Ps.115,Esth.1,2Cor.3"
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
    "2023/07/14": {
        "datePretty": "Friday, July 14, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Esther 2",
                    "readQS": "Esther+2",
                    "audioQS": "Esth.2"
                },
                {
                    "pretty": "2 Corinthians 4",
                    "readQS": "2+Corinthians+4",
                    "audioQS": "2Cor.4"
                }
            ],
            "readQS": "Psalm+139%3B+Esther+2%3B+2+Corinthians+4",
            "audioQS": "Ps.139,Esth.2,2Cor.4"
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
    "2023/07/15": {
        "datePretty": "Saturday, July 15, 2023",
        "calendar": "Week of 16th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Esther 3",
                    "readQS": "Esther+3",
                    "audioQS": "Esth.3"
                },
                {
                    "pretty": "2 Corinthians 5",
                    "readQS": "2+Corinthians+5",
                    "audioQS": "2Cor.5"
                }
            ],
            "readQS": "Psalm+121%3B+Esther+3%3B+2+Corinthians+5",
            "audioQS": "Ps.121,Esth.3,2Cor.5"
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
    "2023/07/16": {
        "datePretty": "Sunday, July 16, 2023",
        "calendar": "17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 64,65",
                    "readQS": "Psalm+64,65",
                    "audioQS": "Ps.64,65"
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
            "readQS": "Psalm+64,65%3B+Deuteronomy+28:1-14%3B+Acts+28:17-31",
            "audioQS": "Ps.64,65,Deut.28,Acts.28"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 60",
                    "readQS": "Psalm+60",
                    "audioQS": "Ps.60"
                },
                {
                    "pretty": "2 Samuel 7:18\u201329",
                    "readQS": "2+Samuel+7:18-29",
                    "audioQS": "2Sam.7"
                },
                {
                    "pretty": "Luke 19:41\u201320:8",
                    "readQS": "Luke+19:41-20:8",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+60%3B+2+Samuel+7:18-29%3B+Luke+19:41-20:8",
            "audioQS": "Ps.60,2Sam.7,Luke.19"
        }
    },
    "2023/07/17": {
        "datePretty": "Monday, July 17, 2023",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Esther 4",
                    "readQS": "Esther+4",
                    "audioQS": "Esth.4"
                },
                {
                    "pretty": "2 Corinthians 6:1\u20137:1",
                    "readQS": "2+Corinthians+6:1-7:1",
                    "audioQS": "2Cor.6"
                }
            ],
            "readQS": "Psalm+126%3B+Esther+4%3B+2+Corinthians+6:1-7:1",
            "audioQS": "Ps.126,Esth.4,2Cor.6"
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
    "2023/07/18": {
        "datePretty": "Tuesday, July 18, 2023",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Esther 5",
                    "readQS": "Esther+5",
                    "audioQS": "Esth.5"
                },
                {
                    "pretty": "2 Corinthians 7:2\u2013end",
                    "readQS": "2+Corinthians+7:2-",
                    "audioQS": "2Cor.7"
                }
            ],
            "readQS": "Psalm+132%3B+Esther+5%3B+2+Corinthians+7:2-",
            "audioQS": "Ps.132,Esth.5,2Cor.7"
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
    "2023/07/19": {
        "datePretty": "Wednesday, July 19, 2023",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Esther 6:1\u201313",
                    "readQS": "Esther+6:1-13",
                    "audioQS": "Esth.6"
                },
                {
                    "pretty": "2 Corinthians 8:1\u201315",
                    "readQS": "2+Corinthians+8:1-15",
                    "audioQS": "2Cor.8"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Esther+6:1-13%3B+2+Corinthians+8:1-15",
            "audioQS": "Ps.119,Esth.6,2Cor.8"
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
    "2023/07/20": {
        "datePretty": "Thursday, July 20, 2023",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Esther 6:14\u2013end",
                    "readQS": "Esther+6:14-",
                    "audioQS": "Esth.6"
                },
                {
                    "pretty": "Esther 7",
                    "readQS": "Esther+7",
                    "audioQS": "Esth.7"
                },
                {
                    "pretty": "2 Corinthians 8:16\u20139:5",
                    "readQS": "2+Corinthians+8:16-9:5",
                    "audioQS": "2Cor.8"
                }
            ],
            "readQS": "Psalm+143%3B+Esther+6:14-%3B+Esther+7%3B+2+Corinthians+8:16-9:5",
            "audioQS": "Ps.143,Esth.6,Esth.7,2Cor.8"
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
    "2023/07/21": {
        "datePretty": "Friday, July 21, 2023",
        "calendar": "Week of 17th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Esther 8",
                    "readQS": "Esther+8",
                    "audioQS": "Esth.8"
                },
                {
                    "pretty": "2 Corinthians 9:6\u2013end",
                    "readQS": "2+Corinthians+9:6-",
                    "audioQS": "2Cor.9"
                }
            ],
            "readQS": "Psalm+144%3B+Esther+8%3B+2+Corinthians+9:6-",
            "audioQS": "Ps.144,Esth.8,2Cor.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Isaiah 25:1\u20139",
                    "readQS": "Isaiah+25:1-9",
                    "audioQS": "Isa.25"
                },
                {
                    "pretty": "2 Corinthians 1:3\u20137",
                    "readQS": "2+Corinthians+1:3-7",
                    "audioQS": "2Cor.1"
                }
            ],
            "readQS": "Psalm+139%3B+Isaiah+25:1-9%3B+2+Corinthians+1:3-7",
            "audioQS": "Ps.139,Isa.25,2Cor.1"
        }
    },
    "2023/07/22": {
        "datePretty": "Saturday, July 22, 2023",
        "calendar": "St Mary Magdalene",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30,32,150",
                    "readQS": "Psalm+30,32,150",
                    "audioQS": "Ps.30,32,150"
                },
                {
                    "pretty": "1 Samuel 16:14\u201323",
                    "readQS": "1+Samuel+16:14-23",
                    "audioQS": "1Sam.16"
                },
                {
                    "pretty": "Luke 8:1\u20133",
                    "readQS": "Luke+8:1-3",
                    "audioQS": "Luke.8"
                }
            ],
            "readQS": "Psalm+30,32,150%3B+1+Samuel+16:14-23%3B+Luke+8:1-3",
            "audioQS": "Ps.30,32,150,1Sam.16,Luke.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 63",
                    "readQS": "Psalm+63",
                    "audioQS": "Ps.63"
                },
                {
                    "pretty": "Zephaniah 3:14\u201320",
                    "readQS": "Zephaniah+3:14-20",
                    "audioQS": "Zeph.3"
                },
                {
                    "pretty": "Mark 15:40\u2013end,16:1\u20137",
                    "readQS": "Mark+15:40-,16:1-7",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+63%3B+Zephaniah+3:14-20%3B+Mark+15:40-,16:1-7",
            "audioQS": "Ps.63,Zeph.3,Mark.15"
        }
    },
    "2023/07/23": {
        "datePretty": "Sunday, July 23, 2023",
        "calendar": "18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
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
            "readQS": "Psalm+71%3B+Deuteronomy+30:1-10%3B+1+Peter+3:8-18",
            "audioQS": "Ps.71,Deut.30,1Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 67",
                    "readQS": "Psalm+67",
                    "audioQS": "Ps.67"
                },
                {
                    "pretty": "1 Kings 2:10\u201312,3:16\u201328",
                    "readQS": "1+Kings+2:10-12,3:16-28",
                    "audioQS": "1Kgs.2"
                },
                {
                    "pretty": "Acts 4:1\u201322",
                    "readQS": "Acts+4:1-22",
                    "audioQS": "Acts.4"
                }
            ],
            "readQS": "Psalm+67%3B+1+Kings+2:10-12,3:16-28%3B+Acts+4:1-22",
            "audioQS": "Ps.67,1Kgs.2,Acts.4"
        }
    },
    "2023/07/24": {
        "datePretty": "Monday, July 24, 2023",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Jeremiah 26",
                    "readQS": "Jeremiah+26",
                    "audioQS": "Jer.26"
                },
                {
                    "pretty": "2 Corinthians 11:1\u201315",
                    "readQS": "2+Corinthians+11:1-15",
                    "audioQS": "2Cor.11"
                }
            ],
            "readQS": "Psalm+1%3B+Jeremiah+26%3B+2+Corinthians+11:1-15",
            "audioQS": "Ps.1,Jer.26,2Cor.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Deuteronomy 30:11\u201320",
                    "readQS": "Deuteronomy+30:11-20",
                    "audioQS": "Deut.30"
                },
                {
                    "pretty": "Mark 5:21\u201343",
                    "readQS": "Mark+5:21-43",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+144%3B+Deuteronomy+30:11-20%3B+Mark+5:21-43",
            "audioQS": "Ps.144,Deut.30,Mark.5"
        }
    },
    "2023/07/25": {
        "datePretty": "Tuesday, July 25, 2023",
        "calendar": "St James the Apostle",
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
    "2023/07/26": {
        "datePretty": "Wednesday, July 26, 2023",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jeremiah 29:1\u201314",
                    "readQS": "Jeremiah+29:1-14",
                    "audioQS": "Jer.29"
                },
                {
                    "pretty": "2 Corinthians 12",
                    "readQS": "2+Corinthians+12",
                    "audioQS": "2Cor.12"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+Jeremiah+29:1-14%3B+2+Corinthians+12",
            "audioQS": "Ps.119,Jer.29,2Cor.12"
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
    "2023/07/27": {
        "datePretty": "Thursday, July 27, 2023",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Jeremiah 30:1\u201311",
                    "readQS": "Jeremiah+30:1-11",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "2 Corinthians 13",
                    "readQS": "2+Corinthians+13",
                    "audioQS": "2Cor.13"
                }
            ],
            "readQS": "Psalm+15%3B+Jeremiah+30:1-11%3B+2+Corinthians+13",
            "audioQS": "Ps.15,Jer.30,2Cor.13"
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
    "2023/07/28": {
        "datePretty": "Friday, July 28, 2023",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Jeremiah 30:12\u201322",
                    "readQS": "Jeremiah+30:12-22",
                    "audioQS": "Jer.30"
                },
                {
                    "pretty": "James 1:1\u201311",
                    "readQS": "James+1:1-11",
                    "audioQS": "Jas.1"
                }
            ],
            "readQS": "Psalm+19%3B+Jeremiah+30:12-22%3B+James+1:1-11",
            "audioQS": "Ps.19,Jer.30,Jas.1"
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
    "2023/07/29": {
        "datePretty": "Saturday, July 29, 2023",
        "calendar": "Week of 18th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Jeremiah 31:1\u201322",
                    "readQS": "Jeremiah+31:1-22",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "James 1:12\u2013end",
                    "readQS": "James+1:12-",
                    "audioQS": "Jas.1"
                }
            ],
            "readQS": "Psalm+23%3B+Jeremiah+31:1-22%3B+James+1:12-",
            "audioQS": "Ps.23,Jer.31,Jas.1"
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
    "2023/07/30": {
        "datePretty": "Sunday, July 30, 2023",
        "calendar": "19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Song of Solomon 2",
                    "readQS": "Song+of+Solomon+2",
                    "audioQS": "Song.2"
                },
                {
                    "pretty": "1 Macc 2:15\u201322",
                    "readQS": "1+Macc+2:15-22",
                    "audioQS": "1 Macc 2"
                }
            ],
            "readQS": "Psalm+77%3B+Song+of+Solomon+2%3B+1+Macc+2:15-22",
            "audioQS": "Ps.77,Song.2,1 Macc 2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 75",
                    "readQS": "Psalm+75",
                    "audioQS": "Ps.75"
                },
                {
                    "pretty": "1 Kings 6:11\u201314,23\u201338",
                    "readQS": "1+Kings+6:11-14,23-38",
                    "audioQS": "1Kgs.6"
                },
                {
                    "pretty": "Acts 12:1\u201317",
                    "readQS": "Acts+12:1-17",
                    "audioQS": "Acts.12"
                }
            ],
            "readQS": "Psalm+75%3B+1+Kings+6:11-14,23-38%3B+Acts+12:1-17",
            "audioQS": "Ps.75,1Kgs.6,Acts.12"
        }
    },
    "2023/07/31": {
        "datePretty": "Monday, July 31, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Jeremiah 31:23\u201325,31:27\u201337",
                    "readQS": "Jeremiah+31:23-25,31:27-37",
                    "audioQS": "Jer.31"
                },
                {
                    "pretty": "James 2:1\u201313",
                    "readQS": "James+2:1-13",
                    "audioQS": "Jas.2"
                }
            ],
            "readQS": "Psalm+30%3B+Jeremiah+31:23-25,31:27-37%3B+James+2:1-13",
            "audioQS": "Ps.30,Jer.31,Jas.2"
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
    "2023/08/01": {
        "datePretty": "Tuesday, August 1, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Jeremiah 32:1\u201315",
                    "readQS": "Jeremiah+32:1-15",
                    "audioQS": "Jer.32"
                },
                {
                    "pretty": "James 2:14\u2013end",
                    "readQS": "James+2:14-",
                    "audioQS": "Jas.2"
                }
            ],
            "readQS": "Psalm+36%3B+Jeremiah+32:1-15%3B+James+2:14-",
            "audioQS": "Ps.36,Jer.32,Jas.2"
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
    "2023/08/02": {
        "datePretty": "Wednesday, August 2, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Jeremiah 33:1\u201313",
                    "readQS": "Jeremiah+33:1-13",
                    "audioQS": "Jer.33"
                },
                {
                    "pretty": "James 3",
                    "readQS": "James+3",
                    "audioQS": "Jas.3"
                }
            ],
            "readQS": "Psalm+34%3B+Jeremiah+33:1-13%3B+James+3",
            "audioQS": "Ps.34,Jer.33,Jas.3"
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
    "2023/08/03": {
        "datePretty": "Thursday, August 3, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 37",
                    "readQS": "Psalm+37",
                    "audioQS": "Ps.37"
                },
                {
                    "pretty": "Jeremiah 33:14\u2013end",
                    "readQS": "Jeremiah+33:14-",
                    "audioQS": "Jer.33"
                },
                {
                    "pretty": "James 4:1\u201312",
                    "readQS": "James+4:1-12",
                    "audioQS": "Jas.4"
                }
            ],
            "readQS": "Psalm+37%3B+Jeremiah+33:14-%3B+James+4:1-12",
            "audioQS": "Ps.37,Jer.33,Jas.4"
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
    "2023/08/04": {
        "datePretty": "Friday, August 4, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Jeremiah 35",
                    "readQS": "Jeremiah+35",
                    "audioQS": "Jer.35"
                },
                {
                    "pretty": "James 4:13\u20135:6",
                    "readQS": "James+4:13-5:6",
                    "audioQS": "Jas.4"
                }
            ],
            "readQS": "Psalm+31%3B+Jeremiah+35%3B+James+4:13-5:6",
            "audioQS": "Ps.31,Jer.35,Jas.4"
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
    "2023/08/05": {
        "datePretty": "Saturday, August 5, 2023",
        "calendar": "Week of 19th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Jeremiah 36:1\u201318",
                    "readQS": "Jeremiah+36:1-18",
                    "audioQS": "Jer.36"
                },
                {
                    "pretty": "James 5:7\u2013end",
                    "readQS": "James+5:7-",
                    "audioQS": "Jas.5"
                }
            ],
            "readQS": "Psalm+42%3B+Jeremiah+36:1-18%3B+James+5:7-",
            "audioQS": "Ps.42,Jer.36,Jas.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 99,110",
                    "readQS": "Psalm+99,110",
                    "audioQS": "Ps.99,110"
                },
                {
                    "pretty": "Exodus 24:12\u201318",
                    "readQS": "Exodus+24:12-18",
                    "audioQS": "Exod.24"
                },
                {
                    "pretty": "John 12:27\u201336a",
                    "readQS": "John+12:27-36a",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+99,110%3B+Exodus+24:12-18%3B+John+12:27-36a",
            "audioQS": "Ps.99,110,Exod.24,John.12"
        }
    },
    "2023/08/06": {
        "datePretty": "Sunday, August 6, 2023",
        "calendar": "The Transfiguration of the Beloved Son",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 27,150",
                    "readQS": "Psalm+27,150",
                    "audioQS": "Ps.27,150"
                },
                {
                    "pretty": "1 Kings 19:1\u201316",
                    "readQS": "1+Kings+19:1-16",
                    "audioQS": "1Kgs.19"
                },
                {
                    "pretty": "1 John 3:1\u20133",
                    "readQS": "1+John+3:1-3",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+27,150%3B+1+Kings+19:1-16%3B+1+John+3:1-3",
            "audioQS": "Ps.27,150,1Kgs.19,1John.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Exodus 34:29\u201335",
                    "readQS": "Exodus+34:29-35",
                    "audioQS": "Exod.34"
                },
                {
                    "pretty": "2 Corinthians 3",
                    "readQS": "2+Corinthians+3",
                    "audioQS": "2Cor.3"
                }
            ],
            "readQS": "Psalm+72%3B+Exodus+34:29-35%3B+2+Corinthians+3",
            "audioQS": "Ps.72,Exod.34,2Cor.3"
        }
    },
    "2023/08/07": {
        "datePretty": "Monday, August 7, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Jeremiah 36:19\u2013end",
                    "readQS": "Jeremiah+36:19-",
                    "audioQS": "Jer.36"
                },
                {
                    "pretty": "Mark 1:1\u201313",
                    "readQS": "Mark+1:1-13",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+44%3B+Jeremiah+36:19-%3B+Mark+1:1-13",
            "audioQS": "Ps.44,Jer.36,Mark.1"
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
    "2023/08/08": {
        "datePretty": "Tuesday, August 8, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Jeremiah 37",
                    "readQS": "Jeremiah+37",
                    "audioQS": "Jer.37"
                },
                {
                    "pretty": "Mark 1:14\u201320",
                    "readQS": "Mark+1:14-20",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+48%3B+Jeremiah+37%3B+Mark+1:14-20",
            "audioQS": "Ps.48,Jer.37,Mark.1"
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
    "2023/08/09": {
        "datePretty": "Wednesday, August 9, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jeremiah 38:1\u201313",
                    "readQS": "Jeremiah+38:1-13",
                    "audioQS": "Jer.38"
                },
                {
                    "pretty": "Mark 1:21\u201328",
                    "readQS": "Mark+1:21-28",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Jeremiah+38:1-13%3B+Mark+1:21-28",
            "audioQS": "Ps.119,Jer.38,Mark.1"
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
    "2023/08/10": {
        "datePretty": "Thursday, August 10, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Jeremiah 38:14\u2013end",
                    "readQS": "Jeremiah+38:14-",
                    "audioQS": "Jer.38"
                },
                {
                    "pretty": "Mark 1:29\u2013end",
                    "readQS": "Mark+1:29-",
                    "audioQS": "Mark.1"
                }
            ],
            "readQS": "Psalm+57%3B+Jeremiah+38:14-%3B+Mark+1:29-",
            "audioQS": "Ps.57,Jer.38,Mark.1"
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
    "2023/08/11": {
        "datePretty": "Friday, August 11, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 51",
                    "readQS": "Psalm+51",
                    "audioQS": "Ps.51"
                },
                {
                    "pretty": "Jeremiah 39",
                    "readQS": "Jeremiah+39",
                    "audioQS": "Jer.39"
                },
                {
                    "pretty": "Mark 2:1\u201312",
                    "readQS": "Mark+2:1-12",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+51%3B+Jeremiah+39%3B+Mark+2:1-12",
            "audioQS": "Ps.51,Jer.39,Mark.2"
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
    "2023/08/12": {
        "datePretty": "Saturday, August 12, 2023",
        "calendar": "Week of 20th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Jeremiah 40",
                    "readQS": "Jeremiah+40",
                    "audioQS": "Jer.40"
                },
                {
                    "pretty": "Mark 2:13\u201322",
                    "readQS": "Mark+2:13-22",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+68%3B+Jeremiah+40%3B+Mark+2:13-22",
            "audioQS": "Ps.68,Jer.40,Mark.2"
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
    "2023/08/13": {
        "datePretty": "Sunday, August 13, 2023",
        "calendar": "21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
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
            "readQS": "Psalm+88%3B+Song+of+Solomon+8:5-7%3B+2+Peter+3:8-13",
            "audioQS": "Ps.88,Song.8,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 86",
                    "readQS": "Psalm+86",
                    "audioQS": "Ps.86"
                },
                {
                    "pretty": "1 Kings 11:41\u2013end,12:1\u201320",
                    "readQS": "1+Kings+11:41-,12:1-20",
                    "audioQS": "1Kgs.11"
                },
                {
                    "pretty": "Acts 14:8\u201320",
                    "readQS": "Acts+14:8-20",
                    "audioQS": "Acts.14"
                }
            ],
            "readQS": "Psalm+86%3B+1+Kings+11:41-,12:1-20%3B+Acts+14:8-20",
            "audioQS": "Ps.86,1Kgs.11,Acts.14"
        }
    },
    "2023/08/14": {
        "datePretty": "Monday, August 14, 2023",
        "calendar": "Week of 21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Jeremiah 41",
                    "readQS": "Jeremiah+41",
                    "audioQS": "Jer.41"
                },
                {
                    "pretty": "Mark 2:23\u20133:6",
                    "readQS": "Mark+2:23-3:6",
                    "audioQS": "Mark.2"
                }
            ],
            "readQS": "Psalm+71%3B+Jeremiah+41%3B+Mark+2:23-3:6",
            "audioQS": "Ps.71,Jer.41,Mark.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 72",
                    "readQS": "Psalm+72",
                    "audioQS": "Ps.72"
                },
                {
                    "pretty": "Proverbs 8:22\u201331",
                    "readQS": "Proverbs+8:22-31",
                    "audioQS": "Prov.8"
                },
                {
                    "pretty": "John 19:23\u201327",
                    "readQS": "John+19:23-27",
                    "audioQS": "John.19"
                }
            ],
            "readQS": "Psalm+72%3B+Proverbs+8:22-31%3B+John+19:23-27",
            "audioQS": "Ps.72,Prov.8,John.19"
        }
    },
    "2023/08/15": {
        "datePretty": "Tuesday, August 15, 2023",
        "calendar": "The Blessed Virgin Mary",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98,138,147:1\u201311",
                    "readQS": "Psalm+98,138,147:1-11",
                    "audioQS": "Ps.98,138,147"
                },
                {
                    "pretty": "Isaiah 7:10\u201315",
                    "readQS": "Isaiah+7:10-15",
                    "audioQS": "Isa.7"
                },
                {
                    "pretty": "Luke 11:27\u201328",
                    "readQS": "Luke+11:27-28",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+98,138,147:1-11%3B+Isaiah+7:10-15%3B+Luke+11:27-28",
            "audioQS": "Ps.98,138,147,Isa.7,Luke.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Song of Solomon 2:1\u20137",
                    "readQS": "Song+of+Solomon+2:1-7",
                    "audioQS": "Song.2"
                },
                {
                    "pretty": "Acts 1:6\u201314",
                    "readQS": "Acts+1:6-14",
                    "audioQS": "Acts.1"
                }
            ],
            "readQS": "Psalm+132%3B+Song+of+Solomon+2:1-7%3B+Acts+1:6-14",
            "audioQS": "Ps.132,Song.2,Acts.1"
        }
    },
    "2023/08/16": {
        "datePretty": "Wednesday, August 16, 2023",
        "calendar": "Week of 21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Jeremiah 43",
                    "readQS": "Jeremiah+43",
                    "audioQS": "Jer.43"
                },
                {
                    "pretty": "Mark 3:19b\u2013end",
                    "readQS": "Mark+3:19b-",
                    "audioQS": "Mark.3"
                }
            ],
            "readQS": "Psalm+77%3B+Jeremiah+43%3B+Mark+3:19b-",
            "audioQS": "Ps.77,Jer.43,Mark.3"
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
    "2023/08/17": {
        "datePretty": "Thursday, August 17, 2023",
        "calendar": "Week of 21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Jeremiah 44:1\u201314",
                    "readQS": "Jeremiah+44:1-14",
                    "audioQS": "Jer.44"
                },
                {
                    "pretty": "Mark 4:1\u201320",
                    "readQS": "Mark+4:1-20",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Jeremiah+44:1-14%3B+Mark+4:1-20",
            "audioQS": "Ps.78,Jer.44,Mark.4"
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
    "2023/08/18": {
        "datePretty": "Friday, August 18, 2023",
        "calendar": "Week of 21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Jeremiah 44:15\u2013end",
                    "readQS": "Jeremiah+44:15-",
                    "audioQS": "Jer.44"
                },
                {
                    "pretty": "Mark 4:21\u201334",
                    "readQS": "Mark+4:21-34",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+55%3B+Jeremiah+44:15-%3B+Mark+4:21-34",
            "audioQS": "Ps.55,Jer.44,Mark.4"
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
    "2023/08/19": {
        "datePretty": "Saturday, August 19, 2023",
        "calendar": "Week of 21st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Jeremiah 45",
                    "readQS": "Jeremiah+45",
                    "audioQS": "Jer.45"
                },
                {
                    "pretty": "Mark 4:35\u2013end",
                    "readQS": "Mark+4:35-",
                    "audioQS": "Mark.4"
                }
            ],
            "readQS": "Psalm+76%3B+Jeremiah+45%3B+Mark+4:35-",
            "audioQS": "Ps.76,Jer.45,Mark.4"
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
    "2023/08/20": {
        "datePretty": "Sunday, August 20, 2023",
        "calendar": "22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
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
            "readQS": "Psalm+92%3B+Jonah+1%3B+2+Peter+3:14-18",
            "audioQS": "Ps.92,Jonah.1,2Pet.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 90",
                    "readQS": "Psalm+90",
                    "audioQS": "Ps.90"
                },
                {
                    "pretty": "2 Kings 4:1\u201337",
                    "readQS": "2+Kings+4:1-37",
                    "audioQS": "2Kgs.4"
                },
                {
                    "pretty": "Acts 16:1\u201315",
                    "readQS": "Acts+16:1-15",
                    "audioQS": "Acts.16"
                }
            ],
            "readQS": "Psalm+90%3B+2+Kings+4:1-37%3B+Acts+16:1-15",
            "audioQS": "Ps.90,2Kgs.4,Acts.16"
        }
    },
    "2023/08/21": {
        "datePretty": "Monday, August 21, 2023",
        "calendar": "Week of 22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Micah 1:1\u20139",
                    "readQS": "Micah+1:1-9",
                    "audioQS": "Mic.1"
                },
                {
                    "pretty": "Mark 5:1\u201320",
                    "readQS": "Mark+5:1-20",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+80%3B+Micah+1:1-9%3B+Mark+5:1-20",
            "audioQS": "Ps.80,Mic.1,Mark.5"
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
    "2023/08/22": {
        "datePretty": "Tuesday, August 22, 2023",
        "calendar": "Week of 22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Micah 2",
                    "readQS": "Micah+2",
                    "audioQS": "Mic.2"
                },
                {
                    "pretty": "Mark 5:21\u201334",
                    "readQS": "Mark+5:21-34",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Micah+2%3B+Mark+5:21-34",
            "audioQS": "Ps.89,Mic.2,Mark.5"
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
    "2023/08/23": {
        "datePretty": "Wednesday, August 23, 2023",
        "calendar": "Week of 22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Micah 3",
                    "readQS": "Micah+3",
                    "audioQS": "Mic.3"
                },
                {
                    "pretty": "Mark 5:35\u2013end",
                    "readQS": "Mark+5:35-",
                    "audioQS": "Mark.5"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+Micah+3%3B+Mark+5:35-",
            "audioQS": "Ps.119,Mic.3,Mark.5"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Isaiah 61:1\u20139",
                    "readQS": "Isaiah+61:1-9",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "2 Corinthians 6:1\u201310",
                    "readQS": "2+Corinthians+6:1-10",
                    "audioQS": "2Cor.6"
                }
            ],
            "readQS": "Psalm+97%3B+Isaiah+61:1-9%3B+2+Corinthians+6:1-10",
            "audioQS": "Ps.97,Isa.61,2Cor.6"
        }
    },
    "2023/08/24": {
        "datePretty": "Thursday, August 24, 2023",
        "calendar": "St Bartholomew the Apostle",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 86,117",
                    "readQS": "Psalm+86,117",
                    "audioQS": "Ps.86,117"
                },
                {
                    "pretty": "Genesis 28:10\u201317",
                    "readQS": "Genesis+28:10-17",
                    "audioQS": "Gen.28"
                },
                {
                    "pretty": "John 1:43\u201351",
                    "readQS": "John+1:43-51",
                    "audioQS": "John.1"
                }
            ],
            "readQS": "Psalm+86,117%3B+Genesis+28:10-17%3B+John+1:43-51",
            "audioQS": "Ps.86,117,Gen.28,John.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91,116",
                    "readQS": "Psalm+91,116",
                    "audioQS": "Ps.91,116"
                },
                {
                    "pretty": "Deuteronomy 18:15\u201319",
                    "readQS": "Deuteronomy+18:15-19",
                    "audioQS": "Deut.18"
                },
                {
                    "pretty": "Matthew 10:1\u201322",
                    "readQS": "Matthew+10:1-22",
                    "audioQS": "Matt.10"
                }
            ],
            "readQS": "Psalm+91,116%3B+Deuteronomy+18:15-19%3B+Matthew+10:1-22",
            "audioQS": "Ps.91,116,Deut.18,Matt.10"
        }
    },
    "2023/08/25": {
        "datePretty": "Friday, August 25, 2023",
        "calendar": "Week of 22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Micah 5:2\u2013end",
                    "readQS": "Micah+5:2-",
                    "audioQS": "Mic.5"
                },
                {
                    "pretty": "Mark 6:14\u201329",
                    "readQS": "Mark+6:14-29",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+88%3B+Micah+5:2-%3B+Mark+6:14-29",
            "audioQS": "Ps.88,Mic.5,Mark.6"
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
    "2023/08/26": {
        "datePretty": "Saturday, August 26, 2023",
        "calendar": "Week of 22nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Micah 6",
                    "readQS": "Micah+6",
                    "audioQS": "Mic.6"
                },
                {
                    "pretty": "Mark 6:30\u201344",
                    "readQS": "Mark+6:30-44",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+97%3B+Micah+6%3B+Mark+6:30-44",
            "audioQS": "Ps.97,Mic.6,Mark.6"
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
    "2023/08/27": {
        "datePretty": "Sunday, August 27, 2023",
        "calendar": "23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 104:1\u201325",
                    "readQS": "Psalm+104:1-25",
                    "audioQS": "Ps.104"
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
            "readQS": "Psalm+104:1-25%3B+Jonah+2%3B+Revelation+1",
            "audioQS": "Ps.104,Jonah.2,Rev.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 95",
                    "readQS": "Psalm+95",
                    "audioQS": "Ps.95"
                },
                {
                    "pretty": "2 Kings 6:8\u201323",
                    "readQS": "2+Kings+6:8-23",
                    "audioQS": "2Kgs.6"
                },
                {
                    "pretty": "Acts 17:15\u201334",
                    "readQS": "Acts+17:15-34",
                    "audioQS": "Acts.17"
                }
            ],
            "readQS": "Psalm+95%3B+2+Kings+6:8-23%3B+Acts+17:15-34",
            "audioQS": "Ps.95,2Kgs.6,Acts.17"
        }
    },
    "2023/08/28": {
        "datePretty": "Monday, August 28, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Micah 7:1\u20137",
                    "readQS": "Micah+7:1-7",
                    "audioQS": "Mic.7"
                },
                {
                    "pretty": "Mark 6:45\u2013end",
                    "readQS": "Mark+6:45-",
                    "audioQS": "Mark.6"
                }
            ],
            "readQS": "Psalm+98%3B+Micah+7:1-7%3B+Mark+6:45-",
            "audioQS": "Ps.98,Mic.7,Mark.6"
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
    "2023/08/29": {
        "datePretty": "Tuesday, August 29, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Micah 7:8\u2013end",
                    "readQS": "Micah+7:8-",
                    "audioQS": "Mic.7"
                },
                {
                    "pretty": "Mark 7:1\u201313",
                    "readQS": "Mark+7:1-13",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+106%3B+Micah+7:8-%3B+Mark+7:1-13",
            "audioQS": "Ps.106,Mic.7,Mark.7"
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
    "2023/08/30": {
        "datePretty": "Wednesday, August 30, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 111",
                    "readQS": "Psalm+111",
                    "audioQS": "Ps.111"
                },
                {
                    "pretty": "Habakkuk 1:1\u201311",
                    "readQS": "Habakkuk+1:1-11",
                    "audioQS": "Hab.1"
                },
                {
                    "pretty": "Mark 7:14\u201323",
                    "readQS": "Mark+7:14-23",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+111%3B+Habakkuk+1:1-11%3B+Mark+7:14-23",
            "audioQS": "Ps.111,Hab.1,Mark.7"
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
    "2023/08/31": {
        "datePretty": "Thursday, August 31, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Habakkuk 1:12\u20132:5",
                    "readQS": "Habakkuk+1:12-2:5",
                    "audioQS": "Hab.1"
                },
                {
                    "pretty": "Mark 7:24\u201330",
                    "readQS": "Mark+7:24-30",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+115%3B+Habakkuk+1:12-2:5%3B+Mark+7:24-30",
            "audioQS": "Ps.115,Hab.1,Mark.7"
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
    "2023/09/01": {
        "datePretty": "Friday, September 1, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Habakkuk 2:6\u2013end",
                    "readQS": "Habakkuk+2:6-",
                    "audioQS": "Hab.2"
                },
                {
                    "pretty": "Mark 7:31\u2013end",
                    "readQS": "Mark+7:31-",
                    "audioQS": "Mark.7"
                }
            ],
            "readQS": "Psalm+139%3B+Habakkuk+2:6-%3B+Mark+7:31-",
            "audioQS": "Ps.139,Hab.2,Mark.7"
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
    "2023/09/02": {
        "datePretty": "Saturday, September 2, 2023",
        "calendar": "Week of 23rd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Habakkuk 3:2\u201319a",
                    "readQS": "Habakkuk+3:2-19a",
                    "audioQS": "Hab.3"
                },
                {
                    "pretty": "Mark 8:1\u201310",
                    "readQS": "Mark+8:1-10",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+121%3B+Habakkuk+3:2-19a%3B+Mark+8:1-10",
            "audioQS": "Ps.121,Hab.3,Mark.8"
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
    "2023/09/03": {
        "datePretty": "Sunday, September 3, 2023",
        "calendar": "24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 107:1\u201332",
                    "readQS": "Psalm+107:1-32",
                    "audioQS": "Ps.107"
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
            "readQS": "Psalm+107:1-32%3B+Jonah+3:1-9%3B+Revelation+3:14-22",
            "audioQS": "Ps.107,Jonah.3,Rev.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 105:1\u201315",
                    "readQS": "Psalm+105:1-15",
                    "audioQS": "Ps.105"
                },
                {
                    "pretty": "2 Kings 6:24\u201325,7:3\u201320",
                    "readQS": "2+Kings+6:24-25,7:3-20",
                    "audioQS": "2Kgs.6"
                },
                {
                    "pretty": "Acts 18:1\u201316",
                    "readQS": "Acts+18:1-16",
                    "audioQS": "Acts.18"
                }
            ],
            "readQS": "Psalm+105:1-15%3B+2+Kings+6:24-25,7:3-20%3B+Acts+18:1-16",
            "audioQS": "Ps.105,2Kgs.6,Acts.18"
        }
    },
    "2023/09/04": {
        "datePretty": "Monday, September 4, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Haggai 1:1\u201311",
                    "readQS": "Haggai+1:1-11",
                    "audioQS": "Hag.1"
                },
                {
                    "pretty": "Mark 8:11\u201321",
                    "readQS": "Mark+8:11-21",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+126%3B+Haggai+1:1-11%3B+Mark+8:11-21",
            "audioQS": "Ps.126,Hag.1,Mark.8"
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
    "2023/09/05": {
        "datePretty": "Tuesday, September 5, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Haggai 1:12\u20132:9",
                    "readQS": "Haggai+1:12-2:9",
                    "audioQS": "Hag.1"
                },
                {
                    "pretty": "Mark 8:22\u201326",
                    "readQS": "Mark+8:22-26",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+132%3B+Haggai+1:12-2:9%3B+Mark+8:22-26",
            "audioQS": "Ps.132,Hag.1,Mark.8"
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
    "2023/09/06": {
        "datePretty": "Wednesday, September 6, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Haggai 2:10\u2013end",
                    "readQS": "Haggai+2:10-",
                    "audioQS": "Hag.2"
                },
                {
                    "pretty": "Mark 8:27\u20139:1",
                    "readQS": "Mark+8:27-9:1",
                    "audioQS": "Mark.8"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Haggai+2:10-%3B+Mark+8:27-9:1",
            "audioQS": "Ps.119,Hag.2,Mark.8"
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
    "2023/09/07": {
        "datePretty": "Thursday, September 7, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Zechariah 1:1\u201317",
                    "readQS": "Zechariah+1:1-17",
                    "audioQS": "Zech.1"
                },
                {
                    "pretty": "Mark 9:2\u201313",
                    "readQS": "Mark+9:2-13",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+143%3B+Zechariah+1:1-17%3B+Mark+9:2-13",
            "audioQS": "Ps.143,Zech.1,Mark.9"
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
    "2023/09/08": {
        "datePretty": "Friday, September 8, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Zechariah 1:18\u2013end",
                    "readQS": "Zechariah+1:18-",
                    "audioQS": "Zech.1"
                },
                {
                    "pretty": "Zechariah 2",
                    "readQS": "Zechariah+2",
                    "audioQS": "Zech.2"
                },
                {
                    "pretty": "Mark 9:14\u201329",
                    "readQS": "Mark+9:14-29",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+144%3B+Zechariah+1:18-%3B+Zechariah+2%3B+Mark+9:14-29",
            "audioQS": "Ps.144,Zech.1,Zech.2,Mark.9"
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
    "2023/09/09": {
        "datePretty": "Saturday, September 9, 2023",
        "calendar": "Week of 24th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 147",
                    "readQS": "Psalm+147",
                    "audioQS": "Ps.147"
                },
                {
                    "pretty": "Zechariah 3",
                    "readQS": "Zechariah+3",
                    "audioQS": "Zech.3"
                },
                {
                    "pretty": "Mark 9:30\u201337",
                    "readQS": "Mark+9:30-37",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+147%3B+Zechariah+3%3B+Mark+9:30-37",
            "audioQS": "Ps.147,Zech.3,Mark.9"
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
    "2023/09/10": {
        "datePretty": "Sunday, September 10, 2023",
        "calendar": "25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:17\u201332",
                    "readQS": "Psalm+119:17-32",
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
            "readQS": "Psalm+119:17-32%3B+Jonah+3:10-4:11%3B+Revelation+8:1-5",
            "audioQS": "Ps.119,Jonah.3,Rev.8"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 108",
                    "readQS": "Psalm+108",
                    "audioQS": "Ps.108"
                },
                {
                    "pretty": "Ezekiel 12:21\u201313:16",
                    "readQS": "Ezekiel+12:21-13:16",
                    "audioQS": "Ezek.12"
                },
                {
                    "pretty": "Acts 19:1\u201320",
                    "readQS": "Acts+19:1-20",
                    "audioQS": "Acts.19"
                }
            ],
            "readQS": "Psalm+108%3B+Ezekiel+12:21-13:16%3B+Acts+19:1-20",
            "audioQS": "Ps.108,Ezek.12,Acts.19"
        }
    },
    "2023/09/11": {
        "datePretty": "Monday, September 11, 2023",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Zechariah 4",
                    "readQS": "Zechariah+4",
                    "audioQS": "Zech.4"
                },
                {
                    "pretty": "Mark 9:38\u2013end",
                    "readQS": "Mark+9:38-",
                    "audioQS": "Mark.9"
                }
            ],
            "readQS": "Psalm+1%3B+Zechariah+4%3B+Mark+9:38-",
            "audioQS": "Ps.1,Zech.4,Mark.9"
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
    "2023/09/12": {
        "datePretty": "Tuesday, September 12, 2023",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Zechariah 6:9\u2013end",
                    "readQS": "Zechariah+6:9-",
                    "audioQS": "Zech.6"
                },
                {
                    "pretty": "Mark 10:1\u201316",
                    "readQS": "Mark+10:1-16",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+5%3B+Zechariah+6:9-%3B+Mark+10:1-16",
            "audioQS": "Ps.5,Zech.6,Mark.10"
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
    "2023/09/13": {
        "datePretty": "Wednesday, September 13, 2023",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201332",
                    "readQS": "Psalm+119:1-32",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Zechariah 7",
                    "readQS": "Zechariah+7",
                    "audioQS": "Zech.7"
                },
                {
                    "pretty": "Mark 10:17\u201331",
                    "readQS": "Mark+10:17-31",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+119:1-32%3B+Zechariah+7%3B+Mark+10:17-31",
            "audioQS": "Ps.119,Zech.7,Mark.10"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 66",
                    "readQS": "Psalm+66",
                    "audioQS": "Ps.66"
                },
                {
                    "pretty": "Isaiah 52:13\u201353:12",
                    "readQS": "Isaiah+52:13-53:12",
                    "audioQS": "Isa.52"
                },
                {
                    "pretty": "Ephesians 2:11\u201322",
                    "readQS": "Ephesians+2:11-22",
                    "audioQS": "Eph.2"
                }
            ],
            "readQS": "Psalm+66%3B+Isaiah+52:13-53:12%3B+Ephesians+2:11-22",
            "audioQS": "Ps.66,Isa.52,Eph.2"
        }
    },
    "2023/09/14": {
        "datePretty": "Thursday, September 14, 2023",
        "calendar": "Holy Cross Day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 2,8,146",
                    "readQS": "Psalm+2,8,146",
                    "audioQS": "Ps.2,8,146"
                },
                {
                    "pretty": "Genesis 3:1\u201315",
                    "readQS": "Genesis+3:1-15",
                    "audioQS": "Gen.3"
                },
                {
                    "pretty": "John 12:27\u201336a",
                    "readQS": "John+12:27-36a",
                    "audioQS": "John.12"
                }
            ],
            "readQS": "Psalm+2,8,146%3B+Genesis+3:1-15%3B+John+12:27-36a",
            "audioQS": "Ps.2,8,146,Gen.3,John.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 110,150",
                    "readQS": "Psalm+110,150",
                    "audioQS": "Ps.110,150"
                },
                {
                    "pretty": "Isaiah 63:1\u201316",
                    "readQS": "Isaiah+63:1-16",
                    "audioQS": "Isa.63"
                },
                {
                    "pretty": "1 Corinthians 1:18\u201325",
                    "readQS": "1+Corinthians+1:18-25",
                    "audioQS": "1Cor.1"
                }
            ],
            "readQS": "Psalm+110,150%3B+Isaiah+63:1-16%3B+1+Corinthians+1:18-25",
            "audioQS": "Ps.110,150,Isa.63,1Cor.1"
        }
    },
    "2023/09/15": {
        "datePretty": "Friday, September 15, 2023",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Zechariah 8:9\u2013end",
                    "readQS": "Zechariah+8:9-",
                    "audioQS": "Zech.8"
                },
                {
                    "pretty": "Mark 10:35\u201345",
                    "readQS": "Mark+10:35-45",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+19%3B+Zechariah+8:9-%3B+Mark+10:35-45",
            "audioQS": "Ps.19,Zech.8,Mark.10"
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
    "2023/09/16": {
        "datePretty": "Saturday, September 16, 2023",
        "calendar": "Week of 25th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Zechariah 9:1\u201312",
                    "readQS": "Zechariah+9:1-12",
                    "audioQS": "Zech.9"
                },
                {
                    "pretty": "Mark 10:46\u2013end",
                    "readQS": "Mark+10:46-",
                    "audioQS": "Mark.10"
                }
            ],
            "readQS": "Psalm+23%3B+Zechariah+9:1-12%3B+Mark+10:46-",
            "audioQS": "Ps.23,Zech.9,Mark.10"
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
    "2023/09/17": {
        "datePretty": "Sunday, September 17, 2023",
        "calendar": "26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:65\u201388",
                    "readQS": "Psalm+119:65-88",
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
            "readQS": "Psalm+119:65-88%3B+Isaiah+44:24-45:8%3B+Revelation+12:1-12",
            "audioQS": "Ps.119,Isa.44,Rev.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:41\u201348",
                    "readQS": "Psalm+119:41-48",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 20:1\u20138,33\u201344",
                    "readQS": "Ezekiel+20:1-8,33-44",
                    "audioQS": "Ezek.20"
                },
                {
                    "pretty": "Acts 20:17\u201338",
                    "readQS": "Acts+20:17-38",
                    "audioQS": "Acts.20"
                }
            ],
            "readQS": "Psalm+119:41-48%3B+Ezekiel+20:1-8,33-44%3B+Acts+20:17-38",
            "audioQS": "Ps.119,Ezek.20,Acts.20"
        }
    },
    "2023/09/18": {
        "datePretty": "Monday, September 18, 2023",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 30",
                    "readQS": "Psalm+30",
                    "audioQS": "Ps.30"
                },
                {
                    "pretty": "Zechariah 10",
                    "readQS": "Zechariah+10",
                    "audioQS": "Zech.10"
                },
                {
                    "pretty": "Mark 11:1\u201311",
                    "readQS": "Mark+11:1-11",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+30%3B+Zechariah+10%3B+Mark+11:1-11",
            "audioQS": "Ps.30,Zech.10,Mark.11"
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
    "2023/09/19": {
        "datePretty": "Tuesday, September 19, 2023",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 36",
                    "readQS": "Psalm+36",
                    "audioQS": "Ps.36"
                },
                {
                    "pretty": "Zechariah 11:4\u2013end",
                    "readQS": "Zechariah+11:4-",
                    "audioQS": "Zech.11"
                },
                {
                    "pretty": "Mark 11:12\u201326",
                    "readQS": "Mark+11:12-26",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+36%3B+Zechariah+11:4-%3B+Mark+11:12-26",
            "audioQS": "Ps.36,Zech.11,Mark.11"
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
    "2023/09/20": {
        "datePretty": "Wednesday, September 20, 2023",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Zechariah 12:1\u201310",
                    "readQS": "Zechariah+12:1-10",
                    "audioQS": "Zech.12"
                },
                {
                    "pretty": "Mark 11:27\u2013end",
                    "readQS": "Mark+11:27-",
                    "audioQS": "Mark.11"
                }
            ],
            "readQS": "Psalm+34%3B+Zechariah+12:1-10%3B+Mark+11:27-",
            "audioQS": "Ps.34,Zech.12,Mark.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 34",
                    "readQS": "Psalm+34",
                    "audioQS": "Ps.34"
                },
                {
                    "pretty": "Isaiah 33:13\u201317",
                    "readQS": "Isaiah+33:13-17",
                    "audioQS": "Isa.33"
                },
                {
                    "pretty": "Matthew 6:19\u201334",
                    "readQS": "Matthew+6:19-34",
                    "audioQS": "Matt.6"
                }
            ],
            "readQS": "Psalm+34%3B+Isaiah+33:13-17%3B+Matthew+6:19-34",
            "audioQS": "Ps.34,Isa.33,Matt.6"
        }
    },
    "2023/09/21": {
        "datePretty": "Thursday, September 21, 2023",
        "calendar": "St Matthew, Apostle and Evangelist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 49,117",
                    "readQS": "Psalm+49,117",
                    "audioQS": "Ps.49,117"
                },
                {
                    "pretty": "1 Kings 19:15\u201321",
                    "readQS": "1+Kings+19:15-21",
                    "audioQS": "1Kgs.19"
                },
                {
                    "pretty": "2 Timothy 3:14\u201317",
                    "readQS": "2+Timothy+3:14-17",
                    "audioQS": "2Tim.3"
                }
            ],
            "readQS": "Psalm+49,117%3B+1+Kings+19:15-21%3B+2+Timothy+3:14-17",
            "audioQS": "Ps.49,117,1Kgs.19,2Tim.3"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:33\u201340,119:89\u201396",
                    "readQS": "Psalm+119:33-40,119:89-96",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ecclesiastes 5:4\u201312",
                    "readQS": "Ecclesiastes+5:4-12",
                    "audioQS": "Eccl.5"
                },
                {
                    "pretty": "Matthew 19:16\u201330",
                    "readQS": "Matthew+19:16-30",
                    "audioQS": "Matt.19"
                }
            ],
            "readQS": "Psalm+119:33-40,119:89-96%3B+Ecclesiastes+5:4-12%3B+Matthew+19:16-30",
            "audioQS": "Ps.119,Eccl.5,Matt.19"
        }
    },
    "2023/09/22": {
        "datePretty": "Friday, September 22, 2023",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 31",
                    "readQS": "Psalm+31",
                    "audioQS": "Ps.31"
                },
                {
                    "pretty": "Zechariah 14:1\u201311",
                    "readQS": "Zechariah+14:1-11",
                    "audioQS": "Zech.14"
                },
                {
                    "pretty": "Mark 12:13\u201317",
                    "readQS": "Mark+12:13-17",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+31%3B+Zechariah+14:1-11%3B+Mark+12:13-17",
            "audioQS": "Ps.31,Zech.14,Mark.12"
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
    "2023/09/23": {
        "datePretty": "Saturday, September 23, 2023",
        "calendar": "Week of 26th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 42",
                    "readQS": "Psalm+42",
                    "audioQS": "Ps.42"
                },
                {
                    "pretty": "Zechariah 14:12\u2013end",
                    "readQS": "Zechariah+14:12-",
                    "audioQS": "Zech.14"
                },
                {
                    "pretty": "Mark 12:18\u201327",
                    "readQS": "Mark+12:18-27",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+42%3B+Zechariah+14:12-%3B+Mark+12:18-27",
            "audioQS": "Ps.42,Zech.14,Mark.12"
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
    "2023/09/24": {
        "datePretty": "Sunday, September 24, 2023",
        "calendar": "27th Sunday in Ordinary Time",
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
                    "pretty": "Psalm 119:113\u2013136",
                    "readQS": "Psalm+119:113-136",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 33:23,33:30\u2013end,34:10",
                    "readQS": "Ezekiel+33:23,33:30-,34:10",
                    "audioQS": "Ezek.33"
                },
                {
                    "pretty": "Acts 26:1,9\u201325",
                    "readQS": "Acts+26:1,9-25",
                    "audioQS": "Acts.26"
                }
            ],
            "readQS": "Psalm+119:113-136%3B+Ezekiel+33:23,33:30-,34:10%3B+Acts+26:1,9-25",
            "audioQS": "Ps.119,Ezek.33,Acts.26"
        }
    },
    "2023/09/25": {
        "datePretty": "Monday, September 25, 2023",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 44",
                    "readQS": "Psalm+44",
                    "audioQS": "Ps.44"
                },
                {
                    "pretty": "Ezekiel 1:1\u201314",
                    "readQS": "Ezekiel+1:1-14",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "Mark 12:28\u201334",
                    "readQS": "Mark+12:28-34",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+44%3B+Ezekiel+1:1-14%3B+Mark+12:28-34",
            "audioQS": "Ps.44,Ezek.1,Mark.12"
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
    "2023/09/26": {
        "datePretty": "Tuesday, September 26, 2023",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 48",
                    "readQS": "Psalm+48",
                    "audioQS": "Ps.48"
                },
                {
                    "pretty": "Ezekiel 1:15\u20132:2",
                    "readQS": "Ezekiel+1:15-2:2",
                    "audioQS": "Ezek.1"
                },
                {
                    "pretty": "Mark 12:35\u2013end",
                    "readQS": "Mark+12:35-",
                    "audioQS": "Mark.12"
                }
            ],
            "readQS": "Psalm+48%3B+Ezekiel+1:15-2:2%3B+Mark+12:35-",
            "audioQS": "Ps.48,Ezek.1,Mark.12"
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
    "2023/09/27": {
        "datePretty": "Wednesday, September 27, 2023",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:57\u201380",
                    "readQS": "Psalm+119:57-80",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 2:3\u20133:11",
                    "readQS": "Ezekiel+2:3-3:11",
                    "audioQS": "Ezek.2"
                },
                {
                    "pretty": "Mark 13:1\u201313",
                    "readQS": "Mark+13:1-13",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+119:57-80%3B+Ezekiel+2:3-3:11%3B+Mark+13:1-13",
            "audioQS": "Ps.119,Ezek.2,Mark.13"
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
    "2023/09/28": {
        "datePretty": "Thursday, September 28, 2023",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 57",
                    "readQS": "Psalm+57",
                    "audioQS": "Ps.57"
                },
                {
                    "pretty": "Ezekiel 3:12\u2013end",
                    "readQS": "Ezekiel+3:12-",
                    "audioQS": "Ezek.3"
                },
                {
                    "pretty": "Mark 13:14\u201323",
                    "readQS": "Mark+13:14-23",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+57%3B+Ezekiel+3:12-%3B+Mark+13:14-23",
            "audioQS": "Ps.57,Ezek.3,Mark.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "2 Kings 6:8\u201317",
                    "readQS": "2+Kings+6:8-17",
                    "audioQS": "2Kgs.6"
                },
                {
                    "pretty": "Matthew 18:1\u20136,10",
                    "readQS": "Matthew+18:1-6,10",
                    "audioQS": "Matt.18"
                }
            ],
            "readQS": "Psalm+91%3B+2+Kings+6:8-17%3B+Matthew+18:1-6,10",
            "audioQS": "Ps.91,2Kgs.6,Matt.18"
        }
    },
    "2023/09/29": {
        "datePretty": "Friday, September 29, 2023",
        "calendar": "St Michael and All Angels / Michaelmas",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 34,150",
                    "readQS": "Psalm+34,150",
                    "audioQS": "Ps.34,150"
                },
                {
                    "pretty": "Daniel 12:1\u20134",
                    "readQS": "Daniel+12:1-4",
                    "audioQS": "Dan.12"
                },
                {
                    "pretty": "Acts 12:1\u201311",
                    "readQS": "Acts+12:1-11",
                    "audioQS": "Acts.12"
                }
            ],
            "readQS": "Psalm+34,150%3B+Daniel+12:1-4%3B+Acts+12:1-11",
            "audioQS": "Ps.34,150,Dan.12,Acts.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 138,148",
                    "readQS": "Psalm+138,148",
                    "audioQS": "Ps.138,148"
                },
                {
                    "pretty": "Daniel 10:4\u201321",
                    "readQS": "Daniel+10:4-21",
                    "audioQS": "Dan.10"
                },
                {
                    "pretty": "Revelations 5",
                    "readQS": "Revelations+5",
                    "audioQS": "Revs.5"
                }
            ],
            "readQS": "Psalm+138,148%3B+Daniel+10:4-21%3B+Revelations+5",
            "audioQS": "Ps.138,148,Dan.10,Revs.5"
        }
    },
    "2023/09/30": {
        "datePretty": "Saturday, September 30, 2023",
        "calendar": "Week of 27th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 68",
                    "readQS": "Psalm+68",
                    "audioQS": "Ps.68"
                },
                {
                    "pretty": "Ezekiel 9",
                    "readQS": "Ezekiel+9",
                    "audioQS": "Ezek.9"
                },
                {
                    "pretty": "Mark 13:32\u2013end",
                    "readQS": "Mark+13:32-",
                    "audioQS": "Mark.13"
                }
            ],
            "readQS": "Psalm+68%3B+Ezekiel+9%3B+Mark+13:32-",
            "audioQS": "Ps.68,Ezek.9,Mark.13"
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
    "2023/10/01": {
        "datePretty": "Sunday, October 1, 2023",
        "calendar": "28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 125,126,127",
                    "readQS": "Psalm+125,126,127",
                    "audioQS": "Ps.125,126,127"
                },
                {
                    "pretty": "Isaiah 48:12\u201321",
                    "readQS": "Isaiah+48:12-21",
                    "audioQS": "Isa.48"
                },
                {
                    "pretty": "Luke 11:37\u201354",
                    "readQS": "Luke+11:37-54",
                    "audioQS": "Luke.11"
                }
            ],
            "readQS": "Psalm+125,126,127%3B+Isaiah+48:12-21%3B+Luke+11:37-54",
            "audioQS": "Ps.125,126,127,Isa.48,Luke.11"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 124",
                    "readQS": "Psalm+124",
                    "audioQS": "Ps.124"
                },
                {
                    "pretty": "Ezekiel 37:15\u201328",
                    "readQS": "Ezekiel+37:15-28",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "1 John 2:22\u201329",
                    "readQS": "1+John+2:22-29",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+124%3B+Ezekiel+37:15-28%3B+1+John+2:22-29",
            "audioQS": "Ps.124,Ezek.37,1John.2"
        }
    },
    "2023/10/02": {
        "datePretty": "Monday, October 2, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 71",
                    "readQS": "Psalm+71",
                    "audioQS": "Ps.71"
                },
                {
                    "pretty": "Ezekiel 10:1\u201319",
                    "readQS": "Ezekiel+10:1-19",
                    "audioQS": "Ezek.10"
                },
                {
                    "pretty": "Mark 14:1\u201311",
                    "readQS": "Mark+14:1-11",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+71%3B+Ezekiel+10:1-19%3B+Mark+14:1-11",
            "audioQS": "Ps.71,Ezek.10,Mark.14"
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
    "2023/10/03": {
        "datePretty": "Tuesday, October 3, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 73",
                    "readQS": "Psalm+73",
                    "audioQS": "Ps.73"
                },
                {
                    "pretty": "Ezekiel 11:14\u2013end",
                    "readQS": "Ezekiel+11:14-",
                    "audioQS": "Ezek.11"
                },
                {
                    "pretty": "Mark 14:12\u201325",
                    "readQS": "Mark+14:12-25",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+73%3B+Ezekiel+11:14-%3B+Mark+14:12-25",
            "audioQS": "Ps.73,Ezek.11,Mark.14"
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
    "2023/10/04": {
        "datePretty": "Wednesday, October 4, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 77",
                    "readQS": "Psalm+77",
                    "audioQS": "Ps.77"
                },
                {
                    "pretty": "Ezekiel 12:1\u201316",
                    "readQS": "Ezekiel+12:1-16",
                    "audioQS": "Ezek.12"
                },
                {
                    "pretty": "Mark 14:26\u201342",
                    "readQS": "Mark+14:26-42",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+77%3B+Ezekiel+12:1-16%3B+Mark+14:26-42",
            "audioQS": "Ps.77,Ezek.12,Mark.14"
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
    "2023/10/05": {
        "datePretty": "Thursday, October 5, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78:1\u201339",
                    "readQS": "Psalm+78:1-39",
                    "audioQS": "Ps.78"
                },
                {
                    "pretty": "Ezekiel 12:17\u2013end",
                    "readQS": "Ezekiel+12:17-",
                    "audioQS": "Ezek.12"
                },
                {
                    "pretty": "Mark 14:43\u201352",
                    "readQS": "Mark+14:43-52",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+78:1-39%3B+Ezekiel+12:17-%3B+Mark+14:43-52",
            "audioQS": "Ps.78,Ezek.12,Mark.14"
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
    "2023/10/06": {
        "datePretty": "Friday, October 6, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 55",
                    "readQS": "Psalm+55",
                    "audioQS": "Ps.55"
                },
                {
                    "pretty": "Ezekiel 13:1\u201316",
                    "readQS": "Ezekiel+13:1-16",
                    "audioQS": "Ezek.13"
                },
                {
                    "pretty": "Mark 14:53\u201365",
                    "readQS": "Mark+14:53-65",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+55%3B+Ezekiel+13:1-16%3B+Mark+14:53-65",
            "audioQS": "Ps.55,Ezek.13,Mark.14"
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
    "2023/10/07": {
        "datePretty": "Saturday, October 7, 2023",
        "calendar": "Week of 28th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 76",
                    "readQS": "Psalm+76",
                    "audioQS": "Ps.76"
                },
                {
                    "pretty": "Ezekiel 14:1\u201311",
                    "readQS": "Ezekiel+14:1-11",
                    "audioQS": "Ezek.14"
                },
                {
                    "pretty": "Mark 14:66\u2013end",
                    "readQS": "Mark+14:66-",
                    "audioQS": "Mark.14"
                }
            ],
            "readQS": "Psalm+76%3B+Ezekiel+14:1-11%3B+Mark+14:66-",
            "audioQS": "Ps.76,Ezek.14,Mark.14"
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
    "2023/10/08": {
        "datePretty": "Sunday, October 8, 2023",
        "calendar": "29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 128,129,134",
                    "readQS": "Psalm+128,129,134",
                    "audioQS": "Ps.128,129,134"
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
            "readQS": "Psalm+128,129,134%3B+Isaiah+49:13-23%3B+Luke+12:1-12",
            "audioQS": "Ps.128,129,134,Isa.49,Luke.12"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 136",
                    "readQS": "Psalm+136",
                    "audioQS": "Ps.136"
                },
                {
                    "pretty": "Proverbs 2:1\u201311",
                    "readQS": "Proverbs+2:1-11",
                    "audioQS": "Prov.2"
                },
                {
                    "pretty": "1 John 2:1\u201317",
                    "readQS": "1+John+2:1-17",
                    "audioQS": "1John.2"
                }
            ],
            "readQS": "Psalm+136%3B+Proverbs+2:1-11%3B+1+John+2:1-17",
            "audioQS": "Ps.136,Prov.2,1John.2"
        }
    },
    "2023/10/09": {
        "datePretty": "Monday, October 9, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 80",
                    "readQS": "Psalm+80",
                    "audioQS": "Ps.80"
                },
                {
                    "pretty": "Ezekiel 14:12\u2013end",
                    "readQS": "Ezekiel+14:12-",
                    "audioQS": "Ezek.14"
                },
                {
                    "pretty": "Mark 15:1\u201315",
                    "readQS": "Mark+15:1-15",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+80%3B+Ezekiel+14:12-%3B+Mark+15:1-15",
            "audioQS": "Ps.80,Ezek.14,Mark.15"
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
    "2023/10/10": {
        "datePretty": "Tuesday, October 10, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 89:1\u201318",
                    "readQS": "Psalm+89:1-18",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "Ezekiel 18:1\u201320",
                    "readQS": "Ezekiel+18:1-20",
                    "audioQS": "Ezek.18"
                },
                {
                    "pretty": "Mark 15:16\u201332",
                    "readQS": "Mark+15:16-32",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+89:1-18%3B+Ezekiel+18:1-20%3B+Mark+15:16-32",
            "audioQS": "Ps.89,Ezek.18,Mark.15"
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
    "2023/10/11": {
        "datePretty": "Wednesday, October 11, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:105\u2013128",
                    "readQS": "Psalm+119:105-128",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 18:21\u201332",
                    "readQS": "Ezekiel+18:21-32",
                    "audioQS": "Ezek.18"
                },
                {
                    "pretty": "Mark 15:33\u201341",
                    "readQS": "Mark+15:33-41",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+119:105-128%3B+Ezekiel+18:21-32%3B+Mark+15:33-41",
            "audioQS": "Ps.119,Ezek.18,Mark.15"
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
    "2023/10/12": {
        "datePretty": "Thursday, October 12, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 92",
                    "readQS": "Psalm+92",
                    "audioQS": "Ps.92"
                },
                {
                    "pretty": "Ezekiel 20:1\u201320",
                    "readQS": "Ezekiel+20:1-20",
                    "audioQS": "Ezek.20"
                },
                {
                    "pretty": "Mark 15:42\u2013end",
                    "readQS": "Mark+15:42-",
                    "audioQS": "Mark.15"
                }
            ],
            "readQS": "Psalm+92%3B+Ezekiel+20:1-20%3B+Mark+15:42-",
            "audioQS": "Ps.92,Ezek.20,Mark.15"
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
    "2023/10/13": {
        "datePretty": "Friday, October 13, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 88",
                    "readQS": "Psalm+88",
                    "audioQS": "Ps.88"
                },
                {
                    "pretty": "Ezekiel 20:21\u201338",
                    "readQS": "Ezekiel+20:21-38",
                    "audioQS": "Ezek.20"
                },
                {
                    "pretty": "Mark 16:1\u20138",
                    "readQS": "Mark+16:1-8",
                    "audioQS": "Mark.16"
                }
            ],
            "readQS": "Psalm+88%3B+Ezekiel+20:21-38%3B+Mark+16:1-8",
            "audioQS": "Ps.88,Ezek.20,Mark.16"
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
    "2023/10/14": {
        "datePretty": "Saturday, October 14, 2023",
        "calendar": "Week of 29th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 97",
                    "readQS": "Psalm+97",
                    "audioQS": "Ps.97"
                },
                {
                    "pretty": "Ezekiel 24:15\u2013end",
                    "readQS": "Ezekiel+24:15-",
                    "audioQS": "Ezek.24"
                },
                {
                    "pretty": "Mark 16:9\u2013end",
                    "readQS": "Mark+16:9-",
                    "audioQS": "Mark.16"
                }
            ],
            "readQS": "Psalm+97%3B+Ezekiel+24:15-%3B+Mark+16:9-",
            "audioQS": "Ps.97,Ezek.24,Mark.16"
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
    "2023/10/15": {
        "datePretty": "Sunday, October 15, 2023",
        "calendar": "30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 138,141",
                    "readQS": "Psalm+138,141",
                    "audioQS": "Ps.138,141"
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
            "readQS": "Psalm+138,141%3B+Isaiah+50:4-10%3B+Luke+13:22-30",
            "audioQS": "Ps.138,141,Isa.50,Luke.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 139:1\u201318",
                    "readQS": "Psalm+139:1-18",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Proverbs 3:1\u201318",
                    "readQS": "Proverbs+3:1-18",
                    "audioQS": "Prov.3"
                },
                {
                    "pretty": "1 John 3:1\u201315",
                    "readQS": "1+John+3:1-15",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+139:1-18%3B+Proverbs+3:1-18%3B+1+John+3:1-15",
            "audioQS": "Ps.139,Prov.3,1John.3"
        }
    },
    "2023/10/16": {
        "datePretty": "Monday, October 16, 2023",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Ezekiel 28:1\u201319",
                    "readQS": "Ezekiel+28:1-19",
                    "audioQS": "Ezek.28"
                },
                {
                    "pretty": "John 13:1\u201311",
                    "readQS": "John+13:1-11",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+98%3B+Ezekiel+28:1-19%3B+John+13:1-11",
            "audioQS": "Ps.98,Ezek.28,John.13"
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
    "2023/10/17": {
        "datePretty": "Tuesday, October 17, 2023",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 106",
                    "readQS": "Psalm+106",
                    "audioQS": "Ps.106"
                },
                {
                    "pretty": "Ezekiel 33:1\u201320",
                    "readQS": "Ezekiel+33:1-20",
                    "audioQS": "Ezek.33"
                },
                {
                    "pretty": "John 13:12\u201320",
                    "readQS": "John+13:12-20",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+106%3B+Ezekiel+33:1-20%3B+John+13:12-20",
            "audioQS": "Ps.106,Ezek.33,John.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Hosea 6:1\u20133",
                    "readQS": "Hosea+6:1-3",
                    "audioQS": "Hos.6"
                },
                {
                    "pretty": "2 Timothy 3:10\u201317",
                    "readQS": "2+Timothy+3:10-17",
                    "audioQS": "2Tim.3"
                }
            ],
            "readQS": "Psalm+33%3B+Hosea+6:1-3%3B+2+Timothy+3:10-17",
            "audioQS": "Ps.33,Hos.6,2Tim.3"
        }
    },
    "2023/10/18": {
        "datePretty": "Wednesday, October 18, 2023",
        "calendar": "St Luke the Evangelist",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145,146",
                    "readQS": "Psalm+145,146",
                    "audioQS": "Ps.145,146"
                },
                {
                    "pretty": "Isaiah 55",
                    "readQS": "Isaiah+55",
                    "audioQS": "Isa.55"
                },
                {
                    "pretty": "Luke 1:1\u20134",
                    "readQS": "Luke+1:1-4",
                    "audioQS": "Luke.1"
                }
            ],
            "readQS": "Psalm+145,146%3B+Isaiah+55%3B+Luke+1:1-4",
            "audioQS": "Ps.145,146,Isa.55,Luke.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 103",
                    "readQS": "Psalm+103",
                    "audioQS": "Ps.103"
                },
                {
                    "pretty": "Isaiah 61:1\u20136",
                    "readQS": "Isaiah+61:1-6",
                    "audioQS": "Isa.61"
                },
                {
                    "pretty": "Colossians 4:7\u201318",
                    "readQS": "Colossians+4:7-18",
                    "audioQS": "Col.4"
                }
            ],
            "readQS": "Psalm+103%3B+Isaiah+61:1-6%3B+Colossians+4:7-18",
            "audioQS": "Ps.103,Isa.61,Col.4"
        }
    },
    "2023/10/19": {
        "datePretty": "Thursday, October 19, 2023",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 115",
                    "readQS": "Psalm+115",
                    "audioQS": "Ps.115"
                },
                {
                    "pretty": "Ezekiel 34:1\u201316",
                    "readQS": "Ezekiel+34:1-16",
                    "audioQS": "Ezek.34"
                },
                {
                    "pretty": "John 13:31\u2013end",
                    "readQS": "John+13:31-",
                    "audioQS": "John.13"
                }
            ],
            "readQS": "Psalm+115%3B+Ezekiel+34:1-16%3B+John+13:31-",
            "audioQS": "Ps.115,Ezek.34,John.13"
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
    "2023/10/20": {
        "datePretty": "Friday, October 20, 2023",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 139",
                    "readQS": "Psalm+139",
                    "audioQS": "Ps.139"
                },
                {
                    "pretty": "Ezekiel 34:17\u2013end",
                    "readQS": "Ezekiel+34:17-",
                    "audioQS": "Ezek.34"
                },
                {
                    "pretty": "John 14:1\u201314",
                    "readQS": "John+14:1-14",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+139%3B+Ezekiel+34:17-%3B+John+14:1-14",
            "audioQS": "Ps.139,Ezek.34,John.14"
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
    "2023/10/21": {
        "datePretty": "Saturday, October 21, 2023",
        "calendar": "Week of 30th Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 121",
                    "readQS": "Psalm+121",
                    "audioQS": "Ps.121"
                },
                {
                    "pretty": "Ezekiel 36:16\u201336",
                    "readQS": "Ezekiel+36:16-36",
                    "audioQS": "Ezek.36"
                },
                {
                    "pretty": "John 14:15\u2013end",
                    "readQS": "John+14:15-",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+121%3B+Ezekiel+36:16-36%3B+John+14:15-",
            "audioQS": "Ps.121,Ezek.36,John.14"
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
    "2023/10/22": {
        "datePretty": "Sunday, October 22, 2023",
        "calendar": "31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 145,149",
                    "readQS": "Psalm+145,149",
                    "audioQS": "Ps.145,149"
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
            "readQS": "Psalm+145,149%3B+Isaiah+54:1-14%3B+Luke+13:31-35",
            "audioQS": "Ps.145,149,Isa.54,Luke.13"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 142",
                    "readQS": "Psalm+142",
                    "audioQS": "Ps.142"
                },
                {
                    "pretty": "Proverbs 4:1\u201318",
                    "readQS": "Proverbs+4:1-18",
                    "audioQS": "Prov.4"
                },
                {
                    "pretty": "1 John 3:16\u2013end,4:1\u20136",
                    "readQS": "1+John+3:16-,4:1-6",
                    "audioQS": "1John.3"
                }
            ],
            "readQS": "Psalm+142%3B+Proverbs+4:1-18%3B+1+John+3:16-,4:1-6",
            "audioQS": "Ps.142,Prov.4,1John.3"
        }
    },
    "2023/10/23": {
        "datePretty": "Monday, October 23, 2023",
        "calendar": "Week of 31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 126",
                    "readQS": "Psalm+126",
                    "audioQS": "Ps.126"
                },
                {
                    "pretty": "Ezekiel 37:1\u201314",
                    "readQS": "Ezekiel+37:1-14",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "John 15:1\u201311",
                    "readQS": "John+15:1-11",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+126%3B+Ezekiel+37:1-14%3B+John+15:1-11",
            "audioQS": "Ps.126,Ezek.37,John.15"
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
    "2023/10/24": {
        "datePretty": "Tuesday, October 24, 2023",
        "calendar": "Week of 31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 132",
                    "readQS": "Psalm+132",
                    "audioQS": "Ps.132"
                },
                {
                    "pretty": "Ezekiel 37:15\u2013end",
                    "readQS": "Ezekiel+37:15-",
                    "audioQS": "Ezek.37"
                },
                {
                    "pretty": "John 15:12\u201317",
                    "readQS": "John+15:12-17",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+132%3B+Ezekiel+37:15-%3B+John+15:12-17",
            "audioQS": "Ps.132,Ezek.37,John.15"
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
    "2023/10/25": {
        "datePretty": "Wednesday, October 25, 2023",
        "calendar": "Week of 31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:153\u2013end",
                    "readQS": "Psalm+119:153-",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Ezekiel 39:21\u2013end",
                    "readQS": "Ezekiel+39:21-",
                    "audioQS": "Ezek.39"
                },
                {
                    "pretty": "John 15:18\u2013end",
                    "readQS": "John+15:18-",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+119:153-%3B+Ezekiel+39:21-%3B+John+15:18-",
            "audioQS": "Ps.119,Ezek.39,John.15"
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
    "2023/10/26": {
        "datePretty": "Thursday, October 26, 2023",
        "calendar": "Week of 31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 143",
                    "readQS": "Psalm+143",
                    "audioQS": "Ps.143"
                },
                {
                    "pretty": "Ezekiel 43:1\u201312",
                    "readQS": "Ezekiel+43:1-12",
                    "audioQS": "Ezek.43"
                },
                {
                    "pretty": "John 16:1\u201315",
                    "readQS": "John+16:1-15",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+143%3B+Ezekiel+43:1-12%3B+John+16:1-15",
            "audioQS": "Ps.143,Ezek.43,John.16"
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
    "2023/10/27": {
        "datePretty": "Friday, October 27, 2023",
        "calendar": "Week of 31st Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 144",
                    "readQS": "Psalm+144",
                    "audioQS": "Ps.144"
                },
                {
                    "pretty": "Ezekiel 44:4\u201316",
                    "readQS": "Ezekiel+44:4-16",
                    "audioQS": "Ezek.44"
                },
                {
                    "pretty": "John 16:16\u201322",
                    "readQS": "John+16:16-22",
                    "audioQS": "John.16"
                }
            ],
            "readQS": "Psalm+144%3B+Ezekiel+44:4-16%3B+John+16:16-22",
            "audioQS": "Ps.144,Ezek.44,John.16"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 124,125,126",
                    "readQS": "Psalm+124,125,126",
                    "audioQS": "Ps.124,125,126"
                },
                {
                    "pretty": "Deuteronomy 32:1\u20134",
                    "readQS": "Deuteronomy+32:1-4",
                    "audioQS": "Deut.32"
                },
                {
                    "pretty": "John 14:15\u201326",
                    "readQS": "John+14:15-26",
                    "audioQS": "John.14"
                }
            ],
            "readQS": "Psalm+124,125,126%3B+Deuteronomy+32:1-4%3B+John+14:15-26",
            "audioQS": "Ps.124,125,126,Deut.32,John.14"
        }
    },
    "2023/10/28": {
        "datePretty": "Saturday, October 28, 2023",
        "calendar": "St Simon and St Jude, Apostles",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 116,117",
                    "readQS": "Psalm+116,117",
                    "audioQS": "Ps.116,117"
                },
                {
                    "pretty": "Isaiah 45:18\u201326",
                    "readQS": "Isaiah+45:18-26",
                    "audioQS": "Isa.45"
                },
                {
                    "pretty": "Luke 6:12\u201316",
                    "readQS": "Luke+6:12-16",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+116,117%3B+Isaiah+45:18-26%3B+Luke+6:12-16",
            "audioQS": "Ps.116,117,Isa.45,Luke.6"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:1\u201316",
                    "readQS": "Psalm+119:1-16",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Jeremiah 3:11\u201318",
                    "readQS": "Jeremiah+3:11-18",
                    "audioQS": "Jer.3"
                },
                {
                    "pretty": "Jude 1\u20134,17\u201325",
                    "readQS": "Jude+1-4,17-25",
                    "audioQS": "Jude.1\u20134,17\u201325"
                }
            ],
            "readQS": "Psalm+119:1-16%3B+Jeremiah+3:11-18%3B+Jude+1-4,17-25",
            "audioQS": "Ps.119,Jer.3,Jude.1\u20134,17\u201325"
        }
    },
    "2023/10/29": {
        "datePretty": "Sunday, October 29, 2023",
        "calendar": "32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 119:137\u2013152",
                    "readQS": "Psalm+119:137-152",
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
            "readQS": "Psalm+119:137-152%3B+Isaiah+59:9-20%3B+Luke+14:1-14",
            "audioQS": "Ps.119,Isa.59,Luke.14"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 119:89\u2013104",
                    "readQS": "Psalm+119:89-104",
                    "audioQS": "Ps.119"
                },
                {
                    "pretty": "Eccles 11,12",
                    "readQS": "Eccles+11,12",
                    "audioQS": "Eccles 11,12"
                },
                {
                    "pretty": "2 Tim 2:1\u20137",
                    "readQS": "2+Tim+2:1-7",
                    "audioQS": "2 Tim 2"
                }
            ],
            "readQS": "Psalm+119:89-104%3B+Eccles+11,12%3B+2+Tim+2:1-7",
            "audioQS": "Ps.119,Eccles 11,12,2 Tim 2"
        }
    },
    "2023/10/30": {
        "datePretty": "Monday, October 30, 2023",
        "calendar": "Week of 32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 1",
                    "readQS": "Psalm+1",
                    "audioQS": "Ps.1"
                },
                {
                    "pretty": "Ecclesiastes 1",
                    "readQS": "Ecclesiastes+1",
                    "audioQS": "Eccl.1"
                },
                {
                    "pretty": "John 17:1\u20135",
                    "readQS": "John+17:1-5",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+1%3B+Ecclesiastes+1%3B+John+17:1-5",
            "audioQS": "Ps.1,Eccl.1,John.17"
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
    "2023/10/31": {
        "datePretty": "Tuesday, October 31, 2023",
        "calendar": "Week of 32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 5",
                    "readQS": "Psalm+5",
                    "audioQS": "Ps.5"
                },
                {
                    "pretty": "Ecclesiastes 2",
                    "readQS": "Ecclesiastes+2",
                    "audioQS": "Eccl.2"
                },
                {
                    "pretty": "John 17:6\u201319",
                    "readQS": "John+17:6-19",
                    "audioQS": "John.17"
                }
            ],
            "readQS": "Psalm+5%3B+Ecclesiastes+2%3B+John+17:6-19",
            "audioQS": "Ps.5,Eccl.2,John.17"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 1,5",
                    "readQS": "Psalm+1,5",
                    "audioQS": "Ps.1,5"
                },
                {
                    "pretty": "Isaiah 40:27\u2013end",
                    "readQS": "Isaiah+40:27-",
                    "audioQS": "Isa.40"
                },
                {
                    "pretty": "Revelations 19:6\u201310",
                    "readQS": "Revelations+19:6-10",
                    "audioQS": "Revs.19"
                }
            ],
            "readQS": "Psalm+1,5%3B+Isaiah+40:27-%3B+Revelations+19:6-10",
            "audioQS": "Ps.1,5,Isa.40,Revs.19"
        }
    },
    "2023/11/01": {
        "datePretty": "Wednesday, November 1, 2023",
        "calendar": "All Saints Day",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15,84,149",
                    "readQS": "Psalm+15,84,149",
                    "audioQS": "Ps.15,84,149"
                },
                {
                    "pretty": "Isaiah 35",
                    "readQS": "Isaiah+35",
                    "audioQS": "Isa.35"
                },
                {
                    "pretty": "Luke 9:18\u201327",
                    "readQS": "Luke+9:18-27",
                    "audioQS": "Luke.9"
                }
            ],
            "readQS": "Psalm+15,84,149%3B+Isaiah+35%3B+Luke+9:18-27",
            "audioQS": "Ps.15,84,149,Isa.35,Luke.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 148,150",
                    "readQS": "Psalm+148,150",
                    "audioQS": "Ps.148,150"
                },
                {
                    "pretty": "Isaiah 65:17\u201325",
                    "readQS": "Isaiah+65:17-25",
                    "audioQS": "Isa.65"
                },
                {
                    "pretty": "Hebrews 11:32\u201312:2",
                    "readQS": "Hebrews+11:32-12:2",
                    "audioQS": "Heb.11"
                }
            ],
            "readQS": "Psalm+148,150%3B+Isaiah+65:17-25%3B+Hebrews+11:32-12:2",
            "audioQS": "Ps.148,150,Isa.65,Heb.11"
        }
    },
    "2023/11/02": {
        "datePretty": "Thursday, November 2, 2023",
        "calendar": "Week of 32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 15",
                    "readQS": "Psalm+15",
                    "audioQS": "Ps.15"
                },
                {
                    "pretty": "Ecclesiastes 3:16\u2013end",
                    "readQS": "Ecclesiastes+3:16-",
                    "audioQS": "Eccl.3"
                },
                {
                    "pretty": "Ecclesiastes 4",
                    "readQS": "Ecclesiastes+4",
                    "audioQS": "Eccl.4"
                },
                {
                    "pretty": "John 18:1\u201311",
                    "readQS": "John+18:1-11",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+15%3B+Ecclesiastes+3:16-%3B+Ecclesiastes+4%3B+John+18:1-11",
            "audioQS": "Ps.15,Eccl.3,Eccl.4,John.18"
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
    "2023/11/03": {
        "datePretty": "Friday, November 3, 2023",
        "calendar": "Week of 32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 19",
                    "readQS": "Psalm+19",
                    "audioQS": "Ps.19"
                },
                {
                    "pretty": "Ecclesiastes 5",
                    "readQS": "Ecclesiastes+5",
                    "audioQS": "Eccl.5"
                },
                {
                    "pretty": "John 18:12\u201327",
                    "readQS": "John+18:12-27",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+19%3B+Ecclesiastes+5%3B+John+18:12-27",
            "audioQS": "Ps.19,Eccl.5,John.18"
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
    "2023/11/04": {
        "datePretty": "Saturday, November 4, 2023",
        "calendar": "Week of 32nd Sunday in Ordinary Time",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 23",
                    "readQS": "Psalm+23",
                    "audioQS": "Ps.23"
                },
                {
                    "pretty": "Ecclesiastes 6",
                    "readQS": "Ecclesiastes+6",
                    "audioQS": "Eccl.6"
                },
                {
                    "pretty": "John 18:28\u2013end",
                    "readQS": "John+18:28-",
                    "audioQS": "John.18"
                }
            ],
            "readQS": "Psalm+23%3B+Ecclesiastes+6%3B+John+18:28-",
            "audioQS": "Ps.23,Eccl.6,John.18"
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
    "2023/11/05": {
        "datePretty": "Sunday, November 5, 2023",
        "calendar": "4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 33",
                    "readQS": "Psalm+33",
                    "audioQS": "Ps.33"
                },
                {
                    "pretty": "Isaiah 66:20\u201323",
                    "readQS": "Isaiah+66:20-23",
                    "audioQS": "Isa.66"
                },
                {
                    "pretty": "Ephesians 1:11\u201323",
                    "readQS": "Ephesians+1:11-23",
                    "audioQS": "Eph.1"
                }
            ],
            "readQS": "Psalm+33%3B+Isaiah+66:20-23%3B+Ephesians+1:11-23",
            "audioQS": "Ps.33,Isa.66,Eph.1"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 111,117",
                    "readQS": "Psalm+111,117",
                    "audioQS": "Ps.111,117"
                },
                {
                    "pretty": "Daniel 7:1\u201318",
                    "readQS": "Daniel+7:1-18",
                    "audioQS": "Dan.7"
                },
                {
                    "pretty": "Luke 6:17\u201331",
                    "readQS": "Luke+6:17-31",
                    "audioQS": "Luke.6"
                }
            ],
            "readQS": "Psalm+111,117%3B+Daniel+7:1-18%3B+Luke+6:17-31",
            "audioQS": "Ps.111,117,Dan.7,Luke.6"
        }
    },
    "2023/11/06": {
        "datePretty": "Monday, November 6, 2023",
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
    "2023/11/07": {
        "datePretty": "Tuesday, November 7, 2023",
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
    "2023/11/08": {
        "datePretty": "Wednesday, November 8, 2023",
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
    "2023/11/09": {
        "datePretty": "Thursday, November 9, 2023",
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
    "2023/11/10": {
        "datePretty": "Friday, November 10, 2023",
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
    "2023/11/11": {
        "datePretty": "Saturday, November 11, 2023",
        "calendar": "Week of 4th Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 18.31\u2013end",
                    "readQS": "Psalm+18.31-",
                    "audioQS": "Ps.18.31\u2013end"
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
            "readQS": "Psalm+18.31-%3B+Isaiah+4:2-5:7%3B+Matthew+4:12-22",
            "audioQS": "Ps.18.31\u2013end,Isa.4,Matt.4"
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
    "2023/11/12": {
        "datePretty": "Sunday, November 12, 2023",
        "calendar": "3rd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 91",
                    "readQS": "Psalm+91",
                    "audioQS": "Ps.91"
                },
                {
                    "pretty": "Deuteronomy 17:14\u201320",
                    "readQS": "Deuteronomy+17:14-20",
                    "audioQS": "Deut.17"
                },
                {
                    "pretty": "1 Timothy 2:1\u20137",
                    "readQS": "1+Timothy+2:1-7",
                    "audioQS": "1Tim.2"
                }
            ],
            "readQS": "Psalm+91%3B+Deuteronomy+17:14-20%3B+1+Timothy+2:1-7",
            "audioQS": "Ps.91,Deut.17,1Tim.2"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 82",
                    "readQS": "Psalm+82",
                    "audioQS": "Ps.82"
                },
                {
                    "pretty": "Judges 7:2\u201322",
                    "readQS": "Judges+7:2-22",
                    "audioQS": "Judg.7"
                },
                {
                    "pretty": "John 15:9\u201317",
                    "readQS": "John+15:9-17",
                    "audioQS": "John.15"
                }
            ],
            "readQS": "Psalm+82%3B+Judges+7:2-22%3B+John+15:9-17",
            "audioQS": "Ps.82,Judg.7,John.15"
        }
    },
    "2023/11/13": {
        "datePretty": "Monday, November 13, 2023",
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
    "2023/11/14": {
        "datePretty": "Tuesday, November 14, 2023",
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
    "2023/11/15": {
        "datePretty": "Wednesday, November 15, 2023",
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
                    "pretty": "Revelation 7:1\u20134,9\u2013end",
                    "readQS": "Revelation+7:1-4,9-",
                    "audioQS": "Rev.7"
                }
            ],
            "readQS": "Psalm+37%3B+Daniel+5:13-%3B+Revelation+7:1-4,9-",
            "audioQS": "Ps.37,Dan.5,Rev.7"
        }
    },
    "2023/11/16": {
        "datePretty": "Thursday, November 16, 2023",
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
    "2023/11/17": {
        "datePretty": "Friday, November 17, 2023",
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
    "2023/11/18": {
        "datePretty": "Saturday, November 18, 2023",
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
    "2023/11/19": {
        "datePretty": "Sunday, November 19, 2023",
        "calendar": "2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 98",
                    "readQS": "Psalm+98",
                    "audioQS": "Ps.98"
                },
                {
                    "pretty": "Daniel 10:19\u201321",
                    "readQS": "Daniel+10:19-21",
                    "audioQS": "Dan.10"
                },
                {
                    "pretty": "Revelation 4",
                    "readQS": "Revelation+4",
                    "audioQS": "Rev.4"
                }
            ],
            "readQS": "Psalm+98%3B+Daniel+10:19-21%3B+Revelation+4",
            "audioQS": "Ps.98,Dan.10,Rev.4"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 89:19\u201336",
                    "readQS": "Psalm+89:19-36",
                    "audioQS": "Ps.89"
                },
                {
                    "pretty": "1 Kings 1:15\u201340",
                    "readQS": "1+Kings+1:15-40",
                    "audioQS": "1Kgs.1"
                },
                {
                    "pretty": "Revelation 1:4\u201318",
                    "readQS": "Revelation+1:4-18",
                    "audioQS": "Rev.1"
                }
            ],
            "readQS": "Psalm+89:19-36%3B+1+Kings+1:15-40%3B+Revelation+1:4-18",
            "audioQS": "Ps.89,1Kgs.1,Rev.1"
        }
    },
    "2023/11/20": {
        "datePretty": "Monday, November 20, 2023",
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
    "2023/11/21": {
        "datePretty": "Tuesday, November 21, 2023",
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
    "2023/11/22": {
        "datePretty": "Wednesday, November 22, 2023",
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
    "2023/11/23": {
        "datePretty": "Thursday, November 23, 2023",
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
    "2023/11/24": {
        "datePretty": "Friday, November 24, 2023",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 63",
                    "readQS": "Psalm+63",
                    "audioQS": "Ps.63"
                },
                {
                    "pretty": "Isaiah 11:10\u2013end of 12",
                    "readQS": "Isaiah+11:10-+of+12",
                    "audioQS": "Isa.11"
                },
                {
                    "pretty": "Matthew 8:23\u2013end",
                    "readQS": "Matthew+8:23-",
                    "audioQS": "Matt.8"
                }
            ],
            "readQS": "Psalm+63%3B+Isaiah+11:10-+of+12%3B+Matthew+8:23-",
            "audioQS": "Ps.63,Isa.11,Matt.8"
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
    "2023/11/25": {
        "datePretty": "Saturday, November 25, 2023",
        "calendar": "Week of 2nd Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 78.1\u201339",
                    "readQS": "Psalm+78.1-39",
                    "audioQS": "Ps.78.1\u201339"
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
            "readQS": "Psalm+78.1-39%3B+Isaiah+13:1-13%3B+Matthew+9:1-17",
            "audioQS": "Ps.78.1\u201339,Isa.13,Matt.9"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 78.40\u2013end",
                    "readQS": "Psalm+78.40-",
                    "audioQS": "Ps.78.40\u2013end"
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
            "readQS": "Psalm+78.40-%3B+Daniel+12%3B+Revelation+13:11-",
            "audioQS": "Ps.78.40\u2013end,Dan.12,Rev.13"
        }
    },
    "2023/11/26": {
        "datePretty": "Sunday, November 26, 2023",
        "calendar": "1st Sunday before Advent",
        "morning": {
            "readings": [
                {
                    "pretty": "Psalm 29,110",
                    "readQS": "Psalm+29,110",
                    "audioQS": "Ps.29,110"
                },
                {
                    "pretty": "Isaiah 4:2\u2013end,5:1\u20137",
                    "readQS": "Isaiah+4:2-,5:1-7",
                    "audioQS": "Isa.4"
                },
                {
                    "pretty": "Luke 19:29\u201338",
                    "readQS": "Luke+19:29-38",
                    "audioQS": "Luke.19"
                }
            ],
            "readQS": "Psalm+29,110%3B+Isaiah+4:2-,5:1-7%3B+Luke+19:29-38",
            "audioQS": "Ps.29,110,Isa.4,Luke.19"
        },
        "evening": {
            "readings": [
                {
                    "pretty": "Psalm 93",
                    "readQS": "Psalm+93",
                    "audioQS": "Ps.93"
                },
                {
                    "pretty": "2 Samuel 23:1\u20137",
                    "readQS": "2+Samuel+23:1-7",
                    "audioQS": "2Sam.23"
                },
                {
                    "pretty": "Matthew 28:16\u201320",
                    "readQS": "Matthew+28:16-20",
                    "audioQS": "Matt.28"
                }
            ],
            "readQS": "Psalm+93%3B+2+Samuel+23:1-7%3B+Matthew+28:16-20",
            "audioQS": "Ps.93,2Sam.23,Matt.28"
        }
    },
    "2023/11/27": {
        "datePretty": "Monday, November 27, 2023",
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
    "2023/11/28": {
        "datePretty": "Tuesday, November 28, 2023",
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
                    "pretty": "Revelation 14:14\u2013end,15:1\u2013end",
                    "readQS": "Revelation+14:14-,15:1-",
                    "audioQS": "Rev.14"
                }
            ],
            "readQS": "Psalm+101%3B+Isaiah+40:12-26%3B+Revelation+14:14-,15:1-",
            "audioQS": "Ps.101,Isa.40,Rev.14"
        }
    },
    "2023/11/29": {
        "datePretty": "Wednesday, November 29, 2023",
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
    "2023/11/30": {
        "datePretty": "Thursday, November 30, 2023",
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
    "2023/12/01": {
        "datePretty": "Friday, December 1, 2023",
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
    "2023/12/02": {
        "datePretty": "Saturday, December 2, 2023",
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
    }
};export default Data;