
namespace ReadingsBuilder.Model
{

    public enum ReadingOptionType { 
        Default
    }

    public class MorningReadings {

        public Option<Reading, ReadingOptionType>? Psalms {get; set;}

        public Option<Reading, ReadingOptionType>? OldTestament {get; set;}

        public Option<Reading, ReadingOptionType>? NewTestament {get; set;}
    }

    public class EveningReadings {


        // Often the readings for the evening before a feast/festival are also themed
        public string? ReadingsDescription {get; set;}

        public Option<Reading, ReadingOptionType>? Psalms {get; set;}

        public Option<Reading, ReadingOptionType>? OldTestament {get; set;}

        public Option<Reading, ReadingOptionType>? NewTestament {get; set;}

    }


    public class Reading {

        public Book Book {get; set;}

        public List<ChapterAndVerse>? ChapterAndVerses {get; set;}

        public bool IsOptional {get; set;}

    }

    public class ChapterAndVerse {
        public int Chapter {get; set;}

        // null = start of the chapter
        public int? BeginningVerse {get; set;}

        // null = end of the chapter
        public int? EndingVerse {get; set;}
    }

}