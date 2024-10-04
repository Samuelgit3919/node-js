-The built-in modules are defined within the Node.js source and 
  are located in the lib/ folde


-built-in modules can be identified using the node: prefix, in which case it bypasses the require cache. For instance, require('node:http') will always return the built in HTTP module, even if there is require.
  cache entry by that name.
  
- Examples of Built-in Modules in Node.js:
    -fs (File System): Provides methods for interacting with the file system, such as reading and writing files.
    -http: Enables building HTTP servers and making HTTP requests.
    -path: Offers utilities for working with file and directory paths.
    -os: Provides information about the operating system, such as the platform, CPU architecture, and network interfaces.
    -url: Allows parsing, formatting, and resolving URLs.
    -crypto: Provides cryptographic functionalities, including encryption, decryption, and hashing.
    -events: Enables the creation and management of event-driven programming patterns.
    -stream: Provides an API for working with streaming data, such as reading and writing to files or network sockets.
    -util: Contains utility functions for debugging, formatting, and inspecting objects.

