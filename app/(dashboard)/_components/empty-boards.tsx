"use client";

import Image from "next/image";
import {useRouter} from "next/navigation";

export function EmptyBoards() {
    const router = useRouter();
    // const { organization } = useOrganization();
    // const { mutate: create, isLoading } = useApiMutation(api.board.create);

    // const handleClick = () => {
    //     if (!organization) return;
    //
    //     create({
    //         title: "Untitled",
    //         orgId: organization.id,
    //     })
    //         .then((id) => {
    //             toast.success("Board created");
    //             router.push(`/board/${id}`);
    //         })
    //         .catch(() => {
    //             toast.error("Failed to create board");
    //         });
    // };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" alt="Empty" height={110} width={110}/>
            <h2 className="text-2xl font-semibold mt-6">Создайте вашу первую доску</h2>
            <p className="text-muted-foreground text-sm mt-2">
                Начните с создания доски для вашей организации
            </p>
            {/*<div className="mt-6">*/}
            {/*    <Button size="lg" onClick={handleClick} disabled={isLoading}>*/}
            {/*        Create board*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </div>
    );
}
