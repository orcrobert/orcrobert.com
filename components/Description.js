import styles from './Description.module.css'
import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
const Description = () => {
    return(
        <>
            <div class="w-96">
                <div className="flex">
                    <h1 class="animate-text bg-gradient-to-r
                    from-teal-500 via-purple-500 to-orange-500 
                    bg-clip-text text-transparent text-6xl font-extrabold antialiased
                    drop-shadow-lg shadow-transparent">
                        Hello There<br/>Traveler!
                    </h1>
                </div>
            </div>
            <div className='pt-6'>
                <p className="indent-4 antialiased">
                    My name is Robert and I'm a Computer Science student.
                    I have always enjoyed solving problems and since I have
                    been introduced to programming I have been obsessed with creating useful and
                    aesthetic pieces of software. Endlessly trying to perfect myself and my 
                    knowledge in this field. For me, developing has always been a passion and
                    I always get excited when I learn about a new technology.
                </p>
                <p className="indent-4 pt-4 antialiased">
                    I gravitate towards new and interesting
                    things, but that also serve a pragmatic purpose. As for the technical part,
                    I can say I have tried most things. Going from complex algorithms, to
                    web development, to writing malware! Right now, I'm trying to enrich
                    my front-end skills and maybe, in the near future start a big 
                    project.
                </p>
            </div>
        </>
    )
}

export default Description