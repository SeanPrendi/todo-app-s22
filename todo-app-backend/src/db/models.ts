import mongoose, { Document, Model } from 'mongoose'

export interface MemeInterface extends Document {
    title: string
    content: string
}

const memeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

export const MemeModel: Model<MemeInterface> = mongoose.model('Meme', memeSchema)