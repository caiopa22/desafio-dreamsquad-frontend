import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { showToast } from "../utils/toast";


interface Props {
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    prompt?: string;
    onSubmit?: () => void;
    loading: boolean;
}

export default function ChatInput({ setPrompt, prompt, onSubmit, loading }: Props) {
    return (
        <div className="flex items-center gap-4 rounded-xl ">
            <Textarea
                disabled={loading}
                placeholder="Digite sua mensagem..."
                value={prompt}
                rows={3}
                onChange={(e) => {
                    setPrompt(e.target.value);
                }}
                className="resize-none overflow-hidden w-full font-[Geist] !text-lg focus:outline-none "
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (prompt && onSubmit) onSubmit();
                    }
                }}
            />
            <Button
                onClick={() => prompt && onSubmit?.()}
                size="icon"
                disabled={!prompt}
                className="rounded-full "
            >
                <ArrowRight />
            </Button>
        </div>
    );
}
