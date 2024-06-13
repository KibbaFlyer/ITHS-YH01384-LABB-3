import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2">
      <div className="justify-center items-center flex">
        <h1 className="text-center text-4xl">Hello and</h1>
        <h1 className="bg-orange-300 rounded text-4xl mx-4 p-2">welcome!</h1>
      </div>
      <h2 className="text-center text-xl m-2">This is a submission for ITHS React-course spring 2024.</h2>
      <div className="flex justify-center">
        <p className="text-center m-2 max-w-screen-lg">This application is made with Nextjs, Typescript, TailwindCSS and demonstrates some different open APIs getting called and their data presented. 
          <br/><br/>
        There are also some tests created with testing-library and Jest. 
        <br/><br/>
          Navigate to the components through the Navbar, have fun!</p>
      </div>
    </div>
  );
}
