const { gql } = require('apollo-server');

module.exports = gql`
  type insertResponse {
  message:String!
}
 type searchResponse{
     id:String!
     title:String!
     rating:Float!
     relesedyear:String!
     generes:[String!]
 }
  
  type Query {
    insertmovie(title: String!):insertResponse
    searchMovieById(id: String!):searchResponse
    searchMovieByDate(reldate:String!):searchResponse
    searchMovieByGenere(genere:String!):searchResponse
    searchMovieByRating(rating:Float!):[searchResponse]

  }
 
  
`;