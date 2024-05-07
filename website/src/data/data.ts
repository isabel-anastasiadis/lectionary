import { IReadingsForDay } from "./interfaces";

const Data: { [dateKey: string]: IReadingsForDay } = {
    "2024/05/08": {
        "datePretty": "Sunday, December 3, 2023",
        "calendar": "1st Sunday of Advent",
        "readingSets": [
            {
                "readingSetTabTitle": "RCL (Re.)",
                "readingSetSubtitle": "Revised Common Lectionary (Related)",
                "timeOfDay": null,
                "readings": [
                    {
                        "pretty": "Psalm 80:1\u20138,18\u201320",
                        "readQS": "Psalm+80:1-8,18-20",
                        "audioQS": "Ps.80"
                    },
                    {
                        "pretty": "Isaiah 64:1\u20139",
                        "readQS": "Isaiah+64:1-9",
                        "audioQS": "Isa.64"
                    },
                    {
                        "pretty": "1 Corinthians 1:3\u20139",
                        "readQS": "1+Corinthians+1:3-9",
                        "audioQS": "1Cor.1"
                    },
                    {
                        "pretty": "Mark 13:24\u201337",
                        "readQS": "Mark+13:24-37",
                        "audioQS": "Mark.13"
                    }
                ],
                "readQS": "Psalm+80:1-8,18-20%3B+Isaiah+64:1-9%3B+1+Corinthians+1:3-9%3B+Mark+13:24-37",
                "audioQS": "Ps.80,Isa.64,1Cor.1,Mark.13"
            },
            {

                "readingSetTabTitle": "Prayers",
                "readingSetSubtitle": "Morning Prayer",
                "timeOfDay": "morning",
                "readings": [
                    {
                        "pretty": "Psalm 44",
                        "readQS": "Psalm+44",
                        "audioQS": "Ps.44"
                    },
                    {
                        "pretty": "Isaiah 2:1\u20135",
                        "readQS": "Isaiah+2:1-5",
                        "audioQS": "Isa.2"
                    },
                    {
                        "pretty": "Luke 12:35\u201348",
                        "readQS": "Luke+12:35-48",
                        "audioQS": "Luke.12"
                    }
                ],
                "readQS": "Psalm+44%3B+Isaiah+2:1-5%3B+Luke+12:35-48",
                "audioQS": "Ps.44,Isa.2,Luke.12"
            },
            {
                "readingSetTabTitle": "Prayers",
                "readingSetSubtitle": "Evening Prayer (Eve of St John)",
                "timeOfDay": "evening",
                "readings": [
                    {
                        "pretty": "Psalm 25",
                        "readQS": "Psalm+25",
                        "audioQS": "Ps.25"
                    },
                    {
                        "pretty": "Isaiah 1:1\u201320",
                        "readQS": "Isaiah+1:1-20",
                        "audioQS": "Isa.1"
                    },
                    {
                        "pretty": "Matthew 21:1\u201313",
                        "readQS": "Matthew+21:1-13",
                        "audioQS": "Matt.21"
                    }
                ],
                "readQS": "Psalm+25%3B+Isaiah+1:1-20%3B+Matthew+21:1-13",
                "audioQS": "Ps.25,Isa.1,Matt.21"
            }
        ]
    },
    "2024/05/09": {
      "datePretty": "Monday, December 4, 2023",
      "calendar": "Week of 1st Sunday of Advent",
      "readingSets": [
          {

              "readingSetTabTitle": "Prayers",
              "readingSetSubtitle": "Morning Prayer",
              "timeOfDay": "morning",
              "readings": [
                  {
                      "pretty": "Psalm 44",
                      "readQS": "Psalm+44",
                      "audioQS": "Ps.44"
                  },
                  {
                      "pretty": "Isaiah 2:1\u20135",
                      "readQS": "Isaiah+2:1-5",
                      "audioQS": "Isa.2"
                  },
                  {
                      "pretty": "Luke 12:35\u201348",
                      "readQS": "Luke+12:35-48",
                      "audioQS": "Luke.12"
                  }
              ],
              "readQS": "Psalm+44%3B+Isaiah+2:1-5%3B+Luke+12:35-48",
              "audioQS": "Ps.44,Isa.2,Luke.12"
          },
          {
              "readingSetTabTitle": "Prayers",
              "readingSetSubtitle": "Evening Prayer (Eve of St John)",
              "timeOfDay": "evening",
              "readings": [
                  {
                      "pretty": "Psalm 25",
                      "readQS": "Psalm+25",
                      "audioQS": "Ps.25"
                  },
                  {
                      "pretty": "Isaiah 1:1\u201320",
                      "readQS": "Isaiah+1:1-20",
                      "audioQS": "Isa.1"
                  },
                  {
                      "pretty": "Matthew 21:1\u201313",
                      "readQS": "Matthew+21:1-13",
                      "audioQS": "Matt.21"
                  }
              ],
              "readQS": "Psalm+25%3B+Isaiah+1:1-20%3B+Matthew+21:1-13",
              "audioQS": "Ps.25,Isa.1,Matt.21"
          }
      ]
  }
}

export default Data;