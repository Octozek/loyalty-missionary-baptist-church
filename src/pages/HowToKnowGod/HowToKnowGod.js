// src/pages/HowToKnowGod/HowToKnowGod.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const HowToKnowGod = () => (
  <PageLayout
    title="How to Know God"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-HowToKnowGod.jpg`}
  >
    <section className="content-section">
      <h2>Discovering God's Love</h2>
      <div className="text-with-image alternate">
        <p>
          Knowing God begins with understanding His love for us. At Loyalty Missionary Baptist Church, we believe that God’s love is the foundation of our faith and the starting point of our journey toward a meaningful relationship with Him.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="God's Love" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "We love because he first loved us." - <strong>1 John 4:19</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Finding Faith in Jesus Christ</h2>
      <div className="text-with-image">
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Faith in Jesus" className="section-image" />
        <p>
          Faith in Jesus is the path to a life filled with purpose and peace. He invites us all to come as we are and find hope and forgiveness in Him. This is the cornerstone of our faith journey.
        </p>
      </div>
      <blockquote className="scripture-quote">
        "Jesus said to him, 'I am the way, the truth, and the life. No one comes to the Father except through me.'" - <strong>John 14:6</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Walking with God Daily</h2>
      <div className="text-with-image alternate">
        <p>
          Walking with God means seeking His guidance in our daily lives. Through prayer, reading His Word, and fellowship with others, we draw closer to Him and grow in our faith.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Daily Walk" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Your word is a lamp for my feet, a light on my path." - <strong>Psalm 119:105</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default HowToKnowGod;
