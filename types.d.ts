type ResultInfo = {
  count:number
  pages:number
  next:number | null
  prev:number | null
};
type Character = {
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

type GetCharactersResponse = {
  characters:{
    info:ResultInfo
    results:Character[]
  }
};

interface CharacterProps {
  character:Character,
  style:React.CSSProperties
}

interface CharacterShimmerProps {
  style:React.CSSProperties
}

interface TagProps {
  id:string,
  text:string
}

interface RenderIfProps {
  condition: boolean
  children:React.ReactNode
}
