### A.2. Idea: Bucles REPL en NodeJS

* [How to create and use a custom REPL](https://docs.nodejitsu.com/articles/REPL/how-to-create-a-custom-repl/)
* [OTaaTRepl](https://www.npmjs.com/package/otaat-repl)
The only trouble with the NodeJS REPL is that it is hard to deal with asynchronous code. 
OTaaTRepl is a small wrapper around the standard node.js REPL that handles promise objects complying with the CommonJS Promises/A specification. When an expression results in a non-promise the REPL acts as normal. When an expression results in a CommonJS Promises/A promise then the REPL does not return control back to the user until either the promise is fulfilled, the promise is rejected, or a timeout is reached. This creates the illusion that the REPL is blocked until the asynchronous expression completes. When you want to do one thing at a time this is exactly the behavior you want. When the promise is fulfilled the results are displayed and also put in the _ variable just as if the code really was blocking.
