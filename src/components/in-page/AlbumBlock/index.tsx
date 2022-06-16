import classNames from 'clsx'
import { useInitialData } from 'hooks/use-initial-data'
import { observer } from 'mobx-react-lite'
import Router from 'next/router'
import React, { FC, useCallback, useMemo } from 'react'
import removeMd from 'remove-markdown'
import { useStore } from 'store'
import { springScrollToTop } from 'utils/spring'
import { parseDate } from 'utils/time'
import styles from './index.module.css'

interface AlbumBlockProps {
  id: string
  name: string
  slug: string
  count?: number
}

export const AlbumBlock: FC<AlbumBlockProps> = observer((props) => {
  const {
    appStore: { viewport },
  } = useStore()
  const { id, name, slug, count } = props

  const goToPost = useCallback(() => {
    Router.push('/photos/[album]', `/photos/${slug}`)
    springScrollToTop()
  }, [slug, slug])
  return (
    <>
      <h1 className={classNames(styles.head, 'headline')}>
        <div className="inline-flex items-center">
        {name}({count})
        </div>
        {!viewport?.mobile && (
          <div className={styles.title} onClick={goToPost}>
            {name}
          </div>
        )}
      </h1>
      <div className={styles.text}>
        {/* {viewport?.mobile && (
          <h2 className={styles.title} onClick={goToPost}>
            {name}
          </h2>
        )} */}
        <section className={styles.navigator}>
          <button className={styles.btn} onClick={goToPost}>
            打开相集
          </button>
        </section>
      </div>
      
      <div className="pb-8 mb-4"></div>
    </>
  )
})
