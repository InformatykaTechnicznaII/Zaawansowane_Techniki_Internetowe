using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Graph.Models;

namespace Graph
{
    public class ProductQuery : ObjectGraphType
    {
        public ProductQuery()
        {
            Field<ListGraphType<ProductType>>(
                "products",
                arguments: new QueryArguments(
                    new QueryArgument<IntGraphType> { Name = "skip" },
                    new QueryArgument<IntGraphType> { Name = "top" },
                    new QueryArgument<StringGraphType> { Name = "category" },
                    new QueryArgument<FloatRangeGraphType> { Name = "priceRange" },
                    new QueryArgument<StringGraphType> { Name = "brand" },
                    new QueryArgument<SortInputType> { Name = "sort" }
                ),
                resolve: context =>
                {
                    var skip = context.GetArgument<int?>("skip") ?? 0;
                    var top = context.GetArgument<int?>("top");
                    var category = context.GetArgument<string>("category");
                    var priceRange = context.GetArgument<FloatRange>("priceRange");
                    var brand = context.GetArgument<string>("brand");
                    var sort = context.GetArgument<SortInput>("sort");

                    //metoda pobierająca obiekty zgodnie z parametrami
                    var products = ProductService.GetProducts(skip, top, category, priceRange, brand, sort);

                    return products;
                }
            );
        }
    }
}
