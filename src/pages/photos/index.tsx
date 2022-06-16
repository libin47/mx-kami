import { Pager, PaginateResult, AlbumModel } from 'api-client'
import { AlbumBlock } from 'components/in-page/AlbumBlock'
import { TagFAB } from 'components/in-page/SpecialButton/float-post-tag'
import { ArticleLayout } from 'components/layouts/ArticleLayout'
import { EmptyIcon } from 'components/universal/Icons'
import { BottomUpTransitionView } from 'components/universal/Transition/bottom-up'
import { SearchFAB } from 'components/widgets/Search'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { apiClient } from 'utils/client'
import { SEO } from '../../components/universal/Seo'

const AlbumsListPage: NextPage<PaginateResult<AlbumModel>> = () => {
  const [posts, setPosts] = useState<AlbumModel[]>([])

  const router = useRouter()

  useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page, router.query.year])
  const fetch = async () => {
    const payload = await apiClient.album.getAllAlbums()
    setPosts(payload.data)
  }

  return (
    <ArticleLayout>
      <SEO title={'相册'} />

      <TransitionGroup>
        <article key={'album'}>
          {posts.length > 0 ? (
            <Fragment>
              {posts.map((post, i) => {
                const { id, name, slug, count } = post

                return (
                  <BottomUpTransitionView key={id} timeout={{ enter: 250 * i }}>
                    <AlbumBlock
                      name={name}
                      id={id}
                      slug={slug}
                      count={count}
                    />
                  </BottomUpTransitionView>
                )
              })}
            </Fragment>
          ) : (
            <div className="flex flex-col">
              <EmptyIcon />
              <p>站长没有上传过照片</p>
              <p>稍后来看看吧!</p>
            </div>
          )}
        </article>
      </TransitionGroup>

      <TagFAB />
      <SearchFAB />
    </ArticleLayout>
  )
}

export default AlbumsListPage
