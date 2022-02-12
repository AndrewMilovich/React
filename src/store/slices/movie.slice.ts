import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenreProp, IMovie, IMovieDetailInterface, IResults} from "../../interfaces";


import {genreService, movieServices} from "../../services";


interface ISearch {
    filmName: string
}

interface IMovieState {
    movies: IMovie,
    results: IResults[],
    currentPage: number,
    totalPage: number,
    genre: IGenreProp[],
    genreId: string;
    data: {},
    filmName:string
    name:IResults[],

}

const initialState: IMovieState = {
    movies: {},
    results: [],
    currentPage: 1,
    totalPage: 1,
    genre: [],
    genreId: '',
    data: {},
    name:[],
    filmName:'',

}

export const getInformationByFilm = createAsyncThunk(
    'movieSlice/getFilm',
    async (movie_id: string, {dispatch}) => {
        const {data} = await movieServices.getMovieById(movie_id)
        if (data) {
            dispatch(getMovieInformation({data}))
        }
    }
)

export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genreService.getGenres()
        if (data.genres) {
            dispatch(setGenre({genre: data.genres}))
        }
    }
)
export const getFilmsByName = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (name: string, {dispatch, getState}) => {
        const state=getState() as { movieReducer: IMovieState };
        const {data}=await  movieServices.getMovieByName(name,state.movieReducer.currentPage)
        if(data.results){
            dispatch(setFilm({name:data.results}))
        }
    }
)

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (currentPage: number, {dispatch, getState}) => {
        const state = getState() as { movieReducer: IMovieState };
        const {data} = await movieServices.getMovies(currentPage, state.movieReducer.genreId)
        if (data.results && data.total_pages) {
            dispatch(setMovies({results: data.results, totalPages: data.total_pages}))
        }
    },
)

const moviesSlice = createSlice(
    {
        name: 'movieSlice',
        initialState,
        reducers: {
            setMovies: (state, action: PayloadAction<{ results: IResults[], totalPages: number }>) => {
                state.results = action.payload.results
                state.totalPage = action.payload.totalPages
            },
            setCurrentPage: (state, action:PayloadAction<number>) => {
                if (state.currentPage >= 1 && state.currentPage <= state.totalPage) {
                    state.currentPage=action.payload
                } else if (state.currentPage < 1) {
                    state.currentPage = 1
                } else if (state.currentPage > state.totalPage) {
                    state.currentPage = state.totalPage
                }

            },
            setGenre: (state, action: PayloadAction<{ genre: IGenreProp[] }>) => {
                state.genre = action.payload.genre
            },
            setMovieGenre: (state, action: PayloadAction<{ genre: IGenreProp }>) => {
                if (action.payload.genre.id) {
                    state.genreId = action.payload.genre.id
                }
            },
            getMovieInformation: (state, action: PayloadAction<{ data: IMovieDetailInterface }>) => {
                if (action.payload.data) {
                    state.data = action.payload.data
                }

            },
            setFilmName:(state, action:PayloadAction<string>)=>{
                state.filmName=action.payload
            },
            setFilm: (state, action: PayloadAction<{ name: IResults[] }>) => {
                if (action.payload.name) {
                    state.name = action.payload.name

                }
            }

        },

    }
)

const movieReducer = moviesSlice.reducer

export default movieReducer


export const {
    setMovies,
    setCurrentPage,
    setGenre,
    setMovieGenre,
    getMovieInformation,
    setFilm,setFilmName
} = moviesSlice.actions