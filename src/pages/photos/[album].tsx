import { ArticleLayout } from 'components/layouts/ArticleLayout'

import { observer } from 'mobx-react-lite'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { FC, Fragment, useEffect, useMemo, useRef, useState } from 'react'

import { apiClient } from 'utils/client'
import { Pager, PaginateResult, PhotosModel, AlbumDeModel } from 'api-client'
import { AlbumDeBlock } from 'components/in-page/AlbumDeBlock'
import { TagFAB } from 'components/in-page/SpecialButton/float-post-tag'
import { EmptyIcon } from 'components/universal/Icons'
import { transitionStyles } from 'components/universal/Transition/bottom-up'
import { SearchFAB } from 'components/widgets/Search'
import { TransitionGroup } from 'react-transition-group'
import { SEO } from '../../components/universal/Seo'
import { TransitionProps } from 'react-transition-group/Transition'
import { BaseTransitionView, BaseTransitionViewProps } from 'components/universal/Transition/base'

const AlbumView: React.FC<{ id: string }> = observer((props) => {
  const [albmData, setAlbumData] = useState<AlbumDeModel>()
  const [data, setData] = useState<PhotosModel[]>([])
  const router = useRouter()
  const album = router.query.album
  let albumslug = ''
  if(typeof album == 'string'){
    albumslug = album
  }
  useEffect(() => {
    fetch()
  }, [router.query.album])
  const fetch = async () => {
    const payload = await apiClient.album.getAlbum(albumslug)
    console.log(payload)
    setAlbumData(payload.data)
    setData(payload.data.children)
  }

  const defaultStyle = {
    opacity: 0,
    display: 'inline-block',
    width: '12rem',
  }
  
  const BottomUpTransitionView: FC<
    BaseTransitionViewProps & Partial<TransitionProps>
  > = BaseTransitionView(defaultStyle, transitionStyles)

  return (
    <>
    <ArticleLayout
      title={'相集 - ' + albmData?.name}
      subtitle={'当前共有' + data?.length + '个相册, 加油!'}>
      <SEO title={'相册'} />
      <TransitionGroup>
        <article key={'album'}>
          {data?.length > 0 ? (
            <Fragment>
              {data.map((album, i) => {
                const { id, title, slug, created } = album

                return (
                  <BottomUpTransitionView key={id} timeout={{ enter: 250 * i } }>
                    <AlbumDeBlock
                      title={title}
                      id={id}
                      slug={slug}
                      created={created}
                      album={albumslug}
                    />
                  </BottomUpTransitionView>
                )
              })}
            </Fragment>
          ) : (
            <div className="flex flex-col">
              <EmptyIcon />
              <p>这个相集还是空的喔~</p>
            </div>
          )}
        </article>
      </TransitionGroup>

      <TagFAB />
      <SearchFAB />
    </ArticleLayout>
    </>
  )
})

export default AlbumView
