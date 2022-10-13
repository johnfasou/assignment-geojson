export const Left = ({
  geoData,
  onChange,
}: {
  geoData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <label>
      Left longitude:
      <input
        type="text"
        name="left"
        value={geoData || ""}
        placeholder="left longitude (southernmost)"
        onChange={onChange}
      />
    </label>
  )
}
