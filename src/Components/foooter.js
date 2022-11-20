import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Foooter() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </button>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </button>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </button>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </button>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </button>
          <button href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </button>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Crystal Island
              </h6>
              <p>
                Always looking to achieve 100% customer satisfaction. Please
                contact us with any questions or concerns. Thank you!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <button href="#!" className="text-reset">
                  Crystals
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Jewelry
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Tapestries
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Furniture
                </button>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <button href="#!" className="text-reset">
                  Pricing
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Settings
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Orders
                </button>
              </p>
              <p>
                <button href="#!" className="text-reset">
                  Help
                </button>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Salt Lake, UT 84123, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tevinpulley@gmai.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + (801)-493-9170
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Crystal-Island.com
        </a>
      </div>
    </MDBFooter>
  );
}
