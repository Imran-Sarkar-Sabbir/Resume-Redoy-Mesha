import React from 'react'

const CourseAndInterests = ({ courses, interests }) => {
    return (
        <div className='course-interest'>
            <div>
                <h2>Courses</h2>
                <div className='items'>
                    {courses?.map((course, index) => <Course key={index} course={course} />)}
                </div>
            </div>
            <div>
                <h2>Interests</h2>
                <div className='items'>
                    {interests?.map((interest, index) => <Interest key={index} interest={interest} />)}
                </div>
            </div>
        </div>
    )
}

const Course = ({ course }) => {
    return <div className='item'>{course}</div>
}

const Interest = ({ interest }) => {
    return <div className='item'>{interest}</div>
}

export default CourseAndInterests