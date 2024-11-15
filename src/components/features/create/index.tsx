import PATH from 'router/paths';
import TagSelector from 'components/features/create/TagSelector.tsx';
import ImageUploader from 'components/features/create/ImageUploader.tsx';
import PriceInput from 'components/features/create/PriceInput.tsx';
import Divider from 'components/materials/Divider.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { addPost } from 'states/posts.state';
import { useUser } from 'states/user.state';

const CreatePost = () => {
  const user = useUser();
  const nav = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [price, setPrice] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const onCreate = () => {
    if (!Number(price)) return;
    addPost({
      author: user.name,
      title,
      contents: '',
      imageUrls: selectedImages,
      price: Number(price),
      tag: tag,
    });

    nav(PATH.POSTS);
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-primary font-medium">
        Create Fan K-creations!
      </h1>

      <div className="mt-5 w-full">
        <ImageUploader
          title={title}
          setTitle={setTitle}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>

      <Divider className="my-4" />

      <div className="w-full">
        <PriceInput price={price} setPrice={setPrice} />
      </div>

      <Divider className="my-4" />

      <div className="w-full">
        <TagSelector selectedTag={tag} setSelectedTag={setTag} />
      </div>

      <button
        onClick={onCreate}
        disabled={!price || isNaN(Number(price))}
        className="btn-primary w-full block mt-8"
      >
        Next
      </button>
    </div>
  );
};

export default CreatePost;
