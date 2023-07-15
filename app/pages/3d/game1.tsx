import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useEffect } from 'react'

type Props = {
  title: string
}

export default function Index({ title }: Props) {


  useEffect(() => {

    const canvas: HTMLElement = document.querySelector('#canvas')
    const canvasWidh = canvas.offsetWidth
    const canvasHeight = canvas.offsetHeight


    // シーン
    const scene = new THREE.Scene()

    // サイズ
    let sizes = {
      width: canvasWidh,
      height: canvasHeight
    }

    console.log(`size:${sizes}`)
    console.log(sizes)

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: true,
      alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)

    // ボックスジオメトリー
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshLambertMaterial({
      color: '#2497f0'
    })
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    box.position.z = -5
    box.rotation.set(10, 10, 10)
    scene.add(box)

    // ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 0.2)
    pointLight.position.set(1, 2, 3)
    scene.add(pointLight)

    // アニメーション
    const clock = new THREE.Clock()
    const tick = () => {
      const elapsedTime = clock.getElapsedTime()
      box.rotation.x = elapsedTime
      box.rotation.y = elapsedTime
      window.requestAnimationFrame(tick)
      renderer.render(scene, camera)
    }
    tick()

    // ブラウザのリサイズ処理
    window.addEventListener('resize', () => {

      const canvas: HTMLElement = document.querySelector('#canvas')
      const canvasWidh = canvas.offsetWidth
      const canvasHeight = canvas.offsetHeight
      sizes.width = canvasWidh
      sizes.height = canvasHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(window.devicePixelRatio)
    })
  }, [])

  return (

    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gray-800 text-white p-4">Header</header>

        <canvas id="canvas" className="flex-1 p-4"></canvas>

        <footer className="bg-gray-800 text-white p-4">Footer</footer>
      </div>

    </>
  )
}


