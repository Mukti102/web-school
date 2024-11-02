import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    width: "90%",
    margin: "0 auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    borderBottom: "2px solid black",
    paddingBottom: 10,
  },
  logo: {
    width: 60, // Adjust width and height for images
    height: 60,
  },
  institutionDetails: {
    textAlign: "center",
  },
  institutionName: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  institutionAddress: {
    fontSize: 8,
  },
});

const KopSurat = ({ dataSchool }) => {
  return (
    <View style={styles.container}>
      {/* Institution Logo Left */}
      <View style={{ marginBottom: 4 }}>
        <Image
          src="https://3.bp.blogspot.com/-frEnGtnUAZs/WJnLXW4IP1I/AAAAAAAABAs/9Px5HMVYe_AzUcnB1UD4YOqJLLHrUQbhQCLcB/s1600/Logo%2BMA%2BRoudlotul%2BMutaalimin.jpg"
          alt="Logo Lembaga"
          style={styles.logo}
        />
      </View>

      {/* Institution Name and Details */}
      <View style={styles.institutionDetails}>
        <Text style={styles.institutionName}>{dataSchool?.name}</Text>
        <Text style={styles.institutionAddress}>
          Jl. Contoh Alamat No. 123, Kota ABC, 12345 {"\n"}
          Telepon: {dataSchool?.phone} | Email: {dataSchool?.email} {"\n"}
          Website: www.namalembaga.com
        </Text>
      </View>

      {/* Institution Logo Right */}
      <View style={{ marginBottom: 4 }}>
        <Image
          src="https://3.bp.blogspot.com/-frEnGtnUAZs/WJnLXW4IP1I/AAAAAAAABAs/9Px5HMVYe_AzUcnB1UD4YOqJLLHrUQbhQCLcB/s1600/Logo%2BMA%2BRoudlotul%2BMutaalimin.jpg"
          alt="Logo Lembaga"
          style={styles.logo}
        />
      </View>
    </View>
  );
};

export default KopSurat;
