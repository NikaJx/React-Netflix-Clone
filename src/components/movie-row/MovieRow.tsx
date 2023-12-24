import axios from 'axios';
import { useEffect, useState } from 'react';
import { IMovie } from '../../interfaces/movie..type';
import MovieItem from '../movie-item/MovieItem';

interface IProps {
    url: any;
    title: string;
}

const MovieRow: React.FC<IProps> = ({ title, url }) => {
    const [movies, setMovie] = useState<IMovie[]>([]);

    useEffect(() => {
        axios.get(url).then((res) => setMovie(res.data.results));
    }, [url]);

    return (
        <>
            <h2 className="md:text-xl p-4 capitalize">{title}</h2>
            <div
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MovieRow;
