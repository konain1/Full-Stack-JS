import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <>
        <ul class="nav justify-content-center" style={{border:'1px solid black'}}>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Our story
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              People
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Tools
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
             content
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
