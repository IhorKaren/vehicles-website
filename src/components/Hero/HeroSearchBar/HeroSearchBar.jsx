import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import { CATEGORIES, CUISINES } from '@/constants';
import { AppSelect } from '@/shared';
import { useTheme } from '@emotion/react';
import { SearchWrapper } from './HeroSearchBar.styled';
import { useForm } from 'react-hook-form';

export const HeroSearchBar = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  const theme = useTheme();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleInputChange = (e) => {
    setSearchParams({ ...params, [e.target.name]: e.target.value });
  };

  return (
    <SearchWrapper>
<form onSubmit={handleSubmit(onSubmit)}>


      <AppSelect
      control={control}
      errors={errors}
        options={[...CATEGORIES, 'All']}
        label={'Category'}
        name="category"
        onChange={handleInputChange}
        value={params.category || ''}
      />
      <AppSelect
         control={control}
         errors={errors}
        options={[...CUISINES, 'All']}
        label={'Cuisine'}
        name="cuisine"
        onChange={handleInputChange}
        value={params.cuisine || ''}
      />
      <AppSelect
         control={control}
         errors={errors}
        options={['Vegan', 'Not vegan', 'All']}
        label={'Vegan type'}
        name="type"
        onChange={handleInputChange}
        value={params.type || ''}
      />
      </form>
    </SearchWrapper>
  );
};