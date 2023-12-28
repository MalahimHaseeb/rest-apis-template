const express = require("express")
const router = new express.Router();
const MensRanking = require("../../src/models/mens")

// Now we will handle post request
router.post("/mens", async (req, res) => {
    try {
        const adding = new MensRanking(req.body)
        const insert = await adding.save()
        res.status(201).send(insert)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Now we will handle get request
router.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({})
        res.send(getMens)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
// Now we will handle get  request for individual 
router.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findById(_id)
        res.send(getMen)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// Now we will handle update request for individual 
router.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true //for seeing updated data
        })
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// Now we will handle delete request for individual 
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findByIdAndDelete(_id)
        res.status(200).send(getMen,"Deleted successfully")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;