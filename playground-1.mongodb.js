// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('sample_mflix');

// Create a new document in the collection.
db.getCollection('users').insertOne({
    "username" : "mazwan",
    "password" : "1404",
    "email" : "mazwanmasahud@gmail.com",
    "country" : "Malaysia"
});
