import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../components/ui/sidebar.tsx";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "../components/ui/dialog.tsx";
import { ArrowRightIcon } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center justify-center">
        <h1 className="text-2xl text-chart-5 font-[Geist] font-semibold">Ares AI</h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full text-nowrap flex items-center justify-between gap-4 text-left px-4 py-2 hover:bg-background rounded cursor-pointer">
                Como executar o projeto
                <ArrowRightIcon size={18}/>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Como executar o projeto Vite</DialogTitle>
                <DialogDescription>
                  Para rodar este projeto localmente, siga os passos abaixo:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Certifique-se de ter o Node.js instalado.</li>
                    <li>Clone o repositório: <code>git clone [URL_DO_REPOSITORIO]</code></li>
                    <li>Instale as dependências: <code>npm install</code></li>
                    <li>Execute o projeto: <code>npm run dev</code></li>
                    <li>Abra o navegador e vá para <code>http://localhost:5173</code></li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </SidebarGroup>


      </SidebarContent>

      <SidebarFooter>
        <p className="font-[Geist] text-sm text-center mb-4">Desenvolvido por Caio Pacheco</p>
      </SidebarFooter>
    </Sidebar>
  );
}
