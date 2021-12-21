
using SimpleInjector;

namespace ReadingsBuilder.Bindings
{
    /// <summary>
    /// Hiding the implementation details so we can swap it out later if necessary
    /// </summary>
    public class DependencyInjector
    {
        private static readonly Container container;


        static DependencyInjector()
        {
            container = GetContainer();
        }


        public static T? GetInstance<T>() where T: class 
        {
            return container.GetInstance<T>();
        }

        public static IEnumerable<T> GetAllInstances<T>() where T : class { 
        
            return container.GetAllInstances<T>();
        }

        private static Container GetContainer() { 
        
            var container = new Container();

            Bindings.RegisterBindings(container);

            container.Verify();

            return container;
        }

    }
}
