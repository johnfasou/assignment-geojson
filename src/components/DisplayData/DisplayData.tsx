import { Paper } from "@mui/material"

export const DisplayData = ({ data }: { data: string }): JSX.Element => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: 640,
        }}
        data-testid={"display-data"}
      >
        <h4>GeoJson Data</h4>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </Paper>
    </>
  )
}
