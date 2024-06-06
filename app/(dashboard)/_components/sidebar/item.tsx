"use client"
import Image from "next/image";
import {
    useOrganizationList,
    OrganizationList, useOrganization
} from "@clerk/nextjs";
import {cn} from "@/lib/utils";
import {Hint} from "@/components/hint";

interface ItemProps {
    id: string,
    name: string,
    imageUrl: string,
}

const Item = ({id,name,imageUrl}: ItemProps) => {
    const {organization} = useOrganization();
    const {setActive} = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;
        setActive({organization:id});
    };
    return (
        <div className="aspect-square relative ">
            <Hint label={name}
                side="right"
                align="start"
                sideOffset={18}>
            <Image src={imageUrl}
                   alt={name}
                   onClick={onClick}
                   fill
                   className={cn("rounded-md", "cursor-pointer text-opacity-50 hover:text-opacity-100 transition",
                       isActive && "text-opacity-100"
                       )}
            />
            </Hint>
        </div>
    );
};

export default Item;
