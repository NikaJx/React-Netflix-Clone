const key = 'd8d7e8f04f92e67d0b38f359cb4ac81d';
const baseUrl = 'https://api.themoviedb.org/3';

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`
}

export const createImageUrl = (filename: string, size: string | number) => {
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}

export default endpoints;