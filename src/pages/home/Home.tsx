import Hero from '../../components/hero/Hero';
import MovieRow from '../../components/movie-row/MovieRow';
import endpoints from '../../services/movie-service';

const Home = () => {
    return (
        <>
            <Hero />
            <MovieRow title="upcoming" url={endpoints.upcoming} />
            <MovieRow title="trending" url={endpoints.trending} />
            <MovieRow title="top rated" url={endpoints.topRated} />
            <MovieRow title="comedy" url={endpoints.comedy} />
            <MovieRow title="popular" url={endpoints.popular} />
        </>
    );
};

export default Home;
