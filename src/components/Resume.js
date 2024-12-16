import AboutImg from '../IMG/About.png';


export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-header px-5' id='resume'>
        <div className="image md:w-1/2 About-img">
            <img src={AboutImg} />
        </div>

        <div className='flex bg-header px-5 font-hero-font justify-center md:w-1/2 md:mr-14 '>
            <div className='flex flex-col justify-center text-justify About-title' >
                <h1 className='mb-4 '>My Resume</h1>
                <p className=''>
                    You can vie my resume <a className='btn' href="">Download</a>
                </p>
                
            </div>
        </div>
    </section>
}