import { useState } from "react"
import { GeoBoxType } from "../../types"
import { Bottom } from "./Bottom"
import { Left } from "./Left"
import { Right } from "./Right"
import { Top } from "./Top"

const initialGeoBox: GeoBoxType = {
  left: "44.8159610691",
  bottom: "20.4595548745",
  right: "44.8168609308",
  top: "20.4608191255",
}

export const GeoBoxForm = ({
  handleSubmit,
}: {
  handleSubmit: (geoBox: GeoBoxType) => void
}): JSX.Element => {
  const [geoBox, setGeoBox] = useState(initialGeoBox)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setGeoBox({
      ...geoBox,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          event.preventDefault()
          handleSubmit(geoBox)
        }}
      >
        <Left geoData={geoBox.left} onChange={onChange} />
        <Right geoData={geoBox.right} onChange={onChange} />
        <Top geoData={geoBox.top} onChange={onChange} />
        <Bottom geoData={geoBox.bottom} onChange={onChange} />
        <button type="submit">Get GeoJson data</button>
      </form>
    </>
  )
}
