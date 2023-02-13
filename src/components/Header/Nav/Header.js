import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <section className="navigation">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand spacer" href="#">Sarah Ellis</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link spacer" href="#anchor-projects">My Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link spacer" href="#anchor-skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link spacer" href="#anchor-contact">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
            </section>
        </header>
    )
}

export default Header;
