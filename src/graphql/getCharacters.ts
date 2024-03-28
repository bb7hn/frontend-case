import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
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

export type ResultInfo = {
  count:number
  pages:number
  next:number | null
  prev:number | null
};
export type Character = {
  id:string
  name:string
  status:'Alive' | 'Dead' | 'unknown'
  species:string
  type:string
  gender:'Female' | 'Male' | 'Genderless' | 'unknown'
  origin:{
    name:string
  }
  location:{
    name:string
  }
  image:string
  episode:{
    name:string
  }[]
  created:string
};

export type GetCharactersResponse = {
  characters:{
    info:ResultInfo
    results:Character[]
  }
};
