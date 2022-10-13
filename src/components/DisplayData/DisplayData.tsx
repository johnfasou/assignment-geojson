export const DisplayData = ({ data }: { data: string }): JSX.Element => {
  return (
    <>
      <h3>Display Data</h3>
      <div>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}
