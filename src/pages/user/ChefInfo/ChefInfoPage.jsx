import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import { getChefById } from "@/api/chef/getChefById";
import { getDishes } from "@/api/dishes/getDishes";
import NoFoundDish from "@/assets/images/Dishes_page/NoDishesFound.png";
import { DishCardSkeleton } from "@/components/DishCardSkeleton/DishCardSkeleton";
import DishesList from "@/components/DishesList/DishesList";
import PageMessage from "@/components/PageMessage/PageMessage";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import ChefProfile from "@/components/Profiles/ChefProfile/ChefProfile";
import { addSpacesToPhoneNumber } from "@/helpers";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  InfiniteScrollStyled,
  SkeletonCardItem,
  SkeletonWrapper,
} from "../Dishes/DishesPage.styled";

const ChefInfoPage = () => {
  const { chefId } = useParams();
  const [chefInfo, setChefInfo] = useState();
  const menuSectionRef = useRef(null);
  const [totalPages, setTotalPages] = useState(null);

  const fetchChefData = async () => {
    try {
      const response = await getChefById(chefId);

      const chef = {
        chefId: response.id,
        name: response.userId?.firstName + " " + response.userId?.lastName,
        avatar: response?.avatar,
        phoneNumber: addSpacesToPhoneNumber(response?.phoneNumber),
        address: response.address,
        rate: response.rating,
        certificate: response?.certificate,
        accountStatus: response.accountStatus.toUpperCase(),
        isAvailable: response.isAvailable.toUpperCase(),
      };
      setChefInfo(chef);
    } catch (error) {
      console.error("Error fetching chef data:", error);
    }
  };

  const fetchDishes = async ({ pageParam }) => {
    const res = await getDishes({
      chef: chefId,
      pageParam,
      limit: 10,
    });
    setTotalPages(res.pageInfo.totalPages);
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["dishesPage", chefId],
    queryFn: fetchDishes,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  let dishes = [];
  if (data && data.pages) {
    dishes = data.pages
      .map((item) => {
        return item.dishes;
      })
      .reduce((acc, item) => [...acc, ...item], []);
  }

  const qtyDishes = dishes?.length;
  console.log();
  useEffect(() => {
    fetchChefData();
  }, [chefId]);

  return (
    <Main>
      <AppContainer>
        {chefInfo && (
          <ChefProfile chefInfo={chefInfo} sectionRef={menuSectionRef} />
        )}
        <Box ref={menuSectionRef}>
          <PageTitle>MENU</PageTitle>
          <Box style={{ margin: "50px 0" }}>
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
                message={`Uh-oh! ${chefInfo?.name} doesn't have any dish :(`}
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
                {dishes && <DishesList data={dishes} />}
              </InfiniteScrollStyled>
            )}
          </Box>
        </Box>
      </AppContainer>
    </Main>
  );
};

export default ChefInfoPage;
