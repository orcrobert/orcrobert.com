import Link from "next/link"
import Logo from "./Logo"
import { Modal, useModal, Button, Text } from "@nextui-org/react";

const Project = (props) =>{
    const { setVisible, bindings } = useModal();
    return (
        <div className="rounded-lg bg-gray-200 dark:bg-zinc-800 shadow-lg h-48
        relative hover:scale-105 hover:transition hover:ease-in-out hover:delay dark:text-zinc-200">
            <section className="flex top-2 left-56 absolute">
                <h1 className="font-bold text-2xl">{props.title}</h1>
            </section>
            <Link className="flex bottom-2 right-3 absolute"
            href={`${props.link}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
            <div className="h-full">
                <img src={props.image} 
                    className="h-full w-52 rounded-lg"
                    alt="project-pic"/>
            </div>
            <section className="invisible sm:visible sm:w-72 flex absolute left-56 top-12">
                <p className="text-md">{props.description}</p>
            </section>
            <Logo name={props.name} />
            <div className="flex absolute bottom-1 left-44">
                <Button light onPress={() => setVisible(true)}>
                    <h4 className="text-zinc-800 dark:text-zinc-100">Show more</h4>
                </Button>
            </div>
            <Modal
                scroll
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
                className="bg-zinc-200 dark:bg-zinc-800
                text-zinc-800 dark:text-zinc-100"
            >
                <Modal.Header>
                <Text id="modal-title" size={18} className="text-zinc-800 dark:text-zinc-100">
                    <header className="font-bold text-xl">Crypto Tracker 💎</header>
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Text id="modal-description" className="text-zinc-800 dark:text-zinc-100">
                    <h1 className="text-l">
                        Stack:
                    </h1>
                </Text>
                </Modal.Body>
                <Modal.Footer>
                <Button auto flat onPress={() => setVisible(false)}>
                    Close
                </Button>
                </Modal.Footer>
                <Modal.Header>
                <Text id="modal-title" size={18}>
                    Modal with a lot of content
                </Text>
                </Modal.Header>
                <Modal.Body>
                <Text id="modal-description">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum.
                </Text>
                </Modal.Body>
                <Modal.Footer>
                <Button auto flat color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
                <Button auto onPress={() => setVisible(false)}>
                    Agree
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Project