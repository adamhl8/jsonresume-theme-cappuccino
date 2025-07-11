interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return (
    <div>
      <h3 className="font-lighter">{title}</h3>
      <div className="mt-1.5 mb-2.5 h-[1px] w-11 bg-secondary" />
    </div>
  )
}

export default Title
