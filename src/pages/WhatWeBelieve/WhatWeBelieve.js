// src/pages/WhatWeBelieve/WhatWeBelieve.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const WhatWeBelieve = () => (
  <PageLayout
    title="What We Believe"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-WhatWeBelieve.jpg`}
  >
    <section className="content-section">
      <h2>Our Core Beliefs</h2>
      <div className="text-with-image alternate">
        <p>
          At Loyalty Missionary Baptist Church, we are grounded in the Christian faith. We believe in the power of God's love, the grace offered through Jesus Christ, and the guidance of the Holy Spirit in our daily lives.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Faith and Worship" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - <strong>Jeremiah 29:11</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Our Mission</h2>
      <div className="text-with-image">
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Community Outreach" className="section-image" />
        <p>
          Guided by the teachings of Christ, our mission is to serve our community with compassion and integrity, creating a space where all are welcomed to worship, grow, and build strong faith.
        </p>
      </div>
      <blockquote className="scripture-quote">
        "And let us consider how we may spur one another on toward love and good deeds." - <strong>Hebrews 10:24</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Our Vision</h2>
      <div className="text-with-image alternate">
        <p>
          We envision a world transformed by faith, where everyone can experience the peace and love of Christ. Through dedicated service and discipleship, we seek to nurture spiritual growth and inspire meaningful change.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Future of Faith" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - <strong>Matthew 28:19</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default WhatWeBelieve;
