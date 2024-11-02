import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
  BlockQuote,
  EasyImage,
  Image,
  ImageInsert,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import AppStore from "../../../../store/AppStore";

export default function TextEditor({ handleChange, name, value }) {
  const [textValue, setTextValue] = useState("");
  const handleTextChange = (event, editor) => {
    const data = editor.getData();
    setTextValue(data);
    handleChange({ target: { name, value: data } });
  };
  const { FormData } = AppStore((state) => state);
  return (
    <article>
      <CKEditor
        name={name}
        editor={ClassicEditor}
        data={FormData ? FormData[name] : value}
        onChange={handleTextChange}
        config={{
          toolbar: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "link",
            "insertTable",
            "mediaEmbed",
            "|",
            "blockQuote",
            "|",
            "insertImage",
            "bulletedList",
            "numberedList",
            "indent",
            "outdent",
          ],
          image: {
            toolbar: [
              "imageTextAlternative",
              "imageStyle:full",
              "imageStyle:side",
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Heading,
            Indent,
            IndentBlock,
            Italic,
            BlockQuote,
            ImageInsert,
            Image,
            Link,
            List,
            MediaEmbed,
            Paragraph,
            Table,
            Undo,
          ],
        }}
      />
    </article>
  );
}
