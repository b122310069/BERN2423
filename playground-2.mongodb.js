/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('sample_mflix');

// Search for documents in the current collection.
db.getCollection('users').find({

    username : "mazwan",
    password : "1404"
    
}
)