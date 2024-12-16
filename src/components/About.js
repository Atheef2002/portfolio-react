import AboutImg from '../IMG/About.png';


export default function About() {

    const config = {
        line1:'I’m BR Atheef Ahamath',
        line2: ' A Full-stack Developer passionate about building dynamic, user- friendly web applications.',
        line3: "Currently, Im focused on expanding my expertise in the MERN stack (MongoDB, Express, React, Node.js) to create robust and scalable applications. My skills span both the frontend, where I enjoy crafting engaging and interactive user interfaces, and the backend, where I ensure seamless integration and smooth functionality."
    }
    return (
        <section className='flex flex-col md:flex-row bg-header px-5' id='about'>
            <div className="image md:w-1/2 About-img">
                <img src={AboutImg} />
            </div>

            <div className='flex bg-header px-5 font-hero-font justify-center md:w-1/2 md:mr-14 '>
                <div className='flex flex-col justify-center text-justify About-title' >
                    <h1 className='mb-4 '>About Me</h1>
                <p className=''>Hi there! <span className='text-red-400'>{config.line1}</span>,
                    {config.line2}
                </p>
                <br />
                <p>{config.line3}</p>
             </div>
            </div>
        </section>
    );
}
