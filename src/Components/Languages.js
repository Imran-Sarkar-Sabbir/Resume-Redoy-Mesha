import React from 'react'

const Languages = ({ languages }) => {
    return (
        <div>
            <h2>Languages</h2>
            {
                languages?.map((language, index) => {
                    return (
                        <div key={index} className="education_item ">
                            <span>{language.name}</span>
                            <div className='education_bar'>
                                <div className='education_bar_percent' style={{ width: `${language.percent}%` }}></div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Languages