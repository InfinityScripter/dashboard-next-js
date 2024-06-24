'use client';

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { Input } from "@/components/ui/input";
import debounce from  "lodash/debounce";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");

    const debouncedUpdateUrl = useCallback(
        debounce((queryValue: string) => {
            const url = qs.stringifyUrl(
                {
                    url: "/",
                    query: { search: queryValue },
                },
                { skipEmptyString: true, skipNull: true }
            );
            router.push(url);
        }, 500),
        [router]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedUpdateUrl(newValue);
    };


    useEffect(() => {
        return () => {
            debouncedUpdateUrl.cancel();
        };
    }, [debouncedUpdateUrl]);

    return (
        <div className="w-full relative">
            <Search
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <Input
                className="w-full max-w-[516px] pl-9"
                placeholder="Search boards"
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};

