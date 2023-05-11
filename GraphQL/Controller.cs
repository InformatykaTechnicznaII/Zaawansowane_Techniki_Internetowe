using GraphQL;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Web.Http;

[ApiController]
[Route("graphql")]
public class GraphQLController : ControllerBase
{
    private readonly IDocumentExecuter _documentExecuter;
    private readonly ISchema _schema;

    public GraphQLController(IDocumentExecuter documentExecuter, ISchema schema)
    {
        _documentExecuter = documentExecuter;
        _schema = schema;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] GraphQLRequest request)
    {
        var executionOptions = new ExecutionOptions
        {
            Schema = _schema,
            Query = request.Query,
            Inputs = request.Variables.ToInputs(),
        };

        var executionResult = await _documentExecuter.ExecuteAsync(executionOptions).ConfigureAwait(false);

        if (executionResult.Errors?.Count > 0)
        {
            return BadRequest(executionResult.Errors);
        }

        return Ok(executionResult);.
    }

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] string query, [FromQuery] string variables)
    {
        var executionOptions = new ExecutionOptions
        {
            Schema = _schema,
            Query = query,
            Inputs = variables?.ToInputs(),
        };

        var executionResult = await _documentExecuter.ExecuteAsync(executionOptions).ConfigureAwait(false);

        if (executionResult.Errors?.Count > 0)
        {
            return BadRequest(executionResult.Errors);
        }

        return Ok(executionResult);
    }
}
