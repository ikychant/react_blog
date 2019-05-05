import React from 'react';

const Gallery = ({images}) => {
    const v = images.map((v,k) => (
        <li key={k}><a href="#"><img src={v} /></a></li>
    ))
    return (
        <section id="gallery">
            <h2>Gallery</h2>
            <ul>
                {v}
            </ul>
        </section>
    )
}

export default Gallery;