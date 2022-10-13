import { Card, Paper } from "@mui/material"

export const DisplayData = ({ data }: { data: string }): JSX.Element => {
  return (
    <>
      <Card
        sx={{
          width: 480,
        }}
      >
        <h3>GeoJson Data</h3>
        <Paper elevation={3}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Paper>
      </Card>
    </>
  )
}
