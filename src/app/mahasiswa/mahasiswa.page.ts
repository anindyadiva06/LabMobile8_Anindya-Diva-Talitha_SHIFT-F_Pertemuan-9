import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  dataMahasiswa: any;
  modalTambah: any;
  modalEdit: any; 
  id: any;
  nama: any;
  jurusan: any;

  constructor(private api: ApiService, private modal: ModalController, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.getMahasiswa();
  }

  // Fungsi untuk mengambil data mahasiswa
  getMahasiswa() {
    this.api.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataMahasiswa = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // Fungsi untuk mereset input modal
  resetModal() {
    this.id = null;
    this.nama = '';
    this.jurusan = '';
  }

  // Fungsi untuk membuka modal tambah mahasiswa
  openModalTambah(isOpen: boolean) {
    this.modalTambah = isOpen;
    this.resetModal();
    this.modalTambah = true;
    this.modalEdit = false;
  }

  // Fungsi untuk membuka modal edit mahasiswa
  openModalEdit(isOpen: boolean, idget: any) {
    this.modalEdit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilMahasiswa(this.id);
    this.modalTambah = false;
    this.modalEdit = true;
  }

  // Fungsi untuk menutup modal
  cancel() {
    this.modal.dismiss();
    this.modalTambah = false;
    this.modalEdit = false;
    this.resetModal();
  } 

  // Fungsi untuk menambah mahasiswa
  tambahMahasiswa() {
    if (this.nama != '' && this.jurusan != '') {
      let data = {
        nama: this.nama,
        jurusan: this.jurusan,
      }
      this.api.tambah(data, 'tambah.php')
        .subscribe({
          next: (hasil: any) => {
            this.resetModal();
            console.log('berhasil tambah mahasiswa');
            this.getMahasiswa();
            this.modalTambah = false;
            this.modal.dismiss();
          },
          error: (err: any) => {
            console.log('gagal tambah mahasiswa');
          }
        })
    } else {
      console.log('gagal tambah mahasiswa karena masih ada data yg kosong');
    }
  }

  // Fungsi untuk menghapus mahasiswa
  hapusMahasiswa(id: any) {
    this.alertCtrl.create({
      header: 'Konfirmasi',
      message: 'Apakah Anda yakin ingin menghapus data mahasiswa ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Dibatalkan!');
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            this.api.hapus(id, 'hapus.php?id=').subscribe({
              next: (res: any) => {
                console.log('sukses hapus data:', res);
                this.getMahasiswa();
              },
              error: (error: any) => {
                console.log('gagal hapus data:', error);
              },
            });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
  

  // Fungsi untuk mengambil data mahasiswa berdasarkan ID
  ambilMahasiswa(id: any) {
    this.api.lihat(id,
      'lihat.php?id=').subscribe({
        next: (hasil: any) => {
          console.log('sukses', hasil);
          let mahasiswa = hasil;
          this.id = mahasiswa.id;
          this.nama = mahasiswa.nama;
          this.jurusan = mahasiswa.jurusan;
        },
        error: (error: any) => {
          console.log('gagal ambil data');
        }
      })
  }

  // Fungsi untuk mengedit data mahasiswa
  editMahasiswa() {
    let data = {
      id: this.id,
      nama: this.nama,
      jurusan: this.jurusan
    }
    this.api.edit(data, 'edit.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.resetModal();
          this.getMahasiswa();
          console.log('berhasil edit Mahasiswa');
          this.modalEdit = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.log('gagal edit Mahasiswa');
        }
      })
  }

}
