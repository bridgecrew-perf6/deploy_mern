const Pet = require('../models/pet.model');

module.exports.helloWorld = (req,res)=>{
    res.json({msg:"hello world"})
}

module.exports.findAllPets = (req,res)=>{
    Pet.find()
    .then(allPets=>{
        res.json({results: allPets})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet = (req,res)=>{
    Pet.create(req.body)
    .then(newlyCreatedPet =>{
        res.json({results: newlyCreatedPet})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.getOnePet = (req,res)=>{
    Pet.findOne({_id: req.params.id})
    .then(foundPet =>{
        res.json({results: foundPet})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateOnePet =(req,res)=>{
    Pet.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedPet=>{
            res.json({results: updatedPet})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteOnePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
    .then(deletedPet =>{
        res.json({results: deletedPet})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}