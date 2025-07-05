interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <div className="title">
      <h3>{title}</h3>
      <div className="keyline" />
    </div>
  )
}

export default Title
