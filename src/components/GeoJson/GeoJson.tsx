import { useState } from "react"
import { DisplayData } from "../DisplayData"
import { GeoBoxForm } from "../GeoBoxForm"
import { fetchOSMData } from "../../api/api"
import { GeoBoxType } from "../../types"
import { convertOsmToJson } from "../../helpers/convertOsmToJson"

export const GeoJson = (): JSX.Element => {
  const [jsonData, setJsonData] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const handleSubmit = async (geoBox: GeoBoxType): Promise<void> => {
    setLoading(true)
    const osm = await fetchOSMData(geoBox)
    if (osm === "") {
      setError("Something went wrong")
      setLoading(false)
      return
    }
    const json = await convertOsmToJson(osm.data)
    setJsonData(json)
    setLoading(false)
  }
  return (
    <>
      <GeoBoxForm
        clearDisplay={() => setJsonData("")}
        loading={loading}
        error={error}
        setError={setError}
        handleSubmit={handleSubmit}
      />
      {jsonData && <DisplayData data={jsonData} />}
    </>
  )
}
