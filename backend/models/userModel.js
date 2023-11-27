import mongoose from 'mongoose'
import monoose from 'mongoose'

const contactSchema = new mongoose.Schema(
    {
      name: String,
      email: String,
      subject: String,
      message: String,
    }
)

const Contact = mongoose.model('Contact', contactSchema);

export default Contact

