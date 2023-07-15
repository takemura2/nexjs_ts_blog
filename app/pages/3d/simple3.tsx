import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useEffect } from 'react'

type Props = {
  title: string
}

export default function Index({ title }: Props) {

  let canvas: HTMLElement
  useEffect(() => {
    if (canvas) return
    // canvasを取得
    canvas = document.getElementById('canvas')!

    // シーン
    const scene = new THREE.Scene()

    // サイズ
    const sizes = {
      width: innerWidth,
      height: innerHeight
    }

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    )
    camera.position.z = 5;

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: true,
      alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(window.devicePixelRatio)



    // ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 0.2)
    pointLight.position.set(1, 2, 3)
    scene.add(pointLight)



    // マウスで回転拡大コントロール
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // 軸ヘルパー(X:赤 Y:緑 Z:青)
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // ジオメトリ
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    function addGeometory() {

      const WIDH = 5
      const HEIGHT = WIDH * 1.1

      let plane = new THREE.PlaneGeometry(WIDH, HEIGHT,9,9);
      let material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe:true
      });
      let mesh = new THREE.Mesh(plane, material);
      
      scene.add(mesh);
      

    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onClick(event) {
      event.preventDefault();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);
      for( const inspect of intersects){
        console.log(inspect)
      }

      if (intersects.length > 0) {
        let obj = intersects[0].object
  
        // intersects[0].object.material.color.set(Math.random() * 0xffffff);
      }
    }

    window.addEventListener('click', onClick, false);

    addGeometory();

    // アニメーション
    const tick = () => {

      window.requestAnimationFrame(tick)
      controls.update();
      renderer.render(scene, camera)
    }
    tick()

    // ブラウザのリサイズ処理
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(window.devicePixelRatio)
    })
  }, [])

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  )
}


