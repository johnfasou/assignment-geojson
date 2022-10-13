export const Top = ({
  geoData,
  onChange,
}: {
  geoData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <label>
      Top longitude:
      <input
        type="text"
        name="top"
        value={geoData || ""}
        placeholder="top longitude (southernmost)"
        onChange={onChange}
      />
    </label>
  )
}
