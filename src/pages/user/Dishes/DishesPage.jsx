import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getDishes } from "@/api/dishes/getDishes";
import NoFoundDish from "@/assets/images/Dishes_page/NoDishesFound.png";
import { DishCardSkeleton } from "@/components/DishCardSkeleton/DishCardSkeleton";
import DishesList from "@/components/DishesList/DishesList";
import { DishesSearchBar } from "@/components/DishesSearchBar/DishesSearchBar";
import PageMessage from "@/components/PageMessage/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  InfiniteScrollStyled,
  SkeletonCardItem,
  SkeletonWrapper,
} from "./DishesPage.styled";

const DishesPage = () => {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPage] = useState(null);

  const LIMIT = 10;

  const { search, category, cuisine, type, spiceLevel } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const [searchTerm, setSearchTerm] = useState(search || null);
  const debounceDelay = 500;

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

  const fetchDishes = async ({ pageParam }) => {
    const res = await getDishes({
      search,
      cuisine: cuisine === "All" ? "" : cuisine,
      isVegan: type === "All" ? "" : type,
      category: category === "All" ? "" : category,
      spiceLevel: spiceLevel === 0 ? "" : spiceLevel,
      pageParam,
      LIMIT,
    });

    setTotalPage(res.pageInfo.totalPages);
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["dishesPage", searchTerm, category, cuisine, type, spiceLevel],
    queryFn: fetchDishes,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  let dishes;
  if (data) {
    dishes = data.pages
      .map((item) => {
        return item.dishes;
      })
      .reduce((acc, item) => [...acc, ...item], []);
  }

  const qtyDishes = dishes?.length;

  return (
    <Main>
      <AppContainer>
        <PageTitle>DISHES</PageTitle>

        <DishesSearchBar />
        {isLoading ? (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <DishCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        ) : qtyDishes === 0 ? (
          <PageMessage
            image={NoFoundDish}
            message="Uh-oh! It looks like the dish of your dreams is playing hide. No
            luck this time. Maybe You need to tweak your search criteria."
          ></PageMessage>
        ) : (
          <InfiniteScrollStyled
            dataLength={qtyDishes}
            scrollThreshold={0.6}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            height={800}
            loader={<h3>Loading...</h3>}
          >
            <DishesList data={dishes} />
          </InfiniteScrollStyled>
        )}
      </AppContainer>
    </Main>
  );
};

export default DishesPage;

// http://localhost:4000/api/dishes?chef=dssddd&cuisine=sfsf&isVegan=true&category=sdf&spiceLevel=1&isAvailable=true
