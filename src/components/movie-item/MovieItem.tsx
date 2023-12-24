import { useState } from 'react';
import { IMovie } from '../../interfaces/movie..type';
import { createImageUrl } from '../../services/movie-service';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface IProps {
    movie: IMovie;
}

const MovieItem: React.FC<IProps> = ({ movie }) => {
    const [like, setLike] = useState<boolean>(false);

    return (
        <div className="relative w-[160px] sm:w-[200px] md:x-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
            <img
                src={createImageUrl(movie.backdrop_path, 'w500')}
                alt={movie.title}
                className="w-full h-40 block object-cover object-top"
            />
            <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full">
                    {movie.title}
                </p>
                <p>
                    {like ? (
                        <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" />
                    ) : (
                        <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />
                    )}
                </p>
            </div>
        </div>
    );
};

export default MovieItem;
