
## Route Handlers

Route Handlers allow you to create custom request handlers for a given route using the Web **Request** and **Response** APIs.

Route Handlers can be nested anywhere inside the app directory, similar to `page.js` and `layout.js`. But there cannot be a `route.js` file at the same route segment level as `page.js`.

**Extended NextRequest and NextResponse APIs**

In addition to supporting the native `Request` and `Response` APIs, Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases.

