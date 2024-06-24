import React from 'react';
import Image from "next/image";
import {CreateOrganization} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent

} from "@/components/ui/dialog";

const EmptyOrg = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
<Image
    src="/elements.svg"
    alt="Empty Org"
    height={200}
    width={200}
    />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to Board
            </h2>
            <p className="text-muted-foreground mt-2">
                Create an organisation to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create Organisation
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[580px]">
                        <CreateOrganization  routing="hash"/>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default EmptyOrg;
