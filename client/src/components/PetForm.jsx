import React, { useState } from "react";
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";



const PetForm = (props) => {
    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createPet = (e) => {
        e.preventDefault();
        let formInfo = { name, type, description, skill1, skill2, skill3 }

        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(res => {
                console.log(res);
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
            <form onSubmit={createPet}>
                <div className='form-group'>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setName(e.target.value) }} value={name} />
                    <p className='text-danger'>{formErrors.name?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Type:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setType(e.target.value) }} value={type} />
                    <p className='text-danger'>{formErrors.type?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    <p className='text-danger'>{formErrors.description?.message}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setSkill1(e.target.value) }} value={skill1} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setSkill2(e.target.value) }} value={skill2} />
                </div>
                <div className='form-group'>
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" name="" id="" className='form-control' onChange={(e) => { setSkill3(e.target.value) }} value={skill3} />
                </div>
                <input type="submit" value="Create Pet" />
            </form>
            
        </div>
    )
}



export default PetForm;