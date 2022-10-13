import { useState } from "react"
import { DisplayData } from "../DisplayData"
import { GeoBoxForm } from "../GeoBoxForm"
import { fetchOSMData } from "../../api/api"
import { GeoBoxType } from "../../types"
import { convertOsmToJson } from "../../helpers/convertOsmToJson"

export const GeoJson = (): JSX.Element => {
  const [jsonData, setJsonData] = useState<string>("")
  const handleSubmit = async (geoBox: GeoBoxType): Promise<void> => {
    const osm = await fetchOSMData(geoBox)
    const json = await convertOsmToJson(osm)
    setJsonData(json || "")
  }

  return (
    <>
      <GeoBoxForm handleSubmit={handleSubmit} />
      <DisplayData data={jsonData} />
    </>
  )
}
