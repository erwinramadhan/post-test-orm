const { Book } = require('./models')

const query = {
    where: { id: 1}
}

Book.update({
    judul: "judul buku 1 sudah aku ganti update v2"
}, query)
.then(()=>{
    console.log("Judul buku berhasil diupdate menjadi v2")
    process.exit()
})
.catch(err=>{
    console.error("Gagal mengupdate juduk buku")
})