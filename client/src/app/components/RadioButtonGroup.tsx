import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Props {
  options: any[];
  onChange: (event: any) => void;
  selectedvalue: string;
}

export default function RadioButtonGroup({ options, onChange, selectedvalue }: Props) {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedvalue}>
        {options.map(({ value, label }) => (
          <FormControlLabel value={value} control={<Radio />} label={label} key={value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
