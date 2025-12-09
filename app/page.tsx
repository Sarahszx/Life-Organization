import { CirclePlus, CircleUserRound, FolderClosed, NotepadText, Trash } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100 p-6 grid grid-cols-[260px_1fr] gap-6">
      

      <div className="bg-blue rounded-3xl p-4 flex flex-col justify-between">

        <div className="flex flex-col gap-8">

          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-40 h-20 rounded-xl object-cover" />
            <h1 className="text-red font-bold text-4xl">Menu</h1>
          </div>

          <div className="flex flex-col gap-2">

            <div className="flex items-center bg-blue rounded-xl cursor-pointer hover:bg-blue-300 transition delay-200 duration-300 gap-3 p-2">
              <NotepadText color="#87796F" />
              <div className="text-brown font-bold">Minhas Tarefas</div>
            </div>

            <div className="flex items-center bg-blue rounded-xl cursor-pointer hover:bg-blue-300 transition delay-200 duration-300 gap-3 p-2">
             <FolderClosed color="#87796F" />
              <div className="text-brown font-bold">Pastas</div>   <CirclePlus color="#87796F" />
            </div>

            <div className="flex items-center bg-blue rounded-xl cursor-pointer hover:bg-blue-300 transition delay-200 duration-300  gap-3 p-2">
             <Trash color="#87796F" />
              <div className="text-brown font-bold">Lixeira</div> 

            </div>

          </div>
        </div>

        <div className="flex items-center gap-1 p-5 bg-green rounded-xl cursor-pointer hover:bg-lime-300 transition delay-200 duration-300 ">
           <CircleUserRound size={60} color="#87796F" />
           <div className="text-brown text-2xl font-medium">Perfil</div>
        </div>


      </div>

  conteudo principal
      <div></div>

    </div>
  );
}
