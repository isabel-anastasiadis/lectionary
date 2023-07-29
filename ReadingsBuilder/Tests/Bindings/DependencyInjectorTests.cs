
using NUnit.Framework;
using ReadingsBuilder.Bindings;
using ReadingsBuilder.Pipeline;

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
