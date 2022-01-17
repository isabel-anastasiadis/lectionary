
using System.Reflection;
using ReadingsBuilder.Model.Data;
using ReadingsBuilder.Model.Mappers;
using ReadingsBuilder.Model.Pipeline;
using ReadingsBuilder.Model.Pipeline.Steps;
using ReadingsBuilder.Model.Pipeline.Steps.Utility;
using SimpleInjector;

namespace ReadingsBuilder.Bindings
{
    static class Bindings
    {

        public static void RegisterBindings(Container container) 
        {

            // Data
            container.Register<IAllDataFactory, AllDataFactory>();
            container.Register<ICsvReader, CsvReader>();

            // Mappers
            container.Register<IRuleDataMapper, RuleDataMapper>();
            container.Register<IRotatingReadingMappingProvider, RotatingReadingMappingProvider>();

            // Pipeline
            container.Register<IRuleApplier, RuleApplier>();
            container.Register<IPipeline, Pipeline>();

            // Steps
            var stepImplementationAssemblies = new Assembly[] { typeof(IStep).Assembly };
            container.Collection.Register<IStep>(stepImplementationAssemblies);

            // Step utilities
            container.Register<IByDayOfMonthRuleSetApplier, ByDayOfMonthRuleSetApplier>();
            container.Register<IByDayOfWeekRuleSetApplier, ByDayOfWeekRuleSetApplier>();
        
        }
    }
}
