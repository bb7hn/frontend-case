import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
query getCharacters($page: Int! $query:String){
    characters(page:$page filter:{name:$query}){
      info{
        count
        pages
        next
        prev
        }
      results{
        id
        name
        status
        species
        type
        gender
        origin{
          name
        }
        location{
          name
        }
        image
        episode{
          name
        }
        created
      }
    }
  }
  
`;

export default GET_CHARACTERS;
