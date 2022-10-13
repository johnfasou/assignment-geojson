export const Bottom = ({
  geoData,
  onChange,
}: {
  geoData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <label>
      Bottom longitude:
      <input
        type="text"
        name="bottom"
        value={geoData || ""}
        placeholder="bottom longitude (southernmost)"
        onChange={onChange}
      />
    </label>
  )
}
