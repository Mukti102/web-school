import Html from "react-pdf-html";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import KopSurat from "./KopSurat";

// Register a font (optional, if you want custom fonts)
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Open Sans",
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 15,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  subHeader: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Open Sans",
    fontWeight: 600,
    marginBottom: 10,
  },
  section: {
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
  label: {
    width: "40%",
    fontFamily: "Open Sans",
    fontWeight: 700,
  },
  value: {
    width: "60%",
  },
  signatureSection: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  signatureText: {
    fontSize: 10,
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
  signatureLine: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
  signatureImage: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
});

const SignatureSection = () => (
  <div>
    <Image
      style={styles.signatureImage}
      src="https://webkuliah.com/wp-content/uploads/2020/09/TTD-1.png"
    />
    <Text style={styles.signatureLine}>Amelia Siska S.pd</Text>
    <Text style={styles.signatureText}>NIP : -</Text>
  </div>
);

const MyDocument = ({
  studentData,
  parentData,
  previousSchoolData,
  dataSchool,
}) => {
  const [filteredData, setFilteredData] = useState({});

  // Function to filter data and set it in state
  const filterData = async () => {
    const result = {};
    for (const target of [
      "Nomor Registrasi",
      "NISN",
      "Nama Lengkap",
      "Jenis Kelamin",
      "Tempat Tanggal Lahir",
      "Agama",
      "Nomor Hp",
      "Asal Sekolah",
      "Nama Ayah",
      "Nama Ibu",
      "Email",
    ]) {
      result[target] =
        studentData.find((itm) => itm.name === target)?.value ||
        parentData.find((itm) => itm.name === target)?.value ||
        previousSchoolData.find((itm) => itm.name === target)?.value ||
        "N/A";
    }
    setFilteredData(result);
  };

  useEffect(() => {
    filterData();
  }, [studentData, parentData, previousSchoolData]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* kop surat */}
        <KopSurat dataSchool={dataSchool} />
        {/* Header */}
        <Text style={styles.header}>BUKTI PENDAFTARAN</Text>
        <Text style={styles.subHeader}>
          PANITIA PENERIMAAN PESERTA DIDIK BARU (PPDB)
          {"\n"}
          {dataSchool?.name} TAHUN ANGKATAN 2024
        </Text>

        {/* Registration Info */}
        <View style={styles.section}>
          <Text>
            Yang bertanda tangan di bawah ini Ketua Panitia {dataSchool?.name}{" "}
            menerangkan bahwa :
          </Text>
        </View>

        {/* Student Data */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>NO REGISTRASI</Text>
            <Text style={styles.value}>
              : {filteredData["Nomor Registrasi"]}
            </Text>
          </View>
          {/* <View style={styles.row}>
            <Text style={styles.label}>TGL PENDAFTARAN</Text>
            <Text style={styles.value}>: 2024-02-27 19:57:52</Text>
          </View> */}
          <View style={styles.row}>
            <Text style={styles.label}>NISN</Text>
            <Text style={styles.value}>: {filteredData["NISN"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>NAMA LENGKAP</Text>
            <Text style={styles.value}>: {filteredData["Nama Lengkap"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>JENIS KELAMIN</Text>
            <Text style={styles.value}>: {filteredData["Jenis Kelamin"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>TEMPAT, TANGGAL LAHIR</Text>
            <Text style={styles.value}>
              : {filteredData["Tempat Tanggal Lahir"]}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>AGAMA</Text>
            <Text style={styles.value}>: {filteredData["Agama"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>NAMA ORANGTUA / WALI</Text>
            <Text style={styles.value}>:</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>AYAH</Text>
            <Text style={styles.value}>: {filteredData["Nama Ayah"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>IBU</Text>
            <Text style={styles.value}>: {filteredData["Nama Ibu"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>NO. TELEPON/HP</Text>
            <Text style={styles.value}>: {filteredData["Nomor Hp"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ALAMAT EMAIL</Text>
            <Text style={styles.value}>: {filteredData["Email"]}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>ASAL SEKOLAH</Text>
            <Text style={styles.value}>: {filteredData["Asal Sekolah"]}</Text>
          </View>
        </View>

        {/* Footer Information */}
        <View style={styles.section}>
          <Text>
            Benar telah melakukan pendaftaran masuk {dataSchool?.name} Demikian
            surat bukti pendaftaran ini dibuat untuk dapat dipergunakan
            sebagaimana mestinya.
          </Text>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          <Text style={styles.signatureText}>Karawang, 27 Feb 2024</Text>
          <Text style={styles.signatureText}>Ketua Panitia PPDB</Text>
          <Image
            style={styles.signatureImage}
            src={
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhomecare24.id%2Fttd-dokter%2F&psig=AOvVaw2iOgHs6-vRKIEpTss7y0EX&ust=1730463935949000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjK8NLOuIkDFQAAAAAdAAAAABAQ"
            }
          />
          <Text style={styles.signatureLine}>{dataSchool?.ketua_panitia}</Text>
          <Text style={styles.signatureText}>
            NIP : {dataSchool?.nip_ketua_panitia}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
