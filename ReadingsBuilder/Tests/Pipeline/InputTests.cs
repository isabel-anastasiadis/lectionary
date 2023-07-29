using System;
using ReadingsBuilder.Pipeline;
using NUnit.Framework;

namespace Tests.Pipeline
{
    public class InputTests
    {
        [Test]
        public void PentecostIsCalculatedCorrectlyFromPalmSunday() {
            // arrange
            var input = new Input() { PalmSunday = new DateOnly(2022, 4, 10) };

            // act
            var result = input.Pentecost;

            // assert
            Assert.AreEqual(new DateOnly(2022, 6, 5), result);
        }

        [Test]
        public void FourthSundayBeforeAdventIsCalculatedCorrectly() {
            // arrange
            var input = new Input() { FirstSundayOfAdvent = new DateOnly(2022, 11, 27) };

            // act
            var result = input.FourthSundayBeforeAdvent;

            // assert
            Assert.AreEqual(new DateOnly(2022, 10, 30), result);
        }
    }
}
