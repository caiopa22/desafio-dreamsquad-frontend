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
      <SidebarHeader className="p-4 flex flex-row gap-4 items-center justify-center">
        <img src="/ares.png" className="h-5 w-4"/>
        <h1 className="text-2xl text-yellow-400 font-[Geist] font-semibold">Ares AI</h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full text-nowrap flex items-center justify-between gap-4 text-left px-4 py-2 hover:bg-background rounded cursor-pointer">
                Como executar frontend
                <ArrowRightIcon size={18} />
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Como executar o projeto (Vite + React)</DialogTitle>
                <DialogDescription>
                  Para rodar este projeto localmente, siga os passos abaixo:

                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    <li>
                      Certifique-se de ter o <strong>Node.js 18+</strong> instalado.
                    </li>
                    <li>
                      Clone o repositório:
                      <code className="block bg-muted px-2 py-1 rounded mt-1">git clone https://github.com/caiopa22/desafio-dreamsquad-frontend</code>
                    </li>
                    <li>
                      Acesse a pasta do projeto:
                      <code className="block bg-muted px-2 py-1 rounded mt-1">cd desafio-dreamsquad-frontend</code>
                    </li>
                    <li>
                      Instale as dependências:
                      <code className="block bg-muted px-2 py-1 rounded mt-1">npm install</code>
                    </li>
                    <li>
                      Inicie o servidor de desenvolvimento:
                      <code className="block bg-muted px-2 py-1 rounded mt-1">npm run dev</code>
                    </li>
                    <li>
                      Abra o navegador em:
                      <code className="block bg-muted px-2 py-1 rounded mt-1">http://localhost:5173</code>
                    </li>
                  </ul>

                  <p className="mt-4">
                    Para gerar a build de produção:
                  </p>
                  <code className="block bg-muted px-2 py-1 rounded mt-1">npm run build</code>

                  <p className="mt-4 text-sm text-muted-foreground">
                    Este frontend requer o backend rodando em <code>http://127.0.0.1:8000</code>.
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="w-full text-nowrap flex items-center justify-between gap-4 text-left px-4 py-2 hover:bg-background rounded cursor-pointer">
                Como executar backend
                <ArrowRightIcon size={18} />
              </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Como executar o backend</DialogTitle>
                <DialogDescription className="space-y-4 text-sm">

                  <div>
                    <h3 className="font-semibold">1. Pré-requisitos</h3>
                    <ul className="list-disc pl-5">
                      <li>Python 3.10+</li>
                      <li>Ollama instalado</li>
                      <li>Git</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">2. Clone o projeto</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      git clone https://github.com/caiopa22/desafio-dreamsquad-backend
                      <br />
                      cd desafio-dreamsquad-backend
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold">3. Ambiente virtual</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      python -m venv venv<br />
                      (Linux/Mac) source venv/bin/activate<br />
                      (Windows) venv\Scripts\activate
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold">4. Instale dependências</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      pip install -r requirements.txt
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold">5. Configure o Ollama</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      ollama serve
                    </code>
                    <code className="block bg-muted px-2 py-1 rounded mt-1">
                      ollama pull qwen2.5:7b
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold">6. Crie o .env</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      <p>LLAMA_BASE_URL=http://localhost:11434</p>
                      <p>LLM_MODEL=qwen2.5:7b</p>
                      <p>AGENT_NAME=Ares AI</p>
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold">7. Inicie o servidor</h3>
                    <code className="block bg-muted px-2 py-1 rounded">
                      uvicorn app:app --reload
                    </code>
                  </div>

                  <p className="text-muted-foreground">Rodando em:</p>
                  <code className="block bg-muted px-2 py-1 rounded">
                    http://127.0.0.1:8000
                  </code>

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
