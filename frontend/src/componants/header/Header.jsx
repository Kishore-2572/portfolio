import React from 'react';
import './header.css';
import CTA from './Cta';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Kishore</h1>
        <h5 className="text-light">MERNstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src="https://lh3.googleusercontent.com/a-78v77i780q4RCuw0R7TEyoxZSK8ek94OkOeZ2E5IVZrBg6EEwZATn4bS2d0xpxpj4HiNjSlnE3pC0M4vTgLsyOyvBDGGOA_gaDSY7XcA0rRt9x5QgLmVjxoixU4xT3ZJdcjqI3IqZNwfQuEaU9zBMZmWTDe1cmnkpXDYz1TdeOKyBCjv30uBQUKx4qgp2MsSR55CEDJSBhHGbRam_ng7FrhiNasS9QP1sg4AFHNaCA-BgUuJnRjRifGpe87me2GSksWGR5dJxs56RYrr4a1v7s2SptQERoVWltOIRjS6pAGkaffYKadOQK0dGnXjWxXgkehRFEbs7QXiyHKOeo3R5sj8cpDYHgNsFOI-pv0hkuy-96r3lsNBKYhYZCyT7tLP7GY8fLld8vzxuWYRsBWARvs3AV4VA6M6R4LykmXs5-at_yFGvb5OS7Gdi2ckUkmIiQh9GDHpueFqgu00s8uHE9b2xzQvCzRgAdcrZOA0Ed_fQxaxOdEmY7CeYG9e268QCrGCZTNkWqjZf8-vkTPqdb2mzjYMSXGtFKLiQL8xuUO-kfCmddMjgUScdvZBJTvSjGNqN5VtZfOEI01OlLXkSSxOq4i1t9l1NbIsmf8WK4hldD4GQMy_UO88Qn-WeeKVTKTRIHbE_b39McDx4QKu4XWqBOW5tiBaQaFUcDE9eJsrRh77_SujR6rXanDoWaIuq_2YHMHy1SC_EB8z89aftIc69Qip86Full8ucDXj1SIYbuR_sorslkYHUluAy-OEdZcAuN5CmT8aKlmOnJnB1QK2jY1XQc8zzjJFI_l26Kyc_Nk2GsOFoFhb4sAdEXkcMVGzUX1EeH_PnS7zdz2tH0qRKXUL5crwlJmkmV3sblWRCjv4VM85UlPv2HNEaR6gtzF7wC0qkgnl6W4sqDir8YW_lSRUcUxC76ZAoFxa9NuE-iPsf5YD4sq9zDzBP1POC_hwO033lOfvCxXgVTF6-DSztAe2zllb02z5zbtdpuXBe0nlNSIyFDhw=w638-h955-no?authuser=1" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
