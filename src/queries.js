import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query GETPAGE($page: Int) {
    characters(page: $page) {
      results {
        id
        status
        name
        type
        image
        species
        location {
          name
        }
      }
    }
  }
`;
