import React from "react";
import Zoom from "react-reveal/Zoom";

import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={800}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`,
                    }}
                  />
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">Sat 4th June 2022 @10pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={800} delay={1200}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`,
                    }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">The Steelyard, London</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
