import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";


const AllPets = (props) => {
    const [PetList, setPetList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log(res.data.results)
                setPetList(res.data.results)
            })
            .catch(err => {
                console.log('errorrr', err)
            })
    }, [props.formSubmitted])





    return (
        <div>
            
            <Link to='/pets/new' className='btn btn-info'>add a pet to the shelter</Link>
            <h3>These are the pets looking for a good home</h3>
            {
                PetList.map((petObj) => {
                    return (

                        <div key={petObj._id}>
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{petObj.name}</td>
                                        <td>{petObj.type}</td>
                                        <td><Link to={`/pets/${petObj._id}`} className='btn btn-primary'>Details</Link>
                                            <Link to={`/pets/${petObj._id}/edit`} className='btn btn-secondary'>Edit</Link>
                                            </td>
                                    </tr>
                                </tbody>
                            </table>
                            



                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllPets;