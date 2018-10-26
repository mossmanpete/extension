const { Component } = require('react')
const PropTypes = require('prop-types')
const h = require('react-hyperscript')
const ClearyBot = require('../../clearybot')

class Info extends Component {
  constructor (props) {
    super(props)

    this.state = {
      version: global.platform.getVersion(),
    }
  }

  renderInfoLinks () {
    return (
      h('div.settings__content-item.settings__content-item--without-height', [
        h('div.settings__info-link-header', this.context.t('links')),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://clearcoin.co/privacy-policy',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('privacyMsg')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://clearcoin.co/terms-conditions',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('terms')),
          ]),
        ]),
        h('hr.settings__info-separator'),
        h('div.settings__info-link-item', [
          h('a', {
            href: 'https://clearcoin.co/',
            target: '_blank',
          }, [
            h('span.settings__info-link', this.context.t('visitWebSite')),
          ]),
        ]),
        h('div.settings__info-link-item', [
          h('a', {
            target: '_blank',
            href: 'mailto:help@clearcoin.co?subject=Extension Feedback',
          }, [
            h('span.settings__info-link', this.context.t('emailUs')),
          ]),
        ]),
      ])
    )
  }

  render () {
    return (
      h('div.settings__content', [
        h('div.settings__content-row', [
          h('div.settings__content-item.settings__content-item--without-height', [
            h(ClearyBot),
            h('div.settings__info-item', [
              h('div.settings__info-version-header', 'ClearCoin Version'),
              h('div.settings__info-version-number', this.state.version),
            ]),
            h('div.settings__info-item', [
              h(
                'div.settings__info-about',
                this.context.t('builtInCalifornia')
              ),
            ]),
          ]),
          this.renderInfoLinks(),
        ]),
      ])
    )
  }
}

Info.propTypes = {
  tab: PropTypes.string,
  metamask: PropTypes.object,
  setCurrentCurrency: PropTypes.func,
  setRpcTarget: PropTypes.func,
  displayWarning: PropTypes.func,
  revealSeedConfirmation: PropTypes.func,
  warning: PropTypes.string,
  location: PropTypes.object,
  history: PropTypes.object,
  t: PropTypes.func,
}

Info.contextTypes = {
  t: PropTypes.func,
}

module.exports = Info
