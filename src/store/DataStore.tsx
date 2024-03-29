import { create } from 'zustand';

type SelectedCharacter = {
  id:string
  name:string
};

interface DataState {
  info:ResultInfo,
  setInfo:(p:ResultInfo)=>void,

  page:number,
  setPage:(p:number)=>void

  query:string,
  setQuery:(q:string)=>void

  characters: Character[]
  addCharacters: (c: Character[]) => void

  selectedCharacters:SelectedCharacter[]
  toggleCharacter:(c:Character)=>void
  removeCharacter:(id:string)=>void

  getCharacterByIndex:(i:number)=>Character
}

const useDataStore = create<DataState>()((set, get) => ({
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  setInfo: (i:ResultInfo) => set(() => ({ info: i })),

  page: 1,
  setPage: (p:number) => set(() => ({ page: p })),

  query: '',
  setQuery: (q:string) => set(() => ({ page: 1, query: q, characters: [] })),

  characters: [],
  addCharacters: (c) => set((state) => ({ characters: state.characters.concat(c) })),

  selectedCharacters: [],
  getCharacterByIndex: (i:number) => get().characters[i],
  toggleCharacter: (character) => set((state) => {
    if (state.selectedCharacters.findIndex((c) => c.id === character.id) !== -1) {
      return {
        selectedCharacters:
        [...state.selectedCharacters.filter((c) => c.id !== character.id)],
      };
    }
    return {
      selectedCharacters: state.selectedCharacters.concat({
        id:
        character.id,
        name: character.name,
      }),
    };
  }),
  removeCharacter: (id) => set((state) => ({
    selectedCharacters:
    state.selectedCharacters.filter((c) => c.id !== id),
  })),

}));

export default useDataStore;
