import { ArticleLayout } from 'components/layouts/ArticleLayout'

import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { useStore } from 'store'
import { apiClient } from 'utils/client'
import { PhotoModel } from 'api-client'
import { EmptyIcon } from 'components/universal/Icons'
import { transitionStyles } from 'components/universal/Transition/bottom-up'
import { TransitionGroup } from 'react-transition-group'
import { SEO } from '../../../components/universal/Seo'
import { BaseTransitionView, BaseTransitionViewProps } from 'components/universal/Transition/base'
import { TransitionProps } from 'react-transition-group/Transition'
import { Image } from 'antd'
import 'antd/dist/antd.css'

const AlbumView: React.FC<{ id: string }> = observer((props) => {
  const [data, setData] = useState<PhotoModel>()
  const {
    appStore: { viewport },
  } = useStore()
  const router = useRouter()
  const album = router.query.album
  const slug = router.query.slug
  let albumslug = ''
  let photoslug = ''
  if(typeof album == 'string'){
    albumslug = album
  }
  if(typeof slug == 'string'){
    photoslug = slug
  }

  useEffect(() => {
    fetch()
  }, [router.query.album, router.query.slug])
  const fetch = async () => {
    const payload = await apiClient.photo.getPhotoBySlug(albumslug, photoslug)
    setData(payload)
  }

  const defaultStyle = viewport?.mobile?{
    opacity: 0,
    display: 'inline-block',
    width: '50%',
    height: '120px'
  }:{
    opacity: 0,
    display: 'inline-block',
    width: '50%',
    height: '200px'
  }
  
  const BottomUpTransitionView: FC<
    BaseTransitionViewProps & Partial<TransitionProps>
  > = BaseTransitionView(defaultStyle, transitionStyles)


  return (
    <>
    <ArticleLayout
      title={data?.album?.name + '-' + data?.title}
      subtitle={['共有' + data?.photos?.length + '张相片', data?.text?data.text:'']}>
      <SEO title={'相册'} />
      <TransitionGroup>
      {data && data?.photos?.length > 0 ? (
            <>
            <Image.PreviewGroup>
              {data.photos.map((photo, i) => {
                return (
                  <BottomUpTransitionView key={photo} timeout={{ enter: 250 * i } }>
                    <Image  style={{"objectFit": "contain", "padding":"0.5rem"}} width="100%" src={'https://image.wind-watcher.cn/'+photo} />
                 </BottomUpTransitionView>
                )
              })}
            </Image.PreviewGroup>
            </>
          ) : (
            <div className="flex flex-col">
              <EmptyIcon />
              <p>这个相集还是空的喔~</p>
            </div>
          )}
      </TransitionGroup>
    </ArticleLayout>
    </>
  )
})

export default AlbumView
