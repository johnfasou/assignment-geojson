import { TextField } from "@mui/material"

export const Coordinate = ({
  name,
  label,
  placeholder,
  geoData,
  onChange,
}: {
  name: string
  label: string
  placeholder: string
  geoData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <TextField
      name={name}
      value={geoData}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      sx={{
        borderRadius: "7px",
        margin: "15px",
      }}
    />
  )
}
