export const Right = ({
  geoData,
  onChange,
}: {
  geoData: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <label>
      Right longitude:
      <input
        type="text"
        name="right"
        value={geoData || ""}
        placeholder="right longitude (southernmost)"
        onChange={onChange}
      />
    </label>
  )
}
