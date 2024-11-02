import * as Yup from "yup";

export const  registerSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("Nama harus diisi")
    .min(5, "Minimal 5 Karakter"),
  username: Yup.string()
    .required("Username harus diisi")
    .min(5, "Minimal 5 Karakter")
    .max(30, "Maksimal 30 Karakter"),
  email: Yup.string()
    .required("Email harus diisi")
    .email("Email tidak valid"),
  password: Yup.string()
    .required("Password harus diisi")
    .min(3, "Password Terlalu Pendek.")
    .matches(/[a-zA-Z]/, "Kata sandi hanya dapat berisi huruf Latin."),
});

export const userSchemaValidation = Yup.object().shape({
    name: Yup.string()
      .required("Nama harus diisi")
      .min(5, "Minimal 5 Karakter"),
    username: Yup.string()
      .required("Username harus diisi")
      .min(5, "Minimal 5 Karakter")
      .max(30, "Maksimal 30 Karakter"),
    email: Yup.string()
      .required("Email harus diisi")
      .email("Email tidak valid"),
    phone: Yup.string().required("No. Telepon harus diisi"),
    password: Yup.string()
    //   .required("Password harus diisi")
      .min(3, "Password Terlalu Pendek.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    profile: Yup.mixed(),
  });


export const studentSchemaValidation = Yup.object().shape({
  nomor_registrasi: Yup.string()
    .required("Nomor Registrasi harus diisi")
    .min(5, "Minimal 5 Karakter")
    .max(30, "Maksimal 30 Karakter"),
  gelombang_id: Yup.string()
    .required("Gelombang harus diisi"),
  jurusan_id: Yup.string()
    .required("Jurusan harus diisi"),
  fullname: Yup.string()
    .required("Fullname harus diisi")
    .min(5, "Minimal 5 Karakter")
    .max(30, "Maksimal 30 Karakter"),
  NISN: Yup.string()
    .required("NISN harus diisi"),
  NIS: Yup.string().required("NIS harus diisi"),
  gender: Yup.string()
    .required("Gender harus diisi"),
  tempat_lahir: Yup.string()
    .required("Tempat Lahir harus diisi"),
  tanggal_lahir: Yup.string()
    .required("Tanggal Lahir harus diisi"),
  agama: Yup.string()
    .required("Agama harus diisi"),
  anak_ke: Yup.number().required("Anak ke harus diisi"),
  jumlah_saudara: Yup.number().required("Jumlah saudara harus diisi"),
  no_hp: Yup.string().required("No. HP harus diisi"),
  email: Yup.string()
    .required("Email harus diisi")
    .email("Email tidak valid"),
  photo: Yup.mixed(),
});  



export const parentSchemaValidation = Yup.object().shape({
  no_kk: Yup.string().required("No. KK harus diisi"),
  lead_family: Yup.string().required("Kepala Keluarga harus diisi"),
  father_name: Yup.string().required("Nama Ayah harus diisi"),
  father_nik: Yup.string().required("NISN harus diisi"),
  father_birth: Yup.string().required("Tanggal Lahir harus diisi"),
  father_job: Yup.string().required("Pekerjaan harus diisi"),
  father_education: Yup.string().required("Pendidikan Terakhir  harus diisi"),
  mom_name: Yup.string().required("Nama Lengkap harus diisi"),
  mom_nik: Yup.string().required("NISN harus diisi"),
  mom_birth: Yup.string().required("Tanggal Lahir harus diisi"),
  mom_job: Yup.string().required("Pekerjaan harus diisi"),
  mom_education: Yup.string().required("Pendidikan harus diisi"),
});


export const adressSchemaValidation = Yup.object().shape({
  address: Yup.string().required("Alamat Lengkap harus diisi"),
  desa: Yup.string().required("Desa harus diisi"),
  kecamatan: Yup.string().required("Kecamatan harus diisi"),
  kabupaten: Yup.string().required("Kabupaten harus diisi"),
  provinsi: Yup.string().required("Provinsi harus diisi"),
  kode_pos: Yup.number().required("Kode Pos harus diisi"),
});


export const PrevSchoolSchemaValidation = Yup.object().shape({
  previous_school: Yup.string()
    .required("Asal Sekolah harus diisi"),
  level: Yup.string()
    .required("Level harus diisi"),
  NPSN_school: Yup.string()
    .required("NPSN Sekolah harus diisi"),
});


export const schoolSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("Nama harus diisi")
    .min(5, "Minimal 5 Karakter"),
  adress_of_school: Yup.string()
    .required("Alamat Sekolah harus diisi"),
  lead_of_school: Yup.string()
    .required("Kepala Sekolah harus diisi"),
  nip_of_lead_of_school: Yup.string()
    .required("NIP Kepala Sekolah harus diisi"),
  phone: Yup.string().required("No. Telepon harus diisi"),
  ttd_lead_of_school: Yup.mixed().required("Tanda Tangan Kepala Sekolah harus diisi"),
  email: Yup.string()
    .required("Email harus diisi")
    .email("Email tidak valid"),
  ketua_panitia: Yup.string()
    .required("Ketua Panitia harus diisi"),
  nip_ketua_panitia: Yup.string()
    .required("NIP Ketua Panitia harus diisi"),
  ttd_ketua_panitia: Yup.mixed().required("Tanda Tangan Ketua Panitia harus diisi"),
  logo: Yup.mixed(),
})