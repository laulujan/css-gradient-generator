import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import GradientDisplay from '../gradientDisplay/GradientDisplay';
import createTemplate from '../../services/createTemplate';


const Generator = () => {
  const [style, setStyle] = useState('linear-gradient');
  const [direction, setDirection] = useState('to right bottom');
  const [firstColor, setFirstColor] = useState('#91CA62');
  const [secondColor, setSecondColor] = useState('#128061');
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("")

  const options = {
    'top-left': {
      radial: 'left top',
      linear: 'to right bottom'
    },
    'top': {
      radial: 'center top',
      linear: ''
    },
    'top-right': {
      radial: 'right top',
      linear: 'to left bottom'
    },
    'left': {
      radial: 'left center',
      linear: 'to right'
    },
    'center': {
      radial: 'at center center',
      linear: ''
    },
    'right': {
      radial: 'right center',
      linear: 'to left'
    },
    'bottom-left': {
      radial: 'left bottom',
      linear: 'to right top'
    },
    'bottom': {
      radial: 'center bottom',
      linear: 'to top'
    },
    'bottom-right': {
      radial: 'right bottom',
      linear: 'to left top'
    }
  }
  const onClickStyle = e => {
    e.preventDefault()
    setStyle(e.target.getAttribute('name'))
  }

  const onClickDirection = e => {
    if (style === 'linear-gradient') {
      setDirection(options[e].linear)
    }
    if (style === 'radial-gradient') {
      setDirection(options[e].radial)
    }
  }
  const onChangeColor = (e, func) => {
    func(e.target.value)
  }
   const loadTemplate = (template) => {
    setStyle(template.gradient_type);
    setDirection(template.direction);
    setFirstColor(template.first_color);
    setSecondColor(template.second_color)
   }

  const saveTemplate = async (name, author) => {
    const isStored = await createTemplate(name, author, style, direction, firstColor, secondColor)
    if(isStored){
      setName(name)
      setAuthor(author)
    }
    
  }

  return (
    <div>
      <Sidebar
        onClickStyle={onClickStyle}
        onClickDirection={onClickDirection}
        onChangeColor={onChangeColor}
        saveTemplate={saveTemplate}
        firstColor={firstColor}
        setFirstColor={setFirstColor}
        secondColor={secondColor}
        setSecondColor={setSecondColor}
        loadTemplate={loadTemplate}
      />
      <GradientDisplay 
        style={style}
        direction = {direction}
        firstColor={firstColor}
        secondColor={secondColor}
        name={name}
        author={author}
      />
    </div>
  )
}

export default Generator
