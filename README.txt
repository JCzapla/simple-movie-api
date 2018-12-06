POST /movies
Saves a movie with given title to database. In request body there shoud be key named 'title' with a movie title.

GET /movies
Returns all movies from a database.

POST /comments
Saves a comment for a given movie to a database. In body request provide key named 'id' with movie id which you want to comment on, and key named 'comment' with acutal text of your comment.

GET /comments
Returns all comment form a database.

GET /comments/:id
Returns comments for a given movie. Provide movie ID (database one) in an URL