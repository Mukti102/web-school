import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import MyDocument from "./PDF";

export default function DownLoadPdf({
  studentData,
  parentData,
  previousSchoolData,
}) {
  return (
    <div>
      {/* PDF Preview in PDFViewer */}
      <div className="pdf-preview absolute top-0 right-0 ">
        <PDFViewer
          style={{ display: "absolute", width: "100vw", height: "100vh" }}
        >
          <MyDocument
            parentData={parentData}
            previousSchoolData={previousSchoolData}
            studentData={studentData}
          />
        </PDFViewer>
      </div>
    </div>
  );
}
