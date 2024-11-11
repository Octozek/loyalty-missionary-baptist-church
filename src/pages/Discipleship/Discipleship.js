// src/pages/Discipleship/Discipleship.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const Discipleship = () => (
  <PageLayout
    title="Discipleship"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-Discipleship.jpg`} // Ensure this image is available in assets
  >
    <section className="content-section">
      <h2>Following Christ’s Path</h2>
      <div className="text-with-image">
        <p>
          At Loyalty Missionary Baptist Church, discipleship means following Christ’s teachings and living out our faith daily. We’re committed to nurturing a community of disciples who are dedicated to personal growth and spiritual learning.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Walking in Faith" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Then Jesus said to his disciples, 'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.'" - <strong>Matthew 16:24</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Why Discipleship Matters</h2>
      <div className="text-with-image flip">
        <p>
          Discipleship is central to our mission, helping individuals grow in faith and wisdom. Through studying the Bible, prayer, and fellowship, our members learn to reflect Christ in all areas of life.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Growing in Faith" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "But grow in the grace and knowledge of our Lord and Savior Jesus Christ." - <strong>2 Peter 3:18</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Join a Discipleship Group</h2>
      <div className="text-with-image">
        <p>
          We invite you to join a discipleship group and deepen your relationship with God alongside others. These groups provide a supportive environment where members learn, share, and grow together in their journey of faith.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Community of Disciples" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Therefore go and make disciples of all nations." - <strong>Matthew 28:19</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default Discipleship;
