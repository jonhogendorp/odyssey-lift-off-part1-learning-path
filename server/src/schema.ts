import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    trackForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "The author's first and last name"
    name: String!
    "The author's photo"
    photo: String
  }
`;

module.exports = typeDefs;
