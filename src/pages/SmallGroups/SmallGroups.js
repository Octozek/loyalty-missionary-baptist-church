// src/pages/SmallGroups/SmallGroups.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const SmallGroups = () => (
  <PageLayout
    title="Small Groups"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-SmallGroups.jpg`} // Make sure this image exists in assets
  >
    <section className="content-section">
      <h2>Connecting in Faith</h2>
      <div className="text-with-image">
        <p>
          At Loyalty Missionary Baptist Church, our Small Groups provide a unique opportunity to connect deeply with others in faith, prayer, and fellowship. They are the heart of our community, where individuals support and grow with one another.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Group Fellowship" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "For where two or three gather in my name, there am I with them." - <strong>Matthew 18:20</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Why Join a Small Group?</h2>
      <div className="text-with-image flip">
        <p>
          Small Groups create a sense of belonging, providing a space to ask questions, share insights, and deepen your understanding of God’s Word. Through close fellowship, you’ll find support in both good times and difficult seasons.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Supportive Community" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Carry each other's burdens, and in this way, you will fulfill the law of Christ." - <strong>Galatians 6:2</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Get Involved</h2>
      <div className="text-with-image">
        <p>
          We encourage everyone to join a Small Group and experience the joy of sharing faith with others. Whether it’s a Bible study, a prayer group, or a fellowship gathering, there’s a place for you in our church family.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Get Involved" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Encourage one another and build each other up, just as in fact you are doing." - <strong>1 Thessalonians 5:11</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default SmallGroups;
