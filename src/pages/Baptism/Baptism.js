// src/pages/Baptism/Baptism.js
import React from 'react';
import PageLayout from '../../components/PageLayout';

const Baptism = () => (
  <PageLayout
    title="Baptism"
    backgroundImage={`${process.env.PUBLIC_URL}/assets/img-Baptism.jpg`} // Ensure the background image exists in assets
  >
    <section className="content-section">
      <h2>What is Baptism?</h2>
      <div className="text-with-image">
        <p>
          Baptism is a public declaration of faith, symbolizing a believer’s commitment to follow Jesus Christ. It represents a new beginning, washing away past sins, and stepping into a life led by faith.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Baptism Ceremony" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - <strong>Matthew 28:19</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>Why is Baptism Important?</h2>
      <div className="text-with-image flip">
        <p>
          Baptism is a significant step in a believer’s spiritual journey. It’s a public profession of faith and a personal commitment to walk in Jesus’ path, following His teachings and example.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Symbol of Faith" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life." - <strong>Romans 6:4</strong>
      </blockquote>
    </section>

    <section className="content-section">
      <h2>How to Get Baptized?</h2>
      <div className="text-with-image">
        <p>
          We invite you to join our baptism preparation classes, where you will learn about the meaning of baptism, the steps to prepare, and how to make this significant declaration of faith.
        </p>
        <img src={`${process.env.PUBLIC_URL}/assets/test-image.webp`} alt="Baptism Preparation" className="section-image" />
      </div>
      <blockquote className="scripture-quote">
        "Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins." - <strong>Acts 2:38</strong>
      </blockquote>
    </section>
  </PageLayout>
);

export default Baptism;
