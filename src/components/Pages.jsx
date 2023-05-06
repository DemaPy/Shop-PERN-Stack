import {Pagination} from 'react-bootstrap'
import {observer} from "mobx-react-lite"
import { useAppContext } from '../store/userContext'




export const Pages = observer(() => {
  const {device} = useAppContext()
  const pagesCount = Math.ceil(device.totalCount / device.limit)
  const pages = []

  for (let index = 0; index < pagesCount; index++) {
    pages.push(index + 1)
  }

  const setActivePage = (page) => {
    device.setActivePage(page)
  }

  return (
    <Pagination className='mt-5'>
      {pages.map((page, index) => <Pagination.Item
        active={device.activePage === page}
        onClick={() => setActivePage(page)}
        key={index}>
        {page}
      </Pagination.Item>)}
    </Pagination>
  )
})
