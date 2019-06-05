import React from 'react'

const CourseTable = props => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.course.length > 0 ? (
            props.course.map(cos => (
                <tr key={cos.id}>
                    <td>{cos.code}</td>
                    <td>{cos.passMark}</td>
                    <td>{cos.lectureIncharge}</td>
                    <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No course</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default CourseTable