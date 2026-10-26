let mysql = require('mysql');
<pre class="wp-block-code">
CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT,
    projectType TEXT,
    technologies BLOB,
    projectDesc TEXT,
    experience TEXT,
    contactPerms TEXT,
    formType TEXT
);
</pre>