import * as React from 'react';
import './styles.css';

class Movie extends React.Component {
  render() {
    return (
      <div className='movie-card'>
        <img src={this.props.banner} alt = "" />
        <h2>{this.props.likes}</h2><h3>{this.props.name}</h3>
          
           
          <h4>{this.props.hero}</h4>
        
      </div>
    );
  }
}

export default Movie;