namespace ReadingsBuilder.Model.Pipeline.DTOs
{
    public class Input {
        public DateOnly? StartDate { get; set; }

        public DateOnly? EndDate { get; set; }

        /// <summary>
        /// Marks the start of the first season of ordinary time up until Lent
        /// </summary>
        public DateOnly? FifthSundayAfterEpiphany { get; set; }

        /// <summary>
        /// Marks the start of Lent, the end of the first season of ordinary time
        /// </summary>
        public DateOnly? AshWednesday { get; set; }

        /// <summary>
        /// Marks the start of easter week, and eastertide (which runs until pentecost)
        /// </summary>
        public DateOnly? PalmSunday { get; set; }

        public DateOnly? Pentecost { 
            get {
                var numberOfWeeks = 8;
                return PalmSunday?.AddDays(numberOfWeeks * 7);
            } 
        }

        public DateOnly? FourthSundayBeforeAdvent {
            get {
                var numberOfWeeks = -4;
                return FirstSundayOfAdvent?.AddDays(numberOfWeeks * 7);
            }
        }
        
        public DateOnly? FirstSundayOfAdvent { get; set; }

        /// <summary>
        /// I can't work out the rule about which row we start with when going through ordinary time psalms...
        /// </summary>
        public int? OrdinaryTimePsalmsSecondChunkStartingIndex { get; set; }

    }


}
