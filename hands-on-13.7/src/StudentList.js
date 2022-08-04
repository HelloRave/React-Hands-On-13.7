import React, {useContext} from 'react'
import StudentContext from './StudentContext'

export default function StudentList(props){

    const context = useContext(StudentContext)

    return (
        <React.Fragment>
            <table>
                <thead>
                    <th>Student Number</th>
                    <th>Student Year</th>
                    <th>Student Gender</th>
                    <th>Graduated</th>
                </thead>
                <tbody>
                    {context.getStudents().map(student => {
                        return (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.year}</td>
                                <td>{student.gender}</td>
                                <td>{student.graduated ? 'Yes' : 'No'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}