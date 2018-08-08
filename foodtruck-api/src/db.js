import mongoose from 'mongoose'
import config from './config'

export default callback => {
  let db = mongoose.connect(config.mongoURL,  { useNewUrlParser: true })
  callback(db)
}
