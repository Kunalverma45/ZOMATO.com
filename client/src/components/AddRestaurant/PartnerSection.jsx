import React from "react";
import { TiTick } from "react-icons/ti";

const PartnerSection = () => {
  return (<>
    {/* Hero Section */}
          <main>
          <section className="heroR">
            <div className="heroR">
                <div className="hero-contentR">
                    <h1>Partner with Zomato <br /> and grow your business</h1>
                    <p>0% commission for the 1st month for new restaurant partners in selected cities</p>
                    <button className="register-buttonR"> <a href="/registrationR">Register your restaurant</a> </button>
                    <div className="info-cardR">
                        <div>
                            <h3>Get Started - It only takes 10 minutes</h3>
                            <p>Please be ready with the following for a smooth registration</p>
                            <div className="infoContR">
                                <div className="contLR">
                                    <ul>
                                        <li> <TiTick /> PAN card</li>
                                        <li> <TiTick /> FSSAI license</li>
                                        <li> <TiTick /> Bank account details</li>
                                    </ul>
                                </div>
                                <div className="contRR">
                                    <ul>
                                        <li> <TiTick /> Menu details and one dish image with all documents </li>
                                        <li> <TiTick /> GST number, if applicable</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div className="videoR">
                            <video controls autoPlay controlsList="nodownload" src="https://b.zmtcdn.com/data/file_assets/5835a67ef0191da3b505988b3ff9a0141720502359.mp4"></video>
                        </div>
    
                    </div>
                </div>
                <div className="hero-imageR">
                    {/* Replace with your image */}
                </div>
            </div>
          </section>
           
          {/* Why Partner Section */}
          <section className="why-partnerR">
            <div className="headerPSR">
              <div className="lineR"></div>
                <div className="partnerHeadR">
                <h2>Why should you partner with Zomato?</h2>
              </div>
              <div className="lineR"></div>
            </div>
            <div className="featuresR">
              <div className="featureR">
                <img src="/images/rest_newCust.png" alt="Attract customers" />
                  <h4>Attract new customers</h4>
                  <p>Reach the millions of people ordering on Zomato</p>
              </div>
              <div className="featureR">
                <img src="/images/rest_doordel.png" alt="Delivery convenience" />
                <h4>Doorstep delivery convenience</h4>
                <p>Easily get your orders delivered through our trained delivery partners</p>
              </div>
              <div className="featureR">
                <img src="/images/rest_support.png" alt="Hotline support" />
                <h4>Hotline support</h4>
                <p>On- call support for any issues or growth consultations</p>
              </div>
            </div>
          </section>
           
          {/* Why Partner Section */}
          <section className="why-partnerR">
            <div className="headerPSR">
              <div className="lineR"></div>
                <div className="partnerHeadR">
                <h2>Restaurant success stories</h2>
              </div>
              <div className="lineR"></div>
            </div>
            <div className="featuresR">
              <div className="featureR">
                <img src="https://b.zmtcdn.com/data/o2_assets/f596e23083bcaf7790bd06fa5bdef6641716462699.png" alt="Attract customers" />
                  <h4>Arshad Khan</h4>
                  <p>Owner - Khushboo biryani, Shillong</p><br />
                  <p>Zomato enabled me to restart my operations post-COVID when I had no hope of doing my business again. I'm grateful to the platform for helping me thrive - my online ordering business has done so well, it has even taken over my dining business!</p>
              </div>
              <div className="featureR">
                <img src="https://b.zmtcdn.com/data/o2_assets/f4bbbb9e0496d7772f44d2c0129cb0fb1716462984.png" alt="Delivery convenience" />
                <h4>Vijay</h4>
                <p>Owner - Birgo, Coimbatore</p><br />
                <p>Thanks to Zomato's invaluable support, our startup cloud kitchen has been doing wonders in the competitive food industry landscape. Their dedication to promoting local businesses and powerful reporting tools have been instrumental in our success, and we look forward to a long-term partnership.</p>
              </div>
              <div className="featureR">
                <img src="https://b.zmtcdn.com/data/o2_assets/ef35a4c36a01ebc1ab78e784986ac4af1716462944.png" alt="Hotline support" />
                <h4>Sandeep K Mohan</h4>
                <p>Owner - Mysore Raman Idli, Kerala</p><br />
                <p>Zomato helped us grow by 60% since registration, and now, we are one of the biggest vegetarian joints in Ernakulam city.</p>
              </div>
            </div>
          </section>
          </main>
          </>
  );
};

export default PartnerSection;
