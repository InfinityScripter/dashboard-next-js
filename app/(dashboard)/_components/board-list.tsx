"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {EmptySearch} from "@/app/(dashboard)/_components/empy-search";
import {EmptyFavourites} from "@/app/(dashboard)/_components/empty-favourites";
import {EmptyBoards} from "@/app/(dashboard)/_components/empty-boards";
import {NewBoardButton} from "@/app/(dashboard)/_components/new-board-button";
import {BoardCard} from "@/app/(dashboard)/_components/board-сard";


interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favourites?: string;
    };
}

export function BoardList({ orgId, query }: BoardListProps) {
    const data = useQuery(api.boards.get, { orgId, ...query });


    if (data === undefined) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favourites ? "Favourite Boards" : "Team boards"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton orgId={orgId} disabled />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                    <BoardCard.Skeleton />
                </div>
            </div>
        );
    }

    if (!data?.length && query.search) {
        return <EmptySearch />;
    }

    if (!data?.length && query.favourites) {
        return <EmptyFavourites />;
    }


    if (!data?.length) {
        return <EmptyBoards />;

    }

    return (
        <div>
            <h2 className="text-3xl">
                {query.favourites ? "Любимые доски" : "Командные доски"}
            </h2>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId}/>
                {data?.map((board) => (
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavourite={board.isFavourite}

                    />
                ))}
            </div>
        </div>
    );
}
