import React from 'react';

import GallerySection from "./gallery-section";
import PhotoGallery from '../../images/photo.svg';
import VideoGallery from '../../images/Video.svg';
import ReactPlayer from "react-player";


class Gallery extends React.Component {
	render() {
		return (
			<div id="gallery">
				<GallerySection />

				<div className="gallery-section2">
					<div className="photo-gallery">
						<div className="image-holder">
							<img src={PhotoGallery} />
						</div>
						<a href="#">Photo Gallery</a>
					</div>
					<div className="video-gallery">
						<div className="image-holder">
							<img src={VideoGallery} />
						</div>
						<a href="#">Video Gallery</a>
					</div>
				</div>
				<div className="gallery-section3">
					<p>Demo Team Video</p>
					<div className="youtube-holder">
						<ReactPlayer wid url="https://www.youtube.com/watch?v=XL9Cpak6jyg" width='100%' height='100%' />
					</div>
				</div>
			</div>
		);
	}
}
export default Gallery;