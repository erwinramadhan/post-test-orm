const { Book } = require('./models')

Book.destroy({
    where: {
        id:1
    }
})
    .then(() => console.log("Buku dengan id 1 sudah dihapus... mantabb"))