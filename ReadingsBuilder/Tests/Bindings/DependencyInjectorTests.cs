
using NUnit.Framework;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Model.Pipeline;

namespace Tests.Bindings
{

    public class DependencyInjectorTests
    {

        [Test]
        public void BindingsAreAllValid() 
        {
            // arrange, act, assert
            DependencyInjector.GetInstance<IPipeline>();
        }

    }
}
