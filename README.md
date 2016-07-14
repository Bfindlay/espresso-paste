# Espresso-Paste

A pastebin web application using nodejs/express


## Usage
Currently setup to use rethinkDB and the THINKY ORM  and therefore
requires a RethinkDB database config file named "connect.js" in the projects root directory
<snippet>

var thinky = require("thinky")({
    host: "localhost",
    port: 28015,
    db: "db",
    authkey: "password123"
});

module.exports = thinky;

</snippet>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

