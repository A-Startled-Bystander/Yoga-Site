import { useEffect } from 'react';
import './AnimationScroll.css'

function AnimationScroll() {

    console.log(window.innerHeight)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>('.section');
        const windowHeight = window.innerHeight;
        console.log(sections)

        sections.forEach((section) => {

            if (section.classList.contains('active')){
                console.log(section.getBoundingClientRect());
            }


            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

      
	return (
		<div>
      <div className="init section">
        <div className="content">
          <h2>Section 1</h2>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2>Section 2</h2>
          <p>This is the second section, it reveals as you scroll down.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h2>Section 3</h2>
          <p>This is the third section, it also reveals as you scroll.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
          <p>This is the first section of the page.</p>
        </div>
      </div>
    </div>
	);
}

export default AnimationScroll
