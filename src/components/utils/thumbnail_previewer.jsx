import React from 'react';


export default function ThumbnailPreviewer({file}) {

  return (
    <div className="chat-upload-image-holder">
      <img src={file} width={100} height={100} alt="thumbnail" />
    </div>
  );
}
