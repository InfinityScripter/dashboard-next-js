"use client";

import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Input } from "./ui/input";

interface RenameModalProps {
    children: React.ReactNode;
    onConfirm: (newTitle: string) => void;
    disabled?: boolean;
    header: string;
    initialValue: string;
}

export const RenameModal = ({
                                children,
                                onConfirm,
                                disabled,
                                header,
                                initialValue,
                            }: RenameModalProps) => {
    const [newTitle, setNewTitle] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{header}</AlertDialogTitle>
                    <AlertDialogDescription>
                        <Input
                            type="text"
                            value={newTitle}
                            onChange={handleChange}
                            placeholder="Enter new board name"
                        />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={() => onConfirm(newTitle)}
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
