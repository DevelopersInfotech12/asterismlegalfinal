import Contact from "../models/userModel.js";

const contactController = {
    submitForm: async (req, res) => {
        try {
            const {name, email, subject, message} = req.body;

            const newContact = new Contact({
                name,
                email,
                subject,
                message,
            })
            
            await newContact.save();

            res.status(201).json({message: 'Form submitted successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

export default contactController