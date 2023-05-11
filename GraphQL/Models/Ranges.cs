using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Graph.Models
{
    public class FilterInput
    {
        public string Category { get; set; }
        public FloatRange PriceRange { get; set; }
        public string Brand { get; set; }
    }

    public class SortInput
    {
        public string Field { get; set; }
        public string Order { get; set; }
    }

    public class FloatRange
    {
        public decimal Min { get; set; }
        public decimal Max { get; set; }
    }

    public class ProductQuery
    {
        public int Skip { get; set; }
        public int Top { get; set; }
        public FilterInput Filter { get; set; }
        public SortInput Sort { get; set; }
    }

    public class ProductQueryResult
    {
        public List<Product> Products { get; set; }
    }

}
