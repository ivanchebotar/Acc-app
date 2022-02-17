import iconEye from './../../assets/images/icon-eye.svg';
import iconEyeBlocked from './../../assets/images/icon-eye-blocked.svg';

export const signInTemplate = `
  <h1 class="section-title">Account Sign in</h1>
  <div class="form-holder">
    <div class="form-holder-inputs">
      <div class="input-holder">
        <input type="email" id="login" placeholder="Enter your email">
        <span id="hintErrorLogIn" class="hint">invalid login or username</span>
      </div>
      <div class="input-holder">
        <input type="password" id="password" placeholder="Enter your password">
        <span fill="#666" id="showPasswordIn" class="icon-eye"></span>
        <span id="hintErrorPass" class="hint">invalid password</span>
      </div>
    </div>
    <div class="form-holder-btn">
      <button class="btn btn-submit" id="button" disabled>Sign in</button>
    </div>
  </div>

  <style>
    *,
    :after,
    :before {
      box-sizing: inherit;
    }
    main {
      padding: 50px 0;
    }
    img {
      max-width: 100%;
      height: auto;
      vertical-align: top;
    }
    .btn {
      outline: 0;
      cursor: pointer;
      display: block;
      border: 0;
      padding: 17px 0 15px;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
      user-select: none;
    }
    .btn-submit {
      transition: box-shadow 0.3s ease;
      background-color: #030303;
      color: #fafafa;
    }
    .btn-submit:hover {
      box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.67);
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .btn:disabled:hover {
      box-shadow: none;
    }
    @font-face {
      font-family: Nexa;
      src: url(../fonts/Nexa.otf);
    }
    .input-holder {
      margin: 0 0 30px;
    }
    input {
      transition: border 0.3s ease;
      background-color: transparent;
      border-bottom: 1px solid #fafafa;
      outline: 0;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-radius: 0;
      padding: 10px 50px 10px 20px;
      width: 100%;
      font-size: 16px;
      color: #fafafa;
      font-family: Roboto, sans-serif;
      letter-spacing: 0.2px;
      user-select: none;
    }
    input:disabled {
      opacity: 0.5;
    }
    input::placeholder {
      color: #fafafa;
      font-size: 16px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    input:focus {
      border-bottom: 1px solid #030303;
    }
    input[type="password"] {
      padding: 10px 60px 10px 20px;
    }
    .input-holder {
      position: relative;
    }
    .input-holder .icon-eye {
      position: relative;
      top: -2px;
      right: 18px;
      cursor: pointer;
      user-select: none;
    }
    .input-holder .icon-eye:before {
      content: '';
      background: url(${iconEye});
      width: 20px;
      height: 20px;
      opacity: 0.8;
      position: absolute;
      top: 0;
      right: 0;
    }
    .input-holder .icon-eye.active:before {
      background: url(${iconEyeBlocked});
    }
    input[type="file"] {
      display: none;
      border: 0;
    }
    .avatar-upload {
      margin: 0 auto 50px;
      width: 100px;
      height: 100px;
      display: block;
      cursor: pointer;
      color: #030303;
      font-size: 14px;
      user-select: none;
      border: 1px solid #030303;
      padding: 4px;
      border-radius: 50%;
      position: relative;
      transition: all 0.3s ease;
    }
    .avatar-upload:hover {
      color: #fafafa;
      border: 1px solid #fafafa;
    }
    .avatar-upload img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }
    .hint {
      color: #f00;
      padding: 0 20px;
      font-size: 12px;
      display: none;
      position: absolute;
      left: 0;
      bottom: -20px;
    }
    .hint.active {
      display: block;
    }
    .picture-hint {
      padding: 10px 0 0;
      font-size: 12px;
      display: block;
      text-align: center;
    }
    .picture-hint.success {
      visibility: hidden;
      position: relative;
    }
    .picture-hint.success:after {
      visibility: visible;
      position: absolute;
      top: 10px;
      left: 0;
      color: #32CD32;
      font-size: 12px;
      content: "success";
      line-height: 1.3;
      width: 100%;
    }
    .picture-hint.error {
      visibility: hidden;
      position: relative;
    }
    .picture-hint.error:after {
      visibility: visible;
      position: absolute;
      top: 10px;
      left: 0;
      color: #f00;
      font-size: 12px;
      content: "unsupported file";
      line-height: 1.3;
      width: 100%;
    }
    @media (min-width: 768px) {
      .avatar-upload {
        font-size: 16px;
      }
    }
    .avatar-upload:hover:before {
      color: #fafafa;
    }
    a {
      transition: color 0.3s ease;
      color: #030303;
      text-decoration: none;
    }
    .container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 30px;
      padding-right: 30px;
      max-width: 1200px;
    }
    .page-holder {
      padding-bottom: 20px;
    }
    .picture-holder {
      width: 100px;
      margin: 0 auto;
    }
    .picture-holder img {
      border-radius: 50%;
    }
    .section-title {
      text-align: center;
      color: #fafafa;
      margin: 0 0 50px;
      padding: 0;
    }
    .form-section {
      padding: 80px 0;
    }
    .form-holder {
      max-width: 400px;
      margin: 0 auto;
    }
    .form-holder-inputs {
      margin: 0 0 50px;
    }  
  </style>
`