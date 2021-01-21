let alas = prompt("Masukan alas segitiga")
let tinggi = prompt("Masukan tinggi segitiga")

let segitiga = 0.5 * alas * tinggi
console.log("alas: "+alas)
console.log("tinggi: "+tinggi)

console.log("Rumus luas segitiga adalah 1/2*alas*tinggi")
console.log("luas segitiga: "+segitiga)

alert("luas segitiga: "+segitiga)

console.log("--------------------------------------------------")


let ruas = prompt("Masukan ruas lingkaran")

let diameter = ruas * ruas
let luasLingkaran = 3.14 * diameter
console.log("ruas lingkaran: "+ruas)

console.log("Rumus luas lingkaran adalah pi*r^2")
console.log("luas lingkaran: "+luasLingkaran)
alert("luas lingkaran: "+luasLingkaran)

console.log("--------------------------------------------------")

let myProfile = {
	nama : "Andika Satrio",
	umur :"24",
	pendidikan: {
		kampus: "Binus",
		jurusan: "Computer Science",
		penjurusan: "Multimedia"
	}

}

console.log(myProfile.nama)
console.log(myProfile.umur)
console.log(myProfile.pendidikan["kampus"])
console.log(myProfile.pendidikan["jurusan"])
console.log(myProfile.pendidikan["penjurusan"])

let books = ["Komik, Novel, Majalah, Kamus, Telepon"]

books.forEach(function(book){
	console.log(book)
})