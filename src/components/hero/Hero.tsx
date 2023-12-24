import axios from 'axios';
import { useEffect, useState } from 'react';
import endpoints, { createImageUrl } from '../../services/movie-service';
import { IMovie, IRoot } from '../../interfaces/movie..type';

const Hero = () => {
    const [movie, setMovie] = useState<IMovie>();

    useEffect(() => {
        axios.get<IRoot>(endpoints.popular).then((res) => {
            const movies = res.data.results;
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];

            setMovie(randomMovie);
        });
    }, []);

    if (!movie) return <p>Fetching movie...</p>;

    const { backdrop_path, title, release_date, overview } = movie;

    return (
        <div className="w-full h-[550px] lg:h-[850px]">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
                <img
                    src={createImageUrl(backdrop_path, 'original')}
                    alt={title}
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-6xl">{title}</h1>
                    <div className="mt-8 mb-4">
                        <button className="capitalize border bg-gray-300 text-black py-2 px-5">
                            play
                        </button>
                        <button className="capitalize border border-gray-300 py-2 px-5 ml-4">
                            watch later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">{release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        {overview}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
