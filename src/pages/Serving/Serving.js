// src/pages/Serving/Serving.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const Serving = () => (
  <PageLayout
    title="Serving"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-Serving.jpg`} // Make sure this image exists in assets
  >
    <section className="content-section">
      <h2>Why We Serve</h2>
      <div className="text-with-image">
        <p>
          At Loyalty Missionary Baptist Church, we believe that serving others is a direct expression of our faith. Through acts of service, we demonstrate Christ's love and fulfill His call to be His hands and feet in the world.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Serving Community" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Serve wholeheartedly, as if you were serving the Lord, not people." - <strong>Ephesians 6:7</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Opportunities to Serve</h2>
      <div className="text-with-image flip">
        <p>
          Our church provides a variety of ways to serve, from local outreach to global missions, children's ministry to worship teams. There’s a place for everyone to use their gifts for God's glory.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Opportunities to Serve" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace." - <strong>1 Peter 4:10</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Join Us in Serving</h2>
      <div className="text-with-image">
        <p>
          We invite you to join us in making a difference. Whether it’s through prayer, action, or financial support, each act of service contributes to our mission of spreading God’s love.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Join Us in Serving" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." - <strong>Matthew 5:16</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default Serving;
