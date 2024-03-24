import {
  Anchor,
  Button,
  H1,
  H4,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
  Image
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: 'https://base.party.app/party/0x48B40D6D56988bD25707609BD0FF42725300431E',
  })
  const coinProps = useLink({
    href: 'https://base.party.app/party/0x48B40D6D56988bD25707609BD0FF42725300431E',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" gap="$4">
      <YStack gap="$4" bc="$background">
        <Image source={{ uri:"bingbong.png", width:585, height: 400  }} alt="Bing Bong" />
        <H4 ta="center">STAND CLEAR OF THE CLOSING DOORS</H4>
        <H1 ta="center">BING BONG </H1>
        <Paragraph ta="center">
          A testament to public infrastruture - mostly for fun
        </Paragraph>

        <Paragraph ta="center">
          BING BONG, as made popular by sidetalk NYC{' '}
          <Anchor color="$color12" href="https://www.youtube.com/watch?v=2-oCNXMsMvg" target="_blank">
            in this video
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>DAO link</Button>
        {/* <Button {...linkProps}>coin launch link</Button> */}
      </XStack>

    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
