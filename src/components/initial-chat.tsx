import { ArrowRight, MicIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { set } from "date-fns";
import { showToast } from "../utils/toast";

interface Props {
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    prompt?: string;
    onSubmit?: () => void;
}


export default function InitialChat({ setPrompt, prompt, onSubmit }: Props) {

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full gap-12"
        >
            <h1 className="font-[Geist] text-3xl text-foreground font-bold">
                Olá, como posso te ajudar hoje?
            </h1>
            <p className="font-[Geist] text-muted-foreground w-2/5 text-center">
                O Ares AI é um assistente de IA desenvolvido para conversar em português de forma natural, objetiva e eficiente.
                Ele responde perguntas gerais, ajuda com informações diversas e realiza cálculos matemáticos utilizando uma ferramenta dedicada para garantir precisão e segurança.
            </p>
            <div className="flex flex-col gap-4 w-2/4">
                <Textarea
                    placeholder="Digite seu prompt incrível aqui"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="resize-none font-sans !text-lg h-32"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (prompt && onSubmit) {
                                onSubmit();
                            } else {
                                showToast("Por favor, insira um prompt antes de enviar.", "error");
                            }
                        }
                    }}
                />
                <div className="w-full flex gap-4 justify-end">
                    <Button onClick={onSubmit} size="icon" className="rounded-full">
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    );
}