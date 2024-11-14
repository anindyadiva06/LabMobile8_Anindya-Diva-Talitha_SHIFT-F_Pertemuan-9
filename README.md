**ANINDYA DIVA TALITHA || H1D022026** **|| Tugas Pertemuan 9**


 **Membuat Database db_mhs dengan tabel Mahasiswa**

![image](https://github.com/user-attachments/assets/218c761b-a32f-4d04-a445-0a51a93d0fba)

**Membuat file CRUD PHP**
Berfungsi untuk mengelola API berbasis PHP yang berinteraksi dengan database MySQL. Terdapat file seperti:
-  'koneksi.php' untuk menghubungkan ke database
-  'tampil.php'untuk menampilkan data mahasiswa
-  'tambah.php' untuk menambahkan data baru
-  'edit.php' untuk mengubah data yang ada)
-  'hapus.php' untuk menghapus data
-  'lihat.php' untuk menampilkan salah satu data mahasiswa

**koneksi.php**

![image](https://github.com/user-attachments/assets/442feecd-16c4-4cbd-b95e-916134e44858)

**edit.php**

![image](https://github.com/user-attachments/assets/6ca45cf8-0f9a-4cfb-b798-eceaed2051ea)

**tambah.php**

![image](https://github.com/user-attachments/assets/ac71b747-10fb-4044-8dc7-9fdf82d94f0e)

**tampil.php**

![image](https://github.com/user-attachments/assets/6fe6dc8f-d1f0-4536-864b-23c0ba0dff49)

**hapus.php**

![image](https://github.com/user-attachments/assets/fea891c0-269a-4d10-b175-55fa7ab5f2e0)

**lihat.php**

![image](https://github.com/user-attachments/assets/68fd1ebb-8342-416f-a995-015d0c3c5107)


**Tampilan Awal** 

![image](https://github.com/user-attachments/assets/0e629e4f-1807-4b74-8c1d-8e87ea7298a0)

Pada tampilan awal terdapat list data mahasiswa yang sudah ditambahkan dan tombol 'Tambah Mahasiswa' untuk menambah list data mahasiswa. List data mahasiswa ditampilkan dalam bentuk card yang diiterasi menggunakan '*ngFor="let item of dataMahasiswa' yang dimana data diambil dari array 'dataMahasiswa'. Setiap iterasi menampilkan 'ion-card' yang berisi elemen 'ion-item' yaitu 'ion-label' yang menampilkan {{item.nama} (Nam) dan {{item.jurusan} (Jurusan), 'ion-button' untuk tombol 'Hapus' dan 'ion-button' untuk tombol 'Edit'. 

**Tampilan Tambah Data Mahasiswa**

![image](https://github.com/user-attachments/assets/bf0fc724-3041-44da-9dcd-3ff58e94dc55)
![image](https://github.com/user-attachments/assets/0ed0ed95-5859-49ab-9bf2-461d1050e28d)

![image](https://github.com/user-attachments/assets/c4334cb0-3b6a-4467-9914-8078920779ac)

Berisi struktur modal yang muncul saat terjadi penambahan data mahasiswa. Di dalamnya terdapat input untuk nama dan jurusan mahasiswa serta tombol 'Tambah Mahasiswa' yang ketika tombol ini diklik maka fungsi tambahMahasiswa() akan dipanggil.

![image](https://github.com/user-attachments/assets/6dd1f382-66a4-4f74-8613-073c94afcb3e)

Fungsi 'openModalTambah()' digunakan untuk membuka modal dan menyiapkan form untuk menginput data baru.

![image](https://github.com/user-attachments/assets/3d3dfacf-3281-4215-9cb2-17de3d96e1a4)

Fungsi 'tambahMahasiswa()' akan memeriksa apakah input nama dan jurusan sudah valid. Jika validasi terpenuhi, data dikirim ke server melalui API 'tambah.php'. Apabila proses berhasil, modal akan ditutup lalu input akan di-reset. Kemudian, daftar mahasiswa akan diperbarui dan data bertambah. 

**Tampilan Edit Data Mahasiswa**

![image](https://github.com/user-attachments/assets/06cdcb8d-5c27-4949-aa4a-ae3cccf09ac2)
![image](https://github.com/user-attachments/assets/64434016-a20c-407c-bcee-c6d9e3cfb257)


![image](https://github.com/user-attachments/assets/e4df10fe-3ff7-45d8-beba-26f87555d6f2)
![image](https://github.com/user-attachments/assets/c8cfa027-531b-49d8-818d-d4571ff2894a)

Fungsi 'openModalEdit()' bertugas membuka modal edit dan mengambil data mahasiswa berdasarkan id yang diterima sebagai parameter. Data yang diambil akan ditampilkan pada form input modal sehingga pengguna bisa mengubah data mahasiswa yang ingin diedit.

![image](https://github.com/user-attachments/assets/0d50b21f-28ad-468c-8ad2-fa01a9d1d466)

Fungsi editMahasiswa() akan dijalankan ketika tombol 'Edit Mahasiswa' diklik. Fungsi ini mengumpulkan data id, nama, dan jurusan dari form, lalu mengirimnya ke server melalui API 'edit.php' menggunakan HTTP request. Jika operasi berhasil, maka modal akan ditutup serta form di-reset. Kemudian, daftar mahasiswa akan diperbarui dengan data yang sudah diedit. 

**Alert Hapus**

![image](https://github.com/user-attachments/assets/9eb9c435-9278-4632-8023-24b1a2fbca51)
![image](https://github.com/user-attachments/assets/c902b6ca-206d-4a26-80ac-7d0d1cb0fb29)

![image](https://github.com/user-attachments/assets/6ed7d123-13dc-4b95-8519-604d53d7f986)
![image](https://github.com/user-attachments/assets/5f3e0493-3d21-42d5-b8b8-1da11bb72412)

Ketika tombol 'Hapus' diklik maka proses penghapusan data akan berlangsung. Tombol tersebut memanggil fungsi 'hapusMahasiswa()' dengan mengirimkan 'id' mahasiswa yang akan dihapus sebagai parameter. Fungsi ini kemudian menampilkan pop-up konfirmasi menggunakan 'alertCtrl' untuk memastikan bahwa pengguna ingin melanjutkan penghapusan. Jika pengguna memilih 'Batal' maka penghapusan akan dibatalkan dan pesan dibatalkan akan ditampilkan. Jika pengguna memilih 'Hapus' maka fungsi akan mengirim request ke server melalui API 'hapus.php' untuk menghapus data berdasarkan 'id'. Setelah data berhasil dihapus maka daftar mahasiswa diperbarui dengan memanggil kembali fungsi 'getMahasiswa()'. 
