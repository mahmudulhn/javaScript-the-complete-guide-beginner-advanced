const { assert } = require('console');
const express = require('express');
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url = 'mongodb+srv://atnihad:56568787@cluster0.k4er0pd.mongodb.net/locations?retryWrites=true&w=majority';

const client = new MongoClient(url);

const locationStorage = {
    location: []
};

router.post('/add-location', (req, res, next) => {
    // const id = Math.random();
    client.connect(function (err, client) {
        const db = client.db('locations');

        db.collection('user-location').insertOne(
            {
                address: req.body.address,
                coords: {
                    lat: req.body.lat,
                    lng: req.body.lng
                }
            },
            function (err, r) {
                console.log(r);
                res.json({ message: 'Stored location', locId: r.insertedId });
            }
        );
    });

    // locationStorage.location.push({
    //     id: id,
    //     address: req.body.address,
    //     coords: {
    //         lat: req.body.lat,
    //         lng: req.body.lng
    //     }
    // });
    // res.json({ message: 'Stored location', locId: id });
});

router.get('/location/:lid', (req, res, next) => {
    const locationId = req.params.lid;

    client.connect(function (err, client) {
        const db = client.db('locations');

        db.collection('user-location').findOne(
            {
                _id: new mongodb.ObjectId(locationId)
            },
            function (err, doc) {
                if (!doc) {
                    return res.status(404).json({ message: 'Not found!' });
                }

                res.json({ address: doc.address, coordinates: doc.coords });
            }
        );
    });

});

module.exports = router;

