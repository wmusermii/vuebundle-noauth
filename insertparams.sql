INSERT INTO gateway.parameters (group_code,param_key,value,value_type,"options",num_min,num_max,description,is_system,updated_by,created_at,updated_at) VALUES
	 ('login','window_minutes','15','number',NULL,1,1440,'Jendela waktu penghitungan percobaan gagal (menit)',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('password','require_upper','true','boolean',NULL,NULL,NULL,'Wajib memuat huruf besar',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('password','require_lower','true','boolean',NULL,NULL,NULL,'Wajib memuat huruf kecil',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('password','require_number','true','boolean',NULL,NULL,NULL,'Wajib memuat angka',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('smtp','port','587','number',NULL,1,65535,'Port server SMTP',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('session','duration_hours','8','number',NULL,1,720,'Masa berlaku sesi login (jam)',true,NULL,'2026-10-28 18:32:23.800','2026-10-28 18:32:23.800'),
	 ('smtp','enabled','true','boolean',NULL,NULL,NULL,'Aktifkan pengiriman email dari portal',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:50:07.982'),
	 ('smtp','host','smtp.contoh.com','text',NULL,NULL,NULL,'Alamat server SMTP, contoh smtp.contoh.com',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:50:26.416'),
	 ('smtp','security','none','text','{none,starttls,ssl}',NULL,NULL,'Enkripsi koneksi ke server SMTP',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:50:44.482'),
	 ('smtp','username','wmusermii@gmail.com','text',NULL,NULL,NULL,'Username akun SMTP',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:51:02.506');
INSERT INTO gateway.parameters (group_code,param_key,value,value_type,"options",num_min,num_max,description,is_system,updated_by,created_at,updated_at) VALUES
	 ('smtp','from_email','wmusermii@gmail.com','text',NULL,NULL,NULL,'Alamat email pengirim',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:51:35.645'),
	 ('smtp','from_name','VX Portal','text',NULL,NULL,NULL,'Nama pengirim yang tampil di email',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:51:49.059'),
	 ('smtp','password','v1:ixqVmVcAkxDc9VCL:1f7cjaPiCrXo9iLbKbdHww==:KAiRlfVecs77Lg==','secret',NULL,NULL,NULL,'Password akun SMTP (disimpan terenkripsi)',true,1,'2026-10-28 18:32:23.800','2026-10-28 18:52:53.178'),
	 ('login','max_attempts','3','number',NULL,1,100,'Jumlah percobaan login gagal sebelum diblokir sementara',true,1,'2026-10-28 18:32:23.800','2026-10-28 19:49:48.077'),
	 ('login','block_minutes','1','number',NULL,1,10080,'Lama pemblokiran setelah melewati batas (menit)',true,1,'2026-10-28 18:32:23.800','2026-10-28 19:50:41.191'),
	 ('password','require_symbol','true','boolean',NULL,NULL,NULL,'Wajib memuat simbol (mis. ! @ # $)',true,1,'2026-10-28 18:32:23.800','2026-10-28 19:55:39.006'),
	 ('password','min_length','8','number',NULL,6,128,'Panjang password minimal',true,1,'2026-10-28 18:32:23.800','2026-10-28 19:58:16.524'),
	 ('login','block_by','username','text','{ip,username,both}',NULL,NULL,'Pemblokiran berdasarkan alamat IP, username, atau keduanya',true,1,'2026-10-28 18:32:23.800','2026-10-28 19:58:57.844'),
	 ('portal','support_email','wmusermii@vuexpress.com','text',NULL,NULL,NULL,'Email bantuan yang ditampilkan ke pengguna',true,1,'2026-10-28 18:32:23.800','2026-10-28 20:22:10.420'),
	 ('portal','maintenance_mode','false','boolean',NULL,NULL,NULL,'Mode pemeliharaan: hanya admin yang dapat login',true,1,'2026-10-28 18:32:23.800','2026-10-28 20:23:08.585');
INSERT INTO gateway.parameters (group_code,param_key,value,value_type,"options",num_min,num_max,description,is_system,updated_by,created_at,updated_at) VALUES
	 ('portal','name','Vue Express Portal','text',NULL,NULL,NULL,'Nama portal',true,1,'2026-10-28 18:32:23.800','2026-10-28 20:23:25.116'),
	 ('themes','logo_url','/api/public/theme/asset/logo?v=1793526197700','text',NULL,NULL,NULL,'Logo pojok kiri atas. Kosong = ikon bawaan',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:17.702'),
	 ('themes','favicon_url','/api/public/theme/asset/favicon?v=1793526208964','text',NULL,NULL,NULL,'Favicon tab browser. Kosong = bawaan',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:28.964'),
	 ('themes','login_image_url','/api/public/theme/asset/login_image?v=1793526217006','text',NULL,NULL,NULL,'Gambar di kiri form login. Kosong = tanpa gambar',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:37.007'),
	 ('themes','primary_color','#166ca2','text',NULL,NULL,NULL,'Warna utama (tombol, menu aktif)',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:50.238'),
	 ('themes','primary_text_color','#ffffff','text',NULL,NULL,NULL,'Warna teks di atas warna utama (tombol, avatar)',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','accent_color','#e5a823','text',NULL,NULL,NULL,'Warna aksen (penanda menu aktif, kotak inisial)',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','sidebar_color','','text',NULL,NULL,NULL,'Warna sidebar. Kosong = ikut warna utama',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:50.238'),
	 ('themes','sidebar_text_color','#ffffff','text',NULL,NULL,NULL,'Warna teks sidebar',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:50.238'),
	 ('themes','background_color','#f2f5f4','text',NULL,NULL,NULL,'Warna latar halaman',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238');
INSERT INTO gateway.parameters (group_code,param_key,value,value_type,"options",num_min,num_max,description,is_system,updated_by,created_at,updated_at) VALUES
	 ('themes','surface_color','#ffffff','text',NULL,NULL,NULL,'Warna kartu, topbar, kolom isian, dan dialog',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','text_color','#14282c','text',NULL,NULL,NULL,'Warna teks utama',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','text_muted_color','#55696d','text',NULL,NULL,NULL,'Warna teks sekunder',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','border_color','#dde4e2','text',NULL,NULL,NULL,'Warna garis dan border',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','login_bg_color','#f3f4f6','text',NULL,NULL,NULL,'Warna latar halaman login',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:50.238'),
	 ('themes','success_color','#067647','text',NULL,NULL,NULL,'Warna status berhasil / aktif',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','warning_color','#8a5a00','text',NULL,NULL,NULL,'Warna peringatan',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238'),
	 ('themes','border_radius','5','number',NULL,0,24,'Kelengkungan sudut komponen (px)',true,1,'2026-11-01 09:46:06.007','2026-11-01 16:43:50.238'),
	 ('themes','danger_color','#b42318','text',NULL,NULL,NULL,'Warna bahaya / hapus / galat',true,1,'2026-11-01 10:28:20.732','2026-11-01 16:43:50.238');
