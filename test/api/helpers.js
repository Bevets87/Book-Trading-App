const populate = (Model) => (items) => {
  return Promise.all(items
    .map(item => new Model(item))
    .map(item => item.save())
  )
}


module.exports = {
  populate 
}



