"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";
import {useOrganization} from "@clerk/nextjs";

import {api} from "@/convex/_generated/api";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {useApiMutation} from "@/hooks/useApiMutation";

export function EmptyBoards() {
    const router = useRouter();
    const { organization } = useOrganization();
    const { mutate: create, isLoading } = useApiMutation(api.board.create);

    const handleClick = () => {
        if (!organization) return;

        create({
            title: "Untitled",
            orgId: organization.id,
        })
            .then((id) => {
                toast.success("Доска создана!");
                router.push(`/board/${id}`);
            })
            .catch(() => {
                toast.error("Ошибка при создании доски");
            });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" alt="Empty" height={110} width={110}/>
            <h2 className="text-2xl font-semibold mt-6">Создайте вашу первую доску</h2>
            <p className="text-muted-foreground text-sm mt-2">
                Начните с создания доски для вашей организации
            </p>
            <div className="mt-6">
                <Button size="lg" variant="outline" onClick={handleClick} disabled={isLoading}>
                    Создать новую доску
                </Button>
            </div>
        </div>
    );
}
