import React, {useState} from 'react'
import AddStudent from './AddStudent';
import StudentContext from './StudentContext';
import StudentList from './StudentList';

function App() {

  const [students, setStudents] = useState([
    {
      id: 1,
      year: 1,
      gender: 'M',
      graduated: false
    },
    {
      id: 2,
      year: 3,
      gender: 'F',
      graduated: false
    },
    {
      id: 3,
      year: 2,
      gender: 'F',
      graduated: true
    },
    {
      id: 4,
      year: 4,
      gender: 'M',
      graduated: true
    }
  ])

  const context = {
    getStudents: () => {
      return students
    },
    addStudent: (year, gender, graduated) => {
      const cloned = [
        ...students, {
          id: Math.floor(Math.random() * 100000 + 10000),
          year, gender, graduated
        }
      ]

      setStudents(cloned)
    },
    deleteStudent: (selectedId) => {
      let index = students.findIndex(student => {
        return student.id === selectedId
      })
      const cloned = [
        ...students.slice(0, index),
        ...students.slice(index + 1)
      ]
      setStudents(cloned)
    }
  }

  return (
    <React.Fragment>
      <StudentContext.Provider value={context}>
        <StudentList />
        <AddStudent />
      </StudentContext.Provider>
    </React.Fragment>
  );
}

export default App;
