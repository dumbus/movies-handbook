import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './MoviePage.scss';

import MovieService from '../../services/MovieService';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

import MoviePageHeader from './MoviePageHeader/MoviePageHeader';
import MoviePageAbout from './MoviePageAbout/MoviePageAbout';
import MoviePagePoster from './MoviePagePoster/MoviePagePoster';
import MoviePageRating from './MoviePageRating/MoviePageRating';
import MoviePageSimilar from './MoviePageSimilar/MoviePageSimilar';

import { getMockupMovie } from '../../utils/getMockupData';

const MoviePage = () => {
  const { baseId } = useParams();

  const [id, setId] = useState(baseId);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const movieService = new MovieService();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(`/movies/${id}`);
    onRequest(id);
  }, [id]);

  const onRequest = (id) => {
    // =========== for local testing ===========
    const mockupMovieData = getMockupMovie(id);
    onMovieDataLoaded(mockupMovieData);
    // =========================================

    // movieService.getMovieById(id)
    //   .then(onMovieDataLoaded)
    //   .catch(onError);
  };

  const onMovieDataLoaded = (movieData) => {
    setMovieData(movieData);
    setLoading(false);
  };

  const onError = (error) => {
    console.log(error);

    setError(true);
    setLoading(false);
  };

  const renderContent = (movieData) => {
    return (
      <div className='movie-page__grid'>
        <div className='movie-page__grid_short left'>
          <MoviePageHeader movieData={movieData} />
          <MoviePageAbout movieData={movieData} />
        </div>

        <div className='movie-page__grid_short right'>
          <MoviePagePoster movieData={movieData} />
          <MoviePageRating movieData={movieData} />
        </div>

        <div className='movie-page__grid_long'>
          <MoviePageSimilar movieData={movieData} setId={setId} />
        </div>
      </div>
    )
  }

  const content = renderContent(movieData);

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const page = !(isLoading || hasError) ? content : null;

  return (
    <ErrorBoundary>
      <div className='movie-page container'>
        {spinner}
        {error}
        {page}
      </div>
    </ErrorBoundary>
  )
};

export default MoviePage;
