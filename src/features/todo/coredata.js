export const retrieveNotes = offset =>
  new Promise((resolve, reject) => {
    CoreDataPlugin.fetchData(
      offset,
      function (msg) {
        resolve(msg)
      },
      function (err) {
        reject(err)
      },
    )
  })
