const router = require("express").Router();
const { check } = require("express-validator");

const Inmueble = require("../../models/inmueble.model");


router.get("/", async (req, res) => {
  try {
    const data = await Inmueble.find();

    res.json(data);

  } catch (error) {
    res.json({ fatalError: error.messsage });
  }
});


router.post("/",async (req, res) => {
    try {

      const data = await Inmueble.create(req.body);

      res.json(data);

    } catch (error) {
      res.json({ fatalError: error.messsage });
    }
  }
);


router.put("/:idInmueble", async (req, res) => {
    try {

      let { idInmueble } = req.params;
      const data = await Inmueble.findByIdAndUpdate(idInmueble, req.body, { new: true })

      if (!data) {
        return res.json({ Msg: "No existen datos con este ID" });
      }
        res.json(data);
  
    } catch (error) {
      res.json({ fatalError: error.messsage });
    }
  }
);


router.delete("/:idInmueble", async (req, res) => {
  try {

    let { idInmueble } = req.params;
    const data = await Inmueble.findByIdAndDelete(idInmueble);

    if (!data) {
      return res.json({ Msg: "No existen datos con este ID" });
    }

    res.json(result);

  } catch (error) {
    res.json({ fatalError: error.messsage });
  }
});

module.exports = router;
