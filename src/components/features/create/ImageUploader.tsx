import React, { useRef, ChangeEvent } from 'react';

interface ImageUploaderProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  title,
  setTitle,
  selectedImages,
  setSelectedImages,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleToolbarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const images = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(images);
  };

  return (
    <>
      <input
        type="text"
        className="mt-2 h-14 w-full pl-2 border-b-2 border-gray-300 focus:outline-none focus:border-b-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
        aria-label="Title"
      />
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        aria-label="Upload Images"
      />
      <button
        onClick={handleToolbarClick}
        className="mt-2 w-full cursor-pointer"
      >
        <img src="assets/tool-bar.png" alt="Upload Toolbar" />
      </button>
      <div className="mt-2 w-full h-[360px] overflow-y-auto">
        {selectedImages.length > 0 ? (
          selectedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Selected ${index + 1}`}
              className="w-full mt-2 rounded-md"
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-[360px] border-2 border-dashed border-gray-300 text-gray-500 rounded-md">
            <p>Upload your images here or click the toolbar icon above</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
