import parser from 'xmljson/lib'

export default (xml) => new Promise((resolve, reject) => {
  parser.to_json(xml, (error, data) => {
    if (error) reject(error)
    resolve(data)
  })
})