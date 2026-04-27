import { useState, useEffect } from 'react';
import PhotoGalleryItem from '../PhotoGalleryItem'
import styles from './PhotoGallery.module.scss'

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return width;
}

function PhotoGallery(){
    const width = useWindowWidth()

    const getItemCount = () => {
        if (width <= 1024 && width > 420) return 9;
        if (width <= 420) return 6;
        return 8;
    };

    const images = [
        { key: 1, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/1.jpg', alt: 'Татуировка на спине' },
        { key: 2, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/2.jpg', alt: 'Татуировка на ноге' },
        { key: 3, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/3.jpg', alt: 'Татуировка на ноге' },
        { key: 4, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/4.jpg', alt: 'Татуировка на руке' },
        { key: 5, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/5.jpg', alt: 'Татуировка на плече' },
        { key: 6, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/6.jpg', alt: 'Татуировка на плече' },
        { key: 7, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/7.jpg', alt: 'Татуировка в виде детской карусели' },
        { key: 8, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/8.jpg', alt: 'Татуировка на обеих ногах' },
        { key: 9, src: 'https://light-vision.ucoz.ru/doratattoo/images/portfolio/9.jpg', alt: 'Татуировка на руке' },
    ]

    const visibleImages = images.slice(0, getItemCount());

  return (
    <div className={styles.container}>
      { visibleImages.map(item => <PhotoGalleryItem {...item}/>) }
    </div>
  )
}

export default PhotoGallery