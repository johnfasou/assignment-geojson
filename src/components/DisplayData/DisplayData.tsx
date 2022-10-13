import { Card, Paper } from "@mui/material"

export const DisplayData = ({ data }: { data: string }): JSX.Element => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: 640,
        }}
      >
        <h4>GeoJson Data</h4>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Paper>
    </>
  )
}
