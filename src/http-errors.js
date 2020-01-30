module.exports = httStatus = {
    "100" : {
      "type" : 'Informational responses',
      "code" : "200",
      "message" : "Continue",
      "meaning" : "This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished."
    },
    "101" : {
      "type" : "Informational responses",
      "code" : "101",
      "message" : "Switching protocol",
      "meaning" : "This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to."
    },
    "102" : {
      "type" : "Informational responses",
      "code" : "102",
      "message" : "Processing",
      "meaning" : "This code indicates that the server has received and is processing the request, but no response is available yet."
    },
    "200" : {
      "type" : "Successful responses",
      "code" : "200",
      "message" : "OK",
      "meaning" : "GET: The resource has been fetched and is transmitted in the message body. HEAD: The entity headers are in the message body. PUT or POST: The resource describing the result of the action is transmitted in the message body. TRACE: The message body contains the request message as received by the server"
    },
    "201" : {
      "type" : "Successful responses",
      "code" : "201",
      "message" : "Created",
      "meaning" : "The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests."
    },
    "202" : {
      "type" : "Successful responses",
      "code" : "202",
      "message" : "Accepted",
      "meaning" : "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing."
    },
    "203" : {
      "type" : "Successful responses",
      "code" : "203",
      "message" : "Non-Authoritative Information",
      "meaning" : "This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the '200 OK' response is preferred to this status."
    },
    "204" : {
      "type" : "Successful responses",
      "code" : "204",
      "message" : "No content",
      "meaning" : "There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones."
    },
    "205" : {
      "type" : "Successful responses",
      "code" : "205",
      "message" : "Reset content",
      "meaning" : "Tells the user-agent to reset the document which sent this request."
    },
    "206" : {
      "type" : "Successful responses",
      "code" : "206",
      "message" : "Partial content",
      "meaning" : "This response code is used when the Range header is sent from the client to request only part of a resource."
    },
    "207" : {
      "type" : "Successful responses",
      "code" : "207",
      "message" : "Multi status",
      "meaning" : "Conveys information about multiple resources, for situations where multiple status codes might be appropriate."
    },
    "208" : {
      "type" : "Successful responses",
      "code" : "208",
      "message" : "Already reported",
      "meaning" : "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection."
    },
    "226" : {
      "type" : "Successful responses",
      "code" : "226",
      "message" : "Im Used",
      "meaning" : "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
    },
    "300" : {
      "type" : "Redirection messages",
      "code" : "300",
      "message" : "Multiple Choice",
      "meaning" : "The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)"
    },
    "301" : {
      "type" : "Redirection messages",
      "code" : "301",
      "message" : "Moved Permanently",
      "meaning" : "The URL of the requested resource has been changed permanently. The new URL is given in the response."
    },
    "302" : {
      "type" : "Redirection messages",
      "code" : "302",
      "message" : "Found",
      "meaning" : "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests."
    },
    "303" : {
      "type" : "Redirection messages",
      "code" : "303",
      "message" : "See other",
      "meaning" : "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
    },
    "304" : {
      "type" : "Redirection messages",
      "code" : "304",
      "message" : "Not modified",
      "meaning" : "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
    },
    "305" : {
      "type" : "Redirection messages",
      "code" : "305",
      "message" : "Use proxy",
      "meaning" : "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy."
    },
    "306" : {
      "type" : "Redirection messages",
      "code" : "306",
      "message" : "Unused",
      "meaning" : "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification."
    },
    "307" : {
      "type" : "Redirection messages",
      "code" : "307",
      "message" : "UnTemporary Redirect",
      "meaning" : "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request."
    },
    "308" : {
      "type" : "Redirection messages",
      "code" : "308",
      "message" : "Permanent Redirect",
      "meaning" : "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request."
    },
    "400" : {
      "type" : "Client error responses",
      "code" : "400",
      "message" : "Bad request",
      "meaning" : "The server could not understand the request due to invalid syntax."
    },
    "401" : {
      "type" : "Client error responses",
      "code" : "401",
      "message" : "Unauthorized",
      "meaning" : "Although the HTTP standard specifies 'unauthorized', semantically this response means 'unauthenticated'. That is, the client must authenticate itself to get the requested response."
    },
    "402" : {
      "type" : "Client error responses",
      "code" : "402",
      "message" : "Payment required",
      "meaning" : "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists."
    },
    "403" : {
      "type" : "Client error responses",
      "code" : "403",
      "message" : "Forbidden",
      "meaning" : "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server."
    },
    "404" : {
      "type" : "Client error responses",
      "code" : "404",
      "message" : "Not found",
      "meaning" : "The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web."
    },
    "405" : {
      "type" : "Client error responses",
      "code" : "405",
      "message" : "Method Not Allowed",
      "meaning" : "The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code."
    },
    "406" : {
      "type" : "Client error responses",
      "code" : "406",
      "message" : "Not acceptable",
      "meaning" : "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
    },
    "407" : {
      "type" : "Client error responses",
      "code" : "407",
      "message" : "Proxy authentication required",
      "meaning" : "This is similar to 401 but authentication is needed to be done by a proxy."
    },
    "408" : {
      "type" : "Client error responses",
      "code" : "408",
      "message" : "Request timeout",
      "meaning" : "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
    },
    "409" : {
      "type" : "Client error responses",
      "code" : "409",
      "message" : "Conflict",
      "meaning" : "This response is sent when a request conflicts with the current state of the server."
    },
    "410" : {
      "type" : "Client error responses",
      "code" : "410",
      "message" : "Gone",
      "meaning" : "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for 'limited-time, promotional services'. APIs should not feel compelled to indicate resources that have been deleted with this status code."
    },
    "411" : {
      "type" : "Client error responses",
      "code" : "411",
      "message" : "Length Required",
      "meaning" : "Server rejected the request because the Content-Length header field is not defined and the server requires it."
    },
    "412" : {
      "type" : "Client error responses",
      "code" : "412",
      "message" : "Precondition Failed",
      "meaning" : "The client has indicated preconditions in its headers which the server does not meet."
    },
    "413" : {
      "type" : "Client error responses",
      "code" : "413",
      "message" : "Payload Too Large",
      "meaning" : "Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field."
    },
    "414" : {
      "type" : "Client error responses",
      "code" : "414",
      "message" : "Uri too long",
      "meaning" : "The URI requested by the client is longer than the server is willing to interpret."
    },
    "415" : {
      "type" : "Client error responses",
      "code" : "415",
      "message" : "Unsupported Media Type",
      "meaning" : "The media format of the requested data is not supported by the server, so the server is rejecting the request."
    },
    "416" : {
      "type" : "Client error responses",
      "code" : "416",
      "message" : "Range Not Satisfiable",
      "meaning" : "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data."
    },
    "417" : {
      "type" : "Client error responses",
      "code" : "417",
      "message" : "Expectation Failed",
      "meaning" : "This response code means the expectation indicated by the Expect request header field can't be met by the server."
    },
    "418" : {
      "type" : "Client error responses",
      "code" : "418",
      "message" : "Im a tea pot",
      "meaning" : "The server refuses the attempt to brew coffee with a teapot."
    },
    "421" : {
      "type" : "Client error responses",
      "code" : "421",
      "message" : "Misdirected Request",
      "meaning" : "The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI."
    },
    "422" : {
      "type" : "Client error responses",
      "code" : "422",
      "message" : "Unprocessable Entity (WebDAV)",
      "meaning" : "The request was well-formed but was unable to be followed due to semantic errors."
    },
    "423" : {
      "type" : "Client error responses",
      "code" : "423",
      "message" : "Locked (WebDAV)",
      "meaning" : "The resource that is being accessed is locked."
    },
    "424" : {
      "type" : "Client error responses",
      "code" : "424",
      "message" : "Failed Dependency (WebDAV))",
      "meaning" : "The request failed due to failure of a previous request."
    },
    "425" : {
      "type" : "Client error responses",
      "code" : "425",
      "message" : "Too Early",
      "meaning" : "Indicates that the server is unwilling to risk processing a request that might be replayed."
    },
    "426" : {
      "type" : "Client error responses",
      "code" : "426",
      "message" : "Upgrade Required",
      "meaning" : "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s)."
    },
    "429" : {
      "type" : "Client error responses",
      "code" : "429",
      "message" : "Too Many Requests",
      "meaning" : "The user has sent too many requests in a given amount of time ('rate limiting')."
    },
    "431" : {
      "type" : "Client error responses",
      "code" : "431",
      "message" : "Request Header Fields Too Large",
      "meaning" : "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields."
    },
    "451" : {
      "type" : "Client error responses",
      "code" : "451",
      "message" : "Unavailable For Legal Reasons",
      "meaning" : "The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government."
    },
    "500" : {
      "type" : "Server responses",
      "code" : "500",
      "message" : "Internal server error",
      "meaning" : "The server has encountered a situation it doesn't know how to handle."
    },
    "501" : {
      "type" : "Server responses",
      "code" : "501",
      "message" : "Not implemented",
      "meaning" : "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD."
    },
    "502" : {
      "type" : "Server responses",
      "code" : "502",
      "message" : "Bad gateway",
      "meaning" : "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."
    },
    "503" : {
      "type" : "Server responses",
      "code" : "503",
      "message" : "Service unavailable",
      "meaning" : "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached."
    },
    "504" : {
      "type" : "Server responses",
      "code" : "504",
      "message" : "Gateway timeout",
      "meaning" : "This error response is given when the server is acting as a gateway and cannot get a response in time."
    },
    "505" : {
      "type" : "Server responses",
      "code" : "505",
      "message" : "Http version not supported",
      "meaning" : "The HTTP version used in the request is not supported by the server."
    },
    "506" : {
      "type" : "Server responses",
      "code" : "506",
      "message" : "Variant Also Negotiates",
      "meaning" : "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."
    },
    "507" : {
      "type" : "Server responses",
      "code" : "507",
      "message" : "Insufficient Storage (WebDAV)",
      "meaning" : "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."
    },
    "508" : {
      "type" : "Server responses",
      "code" : "508",
      "message" : "Loop detected",
      "meaning" : "The server detected an infinite loop while processing the request."
    },
    "510" : {
      "type" : "Server responses",
      "code" : "510",
      "message" : "Not extended",
      "meaning" : "Further extensions to the request are required for the server to fulfil it."
    },
    "511" : {
      "type" : "Server responses",
      "code" : "511",
      "message" : "Network Authentication Required",
      "meaning" : "The 511 status code indicates that the client needs to authenticate to gain network access."
    }
}