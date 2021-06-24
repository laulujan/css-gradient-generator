import React from 'react'
import Collapse from '../collapse/Collapse'
import Modal from '../modal/Modal'
import useModal from '../../utils/hooks/useModal'

const Sidebar = ({
  onClickStyle,
  onClickDirection,
  onChangeColor,
  saveTemplate,
  firstColor,
  setFirstColor,
  secondColor,
  setSecondColor,
  loadTemplate
}) => {
  const { toggle, visible } = useModal()

  return (
    <div className='sidebar'>
      <h1>Gradient Generator</h1>
      <Collapse loadTemplate={loadTemplate} />
      <h2>Generate template</h2>
      <div>
        <span>Style</span>
        <button name='linear-gradient' onClick={onClickStyle}>
          Linear
        </button>
        <button name='radial-gradient' onClick={onClickStyle}>
          Radial
        </button>
      </div>
      <div>
        <span>Direction</span>
        <button type='button' onClick={() => onClickDirection('top-left')}>
          <img
            src='https://img.icons8.com/fluent-systems-filled/10/000000/up-left-arrow.png'
            alt='top left'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('top')}>
          <img
            src='https://img.icons8.com/fluent-systems-filled/10/000000/long-arrow-up.png'
            alt='center top '
          />
        </button>
        <button type='button' onClick={() => onClickDirection('top-right')}>
          <img
            src='https://img.icons8.com/fluent-systems-filled/10/000000/up-right-arrow.png'
            alt='top right'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('left')}>
          <img
            src='https://img.icons8.com/fluent-systems-filled/10/000000/long-arrow-left.png'
            alt='left'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('center')}>
          <img
            src='https://img.icons8.com/material-rounded/10/000000/circled.png'
            alt='center'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('right')}>
          <img
            src='https://img.icons8.com/ios-glyphs/10/000000/long-arrow-right.png'
            alt='right'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('bottom-left')}>
          <img
            src='https://img.icons8.com/fluent-systems-filled/10/000000/down-left-arrow.png'
            alt='bottom left'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('bottom')}>
          <img
            src='https://img.icons8.com/windows/10/000000/long-arrow-down.png'
            alt='bottom'
          />
        </button>
        <button type='button' onClick={() => onClickDirection('bottom-right')}>
          <img
            src='https://img.icons8.com/ios-filled/10/000000/down-right-arrow.png'
            alt='down right'
          />
        </button>
      </div>
      <div>
        <span>Colors</span>
        <input
          type='color'
          value={firstColor}
          onChange={e => onChangeColor(e, setFirstColor)}
        />
        <input
          type='color'
          value={secondColor}
          onChange={e => onChangeColor(e, setSecondColor)}
        />
      </div>
      <button onClick={toggle}>Save Template</button>
      <Modal visible={visible} toggle={toggle} saveTemplate={saveTemplate} />
    </div>
  )
}

export default Sidebar
