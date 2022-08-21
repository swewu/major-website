import React from 'react'

const indextwo = () => {
  return (
    <>

      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +66 666 666</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" value="" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" value="" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" value="" />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" value="" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{
        `
          *, *:before, *:after {
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        body {
          background-image: url("https://i.pinimg.com/originals/04/fa/62/04fa627a7476f8fdbc686f6b68ee98ba.jpg");
          font-size: 12px;
          object-fit: cover
        }
        
        body, button, input {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          letter-spacing: 1.4px;
        }
        
        .background {
          display: flex;
          min-height: 100vh;
        }
        
        .container {
          flex: 0 1 700px;
          margin: auto;
          padding: 10px;
        }
        
        .screen {
          position: relative;
          background: #3e3e3e;
          border-radius: 15px;
        }
        
        .screen:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 20px;
          right: 20px;
          bottom: 0;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
          z-index: -1;
        }
        
        .screen-header {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          background: #4d4d4f;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
        
        .screen-header-left {
          margin-right: auto;
        }
        
        .screen-header-button {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin-right: 3px;
          border-radius: 8px;
          background: white;
        }
        
        .screen-header-button.close {
          background: #ed1c6f;
        }
        
        .screen-header-button.maximize {
          background: #e8e925;
        }
        
        .screen-header-button.minimize {
          background: #74c54f;
        }
        
        .screen-header-right {
          display: flex;
        }
        
        .screen-header-ellipsis {
          width: 3px;
          height: 3px;
          margin-left: 2px;
          border-radius: 8px;
          background: #999;
        }
        
        .screen-body {
          display: flex;
        }
        
        .screen-body-item {
          flex: 1;
          padding: 50px;
        }
        
        .screen-body-item.left {
          display: flex;
          flex-direction: column;
        }
        
        .app-title {
          display: flex;
          flex-direction: column;
          position: relative;
          color: #ea1d6f;
          font-size: 26px;
        }
        
        .app-title:after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 25px;
          height: 4px;
          background: #ea1d6f;
        }
        
        .app-contact {
          margin-top: auto;
          font-size: 8px;
          color: #888;
        }
        
        .app-form-group {
          margin-bottom: 15px;
        }
        
        .app-form-group.message {
          margin-top: 40px;
        }
        
        .app-form-group.buttons {
          margin-bottom: 0;
          text-align: right;
        }
        
        .app-form-control {
          width: 100%;
          padding: 10px 0;
          background: none;
          border: none;
          border-bottom: 1px solid #666;
          color: #ddd;
          font-size: 14px;
          text-transform: uppercase;
          outline: none;
          transition: border-color .2s;
        }
        
        .app-form-control::placeholder {
          color: #666;
        }
        
        .app-form-control:focus {
          border-bottom-color: #ddd;
        }
        
        .app-form-button {
          background: none;
          border: none;
          color: #ea1d6f;
          font-size: 14px;
          cursor: pointer;
          outline: none;
        }
        
        .app-form-button:hover {
          color: #b9134f;
        }
        
        .credits {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          color: #ffa4bd;
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 16px;
          font-weight: normal;
        }
        
        .credits-link {
          display: flex;
          align-items: center;
          color: #fff;
          font-weight: bold;
          text-decoration: none;
        }
        
        .dribbble {
          width: 20px;
          height: 20px;
          margin: 0 5px;
        }
        
        @media screen and (max-width: 520px) {
          .screen-body {
            flex-direction: column;
          }
        
          .screen-body-item.left {
            margin-bottom: 30px;
          }
        
          .app-title {
            flex-direction: row;
          }
        
          .app-title span {
            margin-right: 12px;
          }
        
          .app-title:after {
            display: none;
          }
        }
        
        @media screen and (max-width: 600px) {
          .screen-body {
            padding: 40px;
          }
        
          .screen-body-item {
            padding: 0;
          }
        }
        `}
      </style>
    </>
  )
}

export default indextwo