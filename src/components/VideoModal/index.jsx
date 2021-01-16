import React from "react";
import "./videoModal.scss";

const VideoModal = (props) => {
  const renderModal = () => {
    return props.list.map((item, index) => {
      return (
        <div key={index} className="modal" id={`carouselModal${item.id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                  <img src="../images/videoModal/close.png" alt="close" />
                </button>
                <iframe
                  src={item.trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={index}
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
