import Base from './Base'
import React from 'react'
class Line extends Base {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.progressBar = React.createRef()
  }
  componentDidMount() {
    if (this.props.isDashed) {
      const width = this.progressBar.current.clientWidth
      const length = Number(this.dashedLength) + Number(this.dashedDistance)
      this.state.count = Math.ceil(width / length) + 1
    }
  }
  get dashItemStyle() {
    const style = {}
    const { dashedLength, dashedDistance } = this.props
    style.width = dashedLength + 'px'
    style.marginRight = dashedDistance + 'px'
    return style
  }
  get dashOuterItemStyle() {
    const style = {}
    const { backStrokeColor } = this.props
    style.background = backStrokeColor
    style.zIndex = 10
    return { ...this.dashItemStyle, ...style }
  }
  get dashInnerItemStyle() {
    const style = {}
    style.background = this.currentStrokeColor
    style.zIndex = 99
    return { ...this.dashItemStyle, ...style }
  }
  get dashInnerStyle() {
    const style = {}
    const { percentage } = this.props
    style.width = percentage + '%'
    return style
  }
  get barStyle() {
    const style = {}
    const { percentage, isTransition } = this.props
    style.width = percentage + '%'
    style.background = this.currentStrokeColor
    style.transition = isTransition ? 'width 0.6s ease' : ''
    return style
  }
  get outBarStyle() {
    const style = {}
    const { isDashed, isBackDashed, backStrokeColor } = this.props
    if (isDashed && isBackDashed) {
      return style
    }
    style.background = backStrokeColor
    return style
  }
  render() {
    const { isDashed, isBackDashed, showText } = this.props
    const count = this.state.count
    const dashOuterItem = new Array(count).fill(<div className="item" style={this.dashOuterItemStyle}></div>)
    const dashInnerItem = new Array(count).fill(<div className="item" style={this.dashOuterItemStyle}></div>)
    return (
      <div ref={this.progressBar} className="progress-bar-outer" style={this.outBarStyle}>
        {isDashed ? (
          <div className="progress-bar-inner-dashed">
            {isBackDashed && <div className="back-dash">{dashOuterItem}</div>}

            <div className="inner-dash" style={this.dashInnerStyle}>
              {dashInnerItem}
            </div>
          </div>
        ) : (
          <div className="progress-bar-inner" style={this.barStyle}>
            {showText && (
              <div className="progress-bar-text" style={this.textStyle}>
                {this.content}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Line
