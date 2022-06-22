// what is an http server
// the browser calls DNS(domain name systems), and the 
// on the internet we use ip address to communicate 
// this is used to get to the servers that we are going to use
// we add port number and this is used to mention which 
// server to talk to
// dns cash save the cite that you browser for future performance
// api: tells what kind of function do server support
// such as getting your friend 
// what does http uses to communicate: Get, Post, Delete, Put, Patch, 
//api: specifies how two application talk to each other(browser and server)
//api: it is like browser is interviewing the server
// put: to update, 
// post: to save
// delete: remove
// each request have four parts
// the Method, the path(where is data), the body(data), Headers(optional
// data about the data that you are sending or auntentication data
// each request has a host header to make sure that you to the right server)
//HTTP RESPONSE: 
// A RESPONDS HAS THE FOLLOWING PARTS
// Headers(info about the data)
// Body:(content)
//Status Code(tells us if the request was successful(200 is okey))
// 100: you will not see this response as a developer
// 200:  successful request 
// 201: put and post request(info successful request)
//300: redirection urls
//400:client error( the client input do not match what the server need)
// 401: you are not authenticated or not logined in 
// 403: I know who you are you do not have permission to access this data
// 404: url point to the serve that the server does not recognize
// 405: the method is not supported
// 418: humours
// 500: something went wrong with the server side
// 500: respond to the api under development 
// 503: issues on the serve that is unavailable