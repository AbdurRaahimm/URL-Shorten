const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const generateId = require('../config/shortid');
require("dotenv").config();

// @route     POST /shorten
// @desc      Create shorten URL

router.post('/shorten', async (req, res) => {
    const {longUrl}  = req.body;
    const baseUrl = process.env.BASE_URL;
    // Check base url
    if (!baseUrl) {
        return res.status(401).json('Invalid base url')
    }
    // Create url code
    const shortId = generateId(6);
    // Check long url
    if (longUrl) {
        try {
            let url = await Url.findOne({ longUrl });
            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + shortId;
                url = new Url({
                    longUrl,
                    shortUrl,
                    shortId,
                    clicks: 0
                })
                await url.save()
                res.json(url)
            }
        } catch (err) {
            console.error(err)
            res.status(500).json('Server error')
        }
    } else {
        res.status(401).json('Invalid long url')
    }
});


// @route     DELETE /:id
// @desc      Delete a URL by its ID

router.delete('/:id', async (req, res) => {
    try {
        const url = await Url.findById(req.params.id);

        if (!url) {
            return res.status(404).json({ message: 'URL not found' });
        }

        await Url.deleteOne({ _id: req.params.id }); // Using deleteOne
        res.json({ message: 'URL removed' });
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

// @route     Update /:id
// @desc      Update a URL by its ID 

router.put('/:id', async (req, res) => {
    try {
        const url = await Url.findById(req.params.id);

        if (!url) {
            return res.status(404).json({ message: 'URL not found' });
        }

        url.longUrl = req.body.longUrl || url.longUrl;
        // url.shortUrl = req.body.shortUrl || url.shortUrl;
        // url.shortid = req.body.shortid || url.shortid;
        // url.clicks = req.body.clicks || url.clicks;

        const updatedUrl = await url.save();
        res.json(updatedUrl);
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

// @route     get /urls
// @desc      get a URLS

router.get('/urls', async (req, res) => {
    try {
        const urls = await Url.find();
        res.json(urls);
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});



module.exports = router