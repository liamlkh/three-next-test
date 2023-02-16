import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return null
  // return (
  //   <Instructions>
  //     This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the{' '}
  //     <span className='text-cyan-200'>atoms nucleus</span> to navigate to the{' '}
  //     <span className='text-green-200'>/blob</span> page. OrbitControls are enabled by default.
  //   </Instructions>
  // )
}

Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
