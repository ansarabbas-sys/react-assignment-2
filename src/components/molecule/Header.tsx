import NavBar from "./NavBar";

export default function Header(){
    return(
        <section className="header bg-gray-50 shadow-lg border rounded-md flex flex-col sm:flex-row gap-5 justify-between mx-auto max-w-7xl p-5 mb-8 ">
            <h1 className="text-3xl font-bold sm:text-4xl text-indigo-600 text-center md:text-left">Assignemnt-3</h1>
            <NavBar />
        </section>
    )
}