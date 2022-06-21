# Express Simple Project

This Express project provides basic actions for a simple API. It allows the standard CRUD operation on a database setup within a remote server in AWS using MongoDB. 

The database is taken from Mongo's movie database example.

The main application is contained within the `server.js` file.

## Setup
    npm install
  
## How to Run
    npm start or node server
  
# API

The API provides basic CRUD functionality.

## Get Movies

### Get All Movies

    GET /movies

### Response
```json
{
  "data": [
    {
      "_id": "62b127a025c3976e31976807",
      "title": "Titanic",
      "year": 1997,
      "genres": [
        "Drama",
        "Romance"
      ],
      "rated": "PG-13",
      "languages": [
        "English",
        "French",
        "German",
        "Swedish",
        "Italian",
        "Russian"
      ],
      "released": "1997-12-19T00:00:00.000Z",
      "awards": {
        "wins": 127,
        "nominations": 63,
        "text": "Won 11 Oscars. Another 116 wins & 63 nominations."
      },
      "cast": [
        "Leonardo DiCaprio",
        "Kate Winslet",
        "Billy Zane",
        "Kathy Bates"
      ],
      "directors": [
        "James Cameron"
      ]
    },
    {
      "_id": "62b127a025c3976e31976808",
      "title": "The Dark Knight",
      "year": 2008,
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "rated": "PG-13",
      "languages": [
        "English",
        "Mandarin"
      ],
      "released": "2008-07-18T00:00:00.000Z",
      "awards": {
        "wins": 144,
        "nominations": 106,
        "text": "Won 2 Oscars. Another 142 wins & 106 nominations."
      },
      "cast": [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine"
      ],
      "directors": "Christopher Nolan"
    },
    {
      "_id": "62b127a025c3976e31976809",
      "title": "Spirited Away",
      "year": 2001,
      "genres": [
        "Animation",
        "Adventure",
        "Family"
      ],
      "rated": "PG",
      "languages": [
        "Japanese"
      ],
      "released": "2003-03-28T00:00:00.000Z",
      "awards": {
        "wins": 52,
        "nominations": 22,
        "text": "Won 1 Oscar. Another 51 wins & 22 nominations."
      },
      "cast": [
        "Rumi Hiiragi",
        "Miyu Irino",
        "Mari Natsuki",
        "Takashi Naitè"
      ],
      "directors": [
        "Hayao Miyazaki"
      ]
    },
    {
      "_id": "62b127a025c3976e3197680a",
      "title": "Casablanca",
      "genres": [
        "Drama",
        "Romance",
        "War"
      ],
      "rated": "PG",
      "cast": [
        "Humphrey Bogart",
        "Ingrid Bergman",
        "Paul Henreid",
        "Claude Rains"
      ],
      "languages": [
        "English",
        "French",
        "German",
        "Italian"
      ],
      "released": "1943-01-23T00:00:00.000Z",
      "directors": [
        "Michael Curtiz"
      ],
      "awards": {
        "wins": 9,
        "nominations": 6,
        "text": "Won 3 Oscars. Another 6 wins & 6 nominations."
      },
      "lastupdated": "2015-09-04 00:22:54.600000000",
      "year": 1942
    },
    {
      "_id": "62b15adaf026fae6ca39558b",
      "title": "Spiderman2",
      "year": 2002,
      "genres": [
        "Action",
        "Adventure"
      ],
      "rated": "PG-13",
      "languages": [
        "English"
      ],
      "released": "2004-04-29",
      "awards": {
        "wins": 14,
        "nominations": 12,
        "text": "Won 2 Oscars. Another 12 wins & 12 nominations"
      },
      "cast": [
        "Leonardo"
      ],
      "directors": [
        "James Cameron"
      ]
    },
    {
      "_id": "62b15b1fddeb074eb9b9e33b",
      "title": "Spiderman2",
      "year": 2002,
      "genres": [
        "Action",
        "Adventure"
      ],
      "rated": "PG-13",
      "languages": [
        "English"
      ],
      "released": "2004-04-29",
      "awards": {
        "wins": 14,
        "nominations": 12,
        "text": "Won 2 Oscars. Another 12 wins & 12 nominations"
      },
      "cast": [
        "Leonardo"
      ],
      "directors": [
        "James Cameron"
      ]
    },
    {
      "_id": "62b15bca28f43098e5c854b7",
      "title": "Spiderman2",
      "year": 2002,
      "genres": [
        "Action",
        "Adventure"
      ],
      "rated": "PG-13",
      "languages": [
        "English"
      ],
      "released": "2004-04-29",
      "awards": {
        "wins": 14,
        "nominations": 12,
        "text": "Won 2 Oscars. Another 12 wins & 12 nominations"
      },
      "cast": [
        "Leonardo"
      ],
      "directors": [
        "James Cameron"
      ]
    }
  ]
}
```
### Get Movie by Director

    GET /movies/director
| Query Parameter | Type | Description |
| :--- | :--- | :--- |
| `director` | `string` | The name of the director. |

### Response
```json
{
  "data": [
    {
      "_id": "62b127a025c3976e31976808",
      "title": "The Dark Knight",
      "year": 2008,
      "genres": [
        "Action",
        "Crime",
        "Drama"
      ],
      "rated": "PG-13",
      "languages": [
        "English",
        "Mandarin"
      ],
      "released": "2008-07-18T00:00:00.000Z",
      "awards": {
        "wins": 144,
        "nominations": 106,
        "text": "Won 2 Oscars. Another 142 wins & 106 nominations."
      },
      "cast": [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine"
      ],
      "directors": "Christopher Nolan"
    }
  ]
}
```

## Inserting Movies

    POST /movies
| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Title of the movie. |
| `year` | `integer` | When the movie came out. |
| `genres` | `array of string` | What can the movie be considered as.  |
| `rated` | `string` | Parental rating.  |
| `languages` | `array of string` | Languages the movie is available in.  |
| `released` | `datetime string` | When the movie is released.  |
| `awards` | `Object` | Details regarding the movie's awards.  |
| `cast` | `array of string` | Cast members of the movie.  |
| `directors` | `array of string` | Who directed the movie.  |

### Sample Body
```json
{
"title": "Spiderman",
"year": 2002,
"genres": [ "Action", "Adventure" ],
"rated": "PG-13",
"languages": [ "English" ],
"released": "2004-04-29",
"awards": {
   "wins": 14,
   "nominations": 12,
   "text": "Won 2 Oscars. Another 12 wins & 12 nominations"
},
"cast": [ "Leonardo" ],
"directors": [ "James Cameron" ]
}
```
### Response
```json
{
    "message": "Insertion is successful"
}
```
## Updating Movies

    PUT /movies/title
| Query Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The title of the movie. |    

| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `movie` | `Object` | A JSON object similar to the movie object when inserting. |   
### Sample Body
```json
{
    "movie":   {
      "title": "Spiderman3",
      "year": 2002,
   }
}
```
### Response
```json
{
    "message": "Update is successful"
}
```
## Deleting Movies
    DELETE /movies/title
| Query Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The title of the movie. |

### Response
```json
{
    "message": "Deletion is successful"
}
```
