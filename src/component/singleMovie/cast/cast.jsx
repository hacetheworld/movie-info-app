import React from 'react';

export default function Cast({ casts, castimageUrl }) {
    return (
        <div className="movie__casts">
            {
                casts.map(cast => {
                    return (
                        <div key={cast.id} className="movie__cast">
                            <img src={castimageUrl + cast.profile_path} className='cast-img' alt="cast" />
                            <p>{`${cast.name} as ${cast.character}`}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}
