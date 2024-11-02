import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20 },
  section: { margin: 10, padding: 10, fontSize: 12 },
});
export default function YourDocument({ data }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>Dynamic PDF Content</Text>
          <Text>{data?.name}</Text>
        </View>
      </Page>
    </Document>
  );
}
