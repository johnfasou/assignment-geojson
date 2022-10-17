import validator from "validator"
import { GeoBoxType } from "../../types"

export const formValidators = (geoBox: GeoBoxType): string => {
  if (!geoBox.bottom || !geoBox.left || !geoBox.right || !geoBox.top) {
    return "Please enter all Coordinates"
  }
  if (
    !validator.isLatLong(`${geoBox.top},${geoBox.left}`) ||
    !validator.isLatLong(`${geoBox.bottom},${geoBox.right}`)
  ) {
    return "Please enter valid Coordinates"
  }
  if (parseFloat(geoBox.top) < parseFloat(geoBox.bottom)) {
    return "Top latitude should be bigger than Bottom latitude"
  }
  if (parseFloat(geoBox.left) > parseFloat(geoBox.right)) {
    return "Right longitude should be bigger than Left longitude"
  }

  return ""
}
