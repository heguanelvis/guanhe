import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Photo from "./Photo/Photo";
import photos from "./life-img.json";

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    direction="column"
    columns={columns}
    renderImage={props => <SortablePhoto {...props} />}
  />
));

export default function Photos() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="photos-div">
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}

function columns(containerWidth) {
  let columns = 2;
  if (containerWidth >= 500) columns = 4;
  if (containerWidth >= 700) columns = 5;
  if (containerWidth >= 1000) columns = 7;
  return columns;
}
