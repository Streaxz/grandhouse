'use client';
import { MainLogo } from "@/app/icons/MainLogo";
import { MainHeader } from "@/app/components/MainHeader/MainHeader";
import { Navigation } from "@/app/components/Navigation/Navigation";
import { Catalog } from "@/app/components/Catalog/Catalog";
import {Works} from "@/app/components/Works/Works";
import React from "react";
import {Company} from "@/app/components/Company/Company";
import {Shortcuts} from "@/app/components/Shortcuts/Shorcuts";
import {ShortcutItem} from "@/app/components/ShortcutItem/ShortcutItem";
import {Prices} from "@/app/components/Prices/Prices";
import {Magazine} from "@/app/components/Magazine/Magazine";
import {Carousel} from "@/app/components/Carousel/Carousel";
import {Photo} from "@/app/components/PhotoCarousel/Photo";
import {PhotoButton} from "@/app/components/PhotoButton/PhotoButton";

export default function Home() {
    return (
      <main className={'App'}>
          <div className={'mainPageWrapper'}>
              <div className={'mainPage'}>
                  <MainLogo/>
                  <MainHeader/>
                  {/*<PhotoCarousel />*/}
                  <Carousel
                    isPagination={true}
                    swiperEffect={'slide'}
                  >
                      <Photo
                        labelText={"Новый проект"}
                        headerText={"House for a family"}
                        descriptionText={"Нажмите для просмотра"}
                        isSwiper={true}
                      />
                      <Photo
                        labelText={"Новый asdasd"}
                        headerText={"House for a family"}
                        descriptionText={"Нажмите для просмотра"}
                        isSwiper={true}
                      />
                  </Carousel>
                  <Navigation/>
                  <Catalog/>
                  <PhotoButton
                    backgroundSrc={"https://s3-alpha-sig.figma.com/img/3cf4/f18a/0ad9191b4d506abe39dd109697e63f60?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMq~jf5INhHeEXLlqh9Fm9DI-0jk5qUqojUW2rJLLS7r5M-Jk3nb~Z9dMBtx3DTG1ejcPdfq8x6FtW3snYeu7tN16zd0nc-pFolmMpQIaIyVIjqUhRmrfWFXBuOpxIZ547nROO45U5dbmRGinEwKWXvahu1uFOlymfPtelcGQlHPC6SmT2RC9j4KXF07eMAWqXVw62LjOFMF2Lvk6lUbSvvxsgRMrmWREngJdrcfCWlY9dGBTRLCHg0XRF06hOaf-N8YZwHElAZuxME2xVvP0cANSmTuie~~27ZG5F6X~dMO7W80Jo3dipjk1odc3INtL7FfN2nKQ~SgdDlNa0jrnQ__"}
                    buttonSrc={"https://s3-alpha-sig.figma.com/img/0331/b9ca/35b59c5d90199887587d716ed1c17322?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SuBL5HonaWdTGZSoVNXgNBfMd5IInsgcWG7nSBmXn6J6bljxWI-2CYBWLOgYo-LfCbnAvyzexqSXM6NzWWJ2HIKShkKS5HKcuXtkK4Q-nBpltlhUIpfGQocdk~v9s08ta4zIB9ZGp1DekNgHWfge3hLHYImwdgFCGuPPe4IctoAnZBMmjD3ogiKFWQVG24MoT66~64fgJJBAQwsRYhmwbGLrpI6DtwPVZAZpw04sfDgiACd7vrJnXxLWURHJiYq32bu-pL1OxqcYMfisZg2guQW97s-upJsRwaoqnyrPRZzoxubz9qqk~TZeveaIYqHHWUQDSlWYgAgkLAXoGHxCvg__"}
                    buttonText={"Обсудим ваши идеи?"}
                    descriptionText={"Наши менеджеры всегда на связи - свяжитесь с нами и мы предложим решения конкретно под ваши задачи"}
                  />
                  <div className="ellipse h-16 w-16"></div>
              </div>
          </div>
              <div className={'shortcutContainer'} style={{background: "#D4F2FF"}}>
                  <Shortcuts
                    backgroundColor={"white"}
                  >
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"test"}
                        description={"testsetstets"}
                        color={"black"}
                        descriptionColor={"rgba(98, 105, 140, 1)"}
                      />
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"test"}
                        description={"testsetstets"}
                        color={"black"}
                        descriptionColor={"rgba(98, 105, 140, 1)"}
                      />
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"test"}
                        description={"testsetstets"}
                        color={"black"}
                        descriptionColor={"rgba(98, 105, 140, 1)"}
                      />
                  </Shortcuts>
              </div>
              <Works/>
              <Company/>
              <div className={'shortcutContainer'} style={{background: "#10E17D"}}>
                  <Shortcuts backgroundColor={"#000000"}>
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"Заголовок ярлыка"}
                        description={"Подзаголовок Ярлыка"}
                        color={"#FFF"}
                        descriptionColor={"#62698C"}>
                      </ShortcutItem>
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"Заголовок ярлыка"}
                        description={"Подзаголовок Ярлыка"}
                        color={"#FFF"}
                        descriptionColor={"#62698C"}>
                      </ShortcutItem>
                      <ShortcutItem
                        src={'https://s3-alpha-sig.figma.com/img/39d3/2bb4/ae6cd8eaa3e1b20e5370742cee2cef22?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppk16v71CP45W9a-BfDkDukVZtR3-0ZvrSHRmNp~aXQW~qan5JDGOaNXrvyGMXrT7qPbZlI79er9wO8WixlPKBxDxJTaR8UFU5iSoi7mletRs4b4Cvu4q~AakiZ8WSyTLcK95ydOnTw1uJv~FhDa6C63yK92cUsBpj4ZV6X84GkeoqKE7ZhtC78laf4k1X6AW--f7kL9-K-S11ZS1hp4f6hI814jH5i~1hUMoc0d7KscVJPMtnAQcQ~-4sFlnU-xh9VBMpLmN02i6zxE3FI~rQlm7Pov73DN~FX6YyC~8ITZan0yME1zI5wHrCgxcV8Oynb-C6OXlsEanBJTk23Y6Q__'}
                        title={"Заголовок ярлыка"}
                        description={"Подзаголовок Ярлыка"}
                        color={"#FFF"}
                        descriptionColor={"#62698C"}>
                      </ShortcutItem>
                  </Shortcuts>
              </div>
              <Prices/>
              {/*<Reviews/>*/}
              <Magazine/>
      </main>
    );
}
