import express from "express";
import contact from "../Modal/Modal.js"; 
import mongoose from 'mongoose';

const router=express.Router();

export const getDet = async (req, res) => { 
    try {
        const details = await contact.find();
        // console.log(details)
        res.status(200).json(details);
    } catch (error) {
        console.log(error);
        res.status(404);
    }
}

export const createDet = async (req, res) => {
    console.log(req.body);
    const { email,pass } = req.body;

    const newPostMessage = new contact({email,pass})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDet = async (req, res) => {
    const { id } = req.params;
    const {email,pass } = req.body;
    // console.log(`updated body ${req.body}`)
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { email,pass, _id: id };

    await contact.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export default router;