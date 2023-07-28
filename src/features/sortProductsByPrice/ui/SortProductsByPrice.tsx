import { useUnit } from 'effector-react';
import { ChangeEvent, memo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { setSortDirection } from '../model/SortProductsByPrice';
import { SortDirectionsT, sortDirections } from '../model/types';

export const SortProductsByPrice = memo(() => {
  const onSetSortDirection = useUnit(setSortDirection);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSetSortDirection(event.currentTarget.value as SortDirectionsT);
  };

  return (
    <Select
      onChange={onChange}
    >
      <option
        value={sortDirections.ASC}
      >
        Порядок: сперва дешевле
      </option>
      <option
        value={sortDirections.DESC}
      >
        Порядок: сперва дороже
      </option>
    </Select>
  );
});
