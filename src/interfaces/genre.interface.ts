export interface IGenre {
    genres: IGenreProp[]
}

export interface IGenreProp {
    id: string | undefined,
    name?: string
}