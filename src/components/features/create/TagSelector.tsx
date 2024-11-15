import React from 'react';

interface TagSelectorProps {
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}

const TAGS = ['BLACK PINK', 'LISA', 'JENNIE', 'ROSE', 'JISOO'];

const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTag,
  setSelectedTag,
}) => {
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="w-full">
      <p className="text-lg font-medium mb-2">
        Which star is this content related to?
      </p>
      <div className="flex gap-2 flex-wrap">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-4 py-2 border rounded-full focus:outline-none ${
              selectedTag === tag
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            aria-pressed={selectedTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagSelector;
