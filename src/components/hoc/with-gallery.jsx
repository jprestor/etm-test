import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

const withGallery = (size = '314x170') => (Component) => {
  return (props) => {
    const regExp = new RegExp('https://test.octweb.ru');

    const galleryItems = props.items.map((i, idx) => {
      let replaced = i.replace(regExp, 'https://test.octweb.ru/api/crop');
      const cropped = `${replaced}?geometry=${size}&crop=center`;

      return (
        <a className="gallery__item" key={idx} href={i} data-attribute="SRL">
          <img src={cropped} />
        </a>
      );
    });

    return (
      <SimpleReactLightbox>
        <SRLWrapper>
          <Component {...props} galleryItems={galleryItems} />
        </SRLWrapper>
      </SimpleReactLightbox>
    );
  };
};
export { withGallery };
