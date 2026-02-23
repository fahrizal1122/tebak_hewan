const soal = [
  {gambar:"assets/kucing.png", jawaban:"Kucing", opsi:["Kucing","Anjing","Burung"]},
  {gambar:"assets/anjing.png", jawaban:"Anjing", opsi:["Kucing","Anjing","Ikan"]},
  {gambar:"assets/ikan.png", jawaban:"Ikan", opsi:["Burung","Ikan","Singa"]},
  {gambar:"assets/gajah.png", jawaban:"Gajah", opsi:["Gajah","Kucing","Burung"]},
  {gambar:"assets/singa.png", jawaban:"Singa", opsi:["Ikan","Singa","Anjing"]},
  {gambar:"assets/burung.png", jawaban:"Burung", opsi:["Burung","Gajah","Kucing"]}
];

let skor = 0;
let indexSoal = 0;

function tampilSoal() {
  if(indexSoal >= 5) {
    document.getElementById("game").innerHTML = `<h2>Game Selesai!</h2>
      <p>Skor akhir: ⭐ ${skor}</p>
      <p>${skor >= 3 ? "Hebat sekali! 🎉" : "Bagus, terus berlatih ya! 🙂"}</p>`;
    return;
  }

  const s = soal[Math.floor(Math.random() * soal.length)];
  document.getElementById("gambar").src = s.gambar;
  document.getElementById("options").innerHTML = "";

  s.opsi.forEach(o => {
    const btn = document.createElement("button");
    btn.innerText = o;
    btn.onclick = () => cekJawaban(o, s.jawaban);
    document.getElementById("options").appendChild(btn);
  });
}

function cekJawaban(pilihan, benar) {
  if(pilihan === benar) {
    document.getElementById("feedback").innerText = "Hebat! 🎉";
    skor++;
  } else {
    document.getElementById("feedback").innerText = "Coba lagi! 🙂";
  }
  document.getElementById("score").innerText = "Skor: ⭐ " + skor;
  indexSoal++;
  setTimeout(tampilSoal, 1000);
}

tampilSoal();