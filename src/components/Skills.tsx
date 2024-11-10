import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-down">
                <h2 className='text-4xl md:text-5xl text-[#86c232]' data-aos="zoom-in-down">Technologies I work with</h2>
                <p className='text-black-500 pt-2'>
                I am efficient web developer with expertise in HTML, CSS, JavaScript, and TypeScript, ensuring reliable, maintainable code. Proficient in frameworks like Tailwind CSS, Next.js, and React, you specialize in creating responsive, high-performance user experiences. Your focus on detail, code efficiency, and staying updated with the latest tools makes you a valuable asset to any team
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-yellow-500 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-down">Typescript</h2>
                    <h2 data-aos="zoom-in-down">React.js</h2>
                    <h2 data-aos="zoom-in-down">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2 data-aos="zoom-in-down">Tailwind</h2>
                    <h2 data-aos="zoom-in-down">CSS</h2>
                    <h2 data-aos="zoom-in-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
