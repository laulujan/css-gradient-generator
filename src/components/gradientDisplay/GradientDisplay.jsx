import React, {useState} from 'react';
import formatter from '../../utils/formatter'
import { CopyToClipboard } from "react-copy-to-clipboard";

const GradientDisplay = ({style, direction, firstColor, secondColor, name, author}) => {
    const [isCopied, setIsCopied] = useState(false);
    const cssFormatted = formatter(style, direction, firstColor, secondColor)
    const stylez = {
        background: cssFormatted
    }


  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

    return (
        <div>
            <div className="display" style={stylez}>
                <CopyToClipboard text={'background: ' + stylez.background} onCopy={onCopyText}>
                    <button id="copy">
                    <span>{isCopied ? "Copied!" : <img src="https://img.icons8.com/ios/20/000000/copy-2.png" alt="copy to clipboard"/>}</span>
                    </button>
                </CopyToClipboard>
                
            </div>
        </div>
    )
}

export default GradientDisplay
