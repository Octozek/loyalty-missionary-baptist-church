// src/pages/Membership/Membership.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const Membership = () => (
  <PageLayout
    title="Membership"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-Membership.jpg`} // Ensure the background image exists in assets
  >
    <section className="content-section">
      <h2>Why Become a Member?</h2>
      <div className="text-with-image">
        <p>
          Becoming a member of Loyalty Missionary Baptist Church means joining a community dedicated to growing in faith, serving others, and living out the teachings of Jesus Christ. Membership is a commitment to our values and mission.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Church Membership" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "For where two or three gather in my name, there am I with them." - <strong>Matthew 18:20</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Member Benefits</h2>
      <div className="text-with-image flip">
        <p>
          As a member, you’ll receive support and fellowship from our church family, participate in impactful ministries, and have the opportunity to contribute to meaningful causes in our community and beyond.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Church Community" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Carry each other’s burdens, and in this way you will fulfill the law of Christ." - <strong>Galatians 6:2</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>How to Join</h2>
      <div className="text-with-image">
        <p>
          To become a member, we invite you to attend our membership classes, where you’ll learn about our mission, beliefs, and the importance of serving with humility and grace.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Joining the Church" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "As each has received a gift, use it to serve one another, as good stewards of God's varied grace." - <strong>1 Peter 4:10</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default Membership;
