
## Node.js event loop

> Refer this link  
>https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick


## Worker threads

- execution of JavaScript in parallel across multiple CPU cores
- preventing heavy computations from blocking the main event loop
- Isolated State
- own V8 isolate
- own heap memory
- own event loop
- Shared Memory (SharedArrayBuffer)
- Message Passing (.postMessage(), .on('message'))


## How do you secure REST APIs?

I secure REST APIs using HTTPS, strong authentication and authorization, input validation, rate limiting, secure password hashing, proper CORS and security headers, and careful handling of sensitive data. I also keep dependencies updated and use logging and monitoring to detect suspicious activity


## Rate limiting

- Sets a maximum number of requests allowed within a specific time window
- Further requests will be rejected with **HTTP 429 (Too Many Requests)**

```Typescript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 100,
  message: "Too many requests, please try again later."
});

app.use("/api", limiter);
```

## Throttling

Throttling controls the rate at which requests are processed. Instead of simply rejecting requests after a limit is reached, the system may slow them down, queue them, or process them at a controlled rate



