import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


const EditPetForm = (props) => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    const [petInfo, setPetInfo] = useState({});

    let [formErrors, setFormErrors] = useState({});

    const { _id } = useParams();

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log(res);
                setPetInfo(res.data.results)

            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }




    const updatePet = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${_id}`, petInfo)
            .then(res => {
                console.log(res)
                if (res.data.error) {
                    setFormErrors(res.data.error.errors);
                } else {
                    history.push('/')

                    setName("");
                    setType("");
                    setDescription("");
                    setSkill1("");
                    setSkill2("");
                    setSkill3("");
                }
            })
            .catch(err => {
                console.log(err)
            })

    }





    return (
        <div>
            <p>edit {petInfo.name}</p>
            <Link to='/' className='btn btn-primary'>Home Page</Link>
            <form onSubmit={updatePet}>
                <div className='form-group'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" className='form-control' onChange={changeHandler} value={petInfo.name} />
                </div>
                <p className='text-danger'>{formErrors.name?.message}</p>

                <div className='form-group'>
                    <label htmlFor="">Type</label>
                    <input type="text" name="type" id="" className='form-control' onChange={changeHandler} value={petInfo.type} />
                </div>
                <p className='text-danger'>{formErrors.type?.message}</p>

                <div className='form-group'>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" className='form-control' onChange={changeHandler} value={petInfo.description} />
                </div>
                <p className='text-danger'>{formErrors.name?.message}</p>

                <div className='form-group'>
                    <label htmlFor="">Skill 1</label>
                    <input type="text" name="skill1" id="" className='form-control' onChange={changeHandler} value={petInfo.skill1} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Skill 2</label>
                    <input type="text" name="skill2" id="" className='form-control' onChange={changeHandler} value={petInfo.skill2} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Skill 3</label>
                    <input type="text" name="skill3" id="" className='form-control' onChange={changeHandler} value={petInfo.skill3} />
                </div>
                <input type="submit" value="Edit Pet" />
            </form>
            
        </div>
    )
}






export default EditPetForm;