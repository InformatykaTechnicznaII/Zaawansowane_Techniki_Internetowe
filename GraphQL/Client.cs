using System;
using System.Net.Http;
using System.Threading.Tasks;

public class Client
{
    public static async Task GetData()
    {
        var query = @"
            query {
              products(
                skip: 10
                top: 5
                filter: {
                  category: ""electronics""
                  priceRange: { min: 100, max: 1000 }
                  brand: ""Apple""
                }
                sort: {
                  field: PRICE
                  order: DESC
                }
              ) {
                id
                name
                description
                price
                rating
              }
            }
        ";

        using (var client = new HttpClient())
        {
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri("Endpoint"),
                Content = new StringContent(query),
            };
            request.Headers.Add("Accept", "application/json");

            var response = await client.SendAsync(request);
            var responseBody = await response.Content.ReadAsStringAsync();

            // Process the response body
            Console.WriteLine(responseBody);
        }
    }
}
