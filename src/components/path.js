import Base from './Base'
class Path extends Base {
  get perimeter() {
    return this.props.pathLength
  }
  render() {
    const { width, height, isDashed, pathLength, d } = this.props
    const { maskID } = this.state
    return (
      <svg width={width} height={height}>
        {isDashed && (
          <mask id={maskID}>
            <path className="progress-all__mask" pathLength={pathLength} d={d} style={this.maskStyle} />
          </mask>
        )}
        <g>
          <path
            className="progress-path__back"
            pathLength={pathLength}
            fill="none"
            d={d}
            style={this.backgroundStyle}
          />
          <path className="progress-path__item" pathLength={pathLength} d={d} style={this.style} />
        </g>
      </svg>
    )
  }
}

export default Path
