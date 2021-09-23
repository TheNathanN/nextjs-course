import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/nathan.jpeg'
          alt='An image showing Nathan'
          width={300}
          height={300}
        />
      </div>
      <h1>{`Hi, I'm Nathan`}</h1>
      <p>I do web development with technologies like NextJS, HTML and CSS.</p>
    </section>
  );
};

export default Hero;
