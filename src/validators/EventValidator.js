const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      date: Yup.date().required(),
      local: Yup.string(),
      organizer: Yup.string(),
      inscription_link: Yup.string()
        .url()
        .required(),
      description: Yup.string().required(),
      program: Yup.array(),
      tags: Yup.array()
    });
    

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.errors });
  }
}