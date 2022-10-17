import {
  Card,
  Button,
  Box,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material"
import { useState } from "react"
import { GeoBoxType } from "../../types"
import { Coordinate } from "./Coordinate"
import { formValidators } from "./formValidators"

const initialGeoBox: GeoBoxType = {
  left: "44.8159610691",
  bottom: "20.4595548745",
  right: "44.8168609308",
  top: "20.4608191255",
}

export const GeoBoxForm = ({
  clearDisplay,
  error,
  setError,
  loading,
  handleSubmit,
}: {
  clearDisplay: () => void
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
  handleSubmit: (geoBox: GeoBoxType) => void
}): JSX.Element => {
  const [geoBox, setGeoBox] = useState<GeoBoxType>(initialGeoBox)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGeoBox({
      ...geoBox,
      [event.target.name]: event.target.value,
    })
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    clearDisplay()

    const error = formValidators(geoBox)
    if (error) {
      setError(error)
      return
    }
    setError("")
    handleSubmit(geoBox)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            margin: "15px",
          }}
        >
          <Card>
            <Coordinate
              name="left"
              label="Left longitude:"
              placeholder="wester-nmost"
              geoData={geoBox.left}
              onChange={onChange}
            />
            <Coordinate
              name="right"
              label="Right longitude:"
              placeholder="eastern-most"
              geoData={geoBox.right}
              onChange={onChange}
            />
          </Card>

          <Card>
            <Coordinate
              name="bottom"
              label="Bottom latitude:"
              placeholder="southern-most"
              geoData={geoBox.bottom}
              onChange={onChange}
            />

            <Coordinate
              name="top"
              label="Top latitude:"
              placeholder="northern-most"
              geoData={geoBox.top}
              onChange={onChange}
            />
          </Card>
        </Box>

        <Box
          sx={{
            margin: "15px",
            display: "flex",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "7px",
              margin: "10px",
            }}
          >
            Get GeoJson
          </Button>
          {loading && <CircularProgress size={30} sx={{ marginTop: "11px" }} />}
        </Box>
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
      </form>
    </>
  )
}
