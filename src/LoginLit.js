import { LitElement, html, css } from 'lit-element';
import './login-litelement';

export class LoginLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean }
    };
  }

  static get styles() {
    return css`
        login-litelement {
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
    `;
  }

  render() {
    return html`
        ${ this.login 
          ? html`<h1>Welcome to QwertPy!!</h1>` 
          : html` <login-litelement @signin="${ this._hiddenLogin }"></login-litelement> ` }
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}
