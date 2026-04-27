import { useState } from 'react';
import styles from './PhotoGalleryItem.module.scss'

function PhotoGalleryItem({ src, alt }){  // key убран, он передается через родителя
    const [isPressed, setIsPressed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150); // Эффект быстро проходит
    };

    const handleTouchStart = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);
    };

    return (
        <div className={styles.container}>
            <img
                src={src}
                alt={alt}
                className={`${styles.image} ${isPressed ? styles.pressed : ''} ${isHovered ? styles.hovered : ''}`}
                style={{
                    cursor: isPressed ? 'grabbing' : 'grab',
                    transform: isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsPressed(false);
                }}
                draggable={false}
            />
        </div>
    )
}

export default PhotoGalleryItem