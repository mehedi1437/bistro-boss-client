import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-yellow-600 text-center space-y-4 '>
            <p>--- {subHeading} ---</p>
            <p className='text-4xl uppercase  border-y-4 py-3 w-fit mx-auto'>{heading}</p>
        </div>
    );
};

export default SectionTitle;