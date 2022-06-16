import classNames from 'clsx'
import { useInitialData } from 'hooks/use-initial-data'
import { observer } from 'mobx-react-lite'
import Router from 'next/router'
import React, { FC, useCallback, useEffect, useState } from 'react'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'
import removeMd from 'remove-markdown'
import { useStore } from 'store'
import { springScrollToTop } from 'utils/spring'
import { parseDate } from 'utils/time'
import styles from './index.module.css'
import { apiClient } from 'utils/client'
import { PhotoModel} from 'api-client'


interface AlbumDeBlockProps {
  id: string
  title: string
  slug: string
  created: string
  album: string
}

export const AlbumDeBlock: FC<AlbumDeBlockProps> = observer((props) => {
  const [phdata, setPhdata] = useState<PhotoModel>()
  const { id, title, slug, created, album } = props
  const fetch = async () => {
    const payload = await apiClient.photo.getPhotoByID(id)
    setPhdata(payload)
    console.log(payload)
  }
  useEffect(() => {
    fetch()
  }, [id])


  const goToPhoto = useCallback(() => {
    Router.push('/photos/[album]/[slug]', `/photos/${album}/${slug}`)
    springScrollToTop()
  }, [album, slug])

  return (
    <div className={styles.main}>
      <div className={styles.album}  onClick={goToPhoto}>
        <div className={styles.top}> 
          <img style={phdata&&(phdata.photos.length<1)?{display:"none"}:{}} className={styles.image0} src={'https://image.wind-watcher.cn/'+phdata?.photos[0]+'?w=512'}></img>
          <img style={phdata&&(phdata.photos.length<2)?{display:"none"}:{}} className={styles.image1} src={'https://image.wind-watcher.cn/'+phdata?.photos[1]+'?w=512'}></img>
          <img style={phdata&&(phdata.photos.length<3)?{display:"none"}:{}} className={styles.image2} src={'https://image.wind-watcher.cn/'+phdata?.photos[2]+'?w=512'}></img>
          <img style={phdata&&(phdata.photos.length<4)?{display:"none"}:{}} className={styles.image3} src={'https://image.wind-watcher.cn/'+phdata?.photos[3]+'?w=512'}></img>
          <img style={phdata&&(phdata.photos.length<5)?{display:"none"}:{}} className={styles.image4} src={'https://image.wind-watcher.cn/'+phdata?.photos[4]+'?w=512'}></img>
        </div>
        <div className={styles.down}>{phdata?.title}({phdata?.photos.length})</div>
      </div>

        {/* {viewport?.mobile && (
          <h2 className={styles.title} onClick={goToPost}>
            {name}
          </h2>
        )} */}
        
        {/* <section className={styles.navigator}>
          <button className={styles.btn} onClick={goToPost}>
            打开相集
          </button>
        </section> */}
      
      {/* <div className="pb-8 mb-4"></div> */}
    </div>
  )
})
