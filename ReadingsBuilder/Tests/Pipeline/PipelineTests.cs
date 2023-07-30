
using System;
using NUnit.Framework;
using ReadingsBuilder;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Pipeline;

namespace Tests.Pipeline
{
    public class PipelineTests
    {
        [Test]
        public void PipelineRunsFor2022() {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var input = Inputs.FOR_2021_TO_2022;

            // act
            var result = classUnderTest.Run(input);

            // assert
            Assert.IsNotNull(result);
        }

        [Test]
        public void PipelineRunsFor2023()
        {

            // arrange
            var classUnderTest = DependencyInjector.GetInstance<IPipeline>();
            var input = Inputs.FOR_2022_TO_2023;

            // act
            var result = classUnderTest.Run(input);

            // assert
            Assert.IsNotNull(result);
        }

    }
}
