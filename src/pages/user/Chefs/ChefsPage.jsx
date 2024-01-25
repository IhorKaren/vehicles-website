import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getChefs } from "@/api/chef/getChefs";
import NoChef from "@/assets/images/ChefsPage/Not_found_chef.png";
import { ChefCardSkeleton } from "@/components/ChefCardSkeleton/ChefCardSkeleton";
import ChefsList from "@/components/ChefsList/ChefsList";
import { ChefsSearchBar } from "@/components/ChefsSearchBar/ChefsSearchBar";
import PageMessage from "@/components/PageMessage/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  InfiniteScrollStyled,
  SkeletonCardItem,
  SkeletonWrapper,
} from "./ChefsPage.styled";

const ChefsPage = () => {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPage] = useState(null);
  const { search, status } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const [searchTerm, setSearchTerm] = useState(search || null);
  const debounceDelay = 500;
  const LIMIT = 10;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (search === "") {
        setSearchTerm(null);
      } else {
        setSearchTerm(search);
      }
    }, debounceDelay);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, searchParams, search]);

  const fetchChefs = async ({ pageParam }) => {
    const res = await getChefs({
      search,
      pageParam,
      limit: LIMIT,
      isAvailable: status,
    });
    setTotalPage(res.pageInfo.totalPages);
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["chefsPage", searchTerm, status],
    queryFn: fetchChefs,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  let chefs;
  if (data) {
    chefs = data.pages
      .map((item) => {
        return item.mappedChefs;
      })
      .reduce((acc, item) => [...acc, ...item], []);
  }

  const qtyChefs = chefs?.length;

  return (
    <Main>
      <AppContainer>
        <PageTitle> CHEFS</PageTitle>
        <ChefsSearchBar />

        {isLoading ? (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <ChefCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        ) : qtyChefs === 0 ? (
          <PageMessage
            image={NoChef}
            message="Uh-oh! Chef not found!"
          ></PageMessage>
        ) : (
          <InfiniteScrollStyled
            dataLength={qtyChefs}
            scrollThreshold={0.6}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            height={800}
            loader={<h3>Loading...</h3>}
          >
            <ChefsList data={chefs} />
          </InfiniteScrollStyled>
        )}
      </AppContainer>
    </Main>
  );
};

export default ChefsPage;
