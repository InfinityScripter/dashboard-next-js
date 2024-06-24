"use client";

import EmptyOrg from "@/app/(dashboard)/_components/empty-org";
import {useOrganization} from "@clerk/nextjs";
import {BoardList} from "@/app/(dashboard)/_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}


export default function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (

  <div className="flex-1 h-[calc(100vh-80px)] p-6 ">
    {JSON.stringify(searchParams)}
    {!organization ? (<EmptyOrg/>):(       <BoardList orgId={organization.id} query={searchParams} />)}

  </div>

  );
}
