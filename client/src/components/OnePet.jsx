import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const OnePet = () => {

    const { _id } = useParams();
    const [info, setInfo] = useState({})
    const history = useHistory();

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log(res)
                setInfo(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log(res)
                history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h3>Details about {info.name}</h3>
            <Link to='/' className='btn btn-primary'>Home Page</Link>
            <button onClick={deletePet} className='btn btn-danger'>Adopt {info.name}</button>
            <div className="card">
                <p>Type: {info.type}</p>
                <p>Description: {info.description}</p>
                <p>skills: {info.skill1}/{info.skill2}/{info.skill3}</p>

            </div>
        </div>
    );
};







export default OnePet;