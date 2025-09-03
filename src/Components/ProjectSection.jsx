import { ArrowRightIcon, ExternalLink, Github } from "lucide-react"

const projects=[
    {
        id:1,
        title:"Todo-List",
        description:"This is a To-Do List application built using TypeScript and powered by Vite for fast development and build performance.The app provides a modern and responsive user interface, making task management simple and visually appealing.",
        image:"/public/todo.png",
        tags:["React","TaiwindCss","Typescript","Vite"],
        demoUrl:"https://todo-list-ashen-one.vercel.app/",
        githubUrl:"https://github.com/am-ashlesha/Todo-List "
    },
     {
        id:2,
        title:"BookLog",
        description:"Booklog is a simple and responsive book blogging platform built with HTML, CSS, PHP, and Bootstrap, designed for sharing and exploring book reviews effortlessly.",
        image:"/public/booklog.png",
        tags:["HTML Bootstrap","Php","MySQL"],
        demoUrl:"https://thebooklog-two.vercel.app/",
        githubUrl:"https://github.com/am-ashlesha/thebooklog "
    },
     {
        id:3,
        title:"Pixplorer",
        description:"A dynamic React-based gallery application that fetches and displays images based on user search input, providing a fast, responsive, and visually appealing way to explore pictures.",
        image:"/public/pixplorer.png",
        tags:["React","TaiwindCss",],
        demoUrl:"https://react-pixplorer.vercel.app/",
        githubUrl:"https://github.com/am-ashlesha/React-Pixplorer"
    },
]

export const ProjectSection=()=>
{
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{" "}
                    Featured
                    <span className="text-primary">Projects</span></h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl  mx-auto">
                        Here are some of my projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project,key)=>(
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                                <div className="h-50  overflow-hidden">
                                    <img src= {project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                                </div>
                                
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                   <a href={project.demoUrl}
                   target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration/300">
                    <ExternalLink size={20}/>
                   </a>
                    <a href={project.githubUrl}
                   target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration/300">
                    < Github size={20}/>
                   </a>
                               
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a className="cosmic-button w-fit flex items center mx-auto gap-2" href="https://github.com/am-ashlesha" target="_blank">
                            Check My Github<ArrowRightIcon size={16}/>
                            </a>
                    </div>
            </div>
            
        </section>
    )
}
