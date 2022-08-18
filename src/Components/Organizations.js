import React from 'react'

const Organizations = ({ organizations }) => {

    return (
        <div style={{ margin: '30px 0px' }}>
            <h2> Organizations </h2>
            {organizations?.map((organization, index) => <Organization key={index} {...organization} />)}
        </div>
    )
}

export default Organizations

const Organization = ({ title, period, org, description }) => {
    return (
        <div style={{ margin: '20px 0px' }} >
            <div className="">
                <p className='experience__proyect'>{org}</p>
                <h3 className="experience__title">{title}</h3>
                <span className="experience__description">
                    {period}
                </span>
                {/* {description.map((desc, i) => <Description key={i} desc={desc} />)} */}
            </div>
        </div>
    );
};