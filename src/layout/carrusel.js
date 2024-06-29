import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import '/workspaces/project/src/css/Carrusel.css';

const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Carrusel = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  return (
    <div className="carrusel-container">
      <Carousel>
        {playas.map((it, index) => (
          index % 3 === 0 ? (
            <Carousel.Item key={index}>
              <div className="row">
                {playas.slice(index, index + 3).map((item, subIndex) => (
                  <div key={index + subIndex} className="col">
                    <img
                      className='w-100 h-100 dark-image'
                      src={item.picture}
                      alt={`Playa ${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.slug);
                      }}
                    />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ) : null
        ))}
      </Carousel>
    </div>
  );
}

export default Carrusel;

const playas = [
  {
    slug: 'playa-1',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/035/095/662/small_2x/ai-generated-copy-space-tropical-beach-landscape-ai-generative-photo.jpg'
  },
  {
    slug: 'playa-2',
    picture: 'https://i.pinimg.com/474x/17/f0/13/17f013312dfa35c8e242602bb7835ecc.jpg'
  },
  {
    slug: 'playa-3',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  },
  {
    slug: 'playa-4',
    picture: 'https://static.vecteezy.com/system/resources/thumbnails/038/252/827/small_2x/ai-generated-sunny-tropical-beach-sea-shells-photo.jpg'
  },
];