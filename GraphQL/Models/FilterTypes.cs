using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Graph.Models
{
    public class FloatRangeGraphType : InputObjectGraphType<FloatRange>
    {
        public FloatRangeGraphType()
        {
            Field<FloatGraphType>("min");
            Field<FloatGraphType>("max");
        }
    }


    public class SortInputType : InputObjectGraphType<SortInput>
    {
        public SortInputType()
        {
            Field<NonNullGraphType<StringGraphType>>("field");
            Field<NonNullGraphType<SortOrderEnumType>>("order");
        }
    }


    public class SortOrderEnumType : EnumerationGraphType<SortOrder>
    {
        public SortOrderEnumType()
        {
            Name = "SortOrder";
            AddValue("ASC", "Ascending order", SortOrder.Ascending);
            AddValue("DESC", "Descending order", SortOrder.Descending);
        }
    }
    public class Sort
    {
        public SortOrder Order { get; set; }
        public SortField Field { get; set; }
    }

    public enum SortOrder
    {
        Ascending,
        Descending
    }

    public enum SortField
    {
        Price,
        Name,
        Rating
    }
}
