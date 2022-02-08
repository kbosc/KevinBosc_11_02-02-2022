import React from 'react';

export default function Sheet({title, cover, description}) {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {cover}
            </div>
            <div>
                {description}
            </div>

        </div>
    );
}