import React, {useState} from 'react'

export default function AddStudent(props) {

    const [formField, setFormField] = useState({
        year: '',
        gender: 'M',
        graduated: 'false'
    })

    const updateFormField = (e) => {
        setFormField({
            ...formField,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <div>
                <label>Year</label>
                <input type='text'
                    name='year'
                    value={formField.year}
                    onChange={updateFormField} />
            </div>
            <div>
                <label>Gender</label>


                <input type='radio'
                    name='gender'
                    value='M'
                    checked={formField.gender === 'M'}
                    onChange={updateFormField} />
                <label>Male</label>


                <input type='radio'
                    name='gender'
                    value='F'
                    checked={formField.gender === 'F'}
                    onChange={updateFormField} />
                <label>Female</label>

            </div>
            <div>
                <label>Graduated</label>


                <input type='radio'
                    name='graduated'
                    value='true'
                    checked={formField.graduated === 'true'}
                    onChange={updateFormField} />
                <label>Yes</label>

                <input type='radio'
                    name='graduated'
                    value='false'
                    checked={formField.graduated === 'false'}
                    onChange={updateFormField} />
                <label>No</label>
            </div>
        </React.Fragment>
    )
}