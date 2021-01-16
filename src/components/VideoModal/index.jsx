import React from "react";
import "./videoModal.scss";

const VideoModal = () => {
  const carouselList = [
    { id: 1, url: "https://www.youtube.com/embed/5IMIdd3iq6A" },
    { id: 2, url: "https://www.youtube.com/embed/JKNv2YfrM7Y" },
    { id: 3, url: "https://www.youtube.com/embed/m8y4zigvplE" },
    { id: 4, url: "https://www.youtube.com/embed/dsOSmQl2yA8" },
    { id: 5, url: "https://www.youtube.com/embed/CtmcwhzzjXQ" },
  ];
  const renderModal = () => {
    return carouselList.map((carousel, index) => {
      return (
        <div key={index} className="modal" id={`carouselModal${carousel.id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                  <img src="../images/videoModal/close.png" alt="close" />
                </button>
                <iframe
                  src={carousel.url}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="tix-modal">
      <div className="container">
        {/* The Modal Carousel Item 1 */}
        {renderModal()}
      </div>
    </div>
  );
};

export default VideoModal;
