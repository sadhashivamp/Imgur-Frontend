import React from 'react';
import Movie from '../Movie/Movie.js';
import './styles.css';

class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };

  render() {
    return (
      <div className='movies-section'>
        {this.getMovie(
          'dir',
          'Avatar',
          'https://i.pinimg.com/564x/9f/19/c3/9f19c33f08c671c3092d2d94cf3699df.jpg'
        )}
        {this.getMovie(
          'dir',
          'Avengers:Endgame',
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ae_digital_packshot.jpg'
        )}
            
        {this.getMovie(
          'dir',
          'The Conjuring(2013)',
          'https://www.joblo.com/assets/images/oldsite/posters/images/full/conjuring-poster1_thumb.jpg'
        )}

        {this.getMovie(
          'dir',
          'Titanic',
          'https://i.pinimg.com/originals/72/9a/6e/729a6e8c355225565f23f408a6333e9f.jpg'
        )}

        {this.getMovie(
            'dirname',
            'Spiderman',
            'https://picfiles.alphacoders.com/346/346586.jpg'
            
        )}

      </div>
    );
  }
}

export default Movies;