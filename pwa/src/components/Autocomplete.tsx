import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Bird } from '../api/hello';

export interface AutocompleteProps {
 birds: Bird[]
 setSelected: (id: string | null) => void
}

export default function ComboBox(props: AutocompleteProps) {
  return (
    <Autocomplete
      disablePortal
      onChange={(event, value: Bird | null) => props.setSelected(value?.id || null) }
      id="combo-box-input"
      options={props.birds}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Bird" />}
    />
  );
}
