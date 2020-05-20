import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faSearch } from "@fortawesome/free-solid-svg-icons";

export function HeaderTop() {
  return (
    <>
      <div className="top-header-area">
        <Container className="h-100">
          <Row className="h-100 align-items-center">
            <Col xs="12" className="d-flex align-items-center justify-content-between">
              <div className="logo">
                <Link href="/">
                  <img src="img/core-img/logo.png" alt="logo" />
                </Link>
              </div>

              <div className="search-login-area d-flex align-items-center">
                <div className="top-search-area">
                  <form action="#" method="post">
                    <input type="search" name="top-search" id="topSearch" placeholder="Search" />
                    <button type="submit" className="btn">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </div>

                <div className="login-area">
                  <Link href="/">
                    <>
                      <span>Login / Register</span>{" "}
                      <FontAwesomeIcon icon={faLock} aria-hidden="true" />
                    </>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        @import "pages/theme";
        @import "pages/responsive";

        .header-top {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 85px;
        }
        .header-search {
          position: relative;
          z-index: 1;
          form {
            position: relative;
            z-index: 1;
            width: 255px;
            @media #{$breakpoint-xs} {
              width: 120px;
              margin-left: 15px;
            }
            @media #{$breakpoint-xs-landscape} {
              width: 160px;
            }
            @media #{$breakpoint-sm} {
              width: 200px;
            }
            input {
              transition-duration: 500ms;
              position: relative;
              z-index: 1;
              width: 100%;
              height: 42px;
              background-color: #ebf5f5;
              border: none;
              color: #ababab;
              font-size: 12px;
              font-style: italic;
              padding: 0 20px;
              &:focus {
                box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.15);
              }
            }
            button {
              position: absolute;
              top: 0;
              right: 0;
              height: 42px;
              z-index: 10;
              width: 50px;
              background-color: transparent;
              border: none;
              color: #555555;
              cursor: pointer;
              &:hover,
              &:focus {
                color: $hover-color;
                box-shadow: none;
              }
            }
          }
        }
        .header-login {
          position: relative;
          z-index: 1;
          a {
            display: block;
            width: 160px;
            height: 42px;
            background-color: $pri-color;
            text-align: center;
            color: #fff;
            line-height: 42px;
            font-size: 14px;
            margin-left: 10px;
            font-weight: 400;
            @media #{$breakpoint-xs} {
              width: 30px;
            }
            @media #{$breakpoint-xs-landscape} {
              width: 50px;
            }
            &:hover,
            &:focus {
              background-color: $dark-color;
              font-weight: 400;
            }
            i {
              display: none;
              line-height: 42px;
              @media #{$breakpoint-xs} {
                display: block;
              }
            }
            span {
              @media #{$breakpoint-xs} {
                display: none;
              }
            }
          }
        }
      `}</style>
    </>
  );
}
