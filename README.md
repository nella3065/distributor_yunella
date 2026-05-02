Input username + password
        ↓
Cek database user
        ↓
Jika user ditemukan:
    cek password
        ↓
    cocok → login berhasil
    tidak cocok → login gagal
Jika tidak ditemukan → login gagal


IF user ditemukan THEN
    IF password benar THEN
        LOGIN BERHASIL
    ELSE
        PASSWORD SALAH
ELSE
    USER TIDAK DITEMUKAN


Sistem ini menerapkan konsep Manajemen Rantai Pasok (SCM) dalam proses mendistribusikan barang, dengan peran utama sebagai distributor yang bertugas menghubungkan pemasok dengan pelanggan atau toko.

Alur sistem dimulai dari pemasok yang mengirimkan barang kepada penerima. Distributor kemudian menerima barang tersebut, menaruh, serta mengurus stok barang yang masuk ke dalam sistem. Setelah itu, barang akan didistribusikan ke customer atau toko sesuai dengan permintaan serta jadwal pengiriman yang telah ditentukan. Setiap langkah mulai dari pesan, bayar, sampai barang dikirim dicatat dengan rapi, sehingga terbentuk catatan transaksi dan laporan pengiriman.

Dalam penerapan NestJS, alur tersebut diwujudkan dalam beberapa modul berdasarkan pembagian fitur seperti berikut:

Modul Autentikasi untuk proses login dan verifikasi admin serta pengguna.
Suppliers Module untuk pengelolaan data supplier
Modul Produk untuk mengelola data barang yang masuk dari pemasok.
Modul Stok untuk mengelola barang yang dimiliki distributor oleh admin.
Schedule Module untuk pengaturan jadwal distribusi barang
Orders Module untuk pemesanan barang oleh customer/user
Payments Module untuk proses pembayaran user
Transactions Module untuk pencatatan seluruh aktivitas transaksi
Modul Laporan untuk membuat laporan tentang distribusi dan penjualan sistem.

Dengan membagi sistem menjadi modul-modul, maka alur distribusi barang bisa diatur dengan rapi mulai dari barang masuk sampai ke tangan customer, dan semua transaksi juga akan tercatat dengan jelas dalam sistem.