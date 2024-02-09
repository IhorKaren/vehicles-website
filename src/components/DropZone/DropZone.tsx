import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Container,
  ThumbsContainer,
  Image,
  Thumb,
  ThumbInner,
} from "./DropZonde.styled";

interface FileWithPreview extends File {
  preview: string;
}

const DropZone = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ) as FileWithPreview[],
      );
    },
  });

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Image
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="container">
      <Container {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <ThumbsContainer>{thumbs}</ThumbsContainer>
    </div>
  );
};

export default DropZone;
