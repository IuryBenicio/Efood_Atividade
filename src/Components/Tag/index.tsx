import { TagContainer } from "./styles"

type Props = {
  children: string
}

const Tag = ({children}: Props) => (
  <>
    <TagContainer>
      <span>{children}</span>
    </TagContainer>
  </>
)

export default Tag
