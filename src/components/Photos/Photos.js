import React, { useState } from "react";
import "./Photos.scss";
import Gallery from "react-photo-gallery";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Photo from "./Photo";
import photos from "./photos.json";

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery
        photos={items}
        renderImage={props => <SortablePhoto {...props} />}
    />
));

export default function Photos() {
    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };

    return (
        <div>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    );
}
