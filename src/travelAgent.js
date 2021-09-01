function movePerson(p, newRegion, pos, swapDir) {
  console.log(newRegion, pos, swapDir)
  p.regions[p.region].removeChild(p.canvas)
  p.regions[newRegion].appendChild(p.canvas)
  p.setRegion(newRegion)
  p.setPos(pos)

  if (swapDir) {
    p.faceDir === 'l' ? p.setFaceDir('r') : p.setFaceDir('l')
  }
}

export function travelAgent(p) {
  switch (p.region) {
    case 'home':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        movePerson(p, 'travelLeft', p.pos, true)
      }
      if (p.faceDir === 'r' && p.pos > p.coords.homeBounds[1]) {
        movePerson(p, 'travelRight', p.coords.travelBounds[1], true)
      }
      break
    case 'travelLeft':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        console.log('out left travel')
      }
      if (p.faceDir === 'r' && p.pos > p.coords.travelBounds[1]) {
        if (p.job === 'farm') {
          movePerson(p, 'farm', p.coords.jobBounds[1], true)
        }
        if (p.job === 'mine') {
          movePerson(p, 'mine', p.coords.jobBounds[0] - p.canvas.width, false)
        }
        if (p.job === 'labs') {
          movePerson(p, 'labs', p.coords.jobBounds[0] - p.canvas.width, false)
        }
      }
      break
    case 'travelRight':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        if (p.job === 'farm') {
          movePerson(p, 'farm', p.coords.jobBounds[1], false)
        }
        if (p.job === 'mine') {
          movePerson(p, 'mine', p.coords.jobBounds[1], false)
        }
        if (p.job === 'labs') {
          movePerson(p, 'labs', p.coords.jobBounds[0] - p.canvas.width, true)
        }
      }
      if (p.faceDir === 'r' && p.pos > p.coords.travelBounds[1]) {
        console.log('out right travel')
      }
      break
    case 'farm':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        console.log('out left farm')
      }
      if (p.faceDir === 'r' && p.pos > p.coords.jobBounds[1]) {
        console.log('out right farm')
      }
      break
    case 'mine':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        console.log('out left mine')
      }
      if (p.faceDir === 'r' && p.pos > p.coords.jobBounds[1]) {
        console.log('out right mine')
      }
      break
    case 'labs':
      if (p.faceDir === 'l' && p.pos < 0 - p.canvas.width) {
        console.log('out left labs')
      }
      if (p.faceDir === 'r' && p.pos > p.coords.jobBounds[1]) {
        console.log('out right labs')
      }
      break
    default: break
  }
}
