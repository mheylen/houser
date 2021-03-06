module.exports = {
    getListings(req, res) {
        const db = req.app.get("db");
        db.get_listings()
        .then(listings => {
            res.status(200).send(listings);
        })
        .catch(err => {
            console.error("Error in get_Listings sql", err);
            res.status(500)
            .send({message: "An error has occured on the server", err });
        });
    },
    getOneListing(req, res) {
        const db = req.app.get("db");
        const { id } = req.params;
        db.get_one_listing([id])
        .then(listings => {
            res.status(200).send(listings[0]);
        })
        .catch(err => {
            console.error("Error in getOnelist sql", err);
            res
              .status(500)
              .send({ message: "An Error has occurred on the server", err});
    });
},
    addListings(req, res) {
        const db = req.app.get("db");
        const {name, address, city, state, zipcode} = req.body;
        db.add_listing([name, address, city, state, zipcode])
        .then(listings => {
            res.status(200).send(listings);
        })
        .catch(err => {
            console.error("Error in addListings sql", err);
            res
            .status(500)
            .send({ message: "An error has occurred on the server", err})
        })
    },
    updateListings(req, res) {
        let {id} = req.params;
        if (!id) {
            id = req.query.id;
        }
        if (!id) {
    return res
    .status(400)
    .send({message: "Invalid or missing 'id' on request" });
} 
const db = req.app.get("db");
const { name, address, city, state, zipcode } = req.body; 

db.update_listing([name, address, city, state, zipcode])
.then(listings => {
    res.status(200).send(listings);
})
.catch(err => {
    console.error("Error in updateListing sql", err);
    res
      .status(500)
      .send({ message: "An Error has occurred on the server", err });
  });
},
  deleteListing(req, res) {
    let { id } = req.params;

    if (!parseInt(id, 10)) {
      return res
        .status(400)
        .send({ message: "Invalid or missing 'id' on request" });
    }
    id = parseInt(id, 10);
    const db = req.app.get("db");
    db.delete_Listing([id])
      .then(listings => {
        res.status(200).send(listings);
      })
      .catch(err => {
        console.error("Error in deleteListing sql", err);
        res
          .status(500)
          .send({ message: "An Error has occurred on the server", err });
      });
    }
}