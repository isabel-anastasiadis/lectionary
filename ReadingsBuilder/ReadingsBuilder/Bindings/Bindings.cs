
using System.Reflection;
using ReadingsBuilder.Data.Utilities;
using ReadingsBuilder.Data.RuleData;
using ReadingsBuilder.Data.Result;
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
            // Runner
            container.Register<IResultWriter, ResultWriter>();

            // Data
            container.Register<IAllDataFactory, AllDataFactory>();
            container.Register<ICsvReader, CsvReader>();
            container.Register<ICsvWriter, CsvWriter>();

            // Mappers
            container.Register<IRuleDataMapper, RuleDataMapper>();
            container.Register<IRotatingReadingMappingProvider, RotatingReadingMappingProvider>();
            container.Register<IResultToRowsMapper, ResultToRowsMapper>();

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
