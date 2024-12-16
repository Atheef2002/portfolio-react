import MalcomLab from '../IMG/MalcolmLab.png'

export default function Projects(){

    const config = {
        projects: [
            {
                image: MalcomLab,
                title:'Photography Website',
                description: 'Basic photography website built with HTML, CSS, and JavaScript.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: MalcomLab,
                title: 'Photography Website',
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: MalcomLab,
                title: 'Photography Website',
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            },
            {
                image: MalcomLab,
                title: 'Photography Website',
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-start hero-section-bg" id='project'>
        <div className="w-full About-title mb-6">
            <div className="flex flex-col px-10">
                <h1>Projects</h1>
            </div>
        </div>

        {/* Project Grid */}
        <div className="w-full place-items-center">
            <div className='flex flex-col md:flex-row gap-10 justify-center px-10'>
                {/* Project 1 */}
               
                    {config.projects.map((project) => (
                        
                        <div className="project-card ">
                            <img src={project.image} />
                            <div className="project-info">
                                <h1 className='font-bold'>{project.title}</h1>
                                <p>{project.description}</p>
                                <a target='_blank' className='btn' href={project.link}>View Project</a>
                            </div>
                            
                        </div>
                        
                    ))}
                
                

            </div>
        </div>
    </section>
}