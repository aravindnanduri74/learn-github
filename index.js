import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const index = (props) => {
  return (
    <div>index</div>
  )
}

index.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)