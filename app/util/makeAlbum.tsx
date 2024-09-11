"use client";

import { useState } from "react";
import RowsPhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { NextJsImage } from "./makeNextJsImage";
import { makePhotoObject } from "./makePhotoObject";

export default function AlbumComponent({photo}:{photo: any}) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="w-4/5 m-auto pb-7">
      {/* <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-6 pb-8">{title}</p> */} 
      <RowsPhotoAlbum
        photos={makePhotoObject({photo})}
        layout="rows"
        render={{image: NextJsImage}}
        defaultContainerWidth={1200}
        sizes={{ size: "calc(100vw - 240px)" }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={makePhotoObject({photo})}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Download, Fullscreen, Slideshow, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        controller={{closeOnPullUp: true, closeOnPullDown: true, closeOnBackdropClick: true}}
      />
    </div>
  );
}
