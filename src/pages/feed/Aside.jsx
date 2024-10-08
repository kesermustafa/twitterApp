import React from 'react';

const Aside = () => {

    return (
        <div className="max-lg:hidden">
            <img className='w-[300px]' src="profileImage.webp" alt=""/>
        </div>
    );
};

export default React.memo(Aside);
