
namespace ReadingsBuilder.Data.Utilities
{
    public static class DirectoryHelper
    {

        public static readonly string SolutionDirectory = Directory.GetParent(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.Parent.FullName;
    
    
        public static readonly string JupyterDirectory = Directory.GetParent(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.Parent.Parent.FullName + @"\jupyter";
    }
}
